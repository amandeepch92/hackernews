import React from "react";
import {NavLink} from 'react-router-dom';

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
                        <li className="logo">
                            <NavLink to="/">
                                <img src="https://news.ycombinator.com/y18.gif"/>
                            </NavLink>
                        </li>
                        
                         <li className="right-broder active">
                            <NavLink to={"/"}>new</NavLink>
                        </li>
                         <li>
                            <NavLink to={"/comment"}>comments</NavLink>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }

}