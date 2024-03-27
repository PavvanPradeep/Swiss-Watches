import React, { useState, useEffect, useRef } from "react";
import './Search.css';
import SearchResult from './SearchResult.jsx';

export default function Search({isOpen,closeSearch}) {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const inputRef = useRef(null);

    console.log("closeSearch:",closeSearch);
    useEffect(() => {
        const handleEscapeKeyPress = (event) => {
          if (event.key === 'Escape') {
            closeSearch();
          }
        };
    
        // Add an event listener for the 'Escape' key
        document.addEventListener('keydown', handleEscapeKeyPress);
    
        // Cleanup the event listener on component unmount
        return () => {
          document.removeEventListener('keydown', handleEscapeKeyPress);
        };
      }, [closeSearch]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_BACKEND_URL+`/auth/watches/?search=${query}`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data);
                }
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };

        if (query.trim() !== "") {
            fetchSearchResults();
        } else {
            setSearchResults([]); // Clear results when query is empty
        }
    }, [query]);

    useEffect(() => {
            inputRef.current.focus();
    }
    , []);


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };



return (
   <div>
       {isOpen && (
           <div className="search-container">
               <button id="search-nav-icon" className="search-nav-icon" onClick={closeSearch}>
                    <span></span>
                    <span></span>
               </button>
               <input type="text" className="bg-black" value={query} placeholder="SEARCH" onChange={handleInputChange} ref={inputRef}/>
               <ul>
                  {searchResults.map((result) => (
                      <li key={result.id}>
                        <SearchResult result={result} searchTerm={query} />
                      </li>
                  ))}
               </ul>
           </div>
       )}
   </div>
);

     
}
