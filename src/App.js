import logo from './logo.svg';
import SortingAlgorithmsService from './Services/SortingAlgorithmsService';
import ArrayGeneratorService from './Services/ArrayGeneratorService';
import './App.css';

function App() {
  SortingAlgorithmsService.greets('Aldo');

console.log('>', ArrayGeneratorService.getRandomArray(10, 20));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


/*

ROADMAP:

1) differenze di performance per lo stesso algoritmo in diverse iterazioni dello stesso problema
2) differenza di performance per i diversi algoritmi (insertion, merge e sort generico) come grafico
  -grafico per visualizzare i dati
  -logica di strutturazione dei dati per il grafico
  -funzioni di array e sortings vari

*/


export default App;
