import React from 'react'

const MovieCard = () => {
  return (
    <div>
      <div className='w-[220px] h-[100px]'>
        <img src="./images/movie-card-img1.avif" className='' alt="" />
      </div>
      <div>
        <p className='text-sm text-white' >Animation,Comedy/190 Mins</p>
        <h1 className='text-xl font-bold text-white'>The Fifth Day</h1>
        <button className='w-20 h-8 bg-white text-sm '>Get Ticket</button>
      </div>
    </div>
  )
}

export default MovieCard