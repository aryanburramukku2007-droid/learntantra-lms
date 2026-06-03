import { useState } from "react";

function Quiz() {

  const questions = [

    {
      question: "What is React?",
      options: [
        "Database",
        "Frontend Library",
        "Backend Framework",
        "Compiler",
      ],
      answer: "Frontend Library",
    },

    {
      question: "Which hook is used for state?",
      options: [
        "useFetch",
        "useState",
        "useData",
        "useNode",
      ],
      answer: "useState",
    },

    {
      question: "Who developed React?",
      options: [
        "Google",
        "Facebook",
        "Microsoft",
        "Amazon",
      ],
      answer: "Facebook",
    },

  ];

  const [score, setScore] = useState(0);

  function handleAnswer(selected, correct) {

    if (selected === correct) {

      setScore(score + 1);

    }

  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-8">

      <h1 className="text-5xl font-bold text-center mb-10">
        Quiz Challenge
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">

        {
          questions.map((q, index) => (

            <div
              key={index}
              className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl shadow-xl"
            >

              <h2 className="text-2xl font-semibold mb-6">
                {index + 1}. {q.question}
              </h2>

              <div className="grid gap-4">

                {
                  q.options.map((option, i) => (

                    <button
                      key={i}
                      onClick={() =>
                        handleAnswer(option, q.answer)
                      }
                      className="bg-slate-900 hover:bg-blue-600 transition duration-300 p-4 rounded-xl text-left"
                    >
                      {option}
                    </button>

                  ))
                }

              </div>

            </div>

          ))
        }

        <div className="bg-blue-600 p-6 rounded-3xl text-center shadow-xl">

          <h2 className="text-3xl font-bold">
            Your Score: {score}
          </h2>

        </div>

      </div>

    </div>

  );
}

export default Quiz;