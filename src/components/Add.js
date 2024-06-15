import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Addpost } from './features/Slice';

export default function Add() {
    const[caption,setcaption]=useState("");
    const[file,setfile]=useState("")

        function handlefilechange(event){
            const selectedFile = event.target.files;
            setfile(selectedFile);
        }

       const dispatch= useDispatch()

        function Submit(){
            dispatch(Addpost({file,caption}))
        }

  return (
    <div>
        <Navbar />
        <div className='bg-black p-2 h-screen text-white '>
            <div className='h-64 border-8 border-slate-200 flex justify-center items-center'>
            <div className=' text-xs'>
            <input type="file" onChange={handlefilechange} ></input>
            {file && <img src={file} alt="helo" ></img>}
            </div>
            </div>
            <div className='flex flex-col space-y-2 '>
                <p>Caption:</p>
                <textarea name='caption' value={caption} onChange={(e)=>{setcaption(e.target.value)}} type='text' rows="2" className='bg-slate-200 outline-none'/>
                <button onClick={Submit} className='bg-blue-500 p-2 '>Post </button>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
