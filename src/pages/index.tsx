import Quiz from "../../components/Quiz";
import QuestionModel from "../../model/question";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// const BASE_URL =
//   "https://quiz-palmeiras-utbv-git-main-alecamargo77.vercel.app/api";
// const BASE_URL = "http://localhost:3000/api";
const BASE_URL = "https://quiz-palmeiras-utbv.vercel.app//api";

export default function Home() {
  const router = useRouter();

  const [question, setQuestion] = useState<QuestionModel>();
  const [idsQuestions, setIdsQuestions] = useState<number[]>([]);
  const [responseValid, setResponseValid] = useState<number>(0);

  async function loadingIdsQuestions() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const idsQuestions = await resp.json();
    setIdsQuestions(idsQuestions);
  }

  async function loadingQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.createObject(json);
    setQuestion(newQuestion);
  }

  useEffect(() => {
    loadingIdsQuestions();
  }, []);

  useEffect(() => {
    idsQuestions.length > 0 && loadingQuestion(idsQuestions[0]);
  }, [idsQuestions]);

  function questionResponse(questionResponse: QuestionModel) {
    setQuestion(questionResponse);
    const valid = questionResponse.acertou;
    setResponseValid(responseValid + (valid ? 1 : 0));
  }

  function idNextQuestion() {
    if (question) {
      const nextIndex = idsQuestions.indexOf(question.id) + 1;
      return idsQuestions[nextIndex];
    }
  }

  function nextStep() {
    const nextId = idNextQuestion();
    nextId ? goNextQuestion(nextId) : finished();
  }

  function goNextQuestion(nextId: number) {
    loadingQuestion(nextId);
  }

  function finished() {
    router.push({
      pathname: "/Result",
      query: {
        total: idsQuestions.length,
        certas: responseValid,
      },
    });
  }

  return question ? (
    <div style={{ backgroundImage: "url(/palmeiras.jpg)" }}>
      <Quiz
        question={question}
        lastQuestion={idNextQuestion() === undefined}
        questionResponse={questionResponse}
        nextStep={nextStep}
      />
    </div>
  ) : (
    false
  );
}
