import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Courses({ darkMode }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/courses")
      .then((response) => {
        console.log("Courses Data:", response.data);
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to load courses");
        setLoading(false);
      });
  }, []);

  const handleEnroll = (courseTitle) => {
    let enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];

    if (!enrolledCourses.includes(courseTitle)) {
      enrolledCourses.push(courseTitle);

      localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(enrolledCourses)
      );

      alert(`${courseTitle} Enrolled Successfully`);
    } else {
      alert("Already Enrolled!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-3xl">
        Loading Courses...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-red-500 text-3xl">
        {error}
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-8 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 to-slate-900 text-white"
          : "bg-gradient-to-br from-slate-100 to-white text-black"
      }`}
    >
      <h1 className="text-5xl font-bold text-center mb-12">
        Available Courses
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`p-8 rounded-3xl border shadow-xl hover:scale-105 transition duration-300 ${
              darkMode
                ? "bg-slate-800/60 border-slate-700"
                : "bg-white border-slate-300"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">
              {course.title}
            </h2>

            <p className="text-lg mb-2">
              Instructor: {course.instructor}
            </p>

            <p className="text-green-400 mb-6">
              Duration: {course.duration}
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => handleEnroll(course.title)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold text-white"
              >
                Enroll
              </button>

              <button
                onClick={() => navigate("/content")}
                className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold text-white"
              >
                View Content
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;