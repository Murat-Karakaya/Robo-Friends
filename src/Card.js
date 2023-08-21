import React from "react";
import "./Card.css";

const Card = ({name, email, id}) => {
    return (
        <div className="cover">
            <div>
            <img alt="Robo Image" src={`https://robohash.org/${name}?100x100`} />
            </div>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card
