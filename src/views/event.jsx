import React, { useState } from 'react';
import Banner from '../components/banner';
import { Calendar, Search, Filter, MapPin } from 'lucide-react';
import EventSlider from '@/components/eventSlider';

const Event = () => {
    // Sample event data - in a real app, this would come from an API
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Taylor Swift Concert",
            category: "Music",
            date: "April 15, 2025",
            location: "National Stadium",
            imageUrl: "/api/placeholder/400/220",
            price: "$75 - $250"
        },
        {
            id: 2,
            title: "Broadway Musical - Hamilton",
            category: "Theater",
            date: "April 18, 2025",
            location: "City Theater",
            imageUrl: "/api/placeholder/400/220",
            price: "$50 - $150"
        },
        {
            id: 3,
            title: "Comedy Night with John Doe",
            category: "Comedy",
            date: "April 20, 2025",
            location: "Laugh Club",
            imageUrl: "/api/placeholder/400/220",
            price: "$30 - $60"
        },
        {
            id: 4,
            title: "Food & Wine Festival",
            category: "Food",
            date: "April 22-24, 2025",
            location: "City Park",
            imageUrl: "/api/placeholder/400/220",
            price: "$45"
        }
    ]);

    // Featured events (a subset of all events)
    const featuredEvents = events.slice(0, 2);

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
            
            {/* Search and Filter Section */}
            <div className="max-w-6xl mx-auto py-6 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    {/* Search Bar */}
                    <div className="relative w-full md:w-2/5">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search for events, artists, venues..." 
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                    {/* Location Picker */}
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-300">
                        <MapPin size={18} className="text-gray-500" />
                        <select className="bg-transparent focus:outline-none text-gray-700">
                            <option>New York</option>
                            <option>Los Angeles</option>
                            <option>Chicago</option>
                            <option>Miami</option>
                        </select>
                    </div>
                    
                    {/* Date Filter */}
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-300">
                        <Calendar size={18} className="text-gray-500" />
                        <select className="bg-transparent focus:outline-none text-gray-700">
                            <option>This Weekend</option>
                            <option>Today</option>
                            <option>Tomorrow</option>
                            <option>This Week</option>
                            <option>This Month</option>
                        </select>
                    </div>
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === category 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                {/* Featured Events Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Featured Events</h2>
                    <EventSlider items={featuredEvents} />
                </section>
                
                {/* All Events Section */}
                <section className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">All Events</h2>
                        <div className="flex items-center gap-2">
                            <Filter size={18} />
                            <select className="bg-transparent focus:outline-none text-gray-700">
                                <option>Sort By: Date</option>
                                <option>Sort By: Price (Low to High)</option>
                                <option>Sort By: Price (High to Low)</option>
                                <option>Sort By: Popularity</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {events.map(event => (
                            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
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
                                        <span className="font-medium text-gray-900">{event.price}</span>
                                        <button className="px-4 py-1 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-8">
                    {[1, 2, 3, 4, 5].map(page => (
                        <button 
                            key={page}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                page === 1 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-gray-700 border border-gray-300 hover:bg-gray-100">
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Event;