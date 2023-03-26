import { random } from "functions/arrays";
import ResponseModel from "./response";

export default class QuestionModel {
  #id: number;
  #enunciado: string;
  #respostas: ResponseModel[];
  #acertou: boolean;
  //respondida: boolean

  constructor(
    id: number,
    enunciado: string,
    respostas: ResponseModel[],
    acertou = false
  ) {
    this.#id = id;
    this.#enunciado = enunciado;
    this.#respostas = respostas;
    this.#acertou = acertou;
  }

  get id() {
    return this.#id;
  }

  get enunciado() {
    return this.#enunciado;
  }

  get respostas() {
    return this.#respostas;
  }

  get acertou() {
    return this.#acertou;
  }

  get respondida() {
    for (let resposta of this.#respostas) {
      if (resposta.revelada) return true;
    }
    return false;
  }

  get naoRespondida() {
    return !this.respondida;
  }

  responseWith(index: number): QuestionModel {
    const valid = this.#respostas[index]?.certa;
    const responses = this.#respostas.map((resposta, i) => {
      const responseSelected = index === i;
      const revealing = responseSelected || resposta.certa;
      return revealing ? resposta.reveal() : resposta;
    });
    return new QuestionModel(this.id, this.enunciado, responses, valid);
  }

  randomAnswers(): QuestionModel {
    let answersRandom = random(this.#respostas);
    return new QuestionModel(
      this.#id,
      this.#enunciado,
      answersRandom,
      this.#acertou
    );
  }

  static createObject(obj: QuestionModel): QuestionModel {
    const responses = obj.respostas.map((resp) =>
      ResponseModel.createObject(resp)
    );
    return new QuestionModel(obj.id, obj.enunciado, responses, obj.acertou);
  }

  toObject() {
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respondido: this.respondida,
      acertou: this.#acertou,
      respostas: this.#respostas.map((resp) => resp.toObject()),
    };
  }
}
