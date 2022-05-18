import TextInput from "./TextInput";
import AddButton from "./AddButton";


function Main(props){

    function getData() {
        //getting input data
        const inputCard = {
            description: props.description,
            data: props.data,
            local: props.local
        }

        //handling cards array
        const nowCards = props.cards;
        nowCards.push(inputCard);
        props.setCards(nowCards);

        //cleaning out
        clearInput();
    }

    function clearInput(){
        props.setDescription("")
        props.setData("")
        props.setLocal("")
    }
    
    return (
        <main className="whiteFrame">
            <div className="inputs">
                <TextInput placeHolder="Descrição" value={props.description} onInput={(event) => props.setDescription(event.target.value)}/>
                <TextInput placeHolder="Data" value={props.data} onInput={(event) => props.setData(event.target.value)}/>
                <TextInput placeHolder="Local" value={props.local} onInput={(event) => props.setLocal(event.target.value)}/>
            </div>
            <div className="botoes">
                <AddButton text='Adcionar' onClick={getData} />
                <AddButton text='Limpar' onClick={clearInput} />
            </div>
        </main>
    )
}

export default Main;