import { useState } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from "../userSlice";

const SERVER_API = 'http://aiwa-alb-1-1052179513.us-east-2.elb.amazonaws.com:8080/api/users/login'


export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [LoginFlag, SetLogin] = useState(false);

  // 로그인 상태 저장 구현
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onButtonClick = (e) => {
    e.preventDefault(); // 기본 이벤트 막기


    if (!email || !password) {
      alert("제대로 입력하세요!");
      return;
    } else {  // 로그인 성공 로직

      axios.post(SERVER_API, {
        "loginEmail": email,
        "loginPw": password
      })
      .then((response) => {
        setEmail('');
        setPassword('');
        //SetLogin(true);  // 로그인 성공 플래그

        dispatch(loginUser(response.data.data));

        alert(response.data.msg);

        // 예시로 로그인 후 메인 페이지로 이동
        navigate('/');
      })
      .catch((error) => {
        alert(error.response ? error.response.data.message : error.message);
      });
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />

      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
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
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  );
}
