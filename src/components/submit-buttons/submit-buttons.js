import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import styles from './submit-buttons.module.css';

export class SubmitButtons extends Component {
    render() {
        const {submit} = this.props;

        return (
          <div className={styles.root}>
              <Button
                variant="contained"
                color="primary"
                onClick={submit}
                className={styles.button}
              >
                  Save with validation
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={submit}
                className={styles.button}
              >
                  Save without validation
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={submit}
                className={styles.button}
              >
                  Save with server error
              </Button>
          </div>
        );
    }

}
