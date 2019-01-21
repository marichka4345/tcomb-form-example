import t from 'tcomb-form';
import {text} from '../constants/validation-regexps';
import * as FIELDS from "../constants/form-fields";

const ERROR = {
    MIN: 'min',
    MAX: 'max',
    MATCH: 'match',
    REQUIRED: 'required'
};

const ERROR_MESSAGES = {
    [FIELDS.TEXT1]: {
        [ERROR.MIN]: 'Text1 should have minimum 2 symbols',
        [ERROR.MAX]: 'Text1 should have maximum 100 symbols',
        [ERROR.MATCH]: 'Text1 should not have special symbols at start/end',
        [ERROR.REQUIRED]: 'Text1 is required'
    },
    [FIELDS.DROPDOWN1]: {
        [ERROR.REQUIRED]: 'Dropdown1 is required'
    },
    [FIELDS.AUTOCOMPLETE1]: {
        [ERROR.REQUIRED]: 'Autocomplete1 is required'
    },
    [FIELDS.AUTOCOMPLETE2]: {
        [ERROR.MIN]: 'You should choose at least 2 values',
        [ERROR.MAX]: 'You should choose maximum 5 values',
        [ERROR.REQUIRED]: 'Autocomplete2 is required'
    },
    [FIELDS.DRAFTJS]: {
        [ERROR.MIN]: 'You should enter minimum 5 symbols',
        [ERROR.MAX]: 'You should enter less than 100 symbols'

    }
};

const min = number => value => {
    return value.length > number;
};

const max = number => value => {
    return value.length < number;
};

const matches = regexp => value => {
    return value.match(regexp);
};

const required = value => !!value;

export const minDraftJs = number => value => {
    const text = value.getCurrentContent().getPlainText('');
    return text.length > number;
};

export const maxDraftJs = number => value => {
    const text = value.getCurrentContent().getPlainText('');
    return text.length < number;
};

const equal = toCompareWith => value => {
    return value === toCompareWith;
};

const FIELD_VALIDATIONS = {
    [FIELDS.TEXT1]: {
        [ERROR.MIN]: min(2),
        [ERROR.MAX]: max(100),
        [ERROR.MATCH]: matches(text),
        [ERROR.REQUIRED]: required
    },
    [FIELDS.DROPDOWN1]: {
        [ERROR.REQUIRED]: required
    },
    [FIELDS.AUTOCOMPLETE1]: {
        [ERROR.REQUIRED]: required
    },
    [FIELDS.AUTOCOMPLETE2]: {
        [ERROR.MIN]: min(2),
        [ERROR.MAX]: max(5),
        [ERROR.REQUIRED]: required
    },
    [FIELDS.DRAFTJS]: {
        [ERROR.MIN]: minDraftJs(5),
        [ERROR.MAX]: maxDraftJs(100)
    }
};

export const validate = (name) => {
    const fieldValidations = Object.keys(ERROR_MESSAGES[name]);
    const validations = fieldValidations.reduce(
      (result, validation) => ({...result, [validation]: true}),
      {}
    );

     const controlType = t.refinement(t.Any, value => {
         const fieldValidations = FIELD_VALIDATIONS[name];
         Object.entries(fieldValidations).forEach(([error, validate]) => {
             validations[error] = validate(value);
         });

         return Object.values(validations).every(validation => validation);
     });

    controlType.getValidationErrorMessage = () => {
        const errorMessages = ERROR_MESSAGES[FIELDS.TEXT1];

        console.log(validations);

        const error = Object.entries(validations).find(([error, validation]) => !validation);
        const errorName = error && error[0];
        return errorMessages[errorName];
    };

     return controlType;
};
