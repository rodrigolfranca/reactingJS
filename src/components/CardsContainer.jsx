import React from 'react';
import Card from './Card';

const CardsContainer = (props) => {
    const showCards = props.cards.map((card, index) => <Card key={index} local={card.local} description={card.description} data={card.data}/>)
    return (
        <div className="CardsContainer">            
            {showCards}
        </div>
    );

}

export default CardsContainer;
