import './sign-in-page.style.scss'

import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/signUp.component';


function SignInPage() {
  return <div className='sign-in-page'>
    <SignIn />
    <SignUp/>
  </div>;
}

export default SignInPage;
