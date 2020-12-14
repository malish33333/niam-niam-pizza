import React from "react";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(false);
  const history = useHistory();

  const logIn = (e) => {
    setAuthed(true);
    history.push("/lk");
  };

  const logOut = () => {
    setAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ authed, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
