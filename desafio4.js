const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

// Calculo do faturamento mensal total

const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acumulador, valor) => acumulador + valor);

console.log('Este é o total do faturamento deste mês: R$' + totalFaturamento)

//Calculo do percentual de cada estado no faturamento total
const porcentagemPorEstado = {};
for (const estado in faturamentoPorEstado) {
    porcentagemPorEstado[estado] = (
        (faturamentoPorEstado[estado] / totalFaturamento) * 100
    ).toFixed(2);
}

console.log(porcentagemPorEstado)