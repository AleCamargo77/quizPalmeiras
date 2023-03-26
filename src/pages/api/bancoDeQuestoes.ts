import QuestionModel from "../../../model/question";
import ResponseModel from "../../../model/response";

const questions: QuestionModel[] = [
  new QuestionModel(306, "Em que ano o Palmeiras foi fundado?", [
    ResponseModel.notValid("1 de setembro de 1910"),
    ResponseModel.notValid("14 de abril de 1912"),
    ResponseModel.notValid("25 de janeiro de 1930"),
    ResponseModel.isValid("26 de agosto de 1914."),
  ]),
  new QuestionModel(
    202,
    "Quem é o maior artilheiro da história do Palmeiras?",
    [
      ResponseModel.notValid("Evair"),
      ResponseModel.notValid("Dudu"),
      ResponseModel.notValid("Ademir da Guia"),
      ResponseModel.isValid("Heitor"),
    ]
  ),
  new QuestionModel(
    203,
    "Em que ano o Palmeiras conquistou a Tríplice Coroa(Paulista, Copa do Brasil e Brasileiro)? ",
    [
      ResponseModel.notValid("2022"),
      ResponseModel.notValid("2016"),
      ResponseModel.notValid("2018"),
      ResponseModel.isValid("2020"),
    ]
  ),
  new QuestionModel(204, "Quem fez o primeiro gol no Allianz Parque?", [
    ResponseModel.notValid("Dudu"),
    ResponseModel.notValid("Valdivia"),
    ResponseModel.notValid("Marcos Assunçäo"),
    ResponseModel.isValid("Henrique"),
  ]),
  new QuestionModel(205, "Qual técnico tem mais final pelo Palmeiras?", [
    ResponseModel.notValid("Vanderlei Luxemburgo"),
    ResponseModel.notValid("Oswaldo Brandão"),
    ResponseModel.notValid("Felipäo"),
    ResponseModel.isValid("Abel Ferreira"),
  ]),
  new QuestionModel(206, 'Quem é o maior artilheiro deste século"?', [
    ResponseModel.notValid("Willian Bigode"),
    ResponseModel.notValid("Borja"),
    ResponseModel.notValid("Rony Rustico"),
    ResponseModel.isValid("Dudu"),
  ]),
  new QuestionModel(207, "Qual maior rival?", [
    ResponseModel.notValid("Flamengo"),
    ResponseModel.notValid("Santos"),
    ResponseModel.notValid("Säo Paulo"),
    ResponseModel.isValid("Corinthians"),
  ]),
  new QuestionModel(208, "Quantos Paulistões o Palmeiras têm?", [
    ResponseModel.notValid("20"),
    ResponseModel.notValid("22"),
    ResponseModel.notValid("26"),
    ResponseModel.isValid("24"),
  ]),
  new QuestionModel(209, "Qual o primeiro nome do Palmeiras?", [
    ResponseModel.notValid("Palmeiras"),
    ResponseModel.notValid("Sociedade Esportiva Ítala-brasileira"),
    ResponseModel.notValid("Sport Club Palmeiras"),
    ResponseModel.isValid("Palestra Itália"),
  ]),
  new QuestionModel(210, "Qual o jogador com mais jogos do clube alviverde?", [
    ResponseModel.notValid("Marcos"),
    ResponseModel.notValid("Dudu"),
    ResponseModel.notValid("Djalma Santos"),
    ResponseModel.isValid("Ademir da Guia"),
  ]),
  new QuestionModel(211, "Que time o Palmeiras venceu na taça rio de 1951?", [
    ResponseModel.notValid("Real Madrid"),
    ResponseModel.notValid("Barcelona"),
    ResponseModel.notValid("Liverpool"),
    ResponseModel.isValid("Juventus"),
  ]),
  new QuestionModel(212, "Quantas Libertadores o Palmeiras tem?", [
    ResponseModel.notValid("4"),
    ResponseModel.notValid("1"),
    ResponseModel.notValid("2"),
    ResponseModel.isValid("3"),
  ]),
  new QuestionModel(213, "Quantos brasileirão o Palmeiras tem?", [
    ResponseModel.notValid("10"),
    ResponseModel.notValid("8"),
    ResponseModel.notValid("7"),
    ResponseModel.isValid("11"),
  ]),
  new QuestionModel(214, "Quem foi o artilheiro do palmeiras em 2022?", [
    ResponseModel.notValid("Dudu"),
    ResponseModel.notValid("Veiga"),
    ResponseModel.notValid("Scarpa"),
    ResponseModel.isValid("Rony"),
  ]),
  new QuestionModel(215, "Maior artilheiro do Palmeiras na libertadores?", [
    ResponseModel.notValid("Evair"),
    ResponseModel.notValid("Edmundo"),
    ResponseModel.notValid("Alex"),
    ResponseModel.isValid("Rony"),
  ]),
  new QuestionModel(216, "Qual ano da primeira copinha conquistada?", [
    ResponseModel.notValid("2023"),
    ResponseModel.notValid("2018"),
    ResponseModel.notValid("2020"),
    ResponseModel.isValid("2022"),
  ]),
];

export default questions;
