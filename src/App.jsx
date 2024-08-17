import { useState } from 'react';

import './App.css';

function App() {
  const [pass, setPass] = useState('');
  const [length, setLength] = useState(8);
  const [isCopied, setIsCopied] = useState(false);

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";

  const handleLengthChange = (e) => {
    setLength(parseInt(e.target.value)); // Ensure length is a number
  };

  const handleCopy = async () => {
    if (!pass) return; // Don't copy if no password generated

    try {
      await navigator.clipboard.writeText(pass);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const generatePassword = () => {
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setPass(password);
  };

  return (
    <div className='App'>
      <div className='container'>
        <div className="container1">
          <input type="text" value={pass} onChange={() => {}} readOnly /> 
          <button onClick={handleCopy}>
           Copy
          </button>
        </div>
        <div className='container2'>
          <input type='range' value={length} min={8} max={12} onChange={handleLengthChange} />
          <label style={{ color: 'white' }}>{length}</label>
          <button onClick={generatePassword}>Create Pass</button>
        </div>
      </div>
    </div>
  );
}

export default App;