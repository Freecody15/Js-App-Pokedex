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
};
})();

pokemonRepository.add({
  name:'Eevee',
  height: 0.3,
  weight: 6.5,
  type: ['normal']
});

pokemonRepository.getAll().forEach(function(pokemon){
  document.write(pokemon.name + ' height: '+ pokemon.height + ', ');
  document.write ('<br/>');
});
