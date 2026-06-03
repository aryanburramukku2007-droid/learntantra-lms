function AdminPanel() {

  const enrolledCourses =
    JSON.parse(localStorage.getItem("enrolledCourses")) || [];

  const analytics = [

    {
      title: "Total Students",
      value: "120",
      color: "text-blue-400",
    },

    {
      title: "Total Courses",
      value: "25",
      color: "text-green-400",
    },

    {
      title: "Enrollments",
      value: enrolledCourses.length,
      color: "text-pink-400",
    },

    {
      title: "Certificates",
      value: "85",
      color: "text-yellow-400",
    },

  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-8">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-5xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-2 text-lg">
            Manage your LMS platform
          </p>

        </div>

      </div>

      {/* Analytics Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {
          analytics.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300"
            >

              <h2 className="text-2xl font-semibold">
                {item.title}
              </h2>

              <p className={`text-5xl font-bold mt-5 ${item.color}`}>
                {item.value}
              </p>

            </div>

          ))
        }

      </div>

      {/* Recent Activities */}

      <div className="mt-14">

        <h2 className="text-3xl font-bold mb-6">
          Recent Activities
        </h2>

        <div className="space-y-5">

          <div className="bg-slate-800/60 border border-slate-700 p-5 rounded-2xl">
            ✅ New student enrolled in React Development
          </div>

          <div className="bg-slate-800/60 border border-slate-700 p-5 rounded-2xl">
            📝 Quiz submitted successfully
          </div>

          <div className="bg-slate-800/60 border border-slate-700 p-5 rounded-2xl">
            📜 Certificate generated for frontend course
          </div>

          <div className="bg-slate-800/60 border border-slate-700 p-5 rounded-2xl">
            🎉 New course uploaded to LMS
          </div>

        </div>

      </div>

    </div>

  );
}

export default AdminPanel;