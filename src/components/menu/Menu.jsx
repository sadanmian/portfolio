import React from 'react'
import "./menu.scss"

export default function Menu({ open, close }) {
    return (
        <div className={"menu " + (open && "active")}>
            <ul>
                <li onClick={() => close(!open)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => close(!open)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => close(!open)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => close(!open)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => close(!open)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
