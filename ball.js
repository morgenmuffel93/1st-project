function Ball(canvas) {
  this.colors = ['lightblue','lightpink','yellow','lightgreen'];
  this.canvas = canvas; //ven de game
  this.ctx = canvas.getContext('2d');
  this.size = Math.floor(Math.random() * (30-10+1)+10);
  this.x = Math.floor(Math.random() * ((this.canvas.width-this.size)-this.size+1)+this.size);
  this.y = Math.floor(Math.random() * ((this.canvas.height-this.size)-this.size+1)+this.size);
  this.velX
  this.velY
  
  this.type = 'good';

}

Ball.prototype.update = function () {

}

Ball.prototype.draw = function () {
  var color = this.colors[Math.floor(Math.random()*this.colors.length)];
  this.ctx.fillStyle = color;
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

