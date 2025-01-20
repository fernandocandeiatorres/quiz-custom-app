import { Alternative } from "@/lib/questions";

interface QuizQuestionProps {
  alternative: Alternative;
  selected: boolean;
  onClick: () => void;
  isShaking: boolean;
  answeredCorrect: boolean;
  finalAnswerCorrect: boolean;
}

export default function QuizQuestion({
  alternative,
  selected,
  onClick,
  isShaking,
  answeredCorrect,
  finalAnswerCorrect,
}: QuizQuestionProps) {
  return (
    <div
      className={`${
        finalAnswerCorrect && "pointer-events-none disabled "
      }transform transition-transform duration-200 hover:scale-110 flex gap-5 border border-gray-400 rounded-lg p-3 mb-3 cursor-pointer ${
        selected ? "border-blue-500 scale-110" : "border-gray-400"
      }
      ${
        answeredCorrect && selected && !finalAnswerCorrect
          ? "animate-pulse bg-green-500 border-green-300"
          : null
      }
      ${finalAnswerCorrect && selected && "bg-green-500 border-green-300"}
      ${isShaking ? "animate-shake border-red-200" : null}
      
      `}
      onClick={onClick}
    >
      <div>
        <label>
          <input
            type="radio"
            className={`radio ${selected ? "radio-secondary" : null}`}
            checked={selected}
            readOnly
          />
        </label>
      </div>
      <div>
        <p>{alternative.alternativeText}</p>
      </div>
    </div>
  );
}
