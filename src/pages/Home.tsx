type HomeProps = {
  username: string | null;
  email: string | null;
};
export default function Home({ username, email }: HomeProps) {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome, {username ?? "Guest"}({email})!</p>
      {/* <button onClick={fetchUserData}>Fetch User Data</button> */}
    </div>
  );
}
// const fetchUserData = async () => {
//   const token = localStorage.getItem("token"); // Get the token from localStorage

//   try {
//     const response = await fetch("http://localhost:4400/profile", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "text/plain",
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch user data");
//     }

//     const userData = await response.json();
//     console.log(userData); // Handle user data as needed
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//   }
// };
