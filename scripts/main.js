import { dataSerie } from './dataSerie.js';
var coursesTbody = document.getElementById('serie');
var seasonsAverageElm = document.getElementById("seasons-average");
renderSeriesInTable(dataSerie);
seasonsAverageElm.innerHTML = "Seasons Average: ".concat(getSeasonsAverage(dataSerie));
function renderSeriesInTable(courses) {
    console.log('Desplegando series');
    courses.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"numero-column\">".concat(serie.id, "</td>\n                        <td class= \"name-column\">").concat(serie.name, "</td>\n                        <td>").concat(serie.channel, "</td>\n                        <td>").concat(serie.seasons, "</td>");
        coursesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeries = 0;
    series.forEach(function (serie) { return totalSeries += serie.seasons; });
    return totalSeries / series.length;
}
