function Message (canvas, text) {
  this.canvasElement = canvas;
  this.ctx = this.canvasElement.getContext('2d');
  this.x = this.canvasElement.width / 2 -110;
  this.y = this.canvasElement.height / 2;
  this.text = text;
}

Message.prototype.draw = function () {
  this.ctx.font = "60px 'Roboto Mono'"
  this.ctx.fillStyle = "#222"
  this.ctx.fillText(this.text, this.x, this.y);
}