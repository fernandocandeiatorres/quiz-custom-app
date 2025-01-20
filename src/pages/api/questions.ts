// pages/api/perguntas.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllQuestions, getQuestionById } from "../../lib/questions";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id) {
    const question = getQuestionById(Number(id));
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }
    return res.status(200).json(question);
  }

  const questions = getAllQuestions();
  res.status(200).json(questions);
}
