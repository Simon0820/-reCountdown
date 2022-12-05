function hello(){
  console.log("hello");
}

var targetDate = new Date("Jan 28, 2023 04:50:00").getTime();

var x = setInterval(function() {

  var justNow = new Date().getTime();

  var timeBetween = targetDate - justNow;

  var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

  document.getElementById("clack").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (timeBetween < 0) {
    clearInterval(x);
    document.getElementById("clack").innerHTML = "Currently driving to big mountains in Åre";
  }
}, 1000);
