import React from 'react'
import Card from './Card'
import FooterCard from './FooterCard'

function App() {
  return (

    <div className='h-screen overflow-x-hidden w-screen bg-slate-800'>
      <div className='flex h-15 items-center justify-between px-4 bg-sky-300 font-bold'>
        <h2 className='font-bold text-blue-700 text-2xl'>Hamza Skills</h2>
        <svg className='md:hidden' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M4 5L20 5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M4 12L20 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M4 19L20 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <div className='list-none md:flex gap-3 hidden'>
          <li><a className='hover:text-red-700' href="#">Home</a></li>
          <li><a className='hover:text-red-700' href="#">About</a></li>
          <li><a className='hover:text-red-700' href="#">Contact</a></li>
        </div>
        <button className='bg-blue-700 text-white px-1 py-0.5 rounded-sm hidden md:block' >Login/Signup</button>
      </div>

      {/* bodypart */}
      <div className='w-full'>
        <img className='hidden md:block' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" />
        <img className='md:hidden' src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg" alt="" />
        <div className='flex flex-col gap-2  items-center justify-center '>
          <h2 className='text-green-500 text-2xl font-bold'>"No Shortcuts! Hardwork"</h2>
          <div className=' rounded-sm h-[4px] border-amber-300 border bg-amber-300 w-40 '></div>
        </div>
        <div className='flex justify-around items-center  mt-3'>
          <Card src={"https://images.pexels.com/photos/1174932/pexels-photo-1174932.jpeg"} value={2500} title={"Current Students"} />
          <Card src={"https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg"} value={"70000+"} title={"Students Enrolled"} />
          <Card src={"https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg"} value={"10000+"} title={"Successfull Transition"} classes='w-25 sm:w-auto whitespace-nowrap sm:whitespace-normal text-ellipsis  overflow-hidden' />
        </div>
        <div className='flex flex-col gap-2  items-center justify-center mt-2 '>
          <h2 className='text-green-500 text-2xl font-bold'>"Our Products"</h2>
          <div className=' rounded-sm h-[4px] border-amber-300 border bg-amber-300 w-40 '></div>
        </div>
        <div className='flex justify-around items-center  mt-3 flex-wrap lg:flex-nowrap'>
          <Card src={"https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"} value={"AI Course"} title={"Master artificial intelligence fundamentals, machine learning, and neural networks to build smart systems."} />
          <Card src={"https://images.pexels.com/photos/249541/pexels-photo-249541.jpeg"} value={"OS Course"} title={"Learn operating system concepts, process management, memory allocation, and kernel-level programming."} />
          <Card src={"https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg"} value={"Microprocessor Course"} title={"Explore microprocessor architecture, assembly programming, and embedded system design."} />
          <Card src={"https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg"} value={"Robotics Course"} title={"Design, program, and control robots using sensors, actuators, and AI integration."} />
          <Card src={"https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg"} value={"IOT Course"} title={"Build connected devices with sensors, cloud integration, and real-time data processing."} />
        </div>
      </div>
      <footer className='flex sm:flex-row flex-col bg-slate-600 px-3 py-2 box-border items-start sm:justify-between sm:items-center'>
        <div className='' >
             <h2 className='font-bold text-amber-950 text-2xl'>Hamza Skills</h2>
             <p className='text-white'>Email us at: www.musamalik9@gmail.com</p>
              <img className='w-30 h-30 rounded-full object-cover' src={"https://images.pexels.com/photos/11035385/pexels-photo-11035385.jpeg"} alt="img" />
        </div>
        <div className='flex sm:flex-row flex-col items-start sm:justify-between w-[70%] gap-2'>
          <FooterCard title={"Hamza Skills"} children={["About","FAQS","Privacy Policy"]}/>
           <FooterCard title={"Products"} children={["Hamza Lab","Job Portal","Experience Portal","Hall of fame","Become a member"]} />
          <FooterCard title={"Links"} children={["Discord","Hamza Youtube","Careers"]} />
         
        </div>
      </footer>
    </div>
    // <div className='bg-slate-600 h-screen w-screen'>
    //   <div >
    //     <ul className='flex h-24 text-slate-900 justify-center items-center gap-2 text-2xl font-bold flex-wrap'>
    //       <li><a href="#">Home</a></li>
    //       <li><a href="#">About</a></li>
    //       <li><a href="#">Contact</a></li>
    //       <li><a href="#">Blog</a></li>
    //     </ul>
    //   </div>
    //   <h1 className='font-bold text-center text-3xl '>Card</h1>
    //   <div className='font-medium  text-3xl flex rounded-xl bg-white justify-center items-center p-1.5 max-w-80'>
    //     <div>
    //       <img className='rounded-full w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbLtQwefGw3fcFdPb9iJCkG6xbT3h_HAdhg&s" alt="hamza" />
    //     </div>
    //     <div>
    //       <p>TailwindCss</p>
    //       <p className='text-sm font-light'>By Hamza Hanif</p>
    //     </div>
    //   </div>
    //   <div>
    //     <button className='hover:bg-white sm:min-w-20  hover:text-red-700 bg-blue-400 rounded-sm md:min-w-80 mt-1 py-1 font-medium text-sm '>Buy Now</button>
    //   </div>
    //   <p className='text-white md:text-amber-500 sm:text-red-900 lg:text-center' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, nemo.</p>

    //   {/* mobile and large screen card design */}
    //   <div className='md:flex justify-around items-center'>
    //     <div className='border-amber-50  flex justify-center md:block rounded-lg overflow-hidden '>
    //       <img className='w-48 h-48 object-cover' src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg" alt="tavel image of girl in a boat" />
    //     </div>
    //     <div>
    //       <h3>A Beutifull card </h3>
    //       <p>Lorem ipsum dolor sit amet <span className='uppercase font-bold hover:bg-black hover:text-white px-[14px]'>Hamza</span>consectetur adipisicing elit. Eius perspiciatis id quas rem, laboriosam necessitatibus impedit non aspernatur est labore!
    //       </p>
    //       <a className='hover:font-semibold' href="#">Lorem, ipsum dolor.</a>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App
