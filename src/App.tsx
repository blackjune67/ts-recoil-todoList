import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RecoilPrc from './pages/RecoilPrc';
import { ThemContext } from './context/ThemContext';
// import { ThemeContext } from '@emotion/react';



function App() {
  // * 1:변수, 2:setter함수
  const [isDark, setIsDark] = useState(false);
  // console.log(isDark);

  return (
    <ThemContext.Provider value={{ isDark, setIsDark }}>
      <div className="App">
        <RecoilPrc />
      </div>
    </ThemContext.Provider>
  );
}

export default App;
