import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
    return(
        <input 
        type="search" 
        placeholder="Search Robots" 
        id="name" 
        onChange={searchChange}/>
    );
}

export default SearchBox;