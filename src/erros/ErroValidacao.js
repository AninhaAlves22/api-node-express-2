import RequsicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequsicaoIncorreta{
  constructor(erro){
    const mensagensErro = Object.values(erro.errors) //cria um array com os erros captados, e suas propriedades
      .map(erro => erro.message) // retorna um array apenas com as mensagens de erro
      .join("; ");
    super(`Os seguintes erros foram encotrados: ${mensagensErro}`);
  }

}

export default ErroValidacao;