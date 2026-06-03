function GradeBook() {

  const grades = [

    {
      subject: "React Development",
      marks: 95,
      grade: "A+",
      color: "text-green-400",
    },

    {
      subject: "JavaScript",
      marks: 90,
      grade: "A",
      color: "text-blue-400",
    },

    {
      subject: "Frontend Engineering",
      marks: 88,
      grade: "A",
      color: "text-pink-400",
    },

    {
      subject: "Data Structures",
      marks: 82,
      grade: "B+",
      color: "text-yellow-400",
    },

    {
      subject: "Web Development",
      marks: 92,
      grade: "A+",
      color: "text-purple-400",
    },

  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-8">

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Grade Book
        </h1>

        <p className="text-slate-400 mt-3 text-lg">
          Student academic performance overview
        </p>

      </div>

      {/* Grade Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {
          grades.map((item, index) => (

            <div
              key={index}
              className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300"
            >

              <h2 className="text-3xl font-bold mb-4">
                {item.subject}
              </h2>

              <div className="space-y-3">

                <p className="text-slate-300 text-lg">
                  Marks:
                  <span className="font-bold text-white ml-2">
                    {item.marks}
                  </span>
                </p>

                <p className="text-slate-300 text-lg">
                  Grade:
                  <span className={`font-bold ml-2 ${item.color}`}>
                    {item.grade}
                  </span>
                </p>

              </div>

            </div>

          ))
        }

      </div>

      {/* Summary Section */}

      <div className="mt-14 bg-slate-800/60 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Overall Performance
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-6 rounded-2xl">

            <p className="text-slate-400">
              Average Marks
            </p>

            <h3 className="text-4xl font-bold text-blue-400 mt-3">
              89%
            </h3>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">

            <p className="text-slate-400">
              Highest Grade
            </p>

            <h3 className="text-4xl font-bold text-green-400 mt-3">
              A+
            </h3>

          </div>

          <div className="bg-slate-900 p-6 rounded-2xl">

            <p className="text-slate-400">
              Completed Courses
            </p>

            <h3 className="text-4xl font-bold text-pink-400 mt-3">
              5
            </h3>

          </div>

        </div>

      </div>

    </div>

  );
}

export default GradeBook;