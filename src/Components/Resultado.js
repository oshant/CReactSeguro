import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import {CSSTransition, TransitionGroup} from "react-transition-group";

Resultado.propTypes = {};

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:  rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin: 0;
`;


function Resultado({cotizacion}) {

    return (
        (cotizacion === 0) ? <Mensaje> Rellena el formulario superior</Mensaje>
            :
            (
                <ResultadoCotizacion>
                    <TransitionGroup
                            component="p"
                            className="resultado">
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{enter:500, exit:500}}>
                            <TextoCotizacion> El total es: {cotizacion} </TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
            )
    );
}

export default Resultado;