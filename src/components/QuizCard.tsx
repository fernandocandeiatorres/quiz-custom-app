import QuizQuestion from "./QuizQuestion";
import { QuizObj } from "@/app/quiz/[perguntaId]/page";

interface QuizCardProps {
  quizObject: QuizObj;
}

export default function QuizCard({ quizObject }: QuizCardProps) {
  return (
    <div className="">
      <div className="">
        {quizObject.alternatives.map((alternative, index) => (
          <QuizQuestion key={index} alternative={alternative}></QuizQuestion>
        ))}
      </div>
    </div>
  );
}
