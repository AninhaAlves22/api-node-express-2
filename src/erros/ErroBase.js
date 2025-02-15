class ErroBase extends Error { //extends significa que irá herdar da classe Error
  constructor(mensagem = "Erro interno do servidor", status = 500){
    super(); //obrigatório quando a classe herda outra
    this.message = mensagem; //.message é uma propriedade da classe Error
    this.status = status;
  }

  enviarResposta(res){ //metodo de todo erro base
    res.status(this.status).send({
      mensagem: this.message,
      status: this.status //envia por escrito o que pode facilitar o trabalho do front end
    });
  }
}

export default ErroBase;