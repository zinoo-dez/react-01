import { jwtDecode } from "jwt-decode";
import { createContext, useState, ReactNode, useEffect, useContext } from "react";
interface UserContextType {
  username: string;
  email: string;
  setUser(username: string, email: string): void;
  logout: () => void;
  // setUsername: (username: string) => void;
  // setEmail: (email: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);


export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken: any = jwtDecode(token);
      setUsername(decodedToken.username);
      setEmail(decodedToken.email);
    }
  }, []);
  const setUser = (username: string, email: string) => {
    setUsername(username);
    setEmail(email);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUsername("");
    setEmail("");
  };


  return (
    <UserContext.Provider value={{ username, setUser, email, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
