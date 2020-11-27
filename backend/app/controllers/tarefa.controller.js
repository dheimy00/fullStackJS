const db = require("../config/db.config.js");
const Tarefa = db.tarefas;

exports.create = (req, res) => {
  Tarefa.create({
    descricao: req.body.descricao
  })
    .then((tarefa) => {
      res.json(tarefa);
    })
    .catch((error) => res.status(400).send(error));
};

exports.findAll = (req, res) => {
  Tarefa.findAll({
    order: [
      ['id', 'ASC']
  ],
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((tarefa) => {
      res.json(tarefa);
    })
    .catch((error) => res.status(400).send(error));
};

exports.findById = (req, res) => {
  Tarefa.findByPk(req.params.id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((tarefa) => {
      if (!tarefa) {
        return res.status(404).json({ message: "Tarefa não encontrado" });
      }
      return res.status(200).json(tarefa);
    })
    .catch((error) => res.status(400).send(error));
};

exports.update = (req, res) => {
  const id = req.body.id;
  Tarefa.update(req.body, { where: { id: id } })
    .then(() => {
      res.status(200).json({ mgs: "Atualizando sucesso -> Tarefa Id = " + id });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error", details: err });
    });
};

exports.delete = (req, res) => {
  return Tarefa.findByPk(req.params.id)
    .then((tarefa) => {
      if (!tarefa) {
        return res.status(400).json({
          message: "Tarefa não encontrado",
        });
      }

      return tarefa
        .destroy()
        .then(() => res.status(200).json({ message: "Excluido sucesso!" }))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
};
