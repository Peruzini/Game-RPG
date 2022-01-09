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
    while (escolha  > 4 || escolha < 1 ) {
        alert('OPÇÃO INVALIDA')
        escolha = Number(prompt());   
    }
    return escolha;
}

function inicio(params) {
    window.location.href = 'feit3.html'
}