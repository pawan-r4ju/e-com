import React, { useEffect, useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Post = ({ data, attribute }) => {
  const [liked, setLiked] = useState('')
  const url = attribute.format === "image" ? `data:image/jpeg;base64,${data}` : `data:video/mp4;base64,${data}`;

  const handleLikes = async () => {
    console.log("Attributes", attribute);
    const formData = {
      _id: attribute._id,
      userId: localStorage.getItem("userId")
    }
    const response = await fetch('http://localhost:8080/api/profile/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    console.log("like response", response)
    if (response.ok) {
      const resp = await response.json();
      console.log("Result : ", resp)
    }
  }

  return (
    <div className="Post">
      {attribute.format === "image" ? <img src={url} alt="imagePreviewx" /> : <video src={url} alt="videoplayer" controls style={{ maxWidth: '100%' }} />}

      <div className="postReact">
        <img src={attribute.likedUser.includes()? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLikes} />
        <img src={Comment} alt="" style={{ cursor: "pointer" }} />
        <img src={Share} alt="" style={{ cursor: "pointer" }} />
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {liked.likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{attribute.name}</b>
        </span>
        <span> {attribute.desc === undefined ? attribute.desc : null}</span>
      </div>
    </div>
  );
};

export default Post;
