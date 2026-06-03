import { useParams } from "react-router-dom";
import { useState } from "react";

function QuizPage() {
  const { courseId } = useParams();

  const quizzes = {
    1: {
      title: "React Development",
      questions: [
        {
          question: "React is developed by?",
          options: ["Google", "Meta", "Microsoft", "Amazon"],
          answer: "Meta",
        },
        {
          question: "Which hook manages state?",
          options: ["useState", "useEffect", "useRef", "useMemo"],
          answer: "useState",
        },
        {
          question: "React uses which syntax?",
          options: ["HTML", "JSX", "XML", "CSS"],
          answer: "JSX",
        },
      ],
    },

    2: {
      title: "Java Programming",
      questions: [
        {
          question: "Java is a?",
          options: [
            "Programming Language",
            "Database",
            "Browser",
            "Operating System",
          ],
          answer: "Programming Language",
        },
        {
          question: "Java follows?",
          options: ["OOP", "POP", "Functional", "None"],
          answer: "OOP",
        },
      ],
    },

    3: {
      title: "Python Programming",
      questions: [
        {
          question: "Python is?",
          options: ["Compiled", "Interpreted", "Database", "OS"],
          answer: "Interpreted",
        },
        {
          question: "Python uses indentation for?",
          options: ["Blocks", "Variables", "Loops", "Classes"],
          answer: "Blocks",
        },
      ],
    },

    4: {
      title: "C++ Programming",
      questions: [
        {
          question: "C++ supports?",
          options: ["OOP", "Networking", "Database", "Cloud"],
          answer: "OOP",
        },
      ],
    },

    5: {
      title: "JavaScript Essentials",
      questions: [
        {
          question: "JavaScript runs in?",
          options: ["Browser", "Database", "Compiler", "OS"],
          answer: "Browser",
        },
      ],
    },

    6: {
      title: "HTML5 Fundamentals",
      questions: [
        {
          question: "HTML stands for?",
          options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyper Tool Markup Language",
            "None",
          ],
          answer: "Hyper Text Markup Language",
        },
      ],
    },

    7: {
      title: "CSS3 Mastery",
      questions: [
        {
          question: "CSS is used for?",
          options: [
            "Styling",
            "Programming",
            "Database",
            "Backend",
          ],
          answer: "Styling",
        },
      ],
    },

    8: {
      title: "SQL Database Management",
      questions: [
        {
          question: "SQL is used for?",
          options: [
            "Databases",
            "Games",
            "Networking",
            "Design",
          ],
          answer: "Databases",
        },
      ],
    },
  };

  const quiz = quizzes[courseId];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white text-3xl">
        Quiz Not Found
      </div>
    );
  }

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });
  };

  const calculateScore = () => {
    let score = 0;

    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score++;
      }
    });

    return score;
  };

  const score = calculateScore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-10">

      <div className="max-w-5xl mx-auto">

        <div className="bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl mb-10">

          <h1 className="text-5xl font-bold mb-4">
            {quiz.title}
          </h1>

          <p className="text-slate-400 text-lg">
            Complete the quiz and test your knowledge.
          </p>

        </div>

        {quiz.questions.map((q, qIndex) => (

          <div
            key={qIndex}
            className="bg-slate-800/60 backdrop-blur-xl p-8 rounded-3xl mb-8"
          >

            <h2 className="text-2xl font-bold mb-6">
              Q{qIndex + 1}. {q.question}
            </h2>

            <div className="grid gap-4">

              {q.options.map((option, optionIndex) => (

                <button
                  key={optionIndex}
                  onClick={() =>
                    handleOptionSelect(qIndex, option)
                  }
                  className={`p-4 rounded-xl text-left transition duration-300 ${
                    selectedAnswers[qIndex] === option
                      ? "bg-blue-600"
                      : "bg-slate-900 hover:bg-slate-700"
                  }`}
                >
                  {option}
                </button>

              ))}

            </div>

          </div>

        ))}

        {!submitted ? (

          <button
            onClick={() => setSubmitted(true)}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold text-lg"
          >
            Submit Quiz
          </button>

        ) : (

          <div className="bg-slate-800/60 p-8 rounded-3xl mt-10">

            <h2 className="text-4xl font-bold text-green-400">
              Quiz Completed 🎉
            </h2>

            <p className="text-2xl mt-4">
              Score: {score} / {quiz.questions.length}
            </p>

            <p className="mt-4 text-lg text-slate-300">
              Percentage:{" "}
              {Math.round(
                (score / quiz.questions.length) * 100
              )}
              %
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default QuizPage;