import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Message() {
  // const dispatch=useDispatch()
  
 

  return (
    <div className='bg-black h-screen'>
        <div className=''>
            <div className='h-16 bg-black flex items-center text-white  '>
                <div className='flex   border-2 rounded-2xl border-slate-800  grow '> 
                <input type='text' placeholder='Search' className='bg-black text-white text-center outline-none p-1 rounded-2xl mt-1  grow ' />
                <img  alt='/' className='w-10 aspect-square p-2' src='https://icon-library.com/images/search-icon-white/search-icon-white-16.jpg'       />
                 </div>
            </div>
        </div>
        <div className='m-4'>
            <div className='flex  items-center space-x-4'>
            <div className='w-10 aspect-square rounded-full bg-black'>
          <img alt='/' className='object-cover h-10 rounded-full' src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'/>
        </div>
       <Link to="/chat"> <span className='text-white'>Username</span></Link>
            </div>
             
        </div>
    </div>
  )
}

