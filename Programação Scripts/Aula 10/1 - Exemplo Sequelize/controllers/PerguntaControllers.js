import Pergunta from "../models/Pergunta.js";
import sequelize from "../config/database.js"; // Adicionar a importação para sequelize

/**
 * Cria uma nova pergunta.
 */
export const criarPergunta = async (req, res) => {
  try {
    const pergunta = await Pergunta.create(req.body);
    res.status(201).json(pergunta);
  } catch (err) {
    if (err.name === "SequelizeConnectionError") {
      // Erro de conexão com o banco de dados
      res.status(500).json({ error: "Erro de conexão com o banco de dados" });
    } else if (err.name === "SequelizeValidationError") {
      // Erro de validação
      res.status(400).json({ error: "Erro de validação", details: err.errors });
    } else {
      // Outros erros
      res
        .status(500)
        .json({ error: "Erro ao criar pergunta", details: err.message });
    }
  }
};

/**
 * Lista todas as perguntas.
 */
export const listarPerguntas = async (req, res) => {
  try {
    const perguntas = await Pergunta.findAll();
    res.status(200).json(perguntas);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao listar perguntas", details: err.message });
  }
};

/**
 * Obtém uma pergunta específica pelo ID.
 */
export const obterPergunta = async (req, res) => {
  try {
    const pergunta = await Pergunta.findByPk(req.params.id);
    if (pergunta) {
      res.status(200).json(pergunta);
    } else {
      res.status(404).json({ error: "Pergunta não encontrada" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao obter pergunta", details: err.message });
  }
};

/**
 * Atualiza uma pergunta específica pelo ID.
 */
export const atualizarPergunta = async (req, res) => {
  try {
    const [updated] = await Pergunta.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const pergunta = await Pergunta.findByPk(req.params.id);
      res.status(200).json(pergunta);
    } else {
      res.status(404).json({ error: "Pergunta não encontrada" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar pergunta", details: err.message });
  }
};

/**
 * Deleta uma pergunta específica pelo ID usando SQL puro.
 */
export const deletarPergunta = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(
      "DELETE FROM Perguntas WHERE id = :id",
      { replacements: { id: req.params.id }, type: sequelize.QueryTypes.DELETE }
    );
    if (metadata.affectedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Pergunta não encontrada" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Erro ao deletar pergunta", details: err.message });
  }
};
