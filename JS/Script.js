const pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }



    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.list-group');
        let listPokemon = document.createElement('li');
        listPokemon.classList.add('group-list-item');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn-primary', 'search-button');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#pokemonModal');
        listPokemon.append(button);
        pokemonList.append(listPokemon);
        button.addEventListener("click", function (event) {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    async function loadDetails(item) {
        let url = item.detailsUrl;
        try {
            const response = await fetch(url);
            const details = await response.json();
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
        } catch (e) {
            console.error(e);
        }
    }

    function showDetails(item) {
        loadDetails(item).then(function () {
            showModal(item);
        });
    }

    function showModal(pokemon) {

        let modalTitle = $('.modal-title');
        let modalBody = $('.modal-body');
        let pokemonName = $('<h2>' + pokemon.name + '</h2>');
        let pokemonHeight = $('<p>' + pokemon.height + 'm' + '</p>');
        let pokemonWeight = $('<p>' + pokemon.weight + 'kg' + '<p>');
        let imageElement = $('<img class=\'pokemon-modal-image\'>');
        imageElement.attr("src", pokemon.imageUrl);
        let imageElementBack = $('<img class=\'pokemon-modal-image\'>');
        imageElementBack.attr("src", pokemon.imageUrlBack);
        const secondElement = document.createElement('p');
        pokemon.types.forEach((type, index) => {
            if (index === pokemon.types.length - 1) {
                secondElement.innerText += type.type.name;
            } else {
                secondElement.innerText += type.type.name + ", ";
            }
        })

        modalTitle.empty();
        modalBody.empty();
        modalTitle.append(pokemonName);
        modalBody.append(imageElement);
        modalBody.append(imageElementBack);
        modalBody.append(secondElement);
        modalBody.append(pokemonHeight);
        modalBody.append(pokemonWeight);
    }

    $(document).ready(function () {
        $('#myInput').on('keyup', function () {
            const value = $(this).val().toLowerCase();
            $(".search-button").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
