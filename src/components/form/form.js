import React, {Component} from 'react';
import t from 'tcomb-form';

import {VALIDATION_SCHEMA, getFormOptions, INITIAL_VALUES} from './constants/form-config';

import styles from './form.module.css';

const Form = t.form.Form;


export class FormBase  extends Component {
    state = {
        value: INITIAL_VALUES,
        options: getFormOptions(styles.error)
    };

    onChange = (value) => {
        this.setState({value});
    };

    render() {
        const {form} = this.props;

        return (
          <form>
              <Form
                ref={form}
                type={VALIDATION_SCHEMA}
                options={this.state.options}
                value={this.state.value}
                onChange={this.onChange}
              />
          </form>
        );
    }
}

export const TestForm = React.forwardRef((props, ref) => <FormBase form={ref} {...props} />);
