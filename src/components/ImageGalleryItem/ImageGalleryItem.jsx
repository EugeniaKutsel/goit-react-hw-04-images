import { useState } from "react";
import Modal from "components/Modal/Modal";
import css from "../ImageGalleryItem/ImageGalleryItem.module.css";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, webformatURL, largeImageURL, tags}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <li className={css.galleryItem} key={id} >
        <img className={css.galleryImage} src={webformatURL} alt={tags} onClick={() => setShowModal(true)} />
      </li>
      {showModal && <Modal onClose={() => setShowModal(false)}>
        <img src={largeImageURL} alt={tags} />
      </Modal>}
    </>
  );
}

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
}

export default ImageGalleryItem;