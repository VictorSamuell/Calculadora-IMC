// script para funcionamento da calculadora

const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    //declarando as variaveis de acordo com conteudo dos inputs
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    //toFixed para casas decimais , e realizando o calculo do imc
    const imc = (weight / (height * height)).toFixed(2);

    console.log(imc);

    const value = document.getElementById('value');
    let description = '';


    value.classList.add('attention');
    
    //tirando o hidden
    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5){
        description = 'Abaixo do peso';
    } 

    else if (imc >= 18.5 && imc <= 25) {
        description = "Peso Ideal";
        value.classList.remove('attention');
        value.classList.add('normal');
    }

    else if (imc > 25 && imc <= 30) {
        description = "Sobrepeso";
    }

    else if (imc > 30 && imc <= 35) {
        description = "Obesidade Moderada";
    }

    else if (imc > 35 && imc <= 40) {
        description = "Obesidade Severa";
    }

    else {
        description = "Obesidade Mórbida";
    }

    value.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = description;


});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});



// alternar entre modo escuro e claro
const mudarModoEscuro = () => {
    const body = document.body;
    //adiciona a classe dark-mode ao body
    body.classList.toggle('dark-mode');
};

const modoEscuroBtn = document.getElementById('modo-escuro');
modoEscuroBtn.addEventListener('click', mudarModoEscuro);