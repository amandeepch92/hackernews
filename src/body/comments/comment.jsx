import React from "react";
import "./comment.css";


export default function Comment(props){
        const item = props.data
        return(
            <React.Fragment>
                <div>
                    <p>[-] {item.author} 
                    <span className="hour">{parseInt(item.created_at_i / 86400000)} hour ago</span>
                    </p>

                    <div className="comment-description" dangerouslySetInnerHTML={ { __html: item.text } }></div>
                    <p className="reply"><span>reply</span></p>
                </div>
            </React.Fragment>
        )

}