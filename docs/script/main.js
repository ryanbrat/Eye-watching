// console.clear();
// var item = document.querySelectorAll('.item1');

var eye = document.querySelectorAll('.ball');
var iris = document.querySelectorAll('.iris');
var pupil = document.querySelectorAll('.shadow');


document.addEventListener('mousemove', function(e) {
  var sW = window.innerWidth;
  var sH = window.innerHeight;
  var cW = sW / 2;
  var cH = sH / 2;
  var mX = e.clientX;
  var mY = e.clientY;


  for (var i = 0; i < eye.length; i++) {
    var el = eye[i].getBoundingClientRect();
    var eyeCenterX = el.left + el.width / 2;
    var eyeCenterY = el.top + el.height / 2;

    var dX = eyeCenterX - mX;
    if (dX < -200) {
      dX = -200;
    } else if (dX > 200) {
      dX = 200;
    }

    var dY = eyeCenterY - mY;
    if (dY < -200) {
      dY = -200;
    } else if (dY > 200) {
      dY = 200;
    }

    var pX = (dX) * 100 / 200;
    var moveIrisX = 30 * pX / 100 * -1;
    var movePupilX = 30 * pX / 100 * -1;

    var pY = (dY) * 100 / 200;
    var moveIrisY = 30 * pY / 100 * -1;
    var movePupilY = 30 * pY / 100 * -1;

    console.log(dX, dY);

    iris[i].style.transform = 'translate(' + moveIrisX + 'px, ' + moveIrisY + 'px)';
    pupil[i].style.transform = 'translate(' + movePupilX + 'px, ' + movePupilY + 'px)';
  };
});



var bee = document.getElementById("follow");
document.addEventListener("mousemove", getMouse);


var beepos = {
  x: 0,
  y: 0
};

setInterval(followMouse, 50);

var mouse = {
  x: 0,
  y: 0
}; //mouse.x, mouse.y


function getMouse(e) {
  mouse.x = e.pageX - 200;
  mouse.y = e.pageY - 300;

}

function followMouse() {
  //1. find distance X , distance Y
  var distX = mouse.x - beepos.x;
  var distY = mouse.y - beepos.y;
  //Easing motion
  //Progressive reduction of distance
  beepos.x += distX / 20;
  beepos.y += distY / 20;

  bee.style.left = beepos.x + "px";
  bee.style.top = beepos.y + "px";


}
