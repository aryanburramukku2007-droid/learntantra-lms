import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {

    e.preventDefault();

    localStorage.setItem("userEmail", email);

    navigate("/dashboard");
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 px-4">

      <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 p-10 rounded-3xl shadow-2xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">

          <div>

            <label className="text-slate-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="text-slate-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 text-white outline-none focus:border-blue-500"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-4 rounded-xl text-lg font-semibold"
          >
            Login
          </button>
          <p className="mt-4 text-center">
  Don't have an account?{" "}
  <Link to="/signup" className="text-blue-400">
    Sign Up
  </Link>
</p>

        </form>

      </div>

    </div>

  );
}

export default Login;