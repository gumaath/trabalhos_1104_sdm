function descobrir() {
  valor = document.getElementsByName("mes");
  let getMonthName = new Date(new Date().getFullYear(), valor[0].value, 0)
  .toLocaleString('pt-BR', { month: 'long' });
  getMonthName = getMonthName.charAt(0).toUpperCase() + getMonthName.slice(1);
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  const daysInMonth = getDays(new Date().getFullYear(), parseInt(valor[0].value));
  document.getElementById("result").innerText = getMonthName + " possui " + daysInMonth + " dias";
}
