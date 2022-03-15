var numSort = [];
var numEsco = [];


function sorteio() {
    while (cont < 6) {
        let num = Math.random() * 60;
        num = Math.ceil(num);
        if (!numSort.includes(num)) {
            numSort[cont] = num;
            console.log(numSort);
            cont++;
        }

    }


}

function getValor(valor, pos) {
    valor = Number(valor);
    if (valor <= 0 || valor >= 60) {
        alert("Numero invalido, digite um número entre 1 e 60");
    } else if (numEsco.includes(valor)) {
        alert("Número repetido, escolha um outro número!");

    }else{
        numEsco[pos] =valor;
        console.log(numEsco);
    }
}