var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar a empresa pelo CNPJ: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage || "Erro ao buscar empresa pelo CNPJ");
  });
}

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao listar as empresas: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage || "Erro ao listar empresas");
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar a empresa por ID: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage || "Erro ao buscar empresa por ID");
  });
}

function cadastrar(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
    } else {
      return empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao cadastrar a empresa: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage || "Erro ao cadastrar empresa");
  });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
};
