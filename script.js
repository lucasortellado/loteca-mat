var numSort = [];
var cont = 0;


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