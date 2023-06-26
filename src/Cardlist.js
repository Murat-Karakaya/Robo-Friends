import React from "react";
import Card from "./Card";

export default function Cardlist({robots}) {
    return(
        <div className='card-cover'>
            {robots.map((user, i) => <Card key = {robots[i].username} id = {robots[i].id} name={robots[i].name} email={robots[i].email}/>)}
        </div>
    );
}