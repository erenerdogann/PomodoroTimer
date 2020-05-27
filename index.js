var studyNumber = 0;
var breakNumber = 0;
var status = "study";
var notify = new Audio("eventually.mp3");

$("#startButton").click(function(){
    $(".mainCounter").slideDown();
    $("#startButton").attr("disabled", true);
    startSession();
  });

$("#whatIsButton").click(function(){
   $(".whatIs").slideToggle();
 });

 function startSession(){
     if (status === "study") {
        var timeLeft = (25*60);
        studyNumber ++;
        $("#status")[0].textContent = "Work Session " + studyNumber; 
     }
     if(status === "break"){
        var timeLeft = (5*60);
        breakNumber ++;
        $("#status")[0].textContent = "Break Time " + breakNumber;
     }

    if (studyNumber < 5 && status === "study") {
        counter(timeLeft);
        status = "break";
     }
     else if(breakNumber <= 3 && status === "break"){
        counter(timeLeft);
        status = "study";
     }
     else{
        $("#status")[0].textContent = "Well done! You worked hard and you deserve a rest!";
        reset();
     }
 }

 function counter(timeLeft){
    var myTime = $("#timer")[0];
    var counter = setInterval(function(){
        var minute = Math.floor(timeLeft / 60);
        var second = Math.floor(timeLeft % 60);
        myTime.textContent = "Time Left: " + minute + " m " + second + " s ";
        timeLeft--;
        if(timeLeft < 0){
            clearInterval(counter);
            myTime.textContent = "Time is Up!";
            notify.play();
            startSession();
        }
    }, 1000);  
 }

 function reset(){
    studyNumber = 0;
    breakNumber = 0;
    status = "study";
    $("#startButton").attr("disabled", false);
 }