// Carne - 400gr por pessoa + de 6 horas - 650
//Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");
   
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
   
    let qtdTotalCarne =carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas) ;
    let qtdTotalCerveja =cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas) ;
    

    resultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja (355ml) </p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} garrafas de Bebidas (2 litros) </p>`
    
    console.log(qtdTotalCarne, qtdTotalCerveja, qtdTotalBebida);

}

function carnePP(duracao){
    if (duracao >=6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >=6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidaPP(duracao){
    if (duracao >=6){
        return 1500;
    }
    else{
        return 1200;
    }
}