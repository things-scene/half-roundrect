var { Component, Rect } = scene

var controlHandler = {

  ondragmove: function(point, index, component) {

    var controls = component.controls

    var { left, top, width } = component.model
    /*
     * point의 좌표는 부모 레이어 기준의 x, y 값이다.
     * 따라서, 도형의 회전을 감안한 좌표로의 변환이 필요하다.
     * Transcoord시에는 point좌표가 부모까지 transcoord되어있는 상태이므로,
     * 컴포넌트자신에 대한 transcoord만 필요하다.(마지막 파라미터를 false로).
     */
    var transcoorded = component.transcoordP2S(point.x, point.y)
    var round = (transcoorded.x - left) / (width / 2) * 100

    round = roundSet(round)

    component.set({ round })
  }
}

function roundSet(round){

  if(round >= 100)
    round = 100
  else if(round <= 0)
    round = 0

  return round
}

export default class HalfRoundrect extends Rect {

  _draw(context) {
    var {
      round,
      hidden = false,
      top,left,width,height
    } = this.model;

    context.beginPath()

    round = roundSet(round, width, height)

    if (round > 0) {
      var widthRound = (round / 100) * (width / 2)
      var heightRound = (round / 100) * height

      context.moveTo(left + widthRound, top);
      context.lineTo(left + width - widthRound, top);
      context.quadraticCurveTo(left + width, top, left + width, top + heightRound);
      context.lineTo(left + width, top + height);
      context.lineTo(left, top + height);
      context.lineTo(left, top + heightRound);
      context.quadraticCurveTo(left, top, left + widthRound, top);

    } else {
      context.rect(left, top, width, height);
    }

    if(!hidden){
      this.drawFill(context)
      this.drawStroke(context)
    }
  }

  get controls() {

    var { left, top, width, round } = this.model;
    round = round == undefined ? 0 : roundSet(round)

    return [{
      x: left + (width / 2) * (round / 100),
      y: top,
      handler: controlHandler
    }]
  }
}

Component.register('half-roundrect', HalfRoundrect)
