import './App.css';

function App() {
  

  return (
    <div className="App">
      <div>
      <div className="row">
        <Square value={1}></Square>
        <Square value={2}></Square>
        <Square value={3}></Square>
      </div>
      <div className="row">
        <Square value={4}></Square>
        <Square value={5}></Square>
        <Square value={6}></Square>
      </div>
      <div className="row">
        <Square value={7}></Square>
        <Square value={8}></Square>
        <Square value={9}></Square>
      </div>
      </div>
    </div>
  );
}

//  function for btn
function Square({value}){
  return <button className='square' onClick={handleClick}>{value}</button>
}

export default App;
