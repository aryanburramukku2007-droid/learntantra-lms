import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ darkMode, setDarkMode }) {

  const navigate = useNavigate();

  const user = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (

    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        darkMode
          ? "bg-slate-900/90 border-slate-700"
          : "bg-white/90 border-slate-300"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="LearnTantra Logo"
            className="w-12 h-12 object-contain"
          />

          <h1
            className={`text-3xl font-bold ${
              darkMode
                ? "text-yellow-400"
                : "text-orange-500"
            }`}
          >
            LearnTantra
          </h1>

        </div>

        {/* Menu */}

        <div className="flex flex-wrap items-center gap-5">

          <Link to="/">Home</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/content">Content</Link>

          <Link to="/grades">Grades</Link>

          <Link to="/certificate">Certificate</Link>

          <Link to="/admin">Admin</Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-4 py-2 rounded-xl ${
              darkMode
                ? "bg-yellow-500 text-black"
                : "bg-slate-800 text-white"
            }`}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Logout
            </button>
          ) : (
            <div className="flex items-center gap-3">

              <Link
                to="/signup"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
              >
                Login
              </Link>

            </div>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;