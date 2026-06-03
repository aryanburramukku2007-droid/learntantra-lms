function Certificate() {

  const user = localStorage.getItem("userEmail");

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 flex items-center justify-center p-6">

      <div className="bg-white text-black max-w-5xl w-full rounded-3xl shadow-2xl p-12 border-[12px] border-yellow-500 relative overflow-hidden">

        {/* Decorative Circles */}

        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

        {/* Certificate Content */}

        <div className="relative z-10 text-center">

          <h1 className="text-6xl font-bold text-yellow-600 mb-6">
            Certificate
          </h1>

          <p className="text-2xl text-slate-700 mb-8">
            This certificate is proudly presented to
          </p>

          <h2 className="text-5xl font-extrabold text-slate-900 mb-8">
            {user}
          </h2>

          <p className="text-2xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
            for successfully completing the
            <span className="font-bold text-blue-600">
              {" "}Frontend Engineering LearnTantra Program
            </span>
            {" "}with outstanding performance and dedication.
          </p>

          {/* Signature Section */}

          <div className="flex justify-between items-center mt-20 px-10">

            <div className="text-center">

              <div className="border-t-2 border-black w-48 mb-2"></div>

              <p className="font-semibold">
                Instructor Signature
              </p>

            </div>

            <div className="text-center">

              <div className="border-t-2 border-black w-48 mb-2"></div>

              <p className="font-semibold">
                Director Signature
              </p>

            </div>

          </div>

          {/* Footer */}

          <div className="mt-16">

            <p className="text-slate-500 text-lg">
              LearnTantra Frontend Engineering Platform
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Certificate;