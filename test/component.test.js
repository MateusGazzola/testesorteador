function runComponentTests() {
    testar("COMPONENT - Testar Se o Botão De Sortear esta Presente.", () => {
        const sortear = document.getElementById("sortear");
        if (!sortear) throw new Error("Botão Sortear Não Encontrado")
    })
    testar("COMPONENT - Inputs Máximo e Mínimo devem receber valores corretamente.", () => {
        const min = document.getElementById("min");
        const max = document.getElementById("max");

        min.value = "10";
        max.value = "5";

        if (max.value !== "5" || min.value !== "10") {
            throw new Error("Inputs não aceitaram valores corretamente");
        }
    });

    testar("COMPONENT - Testar Se o Botão Repetir esta Presente.", () => {
        const repetir = document.getElementById("repetir");
        if (!repetir) throw new Error("Botão Repetir Não Encontrado");
    });

    testar("COMPONENT - Testar Se o Botão Copiar Resultado esta Presente.", () => {
        const btnCopiar = document.getElementById("btnCopiar");
        if (!btnCopiar) throw new Error("Botão Copiar Resultado Não Encontrado")
    })

    testar("COMPONENT - Input Quantidade deve receber valore corretamente.", () => {
        const quantidade = document.getElementById("quantidade");
        if (!quantidade) throw new Error("Inputs não aceitaram valores corretamente");
    });

    testar("COMPONENT - Testar Se a DIV resultado esta Presente.", () => {
        const resultado = document.getElementById("resultado");
        if (!resultado) throw new Error("DIV resultado Não Encontrado");
    });

    testar("COMPONENT - Testar Se Mensagem ERRO esta Presente.", () => {
        const erro = document.getElementById("erro");
        if (!erro) throw new Error("Mensagem ERRO Não Encontrado");
    });

        testar("COMPONENT - DIV Resultado Copiado esta Presente.", () => {
        const copiadoMsg = document.getElementById("copiadoMsg");
        if (!copiadoMsg) throw new Error("DIV Resultado Copiado Não Encontrado");
    });
}