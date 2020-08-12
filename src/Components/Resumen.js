import React from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import {firstCapital} from "../helper";

Resumen.propTypes = {};

function Resumen({datos}) {

    const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;
    console.log(datos);
    if(datos === undefined){
        return null;
    }
    const {marca, anyo, plan} = datos;

    if (marca === '' ||
        anyo === '' ||
        plan === '') {
        return null;
    }
    return (
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: { firstCapital(marca) }</li>
                <li>Año: {anyo}</li>
                <li>Plan: {firstCapital(plan)}</li>
            </ul>
        </ContenedorResumen>
    );
}

export default Resumen;