
function Photo(props) {
    const size = 'w'; //small
    return (
        <li >
            <img src={`https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}_${size}.jpg`} alt={`${props.photo.title}`} />
        </li>
    )

}

export default Photo;