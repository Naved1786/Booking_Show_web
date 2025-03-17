import React from 'react'
import Dashboard from './dashboard';
import UserSidebar from '@/components/userSidebar';
import UserProfile from './userProfile';
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
