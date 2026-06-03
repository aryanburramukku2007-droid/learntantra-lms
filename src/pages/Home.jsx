import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white">

      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">

        <div className="max-w-2xl">

          {/* Logo Section */}

          <div className="flex items-center gap-4 mb-8">

            <img
              src={logo}
              alt="LearnTantra Logo"
              className="w-24 h-24 object-contain"
            />

            <div>
              <h2 className="text-4xl font-bold text-yellow-400">
                LearnTantra
              </h2>

              <p className="text-slate-400">
                Learn • Practice • Achieve
              </p>
            </div>

          </div>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
            Learn
            <span className="text-blue-500"> Without Limits</span>
          </h1>

          <p className="text-slate-400 text-xl mt-8 leading-relaxed">
            Master frontend engineering with interactive
            courses, quizzes, progress tracking,
            certificates, and real-world projects.
          </p>

          <div className="flex gap-6 mt-10">

            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Browse Courses
            </Link>

            <Link
              to="/login"
              className="border border-slate-600 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Get Started
            </Link>

          </div>

        </div>

        {/* LMS Highlights */}

        <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 p-10 rounded-3xl shadow-2xl max-w-md w-full">

          <h2 className="text-3xl font-bold mb-8">
            LMS Highlights
          </h2>

          <div className="space-y-5">

            <div className="bg-slate-900 p-4 rounded-2xl">
              📚 10+ Courses
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl">
              🧠 Interactive Quizzes
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl">
              📜 Certificates
            </div>

            <div className="bg-slate-900 p-4 rounded-2xl">
              📈 Progress Tracking
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;