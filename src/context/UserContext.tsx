import { jwtDecode } from "jwt-decode";
import { createContext, useState, ReactNode, useEffect } from "react";
interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (email: string) => void;
  getA: string
}

export const UserContext = createContext<UserContextType | null>(null);


export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const getA = "Hello";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      setUsername(decodedToken.username);
      setEmail(decodedToken.email);
    }
  }, [username, email]);
  return (
    <UserContext.Provider value={{ username, setUsername, email, setEmail, getA }}>
      {children}
    </UserContext.Provider>
  );
};
