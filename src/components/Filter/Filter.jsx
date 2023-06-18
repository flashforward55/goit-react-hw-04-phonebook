import PropTypes from 'prop-types';
import { Label, FilterInput } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <Label>
      Filter contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
