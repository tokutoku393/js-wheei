window.onload = function(){

  var currentMode = 'portrait';
  var output = document.getElementById('output');

  var socket = new io.Socket(null, {port:5000});
  socket.connect();

  window.addEventListener('devicemotion', function(e){
    gravity = e.accelerationIncludingGravity;

    output.innerHTML
    = 'x: '+gravity.x
    + '<br>y: '+gravity.y;

    sendModeFromGravityValue(gravity);

  },true);

  function sendModeFromGravityValue(g){

    // 絶対値を取得
    var x = Math.sqrt(g.x * g.x);
    var y = Math.sqrt(g.y * g.y);

    // portrait -> landscape
    if(currentMode === 'portrait' && x > 8.5 && y < 1.5){
      currentMode = 'landscape';
      //ds.send({mode: currentMode});
      socket.send({mode: currentMode});
    }

    // landscape -> portrait
    if(currentMode === 'landscape' && x < 1.5 && y > 8.5){
      currentMode = 'portrait';
      //ds.send({mode: currentMode});
      socket.send({mode: currentMode});
    }
  }
};
