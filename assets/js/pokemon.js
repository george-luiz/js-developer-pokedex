const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("id");
const nome = document.querySelector("#nome");
const divButton = document.querySelector("#tipos");
const imagemPrincipal = document.querySelector("#imagem-personagem");
const id = document.querySelector("#id");
const especie = document.querySelector("#especie");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const abilidade = document.querySelector("#abilidade");

function buscaApi() {
  fetch(`https://pokeapi.co/api/v2/pokemon/${idParam}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return buscaInformacoes(data);
    });
}

function buscaInformacoes(data) {
  nome.innerHTML = data.name;
  data.types.map((tipos) => {
    const botao = document.createElement("button");
    botao.innerHTML = tipos.type.name;

    return divButton.appendChild(botao);
  });

  imagemPrincipal.setAttribute(
    "src",
    data.sprites.other.dream_world.front_default
  );
  id.innerHTML = data.id;
  especie.innerHTML = data.species.name;
  altura.innerHTML = data.height;
  peso.innerHTML = data.weight;

  data.abilities.map((skil) => {
    return (abilidade.innerHTML += `${skil.ability.name}, `);
  });
}

buscaApi();
