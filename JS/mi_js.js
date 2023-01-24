var i = 0;

function move1() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar1");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

function move2() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar2");
      var width = 10;
      var id = setInterval(frame, 10);
  
      function frame() {
        if (width >= 80) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }
  
  function move3() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar3");
      var width = 10;
      var id = setInterval(frame, 10);
  
      function frame() {
        if (width >= 70) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }
  
  function move4() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar4");
      var width = 10;
      var id = setInterval(frame, 10);
  
      function frame() {
        if (width >= 90) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
  }
 