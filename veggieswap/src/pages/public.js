import React from "react";
import './public.css'
//import 'tomato.jpg' from "../public/statc";

function Listing() {
    return (
        <div className="listingContainer">
            <div className="listing">
                <h4 className="title">item name here</h4>
                <p>item description</p>
                <p>location here</p>
                <a href="google.com">link here</a>
                <i class="messageIcon"></i>
            </div>
        </div>
    );
}

export default function PublicBoard() {
    return(
        <div name="board">
            <div className="listings">
                <Listing/>
                <Listing/>
            </div>
        </div>
    );
}