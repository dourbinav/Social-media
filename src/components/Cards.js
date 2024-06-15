import React from 'react'

export default function Cards({post}) {
    
    console.log(post)
  return (
    <div className=' p-1 z-30 '>
        <div className='bg-indigo-300  p-1  '>
            <div className='aspect-square relative  p-1'>
                    <div className=' flex items-center gap-2 relative '>
                        <p className='bg-blue-700 w-10 aspect-square rounded-full block'></p>
                            <div className='flex flex-col '>
                                <h2>{post.username}</h2>
                                <h2 className='text-xs'>Address </h2>
                             </div>
                             
                    </div>
                    <div className=''>
                        <img className='object-fill h-60 w-full' src={post.PostUrl} alt='/'/>
                        </div>   
                        <div className='flex relative left-0 bottom-0 gap-2 z-20'>
                        <div><i class="fa fa-heart"></i></div>
                            <div><i class="far fa-comment"></i></div>

                            <div><i class="fa fa-telegram"></i></div>
                            </div> 
                            <div className='flex space-x-2 items-center '>
                            <p className='text-xs'>{post.timestamp}</p>
                            <p>{post.Caption}</p>   
                            </div>
            </div>
        </div>
    </div>
  )
}
