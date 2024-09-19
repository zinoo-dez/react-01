import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4400/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: input.username,
          email: input.email,
          password: input.password,
        }),
      });
      if (!response.ok) {
        if (response.status === 409) {
          setError("User already exists");
          // alert("User already exists");
        } else if (response.status === 400) {
          setError("Invalid email or password");
          // alert("Invalid email or password");
        } else {
          setError("Something went wrong");
          // alert("Something went wrong");
        }
        throw new Error("HTTP server error!");
      }
      const data = await response.json();
      console.log(data);
      navigate("/login");
    } catch (error: any) {
      if (error.message === "Failed to fetch" || error.name === "TypeError") {
        setError("Backend API is not running");
      } else {
        setError(error.message);
      }
      console.log(error.message);
    }
    const data = new FormData();
    data.append("username", input.username as string);
    data.append("email", input.email as string);
    data.append("password", input.password as string);

    for (const [key, val] of data.entries()) {
      console.log(`${key} and ${val}`);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {
          error && (
            <div className="bg-red-500 text-white p-2 rounded-md mb-4">
              {error}
            </div>)
        }
        <form
          action=""
          method="post"
          onSubmit={handleSubmit}
          className="shadow shadow-slate-300 py-5 px-10"
        >
          <h3 className="text-center text-2xl font-bold">Register Form</h3>
          <input
            type="text"
            placeholder="Name"
            name="username"
            value={input.username}
            onChange={handleInputChange}
            className="rounded-md my-2"
          />{" "}
          <br />
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
            value="Register"
            className="text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
          />
        </form>
      </div>
    </>
  );
}
