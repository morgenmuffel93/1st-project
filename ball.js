'use strict'

function Ball(canvas, type, maxVelocity) {
  this.colors = ['lightblue','lightpink','yellow','lightgreen'];
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.size = Math.floor(Math.random() * (90-90+1)+90);
  this.x = Math.floor(Math.random() * ((this.canvas.width-this.size)-this.size+1)+this.size);
  this.y = Math.floor(Math.random() * ((this.canvas.height-this.size)-this.size+1)+this.size);
  this.velX = Math.floor(Math.random() * (maxVelocity-(maxVelocity-1)+1)+(maxVelocity-1));
  this.velY = Math.floor(Math.random() * (maxVelocity-(maxVelocity-1)+1)+(maxVelocity-1));
  this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
  this.type = type;
  this.goodBallImage = new Image();
  this.badBallImage = new Image();
  this.bombBallImage = new Image();
  this.goodBallsChoices = ["images/pixelnewdonut.png","images/8-bit-beer-mug-shirt.png","images/pixelburger1.png","images/pixelpizza.png"];
  this.badBallsChoices = ["images/pixelsalad1.png","images/pixelapple.png","images/pixelbroccoli.png","images/greenjuice.png"];
  this.goodBallImage.src = this.goodBallsChoices[Math.floor(Math.random() * this.goodBallsChoices.length)];
  this.badBallImage.src = this.badBallsChoices[Math.floor(Math.random() * this.badBallsChoices.length)];
  this.bombBallImage.src = 'images/pixelflandersnewnew.png';
}

Ball.prototype.update = function () {

  if ((this.x + this.size) >= this.canvas.width) {
    this.velX = -(this.velX);
  }

  if (this.x <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= this.canvas.height) {
    this.velY = -(this.velY);
  }

  if (this.y <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  
  if (this.type === 'good') {
    this.ctx.drawImage(this.goodBallImage, this.x, this.y, this.size, this.size);

  } else if (this.type === 'bad') {
    this.ctx.drawImage(this.badBallImage, this.x, this.y, this.size, this.size);

  } else if (this.type === 'bomb') {
    this.ctx.drawImage(this.bombBallImage, this.x, this.y, 90, 90);
  }
}


