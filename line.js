'use strict'

function Line(canvas, x, y) {
  this.color = 'blue';
  this.canvasLine = canvas;
  this.ctx = this.canvasLine.getContext('2d');
  this.x = x;
  this.y = y;
  this.lineImage = new Image();
  this.lineImage.src = 'images/star.png';
}

Line.prototype.drawDot = function(x, y) {
  this.ctx.beginPath();
  this.ctx.arc(x, y, 6, 0, 2 * Math.PI);
  //this.ctx.fillStyle = this.color;
  //this.ctx.fill();
  this.ctx.drawImage(this.lineImage, this.x, this.y, 36, 36);
};

