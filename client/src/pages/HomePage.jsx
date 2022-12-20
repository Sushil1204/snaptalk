import React from 'react'
import CreatePost from '../components/CreatePost'
import Navbar from '../components/Navbar'
import ProfileCard from '../components/ProfileCard'
import { useSelector } from 'react-redux'
import Feed from '../components/Feed'
import Advert from '../components/Advert'
import FriendsList from '../components/FriendsList'

const HomePage = () => {
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-2 justify-center">
        <div>
          <ProfileCard userId={_id} picturePath={picturePath}/>
        </div>
        <div className='col-span-2'>
          <CreatePost />
          <Feed userId={_id}/>
        </div>
        <div className="">
          <Advert />
          <FriendsList userId={_id}/>
        </div>
      </div>
      </div>
  )
}

export default HomePage