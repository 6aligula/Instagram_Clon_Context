import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";


function Timeline() {
    const [posts, setPosts] = useState([
        
        {
            user: "albaf",
            postImage:
                "https://imgupscaler.com/images/samples/animal-after.webp",
            likes: 25,
            timestamp: "1d",
        },

        {
            user: "miryam_",
            postImage:
                "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",            likes: 48,
            timestamp: "30min",
        },

        {
            user: "jazmin1",
            postImage:
                "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",            likes: 12,
            timestamp: "2h",
        },

        {
            user: "hackaboss",
            postImage:
                "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",            likes: 30,
            timestamp: "3d",
        },
    ]);

    return (
        <div className="timeline">
            <div className="timeline__left">
                <div className="timeline__posts">
                    {posts.map((post) => (
                        <Post
                        user={post.user}
                        postImage={post.postImage}
                        likes={post.likes}
                        timestamp={post.timestamp}
                        />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Suggestions />
            </div>
        </div>
    );
}

export default Timeline;