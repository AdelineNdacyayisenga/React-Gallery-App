import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css'
import apiKey from './config.js';
import Search from './components/Search.jsx';
import Nav from './components/Nav.jsx';
import PhotoList from './components/PhotoList.jsx';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  /**
   * Handle the fetch requests
   * 
   * Q: When I created a regular function, outside the component, I got an error that useState is being used outside a React component; so I move it inside
   * 
   * `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
   */


  useEffect(() => {
    let activeFetch = true;

    axios.get(fetchData(query))
      .then(response => {
        if(activeFetch) {
          setPhotos(response.data.photos.photo)
        }   
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      })
      return () => {activeFetch = false}
  }, [query]);

  function handleQueryChange(searchText) {
    setQuery(searchText);
  }

  return (
    <>
      <div className="container">
        <Search changeQuery={handleQueryChange} />
        <Nav />
        {console.log(query)}
        <Routes>
          <Route path="/" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} />} />
          <Route path="cats" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} />} />
          <Route path="dogs" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} />} />
          <Route path="computers" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} />} />
          <Route path="search/:query" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} />} />
        </Routes>
      </div>

    </>
  )
}

export function fetchData (query) {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
}

export default App

