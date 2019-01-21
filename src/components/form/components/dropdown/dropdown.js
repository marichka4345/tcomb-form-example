import React from 'react';
import {OPTIONS} from '../../../../constants/options';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import FormControl from '@material-ui/core/FormControl/FormControl';

const values = OPTIONS;

export const Dropdown = ({name, hasError, value, onChange}) => {
    return (
      <FormControl>
          <InputLabel>{name}</InputLabel>

          <Select error={hasError} value={value} onChange={e => onChange(e.target.value)}>
              {
                  values.map(({id, value}) => (
                    <MenuItem key={id} value={id}>{value}</MenuItem>
                  ))
              }
          </Select>
      </FormControl>
    );
};
