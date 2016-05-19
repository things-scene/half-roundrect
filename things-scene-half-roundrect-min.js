(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var _scene=scene;var Component=_scene.Component;var Rect=_scene.Rect;var controlHandler={ondragmove:function ondragmove(point,index,component){var controls=component.controls;var _component$model=component.model;var left=_component$model.left;var top=_component$model.top;var width=_component$model.width;var transcoorded=component.transcoordP2S(point.x,point.y);var round=(transcoorded.x-left)/(width/2)*100;round=roundSet(round);component.set({round:round})}};function roundSet(round){if(round>=100)round=100;else if(round<=0)round=0;return round}var HalfRoundrect=function(_Rect){_inherits(HalfRoundrect,_Rect);function HalfRoundrect(){_classCallCheck(this,HalfRoundrect);return _possibleConstructorReturn(this,Object.getPrototypeOf(HalfRoundrect).apply(this,arguments))}_createClass(HalfRoundrect,[{key:"_draw",value:function _draw(context){var _model=this.model;var round=_model.round;var _model$hidden=_model.hidden;var hidden=_model$hidden===undefined?false:_model$hidden;var top=_model.top;var left=_model.left;var width=_model.width;var height=_model.height;context.beginPath();round=roundSet(round,width,height);if(round>0){var widthRound=round/100*(width/2);var heightRound=round/100*height;context.moveTo(left+widthRound,top);context.lineTo(left+width-widthRound,top);context.quadraticCurveTo(left+width,top,left+width,top+heightRound);context.lineTo(left+width,top+height);context.lineTo(left,top+height);context.lineTo(left,top+heightRound);context.quadraticCurveTo(left,top,left+widthRound,top)}else{context.rect(left,top,width,height)}if(!hidden){this.drawFill(context);this.drawStroke(context)}}},{key:"controls",get:function get(){var _model2=this.model;var left=_model2.left;var top=_model2.top;var width=_model2.width;var round=_model2.round;round=round==undefined?0:roundSet(round);return[{x:left+width/2*(round/100),y:top,handler:controlHandler}]}}]);return HalfRoundrect}(Rect);exports.default=HalfRoundrect;Component.register("half-roundrect",HalfRoundrect)},{}],2:[function(require,module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _halfRoundrect=require("./half-roundrect");Object.defineProperty(exports,"HalfRoundrect",{enumerable:true,get:function get(){return _interopRequireDefault(_halfRoundrect).default}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}},{"./half-roundrect":1}]},{},[2]);