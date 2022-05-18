import React from "react";
import CardsContainer from "./CardsContainer";

function Main(props){    
    return (
        <>        
            <main className="whiteFrame">
                <div className="inputs">
                    <input className="TextInput" type='text' placeholder="Descrição" value={props.description} onInput={(event) => props.setDescription(event.target.value)}/>
                    <input className="TextInput" type='text' placeholder="Data" value={props.data} onInput={(event) => props.setData(event.target.value)}/>
                    <input className="TextInput" type='text' placeholder="Local" value={props.local} onInput={(event) => props.setLocal(event.target.value)}/>
                </div>
                <div className="botoes">
                    <button className="AddButton"  onClick={props.getData}>Adcionar</ button>
                    <button className="AddButton" onClick={props.clearInput}>Limpar</ button>                    
                </div>            
            </main>
            <CardsContainer description={props.description} local={props.local} data={props.data} cards={props.cards} />
        </>
    )
}

export default Main;