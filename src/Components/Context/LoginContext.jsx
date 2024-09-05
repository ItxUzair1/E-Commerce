import { createContext, useState, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLogged, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogged, setLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
