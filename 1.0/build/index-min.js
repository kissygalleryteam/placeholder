/*! placeholder - v1.0 - 2013-06-21 2:45:21 PM
* Copyright (c) 2013 舒克; Licensed  */
KISSY.add("gallery/placeholder/1.0/index",function(a){function b(){b.superclass.constructor.apply(this,arguments),this.initializer()}var c="placeholder"in document.createElement("input"),d=a.NodeList,e=a.DOM;if(a.Event,!c&&!d.prototype.__val){var f=d.prototype;f.__val=f.val,a.mix(f,{val:function(a){if(void 0===a)return this.__val();var b=this.val();return this.__val(a),this.fire&&this.fire("valchange",{newVal:a,preVal:b}),this}})}return b.ATTRS={node:{value:null},labelTmpl:{value:'<label class="placeholder-text" style="display: none;color:#9a9a9a;position:absolute;left:0;top:0;">&nbsp;</label>'},wapperTmpl:{value:'<span class="placeholder-wrap" style="position: relative;display:inline-block;zoom:1;"></span>'},region:{top:0,left:0,width:120,height:20}},a.extend(b,a.Base,{initializer:function(){this.node=this.get("node"),this.node instanceof d||(this.node=a.one(this.node)),!c&&this.node.hasAttr("placeholder")&&(this.renderUI(),this.bindUI(),this.check())},renderUI:function(){var b=a.one(e.create(this.get("wapperTmpl"))),c=this.node,d=a.one(e.create(this.get("labelTmpl"))),f=c.attr("id");""==f&&(f=a.guid("J_K"+(new Date).getTime()),c.attr("id",f)),d.attr("for",f),b.append(d),e.insertBefore(b,c),b.append(c),this.labelNode=d,this.wapperNode=b},bindUI:function(){this.node.on("valchange valuechange blur",function(){a.later(function(){this.check()},0,!1,this)},this),this.node.on("focus",function(){this._hide()},this)},getPos:function(b,c,d){var e=b.width(),f=parseInt(b.css("paddingLeft"),10)+2+"px",g=(d.innerHeight()-c.innerHeight())/2+"px",h={left:f,top:g,width:e};return a.mix(h,this.get("region"))},check:function(){return""===this.node.val()?(this._show(),void 0):(this._hide(),void 0)},_show:function(){var a=this.labelNode,b=this.getPos(this.node,a,this.wapperNode);a.show(),a.css({left:b.left,top:b.top,width:b.width}),a.html(this.node.attr("placeholder"))},_hide:function(){this.labelNode.hide()}}),b},{requires:["node","event","base"]});