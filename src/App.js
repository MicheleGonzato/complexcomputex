import React, { useEffect } from 'react';
import SortingAlgorithmsService from './Services/SortingAlgorithmsService';
import ArrayGeneratorService from './Services/ArrayGeneratorService';
import Timer from './Services/Timer';
import './App.css';
import { Chart } from 'frappe-charts'


function App() {
//  SortingAlgorithmsService.greets('Aldo');

// console.log('>', ArrayGeneratorService.getRandomArray(10, 20));

// WARNING crash con arrai più lunghi di 10M di elementi

const iterations = [10, 100, 1_000];
//const iterations = [10, 100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000, 1_000_000_000];
let auxArr = ArrayGeneratorService.getRandomArray(1_000, 1_000);

for (let i = 0; i<iterations.length; i++) {

  auxArr = ArrayGeneratorService.getRandomArray(iterations[i], 100_000);
  console.log('Iterazione numero ' + (i+1) + '/' + iterations.length + ' con ' + iterations[i] + ' elementi');
  console.log('Timers!', Timer.tripleTime(SortingAlgorithmsService.insertionSort, auxArr));
  
}

console.log(' - - - - - FIN - - - - - ')


useEffect(() => {
  console.log('hello')
  const data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            name: "Some Data", chartType: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            name: "Another Set", chartType: "line",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ]
  }


      // eslint-disable-next-line no-unused-vars
  const chart = new Chart("#chart", {  // or a DOM element,
    title: "My Awesome Chart",
    data: data,
    type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
    height: 250,
    colors: ['#7cd6fd', '#743ee2']
  })

  console.log('bye')

});



  return (
    <div className="App">
      <div id="chart">hel</div>
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
