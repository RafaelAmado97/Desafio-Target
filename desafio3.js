const fs = require('fs');

const faturamento = JSON.parse(fs.readFileSync('dados.json'));

//Calcular o menor faturamento ocorrido em um dia do mês
const faturamentoDiarioValido = faturamento.filter(obj => obj.valor > 0);
const menorFaturamento = Math.min(...faturamentoDiarioValido.map(obj => obj.valor));


//Calcular o maior faturamento ocorrido em um dia do mês

const maiorFaturamento = Math.max(...faturamento.map(obj => obj.valor));


//Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

const faturamentoTotal = faturamento.reduce((acumulado, obj) => acumulado + obj.valor, 0);
const numeroDiasComFaturamento = faturamentoDiarioValido.length;
const mediaFaturamentoDiario = numeroDiasComFaturamento > 0 ? faturamentoTotal / numeroDiasComFaturamento : 0;

const numeroDiasAcimaDaMedia = faturamentoDiarioValido.filter(obj => obj.valor > mediaFaturamentoDiario).length

console.log('Menor faturamento diário:' + menorFaturamento);
console.log('Maior faturamento diário:' + maiorFaturamento);
console.log('Número de dias com faturamento acima da média' + numeroDiasAcimaDaMedia);
