import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import { useSelector,useDispatch } from 'react-redux'

export default function Searchpage() {
 
  return (
    <div>
        <Navbar/>
        <div className=''>
            <div className='h-16 bg-black flex items-center   '>
                <div className='flex   border-2 rounded-2xl border-slate-800  grow bg-gray-300 '> 
                <input type='text' placeholder='Search' className='bg-gray-300 text-black text-center outline-none p-1 rounded-2xl mt-1  grow ' />
                <img  alt='/' className='w-10 aspect-square p-2' src='https://icon-library.com/images/search-icon-white/search-icon-white-16.jpg'       />
                 </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
