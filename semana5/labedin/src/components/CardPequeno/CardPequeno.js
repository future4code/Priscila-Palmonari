import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallCard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{props.email}</h4>
                <p>{props.campoEmail}</p>
                <h4>{props.endereco}</h4>
                <p>{props.campoEndereco}</p>
                <h4>{props.celular}</h4>
                <p>{props.campoCelular}</p>
            </div>
        </div>
    )
}

export default CardPequeno;