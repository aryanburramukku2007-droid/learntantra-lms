import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ContentViewer() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/courses")
      .then((response) => {
        setCourses(response.data);

        if (response.data.length > 0) {
          setSelectedCourse(response.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!selectedCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading Course Content...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-8">

      {/* Header */}

      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Course Content
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Select any course and start learning
        </p>
      </div>

      {/* Course Selector */}

      <div className="bg-slate-800/60 backdrop-blur-xl p-6 rounded-3xl mb-10">

        <h2 className="text-2xl font-bold mb-6">
          Available Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className={`p-4 rounded-xl transition duration-300 ${
                selectedCourse.id === course.id
                  ? "bg-blue-600"
                  : "bg-slate-900 hover:bg-slate-700"
              }`}
            >
              {course.title}
            </button>
          ))}

        </div>

      </div>

      {/* Course Info */}

      <div className="bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl mb-10">

        <h2 className="text-4xl font-bold mb-4">
          {selectedCourse.title}
        </h2>

        <p className="text-xl text-slate-300">
          Instructor: {selectedCourse.instructor}
        </p>

        <p className="text-lg text-green-400 mt-2">
          Duration: {selectedCourse.duration}
        </p>

      </div>

      {/* Video Section */}

      <div className="bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl mb-10">

        <h2 className="text-3xl font-bold mb-6">
          Course Video
        </h2>

        <div className="overflow-hidden rounded-2xl">

          <iframe
            width="100%"
            height="500"
            src={selectedCourse.video}
            title={selectedCourse.title}
            allowFullScreen
            className="rounded-2xl"
          ></iframe>

        </div>

      </div>

      {/* Notes + Quiz */}

      <div className="bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl mb-10">

        <h2 className="text-3xl font-bold mb-6">
          Study Materials
        </h2>

        <div className="flex flex-wrap gap-4">

          <a
            href={selectedCourse.notes}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
          >
            📄 Open Notes
          </a>

          <button
            onClick={() =>
              navigate(`/quiz/${selectedCourse.id}`)
            }
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold"
          >
            📝 Take Quiz
          </button>

        </div>

      </div>

      {/* Topics */}

      <div className="bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl">

        <h2 className="text-3xl font-bold mb-6">
          Topics Covered
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {selectedCourse.topics.map((topic, index) => (
            <div
              key={index}
              className="bg-slate-900 p-5 rounded-2xl"
            >
              📘 {topic}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ContentViewer;