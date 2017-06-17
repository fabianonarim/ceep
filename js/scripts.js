function mudalayout(){

  var mural = document.querySelector('.mural')
  mural.classList.toggle("mural--linhas")
  if( mural.classList.contains("mural--linhas")){
    this.textContent ="blocos";
  }else{
  this.textContent="linhas";
  }
}
document.querySelector('#mudalayout').addEventListener('click',mudalayout);


function removecartao(){
var cartao = document.querySelector("#cartao_" + this.dataset.ref);
console.log("#cartao_ " + this.dataset.ref)
cartao.classList.add("cartao--some");
setTimeout(function(){
  cartao.remove();
},400);
}

var botoes = document.querySelectorAll(".opcoesDoCartao-remove");
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click",removecartao);
};
