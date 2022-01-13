
function opcao(escolha) {        
    if (escolha === 1) {
        return 1;
    } 
    else if(escolha === 2) {
        return 2;
    }
    else{
        return 3;
    }   
}

function filtragem(escolha){
    while (escolha  > 3 || escolha < 1 ) {
        alert('OPÇÃO INVALIDA')
        escolha = Number(prompt());   
    }
    return escolha;
}


function destino(escolha) {
    if (escolha === 1) {
        window.location.href = '01-HTML/.html';    
    } 
    else if(escolha === 2){
        window.location.href = 'gameover1.html';
    }
    else{
        return window.location.href = 'gameover1.html';
    }
}

var dale = destino(opcao(filtragem(Number(prompt('Voce se encontra em uma rua movimentada por cormeciantes \n Esolha um dos seguintes itens: \n 1-Staff \n 2-Maça \n 3-Gasta o dinheiro na Taverna')))));
document.write(dale)