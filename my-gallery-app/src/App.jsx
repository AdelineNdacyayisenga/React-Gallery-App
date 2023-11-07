import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import apiKey from "./config.js";
import Search from "./components/Search.jsx";
import Nav from "./components/Nav.jsx";
import PhotoList from "./components/PhotoList.jsx";
import PageNotFound from "./components/PageNotFound.jsx";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("food");
  const [loading, setLoading] = useState(true);

  /**
   * Handle the fetch requests
   * `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
   */
  let activeFetch;

  function fetchData(query) {
    setLoading(true);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (activeFetch) {
          setPhotos(response.data.photos.photo)
          setLoading(false)
        }
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }
  useEffect(() => {
    activeFetch = true;
    fetchData(query);
    return () => {
      activeFetch = false;
    };
  }, [query]); //fetch new data whenever the query changes

  //handle query change by updating the query state
  function handleQueryChange(searchText) {
    setQuery(searchText);
  }

  return (
    <>
      <div className="container">
        <Search changeQuery={handleQueryChange} />
        <nav className="main-nav">
          <Nav changeQuery={handleQueryChange} />
          {loading
            ? <p>Loading...</p> //Loading while it's fetching the data
            : (
              <Routes>
                <Route path="/" element={<Navigate to="/food" />} />
                <Route path="/food" element={<PhotoList data={photos} pageTitle={`${query} Photos`} changeQuery={handleQueryChange} />} />
                <Route path="/dogs" element={<PhotoList data={photos} pageTitle={`${query} Photos`} changeQuery={handleQueryChange} />} />
                <Route path="/computers" element={<PhotoList data={photos} pageTitle={`${query} Photos`} changeQuery={handleQueryChange} />} />
                <Route path="/search/:query" element={<PhotoList data={photos} pageTitle={`${query} Photos`} changeQuery={handleQueryChange} />} />
                <Route path="/*" element={<PageNotFound />} />
                
              </Routes>
            )
          }
        </nav>
      </div>
    </>
  )
}

export default App;