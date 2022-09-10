import React, { useState } from 'react';
import './loginView.scss';

const LoginView = ({ user, setUser }) => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
  });
  const toggleLoginRegister = () => {
    setLogin(!login);
    setRegister(!register);
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const { userName, password } = formData;
    if (userName.length >= 3 && password.length >= 3) {
      setUser({ ...formData, isLogin: true });
    } else {
      alert('Wrong credentials');
    }
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      if (formData.userName.length > 3) {
        setUser(formData);
      }
    } else {
      alert('Wrong credentials');
    }
  };

  const onChangeHandle = (e) => {
    const { value, name } = e.target;
    setFormData((preFormData) => {
      return {
        ...preFormData,
        [name]: value,
      };
    });
  };
  return (
    <div className="user-view">
      {login ? (
        <form className="form" onSubmit={handleSubmitLogin}>
          <label>{'UserName'}</label>
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => onChangeHandle(e)}
            name="userName"
            value={formData.userName}
          ></input>
          <label>{'Password'}</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => onChangeHandle(e)}
            name="password"
            value={formData.password}
          ></input>
          <button onClick={(e) => handleSubmitLogin(e)}>Submit</button>
          <button type="button" onClick={() => toggleLoginRegister()}>
            Register
          </button>
        </form>
      ) : (
        <form className="form" onSubmit={handleSubmitRegister}>
          <label>{'UserName'}</label>
          <input
            type="text"
            placeholder="UserName"
            onChange={(e) => onChangeHandle(e)}
            name="userName"
            value={formData.userName}
          ></input>
          <label>{'Password'}</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => onChangeHandle(e)}
            name="password"
            value={formData.password}
          ></input>
          <label>{'Confirm Password'}</label>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => onChangeHandle(e)}
            name="confirmPassword"
            value={formData.confirmPassword}
          ></input>
          <button onClick={handleSubmitRegister}>Register</button>
          <button type="button" onClick={() => toggleLoginRegister()}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginView;
