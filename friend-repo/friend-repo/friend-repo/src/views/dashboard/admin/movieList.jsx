import React, { useEffect, useState } from 'react'
import AddMovieCard from '../../../components/addMovieForm'
import SearchBar from '@/components/searchbar';
import { BookMarked } from "lucide-react";
import PaginationDesign from '@/components/paginationDesign';
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEdit2Line } from "react-icons/ri";
import ConfirmationCard from '@/components/confirmationCard';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios'





const MovieList = () => {
  const [date, setDate] = React.useState();
  const [dateOpen, setDateOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);


  const fetchMovies = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      console.log("token is", token);

      if (!token) {
        console.error("No token found, user might not be logged in.");
        return;
      }

      const response = await axios.get("http://localhost:1111/api/movie/findAllMovie", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response is-", response);
      setMovies(response.data); // Assuming response.data is an array of movies
    } catch (error) {
      console.error("Error fetching movies:", error.response ? error.response.data : error.message);
    }
  };



  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    console.log("date:", date);
    setDateOpen(!dateOpen)
  }, [date])


  // Handle delete confirmation
  const confirmDelete = (movie) => {
    setSelectedMovie(movie);
    setShowConfirm(true);
  };

  // Handle theater deletion
  const handleDelete = async () => {
    if (!selectedMovie) return;

    try {
      const response = await axios.delete(`http://localhost:1111/api/movie/deleteMovie/${selectedMovie.movieId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (response.status === 200) {
        setShowConfirm(false);
        setSelectedMovie(null);
        fetchMovies(); // Refresh list
      } else {
        alert("Failed to delete movie.");
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (


    <div className='w-full max-h-full'>
      <div>
        <div className='mt-8 ml-8'>
          <h1 className='text-3xl font-semibold'>Movie<span className='text-red-500'>List</span></h1>
        </div>
        <div className='pt-10 flex justify-center items-center'>
          <SearchBar className='w-[93%]' />
        </div>
        <div className="flex flex-wrap justify-center items-center mt-10 ml-3  gap-5">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="w-56 h-[350px] bg-white rounded-xl overflow-hidden shadow-lg pb-3">
                {/* Movie Image */}
                <div className="relative w-full flex justify-center items-center pt-2 group">
                  <img src={movie.postUrl} alt={movie.title} className="w-52 h-52 rounded-lg object-cover" />
                  <div className="absolute w-52 h-52 top-2 left-2 rounded-lg inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">


                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d9871c] hover:bg-transparent border border-[#d9871c] text-white hover:text-[#d9871c] 
                    transform -translate-x-5 group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                      onClick={() => confirmDelete(movie)}
                    >
                      <RiDeleteBin6Line className="text-[16px]" />
                    </button>

                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d9871c] hover:bg-transparent border border-[#d9871c] text-white hover:text-[#d9871c] 
                    transform translate-x-5 group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                      <RiEdit2Line className="text-[16px]" />
                    </button>

                  </div>
                </div>
                {/* Confirmation Card */}
                {showConfirm && (
                  <ConfirmationCard
                    title="Delete Theater"
                    message={`Are you sure you want to delete, ${selectedMovie?.title}?`}
                    onConfirm={handleDelete}
                    onCancel={() => setShowConfirm(false)}
                  />
                )}

                {/* Movie Details */}
                <div className="bg-white px-4 py-3">
                  <h2 className="text-lg font-semibold">{movie.title}</h2>
                  <p className="text-sm text-gray-500">Genre: {movie.genre}</p>
                  <p className="text-sm text-gray-500">Language: {movie.language}</p>
                  <p className="text-sm text-gray-500">Duration: {movie.duration}</p>
                  <p className="text-sm text-gray-500">Release Date: {movie.releaseDate}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Loading movies...</p>
          )}
        </div>
        <div className=" w-full flex justify-left">


          <div className='w-full flex justify-center items-center pt-10'>
            <PaginationDesign />
          </div>


          <Dialog>

            <DialogTrigger>

              <button className="p-3 text-sm pr-4 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-all absolute top-28 right-12 flex items-center gap-2">
                <BookMarked size={18} />
                Add Movie
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-96 flex justify-center items-center mt-10  h-[450px]"  >

              <AddMovieCard />


            </DialogContent>
          </Dialog>

        </div>
      </div>




    </div>
  )
}

export default MovieList