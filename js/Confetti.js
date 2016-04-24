
(function() {

function Confetti(w, h, o, s, u) {
  this.Container_constructor();

  this.init(w, h, o, s, u);
}
var p = createjs.extend(Confetti, createjs.Container);

p.bw = 800;
p.bh = 600;
p.offset = 60;
p.scales = [1];
p.unit;
p.sprites;
p.ids;

p.init = function(w, h, o, s, u) {
  this.bw = w;
  this.bh = h;
  this.offset = o;
  if (s) this.scales = s;
  this.unit = u;

  var data = {
    "images": ["assets/papers.png"],
    "frames": [
      [98, 354, 30, 30], [194, 322, 30, 30], [162, 322, 30, 30], [130, 322, 30, 30], [98, 322, 30, 30], [66, 450, 30, 30], [66, 418, 30, 30], [66, 386, 30, 30], [66, 354, 30, 30], [66, 322, 30, 30], [66, 354, 30, 30], [66, 386, 30, 30], [66, 418, 30, 30], [66, 450, 30, 30], [98, 322, 30, 30], [130, 322, 30, 30], [162, 322, 30, 30], [194, 322, 30, 30],
      [194, 290, 30, 30], [162, 290, 30, 30], [130, 290, 30, 30], [98, 290, 30, 30], [66, 290, 30, 30], [34, 450, 30, 30], [34, 418, 30, 30], [34, 386, 30, 30], [34, 354, 30, 30], [34, 322, 30, 30], [34, 354, 30, 30], [34, 386, 30, 30], [34, 418, 30, 30], [34, 450, 30, 30], [66, 290, 30, 30], [98, 290, 30, 30], [130, 290, 30, 30], [162, 290, 30, 30],
      [34, 290, 30, 30], [194, 258, 30, 30], [162, 258, 30, 30], [130, 258, 30, 30], [98, 258, 30, 30], [66, 258, 30, 30], [34, 258, 30, 30], [2, 450, 30, 30], [2, 418, 30, 30], [2, 386, 30, 30], [2, 418, 30, 30], [2, 450, 30, 30], [34, 258, 30, 30], [66, 258, 30, 30], [98, 258, 30, 30], [130, 258, 30, 30], [162, 258, 30, 30], [194, 258, 30, 30],
      [2, 354, 30, 30], [2, 322, 30, 30], [2, 290, 30, 30], [2, 258, 30, 30], [194, 226, 30, 30], [162, 226, 30, 30], [130, 226, 30, 30], [98, 226, 30, 30], [66, 226, 30, 30], [34, 226, 30, 30], [66, 226, 30, 30], [98, 226, 30, 30], [130, 226, 30, 30], [162, 226, 30, 30], [194, 226, 30, 30], [2, 258, 30, 30], [2, 290, 30, 30], [2, 322, 30, 30],
      [2, 226, 30, 30], [194, 194, 30, 30], [162, 194, 30, 30], [130, 194, 30, 30], [98, 194, 30, 30], [66, 194, 30, 30], [34, 194, 30, 30], [2, 194, 30, 30], [194, 162, 30, 30], [162, 162, 30, 30], [194, 162, 30, 30], [2, 194, 30, 30], [34, 194, 30, 30], [66, 194, 30, 30], [98, 194, 30, 30], [130, 194, 30, 30], [162, 194, 30, 30], [194, 194, 30, 30],
      [130, 162, 30, 30], [98, 162, 30, 30], [66, 162, 30, 30], [34, 162, 30, 30], [2, 162, 30, 30], [194, 130, 30, 30], [162, 130, 30, 30], [130, 130, 30, 30], [98, 130, 30, 30], [66, 130, 30, 30], [98, 130, 30, 30], [130, 130, 30, 30], [162, 130, 30, 30], [194, 130, 30, 30], [2, 162, 30, 30], [34, 162, 30, 30], [66, 162, 30, 30], [98, 162, 30, 30],
      [34, 130, 30, 30], [2, 130, 30, 30], [194, 98, 30, 30], [162, 98, 30, 30], [130, 98, 30, 30], [98, 98, 30, 30], [66, 98, 30, 30], [34, 98, 30, 30], [2, 98, 30, 30], [194, 66, 30, 30], [2, 98, 30, 30], [34, 98, 30, 30], [66, 98, 30, 30], [98, 98, 30, 30], [130, 98, 30, 30], [162, 98, 30, 30], [194, 98, 30, 30], [2, 130, 30, 30],
      [162, 66, 30, 30], [130, 66, 30, 30], [98, 66, 30, 30], [66, 66, 30, 30], [34, 66, 30, 30], [2, 66, 30, 30], [194, 34, 30, 30], [162, 34, 30, 30], [130, 34, 30, 30], [98, 34, 30, 30], [130, 34, 30, 30], [162, 34, 30, 30], [194, 34, 30, 30], [2, 66, 30, 30], [34, 66, 30, 30], [66, 66, 30, 30], [98, 66, 30, 30], [130, 66, 30, 30],
      [66, 34, 30, 30], [34, 34, 30, 30], [2, 34, 30, 30], [194, 2, 30, 30], [162, 2, 30, 30], [130, 2, 30, 30], [98, 2, 30, 30], [66, 2, 30, 30], [34, 2, 30, 30], [2, 2, 30, 30], [34, 2, 30, 30], [66, 2, 30, 30], [98, 2, 30, 30], [130, 2, 30, 30], [162, 2, 30, 30], [194, 2, 30, 30], [2, 34, 30, 30], [34, 34, 30, 30]
    ],
    "animations": {
      "paper0":[0, 17], "paper1":[18, 35], "paper2":[36, 53], "paper3":[54, 71], "paper4":[72, 89],
      "paper5":[90, 107], "paper6":[108, 125], "paper7":[126, 143], "paper8":[144, 161]
    }
  };
  var spritesheet = new createjs.SpriteSheet(data);
  this.sprites = [];
  for (var n = 0; n < 9; n++) {
    var sprite = new createjs.Sprite(spritesheet, "paper" + n);
    sprite.regX = 10;
    sprite.regY = 10;
    this.sprites.push(sprite);
  }
  this.ids = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8];

  this.mouseChildren = false;
};

p.timer;
p.interval = 30;
p.time = 300;
p.duration = 2400;

p.start = function() {
  this.timer = setInterval(createjs.proxy(this.create, this), this.interval);
}
p.stop = function() {
  if (this.timer) {
    clearInterval(this.timer);
  }
}
p.create = function() {
  for (var n = 0; n < this.unit; n++) {
    var id = this.ids[Math.random()*this.ids.length >> 0];
    var sprite = this.sprites[id].clone();
    var scale = this.scales[Math.random()*this.scales.length >> 0];
    var paper = new Paper(sprite, scale);
    this.fall(paper);
  }
}
p.fall = function(paper) {
  var px = (Math.random())*this.bw;
  var a = Math.random()*360;
  if (Math.random() < 0.5) {
    ta = a;
  } else {
    ta = a;
  }

  paper.x = px;
  paper.y = 25;
  paper.rotation = a;
  this.addChild(paper);

  createjs.Tween.get(paper, {override: false})
    .to({y: this.bh}, this.duration, createjs.Ease.sineIn)
    .call(createjs.proxy(this.remove, this), [paper]);
  createjs.Tween.get(paper, {override: false})
    .wait(this.time*7)
    .to({alpha: 0}, this.time, createjs.Ease.linear);
  createjs.Tween.get(paper, {override: false})
    .to({rotation: ta}, this.duration, createjs.Ease.quadOut);
}
p.remove = function(paper) {
  this.removeChild(paper);
  paper = null;
}

window.Confetti = createjs.promote(Confetti, "Container");

}());
