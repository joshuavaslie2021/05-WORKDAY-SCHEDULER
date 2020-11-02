var dateDiv = document.getElementById("today-date")
var pageHeader = document.getElementById("pageheader")
dateDiv.textContent =  "It is currently " + now
pageHeader.appendChild(dateDiv)
var dayEl = document.getElementById("container")
var hourVal = moment().hour()

var inputEl = document.getElementById("input")
var btnEl = document.getElementById("buttons")


var workDay = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm"]



var inputArr =["","","","","","","","","","","","","",""]
 var apptData = document.getElementsByClassName('loghour')
 $(document).ready(function() {
  var nineHour = $("9 am")
  var tenHour = $("10 am")
  var elevenHour = $("11 am")
  var twelveHour = $("12 am")
  var oneHour = $("1 pm")
  var twoHour = $("2 pm")
  var threeHour = $("3 pm")
  var fourHour = $("4 pm")
  var fiveHour = $("5 pm")
  var sixHour = $("6 pm")
  var sevenHour = $("7 pm")
  var eightHour = $("8 pm")
  var nightHour = $("9 pm")
  for (var i = 0; i < hourArray.length; i++) {
    var row = $('<div>')
    row.attr("class","row")
    var saveAppt = $("<button>")
    saveAppt.attr("class","loghour")
    saveAppt.attr("id",workDay[i])
    saveAppt.text("Save Event")
    var rowLabel = $("<div>")
    rowLabel.text(workDay[i])
    rowLabel.attr("label",workDay[i])
    rowLabel.attr("class","label")
    // Inside the loop...
    
  

    // 2. Create a variable named "letterBtn" equal to $("<button>");
    
    var inputHour = $("<input>")
    inputHour.addClass("hourinput",workDay[i])
    inputHour.attr('id',workDay[i])

    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    if (hourValue > hourArray[i]) {
      inputHour.addClass('pasthour')
   }
   if (hourValue < hourArray[i]) {
    inputHour.addClass('futurehour')

   }
   if (hourValue === hourArray[i]) {
    inputHour.addClass('nowhour')
 
   }
  //  inputHour.addClass("data-letter", inputArr[i]);


    // letterBtn.addClass("letter-button letter letter-button-color");

    // // 4. Then give each "letterBtn" a data-attribute called "data-letter".


    // // 5. Then give each "letterBtns" a text equal to "letters[i]".
    
   inputHour.text(inputHour.value)
  
    // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
    $("#input").append(row);
    row.append(rowLabel)
    row.append(inputHour)
   $("#buttons").append(saveAppt)

  }
 ;})
  

 $(".loghour").on("click"),function() {
  var dayArray = {
    nine:nineHour.value.trim(),
    ten:tenHour.value.trim(),
    eleven:elevenHour.value.trim(),
    twelve:twelveHour.value.trim(),
    thirteen:oneHour.value.trim(),
    fourteen:twoHour.value.trim(),
    fifteen:threeHour.value.trim(),
    sixteen:fourHour.value.trim(),
    seventeen:fiveHour.value.trim(),
    eighteen:sixHour.value.trim(),
    nineteen:sevenHour.value.trim(),
    twenty:eightHour.value.trim(),
    twentyone:nightHour.value.trim()
  };   
  $('hourinput').text($(this).attr(""))
  localStorage.setItem('schedule',JSON.stringify(dayArray))
 


 }


