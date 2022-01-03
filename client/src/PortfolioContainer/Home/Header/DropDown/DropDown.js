import React, { useState, useRef } from "react";
import "./DropDown.css";

export default function DropDown(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="drop-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}
