// lib/questions.ts
export interface Alternative {
  alternativeText: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  questionText: string;
  alternatives: Alternative[];
}

// Simulated database
const questions: Question[] = [
  {
    id: 0,
    questionText: "Pergunta 1",
    alternatives: [
      { alternativeText: "Resposta 1", isCorrect: false },
      { alternativeText: "Resposta 2", isCorrect: true },
      { alternativeText: "Resposta 3", isCorrect: false },
    ],
  },
  {
    id: 1,
    questionText: "Pergunta 2",
    alternatives: [
      { alternativeText: "Resposta 1 p2", isCorrect: false },
      { alternativeText: "Resposta 2", isCorrect: true },
      { alternativeText: "Resposta 3", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: "Pergunta 3",
    alternatives: [
      { alternativeText: "Resposta 1 p3", isCorrect: false },
      { alternativeText: "Resposta 2", isCorrect: true },
      { alternativeText: "Resposta 3", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "Pergunta 4",
    alternatives: [
      { alternativeText: "Resposta 1 p4", isCorrect: false },
      { alternativeText: "Resposta 2", isCorrect: true },
      { alternativeText: "Resposta 3", isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText: "Pergunta 5",
    alternatives: [
      { alternativeText: "Resposta 1 p5", isCorrect: false },
      { alternativeText: "Resposta 2", isCorrect: true },
      { alternativeText: "Resposta 3", isCorrect: false },
    ],
  },
];

// Fetch all questions
export const getAllQuestions = () => {
  return questions;
};

// Fetch a single question by ID
export const getQuestionById = (id: number) => {
  return questions.find((q) => q.id === id) || null;
};
