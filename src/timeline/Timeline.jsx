import React, { useState, useEffect } from "react";
//import axiosConfig from '../app/axiosConfig';
import Reel from "./Reels/Reel";
import Post from "./Post/Post.jsx";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import { useUserContext } from "../features/userContext";


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

    // Si necesitas información del usuario actual, deberías obtenerla directamente del contexto
    const { user } = useUserContext();

    /* useEffect(() => {
        axiosConfig.get("/api/reels")
            .then((response) => {
                setReels(response.data);
            })
            .catch((error) => {
                console.error("Error fetching reels:", error);
            });
    }, []); */


    // return (
    //     <div className="timeline">
    //         <div className="timeline__left">
    //             <div className="timeline__reels">
    //                 {reels.map((reel, index) => (
    //                     <Reel
    //                         key={reel.id || index} // Asegúrate de que cada reel tenga una propiedad 'id' única
    //                         user={reel.user}
    //                         reelImage={reel.reelImage}
    //                         likes={reel.likes}
    //                         timestamp={reel.timestamp}
    //                     />
    //                 ))}
    //             </div>
    //         </div>
    //         <div className="timeline__right">
    //             <Suggestions />
    //         </div>
    //     </div>
    // );
    return (
        <div className="timeline">
            <div className="timeline__left">
                <div className="timeline__posts">
                    {posts.map((post, index) => (
                        <Post
                        key={post.id || index}
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