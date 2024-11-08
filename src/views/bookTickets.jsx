import React, { useState } from 'react';  // Add useState import
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const theaters = [
    { id: 1, name: 'PVR Forum Sujana Mall', timings: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'] },
    { id: 2, name: 'PVR Cinemas', timings: ['11:00 AM', '2:00 PM', '5:00 PM', '8:00 PM'] },
    { id: 3, name: 'AMB Cinemas', timings: ['12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'] },
    { id: 1, name: 'RK Cineplex', timings: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'] },
    { id: 2, name: 'INOX', timings: ['11:00 AM', '2:00 PM', '5:00 PM', '8:00 PM'] },
    { id: 3, name: 'Aparna Cinemas', timings: ['12:00 PM', '3:00 PM', '6:00 PM', '9:00 PM'] },
];

const BookTickets = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className='pt-20 flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <DatePicker
                    placeholderText="Select Date"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMMM d, yyyy"
                    className="px-4 py-2 border-[1px] border-red-400 rounded-lg focus:outline-none mt-5"
                />
            </div>
            {theaters.map((theater, index) => (

                <div className='flex flex-col justify-center w-[95%] h-28 rounded-lg border-[1px] border-red-400 bg-[#fef2f2] mt-5'>
                    <h1 className='text-yellow-500 text-lg pl-4'>{theater.name}</h1>
                    <div className=' flex flex-wrap gap-4 pl-4 pt-2'>
                        {theater.timings.map((time) => (
                            <div className="flex flex-wrap gap-10">
                                <button className='px-4 py-2 rounded border hover:bg-red-400 hover:text-white border-black bg-transparent text-black'>
                                    {time}
                                </button>
                            </div>

                        ))}
                    </div>
                </div>

            ))}
            <div className="mt-8 text-center">
                <button
                    className="px-8 mb-10 py-3 bg-red-400 text-white rounded-lg hover:bg-red-500 disabled:opacity-50"
                    // disabled={!selectedDate || !selectedTime}
                >
                    Confirm Booking
                </button>
            </div>
        </div>
    );
}

export default BookTickets;
