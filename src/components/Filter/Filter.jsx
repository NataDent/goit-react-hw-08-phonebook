import { useDispatch } from 'react-redux';
import { FilterForm } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterForm>
      <label>Find contacts by name:</label>
      <input
        type="text"
        name="find"
        onChange={event => dispatch(setFilter(event.target.value))}
      />
    </FilterForm>
  );
};
