
function insereOfertas (){
    var listaOfertas = document.getElementsByClassName("lista-ofertas")[0];
    var modelo = document.getElementById("card-modelo");
    var ofertas = [{
        titulo: "Fone JBL",
        url: "/produto.html",
        img: "img/hedfone.webp",
        imgDescription: "Fones da marca JBL de cor vermelha",
        preco: 89.90,
    },
    {
        titulo: "Fone JBL",
        url: "/produto.html",
        img: "img/hedfone.webp",
        imgDescription: "Fones da marca JBL de cor vermelha",
        preco: 89.90,

    }
];

    ofertas.forEach(function(produto){
        var variaveis = {
        "{link-produto}": "url",
        "{imagem-produto}": "img",
        "{descricao-imagem-produto}": "imgDescription",
        "{titulo-produto}": "titulo",
        "{preco-produto}": "preco",
        };
        var modeloString = modelo.innerHTML

        for(var variavel in variaveis){
            modeloString = modeloString.replaceAll(variavel, produto[variaveis[variavel]]);

        }
        listaOfertas.innerHTML += modeloString

        

        //listaOfertas.innerHTML += modelo.innerHTML.replace()
    });
}


function main(){
    insereOfertas();
   
}