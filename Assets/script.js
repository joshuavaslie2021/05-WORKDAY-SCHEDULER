var dateDiv = document.getElementById("today-date")
dateDiv.append("It is currently " + now)
var dayEl = document.getElementById("container")

var workDay = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm"]
 for (var i = 0; i < workDay.length; i++) {
    var row = document.createElement("div")
    var rowLabel = document.createElement("label")
    rowLabel = workDay[i]
    row.append(rowLabel)
    row.setAttribute("id",workDay[i])
    row.setAttribute("class","row")
    dayEl.appendChild(row)
    
 }
