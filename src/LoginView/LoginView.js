import axios from 'axios';
import React, { useState } from 'react';
import './loginView.scss';

const LoginView = ({ setUser }) => {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // useEffect(() => {
  //   fetchFromAPI(`users`).then((data) => {
  //     console.log(data);
  //   });
  // }, []);

  const toggleLoginRegister = () => {
    setLogin(!login);
    setRegister(!register);
  };
  //*dummy login
  // const handleSubmitLogin = (e) => {
  //   e.preventDefault();
  //   const { userName, password } = formData;
  //   console.log(formData);
  //   if (userName.length >= 3 && password.length >= 3) {
  //     setUser({ ...formData, isLogin: true });
  //   } else {
  //     alert('Wrong credentials');
  //   }
  // };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const { userName, password } = formData;
    axios
      .post(
        'https://vegetable-companion-backend.onrender.com/api/users/signin',
        {
          userName: userName,
          password: password,
        }
      )
      .then((data) => {
        const { userName, password } = data.data;
        if (userName === userName && password === password) {
          setUser({ ...formData, isLogin: true });
        } else {
          alert('wrong credentials');
        }
      });
  };
  //*dummy register
  // const handleSubmitRegister = (e) => {
  //   e.preventDefault();
  //   if (formData.password === formData.confirmPassword) {
  //     if (formData.userName.length > 3) {
  //       setUser(formData);
  //     }
  //   } else {
  //     alert('Wrong credentials');
  //   }
  // };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://vegetable-companion-backend.onrender.com/api/users/register`,
        {
          ...formData,
        }
      )
      .then((res) => {
        console.log(res.data);
        setLogin(!login);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <label>{'Email'}</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => onChangeHandle(e)}
            name="email"
            value={formData.email}
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
