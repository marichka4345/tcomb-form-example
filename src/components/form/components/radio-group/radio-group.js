import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'formik';
import RadioGroupControl from '../../../common/radio-group/radio-group';
import {OPTIONS} from '../../../../constants/options';

export const RadioGroup = ({name, hasError, groupName}) => {
    const renderRadioGroup = ({field}) => {
        const controlProps = {
            field,
            hasError,
            groupName,
            values: OPTIONS
        };
        return (<RadioGroupControl {...controlProps} />);
    };

    return (
      <Field
        name={name}
        render={renderRadioGroup}
      />
    );
};

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
    groupName: PropTypes.string.isRequired
};

RadioGroup.defaultProps = {
    hasError: false
};
