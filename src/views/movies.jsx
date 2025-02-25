import Banner from '@/components/banner'
import React from 'react'
import FilterBox from '@/components/filterBox'

const Movies = () => {
    return (
        <div>
            <Banner heading="Movies" paragraph="Find & Book Your Favorite Movies – Anytime, Anywhere!" />
            <div className='flex flex-col pt-14'>
                <div className='w-[25%] flex flex-col'>
                    <h1 className='text-xl font-bold pl-4'>Filter By</h1>
                    <div className='flex flex-col gap-5 justify-center items-center pt-4'>
                        <FilterBox title="Languages" options={["Telugu", "English", "Hindi", "Malayalam"]} />
                        <FilterBox title="Genres" options={["Action", "Comedy", "Drama", "Horror"]} />
                        <FilterBox title="Format" options={["2D", "3D", "IMAX", "4DX"]} />
                    </div>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}

export default Movies