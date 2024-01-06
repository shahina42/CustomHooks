import React, { useState, useEffect } from 'react';

const useStorage = (key, initialValue) => {

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  const [sessionValue, setSessionValue] = useState(() => {
    const StoredValue  = sessionStorage.getItem(key);
    return StoredValue !== null ? StoredValue  : initialValue;
  });


  useEffect(() => {
    sessionStorage.setItem(key, sessionValue);
  }, [key, sessionValue]);

  return { value, setValue, sessionValue, setSessionValue };
};

function App() {
  const { value, setValue, sessionValue, setSessionValue } = useStorage('myInput', '');

  return (
    <div>
      <div className='page'>
      <label>
        Local Storage:
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <br />
      <label>
        Session Storage:
        <input type="text" value={sessionValue} onChange={(e) => setSessionValue(e.target.value)} />
      </label>
      </div>
    </div>
  );
}

export default App;