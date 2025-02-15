import ErroBase from "./ErroBase.js";

class RequsicaoIncorreta extends ErroBase{
  constructor(mensagem = "Um ou mais dados estão incorretos" ){
    super(mensagem, 400);
  }
}

export default RequsicaoIncorreta;