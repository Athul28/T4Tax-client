import { useState } from "react";

const questionAndAnswers = [
  {
    question: "What services does T4Tax offer?",
    answer:
      "T4Tax offers GST and Income Tax filing, compliance support, and personalized tax advice.",
  },
  {
    question: "How can I contact T4Tax for support?",
    answer:
      "You can reach out to us via our contact page or book a free strategy call to discuss your tax needs.",
  },
  {
    question: "Is T4Tax suitable for businesses?",
    answer:
      "Yes, T4Tax serves both individuals and businesses with tailored solutions for efficient tax management.",
  },
];

interface QuestionAnswerProps {
  question: string;
  answer: string;
}

const QuestionAnswer = ({ question, answer }: QuestionAnswerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="group border-l-4 border-primary-800/80 bg-gray-50 p-3 transform transition-opacity duration-500 rounded-md shadow-md">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium text-gray-900">{question}</h2>
        <span className="shrink-0 rounded-full bg-primary-200 p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2 leading-relaxed text-gray-700">{answer}</p>
      </div>
    </section>
  );
};

const Fqas = () => {
  return (
    <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center lg:gap-16 px-4 md:px-8 mb-20">
      {/* Intro Section */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          Got questions? We’ve got answers! Check out the most common queries
          about T4Tax.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="lg:col-span-2">
        <div className="space-y-4">
          {questionAndAnswers.map((fqa, index) => (
            <QuestionAnswer
              key={index}
              question={fqa.question}
              answer={fqa.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fqas;
