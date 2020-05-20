const svg = d3.select('svg')
    .style('width', '960px')
    .style('height', '500px');

const projection = d3.geoMercator();
const pathGenerator = d3.geoPath().projection(projection);

d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
    .then(ready);

function ready(data) {
    const countries = topojson.feature(data, data.objects.countries);

    svg.selectAll('path')
        .data(countries.features)
        .enter()
        .append('path')
        .attr('d', pathGenerator);
}
