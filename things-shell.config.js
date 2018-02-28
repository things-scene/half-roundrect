import locales from './locales';

var templates = [{
  name: 'Half Roundrect', /* 다국어 키 표현을 어떻게.. */
  description: '...', /* 다국어 키 표현을 어떻게.. */
  group: 'shape', /* line|shape|textAndMedia|chartAndGauge|table|container|dataSource|IoT|3D|warehouse|form|etc */
  icon: '../', /* 또는, Object */
  template: {
    type: 'half round rect',
    model: {
        type: 'half-roundrect',
        left: 100,
        top: 100,
        width: 100,
        height: 100,
        round: 30,
        fillStyle: '#fff',
        strokeStyle: '#000',
        alpha: 1,
        hidden: false,
        lineWidth: 1,
        lineDash: 'solid',
        lineCap: 'butt'
    }
  }
}];

module.exports = {
  locales,
  templates
};
