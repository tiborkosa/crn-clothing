import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.util';
import './sign-in.style.scss';

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSignIn = e => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = e => {
        const { value , name} = e.target;

        this.setState({[name] : value});
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSignIn}>
                    <FormInput 
                        label="Email"
                        name= 'email' 
                        type='email' 
                        value= {this.state.email} 
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        label = "Password"
                        name= 'password' 
                        type='password' 
                        value= {this.state.password} 
                        handleChange={this.handleChange}
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                        Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
