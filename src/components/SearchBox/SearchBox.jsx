import React from 'react';
import './SearchBox.css'
const SearchBox= ({onInputChange})=>      //Can be called without using props
{
    return(
        <div className="search-container">
            <input onChange={(event)=> onInputChange(event.target.value)} placeholder="Type KeyWords" className="search-input" />
        </div>          /* onChange to record any change made in searchBox in console. From children to parent.*/
    );
}

export default SearchBox;
