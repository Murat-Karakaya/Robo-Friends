import React from "react";

const Sroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid black', height: "420px", margin:"5px"}}>
            {props.children}
        </div>
    );
};

export default Sroll;