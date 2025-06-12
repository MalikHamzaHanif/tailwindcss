import React from 'react'

function FooterCard({ title, children = [] }) {
    return (
        <div>
            <div className='flex flex-col gap-2  items-center justify-center '>
                <h2 className='text-green-500 text-2xl font-bold'>{title}</h2>
                <div className=' rounded-sm h-[4px] border-amber-300 border bg-amber-300 w-50 '></div>
            </div>
            <ul className='text-white' >
                {children.map((child) => {
                    return <li>{child}</li>
                })}
            </ul>
        </div>
    )
}

export default FooterCard
