import React, { useState } from 'react';
import "../../styles/Search.css";
import {useSearchParams, useParams} from "react-router-dom";

function Search() {
  
    const [searchContent, setSearchContent] = useState("");
    const [searchParams, setSearchParam] = useSearchParams();

  const handleSearchOnChange = (e) =>{
    setSearchContent(e.target.value);
  };

  const handleSearchSubmit = (e) =>{
    e.preventDefault();
    const searchVal = e.target[0].value;
    setSearchParam(searchVal? {"search-input":e.target[0].value}: {});
    console.log(e.target[0].value)
    setSearchContent("");
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input className="search-input" name="searchInput" type="text" placeholder='Search' value={searchContent} onChange={handleSearchOnChange}/>
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  )
}

export default Search
