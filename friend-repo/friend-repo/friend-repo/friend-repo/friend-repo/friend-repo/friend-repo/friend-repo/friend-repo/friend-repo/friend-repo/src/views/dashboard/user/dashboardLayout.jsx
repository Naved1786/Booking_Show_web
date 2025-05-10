import React from 'react'
import Dashboard from '../user/dashboard';
import UserSidebar from '@/components/userSidebar';
import UserProfile from '../user/userProfile';
import { Route, Routes } from 'react-router-dom';
const userDashboardLayout = () => {
  return (
    <div className='flex h-screen bg-gray-100 pt-20'>
            <div className="w-60">
                <UserSidebar />
            </div>
            <div className="flex-1 overflow-y-auto">
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/userProfile' element={<UserProfile/>}/>
                </Routes>
            </div>
        </div>
  )
}

export default userDashboardLayout
