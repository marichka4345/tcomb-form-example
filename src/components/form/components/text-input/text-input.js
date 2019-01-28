import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField/TextField';

export const TextInput  = ({name, value, onChange, error, renderError}) => {
    return (
      <Fragment>
          <TextField
            onChange={e => onChange(e.target.value)}
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
