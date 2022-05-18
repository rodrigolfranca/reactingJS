import React from "react";
import TextInput from "./TextInput";
import AddButton from "./AddButton";


function Main(props){    
    return (
        <main className="whiteFrame">
            <div className="inputs">
                <TextInput placeHolder="Descrição" value={props.description} onInput={(event) => props.setDescription(event.target.value)}/>
                <TextInput placeHolder="Data" value={props.data} onInput={(event) => props.setData(event.target.value)}/>
                <TextInput placeHolder="Local" value={props.local} onInput={(event) => props.setLocal(event.target.value)}/>
            </div>
            <div className="botoes">
                <AddButton text='Adcionar' onClick={props.getData} />
                <AddButton text='Limpar' onClick={props.clearInput} />
            </div>
        </main>
    )
}

export default Main;