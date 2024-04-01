import { useState } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import './app.css';
import backgroundImg from '../assets/img/background.jpg'
import Weather from '../components/Weather/Weather';

function App() {
  const [citySearch, setCitySearch] = useState("Saint-Nazaire");

  const onSearchClick = (value) => {
    console.log(value);
    setCitySearch(value);
  }

  return (
    <div className="app">
      <Header></Header>
      <img src={backgroundImg} alt="backgroundImg" className='backgroundImg' />
      <main>
        <SearchBar text={citySearch} onSearchClick={onSearchClick}></SearchBar>

        <Weather city={citySearch}></Weather>
      </main>
    </div>
  );
}

export default App;
