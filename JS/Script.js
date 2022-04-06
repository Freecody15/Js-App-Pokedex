var pokemonRepository = (function () {
  let repository = [
    {
      name: "Gyarados",
      height: 6.5,
      weight: 50,
      type: ["Water", "flying"]
    },
    {
      name: "Pikachu",
      height: 1.04,
      weight: 50,
      type: ["electric"]
    },
    {
      name: "Ninetales",
      height: 1.1,
      weight: 50,
      type: ["fire"],
    },
];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "height" in pokemon &&
    "weight" in pokemon &&
    "types" in pokemon
  ) {
    repository.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}

function getAll () {
  return repository;
}
function showDetails(pokemon) {
  console.log(pokemon.name)
  }
function addListener(button, pokemon) {
  button.addEventListener ("click", function () {
    showDetails(pokemon)
  })
}
function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  addListener(button, pokemon);
}
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails
  }
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Eevee", height: 0.5, weight: 1.5, types: ["normal"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});