import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/slice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Find Contact By Name
      <input
        className={css.input}
        type="text"
        name={filter}
        value={filter}
        onChange={changeFilterInput}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};

export default Filter;
