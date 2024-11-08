import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AboutMovieSlider from '../components/aboutMovieSlider';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(location?.state?.item);
  }, [location.state]);

  return (
    <div className="container mx-auto p-4">
      <div className="relative w-full h-[90vh] flex flex-col md:flex-row items-center bg-gray-900 text-white rounded-lg mx-auto pt-20 bg-[url('/images/bg-stree2.jpg')] bg-cover bg-center">
        <div className='bg-black w-full h-[90vh] opacity-60 absolute bottom-0'></div>
        <div className="relative w-64 h-80 z-10 ml-12">
          <img
            src={`./images/${movie?.image}`}
            alt={`${movie?.movieName} Poster`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="text-white text-6xl bg-black bg-opacity-50 p-4 rounded-full" />
          </div>
        </div>
        <div className="md:ml-8 mt-4 md:mt-0 flex flex-col justify-between z-10">
          <h2 className="text-3xl font-bold mb-2">{movie?.movieName}</h2>
          <div className="flex space-x-2 mb-4">
            {movie?.genres?.map((genre, index) => (
              <span key={index} className="bg-purple-600 px-2 py-1 rounded-full text-xs font-semibold">
                {genre}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm mb-2">
            {movie?.language} • {movie?.releaseDate} • {movie?.duration}
          </p>
          <p className="text-gray-300 mb-4">{movie?.description}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-400 text-lg">Rating:</span>
            <span className="text-yellow-400 text-xl ml-2">{movie?.rating}%</span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Watch Trailer
            </button>
           <Link to="/bookTickets">
           <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded">
              Book Tickets
            </button>
           </Link>
          </div>
        </div>
      </div>
      <div className='w-[85%] pt-8 px-10 py-10'>
        <div className='border-b-[1px] pb-8'>
          <h1 className='text-3xl font-bold'>About the movie</h1>
          <p className='pt-3'>The hilarious revelation of the shocking fact that your friends and spouses, are nothing more than masked strangers, dwelling behind a phony pile of lies... sometimes just needs one game!
            <br />
            <br />
            That game is now on!</p>
        </div>
        <div className='border-b-[1px] pt-6 pb-6'>
          <h1 className='text-3xl font-bold'>Cast</h1>
          <div>
            <AboutMovieSlider />
          </div>
        </div>
        <div className='border-b-[1px] pt-6 pb-6'>
          <h1 className='text-3xl font-bold'>Crew</h1>
          <div>
            <AboutMovieSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
