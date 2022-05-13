const Header = require('./components/Header')

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