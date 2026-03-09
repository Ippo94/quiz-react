import FooterInicio from "../Components/FooterInicio.jsx"
import ListaPeliculas from "../Components/ListaPeliculas.jsx"
import MaindInicio from "../Components/MaindInicio.jsx"
import NavInicio from "../Components/NavInicio.jsx"
import '../Style/styles.css';



function Inicio() {
    return (
        <>
            <NavInicio />


            <MaindInicio />

            <ListaPeliculas/>

            <FooterInicio />

        </>


    )
}
export default Inicio