import { getAllQuestions, Question } from "@/lib/questions";
import QuizQuestion from "./QuizQuestion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
// import Link from "next/link";

interface QuizCardProps {
  quizObject: Question;
  onSelect: (isCorrect: boolean) => void;
  isCorrect: boolean | null;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export default function QuizCard({
  quizObject,
  onSelect,
  isCorrect,
  setIsCorrect,
}: QuizCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [didTry, setDidTry] = useState<boolean>(false);
  const [answeredCorrect, setAnsweredCorrect] = useState<boolean>(false);
  const [finalAnswerCorrect, setFinalAnswerCorrect] = useState<boolean>(false);
  const router = useRouter();

  const questionQnt = getAllQuestions().length;
  const questionQntForProg = 100 / (questionQnt - 1);
  console.log(questionQnt);
  console.log(questionQntForProg);
  console.log("id" + quizObject.id);

  const handleSelect = (index: number, isCorrect: boolean) => {
    setSelectedIndex(index);
    onSelect(isCorrect);
  };

  const handleNext = () => {
    if (!isCorrect) {
      setIsShaking(true);
      setIsCorrect(null);
      setSelectedIndex(null);
      setDidTry(true);
      setTimeout(() => setIsShaking(false), 350);
      setTimeout(() => setDidTry(false), 1500);
    } else {
      setDidTry(false);
      setAnsweredCorrect(true);
      setIsCorrect(null);
      if (quizObject.id == questionQnt - 1) {
        handleCelebrate();
        setFinalAnswerCorrect(true);
      } else {
        handleCelebrate();
        setTimeout(() => {
          setAnsweredCorrect(false);
          router.push(`/quiz/${quizObject.id + 1}`);
        }, 500);
      }
    }
  };

  const handleCelebrate = () => {
    // Lançar os confetes
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }, // altura explosao
    });
  };

  // <progress className="progress progress-primary w-56" value="10" max="100"></progress>
  // <progress className="progress progress-primary w-56" value="40" max="100"></progress>
  // <progress className="progress progress-primary w-56" value="70" max="100"></progress>
  // <progress className="progress progress-primary w-56" value="100" max="100"></progress>
  return (
    <div className="px-4 w-full">
      <div
        role="alert"
        className={`alert alert-error h-22 flex my-3 fixed top-16 mt-10 left-4 shadow-lg rounded-lg p-4 w-1/3 transition-all duration-500 ease-in-out
            ${didTry ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
            `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="font-semibold">Tente novamente!</p>
      </div>
      <progress
        className="progress progress-primary w-full top-16 left-0 fixed"
        value={quizObject.id * questionQntForProg}
        max="100"
      ></progress>
      {finalAnswerCorrect && (
        <div className="text-center mb-2">
          <p className="font-bold text-2xl">
            🎉 Parabéns! Você finalizou o quiz e foi um dos ganhadores
            escolhidos, clique abaixo para resgatar sua recompensa. 🎉
          </p>
          <button className="btn btn-square btn-info animate-pulse w-2/5 my-7">
            Resgatar recompensa
          </button>
        </div>
      )}
      <div className="w-4/5 lg:w-3/5 mx-auto">
        {quizObject.alternatives.map((alternative, index) => (
          <QuizQuestion
            key={index}
            alternative={alternative}
            selected={selectedIndex === index}
            onClick={() => handleSelect(index, alternative.isCorrect)}
            isShaking={isShaking}
            answeredCorrect={answeredCorrect}
            finalAnswerCorrect={finalAnswerCorrect}
          ></QuizQuestion>
        ))}
        <button
          disabled={isCorrect === null}
          className="btn btn-success opacity-80 mt-8 w-full"
          onClick={handleNext}
        >
          {/* {isCorrect ? (
          <Link href={`/quiz/` + (quizObject.id + 1)}>Próximo</Link>
        ) : (
          "Próximo"
        )} */}
          Próximo
        </button>
      </div>
    </div>
  );
}
