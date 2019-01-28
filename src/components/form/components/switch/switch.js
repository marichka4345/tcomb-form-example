import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchElement from '@material-ui/core/Switch';

export const Switch = ({name, value, onChange}) => {
    return (
      <FormControlLabel
        control={
            <SwitchElement
              onChange={e => onChange(e.target.checked)}
              checked={value}
              value={name}
              color="primary"
            />
        }
        label="Switch"
      />
    );
};

Switch.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};
