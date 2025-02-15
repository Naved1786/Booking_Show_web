import React from 'react'
import AdminSidebar from '../../../components/adminSidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
import MovieList from './movieList'


const DashboardLayout = () => {
    return (
        <div className='flex h-screen bg-gray-100 pt-20'>
            <div className="w-60">
                <AdminSidebar />
            </div>
            <div className="flex-1 overflow-y-auto">
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/movieList' element={<MovieList/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default DashboardLayout