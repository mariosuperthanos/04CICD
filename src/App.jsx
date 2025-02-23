import MainContent from './components/MainContent';
// @ts-ignore
import logo from './assets/images/logo.png';
import React from 'react';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
