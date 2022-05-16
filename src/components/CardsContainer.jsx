import React from 'react';
import Card from './Card';

const CardsContainer = () => {
    return (
        <div className="CardsContainer">
            <Card data="24.03.2022" local="Fortaleza - CE" appointment="Encontro com o Alpha" />
            <Card data="24.03.2022" local="Fortaleza - CE" appointment="Reunião DM" />
            <Card data="24.03.2022" local="Fortaleza - CE" appointment="Aula Faculdade" />
        </div>
    );
}

export default CardsContainer;
