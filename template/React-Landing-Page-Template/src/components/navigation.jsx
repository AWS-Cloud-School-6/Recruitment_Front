import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../userSlice';
import { persistor } from "../index"

export const Navigation = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = async () => {
    dispatch(logoutUser());
    //location.reload();
    await persistor.purge();    // persistStore 데이터 날림
    navigate('/login');
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="/">
            RECRUITMENT
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/joblist" className="page-scroll">
                채용 공고
              </Link>
            </li>
            <li>
              <Link to="/myapply" className="page-scroll">
                나의 지원서
              </Link>              
            </li>
            <li className="center-content">
              {user.isLogin ? (
                <div className="page-scroll" >
                  Welcome, {user.name}!
                  <br />
                  <button onClick={onLogoutClick} >Logout</button>
                </div>                
              ) : (
                <Link to="/login" className="page-scroll" >
                  로그인
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
