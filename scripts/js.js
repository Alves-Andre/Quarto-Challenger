function teste(idi){
    valor = document.getElementById(idi).value;
    conteudo = document.getElementById("resultado").innerHTML;
    if (valor == 'reset'){
        document.getElementById("resultado").innerText = '0';
    }
    else if (valor == 'del'){
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
            document.getElementById("resultado").innerText += valor;
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
