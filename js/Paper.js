(function() {

function Paper(sprite, scale) {
  this.Container_constructor();

  this.init(sprite, scale);
}
var p = createjs.extend(Paper, createjs.Container);

p.container;
p.content;

p.init = function(sprite, scale) {
  this.container = new createjs.Container();
  this.addChild(this.container);
  this.container.scaleX = this.container.scaleY = scale;

  this.content = sprite;
  this.content.currentAnimationFrame = Math.random()*18 >> 0;
  this.container.addChild(this.content);

  this.mouseChildren = false;
};

window.Paper = createjs.promote(Paper, "Container");

}());
