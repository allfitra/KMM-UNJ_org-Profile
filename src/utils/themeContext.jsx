import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  // localStorage.setItem('theme', 'light'); // Default to light theme if not set

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  // }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
};
