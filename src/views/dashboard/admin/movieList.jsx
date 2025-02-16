import React, { useEffect, useState } from 'react'
import AddMovieCard from '../../../components/addMovieForm'
import MoviePagination from '@/components/moviePagination'
import Searchbar from '@/components/searchbar'
import { BookMarked } from "lucide-react";

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

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
// import { Pagination } from '@/components/pagination'



const MovieList = () => {
  const [date, setDate] = React.useState();
  const [dateOpen, setDateOpen] = useState(false);
  const [movies, setMovies] = useState([]);


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
  return (


    <div className='w-full max-h-full'>
      <div>
        <div className='mt-8 ml-5'>
          <h1 className='text-3xl font-semibold'>Movie<span className='text-red-500'>List</span></h1>
        </div>
        <div className='pt-10 flex justify-center items-center'>
          <Searchbar />
        </div>
        <div className="flex flex-wrap mt-10 ml-5  gap-3">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="w-60 bg-white rounded-xl overflow-hidden shadow-lg pb-3">
                {/* Movie Image */}
                <div className="relative w-full flex justify-center items-center pt-4">
                  <img src={movie.postUrl} alt={movie.title} className="w-56 h-60 rounded-lg object-cover" />
                </div>

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


          <div className='w-full flex justify-center items-center pb-6'>
            <MoviePagination />
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