import React, {useState} from 'react';
import { createCard } from "../../components/AnimeCard/AnimeCard.jsx";

export default function SearchBar ()  {
 const [searchInput, setSearchInput] = useState("");
 const anime = [{anime.titile}];

 const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
 };
 
 if (searchInput.length > 0) {
  anime.filter((anime) => {
  return anime.match(searchInput);
  });
 }

 return <div>

  <input
   placeholder="Search title"
   type="search"
   onChange={handleChange}
   value={searchInput} 
  />
   <main className='sidemargin'>
    <div className="columns is-multiline">
    {data.map(createCard)}
    </div>
   </main>

 </div>
}

