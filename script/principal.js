escrever = (msg) => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
div = (a,b) => a / b;
mult = (a,b) => a * b;
raiz = a => Math.sqrt(a);
eq2grau = (a,b,c) => {
    if(a == 0) return "Não é uma equação do Segundo Grau.";
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if(delta < 0) return "Não Possui raiz real.";
    if(delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           "x2 " + div(sub(-b,raiz(delta)),mult(2,a));
}
let a = "";
let b = "";
let op = "";
let valor = "";
let tem_ponto = false;
function mostra_resultado(resul) {
    document.getElementById  ("resultado").value = resul;
}
function operacao (nova_op){
    op = nova_op;
    a = valor;
    valor = "";
    tem_ponto = false;
}
function calcula(){
    if(op != ""){
        b = valor;
        valor = "";
        if(op == "soma") mostra_resultado(soma(a,b));
        if(op == "sub") mostra_resultado(sub(a,b));
        if(op == "div") mostra_resultado(div(a,b));
        if(op == "mult") mostra_resultado(mult(a,b));
    }
}

function digitando(tecla){
    if(tecla == "."){
        valor = valor + tecla;
        mostra_resultado (valor);
        tem_ponto = true;
    }
    valor = valor + tecla;
    mostra_resultado(valor);
  
}