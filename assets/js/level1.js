
var nodeList = document.getElementsByClassName('draggable');

for (var i = 0; i < nodeList.length; i++) {
  var obj = nodeList[i];
  obj.addEventListener('touchmove', function (event) {
    var touch = event.targetTouches[0];
    // Place element where the finger is
    event.target.style.left = touch.pageX + 'px';
    event.target.style.top = touch.pageY + 'px';
    event.preventDefault();
  }, false);
  var count = 0;
  obj.addEventListener('touchend', function (event) {
    var x = parseInt(obj.style.left);
    var y = parseInt(obj.style.top);
    count = count + 1;

    if (count == 2) {
      showeMsg();
    }
  })
}
// showeMsg();
function showeMsg() {
  let close = document.querySelector('.burl')
  close.style.display = "block";
}

const closeBtn = document.querySelector('#close_btn');
closeBtn.addEventListener('click', () => {
  let close = document.querySelector('.burl');
  close.style.display = "none";
})






