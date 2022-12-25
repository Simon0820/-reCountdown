// Current year
var cuDate = new Date();
var cuYear = cuDate.getFullYear();
console.log("Current Year:", cuYear);

// Current time
var justNowStart = new Date().getTime();

// Date between New Year and Skitrip
var date1 = new Date("Jan 1, " + (cuYear + 1) + " 00:00:00").getTime();
var date2 = new Date("Jan 28, " + (cuYear + 1) + " 04:59:59").getTime();
var timeBetweenJanuary = date2 - date1;

if (timeBetweenJanuary >= (date2 - justNowStart)){
  console.log("Inbetween Jan 1 (00:00:00) and Jan 28 (04:59:59)");
  localStorage.date = new Date("Jan 28, " + (cuYear) + " 05:00:00").getTime();
}
else{
  console.log("Not inbetween Jan 1 (00:00:00) and Jan 28 (04:59:59)");
  localStorage.date = new Date("Jan 28, " + (cuYear + 1) + " 05:00:00").getTime();
}


var date5 = new Date("Dec 25, " + (cuYear) + " 21:30:00").getTime();
var date6 = new Date("Dec 25, " + (cuYear) + " 21:31:00").getTime();
var timeBetweenJanuary2 = date6 - date5;

var y =  setTimeout(() => {
  if (timeBetweenJanuary2 <= (date6 - justNowStart)){
    console.log("Not inbetween 19.40 - 00.00");
    var status = document.getElementById("status");
    status.textContent = "";
  }
  else if (timeBetweenJanuary2 <= 0){
    console.log("Not inbetween 19.40 - 00.00");
    var status = document.getElementById("status");
    status.textContent = "";
  }
  else{
    console.log("Inbetween 19.40 - 00.00");
    var status = document.getElementById("status");
    status.textContent = /*"Hopfully left 05:00 from Gothenburg"*/"Gustav = sämst";
    status.style.color = "#48fb47";
  }
}, 1000);




function countDown(){
    // Get time
    var justNow = new Date().getTime();
    var timeBetween = localStorage.date - justNow;
  
    // Define day, hour, minute, second
    var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);
  
    document.getElementById("clack").textContent = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (timeBetween < 0) {
      clearInterval(x);
      document.getElementById("clack").textContent = "Empty";
    }
}

var x = setInterval(() => {
  countDown();
}, 1000);

// var date3 = new Date("Jan 28, " + (cuYear) + " 05:00:00").getTime();
// var date4 = new Date("Feb 3, " + (cuYear) + " 23:59:59").getTime();

// var date3 = new Date("Dec 22, " + (cuYear) + " 05:00:00").getTime();
// var date4 = new Date("Dec 24, " + (cuYear) + " 23:59:59").getTime();
// var timeBetweenJanuary2 = date4 - date3;


// if(timeBetweenJanuary2 >= (date4 - date3)){
  // document.getElementById("clack").textContent = "Currently";
  // document.getElementById("clack").style.color = rgb(0, 255, 30);
// }

