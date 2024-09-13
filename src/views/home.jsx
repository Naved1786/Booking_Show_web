import React from 'react'
import Slider from '../components/slider'
import Slider2 from '../components/slider2'
// import BackgroundImg from '../components/backgroundImg'
import ServiceCard from '../components/serviceCard.jsx'
import CardSlider from '../components/cardSlider.jsx'

const Home = () => {
  const topFeatureArr = [
    {
      image: 'feature-img9.jpg',
      title: '8.9/10',
      movieName: 'THE FAIL GUY'

    },
    {
      image: 'feature-img8.jpg',
      title: '8.9/10',
      movieName: 'ALL OF US STRANGERS'

    },
    {
      image: 'feature-img7.jpg',
      title: '8.9/10',
      movieName: 'FURIOSA'

    },
    {
      image: 'feature-img6.jpg',
      title: '8.9/10',
      movieName: 'AVENGERS'

    },
    {
      image: 'feature-img5.jpg',
      title: '8.9/10',
      movieName: 'KALKI'

    },
    {
      image: 'feature-img4.jpg',
      title: '8.9/10',
      movieName: '12TH FAIL'

    },
    {
      image: 'feature-img3.jpg',
      title: '8.9/10',
      movieName: 'FIGHTER'

    },
    {
      image: 'feature-img2.jpg',
      title: '8.9/10',
      movieName: 'INDIAN 2'

    },
    {
      image: 'feature-img1.jpg',
      title: '8.9/10',
      movieName: 'JAILER'

    },
  ]

  const popularMovie = [
    {
      image: 'card-slider-img1.avif',
      title: '8.9/10',
      movieName: 'JOKER'
    },
    {
      image: 'card-slider-img2.avif',
      title: '8.9/10',
      movieName: 'THE BUKHINGHAM MURDERS'
    },
    {
      image: 'card-slider-img3.avif',
      title: '8.9/10',
      movieName: 'STREE 2'
    },
    {
      image: 'card-slider-img4.avif',
      title: '8.9/10',
      movieName: 'KHEL KHEL ME'
    },
    {
      image: 'card-slider-img5.avif',
      title: '8.9/10',
      movieName: 'VEDAA'
    },
    {
      image: 'card-slider-img6.avif',
      title: '8.9/10',
      movieName: 'THE GREATEST OF ALL TIME..'
    },
    {
      image: 'card-slider-img7.avif',
      title: '8.9/10',
      movieName: 'BEETLIJUICE BEETLIJUICE'
    },
    {
      image: 'card-slider-img8.avif',
      title: '8.9/10',
      movieName: 'BIBI RAJNI'
    },
    {
      image: 'card-slider-img9.avif',
      title: '8.9/10',
      movieName: 'URANCHHU'
    },
  ]

  const PopularEvents=[
    {
    image:'popular-event-img1.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
    {
    image:'popular-event-img2.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
    {
    image:'popular-event-img3.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
    {
    image:'popular-event-img4.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
    {
    image:'popular-event-img5.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
    {
    image:'popular-event-img6.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
    {
    image:'popular-event-img7.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
    {
    image:'popular-event-img8.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
    {
    image:'popular-event-img9.avif',
    title:'8.9/10',
    movieName:'SHAAN'
  },
]

  return (
    <div className='overflow-hidden'>
      <div className='pt-28 mx-8'>
        <Slider />
      </div>

      <div className='py-10 pb-10 mx-8'>
        <h1 className='text-2xl text-red-500 mx-3 font-bold py-2'>Upcoming..</h1>
        <div className='my-2 flex justify-center items-center'>
          <Slider2 />

        </div>
      </div>

      <div className="relative h-[350vh] bg-[#e3e0e3] w-full overflow-hidden">
        <div>
          <img src="./images/image-lines-header.jpg" alt="" />
        </div>


        <div className="relative w-full h-full flex flex-col pt-20">
          <div className="w-full  z-10 flex justify-center gap-10">
            <ServiceCard image="service-card3.png" title="Upcoming Film Festivals" />
            <ServiceCard image="service-card2.png" title="Watch Film Awards" />
            <ServiceCard image="service-card1.png" title="Comedy TV Shows" />
          </div>

          <div className='flex flex-col justify-center items-center pt-10 pb-4'>
            <img src="./images/film-logo.png" className='w-10' alt="" />
            <p className=' text-stone-400 text-xs'>Watch Now</p>
            <h1 className='text-3xl font-bold'> Popular Movies</h1>
          </div>

          <div className='flex items-center gap-1 text-red-500 justify-end pr-10 cursor-pointer'>
            <p>See All</p>
            <i className="fa-solid fa-angle-right text-xs"></i>
          </div>

          <div className="w-full flex justify-center">
            <CardSlider slides={popularMovie} />

          </div>
          <div className=' flex flex-col justify-center items-center'>
            <p className=' text-stone-400 text-xs'>Watch Now</p>
            <h1 className='text-3xl font-bold'>Top Featured Movies</h1>
          </div>
          <div className='flex items-center gap-1 text-red-500 justify-end pr-10 cursor-pointer'>
            <p>See All</p>
            <i className="fa-solid fa-angle-right text-xs"></i>
          </div>
          <div>
            <CardSlider slides={topFeatureArr} />
          </div>

          <div className=' flex flex-col justify-center items-center'>
            <p className=' text-stone-400 text-xs'>Watch Now</p>
            <h1 className='text-3xl font-bold'>Populat Events</h1>
          </div>
          <div className='flex items-center gap-1 text-red-500 justify-end pr-10 cursor-pointer'>
            <p>See All</p>
            <i className="fa-solid fa-angle-right text-xs"></i>
          </div>
          <div>
            <CardSlider slides={PopularEvents} />
          </div>


        </div>
      </div>


      {/* <div className='w-full flex justify-center items-center object-cover '>
          <img src="./images/banner-templete.png" alt="" className='w-full h-[85px] rounded-md'/>
        </div> */}

    </div>
  )
}

export default Home;