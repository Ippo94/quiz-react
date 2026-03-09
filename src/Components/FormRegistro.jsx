/// Importamos el hook 'useState' desde React, que nos permite añadir estados a nuestros componentes.
import { useState } from "react"
// Importamos el componente 'Link' de 'react-router-dom' para crear enlaces de navegación.
import { Link } from "react-router-dom"
import { postData } from "../../Services/Services.js"
import '../Style/FormRegistro.css';
// Importamos el módulo 'ServicesUsuario' que contiene las funciones para interactuar con los datos de los usuarios.

// Definimos el componente de función 'FormRegistro'.
function FormRegistro() {
    // Declaramos tres estados utilizando 'useState' para controlar los valores de los campos del formulario.
    // 'nombreUsuario' para el nombre de usuario, inicializado como una cadena vacía.
    const [nombreUsuario, setNombreUsuario] = useState("")
    // 'correoUsuario' para el correo electrónico, inicializado como una cadena vacía.
    const [correoUsuario, setCorreoUsuario] = useState("")
    // 'passwordUsuario' para la contraseña, inicializado como una cadena vacía.
    const [passwordUsuario, setpasswordUsuario] = useState("")

    // Definimos una función asíncrona 'registroUsuario' para manejar el registro de un nuevo usuario.
    async function registroUsuario() {

        // Verificamos si alguno de los campos está vacío.
        // Nota: la condición original '!nombreUsuario || !correoUsuario || passwordUsuario' parece tener un error lógico,
        // ya que 'passwordUsuario' sería verdadero si no está vacío. 
        // Debería ser '!passwordUsuario' para verificar si está vacío.
        if (!nombreUsuario || !correoUsuario || !passwordUsuario) {
            console.log("Todos los campos deben estar llenos");
            // Se podría agregar un 'return' aquí para evitar que el código continúe si los campos no están llenos.
            return;
        }

        // Creamos un objeto 'objUsuario' con los datos del formulario.
        const objUsuario = {
            usuario: nombreUsuario,
            correo: correoUsuario,
            password: passwordUsuario
        }

        // Llamamos a la función 'postData' de 'ServicesUsuario' para enviar los datos del nuevo usuario al servidor.
        // El primer argumento es el objeto de usuario y el segundo es el endpoint o recurso donde se guardarán los datos.
        const usuariosAlmacenados = await postData(objUsuario,"usuarios")
        // Imprimimos en la consola la respuesta del servidor.
        console.log(usuariosAlmacenados);
    }

    // El método 'return' contiene el JSX que se renderizará en el DOM.
    return (

        <div className="form-container">
            <h2>Registro</h2>
            {/* 
              Este es un campo de entrada para el nombre de usuario.
              El atributo 'value' está vinculado al estado 'nombreUsuario'.
              El evento 'onChange' actualiza el estado 'nombreUsuario' cada vez que el usuario escribe.
            */}
            <input type="text" value={nombreUsuario} onChange={(evento) => setNombreUsuario(evento.target.value)} placeholder="Nombre de usuario" />
            
            {/* 
              Campo de entrada para el correo electrónico del usuario.
              Funciona de la misma manera que el campo de nombre de usuario.
            */}
            <input type="text" value={correoUsuario} onChange={(evento) => setCorreoUsuario(evento.target.value)} placeholder="Correo electrónico"/>
            
            {/* 
              Campo de entrada para la contraseña del usuario.
              Funciona de la misma manera que los otros campos de entrada.
            */}
            <input type="password" value={passwordUsuario} onChange={(evento) => setpasswordUsuario(evento.target.value)} placeholder="Contraseña"/>
            
            {/* 
              Este es el botón para enviar el formulario de registro.
              El evento 'onClick' ejecuta la función 'registroUsuario' cuando se hace clic.
            */}
            <button onClick={registroUsuario} >Enviar</button>
        </div>

    )

}

// Exportamos el componente 'FormRegistro' para que pueda ser utilizado en otras partes de la aplicación.
export default FormRegistro
