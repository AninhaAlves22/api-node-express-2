import NaoEncontrado from "../erros/NaoEncontrado.js";
import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livros.find()
        .populate("autor")
        .exec();

      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id)
        .populate("autor", "nome")
        .exec();
      if (livroResultados != null){
        res.status(200).send(livroResultados);
      }else{
        next(new NaoEncontrado("Id do livro não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroAtualizar = await livros.findByIdAndUpdate(id, {$set: req.body});

      if (livroAtualizar != null){
        res.status(200).send({message: "Livro atualizado com sucesso"});
      }else{
        next(new NaoEncontrado("Id do livro não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroExcluir = await livros.findByIdAndDelete(id);

      if(livroExcluir != null){
        res.status(200).send({message: "Livro removido com sucesso"});
      }else{
        next(new NaoEncontrado("Id do livro não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorEditora = async (req, res) => {
    try {
      const editora = req.query.editora;

      const livrosResultado = await livros.find({"editora": editora});

      res.status(200).send(livrosResultado);
    } catch {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };



}

export default LivroController;