function calcular() {
  nota1 = parseInt(document.getElementById("nota1").value);
  nota2 = parseInt(document.getElementById("nota2").value);
  nota3 = parseInt(document.getElementById("nota3").value);
  if (nota1 > 100 || nota1 < 0) return document.getElementById("result").innerText = "Nota 1 inválida!";
  if (nota2 > 100 || nota2 < 0) return document.getElementById("result").innerText = "Nota 2 inválida!";
  if (nota3 > 100 || nota3 < 0) return document.getElementById("result").innerText = "Nota 3 inválida!";
  calculo = (nota1 + nota2 + nota3) / 3;
  if (calculo < 60) {
    status = "reprovado";
  } else if (calculo == 60 || calculo <= 69.99) {
    status = "recuperação";
  } else {
    status = "aprovado";
  }
  document.getElementById("result").innerText = "Sua nota foi de " + calculo.toFixed(2) + ". Voce está: " + status;
}
