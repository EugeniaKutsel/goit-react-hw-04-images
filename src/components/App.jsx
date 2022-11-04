import {useState, useEffect} from "react";
import css from "../components/App.module.css";
import { toast, ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Button from "./Button/ButtonLoadMore";
import * as API from "../services/imagesApi";

const App = () => {
  const [searchWord, setSearchWord] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    if (searchWord === '') {
      return;
    }
    async function fetchImages() {
      try {
        setLoading(true)
        const images = await API.getImages(searchWord, page);
        if (images.length === 0) {
          return toast.error(`Soory, there are no images with ${searchWord} word :( `);
        } else {
          setImages(prev => [...prev, ...images])
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [page, searchWord])

  const handleFormSubmit = searchWord => {
    setSearchWord(searchWord);
    setImages([]);
    setPage(1);
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
    setLoading(true);
  }

  return (
    <div className={css.app}>
      <ToastContainer autoClose={2000} hideProgressBar={true} />
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery images={images} />
      {error && <h2 className={css.error}>Ooops, something wrong :( Please, try again </h2>}
      {loading && <Loader />}
      {images.length > 0 && <Button onClick={loadMore} />}
    </div>
  );
}

export default App;