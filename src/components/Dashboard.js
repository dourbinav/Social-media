import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Stories from './Stories'
import Cards from './Cards'
import { useSelector,useDispatch } from 'react-redux'
import { fetchAllposts } from './features/Slice'

export default function Dashboard() {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts.posts) || []


  console.log(posts)
  useEffect(()=>{
    dispatch(fetchAllposts())
  },[dispatch])

  
  return (
    <div>
         <Navbar />
        <Stories/>
        { 
          posts.map((post)=>(
             <Cards key={post.id} post={post}/> 
          ))
        }
        <Footer />
    </div>
  )
}
