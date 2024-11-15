import React from 'react'
import CardSlider from '../components/cardSlider'
import Banner from '../components/banner'


const Event = () => {

    const PopularEvents = [
        {
            image: 'popular-event-img1.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
        {
            image: 'popular-event-img2.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
        {
            image: 'popular-event-img3.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
        {
            image: 'popular-event-img4.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
        {
            image: 'popular-event-img5.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
        {
            image: 'popular-event-img6.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
        {
            image: 'popular-event-img7.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
        {
            image: 'popular-event-img8.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
        {
            image: 'popular-event-img9.avif',
            title: '8.9/10',
            movieName: 'SHAAN'
        },
    ]

    return (
        <div className='w-full h-full'>
            <Banner 
            heading="Events"
            paragraph="Welcome to our Events Page – your go-to platform for discovering, booking, and enjoying the best upcoming events near you!"
            />
            <CardSlider slides={PopularEvents} />
            <CardSlider slides={PopularEvents} />
            <CardSlider slides={PopularEvents} />
        </div>
    )
}

export default Event