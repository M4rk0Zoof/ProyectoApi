fetch(`https://api.disneyapi.dev/character`)
.then((response) => response.json())  
.then(data => {  
    console.log(data)
})

async function Arianna(){
    var respuesta = await fetch("https://api.disneyapi.dev/character/308");
    var personaje = await respuesta.json();
    console.log(personaje.data.name);
}

Arianna();

objetos = [
    {url:"https://api.disneyapi.dev/character/6",
    color:"verde",
    descripcion:"Una tortuga"},
    {url:"https://api.disneyapi.dev/character/7",
    color:"azul",
    descripcion:"No sé"},
    {url:"https://api.disneyapi.dev/character/10",
    color:"azul",
    descripcion:"No sé"}
];

function personaje(){
    const node = document.createElement("p");
    const descrip= document.createElement("p");
    const fota = document.createElement("img");
    async function datos(){
        var respuesta = await fetch("https://api.disneyapi.dev/character/308");
        var personaje = await respuesta.json();
        const textnode = document.createTextNode(personaje.data.name);
        node.appendChild(textnode);
        const descnode = document.createTextNode("Una reina.");
        descrip.appendChild(descnode);
        fota.src = personaje.data.imageUrl;
        fota.className = "foto";
        fota.width = 100;
        fota.height = 100;
    }
    datos();
    document.getElementById("nombre").appendChild(node);
    document.getElementById("descripzinha").appendChild(descrip);
    document.getElementById("fotinha").appendChild(fota);
}