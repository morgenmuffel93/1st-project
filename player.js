function Player(canvasElement) {
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');  
  this.size = 35;
  this.x = this.size;
  this.y = this.canvasElement.height / 2;
  this.directionY = 0;
  this.directionX = 0;
  this.speed = 5;
  this.direction = 0;
  this.character = new Image();
  this.character.src = 'images/homerround.png';
}

Player.prototype.update = function() {

  if (this.x <= this.size / 2) {
    this.setDirection(1);
  }

  if (this.x >= this.canvasElement.width - this.size / 2) {
    this.setDirection(-1);
  }

  this.y += this.speed * this.direction;
}

Player.prototype.update = function () {
  this.x += this.speed * this.directionX;
  this.y += this.speed * this.directionY;
}

Player.prototype.moveY = function (direction) {
  this.directionY = direction;
}

Player.prototype.moveX = function (direction) {
  this.directionX = direction;
}

Player.prototype.setDirection = function(direction) {
  this.direction = direction;
}

Player.prototype.draw = function() {
  this.ctx.drawImage(this.character, this.x, this.y, this.size, this.size);
  //this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  //this.ctx.fillStyle = 'purple';
  //this.ctx.fill();

}
