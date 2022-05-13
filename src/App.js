function button(text) {
  return <button className="button">{text}</button>
}

function Header(){
  return <header className="header">
            <ul>
              <li>{button('BTN1')}</li>
              <li>{button('BTN2')}</li>
              <li>{button('BTN3')}</li>
              <li>{button('BTN4')}</li>              
            </ul>
          </header>
}

function Main(){
  return <main className="whiteFrame"></main>
}

function App() {
  return (    
    <>
      <Header />
      <Main />    
    </>
  );
}

export default App;