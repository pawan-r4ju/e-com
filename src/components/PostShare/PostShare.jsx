import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const videoRef = useRef();
  const [video, setVideo] = useState(null)
  const [desc, setDesc] = useState()

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        // `event.target.result` contains the base64 string representing the image
        setImage({
          image: URL.createObjectURL(img),
          base64String: event.target.result
        });
      };
      reader.readAsDataURL(img);
      event.target.value = null;
    }
  }

  const postImage = async (e) => {
    e.preventDefault();
    if (image !== null) {
      console.log("Hit in the image");
      try {
        const formData = new FormData();
        formData.append("images", image.base64String);
        formData.append("name", "Tzuyu");
        formData.append("userId", localStorage.getItem("userId"));
        formData.append("desc", desc);
        formData.append("likes", 0);
        formData.append("liked", false);

        const response = await fetch("http://localhost:8080/api/posts/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Image uploaded successfully:");
        } else {
          console.error("Error uploading image:");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
      window.location.reload()
    }
    else {
      console.log("Hit in the video")
      try {
        const formData = new FormData();
        formData.append("images", video.base64String);
        formData.append("name", "Tzuyu");
        formData.append("userId", localStorage.getItem("userId"));
        formData.append("desc", desc);
        formData.append("likes", 0);
        formData.append("liked", false);

        const response = await fetch("http://localhost:8080/api/posts/upload/video", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          imageRef.current = null;
          setImage()
          setDesc("")
          console.log("Image uploaded successfully:");
        } else {
          console.error("Error uploading image:");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
    imageRef.current = null;
    setImage(null)
    setDesc("")
    setVideo(null)
    videoRef.current = null;
  };

  const onVideoChange = async (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        setVideo({
          video: URL.createObjectURL(img),
          base64String: event.target.result
        });
      };
      reader.readAsDataURL(img);
      // event.target.value = null;
    }

  }

  return (
    <div className="PostShare">
      <img src={localStorage.getItem("image")} alt="" />
      <div>
        <div className="InputContainer">
          <input
            placeholder="What's happening ?!"
            type="text"
            id="files"
            name="file"
            className="input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery style={{ marginRight: 5 }} />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }} onClick={() => videoRef.current.click()}>
            <UilPlayCircle style={{ marginRight: 5 }} />
            Video
          </div>{" "}
          <button className="button-share " onClick={postImage}>
            Share
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="file"
              ref={imageRef}
              onChange={onImageChange}
            />
            <input
              type="file"
              // accept="video/*"
              name="videoFile"
              ref={videoRef}
              onChange={onVideoChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}

        {video && (
          <div className="previewImage">
            <video src={video.video} controls style={{ maxWidth: '100%' }}>
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
