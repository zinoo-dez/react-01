import { createContext, useState, ReactNode } from "react";

interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (email: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername, email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};
