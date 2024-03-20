import "./Post.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faHeart as regularHeart } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';

function Post() {
    return (
        <div className="container col-6">
            <div className="card Post">
                <div className="card-header postTop">
                    <div className="row g-2 align-items-center">
                        <div className="col-auto">
                            <img className="postProfileimg rounded-circle" src="./src/assets/profile.png" alt=""/>
                        </div>
                        <div className="col">
                            <span className="postUsername">{postData.name}</span>
                            <span className="d-block postDate">15 minutes ago</span>
                        </div>
                    </div>
                    <div className="postTopRight">
                    </div>
                </div>
                <div className="card-body postCenter">
                    <p className="card-text">{postData.postText}</p>
                    {postData.imgData && <img className="img-fluid postImg" src={postData.imgData} alt=""/>}
                </div>
                <div className="card-footer postBottom">
                    <div className="postBottomLeft">
                        <FontAwesomeIcon icon={faThumbsUp} className="likeIcon" />
                        <span className="icon-text">Like</span>
                        <FontAwesomeIcon icon={faHeart} className="heartIcon" />
                        <span className="icon-text">Love</span>
                        <span className="postlikeCounter icon">{likeCount} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <button type="button" className="btn btn-primary" onClick={handleComment}>10 Comments</button>
                    </div>
                    {postData.place && (
                    <div className="card-footer postBottom">
                        <span className="postPlace">Place: {postData.place}</span>
                    </div>
                )}
                </div>
            </div>
        </div>

    );
}


export {Post}