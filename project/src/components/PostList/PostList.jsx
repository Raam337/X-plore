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
        {Object.values(posts).map( (entry, index)=>{
            console.log(entry)
            return (
                // <div class="card">
                //     <img src={entry.icon} class="card-img-top" alt="..." />
                //     <div class="card-body">
                //         <h5 class="card-title">{entry.name}</h5>
                //         <p class="card-text">{entry.postText}</p>
                //         <a href="#" class="btn btn-primary">{dayjs(entry.time).format("DD/MM/YYYY HH:mm")}</a>
                //         <img src={entry.imgData} />
                //         <p class="card-text">{entry.place}</p>
                //     </div>
                // </div>
                <Post postData={entry}></Post>

            )
        } ).reverse()}
        </>
    )

}