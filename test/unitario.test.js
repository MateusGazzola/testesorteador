function runUnitTests() {
    testar("UNIT - Número Minimo Menor que Número Máximo", () => {
        let min = 10;
        let max = 20;
    
        if (min < max) {
            throw new Error(`Esperado que min (${min}) seja menor que max (${max})`);

        }});
}