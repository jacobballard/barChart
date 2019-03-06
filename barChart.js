

  var dataC = d3.csv("color.csv")
  var dataJ = d3.json("color.json")


var runGraph = function(dataP){
  console.log("dataP", dataP)

dataP.then(function(data) {
  console.log("data", data)
  drawChart(data);

},
function(error) {
  console.log("error", error)
});
}

dataC.then(function(data) {
  console.log("dataC", data)
  drawChart(data);
},
function(error) {
  console.log("error", error)
});




var drawChart = function(colorData) {
  var svg = d3.select("body").append("svg");
  var width = 400;
  var height = 200;


  var barWidth = width/colorData.length;
  var svg = d3.select("svg")
              .attr("width", width)
              .attr("height", height)
  svg.selectAll("rect")
     .data(colorData)
     .enter()
     .append("rect")
     .attr("x", function(d, i){
       return i * barWidth;
     })
     .attr("y", function(d, i){
       return height - d.amount*10;
     })
     .attr("width", barWidth)
     .attr("height", function(d){
       return d.amount*10;
     })
     .attr("fill", function(d){
       return d.color;
     })

}
