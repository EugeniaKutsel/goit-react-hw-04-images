import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from "../ImageGallery/ImageGallery.module.css";
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  const elements = images.map(image => 
    <ImageGalleryItem
      key={image.id}
      webformatURL={image.webformatURL}
      tags={image.tags}
      largeImageURL={image.largeImageURL}
    />
    )
  return (
    <ul className={css.gallery}>
     {elements}
  </ul>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }))
}

export default ImageGallery;

