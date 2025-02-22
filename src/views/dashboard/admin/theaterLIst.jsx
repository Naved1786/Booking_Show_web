import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import Searchbar from '@/components/searchbar';
import AddTheaterForm from '@/components/addTheaterForm';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { BookMarked } from 'lucide-react';

// this is diolog part
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"

const theaters = [
    { id: 1, name: "PVR Cinemas", location: "Mumbai", totalScreens: 5, status: "Active" },
    { id: 2, name: "INOX Multiplex", location: "Delhi", totalScreens: 4, status: "Inactive" },
    { id: 3, name: "Cinepolis", location: "Bangalore", totalScreens: 6, status: "Inactive" },
];




const TheaterList = () => {
    return (
        <div>
            <div className='pb-10'>

                <div>
                    <div className='mt-8 ml-5'>
                        <h1 className='text-3xl font-semibold'>Theater<span className='text-red-500'>List</span></h1>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="p-3 text-sm pr-4 bg-green-600 text-white rounded-xl hover:bg-green-500 transition-all absolute top-28 right-12 flex items-center gap-2">
                                <BookMarked size={18} />
                                Add Theater
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <AddTheaterForm/>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className='pt-10 flex justify-center items-center'>
                    <Searchbar />
                </div>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">#</TableHead>
                        <TableHead>Theater Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead className="">Screens</TableHead>
                        <TableHead className="">Status</TableHead>
                        <TableHead className="">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    theaters.map((theater, index) => (
                        <TableBody>
                            <TableRow key={theater.id}>
                                <TableCell className="font-medium">{index + 1}</TableCell>
                                <TableCell>{theater.name}</TableCell>
                                <TableCell>{theater.location}</TableCell>
                                <TableCell className="">{theater.totalScreens}</TableCell>
                                <TableCell className="flex items-center gap-2">
                                    <span
                                        className={`w-3 h-3 rounded-full ${theater.status === "Active" ? "bg-green-500" : "bg-red-500"
                                            }`}
                                    ></span>
                                    {theater.status}

                                </TableCell>


                                <TableCell className="">

                                    <div className="flex space-x-2">
                                        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                            <FaEdit />
                                        </button>
                                        <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    ))
                }

            </Table>

        </div>
    )
}

export default TheaterList
