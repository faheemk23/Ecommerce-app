import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({ loggedIn: false });

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(true);

  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { email } = userInfo ?? { email: "" };

  useEffect(() => {
    if (email !== "jordanwalke@gmail.com") {
      setLoggedIn(false);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
