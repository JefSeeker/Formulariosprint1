// Função para formatar o CPF
  function formatarCPF() {
    const input = document.getElementById('CPF');
    let value = input.value.replace(/\D/g, ''); // Remove tudo exceto os dígitos
    if (value.length > 0) {
      value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto após os 3 primeiros dígitos
      value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto após os próximos 3 dígitos
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um traço antes dos últimos 2 dígitos
    }
    input.value = value;
  }
  // Adiciona um ouvinte de evento para chamar a função sempre que o usuário digitar algo
  document.getElementById('CPF').addEventListener('input', formatarCPF);

// TERMINA AQUI
