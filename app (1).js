'use strict'
/*Às vezes, o JavaScript faz suposições sobre o tipo de dados que você insere. Atribuição, matemática ou igualdade lógica podem gerar resultados inesperados.
Para combater essas deficiências, você pode ativar o modo estrito, que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.
*/

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark Mode";
    } else{
        this.textContent = "Light Mode";
    }
    console.log('Current ClassName: ' + className);
});