import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserposts } from './features/Slice'

export default function Userdetails() {
  const {UserId}=useSelector((state)=>state.session)
  const dispatch=useDispatch()
 
  useEffect(()=>{
    dispatch(fetchUserposts(UserId))
  },[dispatch,UserId])

  return (
    <div>
      <Navbar />
      <div className='h-28 bg-black flex gap-4 items-center justify-around p-1'>
        <div className='w-20 m-2 aspect-square rounded-full bg-black'>
          <img alt='/' className='object-cover h-20 rounded-full' src='https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'/>
        </div>
        <div className='flex flex-col'>
        <p className='text-white'>Followers</p>
        <p className='text-white text-center'>1M</p>
        </div>
        <div className='flex flex-col'>
        <p className='text-white'>Following</p>
        <p className='text-white text-center'>0</p>
        </div>

      </div>  
        <div className='m-2 bg-red-200 p-2 space-y-2'>
          <p className='text-red-'>About yourself</p>
          <textarea type='text' placeholder='I am new Innstagram User' className='' cols="35" />
          <label>Hobbies</label>
          <textarea type='text' placeholder='I am new Innstagram User' className='' cols="35" />
        </div>
        <div className='bg-green-400 h-96 m-2'>
            
        </div>
    <Footer/>
    </div>
  )
}
