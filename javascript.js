var z = setTimeout(() =>{
  var h4A = document.getElementById("h4A");
  var h4B = document.getElementById("h4B");
  var h4C = document.getElementById("h4C");

  var a = document.getElementById("a");
  var b = document.getElementById("b");
  var c = document.getElementById("c");

  h4A.addEventListener("click", function(){
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    location.href = "index.html";
  });
  h4B.addEventListener("click", function(){
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    location.href = "page.html";
  });
  h4C.addEventListener("click", function(){
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
  });
  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
}, 1);

setInterval( function(){ 
  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  var date = new Date().getDate();
  var hour = new Date().getHours();
  var minute = new Date().getMinutes();

  // #FF5733 NEON RED
  // #48fb47 NEON GREEN
  // #ccff15 NEON YELLOW

  // month == 1 && date == 28 && hour >= 5 && hour <= 6
  if (hour >= 18 && hour < 20){
    var status = document.getElementById("status");
    status.textContent = "Gustav har druckit en bärs";
    status.style.color = "#48fb47";
  }
  else if (hour >= 20 && hour < 22){
    var status = document.getElementById("status");
    status.textContent = "Gustav börjar bli lite påverkad";
    status.style.color = "#ccff15";
    
  }
  else if (hour >= 9 && hour == 10){
    var status = document.getElementById("status");
    status.textContent = "Gustav har däckat på grund av för många promille";
    status.style.color = "#FF5733";
    
  }
  else{
    var status = document.getElementById("status");
    status.textContent = "";
    status.style.color = "#48fb47";
  }
} , 1000);

// GET countdown date
localStorage.date = new Date("Jan 28, 2023 17:00:00").getTime();
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
      document.getElementById("clack").textContent = "Less than 12 hours to Åre";
    }
}

var x = setInterval(() => {
  countDown();
}, 1000);
