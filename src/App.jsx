import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import QuizPage from "./pages/QuizPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Certificate from "./pages/Certificate";
import ContentViewer from "./pages/ContentViewer";
import GradeBook from "./pages/GradeBook";
import AdminPanel from "./pages/AdminPanel";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? "bg-slate-950 text-white min-h-screen"
          : "bg-slate-100 text-black min-h-screen"
      }
    >
      <BrowserRouter>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route
            path="/"
            element={<Home darkMode={darkMode} />}
          />

          <Route
            path="/courses"
            element={<Courses darkMode={darkMode} />}
          />

          <Route
            path="/content"
            element={<ContentViewer darkMode={darkMode} />}
          />

          <Route
            path="/quiz"
            element={<Quiz darkMode={darkMode} />}
          />

          {/* Dynamic Course Quiz Route */}
          <Route
            path="/quiz/:courseId"
            element={<QuizPage />}
          />

          <Route
            path="/certificate"
            element={<Certificate darkMode={darkMode} />}
          />

          <Route
            path="/grades"
            element={<GradeBook darkMode={darkMode} />}
          />

          <Route
            path="/admin"
            element={<AdminPanel darkMode={darkMode} />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard darkMode={darkMode} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={<Login darkMode={darkMode} />}
          />
          <Route
  path="/signup"
  element={<Signup darkMode={darkMode} />}
/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;