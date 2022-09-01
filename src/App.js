import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import FilterBar from './FilterBar/FilterBar';
import Feed from './Feed/Feed';
import { fetchFromAPI } from './utils/fetchFromAPI';
import { useState, useEffect } from 'react';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [vegetables, setVegetables] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchFromAPI(`vegetables/?type=${selectedCategory}`).then((data) => {
      setVegetables(data);
      console.log(data);
    });

    if (searchTerm) {
      fetchFromAPI(`vegetables/${searchTerm}`).then((data) => {
        setVegetables(data);
      });
    }
  }, [selectedCategory, searchTerm]);

  if (!vegetables) return 'loading... vegetables';
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav">
          <Navbar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setSelectedCategory={setSelectedCategory}
            setVegetables={setVegetables}
          />
          <FilterBar
            setSelectedCategory={setSelectedCategory}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Feed
                vegetables={vegetables}
                selectedCategory={selectedCategory}
                setVegetables={setVegetables}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
