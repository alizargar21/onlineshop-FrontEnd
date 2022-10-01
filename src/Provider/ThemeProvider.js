import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const ThemeContextDispatcher = createContext();

export const LOCAL_STORAGE_THEME_KEY = "Theme";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  //component did mount ///

  useEffect(() => {
    
    const dataTheme = JSON.parse(localStorage.getItem(LOCAL_STORAGE_THEME_KEY));
    setTheme(dataTheme);
  }, []);
  useEffect(() => {
    if(theme === 'dark'){
        document.documentElement.classList.add('dark');
      }else {
        document.documentElement.classList.remove('dark')
      }
     JSON.stringify(
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
    );
  }, [theme]);

  useEffect(() => {
    const themeData = JSON.stringify(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeData);
  }, [theme]);
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextDispatcher.Provider value={setTheme}>
        {children}
      </ThemeContextDispatcher.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
export const useThemeActions = () => useContext(ThemeContextDispatcher);
