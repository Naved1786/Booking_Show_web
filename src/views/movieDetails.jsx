import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AboutMovieSlider from '../components/aboutMovieSlider';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MovieDetails = () => {
  const location = useLocation();
  const [movie, setMovie] = useState();
   const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    setMovie(location?.state?.data);
    console.log(location?.state?.data)
  }, [location.state]);

  return (
    <div className="container mx-auto p-4">
      <div className="relative w-full h-[90vh] flex flex-col md:flex-row items-center text-white rounded-lg mx-auto pt-20   bg-center"
        style={{ backgroundImage: movie ? `url(${movie.backgroundImageUrl})` : "none" }}
      >
        <div className='bg-black w-full h-[90vh] opacity-60 absolute bottom-0'></div>
        <div className="relative w-64 h-80 z-10 ml-12">
          <img
            src={movie?.postUrl}
            alt={`${movie?.title} Poster`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="text-white text-6xl bg-black bg-opacity-50 p-4 rounded-full"
            onClick={() => setTrailerUrl(movie.trailer)}
             />
            
          </div>
        </div>
        <div className="md:ml-8 mt-4 md:mt-0 flex flex-col justify-between z-10">
          <h2 className="text-3xl font-bold mb-2">{movie?.title}</h2>
          <div className="flex space-x-2 mb-4">
            {movie?.genre}
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
              onClick={() => setTrailerUrl(movie.trailer)}
            >
              Watch Trailer
            </button>

            {trailerUrl && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative w-full max-w-4xl h-96">
                  <iframe
                    src={trailerUrl}
                    title={`${movie.title} Trailer`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={() => setTrailerUrl(null)}
                    className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
                  >
                    ✖
                  </button>
                </div>
              </div>
            )}
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
