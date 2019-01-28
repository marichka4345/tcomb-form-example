import React from 'react';
import PropTypes from 'prop-types';
import FormLabel from '@material-ui/core/FormLabel/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import Radio from '@material-ui/core/Radio/Radio';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl/FormControl';

export const RadioGroup = ({name, groupName, options, value, renderError, error, onChange}) => {
    return (
      <FormControl margin="dense">
          <FormLabel>{groupName}</FormLabel>
          <MuiRadioGroup name={name} value={value} onChange={e => onChange(e.target.value)}>
              {
                  options.map(({id, value: label}) => (
                    <FormControlLabel
                      key={id}
                      control={<Radio color="primary" />}
                      label={label}
                      value={String(id)}
                    />
                  ))
              }
          </MuiRadioGroup>

          {renderError(error)}
      </FormControl>
    );
};

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    groupName: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    renderError: PropTypes.func.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

RadioGroup.defaultProps = {
    error: ''
};
