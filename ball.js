function Ball(canvas) {
  this.colors = ['lightblue','lightpink','yellow','lightgreen'];
  this.canvas = canvas; //ven de game
  this.ctx = canvas.getContext('2d');
  this.size = Math.floor(Math.random() * (30-10+1)+10);
  this.x = Math.floor(Math.random() * ((this.canvas.width-this.size)-this.size+1)+this.size);
  this.y = Math.floor(Math.random() * ((this.canvas.height-this.size)-this.size+1)+this.size);
  this.velX = 4;
  this.velY = 4;
  this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
  
  this.type = 'good';

}

Ball.prototype.update = function () {
  if ((this.x + this.size) >= this.canvas.width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.canvas.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.canvas.size) >= this.canvas.height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.canvas.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.draw = function () {
  this.ctx.fillStyle = this.color;
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  this.ctx.fill();
}

Ball.prototype.amITouched = function () {


}

Ball.prototype.createGoodBall = function () {


}

Ball.prototype.createBadBall = function () {


}

