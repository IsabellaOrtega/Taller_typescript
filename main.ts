import { Serie } from './Serie.js';

import { dataSerie } from './dataSerie.js';

let coursesTbody: HTMLElement = document.getElementById('serie')!;
const seasonsAverageElm: HTMLElement = document.getElementById("seasons-average")!;


renderSeriesInTable(dataSerie);

seasonsAverageElm.innerHTML = `Seasons Average: ${getSeasonsAverage(dataSerie)}`;


function renderSeriesInTable(courses: Serie[]): void {
    console.log('Desplegando series');
    courses.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td class="numero-column">${serie.id}</td>
                        <td class= "name-column">${serie.name}</td>
                        <td>${serie.channel}</td>
                        <td>${serie.seasons}</td>`;
    coursesTbody.appendChild(trElement);
    });
}



function getSeasonsAverage(series: Serie[]): number {
  let totalSeries: number = 0;
  series.forEach((serie) => totalSeries += serie.seasons);
  return totalSeries/series.length;
}
