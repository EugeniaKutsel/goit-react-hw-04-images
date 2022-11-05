import {useState} from "react";
import { toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';
import css from "../Searchbar/Searchbar.module.css";
import { BsSearch } from "react-icons/bs";
import PropTypes from 'prop-types';

const Searchbar = ({onSubmit}) => {
  const [searchWord, setSearchWord] = useState('');

  const handleWordChange = e => {
    setSearchWord(e.currentTarget.value.toLowerCase());
  }

  const handleSubmit = e => {
    e.preventDefault();
     if (searchWord.trim() === '') {
       return toast.error("Enter search name to find some images!");
     }
     onSubmit(searchWord);
    //  this.setState({ searchWord: ''}); //очистка поля ввода после нажатия на поиск
  }


  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <BsSearch style={{ width: 20, height: 20 }} />
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchWord}
          onChange={handleWordChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;