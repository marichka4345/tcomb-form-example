import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField/TextField';

export const TextInput  = ({name, value, hasError, onChange, error, renderError}) => {
    const change = e => {
        const value = e.target.value;
        onChange(value);
    };

    return (
      <Fragment>
          <TextField
            onChange={e => change(e)}
            value={value}
            error={hasError}
            label={name}
          />

          {renderError(error)}
      </Fragment>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
    renderError: PropTypes.func.isRequired
};
