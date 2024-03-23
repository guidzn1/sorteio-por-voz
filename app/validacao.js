function verificaValorValidoChute(chute){
    const numero = +chute

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido</div>`
        return
    }
    if(numeroMaiorOUMenorQueOValoe(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`

    }else if (numero>numeroSecreto) {
        elementoChute.innerHTML += `<div >O número secreto é menor<i class="fa-solid fa-arrow-down-long"></i></div>`
        
    }else{
        elementoChute.innerHTML += `<div >O número secreto é maior<i class="fa-solid fa-arrow-up-long"></i></div>`
    }
    
}

function chuteforInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOUMenorQueOValoe(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
        
    }
})