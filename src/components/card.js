import React from "react";
import "../styles/card.css";

const card = (props) =>{
    return (
        <div className="cardWrapper" data-test-id={"menu-item-"+props.category} id={props.id}>
            <div className="cardDiv">
                <img className="cardImg" src={props.img}></img>
                <div className="cardContent">
                    <div className="cardTop">
                        <h1 className="cardName">{props.title}</h1>
                        <p className="cardPrice">$ {props.price}</p>
                    </div>
                    <hr className="cardLine"></hr>
                    <div className="cardDescription">{props.desc}</div>
                </div>


            </div>
            
        </div>
    )
}

export default card;
