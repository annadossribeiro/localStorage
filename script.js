//let texto;
//function mostrarMouse(event){
    //console.log(`eixo x ${event.pageX} e eixo Y ${event.pageY}`);

    //if(event.pageX <=15 && event.pageY <=30){
    //    alert("eu sou legal volte para mim =c")
    //}
    
    
//}
//window.onmousemove = mostrarMouse;

let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button")
let texto = document.querySelector("p");
let naosou = document.querySelector("a")
let dn = document.querySelector("h3")
let h = document.querySelector('h2')


if (localStorage.nome) {
    dn.innerHTML = `Seja bem vindo ${localStorage.nome}`
    caixaTexto.style.display = 'none';
    botao.style.display = 'none';
    naosou.innerHTML = `Não é ${localStorage.nome}?`

}
else {
    function acessar() {
        dn.innerHTML = 'Digite seu nome'
        localStorage.setItem('nome', caixaTexto.value)
        texto.innerHTML = `Seja bem vindo ${localStorage.nome}`
        naosou.innerHTML = `Não é ${localStorage.nome} ?`
        dn.style.display = 'none';
        caixaTexto.style.display = 'none';
        botao.style.display = 'none';

    }
    botao.onclick = acessar;
}


function limpar() {
    localStorage.removeItem('nome')
}



naosou.onclick = limpar;



