const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('botoes')


let stage = {}
 
function StartGame(){
stage = {}
mostrar(1)

}

function showtextNode(textNodeIndex )
{
const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)

textElement.innerText = textNode.text
}

function selecionaropçao(opçao){

}
const textNode = [{
id:1,
text:'Voce se encontra em uma velha casa na cidade de Market,em um quarta com poucas recordações de como veio parar aqui, se depara com uma espada proximo a você oque faz',
options:[
    {
text:'Pega a espada',
setState:{espada:true},
nextText: 2

    
},
{Text:'Deixe a espada',
nextText:2
}

]
},
{
    id:2
}
]

StartGame()