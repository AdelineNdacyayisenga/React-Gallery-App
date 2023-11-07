
import Photo from './Photo.jsx';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import NoPhotos from './NoPhotos.jsx';

function PhotoList({ data, pageTitle, changeQuery }) {
    let params = useParams();
    let location = useLocation();
    let query = pageTitle.split(' ')[0];

    console.log(query);

    useEffect(() => {
        //params are only visible when the browser is on the /search/ route
        if (location.pathname.includes('/search/')) { 
            const currentQuery = params.query;
            if (currentQuery !== query) {
                changeQuery(currentQuery)
            } else {
                changeQuery(query)
            }
        }
    }, [])

    useEffect(() => {
        if(!location.pathname.includes('/search/')) {
            changeQuery(query)
        }
    }, [])

    let photos;

    if(data.length > 0) {
        photos = data.map(photo => {
            return <Photo photo={photo} key={photo.id} />
        })
    }
    
    return (
        <div className="photo-container">
            <h2>{pageTitle}</h2>
            <ul>
                {data.length > 0 ? photos : <NoPhotos />}
            </ul>
        </div>
    ) 
}

export default PhotoList;
