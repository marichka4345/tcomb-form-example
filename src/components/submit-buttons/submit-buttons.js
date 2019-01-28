import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {SubmitButton} from './components/submit-button/submit-button';
import styles from './submit-buttons.module.css';

export class SubmitButtons extends Component {
    element = document.createDocumentFragment();

    componentDidMount() {
        const portalContainer = document.getElementById(this.props.portalSelector);
        portalContainer.appendChild(this.element);
    }

    componentWillUnmount() {
        const portalContainer = document.getElementById(this.props.portalSelector);
        portalContainer.removeChild(this.element);
    }

    render() {
        const {
            isSubmitting,
            submit,
            submitWithoutValidation,
            submitWithServerError
        } = this.props;

        return ReactDOM.createPortal(
            <div className={styles.root}>
                <SubmitButton
                    onClick={submit}
                    isSubmitting={isSubmitting}
                    title="Save with validation"
                />

                <SubmitButton
                    onClick={submitWithoutValidation}
                    isSubmitting={isSubmitting}
                    title="Save without validation"
                />

                <SubmitButton
                    onClick={submitWithServerError}
                    isSubmitting={isSubmitting}
                    title="Save with server error"
                />
                <p className={styles.prompt}>
                    Server error on Text1 will be returned after successful submit
                    if the value is other than <strong>sun</strong>
                </p>
            </div>,
          this.element
        );
    };
}

SubmitButtons.propTypes = {
    portalSelector: PropTypes.string.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    submit: PropTypes.func.isRequired,
    submitWithoutValidation: PropTypes.func.isRequired,
    submitWithServerError: PropTypes.func.isRequired
};
