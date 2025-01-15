import { Alternative } from "@/app/quiz/[perguntaId]/page";

interface QuizQuestionProps {
  alternative: Alternative;
}

export default function QuizQuestion({ alternative }: QuizQuestionProps) {
  return (
    <div className="flex gap-5 border border-gray-400 rounded-lg p-3 mb-3">
      <div>
        <label>
          <input type="checkbox" className="checkbox checkbox-success" />
        </label>
      </div>
      <div>
        <p>{alternative.alternativeText}</p>
      </div>
    </div>
  );
}
