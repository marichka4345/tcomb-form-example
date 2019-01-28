import t from 'tcomb-form';
import {text} from '../constants/validation-regexps';
import {ERROR, ERROR_MESSAGES} from '../constants/errors';
import * as FIELDS from '../constants/form-fields';

const min = number => value => {
    return value.length >= number;
};

const max = number => value => {
    return value.length < number;
};

const matches = regexp => value => {
    return value.match(regexp);
};

const required = value => !!value;

const minDraftJs = number => value => {
    const text = value.getCurrentContent().getPlainText('');
    return text.length >= number;
};

const maxDraftJs = number => value => {
    const text = value.getCurrentContent().getPlainText('');
    return text.length < number;
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
    },
    [FIELDS.RADIOGROUP1]: {
        [ERROR.REQUIRED]: required
    }
};

export const validate = name => {
    const fieldChecks = Object.keys(ERROR_MESSAGES[name]).reduce(
      (result, validation) => ({...result, [validation]: true}),
      {}
    );

     const controlType = t.refinement(t.Any, value => {
         if (!value) {value = ''}

         const fieldValidations = FIELD_VALIDATIONS[name];
         Object.entries(fieldValidations).forEach(([error, validate]) => {
             fieldChecks[error] = validate(value);
         });

         return Object.values(fieldChecks).every(isValid => isValid);
     });

    controlType.getValidationErrorMessage = () => {
        const errorMessages = ERROR_MESSAGES[name];

        const error = Object.entries(fieldChecks).find(([error, validation]) => !validation);
        const errorName = error && error[0];

        return errorMessages[errorName];
    };

    return controlType;
};
