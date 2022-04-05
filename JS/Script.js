let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Gyarados',
      height: 6.5,
      weight: 50,
      type: ['Water', 'flying']
    },

    {
      name: 'Pikachu',
      height: 1.04,
      weight: 50,
      type: ['electric']
    },

    {
      name: 'Ninetales',
      height: 1.1,
      weight: 50,
      type: ['fire']
    },
];

function add (pokemon) {
  pokemonList.push(pokemon);
}

function getAll () {
  return pokemonList;
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  showDetails: showDetails,
};
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button";)
  button.innerText = "ph";
  button.classList.add("button-class")
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);

});

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Eevee' });
console.log(pokemonRepository.getAll());