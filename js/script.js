const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const main = document.querySelector("main");
const boton = document.getElementById("boton");

main.addEventListener("click", (e) => {
    const targetID = e.target.id; 
    if (targetID === "boton") {
        let colorHex = "#";

        for (let i = 0; i < 3; i++) {
            let index = getRandomNumber();
            colorHex += hex[index];
        }

        main.style.backgroundColor = colorHex;
        main.style.transition = "600ms";


        if (colorHex === "#FFF") {
            alert("¡Felicidades! Sacaste el blanco, te ganaste un chocolate blanco");
            boton.textContent = "Reiniciar";
        } else if (colorHex === "#000") {
            alert("¡Felicidades! Sacaste el negro, te ganaste un chocolate negro");
            boton.textContent = "Reiniciar";
        }
    }

})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}