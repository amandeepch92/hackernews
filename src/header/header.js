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
                            <a href={"#"}>Hacker News</a>
                        </li>
                         <li>
                            <a href={"#"}>new | </a>
                        </li>
                         <li>
                            <a href={"#"}>past | </a>
                        </li>
                         <li>
                            <a href={"#"}>comments | </a>
                        </li>
                         <li>
                            <a href={"#"}>ask | </a>
                        </li>
                         <li>
                            <a href={"#"}>show | </a>
                        </li>
                         <li>
                            <a href={"#"}>jobs | </a>
                        </li>
                         <li>
                            <a href={"#"}>submit</a>
                        </li>
                         <li>
                            <a href={"#"}>login</a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }

}