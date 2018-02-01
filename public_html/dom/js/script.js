function somar(valor1, valor2) {
    return valor1 + valor2;
}
function subtrair(valor1, valor2) {
    return valor1 - valor2;
}
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}
function dividir(valor1, valor2) {
    return valor1 / valor2;
}

function exemplo1() {
    var a = document.getElementById('valor1').value;
    var b = document.getElementById('valor2').value;
    var o = document.getElementById('operacao').value;
    if (a == "" || b == "" || isNaN(a) || isNaN(b)) {
        alert("Digite algum número");
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    o = parseInt(o);
    var result = 0;
    switch (o) {
        case 1:
            result = somar(a, b);
            break;
        case 2:
            result = a - b;
            break;
        case 3:
            result = a * b;
            break;
        case 4: 
            result = a / b;
            break;
    }

    document.getElementById('resultado').value = result;

    document.getElementById('resultado').style.color = "red";

    document.getElementById('bloco').style.display = "block";
}
function mudarCor() {
    var cor = Math.round(Math.random() * 5);
    var cores = new Array("red", "blue", "pink", "yellou", "green");
    document.getElementById('corpo').style.backgroundColor = cores[cor];
}

