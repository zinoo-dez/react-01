import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

type LoginProps = {
  setUser: (username: string) => void;
  setEmail: (email: string) => void;
};
export default function Login({ setUser, setEmail }: LoginProps) {
  const navigate = useNavigate();
  // const [loginAttempts, setLoginAttempts] = useState<number>(0);
  // const maxAttempts = 3;
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    // if (loginAttempts >= maxAttempts) {
    //   setError("Too many login attempts. Please try again later.");
    //   setTimeout(() => {
    //     navigate("/");
    //   }, 3000);
    //   return;
    // }
    try {
      const response = await fetch("http://localhost:4400/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: input.email,
          password: input.password,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        if (response.status === 401) {
          setError("Password is incorrect.");
        } else {
          setError(errorData.message || "Failed to log in.");
        }
        // setLoginAttempts((prev) => prev + 1);
        return;
      }
      const data = await response.json();
      const token = data.access_token;
      console.log(data);
      localStorage.setItem("token", token);
      const decodedToken = jwtDecode<{ username: string, email: string }>(token);
      setError(null);
      setUser(decodedToken.username);
      setEmail(decodedToken.email);
      // setLoginAttempts(0);
      navigate("/");
    } catch (error: any) {
      if (error.message === "Failed to fetch" || error.name === "TypeError") {
        setError("Backend API is not running");
      } else {
        setError(error.message);
      }
      // setLoginAttempts(loginAttempts + 1);
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {
          error && (
            <>
              <div className="bg-red-500 text-white p-2 rounded-md mb-4">
                {error}
              </div>
              {/* <p className="text-center mt-2">
                {loginAttempts >= maxAttempts
                  ? "Too many attempts. Please try again later."
                  : `Attempt ${loginAttempts} of ${maxAttempts}`}
              </p> */}
            </>
          )
        }

        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="shadow shadow-slate-300 py-5 px-10"
        >
          <h3 className="text-center text-2xl font-bold">Login Form</h3>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            className="rounded-md my-2"
          />{" "}
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            className="rounded-md my-2"
          />{" "}
          <br />
          <input
            type="submit"
            value="Login"
            className="text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
          />
        </form>
      </div>
    </>
  );
}
