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
    {url:"https://api.disneyapi.dev/character/308",
    color:"rojo",
    descripcion:"Una reina"
    },
    {url:"https://api.disneyapi.dev/character/307",
    color:"azul",
    descripcion:"No sé"
    }
]