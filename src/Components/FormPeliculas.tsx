// Importamos el hook 'useState' desde React, que nos permite añadir estados a nuestros componentes.
import { useState } from "react"
// Importamos el componente 'Link' de 'react-router-dom' para crear enlaces de navegación.
import { Link } from "react-router-dom"
import { postData } from "../../Services/Services.js"
import '../Style/FormPeliculas.css';

type Pelicula= {
       NombrePelicula: string,
       Genero:  string,
       URL: string
}
// Importamos el módulo 'ServicesUsuario' que contiene las funciones para interactuar con los datos de los usuarios.

function FormPelicula() {
  
    const [NombrePelicula, setNombrePelicula] = useState<string>("")
    
    const [GeneroPelicula, setGeneroPelicula] = useState<string>("")
    const [UrlPelicula, setUrlPelicula] = useState<string>("")

    async function registroPelicula() {

        if (!NombrePelicula || !GeneroPelicula || !UrlPelicula) {
            console.log("Todos los campos deben estar llenos");
            // Se podría agregar un 'return' aquí para evitar que el código continúe si los campos no están llenos.
            return;
        }
        const objPelicula : Pelicula ={
            NombrePelicula: NombrePelicula,
            Genero : GeneroPelicula,
            URL : UrlPelicula


        }

        // Creamos un objeto 'objUsuario' con los datos del formulario.
        const PeliculaAlmacenados = await postData(objPelicula)
        // Imprimimos en la consola la respuesta del servidor.
        console.log(PeliculaAlmacenados);
        }

        // Llamamos a la función 'postData' de 'ServicesUsuario' para enviar los datos del nuevo usuario al servidor.
        // El primer argumento es el objeto de usuario y el segundo es el endpoint o recurso donde se guardarán los datos.

    // El método 'return' contiene el JSX que se renderizará en el DOM.
    return (

        <div className="form-container">
            <h2>Registro de Pelicula</h2>
         
            <input type="text" value={NombrePelicula} onChange={(evento) => setNombrePelicula(evento.target.value)} placeholder="Nombre de la pelicula" />
            
        
            <input type="text" value={GeneroPelicula} onChange={(evento) => setGeneroPelicula(evento.target.value)} placeholder="Genero de la pelicula"/>
            
           
            <input type="text" value={UrlPelicula} onChange={(evento) => setUrlPelicula(evento.target.value)} placeholder="URL de la imagen"/>
            
            
            <button onClick={registroPelicula} >Guardar</button>
        </div>

    )

}

// Exportamos el componente 'FormPelicula' para que pueda ser utilizado en otras partes de la aplicación.
export default FormPelicula
