import React from "react";
import "./header.css"
export default class Header extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <React.Fragment>
                <div id="id_header">
                    <ul>
                        <li style={{"fontWeight":"bold", "paddingRight":"4px"}}>
                            <a>Hacker News</a>
                        </li>
                         <li>
                            <a>new | </a>
                        </li>
                         <li>
                            <a>past | </a>
                        </li>
                         <li>
                            <a>comments | </a>
                        </li>
                         <li>
                            <a>ask | </a>
                        </li>
                         <li>
                            <a>show | </a>
                        </li>
                         <li>
                            <a>jobs | </a>
                        </li>
                         <li>
                            <a>submit</a>
                        </li>
                         <li>
                            <a>login</a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }

}