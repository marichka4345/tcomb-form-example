import React from 'react';
import {EditorState} from 'draft-js';
import t from 'tcomb-form';

import * as FIELDS from '../../../constants/form-fields';
import {OPTIONS} from '../../../constants/options';
import {TextInput} from '../components/text-input/text-input';
import {Dropdown} from '../components/dropdown/dropdown';
import {Autocomplete} from '../components/autocomplete/autocomplete';
import {validate} from '../../../services/validation';
import {AUTOCOMPLETE_TYPE} from '../../../constants/autocomplete-types';
import {DraftJs} from '../components/draft-js/draft-js';
import {RadioGroup} from '../components/radio-group/radio-group';
import {Switch} from '../components/switch/switch';

export const getFormOptions = errorClass => {
    const renderError = error =>
      (error && <div className={errorClass}>{error}</div>);

    return {
        fields: {
            [FIELDS.TEXT1]: {
                template: (locals) => <TextInput name={FIELDS.TEXT1} {...locals} renderError={renderError} />
            },
            [FIELDS.TEXT2]: {
                template: (locals) => <TextInput name={FIELDS.TEXT2} {...locals} renderError={renderError} />
            },
            [FIELDS.DROPDOWN1]: {
                template: (locals) => <Dropdown name={FIELDS.DROPDOWN1} {...locals} renderError={renderError}options={OPTIONS} />
            },
            [FIELDS.DROPDOWN2]: {
                template: (locals) => <Dropdown name={FIELDS.DROPDOWN2} {...locals} renderError={renderError} options={OPTIONS} />
            },
            [FIELDS.AUTOCOMPLETE1]: {
                template: (locals) => <Autocomplete name={FIELDS.AUTOCOMPLETE1} {...locals} renderError={renderError} />
            },
            [FIELDS.AUTOCOMPLETE2]: {
                template: (locals) =>
                  <Autocomplete
                    name={FIELDS.AUTOCOMPLETE2}
                    autocompleteType={AUTOCOMPLETE_TYPE.MULTI}
                    {...locals}
                    renderError={renderError}
                  />
            },
            [FIELDS.DRAFTJS]: {
                template: (locals) => <DraftJs name={FIELDS.DRAFTJS} {...locals} renderError={renderError} />
            },
            [FIELDS.RADIOGROUP1]: {
                template: (locals) => <RadioGroup
                  name={FIELDS.RADIOGROUP1}
                  groupName="Lala"
                  {...locals}
                  options={OPTIONS}
                  renderError={renderError}
                />
            },
            [FIELDS.TOGGLER]: {
                template: (locals) => <Switch name={FIELDS.TOGGLER} {...locals} />
            }
        }
    }
};

export const INITIAL_VALUES = {
    [FIELDS.TEXT1]: '',
    [FIELDS.TEXT2]: '',
    [FIELDS.DROPDOWN1]: '',
    [FIELDS.DROPDOWN2]: OPTIONS[0].id,
    [FIELDS.AUTOCOMPLETE1]: '',
    [FIELDS.AUTOCOMPLETE2]: [],
    [FIELDS.TOGGLER]: false,
    [FIELDS.DRAFTJS]: EditorState.createEmpty(),
    [FIELDS.RADIOGROUP1]: '',
    [FIELDS.TOGGLER]: false
};

export const VALIDATION_SCHEMA = t.struct({
    [FIELDS.TEXT1]: validate(FIELDS.TEXT1),
    [FIELDS.TEXT2]: validate(FIELDS.TEXT1),
    [FIELDS.DROPDOWN1]: validate(FIELDS.DROPDOWN1),
    [FIELDS.AUTOCOMPLETE1]: validate(FIELDS.AUTOCOMPLETE1),
    [FIELDS.AUTOCOMPLETE2]: validate(FIELDS.AUTOCOMPLETE2),
    [FIELDS.DRAFTJS]: validate(FIELDS.DRAFTJS),
    [FIELDS.RADIOGROUP1]: validate(FIELDS.RADIOGROUP1),
    [FIELDS.TOGGLER]: t.Bool
});
