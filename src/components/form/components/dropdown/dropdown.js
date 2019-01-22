import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import FormControl from '@material-ui/core/FormControl/FormControl';

export const Dropdown = ({name, value, onChange, error, renderError, options}) => {
    return (
      <FormControl>
          <InputLabel>{name}</InputLabel>

          <Select error={!!error} value={value} onChange={e => onChange(String(e.target.value))}>
              {
                  options.map(({id, value}) => (
                    <MenuItem key={id} value={id}>{value}</MenuItem>
                  ))
              }
          </Select>

          {renderError(error)}
      </FormControl>
    );
};

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    renderError: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

Dropdown.defaultProps = {
    error: ''
};
