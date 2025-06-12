import React from 'react'

function Card({ src, value, title,classes="" }) {
    return (
        <div className='flex flex-col gap-4 font-bold text-center justify-center items-center w-35 sm:wd-40'>
            <img className='w-20 h-20 rounded-full object-cover' src={src} alt="img" />
            <h2 className=' text-white text-sm sm:text-md w-30 sm:w-auto whitespace-nowrap sm:whitespace-normal text-ellipsis  overflow-hidden' >{value}</h2>
            <h2 className={` text-slate-600  sm:text-wrap text-sm sm:text-lg ${classes}`} >{title}</h2>
        </div>
    )
}

export default Card

// w-30 sm:w-auto whitespace-nowrap sm:whitespace-normal text-ellipsis  overflow-hidden