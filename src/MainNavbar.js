import React, {Component} from "react";

export const MainNavbar = (props) => (
    <ul>
    {props.items.map(item =>
        <li>
            <a href="#"> {item}</a>
        </li>
    )}
    </ul>
)