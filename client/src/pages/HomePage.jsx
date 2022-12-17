import React from 'react'
import CreatePost from '../components/CreatePost'
import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'
import Post from '../components/Post'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-2 justify-center">
        <div className=''>
          <ProfileCard/>
        </div>
        <div className='col-span-2'>
          <CreatePost />
          <Post/>
        </div>
      </div>
      </div>
  )
}

export default HomePage