const svg = d3.select("svg")
    .style("width", "960px")
    .style("height", "500px");

let borders = svg.selectAll("path")
let marks = svg.selectAll(".mark")

const projection = d3.geoMercator();
const pathGenerator = d3.geoPath().projection(projection);

d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
    .then(ready);

function ready(data) {
    const countries = topojson.feature(data, data.objects.countries);
    const locations = [{long: 5, lat: 52},{long: -78, lat: 41},{long: -70, lat: 53}];

    borders
        .data(countries.features)
        .enter()
        .append("path")
        .attr("d", pathGenerator);

    marks
        .data(locations)
        .enter()
        .append("circle")
        .attr("class", "mark")
        .attr("r", 3)
        .attr("fill", "red")
        .attr("transform", d => `translate(${projection([d.long,d.lat])})`);
}
