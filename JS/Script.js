let pokemonList = [{

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

for (let i = 0; i < pokemonList.length; i++) {
    document.write('<br>' + pokemonList[i].name + (' , height: ') + pokemonList[i].height);  
    if (pokemonList[i].height >= 1.7) {
      document.write(' - Wow, that\'s a big Pokemon!');
      if (pokemonList[i].height < 1.7 && pokemonList[i].height >= 1) {   
        document.write(' - This is a medium size Pokemon!');
      }
      else if (pokemonList[i].height < 1) {
        document.write(' - This is a small Pokemon!');
      }

    }
}
