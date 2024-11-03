import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="relative w-full">
                <img src="./images/seat-bg.png" alt="Background" className="w-full h-96 object-cover" />
                <div className="absolute top-0 left-0 w-full h-96 bg-black opacity-70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl text-white  mt-16">About Us</h1>
                    <p className="text-stone-400 max-w-md mt-3">
                        We are dedicated to providing the best movie ticket transfer service,
                        ensuring that no ticket goes to waste. Our platform is user-friendly
                        and designed to help you save money while enjoying your favorite movies.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner