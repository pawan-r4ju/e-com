import React, { useEffect, useState } from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
const [profileData,setProfileData] = useState('')
  const fetchInfo = async () => {
    const formData = {
      userId : localStorage.getItem("userId")
    }
    const response = await fetch('http://localhost:8080/api/profile/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    console.log("Fecthing profile info response", response)
    if (response.ok) {
      const resp = await response.json();
      setProfileData(resp)
    }
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={localStorage.getItem("image")} alt="" />
      </div>

      <div className="ProfileName">
        <span>{localStorage.getItem("name")}</span>
      </div>

      <div className="followStatus">
        <div>
          <div className="follow">
            <span>{profileData?.followings}</span>
            <span className="textbased">Followings</span>
          </div>
          {/* <div className="vl"></div> */}
          <div className="follow">
            <span>{profileData?.followers}</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              {/* <div className="vl"></div> */}
              <div className="follow">
                <span>{profileData?.posts}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
