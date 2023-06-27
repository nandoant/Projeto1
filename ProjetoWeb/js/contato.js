document.getElementById("formulario-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter os valores do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;
    var assunto = document.getElementById("assunto").value;

    // Exibir os valores do formulário
    var saidaFormulario = document.getElementById("saida-formulario");
    saidaFormulario.innerHTML = "<h3>Informações do formulário:</h3>";
    saidaFormulario.innerHTML += "<p><strong>Nome:</strong> " + nome + "</p>";
    saidaFormulario.innerHTML += "<p><strong>Email:</strong> " + email + "</p>";
    saidaFormulario.innerHTML += "<p><strong>Telefone:</strong> " + telefone + "</p>";
    saidaFormulario.innerHTML += "<p><strong>Mensagem:</strong> " + mensagem + "</p>";
    saidaFormulario.innerHTML += "<p><strong>Assunto:</strong> " + assunto + "</p>";

    // Limpar os campos do formulário
    document.getElementById("formulario-contato").reset();
});
