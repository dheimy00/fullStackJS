module.exports = (sequelize, Sequelize) => {
  const Tarefa = sequelize.define("tarefa", {
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    concluido: {
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    }
  });

  return Tarefa;
};
