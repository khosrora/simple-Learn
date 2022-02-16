import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const MyImage = ({ url, name }) => (
    <LazyLoadImage
        alt={name}
        effect="blur"
        src={url}
    />
);

export default MyImage;