import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav>
        <div className='h-16 bg-black flex items-center justify-between p-2 fixed  z-10'>
            <img className='w-1/3 ' alt="chitra" src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' />
            <div className='flex p-2 space-x-4'>
           <Link to='/addpost'> <img className='w-6 aspect-square rounded-full bg-white' src='https://cdn-icons-png.flaticon.com/512/6537/6537806.png ' alt="chitra" /></Link>
           <Link to='#'> <img className='w-6 aspect-square  ' src='https://www.pngkit.com/png/full/208-2088941_this-free-clipart-png-design-of-white-heart.png' alt="chitra" /></Link>
           <Link to="/Message"><img className='w-6 aspect-square rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Hv_noznc5FD3AiQbm-JNiHyKUMUMAuEI0LENg6xM7yV2gcuwur9eN9PIO32XKI46cco&usqp=CAU' alt='p'></img></Link>
            </div>
        </div>
    </nav>
    <div className='bg-black h-[57px]'></div>
    </>
  )
}
