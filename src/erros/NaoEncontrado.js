import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase{
  constructor(mesagem = "Página não encontrada"){
    super(mesagem, 404);
  }

}

export default NaoEncontrado;