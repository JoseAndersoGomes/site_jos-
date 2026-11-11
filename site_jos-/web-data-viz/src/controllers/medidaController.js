var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    console.log(`Recuperando os votos dos times`);

    medidaModel.buscarVotos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os votos dos times.", erro.sqlMessage || erro);
        res.status(500).json({ erro: erro.sqlMessage || "Erro ao buscar os votos dos times" });
    });
}


function buscarMedidasEmTempoReal(req, res) {

    console.log(`Recuperando os votos dos times em tempo real`);

    medidaModel.buscarVotosEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os votos dos times em tempo real.", erro.sqlMessage || erro);
        res.status(500).json({ erro: erro.sqlMessage || "Erro ao buscar os votos dos times em tempo real" });
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal

}