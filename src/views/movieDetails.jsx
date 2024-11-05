import React, { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location=useLocation();
  const [movie,setMovie]=useState();
  useEffect(()=>{
    setMovie(location?.state?.item);
    console.log("movie",location?.state?.item)
  },[location.state])
  useEffect(()=>{
    setMovie(location?.state?.item);
    console.log("movie",location?.state?.item)
  },[])
  // const movie = {
  //   title: 'Avengers: Infinity War',
  //   posterUrl: 'https://image-url.jpg', // Replace with an actual image URL
  //   genres: ['Adventure', 'Fantasy', 'Action'],
  //   language: 'English',
  //   releaseDate: 'April 27, 2018 (USA)',
  //   duration: '2h 36m',
  //   description:
  //     'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
  //   rating: 99,
  // };
  return (

    <div className="container mx-auto p-4">
      <div className="w-full h-[90vh] flex flex-col md:flex-row items-center bg-gray-900 text-white p-8 rounded-lg mx-auto pt-20">
        <img
          // src={movie.posterUrl}
          src="./images/feature-img1.jpg"
          alt={`${movie?.movieName} Poster`}
          className="w-full md:w-1/3 h-80 object-cover rounded-lg shadow-lg"
        />

        <div className="md:ml-8 mt-4 md:mt-0 flex flex-col justify-between">
          <h2 className="text-3xl font-bold mb-2">{movie?.movieName}</h2>
          <div className="flex space-x-2 mb-4">
            {movie?.genres?.map((genre, index) => (
              <span
                key={index}
                className="bg-purple-600 px-2 py-1 rounded-full text-xs font-semibold"
              >
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
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded">
              Book Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MovieDetails;
