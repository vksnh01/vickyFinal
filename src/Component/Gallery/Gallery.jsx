import React from "react";
import './Gallery.css';
import galleryData from './GalleryData'

const Gallery = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setData(galleryData);
    }, []);
    return (<>
        <div className="Container">
            <div className="title">
                <h1>Gallery</h1>
            </div>
            {
                data.map((elem) => {
                    const { url, name } = elem;
                    return (<>
                        <div className="img">
                            <img src={url} alt={name} />
                        </div>
                    </>)
                })
            }

            {/* <div className="img">
            <img src="" alt="img" />
        <h1>g</h1>
        </div>
        <div className="img">
            <img src="" alt="img" />
        <h1>g</h1>
        </div>
        <div className="img">
            <img src="" alt="img" />
        <h1>g</h1>
        </div> */}
        </div>
    </>)
}
export default Gallery;