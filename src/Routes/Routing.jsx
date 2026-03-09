import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Inicio from "../Pages/Inicio";
import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import RegistroPeliculas from "../Pages/RegistroPeliculas";


function Routing() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/registroPeliculas" element={<RegistroPeliculas/>}/>
            </Routes>
        </Router>
    )
}
export default Routing