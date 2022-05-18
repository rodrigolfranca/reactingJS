import React from 'react';

const Card = (props) => {
    return (
        <div className='Card'>
            <h3 className="data">{props.data}</h3>
            <p className="local">{props.local}</p>
            <span className="Compromisso">{props.description}</span>
        </div>
    );
}

export default Card;
