
import Photo from './Photo.jsx';
//import { useParams } from 'react-router-dom';
//import { useEffect } from 'react';
//import { useState } from 'react';
import NoPhotos from './NoPhotos.jsx';

function PhotoList({ data, pageTitle, changeQuery }) {
    //const [query, setQuery] = useState("");
    
    //const { query } = useParams();
    let photos;

    // useEffect(() => {
    //     console.log(query)
    //     changeQuery(query)
    // })

    //const currentURL = location.pathname.substring(8); //search/dogs
    //let params = useParams(); //{query: 'value typed'}
    //const location = useLocation();

    if(data.length > 0) {
        photos = data.map(photo => {
            return <Photo photo={photo} key={photo.id} />
        })
    } else {
        photos = <NoPhotos />
    }
    
    return (
        <div className="photo-container">
            <h2>{pageTitle}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    ) 

}

export default PhotoList;
