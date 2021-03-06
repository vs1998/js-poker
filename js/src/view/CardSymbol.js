const COLOR = require('../model/Utils.js').COLOR;

module.exports = class CardSymbol {

  static render(x,y,rotation,scale,suit,ctx) {
    switch(suit) {
      case 1: this.renderDiamonds(x,y,rotation,scale,ctx); break;
      case 2: this.renderHearts(x,y,rotation,scale,ctx); break;
      case 3: this.renderPikes(x,y,rotation,scale,ctx); break;
      case 4: this.renderClovers(x,y,rotation,scale,ctx); break;
    }
  }

  static renderHearts(x,y,rotation,scale,ctx) {
    ctx.save();
    ctx.fillStyle = COLOR.red;
    ctx.translate(x, y)
    ctx.rotate(rotation * Math.PI / 180);
    ctx.translate(-x, -y)
    ctx.beginPath();
    ctx.arc(x-scale*.25,y-scale*.1,scale*.25,Math.PI,Math.PI*2);
    ctx.arc(x+scale*.25,y-scale*.1,scale*.25,Math.PI,Math.PI*2);
    ctx.moveTo(x-scale*.5,y-scale*.1);
    ctx.quadraticCurveTo(x-scale*.5,y+scale*.1,x,y+scale*.5);
    ctx.quadraticCurveTo(x+scale*.5,y+scale*.1,x+scale*.5,y-scale*.1);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  static renderDiamonds(x,y,rotation,scale,ctx) {
    ctx.save();
    ctx.fillStyle = COLOR.red;
    ctx.translate(x, y)
    ctx.rotate(rotation * Math.PI / 180);
    ctx.translate(-x, -y)
    ctx.beginPath();
    ctx.moveTo(x,y-scale*.5);
    ctx.lineTo(x+scale*.4,y);
    ctx.lineTo(x,y+scale*.5);
    ctx.lineTo(x-scale*.4,y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

  }

  static renderClovers(x,y,rotation,scale,ctx) {
    ctx.save();
    ctx.fillStyle = COLOR.black;
    ctx.translate(x, y)
    ctx.rotate(rotation * Math.PI / 180);
    ctx.translate(-x, -y)
    ctx.beginPath();
    ctx.arc(x-scale*.25,y+scale*.1,scale*.23,0,Math.PI*2);
    ctx.arc(x,y-scale*.25,scale*.25,Math.PI*.5,Math.PI*2.5);
    ctx.arc(x+scale*.25,y+scale*.1,scale*.23,Math.PI,Math.PI*3);
    ctx.arc(x,y,scale*.1,0,Math.PI*2);
    ctx.moveTo(x,y-scale*.2)
    ctx.lineTo(x+scale*.1,y+scale*.5);
    ctx.lineTo(x-scale*.1,y+scale*.5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  static renderPikes(x,y,rotation,scale,ctx) {
    ctx.save();
    ctx.fillStyle = COLOR.black;
    ctx.translate(x, y)
    ctx.rotate(rotation * Math.PI / 180);
    ctx.translate(-x, -y)
    ctx.beginPath();
    ctx.arc(x-scale*.25,y + scale * .1,scale*.25,0,Math.PI);
    ctx.arc(x+scale*.25,y + scale * .1,scale*.25,0,Math.PI);
    ctx.moveTo(x-scale*.5,y + scale * .1);
    ctx.quadraticCurveTo(x-scale*.5,y-scale*.1,x,y-scale*.5);
    ctx.quadraticCurveTo(x+scale*.5,y-scale*.1,x+scale*.5,y + scale * .1);
    ctx.moveTo(x+scale*.1,y+scale*.5);
    ctx.lineTo(x-scale*.1,y+scale*.5);
    ctx.lineTo(x,y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}
