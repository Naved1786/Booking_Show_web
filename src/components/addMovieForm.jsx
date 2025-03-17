import React, { useEffect, useState } from "react";
import axios from "axios";
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

const AddMovieForm = () => {
  const [date, setDate] = React.useState();
  const [dateOpen, setDateOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    theaterId: "",
    description: "",
    genre: "",
    format: "",
    duration: "",
    language: "",
    rating: "",
    director: "",
    castMember: "",
    releaseDate: "",
    trailer: "",
    image:"",
    backgroundImage:"",
  });

  // Handle input changes
  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      const payload = new FormData();
      
      Object.keys(formData).forEach(key => {
        payload.append(key, formData[key]);
      });

      // payload.append("image", formData.image);
      // payload.append("backgroundImage", formData.backgroundImage);

      const response = await axios.post(`http://localhost:1111/api/movie/createMovie`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      if (response.status === 201) {
        alert("Data saved successfully!");
      } else {
        alert("Failed to save data.");
      }

    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false)
    }
  };



  useEffect(() => {
    setFormData(prev => ({ ...prev, releaseDate: date ? format(date, "yyyy-MM-dd") : "" }));
  }, [date]);


  return (
    <>
      <div className='w-80 h-full overflow-scroll' style={{ scrollbarWidth: 'none' }}>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Movie Name"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
          <input
            type="text"
            name="theaterId"
            value={formData.theaterId}
            onChange={handleChange}
            placeholder="Theater Id"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />

          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Genre"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
          <input
            type="text"
            name="format"
            value={formData.format}
            onChange={handleChange}
            placeholder="Format"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />

          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Duration (e.g. 2h 30m)"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />

          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            placeholder="Language"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />

          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating (e.g. 8.5)"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />

          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            placeholder="Director"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
          <input
            type="text"
            name="castMember"
            value={formData.castMember}
            onChange={handleChange}
            placeholder="Cast Member"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
          <input
            type="text"
            name="trailer"
            value={formData.trailer}
            onChange={handleChange}
            placeholder="Trailer"
            className="w-full p-2 border rounded-md focus:outline-none"
            required
          />
          <div className='flex flex-col justify-center items-center'>
            <Popover onOpenChange={setDateOpen} open={dateOpen}>
              <PopoverTrigger className="w-full p-2 border rounded-md focus:outline-none bg-white flex items-center justify-between cursor-pointer">
                <span className="text-gray-500">
                  {date ? format(date, "PPP") : "Choose the date"}
                </span>
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </PopoverTrigger>
              <PopoverContent className="max-h-72 overflow-auto"
                style={{ scrollbarWidth: 'none' }}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()} >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>



          </div>
          <textarea onChange={handleChange} value={formData?.description} name='description' placeholder="Description" className="w-full p-2 border rounded-md focus:outline-none "></textarea>
          <input type="file" name="image" onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none" />
          <input type="file" name="backgroundImage" onChange={handleChange} className="w-full p-2 border rounded-md focus:outline-none" />

          {
            loading ? <button className="w-full bg-blue-300 text-white py-2 rounded-md hover:bg-blue-600 transition cursor-not-allowed">
              Submitting...
            </button> : <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Add Movie
            </button>
          }

        </form>
      </div>

    </>
  );
};

export default AddMovieForm;
