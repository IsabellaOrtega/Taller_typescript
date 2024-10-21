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
                            <td class="name-column">${serie.name}</td>
                            <td>${serie.channel}</td>
                            <td>${serie.seasons}</td>`;
        
        // que a los nombres se le pueda dar click
        const nameColumn = trElement.querySelector('.name-column');
        if (nameColumn) {
            nameColumn.addEventListener('click', () => {
                document.getElementById('cardTitulo')!.innerText = serie.name;
                document.getElementById('cardDescription')!.innerText = serie.description || "No description available.";
                
                const cardImage = document.getElementById('cardImage') as HTMLImageElement;
                if (cardImage) {
                    cardImage.src = serie.image || "";
                }
                
                document.getElementById('Serielink')!.setAttribute('href', serie.link || "#");
                
                // Mostrar la card
                const card = document.querySelector('.card') as HTMLElement;
                if (card) {
                    card.style.display = 'block';
                }
            });
        }

        coursesTbody.appendChild(trElement);
    });
}



function getSeasonsAverage(series: Serie[]): number {
  let totalSeries: number = 0;
  series.forEach((serie) => totalSeries += serie.seasons);
  return totalSeries/series.length;
}

