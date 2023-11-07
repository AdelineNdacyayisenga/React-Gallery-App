
import Photo from './Photo.jsx';
import { useLocation } from 'react-router-dom';

function PhotoList({ data, pageTitle }) {

    const location = useLocation();
    const currentURL = location.pathname;

    //let params = useParams(); //{query: 'value typed'}
    
    let photos = data.map(photo => <Photo photo={photo} key={photo.id} />)

    return (
        <div className="photo-container">
            {console.log(currentURL)}
            <h2>{pageTitle}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default PhotoList;
