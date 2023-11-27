escrever = (msg) => alert(msg);
soma = (a,b) => Number(a) + Number(b);
sub = (a,b) => a - b;
div = (a,b) => a / b;
mult = (a,b) => a * b;
raiz = a => Math.sqrt(a);
eq2grau = (a,b,c) => {
    if(a == 0) return "Não é uma equação do Segundo Grau.";
    let delta = sub(mult(b,b),mult(4,mult(a,c)));

    document.getElementById("delta").innerHTML = delta;

    if(delta < 0) return "Não Possui raiz real.";
    if(delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           "x2 " + div(sub(-b,raiz(delta)),mult(2,a));
}
let a = "0";
let b = "0";
let c = "0";
let sa= "+";
let sb= "+";
let sc= "+";

let op = "";
let valor = "";
let tem_ponto = false;
let desligada = false;
function zerar(){
    if(deligada) return;
    a="";
    b="";
    op="";
    valor= "0";
    tem_ponto= false;
    mostra_resultado(0);
}
function desligar(){
    if(desligada){
        desligada = false;
        zerar();
    }else{
        desligada = true;
        zerar();
        mostra_resultado("");
    }
    return desligada;
}
function mostra_resultado(resul){
     document.getElementById("resultado").value = resul;
}
function operacao(nova_op){
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
        a = "";
        b = "";
        tem_ponto = false;

    }
}
function digitando(tecla){
    if(tecla == "."){
         if(!tem_ponto){
            valor = valor + tecla;
            mostra_resultado(valor);
            tem_ponto = true;
         }
         return;
    }
    valor = valor + tecla;
    mostra_resultado(valor);
}
const set_sinal_a = () =>{
    sa = document.getElementById("sinal_a").value;
    calculadora2g();
}
const set_sinal_b = () =>{
    sa = document.getElementById("sinal_b").value;
    calculadora2g();
}
const set_sinal_c = () =>{
    sa = document.getElementById("sinal_c").value;
    calculadora2g();
}
const set_valor_a = () =>{
    a = document.getElementById("valor_a").value;
    a = Number(a);
    if(sa == "-" ) a = -a;
    calculadora2g();
}
const set_valor_b = () =>{
    b = document.getElementById("valor_b").value;
    b = Number(b);
    if(sa == "-" ) b = -b;
    calculadora2g();
}
const set_valor_c = () =>{
    c = document.getElementById("valor_c").value;
    c = Number(c);
    if(sa == "-" ) c = -c;
    calculadora2g();
}
const calcular2g = () =>{
    document.getElementById("raiz") .innerHTML = eq2grau(a,b,c);
}
let num = 0;
function trocar_img(){
    num++;
    setTimeout(function(){
        document.getElementById("nova_imagem").src = "./img/img"+num+".jpg";
        if(num == 3) num = 0;
        trocar_imag();
    },1000);
}
let num = 0;
function trocar_img(){
    num++;
    setTimeout(function(){
        document.getElementById("nova_imagem").src = "./img/img"+num+".jpg";
        if(num == 3) num = 0;
        trocar_imag();
    },1000);
}

