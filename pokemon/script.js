document.addEventListener("DOMContentLoaded", () => {
    const link = "https://pokeapi.co/api/v2/pokemon/";
    const cards = document.querySelector("#card");

    for (let i = 1; i <= 20; i++) {
        fetch(link + i)
            .then((res) => res.json())
            .then((data) => look(data))
            .catch((error) => console.error("Error:", error));
    }

function look(info) {
    let tipos = info.types.map((type)=>
        `<p class="${type.type.name}">tipo:${type.type.name}</p>`);
        tipos= tipos.join("")    

    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <p class="poke_name">N: ${info.id}</p>
        <div class="poke_ima">
            <img src="${info.sprites.front_default}" alt="${info.name}" />
        </div>
        <div class="poke_info">
            <h2 class="poke_name">${info.name}</h2>
        </div>
        <div class"tipo">${tipos}</div>
        <div>
            <p class="weight">peso: ${info.weight}kg</p>
        </div>
    `;
cards.append(div);
}});
