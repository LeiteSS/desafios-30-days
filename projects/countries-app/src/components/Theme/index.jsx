import React, { useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState('light');

  const switTheme = () => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    }
  }


  return (
    <div className='switch'>
      <input type='checkbox' name='switch' role='switch' onClick={switTheme} /> Dark Mode
    </div>
  );
}

export default Theme;