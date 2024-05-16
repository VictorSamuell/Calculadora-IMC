// script para funcionamento da calculadora

const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    //declarando as variaveis de acordo com conteudo dos inputs
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    //toFixed para casas decimais , e realizando o calculo do imc
    const imc = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = ''

    //removendo a classe hidden para aparecer as informações
    document.getElementById('infos').classList.remove('hidden');


});


// alternar entre modo escuro e claro
const mudarModoEscuro = () => {
    const body = document.body;
    //adiciona a classe dark-mode ao body
    body.classList.toggle('dark-mode');
};

const modoEscuroBtn = document.getElementById('modo-escuro');
modoEscuroBtn.addEventListener('click', mudarModoEscuro);