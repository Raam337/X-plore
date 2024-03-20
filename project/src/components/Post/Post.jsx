import "./Post.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

function Post({postData}) {
    console.log(postData)
    return (
        <div className="container">
            <div className="card Post">
                <div className="card-header postTop">
                    <div className="row g-2 align-items-center">
                        <div className="col-auto">
                            <img className="postProfileimg rounded-circle" src={postData.icon} alt=""/>
                        </div>
                        <div className="col">
                            <span className="postUsername">{postData.name}</span>
                            <span className="d-block postDate">{dayjs(postData.time).format("DD/MM/YYYY HH:mm")}</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                    </div>
                </div>
                <div className="card-body postCenter d-flex flex-column">
                    <p className="card-text">{postData.postText}</p>
                    {postData.imgData && <img className="img-fluid postImg" src={postData.imgData} alt=""/>}
                    <span className="postPlace"><b>Location:</b> {postData.place}</span>
                </div>
                <div className="card-footer postBottom">
                    <div className="postBottomLeft">
                        <FontAwesomeIcon icon={faThumbsUp} className="likeIcon" />
                        <span className="icon-text">Like</span>
                        <FontAwesomeIcon icon={faHeart} className="heartIcon" />
                        <span className="icon-text">Love</span>
                        <span className="postlikeCounter icon">1 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <button type="button" className="btn btn-primary" >10 Comments</button>
                    </div>
                </div>
            </div>
        </div>

    );
}


export {Post}