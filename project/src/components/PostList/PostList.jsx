import { useEffect, useState } from "react";
import { getRef, onValue } from "../../assets/utils/database";
import { Post } from "../Post/Post";

export default function PostList() {
    const [posts,setPosts] = useState({});

    useEffect( ()=> {
        onValue(getRef(),(snap)=>{
            setPosts(snap.val());
            console.log(posts);
        });
    },[])

    return(
        <>
        {Object.entries(posts).map(( [id,value] )=>{
            console.log(value)
            return (
                <Post key={id} postData={value}></Post>
            )
        } ).reverse()}
        </>
    )

}