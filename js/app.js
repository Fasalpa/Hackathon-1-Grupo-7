const hamburguesas = [
    {
        id: 1,
        nombre: "La Colombiana",
        precio: 25000,
        img: "",
        descripcion: "La hamburguesa que sabe a Colombia Jugosa carne Angus a la parrilla, acompañada de dulce plátano maduro, un huevo frito, lechuga fresca, tomate y cebolla"

    },
    {
        id: 2,
        nombre: "La Mexicana",
        precio: 25000,
        img: "",
        descripcion: "Hamburguesa de res 110 g, pollo desmechado, carne de cerdo, jamón, tocineta, chorizo, guacamole, con queso mozzarella, vegetales frescos  "
    },
    {
        id: 3,
        nombre: "Crispy Burger",
        precio: 25000,
        img: "",
        descripcion: "Hamburguesa con 120 gr de carne 100% de res, queso cheddar, cebollas crocantes y salsas de la "
    },
    {
        id: 4,
        nombre: "Cheese Burger",
        precio: 22000,
        img: "",
        descripcion: "Hamburguesa con 120 gr. de carne 100% de res, queso cheddar, salsa de queso cheddar y pan brioche "
    }
]
const contenedorHamburguesas = document.getElementById("contenedor-hamburguesas");

renderizarTarjeta(hamburguesas)
//funcion para mostrar el array de hamburguesas
function renderizarTarjeta(productos) {
    contenedorHamburguesas.innerHTML = "";
    productos.forEach((hamburguesa) => {
        let columnaDiv = document.createElement("div");
        columnaDiv.classList.add("col-md-3")
        columnaDiv.innerHTML = `
            <div class="card text-center p-3 tienda__categoria-card">
                <div class="card-body">
                    <h5 class="card-title">${hamburguesa.nombre}</h5>
                    <p class="card-text small">${hamburguesa.descripcion}</p>
                    <p class="fw-bold text-dark">$${hamburguesa.precio}</p>
                    <button class="btn btn-primary" onclick="agregarAlCarrito(${hamburguesa.id})">
                        Agregar
                    </button>
                </div>
            </div>`;
        contenedorHamburguesas.appendChild(columnaDiv);

    })

}