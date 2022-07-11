
//START OF DATE AND TIME//
const today = new Date();
document.getElementById('date-time').innerHTML=today;
const day = today.getDay;
const dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
const month = today.getMonth;
const monthList = ["January","February","March","April","May","june","July","August","September","October","November","December"];
//END OF DATE AND TIME//

//START OF ROWS CHANGING COLOR BASED ON TIME OF DAY//

function hourTracker() {
    let currentHour = moment().hour();

    $(".time-block").each(function() {
        let blockHour = parseInt($(this).attr("id"))

        if (blockHour > hour) {
            getElementById(this).addClass("future")
        }

        else if (blockHour == hour) {
            getElementById(this).addClass("present")
        }

        else {
            getElementById(this).addClass("past")
        }
    })
}

$(".saveBtn").on("click" , function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time , text);

})

$("#17 .description").val(localStorage.getItem("9"));
hourTracker();
//END OF ROWS CHANGING COLOR BASED ON TIME OF DAY//

  
