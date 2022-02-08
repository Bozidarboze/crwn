import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Wrong Email or Password");
    }

    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  buttonStyle = { padding: "15px 35px" };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} required onChange={this.handleChange} label='Email' />
          <FormInput name='password' type='password' value={this.state.password} required onChange={this.handleChange} label='Password' />
          <div className='buttons'>
            <CustomButton style={this.buttonStyle} type='submit'>
              Sign In
            </CustomButton>
            <CustomButton style={this.buttonStyle} type='button' onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
