
import Photo from './Photo.jsx';

function PhotoList({ data, pageTitle }) {
    let photos = data.map(photo => <Photo photo={photo} key={photo.id} />)

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
