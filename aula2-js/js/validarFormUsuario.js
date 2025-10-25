const form = document.getElementById("formUsuario");
const mensagemForm = document.getElementById("mensagemForm");

form.addEventListener("submit", (erroPrenchimento) => {
    erroPrenchimento.preventDefault();//Impede o envio automatico quando há recarregamento da página

    const nomeUsuario = document.getElementById("nomeUsuario").value.trim();
    const emailUsuario = document.getElementById("emailUsuario").value.trim();
    const senhaUsuario = document.getElementById("senhaUsuario").value.trim();


    if(nomeUsuario === "" || emailUsuario === ""|| senhaUsuario === ""){
        mensagemForm.textContent = "Todos os campos são obrigatórios!";
        mensagemForm.style.color = "red";
    }

    else if(senhaUsuario.length < 6){
        mensagemForm.textContent = "Pelo menos 6 caracteres!";
        mensagemForm.style.color = "orange";
    }
    else if(senhaUsuario.includes("@")){
        mensagemForm.textContent = "Digite um email válido";
        mensagemForm.style.color = "purple";
    }
    else{
        mensagemForm.textContent = "Cadastro realizado com sucesso";
        mensagemForm.style.color = "green";
        form.reset();
    }

});