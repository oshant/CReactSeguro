import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import {calcularMarca, obtenerDiferenciaAnyo, obtenerPlan} from "../helper";



const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`
const Lable = styled.label`
     flex: 0 0 100px;
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    
    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }
`
const Error = styled.div`
     background-color: red;
     color: white;
     padding: 1rem;
     width: 100%;
     text-align: center;
     margin-bottom: 2rem;
`

const Formulario = ({setResumen,setCargando}) => {

    const [datos, setDatos] = useState({
        marca: '',
        anyo: '',
        plan: ''
    });
    const [error, setError] = useState(false);

    //Extraer los valores del state
    const {marca, anyo, plan} = datos;

    //Leer datos del formulario y colorcarlos en el state
    const guardarDatos = e => {
        setDatos({
                ...datos,
                [e.target.name]: e.target.value
            }
        );
    }
    //submit del form
    const handleSubmit =e=>{
        e.preventDefault();
        if(
            anyo.trim() === '' ||
            marca.trim() === '' ||
            plan.trim() === ''
        ){
            setError(true);
            return;
        }
        setError(false);
        //precio base
        let resultado = 2000;
        //Diferencia de años
        const diferencia = obtenerDiferenciaAnyo(anyo);
        resultado -= ((diferencia * 3) * resultado) /100;
        //Precio por marca
        resultado = calcularMarca(marca) * resultado;
        //Plan
        resultado = parseFloat((obtenerPlan(plan) * resultado).toString()).toFixed(2);
        setCargando(true);

        setTimeout(()=>{
            setCargando(false);
            setResumen({
                cotizacion: resultado,
                datos:datos
            });

        },3000);


    }
    return (
        <form
            onSubmit={handleSubmit}>
            {error ?  <Error> Todos los campos son obligatorios </Error> : null}
            <Campo>
                <Lable>Marca</Lable>
                <Select
                    value={marca}
                    name="marca"
                    onChange={guardarDatos}>
                    <option value=""> Seleccione</option>
                    <option value="americano"> Americano</option>
                    <option value="europeo"> Europeo</option>
                    <option value="asiatico"> Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Lable>Año</Lable>
                <Select
                    value={anyo}
                    name="anyo"
                    onChange={guardarDatos}>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Lable>Plan</Lable>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={guardarDatos}/> Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={guardarDatos}/> Completo
            </Campo>
            <Boton type="submit" value="">Cotizar </Boton>
        </form>
    );
}

export default Formulario;