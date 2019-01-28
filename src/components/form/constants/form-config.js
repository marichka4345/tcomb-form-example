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

export const getFormOptions = renderError => {
    const getControlTemplate = (Control, name, controlProps) => locals =>
      <Control name={name} renderError={renderError} {...locals} {...controlProps} />;

    return {
        fields: {
            [FIELDS.TEXT1]: {
                template: getControlTemplate(TextInput, FIELDS.TEXT1)
            },
            [FIELDS.TEXT2]: {
                template: getControlTemplate(TextInput, FIELDS.TEXT2)
            },
            [FIELDS.DROPDOWN1]: {
                template: getControlTemplate(Dropdown, FIELDS.DROPDOWN1, {options: OPTIONS})
            },
            [FIELDS.DROPDOWN2]: {
                template: getControlTemplate(Dropdown, FIELDS.DROPDOWN2, {options: OPTIONS})
            },
            [FIELDS.AUTOCOMPLETE1]: {
                template: getControlTemplate(Autocomplete, FIELDS.AUTOCOMPLETE1)
            },
            [FIELDS.AUTOCOMPLETE2]: {
                template:
                  getControlTemplate(
                    Autocomplete,
                    FIELDS.AUTOCOMPLETE2,
                    {autocompleteType: AUTOCOMPLETE_TYPE.MULTI}
                  )
            },
            [FIELDS.DRAFTJS]: {
                template: getControlTemplate(DraftJs, FIELDS.DRAFTJS)
            },
            [FIELDS.TOGGLER]: {
                template: getControlTemplate(Switch, FIELDS.TOGGLER)
            },
            [FIELDS.RADIOGROUP1]: {
                template:
                  getControlTemplate(
                    RadioGroup,
                    FIELDS.RADIOGROUP1,
                    {groupName: 'Radiogroup', options: OPTIONS}
                  )
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
    [FIELDS.DRAFTJS]: EditorState.createEmpty(),
    [FIELDS.TOGGLER]: false,
    [FIELDS.RADIOGROUP1]: ''
};

export const VALIDATION_SCHEMA = t.struct({
    [FIELDS.TEXT1]: validate(FIELDS.TEXT1),
    [FIELDS.TEXT2]: validate(FIELDS.TEXT1),
    [FIELDS.DROPDOWN1]: validate(FIELDS.DROPDOWN1),
    [FIELDS.AUTOCOMPLETE1]: validate(FIELDS.AUTOCOMPLETE1),
    [FIELDS.AUTOCOMPLETE2]: validate(FIELDS.AUTOCOMPLETE2),
    [FIELDS.DRAFTJS]: validate(FIELDS.DRAFTJS),
    [FIELDS.TOGGLER]: t.Boolean,
    [FIELDS.RADIOGROUP1]: validate(FIELDS.RADIOGROUP1)
});
