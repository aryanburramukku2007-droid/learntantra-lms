import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup({ darkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully!");

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-950 to-slate-900 text-white">

      <div className="bg-slate-800/60 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md shadow-2xl">

        <h1 className="text-4xl font-bold text-center mb-8">
          Create Account
        </h1>

        <form onSubmit={handleSignup} className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-900 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-slate-900 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-900 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold"
          >
            Sign Up
          </button>

        </form>

        <p className="text-center mt-6 text-slate-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;