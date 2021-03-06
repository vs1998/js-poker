module.exports = class RenderEngine {
  constructor(ctx) {
    this.ctx = ctx;
  }

  clear() {
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
  }

  renderBackground(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  renderText(x,y,text) {
    let ctx = this.ctx;
    ctx.save();
    ctx.font = text.format;
    ctx.textAlign = text.alignment;
    ctx.fillStyle = text.color;
    ctx.fillText(text.text, x, y);
    ctx.restore();
  }
}
