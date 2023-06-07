import React from 'react';
import css from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'components/store/Filter/filterSelectors';
import { upDate } from 'components/store/Filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectFilter);

  return (
    <div className={css.filter}>
      <h3>Find contacts by name:</h3>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(upDate(e.target.value))}
        className={css.filterInput}
      />
    </div>
  );
};

export default Filter;
