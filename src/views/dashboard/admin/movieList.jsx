import React, { useEffect,useState  } from 'react'
import AddMovieCard from '../../../components/addMovieCard'

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



const MovieList = () => {
  const [date, setDate] = React.useState();
  const [dateOpen, setDateOpen] = useState(false);
  const [movies, setMovies] = useState([]);


  const fetchMovies = async () => {
    try {
      const token = localStorage.getItem("token"); // Get token from localStorage
      console.log("token is", token);

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
        <div className="flex flex-wrap mt-10 ml-10">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.id} className="w-full sm:w-1/4 xl:w-1/4 bg-white rounded-xl overflow-hidden shadow-lg pb-3">
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
          <Dialog>
            <DialogTrigger>
              <button className="p-3 text-sm pr-4 bg-green-600 text-white rounded-3xl hover:bg-green-500 transition-all absolute top-36 right-12"
              >
                ➕
                Add Movie
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-96 flex justify-center items-center mt-10  h-[450px]"  >

             <AddMovieCard/>


            </DialogContent>
          </Dialog>

        </div>
      </div>




    </div>
  )
}

export default MovieList