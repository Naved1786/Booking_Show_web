import React, { useState, useEffect } from 'react';
import CardSlider from '../components/cardSlider';
import Banner from '../components/banner';
import { Calendar, Search, Filter, MapPin } from 'lucide-react';
import EventSlider from '@/components/eventSlider';
import PaginationDesign from '@/components/paginationDesign';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Event = () => {


    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        try {
            const token = localStorage.getItem("token");
            console.log("token is", token);

            if (!token) {
                console.error("No token found, user might not be logged in.");
                return;
            }

            const response = await axios.get("http://localhost:1111/api/events/findAll", {

                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            
            if (response.status !== 200) {
                throw new Error("Failed to fetch events");
            }


            console.log("response is-", response);
            setEvents(response?.data?.data);
            console.log("printing the events :",events)
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);
    
    const navigate = useNavigate();
    const handleClick = (event) => {
        navigate("/eventDetails", {
            state: {
                data: event
            }
        })
    }



    // Featured events (a subset of all events)
    const featuredEvents = events.slice(0, 6);

    // Categories for filtering
    const categories = ["All", "Music", "Sports", "Theater", "Comedy", "Food", "Arts"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="w-full min-h-screen bg-gray-50">
            {/* Banner Component */}
            <Banner
                heading="Events"
                paragraph="Welcome to our Events Page – your go-to platform for discovering, booking, and enjoying the best upcoming events near you!"
            />

            {/* Simplified Search and Filter Section */}
            <div className="border-b border-gray-200 bg-white shadow-sm">
                <div className="max-w-6xl mx-auto py-4 px-4">
                    {/* Simple Search Bar Row */}
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* Search Bar */}
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search for events, artists, venues..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        {/* Location Dropdown */}
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 min-w-32">
                            <MapPin size={16} className="text-gray-500 mr-2" />
                            <select className="bg-transparent focus:outline-none text-gray-700">
                                <option>New York</option>
                                <option>Los Angeles</option>
                                <option>Chicago</option>
                                <option>Miami</option>
                            </select>
                        </div>

                        {/* Date Dropdown */}
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 min-w-32">
                            <Calendar size={16} className="text-gray-500 mr-2" />
                            <select className="bg-transparent focus:outline-none text-gray-700">
                                <option>Any Date</option>
                                <option>Today</option>
                                <option>This Weekend</option>
                                <option>This Week</option>
                            </select>
                        </div>

                        {/* Search Button */}
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* Category Pills - Simple Row */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto flex gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap ${selectedCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto py-8 px-4">
                {/* Featured Events Section */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">Featured Events</h2>
                        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">View All</a>
                    </div>
                    <EventSlider items={featuredEvents} />
                </section>

                {/* All Events Section */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">All Events</h2>
                        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg border border-gray-200">
                            <Filter size={16} className="text-gray-500" />
                            <select className="bg-transparent focus:outline-none text-gray-700 text-sm">
                                <option>Sort By: Date</option>
                                <option>Sort By: Price (Low to High)</option>
                                <option>Sort By: Price (High to Low)</option>
                                <option>Sort By: Popularity</option>
                            </select>
                        </div>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.isArray(events) && events.length > 0 ? (
                            events.map((event) => (
                                <div
                                    key={event.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                                >
                                    <img
                                        src={event.imageUrl}
                                        alt={event.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
                                            {event.category}
                                        </span>
                                        <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                                        <div className="flex items-center text-gray-500 text-sm mb-1">
                                            <Calendar size={14} className="mr-1" />
                                            {event.date}
                                        </div>
                                        <div className="flex items-center text-gray-500 text-sm mb-3">
                                            <MapPin size={14} className="mr-1" />
                                            {event.location}
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-gray-900">
                                                {event.price}
                                            </span>
                                            <button className="px-4 py-1 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                                            onClick={() => handleClick(event)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">Loading Events...</p>
                        )}
                    </div>

                </section>

                {/* Pagination */}
                <PaginationDesign />
            </div>
        </div>
    );
};

export default Event;