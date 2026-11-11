var database = require("../database/config");

// Mudei o nome da função para fazer sentido com o seu projeto de basquete!
function buscarVotos() {

    // Adicionado o 'AS qtd_votos' e o 'ORDER BY'
    var instrucaoSql = `
        SELECT 
            times.nome, 
            COUNT(times.nome) AS qtd_votos
        FROM times
        GROUP BY times.nome
        ORDER BY qtd_votos DESC;
    `;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Em uma votação, você geralmente não precisa de uma função separada para tempo real
// que traz "LIMIT 1". Você pode simplesmente chamar a mesma função de buscarVotos 
// de tempos em tempos para atualizar o placar completo!
function buscarVotosEmTempoReal() {

    var instrucaoSql = `
        SELECT 
            times.nome, 
            COUNT(times.nome) AS qtd_votos
        FROM times
        GROUP BY times.nome
        ORDER BY qtd_votos DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarVotos,
    buscarVotosEmTempoReal
}