import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignUp extends Component {
    renderInput(props){
        return(
            <div className="input-field">
                <input {...props.input} type={props.type?props.type:"text"} placeholder={props.placeholder}/>
                <p className="red-text">{props.meta.touched && props.meta.error}</p>
            </div>
        )
    }
    handleSignUp(values){
        console.log('Sign up form submitted: ', values)
    }
    render() {

        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center-align">Sign Up</h1>
                <div className="row justify-content-center">
                    <div className="col s6 offset-3">
                        <div className="card grey lighten-3">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignUp)}>
                                    <Field component={this.renderInput} name="email" placeholder="Enter Your Email" />
                                    <Field component={this.renderInput} name="password" placeholder="Choose a password" type="password" />
                                    <Field component={this.renderInput} name="confirmPassword" placeholder="Confirm password" type="password" />
                                    <button className="btn blue-grey darken-1">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function validate(values){
    const error={};

    if(!values.email){
        error.email="Please enter an email"
    }
    if(!values.password){
        error.password = "Please choose a password"
    }
    if(values.password !== values.confirmPassword){
        error.confirmPassword = "Passwords do not match"
    }

    return error
}

SignUp = reduxForm({
    form: 'sign-up',
    validate
})(SignUp);

export default SignUp