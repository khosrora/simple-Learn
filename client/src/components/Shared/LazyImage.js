import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const MyImage = ({ url, name }) => (
    <LazyLoadImage
        alt={name}
        effect="blur"
        src={url}
        style={{width : "100%" , height : "100%"}}
    />
);

export default MyImage;