import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField/TextField';

export const TextInput  = ({name, value, onChange, error, renderError}) => {
    const change = e => {
        const value = e.target.value;
        onChange(value);
    };

    return (
      <Fragment>
          <TextField
            onChange={e => change(e)}
            value={value}
            error={!!error}
            label={name}
          />

          {renderError(error)}
      </Fragment>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    renderError: PropTypes.func.isRequired
};
