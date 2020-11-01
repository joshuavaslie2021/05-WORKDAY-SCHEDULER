var dateDiv = document.getElementById("today-date")
var pageHeader = document.getElementById("pageheader")
dateDiv.textContent =  "It is currently " + now
pageHeader.appendChild(dateDiv)
var dayEl = document.getElementById("container")
var hourVal = moment().hour()

var workDay = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm"]
 for (var i = 0; i < hourArray.length; i++) {
    var row = document.createElement('div')
    row.setAttribute("class","row")
    dayEl.appendChild(row)
    var rowLabel = document.createElement("div")
   rowLabel.textContent = workDay[i]
    var hourInput = document.createElement("input")
    var saveAppt = document.createElement("button")
    saveAppt.setAttribute("class","loghour")
    hourInput.setAttribute("id","hourInput")
   rowLabel.setAttribute("label",workDay[i])
    rowLabel.setAttribute("class","label")
   //  rowLabel = workDay[i]

    row.setAttribute("id",hourArray[i])
    row.setAttribute("class","row")
  
    row.appendChild(rowLabel)

    row.appendChild(hourInput)
    row.appendChild(saveAppt)
    assignClass()


    function assignClass() {
      for (var i = 0; i < hourArray.length; i++) {
      var hourValue = i + 9
      hourValue++
  
      if (hourVal > hourArray[i]) {
         hourInput.setAttribute('class','pasthour')
      }
      if (hourVal < hourArray[i]) {
         hourInput.setAttribute('class','futurehour')

      }
      if (hourVal === hourArray[i]) {
         hourInput.setAttribute('class','pasthour')
    
      }
 }}}
