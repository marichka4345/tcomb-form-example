import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchElement from '@material-ui/core/Switch';

export const Switch = ({name, value, onChange}) => {
    return (
      <FormControlLabel
        control={
            <SwitchElement
              onChange={e => onChange(e.target.value)}
              checked={value}
              value={name}
              color="primary"
            />
        }
        label="Switch"
      />
    );
};
