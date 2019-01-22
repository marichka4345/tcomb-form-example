import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import NoSsr from '@material-ui/core/NoSsr';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import CancelIcon from '@material-ui/icons/Cancel';
import {AUTOCOMPLETE_TYPE} from '../../../../constants/autocomplete-types';
import {OPTIONS} from '../../../../constants/options';

const options = OPTIONS.map(({id: value, value: label}) => ({value, label}));

function MultiValue(props) {
    return (
      <Chip
        tabIndex={-1}
        label={props.children}
        onDelete={props.removeProps.onClick}
        deleteIcon={<CancelIcon {...props.removeProps} />}
      />
    );
}

const components = {
    MultiValue
};

export class Autocomplete extends Component {
    state = {
        selectedOption: null
    };

    onChange = async (selectedOption) => {

        const {
            autocompleteType,
            onChange
        } = this.props;

        await this.setState({selectedOption});

        const value = autocompleteType === AUTOCOMPLETE_TYPE.SINGLE
          ? selectedOption.value
          : selectedOption.map(({value}) => value);

        onChange(value);
    };

    render() {
        const {
            autocompleteType,
            error,
            renderError
        } = this.props;

        return (
          <FormControl
            fullWidth
            error={!!error}
          >
              <NoSsr>
                  <Select
                    options={options}
                    placeholder="Search a value"
                    value={this.state.selectedOption}
                    onChange={this.onChange}
                    isMulti={autocompleteType === AUTOCOMPLETE_TYPE.MULTI}
                    components={components}
                  />
              </NoSsr>

              {renderError(error)}
          </FormControl>
        );
    }
}

Autocomplete.propTypes = {
    autocompleteType: PropTypes.string,
    error: PropTypes.string,
    renderError: PropTypes.func.isRequired
};

Autocomplete.defaultProps = {
    autocompleteType: AUTOCOMPLETE_TYPE.SINGLE,
    error: ''
};

