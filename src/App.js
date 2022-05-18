import Header from "./components/Header";
import Main from "./components/Main";
import CardsContainer from "./components/CardsContainer";
import React, { useState } from "react";

function App() {

  const [description, setDescription] = useState("");
  const [data, setData]= useState("");
  const [local, setLocal]= useState("");
  const [cards, setCards]= useState([]);

  return (    
    <>   
      <Header />      
      <Main description={description} setDescription={setDescription} local={local} setLocal={setLocal} data={data} setData={setData} cards={cards} setCards={setCards} />
      <CardsContainer description={description} local={local} data={data} cards={cards} />
    </>
  );
}

export default App;