var database = require("../database/config");

function registrarVoto(nome) {
    var instrucaoSql = `
        INSERT INTO times (nome) VALUES ('${nome}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarVoto
};
