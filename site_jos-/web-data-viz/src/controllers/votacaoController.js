var votacaoModel = require("../models/votacaoModel");

var timesPermitidos = [
    "Lakers",
    "Bulls",
    "Celtics",
    "Warriors",
    "Kings",
    "Heat",
    "Spurs",
    "Mavericks"
];

function votar(req, res) {
    var nome = req.body.nomeServer;

    if (nome == undefined || nome == "") {
        res.status(400).json({ erro: "Escolha um time para votar." });
    } else if (timesPermitidos.indexOf(nome) == -1) {
        res.status(400).json({ erro: "Time inválido." });
    } else {
        votacaoModel.registrarVoto(nome)
            .then(function (resultado) {
                res.status(201).json({
                    mensagem: "Voto registrado com sucesso!",
                    resultado: resultado
                });
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao registrar o voto: ", erro.sqlMessage);
                res.status(500).json({ erro: "Erro ao registrar o voto." });
            });
    }
}

module.exports = {
    votar
};
