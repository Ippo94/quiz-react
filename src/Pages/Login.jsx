import React from "react";
import FormLogin from "../Components/FormLogin.jsx";
import NavInicio from "../components/NavInicio.jsx";
import FooterInicio from "../Components/FooterInicio.jsx";


function Login() {
    return(
        <>
        <NavInicio />
        <FormLogin/>
        <FooterInicio />
        </>
    )
}
export default Login