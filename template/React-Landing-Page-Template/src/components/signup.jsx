import { useState } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

const SERVER_API = 'http://internal-back-alb-749347968.us-east-2.elb.amazonaws.com:8080/api/users'


export const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email) {
      return 'Please enter your email';
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return 'Please enter a valid email';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Please enter a password';
    }
    if (password.length < 8) {
      return 'The password must be 8 characters or longer';
    }
    return '';
  };

  const handleEmailChange = (ev) => {
    const newEmail = ev.target.value;
    setEmail(newEmail);
    setEmailError(validateEmail(newEmail));
  };

  const handlePasswordChange = (ev) => {
    const newPassword = ev.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  const onButtonClick = (e) => {
    // Here you can handle the form submission, if necessary

    if (emailError || passwordError || !email || !name || !password) {
      alert("회원가입 양식을 지키세요!");
      return ;  
    }
    else {
        axios.post(SERVER_API, {
            "username": name,
            "email": email,
            "password": password
        })
        .then( (response) => {
            setName('')
            setEmail('')
            setPassword('')
        
            alert(response.data.msg);
            
        }, e.preventDefault() )
        .catch( (error)=> {
            alert(error);
        });
    }
  };


  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>SignUp</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={name}
          placeholder="Enter your name"
          onChange={(ev) => setName(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />

      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={handleEmailChange}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />

      <div className={'inputContainer'}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={handlePasswordChange}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />

      <div className={"signupLink"}>
        <Link to="/login">
          Go to Login
        </Link>
      </div>
      <br />
      
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Sign Up'} />
      </div>
    </div>
  );
};
