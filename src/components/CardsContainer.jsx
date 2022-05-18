import React from 'react';
import Card from './Card';

const CardsContainer = (props) => {

    return (

        <div className="CardsContainer">            
            { props.cards.map(element => { return (<Card data={element.data} local={element.local} description={element.description} />) } ) }
        </div>

    );

}

export default CardsContainer;
