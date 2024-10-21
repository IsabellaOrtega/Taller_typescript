import { dataSerie } from './dataSerie.js';
var coursesTbody = document.getElementById('serie');
var seasonsAverageElm = document.getElementById("seasons-average");
renderSeriesInTable(dataSerie);
seasonsAverageElm.innerHTML = "Seasons Average: ".concat(getSeasonsAverage(dataSerie));
function renderSeriesInTable(courses) {
    console.log('Desplegando series');
    courses.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"numero-column\">".concat(serie.id, "</td>\n                            <td class=\"name-column\">").concat(serie.name, "</td>\n                            <td>").concat(serie.channel, "</td>\n                            <td>").concat(serie.seasons, "</td>");
        // que a los nombres se le pueda dar click
        var nameColumn = trElement.querySelector('.name-column');
        if (nameColumn) {
            nameColumn.addEventListener('click', function () {
                document.getElementById('cardTitulo').innerText = serie.name;
                document.getElementById('cardDescription').innerText = serie.description || "No description available.";
                var cardImage = document.getElementById('cardImage');
                if (cardImage) {
                    cardImage.src = serie.image || "";
                }
                document.getElementById('Serielink').setAttribute('href', serie.link || "#");
                // Mostrar la card
                var card = document.querySelector('.card');
                if (card) {
                    card.style.display = 'block';
                }
            });
        }
        coursesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeries = 0;
    series.forEach(function (serie) { return totalSeries += serie.seasons; });
    return totalSeries / series.length;
}
