import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../userSlice';
import { useNavigate } from 'react-router-dom';

export const LoginSuccess = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <div>
      {user.isLogin ? (
        <div className={'mainContainer'}>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in.</h1>
          <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      )}
    </div>

  );
}
