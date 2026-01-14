// Obtener elementos por ID
const redElement = document.getElementById("red");
const clickElement = document.getElementById("clickTittle");

// **Modificar** el primer `"¡Hola mundo!"` para que diga `"Adiós"` usando JS
redElement.textContent = "Adiós";

// **Cambiar** el color de fuente de un encabezado a naranja con JS
redElement.addEventListener("click", (event) => {
    redElement.style.color = "orange";
});

// **Agregar** un encabezado clickeable que cambie el color de la fuente a café con JS
clickElement.addEventListener("click", (event) => {
    clickElement.style.color = "brown";
});