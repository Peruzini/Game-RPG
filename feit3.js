
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
        window.location.href = 'GuerreiroZini2.html';    
    } 
    else if(escolha === 2){
        window.location.href = 'GuerreiroZini1gameover2.html';
    }
    else{
        return window.location.href = 'GuerreiroZini1gameover2.html';
    }
}

var dale = destino(opcao(filtragem(Number(prompt('Decida o que fazer \n 1-Ataque \n 2-Foge e volta Pra Casa\n 3-Aguarda para o que vai sair do Arbusto ')))));
alert(dale);
