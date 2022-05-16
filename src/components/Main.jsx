import TextInput from "./TextInput";
import AddButton from "./AddButton";


function Main(){
    return (
        <main className="whiteFrame">
            <div className="inputs">
                <TextInput placeHolder="Descrição" />
                <TextInput placeHolder="Data" />
                <TextInput placeHolder="Local" />
            </div>
            <div className="botoes">
                <AddButton text='Adcionar' />
                <AddButton text='Limpar' />
            </div>
        </main>
    )
}

export default Main;