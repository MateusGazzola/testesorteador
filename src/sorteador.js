function sortear() {
  const minInput = document.getElementById('min').value;
  const maxInput = document.getElementById('max').value;
  const quantidadeInput = document.getElementById('quantidade').value;
  const permitirRepetir = document.getElementById('repetir').checked;
  const resultado = document.getElementById('resultado');
  const erro = document.getElementById('erro');
  const btnCopiar = document.getElementById('btnCopiar');
  const copiadoMsg = document.getElementById('copiadoMsg');

  resultado.textContent = '';
  erro.textContent = '';
  copiadoMsg.style.display = 'none';
  btnCopiar.style.display = 'none';

  const min = parseInt(minInput, 10);
  const max = parseInt(maxInput, 10);
  const quantidade = parseInt(quantidadeInput, 10);

  if (isNaN(min) || isNaN(max) || isNaN(quantidade)) {
    erro.textContent = 'Por favor, preencha todos os campos com números válidos.';
    return;
  }
  if (min > max) {
    erro.textContent = 'O valor mínimo deve ser menor ou igual ao máximo.';
    return;
  }
  if (quantidade < 1) {
    erro.textContent = 'A quantidade deve ser pelo menos 1.';
    return;
  }

  const totalNumeros = max - min + 1;

  if (!permitirRepetir && quantidade > totalNumeros) {
    erro.textContent = 'A quantidade não pode ser maior que o intervalo disponível quando não permite repetição.';
    return;
  }

  let numerosSorteados = [];

  if (permitirRepetir) {
    for (let i = 0; i < quantidade; i++) {
      const num = Math.floor(Math.random() * totalNumeros) + min;
      numerosSorteados.push(num);
    }
  } else {
    const numerosDisponiveis = [];
    for (let i = min; i <= max; i++) {
      numerosDisponiveis.push(i);
    }
    for (let i = 0; i < quantidade; i++) {
      const indice = Math.floor(Math.random() * numerosDisponiveis.length);
      numerosSorteados.push(numerosDisponiveis[indice]);
      numerosDisponiveis.splice(indice, 1);
    }
  }

  resultado.textContent = `Números sorteados: ${numerosSorteados.join(', ')}`;
  btnCopiar.style.display = 'inline-block';
}

function copiarResultado() {
  const resultado = document.getElementById('resultado').textContent;
  const copiadoMsg = document.getElementById('copiadoMsg');

  if (!resultado) return;

  navigator.clipboard.writeText(resultado).then(() => {
    copiadoMsg.style.display = 'block';
    setTimeout(() => {
      copiadoMsg.style.display = 'none';
    }, 2000);
  }).catch(() => {
    alert('Não foi possível copiar o resultado.');
  });
}
