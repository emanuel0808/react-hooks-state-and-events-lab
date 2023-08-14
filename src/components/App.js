import React, { useState } from 'react';
import './App.css'; // Import your CSS file


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <h1>My App</h1>
      <p>This is an example React app with dynamic theming.</p>
    </div>
  );
}

export default App;
