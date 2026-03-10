import { useEffect, useState } from "react"
import { getData } from "../../Services/Services.js"
import '../Style/ListaPeliculas.css';

function ListaPeliculas() {
    const [peliculas,setPeliculas] = useState <any[]> ([])

    useEffect(()=>{
        async function traerPeliculas() {
            const data = await getData("peliculas")
            setPeliculas(data)
        }
        traerPeliculas()
    },[])


    return(
        <div className="peliculas-container">
            {peliculas.map((pelicula)=>{
                return(
                    <div className="pelicula-card" key={pelicula.id}>
                        <img src={pelicula.URL} alt={pelicula.NombrePelicula} />
                        <h2>{pelicula.NombrePelicula}</h2>
                        <p>{pelicula.Genero}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default ListaPeliculas