import Header from "./components/Header";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {

  const [description, setDescription] = useState("");
  const [data, setData]= useState("");
  const [local, setLocal]= useState("");
  const [cards, setCards]= useState([]);

  function getData() {
    console.log("Demonio Satanás");
    //getting input data
    const inputCard = {
        description: description,
        data: data,
        local: local
    }

    //handling cards array
    const nowCards = cards;
    nowCards.push(inputCard);
    setCards(nowCards);

    //cleaning out
    clearInput();
  }

function clearInput(){
    setDescription("")
    setData("")
    setLocal("")
  }

  return (    
    <>   
      <Header />      
      <Main description={description} setDescription={setDescription} local={local} setLocal={setLocal} data={data} setData={setData} cards={cards} setCards={setCards} clearInput={clearInput} getData={getData} />      
    </>
  );
}

export default App;