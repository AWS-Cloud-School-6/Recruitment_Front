import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../userSlice';
import { useContext } from "react"
import { AuthContext } from "../AuthContext"
export const Navigation = (props) => {
  const navigate = useNavigate();
  const { user, signOut } = useContext(AuthContext)
  const onLogoutClick = async () => {
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
              {user ? (
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
