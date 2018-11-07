'use strict'

function Ball(canvas, type, velocity) {
  this.colors = ['lightblue','lightpink','yellow','lightgreen'];
  this.canvas = canvas; //ven de game
  this.ctx = canvas.getContext('2d');
  this.size = Math.floor(Math.random() * (70-70+1)+70);
  this.x = Math.floor(Math.random() * ((this.canvas.width-this.size)-this.size+1)+this.size);
  this.y = Math.floor(Math.random() * ((this.canvas.height-this.size)-this.size+1)+this.size);
  this.velX = velocity;
  this.velY = velocity;
  this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
  this.type = type;
  this.goodBallImage = new Image();
  this.badBallImage = new Image();
  this.bombBallImage = new Image();
  this.goodBallsChoices = ["images/newdonut.png","images/duff.png","images/burger1.png","images/pizza1.png"];
  this.badBallsChoices = ["images/salad1.png","images/apple.png","images/broccoli.png","images/smoothie.png"];
  this.goodBallImage.src = this.goodBallsChoices[Math.floor(Math.random() * this.goodBallsChoices.length)];
  this.badBallImage.src = this.badBallsChoices[Math.floor(Math.random() * this.badBallsChoices.length)];
  this.bombBallImage.src = 'images/flanders1.png';
}

Ball.prototype.update = function () {
  if ((this.x + this.size) >= this.canvas.width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= this.canvas.height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  
  if (this.type === 'good') {
    //this.ctx.fillStyle = this.color;
    //this.ctx.fill();
    this.ctx.drawImage(this.goodBallImage, this.x, this.y, this.size, this.size);

  } else if (this.type === 'bad') {
    //this.ctx.fillStyle = 'red';
    //this.ctx.fill();
    this.ctx.drawImage(this.badBallImage, this.x, this.y, this.size, this.size);

  } else if (this.type === 'bomb') {
    //this.ctx.fillStyle = 'black';
    this.ctx.drawImage(this.bombBallImage, this.x, this.y, this.size, this.size);
  }
}

Ball.prototype.incrementSpeed = function() {
  ball.velX = 3;
  ball.velY = 3;
}

