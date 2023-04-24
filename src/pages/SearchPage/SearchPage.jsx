import React, {useState} from 'react';
import { createCard } from "../AnimeCard/AnimeCard.jsx";


export default function SearchBar ()  {
 const [input, setInput] = useState("");
 
 const fetchData = (value) => {
  fetch("")
  .then((response) => response.json())
  .then?((json) => {}
  )
 };

 const handleChange = (value) => {
  setInput(value)
  fetchData(value)
 };
 

 return (
  <div>
    <input
    placeholder="Search by title"
    type="search-box"
    onChange={(e) => handleChange(e.target.value)}
    value={input} 
    />
  </div>
 );
};





export default function SearchPage() {
 return (
  <div class="search-container">
    <form action="/action_page.php">
      <input 
        type="text"
        placeholder="Seach by title.." 
        name="search"
      />
      <button type="submit">
        <i class="fa fa-search">
      </i></button>
    </form>
    <main className='sidemargin'>
      <div className="columns is-multiline">
      {data.map(createCard)}
      </div>
    </main>
  </div>
 );
}