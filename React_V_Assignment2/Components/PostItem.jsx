import React from "react";

function PostItem({ post }){
    return(
        <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
        <p>{post.userId}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
    )
}

export default PostItem;