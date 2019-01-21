import React from 'react';
import {Field} from 'formik';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchElement from '@material-ui/core/Switch';

export const Switch = ({name}) => {
    const renderSwitch = ({field}) => {
        const {value} = field;

        return (
          <FormControlLabel
            control={
                <SwitchElement
                  {...field}
                  checked={value}
                  value={name}
                  color="primary"
                />
            }
            label="Switch"
          />
        );
    };

    return (
      <Field
        fullWidth
        name={name}
        render={renderSwitch}
      />
    );
};
