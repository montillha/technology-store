import React, { useState } from "react";
import './CampoTexto.css';
const CampoTexto=(props)=>{
    const[valor,setValor]=useState('');
    const aoDigitado=(evento)=>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input onChange={aoDigitado} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto;