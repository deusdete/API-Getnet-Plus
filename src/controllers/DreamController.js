const auth = require("../auth");
const Dream = require("../models/Dream");
require("dotenv").config();

module.exports = {
  async getDreams(req, res) {
    try {
      const dreams = await Dream.find({ user: req.useId });
      if (!dreams) {
        return res.status(200).json({ dreams: null });
      }
      return res.status(200).json({ dreams });
    } catch (error) {
      return res.status(400).json({ error: "Falha ao carregar seus sonhos" });
    }
  },

  async createDream(req, res) {
    const { title, value, deadline } = req.body;
    if (!title || !value || !deadline) {
      return res
        .status(400)
        .json({ error: "Por favor, preencha todos os campos" });
    }
    try {
      const dream = await Dream.create({
        title,
        value,
        deadline,
        user: req.useId,
        done: false,
      });
      return res.status(200).json({ message: 'Sonho criado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Falha ao criar sonho" });
    }
  },

  async updateDream(req, res) {
    const {id} = req.params;
    const data = req.body;
    if (!(await Dream.findById({ _id: id }))) {
      return res.status(404).json({ error: "Sonho não encontrado" });
    }
    try {
      await Dream.updateOne({ _id: id }, { ...data });
      return res.status(200).json({ message: 'Sonho atualizado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Falha ao criar sonho" });
    }
  },

  async deteleDream(req, res) {
    const {id} = req.params;
    if (!(await Dream.findById({ _id: id }))) {
      return res.status(404).json({ error: "Sonho não encontrado" });
    }
    try {
      await Dream.deleteOne({ _id: id });
      return res.status(200).json({ message: 'Sonho apagado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Falha ao criar sonho" });
    }
  },
};
