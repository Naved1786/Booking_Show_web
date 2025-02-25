import Banner from '@/components/banner'
import FilterBox from '@/components/filterBox'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Searchbar from '@/components/searchbar'

const Movies = () => {

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

    return (
        <div className='bg-[#f5f5f5]'>
            <Banner heading="Movies" paragraph="Find & Book Your Favorite Movies – Anytime, Anywhere!" />
            <div className='flex flex-row  '>
                <div className='w-[23%] flex flex-col  pt-14'>
                    <h1 className='text-xl font-bold pl-4'>Filter By</h1>
                    <div className='flex flex-col gap-3 justify-center items-center pt-4'>
                        <FilterBox title="Languages" options={["Telugu", "English", "Hindi", "Malayalam", "Tamil", "Begali", "korean", "Persian"]} />
                        <FilterBox title="Genres" options={["Action", "Comedy", "Drama", "Horror"]} />
                        <FilterBox title="Format" options={["2D", "3D", "IMAX", "4DX"]} />
                    </div>

                </div>
                <div className="w-[77%] flex flex-wrap mt-10 ml-3  gap-4 justify-center item center h-screen overflow-scroll ">
                    <Searchbar/>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <div key={movie.id} className="w-56  bg-white rounded-xl overflow-hidden shadow-lg pb-3">
                                {/* Movie Image */}
                                <div className="relative w-full flex justify-center items-center pt-2">
                                    <img src="/images/feature-img1.jpg" alt={movie.title} className="w-52 h-52 rounded-lg object-cover" />
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
            </div>

        </div>
    )
}

export default Movies