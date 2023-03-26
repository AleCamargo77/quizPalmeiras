import questions from "../bancoDeQuestoes";

export default (req: any, res: any) => {
  const idSelect = +req.query.id;

  const questionChosen = questions.filter(
    (question) => question.id === idSelect
  );

  if (questionChosen.length === 1) {
    const questionSelected = questionChosen[0].randomAnswers();
    res.status(200).json(questionSelected.toObject());
  } else {
    res.status(204).send();
  }
};
