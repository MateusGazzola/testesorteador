function runUnitTests() {
    testar("UNIT - Minimo Menor que Número Máximo.", () => {
        let min = 10;
        let max = 20;

        if (min > max) {
            throw new Error(`Esperado que min (${min}) seja menor que max (${max})`);

        }
    });
    testar("UNIT - Número Quantidade Seja Pelo Menos 1.", () => {
        if (quantidade < 1) {
            throw new Error(`Esperado que a Quantidade Seja Pelo Menos 1.`);
        }
    })

    testar("UNIT - O Número Quantidade não Pode Ser Maior que o Intervalo Disponivel.", () => {
        const permitirRepetir = document.getElementById('repetir').checked;
        const totalNumeros = max - min + 1;
        if (!permitirRepetir && quantidade > totalNumeros) {
            throw new Error(`Esperado que a Quantidade Não Seja Maior Que o Intervalo Disponivel.`);
        }
    })

    testar("UNIT - Todos os Campos Devem Estar Preenchido Com Números Válido.", () => {
        const minInput = document.getElementById('min').value;
        const maxInput = document.getElementById('max').value;
        const quantidadeInput = document.getElementById('quantidade').value;
        const min = parseInt(10);
        const max = parseInt(10);
        const quantidade = parseInt(10);

        if (isNaN(min) || isNaN(max) || isNaN(quantidade)) {
            throw new Error(`Todos os Campo Devem Estar Preenchidos com Números Válidos.`);
        }
    })
}