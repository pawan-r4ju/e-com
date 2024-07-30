import React, { useEffect, useState } from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Posts = ( ) => {
  const [liked, setLiked] = useState('')
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:8080/api/posts/fetchAllPosts");
    const converted = await response.json()
    setPosts(converted)
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  const handleLikes = async (post) => {
    console.log("Attributes", post);
    const formData = {
      _id: post._doc._id,
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
      fetchPosts()
    }
  }

  return (
    <div className="Posts">
      {posts.length > 0 ? posts.reverse().map((post, id) => {
        // return <Post data={post.postBase64} id={id} attribute={post._doc} />
        return (<div className="Post" id={id}>
          {post._doc.format === "image" ? <img src={post._doc.format === "image" ? `data:image/jpeg;base64,${post.postBase64}` : `data:video/mp4;base64,${post.postBase64}`} alt="imagePreviewx" /> : <video src={post._doc.format === "image" ? `data:image/jpeg;base64,${post.postBase64}` : `data:video/mp4;base64,${post.postBase64}`} alt="videoplayer" controls style={{ maxWidth: '100%' }} />}

          <div className="postReact">
            <img src={post._doc.likedUser.includes(localStorage.getItem("userId")) ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={() => handleLikes(post)} />
            <img src={Comment} alt="" style={{ cursor: "pointer" }} />
            <img src={Share} alt="" style={{ cursor: "pointer" }} />
          </div>
          <span style={{ color: "var(--gray)", fontSize: "12px" }}>
            {post._doc.likes} likes
          </span>
          <div className="detail">
            <span>
              <b>{post._doc.name}</b>
            </span>
            <span> {post._doc.desc === undefined ? post._doc.desc : null}</span>
          </div>
        </div>)
      }) : null}
    </div>
  )
}

export default Posts