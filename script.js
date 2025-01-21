document.addEventListener("DOMContentLoaded", () => {
    const link = "https://pokeapi.co/api/v2/pokemon/";
    const cards = document.querySelector("#card");

    for (let i = 1; i <= 5; i++) {
        fetch(link + i)
            .then((res) => res.json())
            .then((data) => look(data))
            .catch((error) => console.error("Error:", error));
    }

    function look(data) {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <p class="poke_name">N: ${data.id}</p>
            <div class="poke_ima">
                <img src="${data.sprites.front_default}" alt="${data.name}" />
            </div>
            <div class="poke_info">
                <h2 class="poke_name">${data.name}</h2>
                <p class=""class_poke>tipo: </p>

            </div>
        `;

        cards.append(div);
    }
});
