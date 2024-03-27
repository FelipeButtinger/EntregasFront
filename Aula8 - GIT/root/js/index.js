


function validaBusca(){
    if(document.querySelector('#q').value ==""){
        alert("Não deixe o campo de busca em branco");
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["./img/jojos.png", "./img/viloes.png"];
var bannerAtual = 0;
function trocaBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('.destaque img').src = banners[bannerAtual];
}
setInterval(trocaBanner, 4000);

var controle = document.querySelector('.pause');
var timer = setInterval(trocaBanner, 4000);
controle.onclick=function(){
    if(controle.className == 'pause'){
        clearInterval(timer);
        controle.className = 'play';
    } else{
        timer = setInterval(trocaBanner, 4000);
        controle.className = 'pause';
    }
    return false;
}