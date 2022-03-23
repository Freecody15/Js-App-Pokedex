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

Function addListItem(pokemon) {
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
for (let i = 0; i < pokemonList.length; i++) {
  document.write('<br>' + pokemonList[i].name + (' , Height: ') + pokemonList[i].height);  
  if (pokemonList[i].height >= 1.8) {
    document.write(' - Wow, that\'s a big Pokemon!');

    if (pokemonList[i].height <= 1.7 && pokemonList[i].height >= 1) {   
      document.write(' - This is a medium size Pokemon!');
    }
    else if (pokemonList[i].height <= 1) {
      document.write(' - This is a small Pokemon!');
    }

  }
}


