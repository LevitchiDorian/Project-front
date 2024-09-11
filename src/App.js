import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Category from './components/Category';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Category />
      <Recommendations />
    </div>
  );
}

export default App;
