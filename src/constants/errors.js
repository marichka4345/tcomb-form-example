import * as FIELDS from './form-fields';

export const ERROR = {
    MIN: 'min',
    MAX: 'max',
    MATCH: 'match',
    REQUIRED: 'required'
};

export const ERROR_MESSAGES = {
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
    },
    [FIELDS.RADIOGROUP1]: {
        [ERROR.REQUIRED]: 'You should choose one option'
    }
};
