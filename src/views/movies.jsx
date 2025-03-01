import Banner from '@/components/banner'
import FilterBox from '@/components/filterBox'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Star } from "lucide-react";
import axios from 'axios'
import Searchbar from '@/components/searchbar'
import { Scrollbar } from 'swiper/modules'

const Movies = (props) => {

    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [movies, setMovies] = useState([]);


    const fetchMovies = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(
                `http://localhost:1111/api/movie/filter?${selectedLanguage === "All" ? "" : `language=${selectedLanguage}`
                }${selectedGenre === "All" ? "" : `&genre=${selectedGenre}`}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMovies(response.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };


    useEffect(() => {
        fetchMovies();
        console.log("selected lanaguage:",selectedLanguage);
    }, [selectedLanguage, selectedGenre]);

    return (
        <div className='bg-[#f5f5f5]'>
            <Banner heading="Movies" paragraph="Find & Book Your Favorite Movies – Anytime, Anywhere!" />
            <div className='flex flex-row  '>
                <div className='w-[23%] flex flex-col  pt-14'>
                    <h1 className='text-xl font-bold pl-4'>Filter By</h1>
                    <div className='flex flex-col gap-3 justify-center items-center pt-4'>
                        <FilterBox
                            title="Languages"
                            options={["All", "Telugu", "English", "Hindi", "Malayalam", "Tamil", "Bengali", "Korean", "Persian"]}
                            selectedOption={selectedLanguage}
                            setSelectedOption={setSelectedLanguage}
                        />
                        <FilterBox title="Genres"
                            options={["All", "Action", "Comedy", "Drama", "Horror", "Romance", "Family", "Adventure", "Thriller"]}
                            selectedOption={selectedGenre}
                            setSelectedOption={setSelectedGenre}
                        />
                        {/* <FilterBox title="Format" options={["All", "2D", "3D", "IMAX", "4DX"]} /> */}
                    </div>

                </div>
                <div className='w-[77%] pt-14'>
                    <h1 className='text-xl font-bold pl-4 pb-4'></h1>

                    <div className=" flex flex-wrap  ml-3  gap-4 justify-center item center h-screen overflow-scroll" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>

                        {movies.length > 0 ? (
                            movies.map((movie) => (
                                <div key={movie.id} className="w-56 h-[350px] bg-white rounded-xl overflow-hidden shadow-lg pb-3">
                                    {/* Movie Image */}
                                    <div className="relative w-full flex justify-center items-center pt-2">
                                        <div className="relative w-52 h-52 group">
                                            <img
                                                src="/images/feature-img5.jpg"
                                                alt={movie.title}
                                                className="w-full h-full rounded-lg object-cover"
                                            />
                                            <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                                <button className="mb-2 px-4 py-3 text-[10px] bg-red-500 hover:bg-transparent hover:border hover:border-red-500 text-white rounded-md 
    transform -translate-x-5 group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                                                    VIEW TRAILER
                                                </button>

                                                <button className="px-4 py-3 text-[10px] border border-red-500 text-white rounded-md hover:bg-red-500 hover:border-none 
    transform translate-x-5 group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                                                    VIEW DETAILS
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Movie Details */}
                                    <div className="bg-white px-4 py-3 relative">
                                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                                        <p className="text-sm text-gray-500">Genre: {movie.genre}</p>

                                        {/* Rating Section */}
                                        <div className="flex items-center mt-2 text-[#ff4444]">
                                            {[...Array(5)].map((_, index) => {
                                                if (movie.rating >= index + 1) {
                                                    return <FaStar key={index} />;
                                                } else if (movie.rating >= index + 0.5) {
                                                    return <FaStarHalfAlt key={index} />;
                                                } else {
                                                    return <FaRegStar key={index} />;
                                                }
                                            })}
                                        </div>
                                        {/* <div className="flex items-center mt-2">
                                            <Star className="w-5 h-5 text-yellow-500" />
                                            <span className="ml-1 text-sm font-semibold text-gray-700">{movie.rating} / 5</span>
                                        </div> */}
                                        <div className="flex mt-3 absolute top-11 right-6">
                                            <button className="p-2 border border-gray-200 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition">
                                                <FaShoppingCart />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">Loading movies...</p>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies