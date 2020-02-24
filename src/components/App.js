import React from 'react';
import '../styles/App.scss';
import Title from './Title'
import Overview from './Overview'

function App() {
  return (
    <div className="App">
      <header className="App-container">
        <Title />
        <Overview />
      </header>
    </div>
  );
}

export default App;
