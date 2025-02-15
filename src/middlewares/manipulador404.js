import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipulador404(req, res, next){
  const erro404 = new NaoEncontrado(); //instacia a classe NaoEncotrado
  next(erro404); //envia para o manipuladorDeErros
}

export default manipulador404;