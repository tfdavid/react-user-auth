import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'
import { renderInput } from "../helpers"
import { signIn } from "../actions"

class SignIn extends Component{
    handleSignIn(values) {
        console.log('Sign in form submitted: ', values)
        this.props.signIn(values)
    }
    render() {

        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center-align">Sign In</h1>
                <div className="row justify-content-center">
                    <div className="col s6 offset-3">
                        <div className="card grey lighten-3">
                            <div className="card-content">
                                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                    <Field component={renderInput} name="email" placeholder="Enter Your Email" />
                                    <Field component={renderInput} name="password" placeholder="Enter Your Password" type="password" />
                                    <button className="btn blue-grey darken-1">Sign In</button>
                                    <p className="red-text center-align">{this.props.authError}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SignIn = reduxForm({
    form: 'sign-in-form'
})(SignIn);

function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, { signIn })(SignIn)