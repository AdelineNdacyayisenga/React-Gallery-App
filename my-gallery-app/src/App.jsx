import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css'
import apiKey from './config.js';
import Search from './components/Search.jsx';
import Nav from './components/Nav.jsx';
import PhotoList from './components/PhotoList.jsx';
import NoPhotos from './components/NoPhotos.jsx';

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cats");

  /**
   * Handle the fetch requests
   * `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
   */

  function fetchData(query) {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setPhotos(response.data.photos.photo)
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      })
  }

  useEffect(() => {fetchData(query)}, [query])

  function handleQueryChange(searchText) {
    setQuery(searchText);
  }

  return (
    <>
      <div className="container">
        <Search changeQuery={handleQueryChange} />
        <nav className="main-nav">
          <Nav changeQuery={handleQueryChange} />
          <Routes>
            <Route path="/" element={<Navigate to="/cats" />} />
            <Route path="/cats" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} changeQuery={handleQueryChange} />} />
            <Route path="/dogs" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} changeQuery={handleQueryChange} />} />
            <Route path="/computers" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} changeQuery={handleQueryChange} />} />
            <Route path="/search/:query" element={<PhotoList data={photos} pageTitle={`${query} Gifs`} changeQuery={handleQueryChange} />} />
            <Route path="/*" element={<NoPhotos />} />
          </Routes>
        </nav>
      </div>

    </>
  )
}

export default App

