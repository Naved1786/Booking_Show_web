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

const AddMovieCard = () => {
 const [date, setDate] = React.useState();
  const [dateOpen, setDateOpen] = useState(false);


  return (
    <>
      <div className='w-80 h-full overflow-scroll' style={{ scrollbarWidth: 'none' }}>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Movie Name" className="w-full p-2 border rounded-md focus:outline-none" />
          <input type="text" placeholder="Genre" className="w-full p-2 border rounded-md focus:outline-none " />
          <input type="text" placeholder="duaration" className="w-full p-2 border rounded-md focus:outline-none " />
          <input type="text" placeholder="language" className="w-full p-2 border rounded-md focus:outline-none " />
          <input type="text" placeholder="rating" className="w-full p-2 border rounded-md focus:outline-none " />
          <input type="text" placeholder="Director" className="w-full p-2 border rounded-md focus:outline-none " />
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
          <textarea placeholder="Description" className="w-full p-2 border rounded-md focus:outline-none "></textarea>
          <input type="file" className="w-full p-2 border rounded-md focus:outline-none " />

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Add Movie
          </button>
        </form>
      </div>

    </>
  );
};

export default AddMovieCard;
