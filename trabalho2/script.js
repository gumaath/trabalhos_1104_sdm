function registrar() {
  id = document.getElementById("id").value;
  produto = document.getElementById("produto").value;
  qntd = document.getElementById("qntd").value;
  document.getElementById("produtos").insertAdjacentHTML("beforeend", "<div class='produto' id='produto" + id + "'>"
    + (parseInt(id)+1) + ") " + produto + " - x" + qntd + "<button onclick='remover("+id+")'>Remover</button></div>"); 
  document.getElementById("id").value++;
}
function remover(id) {
  produto = document.querySelector("#produto"+id);
  produto.remove();
}
