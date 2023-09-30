document.addEventListener("DOMContentLoaded", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
        .then((response) => response.json())
        .then((data) => {
            const bulbasaurImage = document.getElementById("bulbasaur-image");
            const bulbasaurName = document.getElementById("bulbasaur-name");
            const bulbasaurType = document.getElementById("bulbasaur-type");
            const bulbasaurHP = document.getElementById("bulbasaur-hp");
            const bulbasaurAttack = document.getElementById("bulbasaur-attack");
            const bulbasaurDefense = document.getElementById("bulbasaur-defense");

            bulbasaurImage.src = data.sprites.front_default;
            bulbasaurName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            bulbasaurType.textContent = data.types.map((type) => type.type.name).join(", ");
            bulbasaurHP.textContent = data.stats[0].base_stat;
            bulbasaurAttack.textContent = data.stats[1].base_stat;
            bulbasaurDefense.textContent = data.stats[2].base_stat;

            const bulbasaurCard = document.getElementById("bulbasaur-card");
            bulbasaurCard.style.display = "block";
        });
});
