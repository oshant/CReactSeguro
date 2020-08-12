import React, {Fragment, useState} from 'react';
import Header from "./Components/Header";

import styled from "@emotion/styled";
import Formulario from "./Components/Formulario";
import Resumen from "./Components/Resumen";
import Resultado from "./Components/Resultado";
import Spinner from "./Components/Spinner";

const Contenedor = styled.div`
      max-width: 600px;
      margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
      background-color: #FFFFFF;
      padding: 3rem;
`


function App() {
    const [resumen, setResumen] = useState({
        cotizacion: 0,
        datos: {
            marca: '',
            anyo: '',
            plan: ''
        }
    });
    const [cargando, setCargando] = useState(false);
    const {cotizacion, datos} = resumen;
    return (

        <Contenedor>

            <Header titulo="Cotizador de seguros"/>
            <ContenedorFormulario>
                <Formulario
                    setResumen={setResumen}
                    setCargando={setCargando}>
                </Formulario>



                {cargando ? <Spinner/> : <Resumen
                    datos={datos}/>}
                {!cargando ?
                    <Resultado cotizacion={cotizacion}/>:
                    null
                }
                </ContenedorFormulario>

        </Contenedor>
    );
}

export default App;
