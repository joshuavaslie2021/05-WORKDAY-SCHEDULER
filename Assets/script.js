var dateDiv = document.getElementById("today-date")
var pageHeader = document.getElementById("pageheader")
dateDiv.textContent =  "It is currently " + now
pageHeader.appendChild(dateDiv)
var dayEl = document.getElementById("container")
var hourVal = moment().hour()
var apptArray = []

// var hourData = {
//    i: hourInput.value.trim(),
// }
var workDay = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm"]
 for (var i = 0; i < hourArray.length; i++) {
    var row = document.createElement('div')
    row.setAttribute("class","row")
    dayEl.appendChild(row)
    var rowLabel = document.createElement("div")
    rowLabel.textContent = workDay[i]
    var hourInput = document.createElement("input")
    var rowSpan = document.createElement('span')
    rowSpan.setAttribute('value',workDay[i])
    row.appendChild(rowSpan)
   localStorage.setItem(workDay[i],'')



    var saveAppt = document.createElement("button")
    saveAppt.setAttribute("class","loghour")
    saveAppt.textContent = "Save Event"
    hourInput.setAttribute("id","hourInput")
    rowLabel.setAttribute("label",workDay[i])
    rowLabel.setAttribute("class","label")
   //  rowLabel = workDay[i]

    row.setAttribute("id",hourArray[i])
    row.setAttribute("class","row")
  
    row.appendChild(rowLabel)

    rowSpan.appendChild(hourInput)
    rowSpan.appendChild(saveAppt)
    assignClass()


    function assignClass() {

    
      console.log(hourValue)
   
  
      if (hourValue > hourArray[i]) {
         hourInput.setAttribute('class','pasthour')
      }
      if (hourValue < hourArray[i]) {
         hourInput.setAttribute('class','futurehour')

      }
      if (hourValue === hourArray[i]) {
         hourInput.setAttribute('class','nowhour')
    
      }
 }}

 saveAppt.addEventListener("click", function(event) {
   event.preventDefault();
 
   var hourName = this.value.trim();
   console.log(hourName)
   // Return from function early if submitted todoText is blank
   if (hourText === "") {
     return;
   }
   else{
   localStorage.setItem(this,JSON.stringify(hourName))
   // Add new todoText to todos array, clear the input
   todos.push(todoText);
   todoInput.value = "";
 

   localStorageData.forEach(function()  {
     localStorage.set('Hour',JSON.stringify(Hour))
   });


   }

   // Re-render the list
   renderTodos();
 });





