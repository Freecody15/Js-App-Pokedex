let pokeRepository = (function () {
  let pokemonList = [
    {
      name: 'Gyarados',
      height: 6.5,
      type: ['Water', 'flying']
    },

    {
      name: 'Pikachu',
      height: 1.04,
      type: ['electric']
    },

    {
      name: 'Ninetales',
      height: 1.1,
      type: ['fire']
    },
];

function add (Pokemon) {
  return pokemonList.push(pokemon)
}

function getAll () {
  return pokemonList
}

function showDetails (pokemon) {
  console.log(pokemon.name)
}

function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  addListener(button, pokemon);
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListitem,
  showDetails: showDetails,
}

}
})();
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon)
});