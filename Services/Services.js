//GET USUARIOS funcion que consulta al endpoint a traves de un fetch,conuslta al API al Endpoint


async function getData(endpoint) {

    try {

        const respuestaServidor = await fetch(`http://localhost:3001/${endpoint}`)
      
        
        const datos= await respuestaServidor.json();
   
        
        return datos;
        
    } catch (error) {
        
        console.error("Error al obtener los datos", error);
    }


}





//POST USUARIOS AQUI S EVA A CREAR LA FUNCION PARA GUARDAR UN NUEVO USUARIO


async function postData(obj,endpoint){

       try {

        const peticion = await fetch(`http://localhost:3001/${endpoint}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)

        })

        const dataUsuarios= await peticion.json();

        return dataUsuarios;
        
    } catch (error) {
        
        console.error("Error al obtener los producto", error);
    }



}



export {getData,postData}








