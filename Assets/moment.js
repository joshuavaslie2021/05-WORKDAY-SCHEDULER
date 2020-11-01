var now = moment().format('LLL');
var hourArray= [9,10,11,12,13,14,15,16,17,18,19,20,21]

var hourVal = moment().hour()
console.log(hourVal)

function assignClass() {
for (var i = 9;i < 23; i++) {
 hourDiv.value = parseInt(hourDiv.value)

if (hourVal > hourDiv.value) {
  hourDiv.setAttribute("class","pasthour")  

}
if (hourVal < hourDiv.value) {
    hourDiv.setAttribute("class","futurehour")
}
if (hourVal === hourDiv.value) {
    hourDiv.setAttribute("class","nowhour")
}
}}
