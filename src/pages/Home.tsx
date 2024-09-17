import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "photos" && files) {
      setFiles(files);
    } else {
      setInput({ ...input, [name]: value });
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", input.username as string);
    data.append("email", input.email as string);
    data.append("password", input.password as string);

    if (files) {
      Array.from(files).forEach((file, index) => {
        data.append(`photos[${index}]`, file.name);
      });
    }
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }
    // const [val, setVal] = useState(100)
    // console.log('app', app1)
    // console.log('app', app2((p) => p + 1))
    // const handleClick = () => {
    //     setVal(val + 10)
  };
  return (
    <div>
      <p>hello home</p>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="username"
          value={input.username}
          onChange={handleInputChange}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={input.email}
          onChange={handleInputChange}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleInputChange}
        />{" "}
        <br />
        <input
          type="file"
          name="photos"
          multiple
          onChange={handleInputChange}
        />{" "}
        <br />
        <input
          type="submit"
          value="Login"
          className="text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
        />
      </form>
      {/* <p>{val}</p>
            <button onClick={handleClick} className="text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800">Add 10</button>
            <button className="text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800" onClick={() => setVal(val + 1)}>Increment+1</button>
            <button className="text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800" onClick={() => setVal(val + 2)}>Increment+2</button> */}
    </div>
  );
}
