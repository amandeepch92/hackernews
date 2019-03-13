import React from "react";


export default function Comment(props){
        const item = props.data
        return(
            <React.Fragment>
                <div style={{"backgroundColor":"yellow"}}>
                    <p>{item.author} {parseInt(item.created_at_i / 86400000)} hour
                        ago [-]
                    </p>
                    <p>reply</p>
                    <div dangerouslySetInnerHTML={ { __html: item.text } }></div>
                </div>
            </React.Fragment>
        )

}