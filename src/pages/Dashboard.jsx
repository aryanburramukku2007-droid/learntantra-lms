function Dashboard({ darkMode }) {

  const user = localStorage.getItem("userEmail");

  const enrolledCourses =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const notifications = [
    "✅ React Course Enrolled",
    "📝 Quiz Completed",
    "📜 Certificate Generated",
    "🎉 Welcome Back",
  ];

  return (

    <div
      className={`min-h-screen p-8 transition-all duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 to-slate-900 text-white"
          : "bg-gradient-to-br from-slate-100 to-white text-black"
      }`}
    >

      <h1 className="text-5xl font-bold mb-3">
        Student Dashboard
      </h1>

      <p
        className={`text-lg ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        Welcome back, {user}
      </p>

      {/* Profile Card */}

      <div
        className={`mt-8 p-6 rounded-3xl border max-w-md ${
          darkMode
            ? "bg-slate-800/60 border-slate-700"
            : "bg-white border-slate-300 shadow-lg"
        }`}
      >

        <h2 className="text-2xl font-bold mb-4">
          👤 Student Profile
        </h2>

        <div className="space-y-2">

          <p>
            <span className="font-semibold">Email:</span> {user}
          </p>

          <p>
            <span className="font-semibold">
              Enrolled Courses:
            </span>{" "}
            {enrolledCourses.length}
          </p>

          <p>
            <span className="font-semibold">
              Progress:
            </span>{" "}
            75%
          </p>

          <p>
            <span className="font-semibold">
              Status:
            </span>{" "}
            Active Student
          </p>

        </div>

      </div>

      {/* Stats Cards */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div
          className={`p-6 rounded-3xl border ${
            darkMode
              ? "bg-slate-800/60 border-slate-700"
              : "bg-white border-slate-300 shadow-lg"
          }`}
        >
          <h2 className="text-2xl font-semibold">
            Enrolled Courses
          </h2>

          <p className="text-4xl font-bold text-blue-500 mt-4">
            {enrolledCourses.length}
          </p>
        </div>

        <div
          className={`p-6 rounded-3xl border ${
            darkMode
              ? "bg-slate-800/60 border-slate-700"
              : "bg-white border-slate-300 shadow-lg"
          }`}
        >
          <h2 className="text-2xl font-semibold">
            Progress
          </h2>

          <p className="text-4xl font-bold text-green-500 mt-4">
            75%
          </p>
        </div>

        <div
          className={`p-6 rounded-3xl border ${
            darkMode
              ? "bg-slate-800/60 border-slate-700"
              : "bg-white border-slate-300 shadow-lg"
          }`}
        >
          <h2 className="text-2xl font-semibold">
            Quiz Score
          </h2>

          <p className="text-4xl font-bold text-pink-500 mt-4">
            85
          </p>
        </div>

      </div>

      {/* Notifications */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-5">
          Notifications
        </h2>

        <div className="space-y-4">

          {notifications.map((note, index) => (

            <div
              key={index}
              className={`p-5 rounded-xl border ${
                darkMode
                  ? "bg-slate-800/60 border-slate-700"
                  : "bg-white border-slate-300 shadow"
              }`}
            >
              {note}
            </div>

          ))}

        </div>

      </div>

      {/* My Courses */}

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-5">
          My Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {enrolledCourses.length === 0 ? (

            <div
              className={`p-6 rounded-xl ${
                darkMode
                  ? "bg-slate-800"
                  : "bg-white shadow-lg"
              }`}
            >
              No courses enrolled yet
            </div>

          ) : (

            enrolledCourses.map((course, index) => (

              <div
                key={index}
                className={`p-6 rounded-2xl border hover:scale-105 transition duration-300 ${
                  darkMode
                    ? "bg-slate-800/60 border-slate-700"
                    : "bg-white border-slate-300 shadow-lg"
                }`}
              >

                <h3 className="text-2xl font-semibold">
                  {course}
                </h3>

                <p
                  className={`mt-2 ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  Frontend Engineering Course
                </p>

              </div>

            ))

          )}

        </div>

      </div>

    </div>

  );
}

export default Dashboard;