"use client";
import QuizCard from "@/components/QuizCard";
import Link from "next/link";
import { getQuestionById } from "../../../lib/questions";
import { notFound } from "next/navigation";
import { useState, use } from "react";

export default function PerguntaPage({
  params,
}: {
  params: Promise<{ perguntaId: string }>;
}) {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { perguntaId } = use(params);
  const id = parseInt(perguntaId);
  if (isNaN(id)) {
    notFound();
  }

  const question = getQuestionById(id);
  if (!question) {
    notFound();
  }

  const handleSelect = (correct: boolean) => {
    setIsCorrect(correct);
  };

  return (
    <div className="flex flex-col items-center h-screen  w-full justify-evenly mb-4">
      <div className="w-full flex justify-center">
        <QuizCard
          quizObject={question}
          onSelect={handleSelect}
          isCorrect={isCorrect}
          setIsCorrect={setIsCorrect}
        ></QuizCard>
      </div>

      {/* <button
        disabled={isCorrect === null}
        className="btn btn-success opacity-80 mt-4"
        onClick={handleNext}
      >
        {isCorrect ? (
          <Link href={`/quiz/` + (question.id + 1)}>Próximo</Link>
        ) : (
          "Próximo"
        )}
      </button> */}

      <Link className="btn btn-info mt-5 w-1/5" href="/">
        Pagina Inicial
      </Link>
    </div>
  );
}
