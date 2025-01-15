import QuizCard from "@/components/QuizCard";
import Link from "next/link";

export interface Alternative {
  alternativeText: string;
  isCorrect: boolean;
}

export interface QuizObj {
  id: number;
  alternatives: Alternative[];
}

const quizObj: QuizObj = {
  id: 1,
  alternatives: [
    {
      alternativeText: "alternativa texto 1",
      isCorrect: false,
    },
    {
      alternativeText: "alternativa texto 2",
      isCorrect: true,
    },
    {
      alternativeText: "alternativa texto 3",
      isCorrect: false,
    },
  ],
};

export default async function PerguntaPage({
  params,
}: {
  params: Promise<{ perguntaId: string }>;
}) {
  const perguntaInfo = (await params).perguntaId;

  return (
    <div className="flex flex-col items-center h-screen  w-full mt-28">
      <p>Pergunta id: {perguntaInfo}</p>

      <div className="w-1/5">
        <QuizCard quizObject={quizObj}></QuizCard>
      </div>

      <Link className="btn btn-info mt-5 w-1/5" href="/">
        Pagina Inicial
      </Link>
    </div>
  );
}
