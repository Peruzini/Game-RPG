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



function guerreiro(escolha) {
    
   
    if (escolha === 1) {
        window.location.href = 'guerreiro2gameover1.html';
    } 
    else if(escolha === 2){
        window.location.href = 'guerreiro2gameover2.html';
    }
    else{
        return'VOCE GANHOU';
    }
}

var dale = guerreiro(opcao(filtragem(Number(prompt('DECIDA PARA ONDE IRA \n 1-QUARTO \n 2-FOGE PARA FORA DE CASA \n 3-ESPERA NO MESMO LUGAR ')))));
alert(dale);
