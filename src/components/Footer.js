import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className='h-14'></div>
        <div className='bg-black h-14 text-white flex items-center fixed bottom-0 w-full justify-around z-10'>
            <Link to='/dashboard'><img className='w-10  aspect-square bg-black rounded-full ' src='https://www.nicepng.com/png/detail/14-142284_png-file-svg-home-icon-black-circle.png' alt='chitra'/></Link>
            <Link to='/Search'><img className='w-8  aspect-square p-1  ' src='https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg' alt='chitra'/></Link>
            <Link to='#'><img className=' w-10 bg-black' src='https://static.vecteezy.com/system/resources/previews/011/721/127/original/reels-content-video-png.png' alt='chitra'/></Link>
            <Link to='/addpost'> <div className='w-10 text-center  text-2xl border-2 border-slate-100 text-white aspect-square rounded-full bg-black' >+</div></Link>
            <Link to='/Userdetail'><div className='w-8  aspect-square rounded-full bg-white  ' src='' alt='chitra'></div></Link>
        </div>
    </div>
  )
}
