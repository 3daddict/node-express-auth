import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
    render() {
        return (
            <form>
                <fieldset>
                    <label>Email</label>
                    <Field name="email" type="text" component="input" autoComplete="off" />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field name="password" type="password" component="input" autoComplete="off" />
                </fieldset>
            </form>
        );
    }
}

export default reduxForm({ form: 'signup' })(Signup);