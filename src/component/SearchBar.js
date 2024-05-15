import  './SearchBar.css';
import {useState} from 'react';
import button from "bootstrap";

export default function SearchBar({onSubmit}){
  const [term, setTerm]= useState('');

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        onSubmit(term);
       
    };

    const handleChange=(event)=>{
      setTerm(event.target.value);
    };
      
    return(
       <div className='search-bar'>
            <form onSubmit={handleFormSubmit}>
              <label>Enter the search term</label>
              <input onChange={handleChange} value={term}/>
            </form>
         </div>
    );
}