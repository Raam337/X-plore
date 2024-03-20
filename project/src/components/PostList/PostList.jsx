import { useEffect, useState } from "react";
import { getRef, onValue } from "../../assets/utils/database";
import { Post } from "../Post/Post";

export default function PostList() {
    const [posts,setPosts] = useState({});

    useEffect( ()=> {
        onValue(getRef(),(snap)=>{
            setPosts(snap.val());
        });
    },[])

    if(posts !== null){
        return(
            <>
            {Object.entries(posts).map(( [id,value] )=>{
                return (
                    <Post key={id} postData={value}></Post>
                )
            } ).reverse()}
            </>
        )
    }

}