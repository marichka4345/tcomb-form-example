import React, {Component} from 'react';
import t from 'tcomb-form';

import {VALIDATION_SCHEMA, FORM_OPTIONS, INITIAL_VALUES} from './constants/form-config';

const Form = t.form.Form;


export class TestForm  extends Component {
    form = React.createRef();

    state = {
        value: INITIAL_VALUES
    };

    onChange = (value) => {
        console.log(value);
        this.setState({value});
    };

    render() {
        console.log(this.form.current);

        return (
          <form onSubmit={(e) => {
              e.preventDefault();
              console.log(this.form.current.getValue());
          }}>
              <Form
                ref={this.form}
                type={VALIDATION_SCHEMA}
                options={FORM_OPTIONS}
                value={this.state.value}
                onChange={this.onChange}
              />

              <button type="submit">Submit</button>
          </form>
        );
    }
};
