import React, { createContext, useState, useEffect } from "react";
import loadingImg from "../loading.gif";
import { getFirebaseIdToken } from "../util/firebaseFunctions";
import firebase from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  const updateUser = (user) => {
    if (user) {
      const { email, uid } = user;
      const lastLogin = user;
      setCurrentUser({ email, lastLogin, id: uid });
      getFirebaseIdToken().then((tokem) => {
        setToken(token);
        setLoading(false);
      });
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
    return unsubscribe;
  }, []);
  if (loading) return <img src={loadingImg}></img>;
  return (
    <AuthContext.Provider value={{ currentUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
