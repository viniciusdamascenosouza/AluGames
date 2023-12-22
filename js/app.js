function alterarStatus(id) {
  const gameClicado = document.getElementById(`game-${id}`);
  const imagem = gameClicado.querySelector(".dashboard__item__img");
  const nomeGame = gameClicado.querySelector(".dashboard__item__name");
  const botao = gameClicado.querySelector(".dashboard__item__button");

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    imagem.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    botao.textContent = "Alugar";
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  }
}

