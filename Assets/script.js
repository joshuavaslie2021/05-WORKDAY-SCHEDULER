var dateDiv = document.getElementById("today-date")
var pageHeader = document.getElementById("pageheader")
dateDiv.textContent =  "It is currently " + now
pageHeader.appendChild(dateDiv)
var dayEl = document.getElementById("container")
var hourVal = moment().hour()
var workDay = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm"]

$(document).ready(function() {



  for (var i = 0; i < hourArray.length; i++) {

    
    var input = $('<input>')
    var formNum = i + 9
    // 2. Create a variable named "letterBtn" equal to $("<button>");
    input.attr('id',hourArray[i])
    input.attr('class','input')
    $('#form'+formNum).append(input)
    
    myinputId = input.attr('id')

    // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
    if (hourValue > myinputId) {
      $('#'+formNum).addClass('pasthour')
   }
   if (hourValue < myinputId) {
    $("#"+formNum).addClass('futurehour')

   }
   if (hourValue == myinputId) {
    $("#"+formNum).addClass('nowhour')
 
   }



  }
  var apptArray = {
  "9":$("#9").val(),
  "10":$("#10").val(),
  "11":$("#11").val(),
  "12":$("#12").val(),
  "13":$("#13").val(),
  "14":$("#14").val(),
  "15":$("#15").val(),
  "16":$("#16").val(),
  "17":$("#17").val(),
  "18":$("#18").val(),
  "19":$("#19").val(),
  "20":$("#20").val(),
  "21":$("#21").val()
}
console.log(apptArray)

todoForm = $(".loghour")
 $(".loghour").on("click",function(event) {
  event.preventDefault();
  // var dayArray = {
  //   nine:nineHour.value.trim(),
  //   ten:tenHour.value.trim(),
  //   eleven:elevenHour.value.trim(),
  //   twelve:twelveHour.value.trim(),
  //   thirteen:oneHour.value.trim(),
  //   fourteen:twoHour.value.trim(),
  //   fifteen:threeHour.value.trim(),
  //   sixteen:fourHour.value.trim(),
  //   seventeen:fiveHour.value.trim(),
  //   eighteen:sixHour.value.trim(),
  //   nineteen:sevenHour.value.trim(),
  //   twenty:eightHour.value.trim(),
  //   twentyone:nightHour.value.trim()
  // };   
  var btnNum = $(this).attr("id")
  var formBtn = btnNum-13
  var arrayVal = formBtn-13
  console.log(btnNum)
  var BtnVal = $("#"+formBtn).val().trim()
  apptArray[formBtn] = BtnVal
  console.log(BtnVal)
  console.log(apptArray)


 })
 ;})

