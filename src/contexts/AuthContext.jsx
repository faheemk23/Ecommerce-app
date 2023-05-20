import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({ loggedIn: false });

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const userInfo = JSON.parse(localStorage.getItem("user"));
  const { email } = userInfo ?? { email: "" };

  useEffect(() => {
    if (email === "adarshbalika@gmail.com") {
      setLoggedIn(() => true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
