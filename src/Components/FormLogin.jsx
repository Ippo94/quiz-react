import { useEffect, useState } from "react";
import { getData } from "../../Services/Services.js";
import '../Style/FormLogin.css';

function Formlogin() {
    const [nombreUsuario,setNombreUsuario] = useState("")
    const [passwordUsuario,setPasswordUsuario] = useState("")
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        async function cargarUsuarios() {
        const dataUsuarios = await getData("usuarios")
            setUsuario(dataUsuarios)
        }
        cargarUsuarios()
    },[])

    function iniciarSesion() {
        const usuarioValido = usuario.find((u)=> u.usuario == nombreUsuario && u.password == passwordUsuario)

        if (usuarioValido) {
            alert("inicia")
        }else{
            alert("No inicia")
        }

    }

  return (
    

        <div className="form-container">
            <h2>Login</h2>
            {/* El onChange sirve para ir tomando los valores de lo que escribimos en lo inputs */}
            <input type="text" value={nombreUsuario} onChange={(evento) => setNombreUsuario(evento.target.value)} placeholder="Nombre de usuario"/>
            
            {/* El onClick ejetcuta la función de registroUsuario */}
            <input type="password" value={passwordUsuario} onChange={(evento) => setPasswordUsuario(evento.target.value)} placeholder="Contraseña"/>
            <button onClick={iniciarSesion}>Entrar</button>
        </div>

    )

}




export default Formlogin
