const COLOR = require('./Utils.js').COLOR;

module.exports = class Text {
  constructor(text, size, font, weight, color, alignment) {
    this.text = text;
    this.font = font;
    this.size = size;
    this.weight = weight || 'normal';
    this.color = color || COLOR.black;
    this.alignment = alignment || 'center';
  }

  calcWidth(ctx) {
    ctx.save();
    ctx.font = this.weight + ' ' + this.size + 'px ' + this.font;
    let width = ctx.measureText(this.text).width;
    ctx.restore();
    return width;
  }

  get format() {
    return this.weight + ' ' + this.size + 'px ' + this.font;
  }

  static calcWidthFromText(ctx,text,fontSize,font,fontWeight) {
    fontWeight = fontWeight || '';
    ctx.save();
    ctx.font = fontWeight + ' ' + fontSize + 'px ' + font;
    let width = ctx.measureText(text).width;
    ctx.restore();
    return width;
  }

}
