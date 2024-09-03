import { useState, useContext } from "react";
import React from "react";
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from "../userSlice";
import { AuthContext } from "../AuthContext"
import UserProfile from "./UserProfile";
const SERVER_API = 'http://aiwa-alb-1-1052179513.us-east-2.elb.amazonaws.com:8080/api/users/login'

export const Login = (props) => {
  //const [LoginFlag, SetLogin] = useState(false);

  // 로그인 상태 저장 구현
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { user, signIn } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await signIn(username, password)
    } catch (err) {
      setError(err.message)

    }
  }

  // If the user is logged in, don't show the login form
  if (user) {
    // Redirect to the profile page
    return <Navigate to="/UserProfile" />
    console.log("Login Success")
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />

      <div className={'inputContainer'}>
        <input
          value={username}
          placeholder="Enter your email here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />

      <div className={'inputContainer'}>
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />

      <div className={"signupLink"}>
        <a href="/signup">
          Don't you have an account? Sign up
        </a>
      </div>
      <br />

      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={handleSubmit} value={'Log in'} />
      </div>
    </div>
  );
}
