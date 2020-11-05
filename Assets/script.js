$(document).ready(function() {
  var storedSchedule = JSON.parse(localStorage.getItem("schedule"))
  var dateDiv = $("#today-date")
  var pageHeader = $("#pageheader")
  dateDiv.text("It is currently " + now)
  pageHeader.append(dateDiv)
  var dayEl = $("#container")
  var formNum = 0
  var hourVal = moment().hour()
  var workDay = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm","6 pm","7 pm","8 pm","9 pm"]
  for (var i = 0; i < hourArray.length; i++) {
    var input = $('<input>')
    formNum = i + 9
   
    input.attr('id',hourArray[i]) 
    input.attr('class','input')
    $('#form'+formNum).append(input)
      
    myinputId = input.attr('id')
  
    if (hourValue > myinputId) {
        $('#'+formNum).addClass('pasthour')
        $('#'+formNum).val()
     }
     if (hourValue < myinputId) {
      $("#"+formNum).addClass('futurehour')
  
     }
     if (hourValue == myinputId) {
      $("#"+formNum).addClass('nowhour')
     }
     $("#9").val(storedSchedule.Nine)
     $("#10").val(storedSchedule.Ten)
     $("#11").val(storedSchedule.Eleven) 
     $("#12").val(storedSchedule.Twelve)
     $("#13").val(storedSchedule.Thirteen)
     $("#14").val(storedSchedule.Fourteen)
     $("#15").val(storedSchedule.Fifteen)
     $("#16").val(storedSchedule.Sixteen)
     $("#17").val(storedSchedule.Seventeen)
     $("#18").val(storedSchedule.Eighteen)
     $("#19").val(storedSchedule.Nineteen)
     $("#20").val(storedSchedule.Twenty)
     $("#21").val(storedSchedule.Twentyone)
  }
  })
   
    
    
 $(".loghour").on("click",function(event) {
  event.preventDefault();   
  var apptArray = {
    Nine:$("#9").val(),
    Ten:$("#10").val(),
    Eleven:$("#11").val(),
    Twelve:$("#12").val(),
    Thirteen:$("#13").val(),
    Fourteen:$("#14").val(),
    Fifteen:$("#15").val(),
    Sixteen:$("#16").val(),
    Seventeen:$("#17").val(),
    Eighteen:$("#18").val(),
    Nineteen:$("#19").val(),
    Twenty:$("#20").val(),
    Twentyone:$("#21").val(),
   }
  btnNum = $(this).attr("id")
  formBtn = btnNum-13
  var BtnVal = $("#"+formBtn).val().trim()
  apptArray[formBtn] = BtnVal
  localStorage.setItem("schedule",JSON.stringify(apptArray))
  document.ready
 })

 

