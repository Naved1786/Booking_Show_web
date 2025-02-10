import React, { useEffect } from 'react'
import AddMovieCard from '../../../components/addMovieCard'
import { useState } from 'react'

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



const MovieList = () => {
  const [date, setDate] = React.useState();
  const [dateOpen, setDateOpen] = useState(false);

  useEffect(() => {
    console.log("date:", date);
    setDateOpen(!dateOpen)
  }, [date])
  return (


    <div className='w-full max-h-full'>
      <div>
        <AddMovieCard />
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

              <div className='w-80 h-full overflow-scroll' style={{ scrollbarWidth: 'none' }}>
                <form className="flex flex-col gap-3">
                  <input type="text" placeholder="Movie Name" className="w-full p-2 border rounded-md focus:outline-none" />
                  <input type="text" placeholder="Genre" className="w-full p-2 border rounded-md focus:outline-none " />
                  <input type="text" placeholder="Director" className="w-full p-2 border rounded-md focus:outline-none " />
                  <div className='flex flex-col justify-center items-center'>
                    <Popover onOpenChange={setDateOpen} open={dateOpen}>
                      <PopoverTrigger >
                        <div className="flex ">
                          <p>{date ? date.toLocaleDateString() : "Choose the date"}</p>
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="max-h-72 overflow-auto"
                        style={{ scrollbarWidth: 'none' }}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()} >
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
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


            </DialogContent>
          </Dialog>

        </div>
      </div>




    </div>
  )
}

export default MovieList