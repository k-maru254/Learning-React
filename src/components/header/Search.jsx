import React, { useState } from 'react';
import "../../styles/Search.css"

function Search() {

    const [searchContent, setSearchContent] = useState("");

  return (
    <div className="search" onSubmit={e=>{e.preventDefault()
    }}>
      <form className="search-form">
        <input className="search-input" name="searchInput" type="text" placeholder='Search'/>
        <button type="submit" value={searchContent} className="search-button" onChange={e => setSearchContent(e.target.value)}>Search</button>
      </form>
    </div>
  )
}

export default Search
