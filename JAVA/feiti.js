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

function inicio(params) {
    window.location.href = 'feiti1.html'
}