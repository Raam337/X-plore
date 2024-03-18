import "./Post.css"
import React from 'react'
import {MoreVert} from "@material-ui/icons"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop"></div>
                    <div className="postTopLeft"></div>
                    <img className="postProfileImg" src="project/src/assets/profile.png" alt=""/>
                    <span className="postUsername">Kaya123</span>
                    <span className="postDate">15 minutes ago</span>
                    </div>
                    <div className="postTopRight"></div>
<MoreVert />
                <div className="postCenter"></div>
                <span className="postText">Hey, this place is nice & I reccomend</span>
                <img className="postImg" src="" alt=""/>
                
                <div className="postBottom">
                        <div className="postBottomLeft"></div> 
                    <img className="likeIcon" src="project/src/assets/like.png" alt=""/>
                    <img className="heartIcon"src="project/src/assets/heart.jpg" alt=""/>
                    <span className="postlikeCounter">50 people like it</span>
                    
                    <div className="postBottomRight"></div> 
                    <span className="postCommentText">10 Comments</span>
                </div>
                </div> 

    )
}