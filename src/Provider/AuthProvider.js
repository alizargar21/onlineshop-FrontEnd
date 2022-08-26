import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

export const LOCAL_STORAGE_AUTH_KEY = "Auth";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  //component did mount ///
  //  get Data from local storage and update authentication
  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || null;
    setAuth(userData);
  }, []);
  // component did update ?
  // if changed user update again authentication
  useEffect(() => {
    const userData = JSON.stringify(auth);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, userData);
  }, [auth]);
  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
