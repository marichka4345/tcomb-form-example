import React, {Component} from 'react';
import PropTypes from 'prop-types';
import t from 'tcomb-form';
import {VALIDATION_SCHEMA, INITIAL_VALUES, getFormOptions} from './constants/form-config';
import {SubmitButtons} from '../submit-buttons/submit-buttons';
import {getServerError, getServerResponse} from '../../services/helpers';
import {TEXT1, TEXT2} from '../../constants/form-fields';
import styles from './form.module.css';

const Form = t.form.Form;

const renderError = error =>
  (error && <div className={styles.error}>{error}</div>);

export class TestForm  extends Component {
    state = {
        value: INITIAL_VALUES,
        options: getFormOptions(renderError),
        isSubmitting: false
    };

    formRef = React.createRef();

    onChange = value => {
        let {options} = this.state;

        const text1 = value[TEXT1];
        const text2 = value[TEXT2];

        if (text2 && text2 !== text1) {
            options = t.update(this.state.options, {fields: {
                    [TEXT2]: {
                        error: {'$set': 'Text2 should match text1'},
                        hasError: {'$set': true}
                    }
                }
            });
        } else {
            options = t.update(this.state.options, {fields: {
                    [TEXT2]: {
                        error: {'$set': ''},
                        hasError: {'$set': false}
                    }
                }
            });
        }

        this.setState({
            value,
            options
        });
    };

    submit = async e => {
        e.preventDefault();

        this.setState({isSubmitting: true});

        const response = await getServerResponse(this.formRef.current.getValue());
        if (response) {
            console.log('Submitted with ', response);
        }

        this.setState({isSubmitting: false});
    };

    submitWithoutValidation = async e => {
        e.preventDefault();

        this.setState({isSubmitting: true});

        const response = await getServerResponse(this.state.value);
        console.log('Submitted with ', response);

        this.setState({isSubmitting: false});
    };

    submitWithServerError = async e => {
        e.preventDefault();

        this.setState({isSubmitting: true});

        const response = await getServerResponse(this.formRef.current.getValue());
        if (response) {
            console.log('Submitted with ', response);

            if (response[TEXT1] !== 'sun') {
                const errors = await getServerError([TEXT1]);

                this.setState({
                    options: t.update(this.state.options, {fields: {
                            [TEXT1]: {
                                error: {'$set': errors[TEXT1]},
                                hasError: {'$set': true}
                            }
                        }
                    }),
                    isSubmitting: false
                });
                console.log('Got error ', errors);
                return;
            } else {
                this.setState({
                    options: t.update(this.state.options, {fields: {
                            [TEXT1]: {
                                error: {'$set': ''},
                                hasError: {'$set': false}
                            }
                        }
                    }),
                    isSubmitting: false
                });
            }
        }

        this.setState({isSubmitting: false});
    };

    render() {
        const {portalSelector} = this.props;

        return (
          <form className={styles.fields}>
              <Form
                ref={this.formRef}
                type={VALIDATION_SCHEMA}
                options={this.state.options}
                value={this.state.value}
                onChange={this.onChange}
              />

              <SubmitButtons
                portalSelector={portalSelector}
                isSubmitting={this.state.isSubmitting}
                submit={this.submit}
                submitWithoutValidation={this.submitWithoutValidation}
                submitWithServerError={this.submitWithServerError}
              />
          </form>
        );
    }
}

TestForm.propTypes = {
    portalSelector: PropTypes.string.isRequired
};
