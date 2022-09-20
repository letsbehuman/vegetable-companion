import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import FilterBar from './FilterBar/FilterBar';
import Feed from './Feed/Feed';
import { fetchFromAPI } from './utils/fetchFromAPI';
import { useState, useEffect } from 'react';
import LoginView from './LoginView/LoginView';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [vegetables, setVegetables] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState({
    id: '',
    name: '',
    userName: '',
    favorite: [],
    isLogin: false,
  });

  const [favVegetables, setFavVegetables] = useState(['Onions', 'Broccoli']);

  useEffect(() => {
    fetchFromAPI(`vegetables/${selectedCategory}`).then((data) => {
      setVegetables(data);
    });

    if (searchTerm) {
      fetchFromAPI(`vegetables/search/${searchTerm}`).then((data) => {
        setVegetables(data);
      });
    }
  }, [selectedCategory, searchTerm, user]);

  const logOut = () => {
    setUser({
      userName: '',
      password: '',
      confirmPassword: '',
      favorite: [],
      isLogin: false,
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <Navbar
            user={user}
            setSearchTerm={setSearchTerm}
            setSelectedCategory={setSelectedCategory}
            logOut={logOut}
          />
          {user.isLogin && (
            <FilterBar
              setSelectedCategory={setSelectedCategory}
              setSearchTerm={setSearchTerm}
            />
          )}
        </div>
        {!user.isLogin ? (
          <LoginView user={user} setUser={setUser} />
        ) : (
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Feed
                  vegetables={vegetables}
                  selectedCategory={selectedCategory}
                  setVegetables={setVegetables}
                  user={user}
                  setFavVegetables={setFavVegetables}
                  favVegetables={favVegetables}
                />
              }
            ></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;

//
