


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

var pause = document.querySelector('.pause');
var timer = setInterval(trocaBanner, 4000);
var play = document.querySelector('.play');
pause.onclick=function(){
   
        clearInterval(timer);
 
}
play.onclick=function(){
    timer = setInterval(trocaBanner, 4000);
}
