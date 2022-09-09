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
    // console.log('toogle click');
    setLogin(!login);
    setRegister(!register);
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(formData);
    setUser({ ...formData, isLogin: true });
  };
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      if (formData.userName.length > 3) {
        setUser(formData);
        console.log('succes');
      }
    } else {
      console.log('not macht');
      alert('Wrong credentials');
    }

    console.log(formData);
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
          <label>
            {'UserName'}
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => onChangeHandle(e)}
              name="userName"
              value={formData.userName}
            ></input>
          </label>
          <label>
            {'Password'}
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => onChangeHandle(e)}
              name="password"
              value={formData.password}
            ></input>
          </label>
          <button onClick={handleSubmitLogin}>Submit</button>
          <button type="button" onClick={() => toggleLoginRegister()}>
            Register
          </button>
        </form>
      ) : (
        <form className="form" onSubmit={handleSubmitRegister}>
          <label>
            {'UserName'}
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => onChangeHandle(e)}
              name="userName"
              value={formData.userName}
            ></input>
          </label>
          <label>
            {'Password'}
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => onChangeHandle(e)}
              name="password"
              value={formData.password}
            ></input>
          </label>
          <label>
            {'Confirm Password'}
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => onChangeHandle(e)}
              name="confirmPassword"
              value={formData.confirmPassword}
            ></input>
          </label>
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
