import css from "../Button/ButtonLoadMore.module.css";
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className={css.loadMore} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button;