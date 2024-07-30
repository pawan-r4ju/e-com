import React, { useEffect } from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("/")
    }
  }, [])
  return (
    <div className="Profile">
      <ProfileLeft />
      {/* <ProfileSide/> */}
      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  )
}

export default Profile