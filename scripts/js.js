function inserir(idi){
    valor = document.getElementById(idi).value;
    conteudo = document.getElementById("resultado").innerHTML;
    if (valor == 'reset'){
        reset();
    }
    else if (valor == 'del'){
        del(conteudo);
    }
    else {
        if (conteudo == '0'){
            if (valor != '+' & valor != '-' & valor != '/' & valor != '*' & valor != '.'){
                document.getElementById("resultado").innerText = valor;
            }
            else{
                document.getElementById("resultado").innerText += valor;
            }
        }
        else {
            var funcao = operador(conteudo,valor);
            if (funcao==true){
                return null;
            }
            else{
                document.getElementById("resultado").innerText += valor;
            }
        }
    }
}
function resultado(){
    var conteudo = document.getElementById("resultado").innerHTML;
    //conteudo = conteudo.split([separator['']]);
    if (conteudo.includes('*')){
        var lista = conteudo.split('*')
        var total =  new RegExp(parseFloat(lista[0]) * parseFloat(lista[1]));
        total = String(total);
        var total1 = total.replace('/','');
        var total2 = total1.replace('/','');
        document.getElementById("resultado").innerHTML = total2;
    }
    else if (conteudo.includes('/')){
        var lista = conteudo.split('/')
        var total =  new RegExp(parseFloat(lista[0]) / parseFloat(lista[1]));
        total = String(total);
        var total1 = total.replace('/','');
        var total2 = total1.replace('/','');
        document.getElementById("resultado").innerHTML = total2;
    }
    else if (conteudo.includes('+')){
        var lista = conteudo.split('+')
        var total =  new RegExp(parseFloat(lista[0]) + parseFloat(lista[1]));
        total = String(total);
        var total1 = total.replace('/','');
        var total2 = total1.replace('/','');
        document.getElementById("resultado").innerHTML = total2;
    }
    else if (conteudo.includes('-')){
        var lista = conteudo.split('-')
        var total =  new RegExp(parseFloat(lista[0]) - parseFloat(lista[1]));
        total = String(total);
        var total1 = total.replace('/','');
        var total2 = total1.replace('/','');
        document.getElementById("resultado").innerHTML = total2;
    }
}
function del(conteudo){
    const lista = conteudo.split("");
        cont = parseInt(lista.length)
        var total = '';
        if (cont==1){
            document.getElementById("resultado").innerText = 0;
        }
        else{
            for (var i = 0; i < cont-1; i++) {
                total = total+lista[i];
            }
            document.getElementById("resultado").innerText = total;
        }
}
function reset(){
    document.getElementById("resultado").innerText = '0';
}
function operador(conteudo,digitado){
    const lista = conteudo.split("");
    var total = '';
    var valor = '';
    cont = 0;
    for (var i = 0; i < lista.length; i++) {
        valor =lista[i];
    }
    if (valor != '+' & valor != '-' & valor != '/' & valor != '*' & valor != '.'){
        return false;
    }
    else {
        if (digitado == '+' || digitado == '-' || digitado == '/' || digitado == '*' || digitado == '.'){
            cont = 0;
            for (var i = 0; i < lista.length-1; i++) {
                total += lista[i];
            }
            document.getElementById("resultado").innerText = total+digitado;
            return true;
        }
        else {
            return false;
        }
    }
}