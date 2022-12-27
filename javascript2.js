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
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";

  }, 1);