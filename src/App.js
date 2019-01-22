import React, { Component, Fragment } from 'react';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import {TestForm} from './components/form/form';
import {SubmitButtons} from './components/submit-buttons/submit-buttons';

const generateClassName = createGenerateClassName();
const jss = create({
    ...jssPreset(),
    insertionPoint: 'insertion-point-jss'
});

export default class App extends Component {
    form = React.createRef();

    submit = e => {
        e.preventDefault();

        console.log(this.form.current.getValue());
    };

    render() {
        return (
          <JssProvider jss={jss} generateClassName={generateClassName}>
              <Fragment>
                  <SubmitButtons submit={this.submit} />
                  <TestForm ref={this.form} />
              </Fragment>
          </JssProvider>
    );
    }
}
