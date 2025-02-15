import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequsicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next){
  if (erro instanceof mongoose.Error.CastError){ //erro de requisição
    new RequsicaoIncorreta().enviarResposta(res);
  }else if (erro instanceof mongoose.Error.ValidationError) {//erro de validação
    new ErroValidacao(erro).enviarResposta(res);
  }else if (erro instanceof NaoEncontrado){ //erro 404
    erro.enviarResposta(res);
  }else{
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;