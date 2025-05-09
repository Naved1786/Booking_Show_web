import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

const PaginationDesign = () => {
  return (
    <div className="flex justify-center gap-2 mt-8 pb-10">
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
  )
}

export default PaginationDesign