/*
 * textarea Elastic (Autosize) 
  * t
 */
 
 /* 
 Textarea Elastic (Autosize) 
 http://www.jacklmoore.com/autosize
 */
(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery||window.$)})(function(e){var t,o={className:"autosizejs",append:"",callback:!1,resizeDelay:10},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],s=e(i).data("autosize",!0)[0];s.style.lineHeight="99px","99px"===e(s).css("lineHeight")&&n.push("lineHeight"),s.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),s.parentNode!==document.body&&e(document.body).append(s),this.each(function(){function o(){var t,o;"getComputedStyle"in window?(t=window.getComputedStyle(u),o=u.getBoundingClientRect().width,e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){o-=parseInt(t[i],10)}),s.style.width=o+"px"):s.style.width=Math.max(p.width(),0)+"px"}function a(){var a={};if(t=u,s.className=i.className,d=parseInt(p.css("maxHeight"),10),e.each(n,function(e,t){a[t]=p.css(t)}),e(s).css(a),o(),window.chrome){var r=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=r}}function r(){var e,n;t!==u?a():o(),s.value=u.value+i.append,s.style.overflowY=u.style.overflowY,n=parseInt(u.style.height,10),s.scrollTop=0,s.scrollTop=9e4,e=s.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=f,n!==e&&(u.style.height=e+"px",w&&i.callback.call(u,u))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==g&&(g=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),f=0,w=e.isFunction(i.callback),z={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},g=p.width();p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(f=p.outerHeight()-p.height()),c=Math.max(parseInt(p.css("minHeight"),10)-f||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word",resize:"none"===p.css("resize")||"vertical"===p.css("resize")?"none":"horizontal"}),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(z).removeData("autosize")}),r())})):this}});

(function($){
    $.fn.limit  = function(options) {
        var defaults = {
        limit: 140, result:true , 
	   autosize: true,
        text_result: 'Limit <strong> %C </strong>',
	   alert_remaining: 5,
        alertClass: 'limited'
        }
        var options = $.extend(defaults,  options);
        return this.each(function() {
            var characters = options.limit , wrapper=$('<div class="cl-textlimit" />') ,result_class=$('<div class="cl-textlimit-result" />');
            $(this).replaceWith(wrapper);
		  wrapper.append(this);
		   if(options.result) {  wrapper.append( result_class.append(options.text_result.replace('%C',characters)) ); }
             if(options.autosize){ wrapper.find('textarea').autosize(); }
            $(this).keyup(function(){
                if($(this).val().length > characters){
                    $(this).val($(this).val().substr(0, characters));
                }
                if(options.result != false) {
                    var remaining =  characters - $(this).val().length;
                    $('.cl-textlimit-result').html(options.text_result.replace('%C',remaining));
                    if(remaining <= options.alert_remaining) {
                      wrapper.find('textarea').addClass(options.alertClass);
				  result_class.addClass(options.alertClass);
                    } else{
                       wrapper.find('textarea').removeClass(options.alertClass);
				   result_class.removeClass(options.alertClass);
                    }
                }
			 
            });
        });
    };
})(jQuery);


/*
 jQuery paging plugin v1.8 06/21/2010
 http://www.xarg.org/project/jquery-color-plugin-xcolor/

 Copyright (c) 2010, Robert Eisele (robert@xarg.org)
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(i,k){function e(a){function d(a,b){var d;k!==a&&(a=parseFloat(a));if(k===b)d=b=255;else if(1===b){if(k===a||1===a)return 1;b=100;d=1}else d=b;return isNaN(a)||a<=0?0:b<a?d:a<1||1===b?1===d?a:a*d|0:a*d/b}function b(a,b,c){function e(a,b,d){d=++d%1;return 6*d<1?a+(b-a)*6*d:2*d<1?b:3*d<2?a+(b-a)*(4-6*d):a}a=d(a,360)/360;b=d(b,1);c=d(c,1);if(0===b)return c=Math.round(255*c),[c,c,c];b=c<0.5?c+c*b:c+b-c*b;c=c+c-b;return[Math.round(255*e(c,b,a+1/3)),Math.round(255*e(c,b,a)),Math.round(255*e(c,
b,a-1/3))]}function c(a,b,c){var a=d(a,360)/60,b=d(b,1),c=d(c,1),e=a|0,m=a-e,a=Math.round(255*c*(1-b)),j=Math.round(255*c*(1-b*m)),b=Math.round(255*c*(1-b*(1-m))),c=Math.round(255*c);switch(e){case 1:return[j,c,a];case 2:return[a,c,b];case 3:return[a,j,c];case 4:return[b,a,c];case 5:return[c,a,j]}return[c,b,a]}this.setColor=function(a){this.c=true;if("number"===typeof a)this.a=(a>>24&255)/255,this.r=a>>16&255,this.g=a>>8&255,this.b=a&255;else{for(;"object"===typeof a;){if(0 in a&&1 in a&&2 in a){this.a=
d(a[3],1);this.r=d(a[0]);this.g=d(a[1]);this.b=d(a[2]);return}else if("r"in a&&"g"in a&&"b"in a){this.a=d(a.a,1);this.r=d(a.r);this.g=d(a.g);this.b=d(a.b);return}else if("h"in a&&"s"in a){var f;if("l"in a)f=b(a.h,a.s,a.l);else if("v"in a)f=c(a.h,a.s,a.v);else if("b"in a)f=c(a.h,a.s,a.b);else break;this.a=d(a.a,1);this.r=f[0];this.g=f[1];this.b=f[2];return}break}if("string"===typeof a){a=a.toLowerCase().replace(/[^a-z0-9,.()#%]/g,"");if("transparent"===a){this.a=this.r=this.g=this.b=0;return}if("rand"===
a){a=Math.random()*16777215|0;this.a=1;this.r=a>>16&255;this.g=a>>8&255;this.b=a&255;return}k!==o[a]&&(a="#"+o[a]);if(f=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/.exec(a)){this.a=1;this.r=parseInt(f[1],16);this.g=parseInt(f[2],16);this.b=parseInt(f[3],16);return}if(f=/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(a)){this.a=1;this.r=parseInt(f[1]+f[1],16);this.g=parseInt(f[2]+f[2],16);this.b=parseInt(f[3]+f[3],16);return}if(f=/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(a)){this.a=d(f[5],
1);this.r=d(f[1]);this.g=d(f[2]);this.b=d(f[3]);return}if(f=/^rgba?\(([0-9.]+\%),([0-9.]+\%),([0-9.]+\%)(,([0-9.]+)\%?)?\)$/.exec(a)){this.a=d(f[5],1);this.r=Math.round(2.55*d(f[1],100));this.g=Math.round(2.55*d(f[2],100));this.b=Math.round(2.55*d(f[3],100));return}if(f=/^hs([bvl])a?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?\)$/.exec(a)){a=("l"===f[1]?b:c)(parseInt(f[2],10),parseInt(f[3],10),parseInt(f[4],10));this.a=d(f[6],1);this.r=a[0];this.g=a[1];this.b=a[2];return}if(f=/^(\d{1,3}),(\d{1,3}),(\d{1,3})(,([0-9.]+))?$/.exec(a)){this.a=
d(f[5],1);this.r=d(f[1]);this.g=d(f[2]);this.b=d(f[3]);return}}this.c=false}};this.getColor=function(a){if(k!==a)switch(a.toLowerCase()){case "rgb":return this.getRGB();case "hsv":case "hsb":return this.getHSV();case "hsl":return this.getHSL();case "int":return this.getInt();case "array":return this.getArray();case "fraction":return this.getFraction();case "css":case "style":return this.getCSS();case "name":return this.getName()}return this.getHex()};this.getRGB=function(){return this.c?{r:this.r,
g:this.g,b:this.b,a:this.a}:null};this.getCSS=function(){return this.c?0===this.a?"transparent":1===this.a?"rgb("+this.r+","+this.g+","+this.b+")":p(this.r,this.g,this.b,this.a):null};this.getArray=function(){return this.c?[this.r,this.g,this.b,100*this.a|0]:null};this.getName=function(){if(this.c){var a=null,b,d=o,c=this.getHSL(),m;for(m in d){var j=(new e(d[m])).getHSL(),j=Math.sqrt(0.5*(c.h-j.h)*(c.h-j.h)+0.5*(c.s-j.s)*(c.s-j.s)+(c.l-j.l)*(c.l-j.l));if(null===a||j<a)a=j,b=m}return b}return null};this.getFraction=
function(){return this.c?{r:this.r/255,g:this.g/255,b:this.b/255,a:this.a}:null};this.getHSL=function(){if(this.c){var a=this.r/255,b=this.g/255,d=this.b/255,c=Math.min(a,b,d),e=Math.max(a,b,d),j=e-c,i=(e+c)/2;0===j?c=a=0:(a=a===e?(b-d)/j:b===e?2+(d-a)/j:4+(a-b)/j,c=j/(i<0.5?e+c:2-e-c));return{h:Math.round(60*((6+a)%6)),s:Math.round(100*c),l:Math.round(100*i),a:this.a}}return null};this.getHSV=function(){if(this.c){var a=this.r/255,b=this.g/255,d=this.b/255,c=Math.min(a,b,d),e=Math.max(a,b,d),c=e-c;return{h:Math.round(60*
((6+(0===c?0:a===e?(b-d)/c:b===e?2+(d-a)/c:4+(a-b)/c))%6)),s:Math.round(100*(0===e?0:c/e)),v:Math.round(100*e),a:this.a}}return null};this.getHex=function(){if(this.c){var a=this.r>>4,b=this.g>>4,c=this.b>>4,d=this.r&15,e=this.g&15,j=this.b&15;return "#"+"0123456789abcdef".charAt(a)+"0123456789abcdef".charAt(d)+"0123456789abcdef".charAt(b)+"0123456789abcdef".charAt(e)+"0123456789abcdef".charAt(c)+
"0123456789abcdef".charAt(j)}return null};this.getInt=function(a){return this.c?k!==a?(100*this.a|0)<<24^this.r<<16^this.g<<8^this.b:(this.r<<16^this.g<<8^this.b)&16777215:null};this.toString=function(){return this.getHex()};this.setColor(a)}function q(a,d){var b="";do if(b=i.css(a,d),""!==b&&"transparent"!==b&&"rgba(0, 0, 0, 0)"!==b||i.nodeName(a,"body"))break;while(a=a.parentNode);""===b&&(b=i.support.rgba?"transparent":"backgroundColor"===d?"white":"black");return new e(b)}var o={aliceblue:"f0f8ff",
antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",
darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",
greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",
lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",
orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",
steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},p;i.each("color,backgroundColor,borderColor,borderTopColor,borderBottomColor,borderLeftColor,borderRightColor,outlineColor".split(","),function(a,d){i.cssHooks[d]={set:function(a,c){a.style[d]=(new e(c)).getCSS()}};i.fx.step[d]=function(a){if(k===a.xinit){if("string"===typeof a.end&&-1!==a.end.indexOf(";")){var c,
h=a.end.split(";");if(h.length>2){for(c in h)h[c]=-1===h[c].indexOf("native")?new e(h[c]):q(a.elem,d);a.start=null;a.end=h}else a.start=new e(h[0]),a.end=new e(h[1])}else a.start=q(a.elem,d),a.end=new e(a.end);a.xinit=1}c=a.start;var h=a.end,f=a.pos;if(null===c){var i=f*(h.length-1),f=f<1?i|0:h.length-2;c=h[f];h=h[f+1];f=i-f}a.elem.style[d]=p(c.r+f*(h.r-c.r)|0,c.g+f*(h.g-c.g)|0,c.b+f*(h.b-c.b)|0,c.a+f*(h.a-c.a))}});i(function(){var a=document.createElement("div").style;p=function(a,b,c,e){return"rgba("+
a+","+b+","+c+","+e+")"};a.cssText="background-color:rgba(1,1,1,.5)";if(!(i.support.rgba=a.backgroundColor.indexOf("rgba")>-1))p=function(a,b,c){return"rgb("+a+","+b+","+c+")"}});i.xcolor=new function(){this.test=function(a){a=new e(a);return a.c?a:null};this.red=function(a){a=new e(a);return a.c?(a.g=255,a.b=255,a):null};this.blue=function(a){a=new e(a);return a.c?(a.r=255,a.g=255,a):null};this.green=function(a){a=new e(a);return a.c?(a.r=255,a.b=255,a):null};this.sepia=function(a){a=new e(a);if(a.c){var d=
a.r,b=a.g,c=a.b;a.r=Math.round(d*0.393+b*0.769+c*0.189);a.g=Math.round(d*0.349+b*0.686+c*0.168);a.b=Math.round(d*0.272+b*0.534+c*0.131);return a}return null};this.random=function(){return new e([255*Math.random()|0,255*Math.random()|0,255*Math.random()|0])};this.inverse=function(a){a=new e(a);return a.c?(a.r^=255,a.g^=255,a.b^=255,a):null};this.opacity=function(a,d,b){a=new e(a);d=new e(d);return a.c&d.c?(b>1&&(b/=100),b=Math.max(b-1+d.a,0),a.r=Math.round((d.r-a.r)*b+a.r),a.g=Math.round((d.g-a.g)*b+a.g),
a.b=Math.round((d.b-a.b)*b+a.b),a):null};this.greyfilter=function(a,d){var b,c=new e(a);if(c.c){switch(d){case 1:b=0.35+13*(c.r+c.g+c.b)/60;break;case 2:b=(13*(c.r+c.g+c.b)+5355)/60;break;default:b=c.r*0.3+c.g*0.59+c.b*0.11}c.r=c.g=c.b=Math.min(b|0,255);return c}return null};this.webround=function(a){a=new e(a);if(a.c){if((a.r+=51-a.r%51)>255)a.r=255;if((a.g+=51-a.g%51)>255)a.g=255;if((a.b+=51-a.b%51)>255)a.b=255;return a}return null};this.distance=function(a,d){var b=new e(a),c=new e(d);return b.c&c.c?Math.sqrt(3*
(c.r-b.r)*(c.r-b.r)+4*(c.g-b.g)*(c.g-b.g)+2*(c.b-b.b)*(c.b-b.b)):null};this.readable=function(a,d,b){d=new e(d);a=new e(a);b=b||10;return d.c&a.c?(a=a.r*0.299+a.g*0.587+a.b*0.114-d.r*0.299-d.g*0.587-d.b*0.114,!(a<1.5+141.162*Math.pow(0.975,b)&&a>-0.5-154.709*Math.pow(0.99,b))):null};this.combine=function(a,d){var b=new e(a),c=new e(d);return b.c&c.c?(b.r^=c.r,b.g^=c.g,b.b^=c.b,b):null};this.breed=function(a,d){var b=new e(a),c=new e(d),h=0,f=6;if(b.c&c.c){for(;f--;)Math.random()<0.5&&(h|=15<<(f<<2));b.r=b.r&
h>>16&255|c.r&(h>>16&255^255);b.g=b.g&h>>8&255|c.g&(h>>8&255^255);b.b=b.b&h>>0&255|c.b&(h>>0&255^255);return b}return null};this.additive=function(a,d){var b=new e(a),c=new e(d);if(b.c&c.c){if((b.r+=c.r)>255)b.r=255;if((b.g+=c.g)>255)b.g=255;if((b.b+=c.b)>255)b.b=255;return b}return null};this.subtractive=function(a,d){var b=new e(a),c=new e(d);if(b.c&c.c){if((b.r+=c.r-255)<0)b.r=0;if((b.g+=c.g-255)<0)b.g=0;if((b.b+=c.b-255)<0)b.b=0;return b}return null};this.subtract=function(a,d){var b=new e(a),c=new e(d);
if(b.c&c.c){if((b.r-=c.r)<0)b.r=0;if((b.g-=c.g)<0)b.g=0;if((b.b-=c.b)<0)b.b=0;return b}return null};this.multiply=function(a,d){var b=new e(a),c=new e(d);return b.c&c.c?(b.r=b.r/255*c.r|0,b.g=b.g/255*c.g|0,b.b=b.b/255*c.b|0,b):null};this.average=function(a,d){var b=new e(a),c=new e(d);return b.c&c.c?(b.r=b.r+c.r>>1,b.g=b.g+c.g>>1,b.b=b.b+c.b>>1,b):null};this.triad=function(a){a=new e(a);return a.c?[a,new e([a.b,a.r,a.g]),new e([a.g,a.b,a.r])]:null};this.tetrad=function(a){a=new e(a);return a.c?[a,new e([a.b,
a.r,a.b]),new e([a.b,a.g,a.r]),new e([a.r,a.b,a.r])]:null};this.gradientlevel=function(a,d,b,c){k===c&&(c=1);if(b>c)return null;a=new e(a);d=new e(d);return a.c&d.c?(a.r=a.r+(d.r-a.r)/c*b|0,a.g=a.g+(d.g-a.g)/c*b|0,a.b=a.b+(d.b-a.b)/c*b|0,a):null};this.gradientarray=function(a,d,b){if(d>b)return null;var c=d*(a.length-1)/b|0,d=(d-b*c/(a.length-1))/b,b=new e(a[c]),c=new e(a[c+1]);return b.c&c.c?(b.r=b.r+a.length*(c.r-b.r)*d|0,b.g=b.g+a.length*(c.g-b.g)*d|0,b.b=b.b+a.length*(c.b-b.b)*d|0,b):null};this.nearestname=
function(a){a=new e(a);return a.c?a.getName():null};this.darken=function(a,d,b){if(k===d)d=1;else if(d<0)return this.lighten(a,-d,b);k===b&&(b=32);a=new e(a);if(a.c){if((a.r-=b*d)<0)a.r=0;if((a.g-=b*d)<0)a.g=0;if((a.b-=b*d)<0)a.b=0;return a}return null};this.lighten=function(a,d,b){if(k===d)d=1;else if(d<0)return this.darken(a,-d,b);k===b&&(b=32);a=new e(a);if(a.c){if((a.r+=b*d)>255)a.r=255;if((a.g+=b*d)>255)a.g=255;if((a.b+=b*d)>255)a.b=255;return a}return null};this.analogous=function(a,d,b){k===d&&(d=8);
k===b&&(b=30);var c=new e(a);if(c.c){a=c.getHSV();b=360/b;c=[c];for(a.h=(a.h-(b*d>>1)+720)%360;--d;)a.h+=b,a.h%=360,c.push(new e(a));return c}return null};this.complementary=function(a){a=new e(a);return a.c?(a=a.getHSL(),a.h=(a.h+180)%360,new e(a)):null};this.splitcomplement=function(a){var d=new e(a);return d.c?(a=d.getHSV(),d=[d],a.h+=72,a.h%=360,d.push(new e(a)),a.h+=144,a.h%=360,d.push(new e(a)),d):null};this.monochromatic=function(a,d){k===d&&(d=6);var b=new e(a);if(b.c){for(var c=b.getHSV(),b=[b];--d;)c.v+=
20,c.v%=100,b.push(new e(c));return b}return null}};i.fn.readable=function(){var a=this[0],d="",b="";do{if(""===d&&("transparent"===(d=i.css(a,"color"))||"rgba(0, 0, 0, 0)"===d))d="";if(""===b&&("transparent"===(b=i.css(a,"backgroundColor"))||"rgba(0, 0, 0, 0)"===b))b="";if(""!==d&&""!==b||i.nodeName(a,"body"))break}while(a=a.parentNode);""===d&&(d="black");""===b&&(b="white");return i.xcolor.readable(b,d)};i.fn.colorize=function(a,d,b){var c={gradient:function(a,b){return a/b},flip:function(a,
b,c,d){return" "===d?c:!c},pillow:function(a,b){a*=2;return a<=b?a/b:2-a/b}};if("function"!==typeof b)if(void 0===c[b])return;else b=c[b];a=new e(a);d=new e(d);this.each(function(){var c=this.childNodes,e=0,i=0;if(a.c&d.c){for(var k=c.length;k--;e+=c[k].textContent.length);(function j(c){var h=0,k;if(3===c.nodeType){var l=a,r=d,o=e,s,t,n=0,u,q=b;k=c.nodeValue.length;t=document.createElement("span");for(h=0;h<k;++h)s=document.createElement("span"),u=c.nodeValue.charAt(h),n=q(i,o,n,u),s.style.color=
p(l.r+n*(r.r-l.r)|0,l.g+n*(r.g-l.g)|0,l.b+n*(r.b-l.b)|0,l.a+n*(r.a-l.a)),s.appendChild(document.createTextNode(u)),t.appendChild(s),++i;c.parentNode.replaceChild(t,c)}else for(k=c.childNodes.length;h<k;++h)j(c.childNodes[h])})(this)}})}})(jQuery);

/**
 *  Markdown
 **/
// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

(function(expose){var Markdown=expose.Markdown=function Markdown(dialect){switch(typeof dialect){case"undefined":this.dialect=Markdown.dialects.Gruber;break;case"object":this.dialect=dialect;break;default:if(dialect in Markdown.dialects){this.dialect=Markdown.dialects[dialect];}
else{throw new Error("Unknown Markdown dialect '"+String(dialect)+"'");}
break;}
this.em_state=[];this.strong_state=[];this.debug_indent="";};expose.parse=function(source,dialect){var md=new Markdown(dialect);return md.toTree(source);};expose.toHTML=function toHTML(source,dialect,options){var input=expose.toHTMLTree(source,dialect,options);return expose.renderJsonML(input);};expose.toHTMLTree=function toHTMLTree(input,dialect,options){if(typeof input==="string")input=this.parse(input,dialect);var attrs=extract_attr(input),refs={};if(attrs&&attrs.references){refs=attrs.references;}
var html=convert_tree_to_html(input,refs,options);merge_text_nodes(html);return html;};function mk_block_toSource(){return"Markdown.mk_block( "+
uneval(this.toString())+", "+
uneval(this.trailing)+", "+
uneval(this.lineNumber)+" )";}
function mk_block_inspect(){var util=require('util');return"Markdown.mk_block( "+
util.inspect(this.toString())+", "+
util.inspect(this.trailing)+", "+
util.inspect(this.lineNumber)+" )";}
var mk_block=Markdown.mk_block=function(block,trail,line){if(arguments.length==1)trail="\n\n";var s=new String(block);s.trailing=trail;s.inspect=mk_block_inspect;s.toSource=mk_block_toSource;if(line!=undefined)
s.lineNumber=line;return s;};function count_lines(str){var n=0,i=-1;while((i=str.indexOf('\n',i+1))!==-1)n++;return n;}
Markdown.prototype.split_blocks=function splitBlocks(input,startLine){var re=/([\s\S]+?)($|\n(?:\s*\n|$)+)/g,blocks=[],m;var line_no=1;if((m=/^(\s*\n)/.exec(input))!=null){line_no+=count_lines(m[0]);re.lastIndex=m[0].length;}
while((m=re.exec(input))!==null){blocks.push(mk_block(m[1],m[2],line_no));line_no+=count_lines(m[0]);}
return blocks;};Markdown.prototype.processBlock=function processBlock(block,next){var cbs=this.dialect.block,ord=cbs.__order__;if("__call__"in cbs){return cbs.__call__.call(this,block,next);}
for(var i=0;i<ord.length;i++){var res=cbs[ord[i]].call(this,block,next);if(res){if(!isArray(res)||(res.length>0&&!(isArray(res[0]))))
this.debug(ord[i],"didn't return a proper array");return res;}}
return[];};Markdown.prototype.processInline=function processInline(block){return this.dialect.inline.__call__.call(this,String(block));};Markdown.prototype.toTree=function toTree(source,custom_root){var blocks=source instanceof Array?source:this.split_blocks(source);var old_tree=this.tree;try{this.tree=custom_root||this.tree||["markdown"];blocks:while(blocks.length){var b=this.processBlock(blocks.shift(),blocks);if(!b.length)continue blocks;this.tree.push.apply(this.tree,b);}
return this.tree;}
finally{if(custom_root){this.tree=old_tree;}}};Markdown.prototype.debug=function(){var args=Array.prototype.slice.call(arguments);args.unshift(this.debug_indent);if(typeof print!=="undefined")
print.apply(print,args);if(typeof console!=="undefined"&&typeof console.log!=="undefined")
console.log.apply(null,args);}
Markdown.prototype.loop_re_over_block=function(re,block,cb){var m,b=block.valueOf();while(b.length&&(m=re.exec(b))!=null){b=b.substr(m[0].length);cb.call(this,m);}
return b;};Markdown.dialects={};Markdown.dialects.Gruber={block:{atxHeader:function atxHeader(block,next){var m=block.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(!m)return undefined;var header=["header",{level:m[1].length}];Array.prototype.push.apply(header,this.processInline(m[2]));if(m[0].length<block.length)
next.unshift(mk_block(block.substr(m[0].length),block.trailing,block.lineNumber+2));return[header];},setextHeader:function setextHeader(block,next){var m=block.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(!m)return undefined;var level=(m[2]==="=")?1:2;var header=["header",{level:level},m[1]];if(m[0].length<block.length)
next.unshift(mk_block(block.substr(m[0].length),block.trailing,block.lineNumber+2));return[header];},code:function code(block,next){var ret=[],re=/^(?: {0,3}\t| {4})(.*)\n?/,lines;if(!block.match(re))return undefined;block_search:do{var b=this.loop_re_over_block(re,block.valueOf(),function(m){ret.push(m[1]);});if(b.length){next.unshift(mk_block(b,block.trailing));break block_search;}
else if(next.length){if(!next[0].match(re))break block_search;ret.push(block.trailing.replace(/[^\n]/g,'').substring(2));block=next.shift();}
else{break block_search;}}while(true);return[["code_block",ret.join("\n")]];},horizRule:function horizRule(block,next){var m=block.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(!m){return undefined;}
var jsonml=[["hr"]];if(m[1]){jsonml.unshift.apply(jsonml,this.processBlock(m[1],[]));}
if(m[3]){next.unshift(mk_block(m[3]));}
return jsonml;},lists:(function(){var any_list="[*+-]|\\d+\\.",bullet_list=/[*+-]/,number_list=/\d+\./,is_list_re=new RegExp("^( {0,3})("+any_list+")[ \t]+"),indent_re="(?: {0,3}\\t| {4})";function regex_for_depth(depth){return new RegExp("(?:^("+indent_re+"{0,"+depth+"} {0,3})("+any_list+")\\s+)|"+"(^"+indent_re+"{0,"+(depth-1)+"}[ ]{0,4})");}
function expand_tab(input){return input.replace(/ {0,3}\t/g,"    ");}
function add(li,loose,inline,nl){if(loose){li.push(["para"].concat(inline));return;}
var add_to=li[li.length-1]instanceof Array&&li[li.length-1][0]=="para"?li[li.length-1]:li;if(nl&&li.length>1)inline.unshift(nl);for(var i=0;i<inline.length;i++){var what=inline[i],is_str=typeof what=="string";if(is_str&&add_to.length>1&&typeof add_to[add_to.length-1]=="string"){add_to[add_to.length-1]+=what;}
else{add_to.push(what);}}}
function get_contained_blocks(depth,blocks){var re=new RegExp("^("+indent_re+"{"+depth+"}.*?\\n?)*$"),replace=new RegExp("^"+indent_re+"{"+depth+"}","gm"),ret=[];while(blocks.length>0){if(re.exec(blocks[0])){var b=blocks.shift(),x=b.replace(replace,"");ret.push(mk_block(x,b.trailing,b.lineNumber));}
break;}
return ret;}
function paragraphify(s,i,stack){var list=s.list;var last_li=list[list.length-1];if(last_li[1]instanceof Array&&last_li[1][0]=="para"){return;}
if(i+1==stack.length){last_li.push(["para"].concat(last_li.splice(1)));}
else{var sublist=last_li.pop();last_li.push(["para"].concat(last_li.splice(1)),sublist);}}
return function(block,next){var m=block.match(is_list_re);if(!m)return undefined;function make_list(m){var list=bullet_list.exec(m[2])?["bulletlist"]:["numberlist"];stack.push({list:list,indent:m[1]});return list;}
var stack=[],list=make_list(m),last_li,loose=false,ret=[stack[0].list],i;loose_search:while(true){var lines=block.split(/(?=\n)/);var li_accumulate="";tight_search:for(var line_no=0;line_no<lines.length;line_no++){var nl="",l=lines[line_no].replace(/^\n/,function(n){nl=n;return"";});var line_re=regex_for_depth(stack.length);m=l.match(line_re);if(m[1]!==undefined){if(li_accumulate.length){add(last_li,loose,this.processInline(li_accumulate),nl);loose=false;li_accumulate="";}
m[1]=expand_tab(m[1]);var wanted_depth=Math.floor(m[1].length/4)+1;if(wanted_depth>stack.length){list=make_list(m);last_li.push(list);last_li=list[1]=["listitem"];}
else{var found=false;for(i=0;i<stack.length;i++){if(stack[i].indent!=m[1])continue;list=stack[i].list;stack.splice(i+1);found=true;break;}
if(!found){wanted_depth++;if(wanted_depth<=stack.length){stack.splice(wanted_depth);list=stack[wanted_depth-1].list;}
else{list=make_list(m);last_li.push(list);}}
last_li=["listitem"];list.push(last_li);}
nl="";}
if(l.length>m[0].length){li_accumulate+=nl+l.substr(m[0].length);}}
if(li_accumulate.length){add(last_li,loose,this.processInline(li_accumulate),nl);loose=false;li_accumulate="";}
var contained=get_contained_blocks(stack.length,next);if(contained.length>0){forEach(stack,paragraphify,this);last_li.push.apply(last_li,this.toTree(contained,[]));}
var next_block=next[0]&&next[0].valueOf()||"";if(next_block.match(is_list_re)||next_block.match(/^ /)){block=next.shift();var hr=this.dialect.block.horizRule(block,next);if(hr){ret.push.apply(ret,hr);break;}
forEach(stack,paragraphify,this);loose=true;continue loose_search;}
break;}
return ret;};})(),blockquote:function blockquote(block,next){if(!block.match(/^>/m))
return undefined;var jsonml=[];if(block[0]!=">"){var lines=block.split(/\n/),prev=[];while(lines.length&&lines[0][0]!=">"){prev.push(lines.shift());}
block=lines.join("\n");jsonml.push.apply(jsonml,this.processBlock(prev.join("\n"),[]));}
while(next.length&&next[0][0]==">"){var b=next.shift();block=new String(block+block.trailing+b);block.trailing=b.trailing;}
var input=block.replace(/^> ?/gm,''),old_tree=this.tree;jsonml.push(this.toTree(input,["blockquote"]));return jsonml;},referenceDefn:function referenceDefn(block,next){var re=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(!block.match(re))
return undefined;if(!extract_attr(this.tree)){this.tree.splice(1,0,{});}
var attrs=extract_attr(this.tree);if(attrs.references===undefined){attrs.references={};}
var b=this.loop_re_over_block(re,block,function(m){if(m[2]&&m[2][0]=='<'&&m[2][m[2].length-1]=='>')
m[2]=m[2].substring(1,m[2].length-1);var ref=attrs.references[m[1].toLowerCase()]={href:m[2]};if(m[4]!==undefined)
ref.title=m[4];else if(m[5]!==undefined)
ref.title=m[5];});if(b.length)
next.unshift(mk_block(b,block.trailing));return[];},para:function para(block,next){return[["para"].concat(this.processInline(block))];}}};Markdown.dialects.Gruber.inline={__oneElement__:function oneElement(text,patterns_or_re,previous_nodes){var m,res,lastIndex=0;patterns_or_re=patterns_or_re||this.dialect.inline.__patterns__;var re=new RegExp("([\\s\\S]*?)("+(patterns_or_re.source||patterns_or_re)+")");m=re.exec(text);if(!m){return[text.length,text];}
else if(m[1]){return[m[1].length,m[1]];}
var res;if(m[2]in this.dialect.inline){res=this.dialect.inline[m[2]].call(this,text.substr(m.index),m,previous_nodes||[]);}
res=res||[m[2].length,m[2]];return res;},__call__:function inline(text,patterns){var out=[],res;function add(x){if(typeof x=="string"&&typeof out[out.length-1]=="string")
out[out.length-1]+=x;else
out.push(x);}
while(text.length>0){res=this.dialect.inline.__oneElement__.call(this,text,patterns,out);text=text.substr(res.shift());forEach(res,add)}
return out;},"]":function(){},"}":function(){},"\\":function escaped(text){if(text.match(/^\\[\\`\*_{}\[\]()#\+.!\-]/))
return[2,text[1]];else
return[1,"\\"];},"![":function image(text){var m=text.match(/^!\[(.*?)\][ \t]*\([ \t]*(\S*)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(m){if(m[2]&&m[2][0]=='<'&&m[2][m[2].length-1]=='>')
m[2]=m[2].substring(1,m[2].length-1);m[2]=this.dialect.inline.__call__.call(this,m[2],/\\/)[0];var attrs={alt:m[1],href:m[2]||""};if(m[4]!==undefined)
attrs.title=m[4];return[m[0].length,["img",attrs]];}
m=text.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/);if(m){return[m[0].length,["img_ref",{alt:m[1],ref:m[2].toLowerCase(),original:m[0]}]];}
return[2,"!["];},"[":function link(text){var orig=String(text);var res=Markdown.DialectHelpers.inline_until_char.call(this,text.substr(1),']');if(!res)return[1,'['];var consumed=1+res[0],children=res[1],link,attrs;text=text.substr(consumed);var m=text.match(/^\s*\([ \t]*(\S+)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(m){var url=m[1];consumed+=m[0].length;if(url&&url[0]=='<'&&url[url.length-1]=='>')
url=url.substring(1,url.length-1);if(!m[3]){var open_parens=1;for(var len=0;len<url.length;len++){switch(url[len]){case'(':open_parens++;break;case')':if(--open_parens==0){consumed-=url.length-len;url=url.substring(0,len);}
break;}}}
url=this.dialect.inline.__call__.call(this,url,/\\/)[0];attrs={href:url||""};if(m[3]!==undefined)
attrs.title=m[3];link=["link",attrs].concat(children);return[consumed,link];}
m=text.match(/^\s*\[(.*?)\]/);if(m){consumed+=m[0].length;attrs={ref:(m[1]||String(children)).toLowerCase(),original:orig.substr(0,consumed)};link=["link_ref",attrs].concat(children);return[consumed,link];}
if(children.length==1&&typeof children[0]=="string"){attrs={ref:children[0].toLowerCase(),original:orig.substr(0,consumed)};link=["link_ref",attrs,children[0]];return[consumed,link];}
return[1,"["];},"<":function autoLink(text){var m;if((m=text.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))!=null){if(m[3]){return[m[0].length,["link",{href:"mailto:"+m[3]},m[3]]];}
else if(m[2]=="mailto"){return[m[0].length,["link",{href:m[1]},m[1].substr("mailto:".length)]];}
else
return[m[0].length,["link",{href:m[1]},m[1]]];}
return[1,"<"];},"`":function inlineCode(text){var m=text.match(/(`+)(([\s\S]*?)\1)/);if(m&&m[2])
return[m[1].length+m[2].length,["inlinecode",m[3]]];else{return[1,"`"];}},"  \n":function lineBreak(text){return[3,["linebreak"]];}};function strong_em(tag,md){var state_slot=tag+"_state",other_slot=tag=="strong"?"em_state":"strong_state";function CloseTag(len){this.len_after=len;this.name="close_"+md;}
return function(text,orig_match){if(this[state_slot][0]==md){this[state_slot].shift();return[text.length,new CloseTag(text.length-md.length)];}
else{var other=this[other_slot].slice(),state=this[state_slot].slice();this[state_slot].unshift(md);var res=this.processInline(text.substr(md.length));var last=res[res.length-1];var check=this[state_slot].shift();if(last instanceof CloseTag){res.pop();var consumed=text.length-last.len_after;return[consumed,[tag].concat(res)];}
else{this[other_slot]=other;this[state_slot]=state;return[md.length,md];}}};}
Markdown.dialects.Gruber.inline["**"]=strong_em("strong","**");Markdown.dialects.Gruber.inline["__"]=strong_em("strong","__");Markdown.dialects.Gruber.inline["*"]=strong_em("em","*");Markdown.dialects.Gruber.inline["_"]=strong_em("em","_");Markdown.buildBlockOrder=function(d){var ord=[];for(var i in d){if(i=="__order__"||i=="__call__")continue;ord.push(i);}
d.__order__=ord;};Markdown.buildInlinePatterns=function(d){var patterns=[];for(var i in d){if(i.match(/^__.*__$/))continue;var l=i.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");patterns.push(i.length==1?l:"(?:"+l+")");}
patterns=patterns.join("|");d.__patterns__=patterns;var fn=d.__call__;d.__call__=function(text,pattern){if(pattern!=undefined){return fn.call(this,text,pattern);}
else
{return fn.call(this,text,patterns);}};};Markdown.DialectHelpers={};Markdown.DialectHelpers.inline_until_char=function(text,want){var consumed=0,nodes=[];while(true){if(text[consumed]==want){consumed++;return[consumed,nodes];}
if(consumed>=text.length){return null;}
var res=this.dialect.inline.__oneElement__.call(this,text.substr(consumed));consumed+=res[0];nodes.push.apply(nodes,res.slice(1));}}
Markdown.subclassDialect=function(d){function Block(){}
Block.prototype=d.block;function Inline(){}
Inline.prototype=d.inline;return{block:new Block(),inline:new Inline()};};Markdown.buildBlockOrder(Markdown.dialects.Gruber.block);Markdown.buildInlinePatterns(Markdown.dialects.Gruber.inline);Markdown.dialects.Maruku=Markdown.subclassDialect(Markdown.dialects.Gruber);Markdown.dialects.Maruku.processMetaHash=function processMetaHash(meta_string){var meta=split_meta_hash(meta_string),attr={};for(var i=0;i<meta.length;++i){if(/^#/.test(meta[i])){attr.id=meta[i].substring(1);}
else if(/^\./.test(meta[i])){if(attr['class']){attr['class']=attr['class']+meta[i].replace(/./," ");}
else{attr['class']=meta[i].substring(1);}}
else if(/\=/.test(meta[i])){var s=meta[i].split(/\=/);attr[s[0]]=s[1];}}
return attr;}
function split_meta_hash(meta_string){var meta=meta_string.split(""),parts=[""],in_quotes=false;while(meta.length){var letter=meta.shift();switch(letter){case" ":if(in_quotes){parts[parts.length-1]+=letter;}
else{parts.push("");}
break;case"'":case'"':in_quotes=!in_quotes;break;case"\\":letter=meta.shift();default:parts[parts.length-1]+=letter;break;}}
return parts;}
Markdown.dialects.Maruku.block.document_meta=function document_meta(block,next){if(block.lineNumber>1)return undefined;if(!block.match(/^(?:\w+:.*\n)*\w+:.*$/))return undefined;if(!extract_attr(this.tree)){this.tree.splice(1,0,{});}
var pairs=block.split(/\n/);for(p in pairs){var m=pairs[p].match(/(\w+):\s*(.*)$/),key=m[1].toLowerCase(),value=m[2];this.tree[1][key]=value;}
return[];};Markdown.dialects.Maruku.block.block_meta=function block_meta(block,next){var m=block.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(!m)return undefined;var attr=this.dialect.processMetaHash(m[2]);var hash;if(m[1]===""){var node=this.tree[this.tree.length-1];hash=extract_attr(node);if(typeof node==="string")return undefined;if(!hash){hash={};node.splice(1,0,hash);}
for(a in attr){hash[a]=attr[a];}
return[];}
var b=block.replace(/\n.*$/,""),result=this.processBlock(b,[]);hash=extract_attr(result[0]);if(!hash){hash={};result[0].splice(1,0,hash);}
for(a in attr){hash[a]=attr[a];}
return result;};Markdown.dialects.Maruku.block.definition_list=function definition_list(block,next){var tight=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,list=["dl"],i;if((m=block.match(tight))){var blocks=[block];while(next.length&&tight.exec(next[0])){blocks.push(next.shift());}
for(var b=0;b<blocks.length;++b){var m=blocks[b].match(tight),terms=m[1].replace(/\n$/,"").split(/\n/),defns=m[2].split(/\n:\s+/);for(i=0;i<terms.length;++i){list.push(["dt",terms[i]]);}
for(i=0;i<defns.length;++i){list.push(["dd"].concat(this.processInline(defns[i].replace(/(\n)\s+/,"$1"))));}}}
else{return undefined;}
return[list];};Markdown.dialects.Maruku.inline["{:"]=function inline_meta(text,matches,out){if(!out.length){return[2,"{:"];}
var before=out[out.length-1];if(typeof before==="string"){return[2,"{:"];}
var m=text.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!m){return[2,"{:"];}
var meta=this.dialect.processMetaHash(m[1]),attr=extract_attr(before);if(!attr){attr={};before.splice(1,0,attr);}
for(var k in meta){attr[k]=meta[k];}
return[m[0].length,""];};Markdown.buildBlockOrder(Markdown.dialects.Maruku.block);Markdown.buildInlinePatterns(Markdown.dialects.Maruku.inline);var isArray=Array.isArray||function(obj){return Object.prototype.toString.call(obj)=='[object Array]';};var forEach;if(Array.prototype.forEach){forEach=function(arr,cb,thisp){return arr.forEach(cb,thisp);};}
else{forEach=function(arr,cb,thisp){for(var i=0;i<arr.length;i++){cb.call(thisp||arr,arr[i],i,arr);}}}
function extract_attr(jsonml){return isArray(jsonml)&&jsonml.length>1&&typeof jsonml[1]==="object"&&!(isArray(jsonml[1]))?jsonml[1]:undefined;}
expose.renderJsonML=function(jsonml,options){options=options||{};options.root=options.root||false;var content=[];if(options.root){content.push(render_tree(jsonml));}
else{jsonml.shift();if(jsonml.length&&typeof jsonml[0]==="object"&&!(jsonml[0]instanceof Array)){jsonml.shift();}
while(jsonml.length){content.push(render_tree(jsonml.shift()));}}
return content.join("\n\n");};function escapeHTML(text){return text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
function render_tree(jsonml){if(typeof jsonml==="string"){return escapeHTML(jsonml);}
var tag=jsonml.shift(),attributes={},content=[];if(jsonml.length&&typeof jsonml[0]==="object"&&!(jsonml[0]instanceof Array)){attributes=jsonml.shift();}
while(jsonml.length){content.push(arguments.callee(jsonml.shift()));}
var tag_attrs="";for(var a in attributes){tag_attrs+=" "+a+'="'+escapeHTML(attributes[a])+'"';}
if(tag=="img"||tag=="br"||tag=="hr"){return"<"+tag+tag_attrs+"/>";}
else{return"<"+tag+tag_attrs+">"+content.join("")+"</"+tag+">";}}
function convert_tree_to_html(tree,references,options){var i;options=options||{};var jsonml=tree.slice(0);if(typeof options.preprocessTreeNode==="function"){jsonml=options.preprocessTreeNode(jsonml,references);}
var attrs=extract_attr(jsonml);if(attrs){jsonml[1]={};for(i in attrs){jsonml[1][i]=attrs[i];}
attrs=jsonml[1];}
if(typeof jsonml==="string"){return jsonml;}
switch(jsonml[0]){case"header":jsonml[0]="h"+jsonml[1].level;delete jsonml[1].level;break;case"bulletlist":jsonml[0]="ul";break;case"numberlist":jsonml[0]="ol";break;case"listitem":jsonml[0]="li";break;case"para":jsonml[0]="p";break;case"markdown":jsonml[0]="html";if(attrs)delete attrs.references;break;case"code_block":jsonml[0]="pre";i=attrs?2:1;var code=["code"];code.push.apply(code,jsonml.splice(i));jsonml[i]=code;break;case"inlinecode":jsonml[0]="code";break;case"img":jsonml[1].src=jsonml[1].href;delete jsonml[1].href;break;case"linebreak":jsonml[0]="br";break;case"link":jsonml[0]="a";break;case"link_ref":jsonml[0]="a";var ref=references[attrs.ref];if(ref){delete attrs.ref;attrs.href=ref.href;if(ref.title){attrs.title=ref.title;}
delete attrs.original;}
else{return attrs.original;}
break;case"img_ref":jsonml[0]="img";var ref=references[attrs.ref];if(ref){delete attrs.ref;attrs.src=ref.href;if(ref.title){attrs.title=ref.title;}
delete attrs.original;}
else{return attrs.original;}
break;}
i=1;if(attrs){for(var key in jsonml[1]){i=2;}
if(i===1){jsonml.splice(i,1);}}
for(;i<jsonml.length;++i){jsonml[i]=arguments.callee(jsonml[i],references,options);}
return jsonml;}
function merge_text_nodes(jsonml){var i=extract_attr(jsonml)?2:1;while(i<jsonml.length){if(typeof jsonml[i]==="string"){if(i+1<jsonml.length&&typeof jsonml[i+1]==="string"){jsonml[i]+=jsonml.splice(i+1,1)[0];}
else{++i;}}
else{arguments.callee(jsonml[i]);++i;}}}})((function(){if(typeof exports==="undefined"){window.markdown={};return window.markdown;}
else{return exports;}})());
																																																																																																																																																																																																																																																																																																																																																	 /** 
toMarkdown																																																																																																																																																																																																																																																																																																																																																	  **/
var toMarkdown=function(string){var ELEMENTS=[{patterns:'p',replacement:function(str,attrs,innerHTML){return innerHTML?'\n\n'+innerHTML+'\n':'';}},{patterns:'br',type:'void',replacement:'\n'},{patterns:'h([1-6])',replacement:function(str,hLevel,attrs,innerHTML){var hPrefix='';for(var i=0;i<hLevel;i++){hPrefix+='#';}return'\n\n'+hPrefix+' '+innerHTML+'\n';}},{patterns:'hr',type:'void',replacement:'\n\n* * *\n'},{patterns:'a',replacement:function(str,attrs,innerHTML){var href=attrs.match(attrRegExp('href')),title=attrs.match(attrRegExp('title'));return href?'['+innerHTML+']'+'('+href[1]+(title&&title[1]?' "'+title[1]+'"':'')+')':str;}},{patterns:['b','strong'],replacement:function(str,attrs,innerHTML){return innerHTML?'**'+innerHTML+'**':'';}},{patterns:['i','em'],replacement:function(str,attrs,innerHTML){return innerHTML?'_'+innerHTML+'_':'';}},{patterns:'code',replacement:function(str,attrs,innerHTML){return innerHTML?'`'+innerHTML+'`':'';}},{patterns:'img',type:'void',replacement:function(str,attrs,innerHTML){var src=attrs.match(attrRegExp('src')),alt=attrs.match(attrRegExp('alt')),title=attrs.match(attrRegExp('title'));return'!['+(alt&&alt[1]?alt[1]:'')+']'+'('+src[1]+(title&&title[1]?' "'+title[1]+'"':'')+')';}}];for(var i=0,len=ELEMENTS.length;i<len;i++){if(typeof ELEMENTS[i].patterns==='string'){string=replaceEls(string,{tag:ELEMENTS[i].patterns,replacement:ELEMENTS[i].replacement,type:ELEMENTS[i].type});}else{for(var j=0,pLen=ELEMENTS[i].patterns.length;j<pLen;j++){string=replaceEls(string,{tag:ELEMENTS[i].patterns[j],replacement:ELEMENTS[i].replacement,type:ELEMENTS[i].type});}}}function replaceEls(html,elProperties){var pattern=elProperties.type==='void'?'<'+elProperties.tag+'\\b([^>]*)\\/?>':'<'+elProperties.tag+'\\b([^>]*)>([\\s\\S]*?)<\\/'+elProperties.tag+'>',regex=new RegExp(pattern,'gi'),markdown='';if(typeof elProperties.replacement==='string'){markdown=html.replace(regex,elProperties.replacement);}else{markdown=html.replace(regex,function(str,p1,p2,p3){return elProperties.replacement.call(this,str,p1,p2,p3);});}return markdown;}function attrRegExp(attr){return new RegExp(attr+'\\s*=\\s*["\']?([^"\']*)["\']?','i');}string=string.replace(/<pre\b[^>]*>`([\s\S]*)`<\/pre>/gi,function(str,innerHTML){innerHTML=innerHTML.replace(/^\t+/g,'  ');innerHTML=innerHTML.replace(/\n/g,'\n    ');return'\n\n    '+innerHTML+'\n';});string=string.replace(/^(\s{0,3}\d+)\. /g,'$1\\. ');var noChildrenRegex=/<(ul|ol)\b[^>]*>(?:(?!<ul|<ol)[\s\S])*?<\/\1>/gi;while(string.match(noChildrenRegex)){string=string.replace(noChildrenRegex,function(str){return replaceLists(str);});}function replaceLists(html){html=html.replace(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/gi,function(str,listType,innerHTML){var lis=innerHTML.split('</li>');lis.splice(lis.length-1,1);for(i=0,len=lis.length;i<len;i++){if(lis[i]){var prefix=(listType==='ol')?(i+1)+".  ":"*   ";lis[i]=lis[i].replace(/\s*<li[^>]*>([\s\S]*)/i,function(str,innerHTML){innerHTML=innerHTML.replace(/^\s+/,'');innerHTML=innerHTML.replace(/\n\n/g,'\n\n    ');innerHTML=innerHTML.replace(/\n([ ]*)+(\*|\d+\.) /g,'\n$1    $2 ');return prefix+innerHTML;});}}return lis.join('\n');});return'\n\n'+html.replace(/[ \t]+\n|\s+$/g,'');}var deepest=/<blockquote\b[^>]*>((?:(?!<blockquote)[\s\S])*?)<\/blockquote>/gi;while(string.match(deepest)){string=string.replace(deepest,function(str){return replaceBlockquotes(str);});}function replaceBlockquotes(html){html=html.replace(/<blockquote\b[^>]*>([\s\S]*?)<\/blockquote>/gi,function(str,inner){inner=inner.replace(/^\s+|\s+$/g,'');inner=cleanUp(inner);inner=inner.replace(/^/gm,'> ');inner=inner.replace(/^(>([ \t]{2,}>)+)/gm,'> >');return inner;});return html;}function cleanUp(string){string=string.replace(/^[\t\r\n]+|[\t\r\n]+$/g,'');string=string.replace(/\n\s+\n/g,'\n\n');string=string.replace(/\n{3,}/g,'\n\n');return string;}return cleanUp(string);};if(typeof exports==='object'){exports.toMarkdown=toMarkdown;}
/* 
* ===============================
 * bootstrap-markdown.js  v2.1.0
 * http://github.com/toopay/bootstrap-markdown
 * ===============================
 */
!function($){"use strict";var Markdown=function(element,options){this.$ns='bootstrap-markdown'
this.$element=$(element)
this.$editable={el:null,type:null,attrKeys:[],attrValues:[],content:null}
this.$options=$.extend(true,{},$.fn.markdown.defaults,options)
this.$oldContent=null
this.$isPreview=false
this.$editor=null
this.$textarea=null
this.$handler=[]
this.$callback=[]
this.$nextTab=[]
this.showEditor()}
Markdown.prototype={constructor:Markdown,__alterButtons:function(name,alter){var handler=this.$handler,isAll=(name=='all'),that=this
$.each(handler,function(k,v){var halt=true
if(isAll){halt=false}else{halt=v.indexOf(name)<0}
if(halt==false){alter(that.$editor.find('button[data-handler="'+v+'"]'))}})},__buildButtons:function(buttonsArray,container){var i,ns=this.$ns,handler=this.$handler,callback=this.$callback
for(i=0;i<buttonsArray.length;i++){var y,btnGroups=buttonsArray[i]
for(y=0;y<btnGroups.length;y++){var z,buttons=btnGroups[y].data,btnGroupContainer=$('<div/>',{'class':'btn-group'})
for(z=0;z<buttons.length;z++){var button=buttons[z],buttonToggle='',buttonHandler=ns+'-'+button.name,btnText=button.btnText?button.btnText:'',btnClass=button.btnClass?button.btnClass:'btn',tabIndex=button.tabIndex?button.tabIndex:'-1'
if(button.toggle==true){buttonToggle=' data-toggle="button"'}
btnGroupContainer.append('<button class="'
+btnClass
+' btn-default btn-sm" title="'
+button.title
+'" tabindex="'
+tabIndex
+'" data-provider="'
+ns
+'" data-handler="'
+buttonHandler
+'"'
+buttonToggle
+'><span class="'
+button.icon
+'"></span> '
+btnText
+'</button>')
handler.push(buttonHandler)
callback.push(button.callback)}
container.append(btnGroupContainer)}}
return container},__setListener:function(){var hasRows=typeof this.$textarea.attr('rows')!='undefined',maxRows=this.$textarea.val().split("\n").length>5?this.$textarea.val().split("\n").length:'5',rowsVal=hasRows?this.$textarea.attr('rows'):maxRows
this.$textarea.attr('rows',rowsVal)
this.$textarea.css('resize','none')
this.$textarea.on('focus',$.proxy(this.focus,this)).on('keypress',$.proxy(this.keypress,this)).on('keyup',$.proxy(this.keyup,this))
if(this.eventSupported('keydown')){this.$textarea.on('keydown',$.proxy(this.keydown,this))}
this.$textarea.data('markdown',this)},__handle:function(e){var target=$(e.currentTarget),handler=this.$handler,callback=this.$callback,handlerName=target.attr('data-handler'),callbackIndex=handler.indexOf(handlerName),callbackHandler=callback[callbackIndex]
$(e.currentTarget).focus()
callbackHandler(this)
if(handlerName.indexOf('cmdSave')<0){this.$textarea.focus()}
e.preventDefault()},showEditor:function(){var instance=this,textarea,ns=this.$ns,container=this.$element,originalHeigth=container.css('height'),originalWidth=container.css('width'),editable=this.$editable,handler=this.$handler,callback=this.$callback,options=this.$options,editor=$('<div/>',{'class':'md-editor',click:function(){instance.focus()}})
if(this.$editor==null){var editorHeader=$('<div/>',{'class':'md-header btn-toolbar'})
if(options.buttons.length>0){editorHeader=this.__buildButtons(options.buttons,editorHeader)}
if(options.additionalButtons.length>0){editorHeader=this.__buildButtons(options.additionalButtons,editorHeader)}
editor.append(editorHeader)
if(container.is('textarea')){container.before(editor)
textarea=container
textarea.addClass('md-input form-control')
editor.append(textarea)}else{var rawContent=(typeof toMarkdown=='function')?toMarkdown(container.html()):container.html(),currentContent=$.trim(rawContent)
textarea=$('<textarea/>',{'class':'form-control','val':currentContent})
editor.append(textarea)
editable.el=container
editable.type=container.prop('tagName').toLowerCase()
editable.content=container.html()
$(container[0].attributes).each(function(){editable.attrKeys.push(this.nodeName)
editable.attrValues.push(this.nodeValue)})
container.replaceWith(editor)}
if(options.savable){var editorFooter=$('<div/>',{'class':'md-footer'}),saveHandler='cmdSave'
handler.push(saveHandler)
callback.push(options.onSave)
editorFooter.append('<button class="btn btn-success" data-provider="'
+ns
+'" data-handler="'
+saveHandler
+'"><i class="fa icon-white fa-ok"></i> Save</button>')
editor.append(editorFooter)}
$.each(['height','width'],function(k,attr){if(options[attr]!='inherit'){if(jQuery.isNumeric(options[attr])){editor.css(attr,options[attr]+'px')}else{editor.addClass(options[attr])}}})
this.$editor=editor
this.$textarea=textarea
this.$editable=editable
this.$oldContent=this.getContent()
this.__setListener()
this.$editor.attr('id',(new Date).getTime())
this.$editor.on('click','[data-provider="bootstrap-markdown"]',$.proxy(this.__handle,this))}else{this.$editor.show()}
if(options.autofocus){this.$textarea.focus()
this.$editor.addClass('active')}
options.onShow(this)
return this},showPreview:function(){var options=this.$options,callbackContent=options.onPreview(this),container=this.$textarea,afterContainer=container.next(),replacementContainer=$('<div/>',{'class':'md-preview','data-provider':'markdown-preview'}),content
this.$isPreview=true
this.disableButtons('all').enableButtons('cmdPreview')
if(typeof callbackContent=='string'){content=callbackContent}else{content=(typeof markdown=='object')?markdown.toHTML(container.val()):container.val()}
replacementContainer.html(content)
if(afterContainer&&afterContainer.attr('class')=='md-footer'){replacementContainer.insertBefore(afterContainer)}else{container.parent().append(replacementContainer)}
container.hide()
replacementContainer.data('markdown',this)
return this},hidePreview:function(){this.$isPreview=false
var container=this.$editor.find('div[data-provider="markdown-preview"]')
container.remove()
this.enableButtons('all')
this.$textarea.show()
this.__setListener()
return this},isDirty:function(){return this.$oldContent!=this.getContent()},getContent:function(){return this.$textarea.val()},setContent:function(content){this.$textarea.val(content)
return this},findSelection:function(chunk){var content=this.getContent(),startChunkPosition
if(startChunkPosition=content.indexOf(chunk),startChunkPosition>=0&&chunk.length>0){var oldSelection=this.getSelection(),selection
this.setSelection(startChunkPosition,startChunkPosition+chunk.length)
selection=this.getSelection()
this.setSelection(oldSelection.start,oldSelection.end)
return selection}else{return null}},getSelection:function(){var e=this.$textarea[0]
return(('selectionStart'in e&&function(){var l=e.selectionEnd-e.selectionStart
return{start:e.selectionStart,end:e.selectionEnd,length:l,text:e.value.substr(e.selectionStart,l)}})||function(){return null})()},setSelection:function(start,end){var e=this.$textarea[0]
return(('selectionStart'in e&&function(){e.selectionStart=start
e.selectionEnd=end
return})||function(){return null})()},replaceSelection:function(text){var e=this.$textarea[0]
return(('selectionStart'in e&&function(){e.value=e.value.substr(0,e.selectionStart)+text+e.value.substr(e.selectionEnd,e.value.length)
e.selectionStart=e.value.length
return this})||function(){e.value+=text
return jQuery(e)})()},getNextTab:function(){if(this.$nextTab.length==0){return null}else{var nextTab,tab=this.$nextTab.shift()
if(typeof tab=='function'){nextTab=tab()}else if(typeof tab=='object'&&tab.length>0){nextTab=tab}
return nextTab}},setNextTab:function(start,end){if(typeof start=='string'){var that=this
this.$nextTab.push(function(){return that.findSelection(start)})}else if(typeof start=='numeric'&&typeof end=='numeric'){var oldSelection=this.getSelection()
this.setSelection(start,end)
this.$nextTab.push(this.getSelection())
this.setSelection(oldSelection.start,oldSelection.end)}
return},enableButtons:function(name){var alter=function(el){el.removeAttr('disabled')}
this.__alterButtons(name,alter)
return this},disableButtons:function(name){var alter=function(el){el.attr('disabled','disabled')}
this.__alterButtons(name,alter)
return this},eventSupported:function(eventName){var isSupported=eventName in this.$element
if(!isSupported){this.$element.setAttribute(eventName,'return;')
isSupported=typeof this.$element[eventName]==='function'}
return isSupported},keydown:function(e){this.suppressKeyPressRepeat=~$.inArray(e.keyCode,[40,38,9,13,27])
this.keyup(e)},keypress:function(e){if(this.suppressKeyPressRepeat)return
this.keyup(e)},keyup:function(e){var blocked=false
switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break
case 9:var nextTab
if(nextTab=this.getNextTab(),nextTab!=null){var that=this
setTimeout(function(){that.setSelection(nextTab.start,nextTab.end)},500)
blocked=true}else{var cursor=this.getSelection()
if(cursor.start==cursor.end&&cursor.end==this.getContent().length){blocked=false}else{this.setSelection(this.getContent().length,this.getContent().length)
blocked=true}}
break
case 13:case 27:blocked=false
break
default:blocked=false}
if(blocked){e.stopPropagation()
e.preventDefault()}},focus:function(e){var options=this.$options,isHideable=options.hideable,editor=this.$editor
editor.addClass('active')
$(document).find('.md-editor').each(function(){if($(this).attr('id')!=editor.attr('id')){var attachedMarkdown
if(attachedMarkdown=$(this).find('textarea').data('markdown'),attachedMarkdown==null){attachedMarkdown=$(this).find('div[data-provider="markdown-preview"]').data('markdown')}
if(attachedMarkdown){attachedMarkdown.blur()}}})
return this},blur:function(e){var options=this.$options,isHideable=options.hideable,editor=this.$editor,editable=this.$editable
if(editor.hasClass('active')||this.$element.parent().length==0){editor.removeClass('active')
if(isHideable){if(editable.el!=null){var oldElement=$('<'+editable.type+'/>'),content=this.getContent(),currentContent=(typeof markdown=='object')?markdown.toHTML(content):content
$(editable.attrKeys).each(function(k,v){oldElement.attr(editable.attrKeys[k],editable.attrValues[k])})
oldElement.html(currentContent)
editor.replaceWith(oldElement)}else{editor.hide()}}
options.onBlur(this)}
return this}}
var old=$.fn.markdown
$.fn.markdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('markdown'),options=typeof option=='object'&&option
if(!data)$this.data('markdown',(data=new Markdown(this,options)))})}
$.fn.markdown.defaults={autofocus:false,hideable:false,savable:false,width:'inherit',height:'inherit',buttons:[[{name:'groupFont',data:[{name:'cmdBold',title:'Bold',icon:'glyphicon glyphicon-bold',callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent()
if(selected.length==0){chunk='strong text'}else{chunk=selected.text}
if(content.substr(selected.start-2,2)=='**'&&content.substr(selected.end,2)=='**'){e.setSelection(selected.start-2,selected.end+2)
e.replaceSelection(chunk)
cursor=selected.start-2}else{e.replaceSelection('**'+chunk+'**')
cursor=selected.start+2}
e.setSelection(cursor,cursor+chunk.length)}},{name:'cmdItalic',title:'Italic',icon:'glyphicon glyphicon-italic',callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent()
if(selected.length==0){chunk='emphasized text'}else{chunk=selected.text}
if(content.substr(selected.start-1,1)=='*'&&content.substr(selected.end,1)=='*'){e.setSelection(selected.start-1,selected.end+1)
e.replaceSelection(chunk)
cursor=selected.start-1}else{e.replaceSelection('*'+chunk+'*')
cursor=selected.start+1}
e.setSelection(cursor,cursor+chunk.length)}},{name:'cmdHeading',title:'Heading',icon:'glyphicon glyphicon-font',callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent(),pointer,prevChar
if(selected.length==0){chunk='heading text'}else{chunk=selected.text}
if((pointer=4,content.substr(selected.start-pointer,pointer)=='### ')||(pointer=3,content.substr(selected.start-pointer,pointer)=='###')){e.setSelection(selected.start-pointer,selected.end)
e.replaceSelection(chunk)
cursor=selected.start-pointer}else if(prevChar=content.substr(selected.start-1,1),!!prevChar&&prevChar!='\n'){e.replaceSelection('\n\n### '+chunk+'\n')
cursor=selected.start+6}else{e.replaceSelection('### '+chunk+'\n')
cursor=selected.start+4}
e.setSelection(cursor,cursor+chunk.length)}}]},{name:'groupLink',data:[{name:'cmdUrl',title:'URL/Link',icon:'glyphicon glyphicon-globe',callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent(),link
if(selected.length==0){chunk='enter link description here'}else{chunk=selected.text}
link=prompt('Insert Hyperlink','http://')
if(link!=null){e.replaceSelection('['+chunk+']('+link+')')
cursor=selected.start+1
e.setSelection(cursor,cursor+chunk.length)}}},{name:'cmdImage',title:'Image',icon:'glyphicon glyphicon-picture',callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent(),link
if(selected.length==0){chunk='enter image description here'}else{chunk=selected.text}
link=prompt('Insert Image Hyperlink','http://')
if(link!=null){e.replaceSelection('!['+chunk+']('+link+' "enter image title here")')
cursor=selected.start+2
e.setNextTab('enter image title here')
e.setSelection(cursor,cursor+chunk.length)}}}]},{name:'groupMisc',data:[{name:'cmdList',title:'List',icon:'glyphicon glyphicon-list',callback:function(e){var chunk,cursor,selected=e.getSelection(),content=e.getContent()
if(selected.length==0){chunk='list text here'
e.replaceSelection('- '+chunk)
cursor=selected.start+2}else{if(selected.text.indexOf('\n')<0){chunk=selected.text
e.replaceSelection('- '+chunk)
cursor=selected.start+2}else{var list=[]
list=selected.text.split('\n')
chunk=list[0]
$.each(list,function(k,v){list[k]='- '+v})
e.replaceSelection('\n\n'+list.join('\n'))
cursor=selected.start+4}}
e.setSelection(cursor,cursor+chunk.length)}}]},{name:'groupUtil',data:[{name:'cmdPreview',toggle:true,title:'Preview',btnText:'Preview',btnClass:'btn btn-sm',icon:'glyphicon glyphicon-search',callback:function(e){var isPreview=e.$isPreview,content
if(isPreview==false){e.showPreview()}else{e.hidePreview()}}}]}]],additionalButtons:[],onShow:function(e){},onPreview:function(e){},onSave:function(e){},onBlur:function(e){}}
$.fn.markdown.Constructor=Markdown
$.fn.markdown.noConflict=function(){$.fn.markdown=old
return this}
var initMarkdown=function(el){var $this=el
if($this.data('markdown')){$this.data('markdown').showEditor()
return}
$this.markdown($this.data())}
var analyzeMarkdown=function(e){var blurred=false,el,$docEditor=$(e.currentTarget)
if((e.type=='focusin'||e.type=='click')&&$docEditor.length==1&&typeof $docEditor[0]=='object'){el=$docEditor[0].activeElement
if(!$(el).data('markdown')){if(typeof $(el).parent().parent().parent().attr('class')=="undefined"||$(el).parent().parent().parent().attr('class').indexOf('md-editor')<0){if(typeof $(el).parent().parent().attr('class')=="undefined"||$(el).parent().parent().attr('class').indexOf('md-editor')<0){blurred=true}}else{blurred=false}}
if(blurred){$(document).find('.md-editor').each(function(){var parentMd=$(el).parent()
if($(this).attr('id')!=parentMd.attr('id')){var attachedMarkdown
if(attachedMarkdown=$(this).find('textarea').data('markdown'),attachedMarkdown==null){attachedMarkdown=$(this).find('div[data-provider="markdown-preview"]').data('markdown')}
if(attachedMarkdown){attachedMarkdown.blur()}}})}
e.stopPropagation()}}
$(document).on('click.markdown.data-api','[data-provide="markdown-editable"]',function(e){initMarkdown($(this))
e.preventDefault()}).on('click',function(e){analyzeMarkdown(e)}).on('focusin',function(e){analyzeMarkdown(e)}).ready(function(){$('textarea[data-provide="markdown"]').each(function(){initMarkdown($(this))})})}(window.jQuery);


/*iCheck*/
/*!
 * iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
(function(f){function C(a,c,d){var b=a[0],e=/er/.test(d)?k:/bl/.test(d)?u:j;active=d==E?{checked:b[j],disabled:b[u],indeterminate:"true"==a.attr(k)||"false"==a.attr(v)}:b[e];if(/^(ch|di|in)/.test(d)&&!active)p(a,e);else if(/^(un|en|de)/.test(d)&&active)w(a,e);else if(d==E)for(var e in active)active[e]?p(a,e,!0):w(a,e,!0);else if(!c||"toggle"==d){if(!c)a[r]("ifClicked");active?b[l]!==x&&w(a,e):p(a,e)}}function p(a,c,d){var b=a[0],e=a.parent(),g=c==j,H=c==k,m=H?v:g?I:"enabled",r=h(b,m+y(b[l])),L=h(b,
c+y(b[l]));if(!0!==b[c]){if(!d&&c==j&&b[l]==x&&b.name){var p=a.closest("form"),s='input[name="'+b.name+'"]',s=p.length?p.find(s):f(s);s.each(function(){this!==b&&f.data(this,n)&&w(f(this),c)})}H?(b[c]=!0,b[j]&&w(a,j,"force")):(d||(b[c]=!0),g&&b[k]&&w(a,k,!1));J(a,g,c,d)}b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"default");e[t](L||h(b,c));e[A](r||h(b,m)||"")}function w(a,c,d){var b=a[0],e=a.parent(),g=c==j,f=c==k,m=f?v:g?I:"enabled",n=h(b,m+y(b[l])),p=h(b,c+y(b[l]));if(!1!==b[c]){if(f||!d||"force"==d)b[c]=
!1;J(a,g,m,d)}!b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"pointer");e[A](p||h(b,c)||"");e[t](n||h(b,m))}function K(a,c){if(f.data(a,n)){var d=f(a),line=d.parents("li.line"),lineLabel =line.find("span").text();d.parent().html(d.attr("style",f.data(a,n).s||"")[r](c||""));d.off(".i").unwrap(); d.removeAttr("id");d.next().removeAttr("for"); line.append("<label>"+lineLabel+"</label>"); f(D+'[for="'+a.id+'"]').add(d.closest(D)).off(".i")}}function h(a,c,d){if(f.data(a,n))return f.data(a,n).o[c+(d?"":"Class")]}function y(a){return a.charAt(0).toUpperCase()+a.slice(1)}function J(a,c,d,b){if(!b){if(c)a[r]("ifToggled");a[r]("ifChanged")[r]("if"+y(d))}}var n="iCheck",
F=n+"-helper",x="radio",j="checked",I="un"+j,u="disabled",v="determinate",k="in"+v,E="update",l="type",t="addClass",A="removeClass",r="trigger",D="label",z="cursor",G=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);f.fn[n]=function(a,c){var d=":checkbox, :"+x,b=f(),e=function(a){a.each(function(){var a=f(this);b=a.is(d)?b.add(a):b.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),
e(this),b.each(function(){"destroy"==a?K(this,"ifDestroyed"):C(f(this),!0,a);f.isFunction(c)&&c()});if("object"==typeof a||!a){var g=f.extend({checkedClass:j,disabledClass:u,indeterminateClass:k,labelHover:!0},a),h=g.handle,m=g.hoverClass||"hover",y=g.focusClass||"focus",v=g.activeClass||"active",z=!!g.labelHover,s=g.labelHoverClass||"hover",B=(""+g.increaseArea).replace("%","")|0;if("checkbox"==h||h==x)d=":"+h;-50>B&&(B=-50);e(this);return b.each(function(){K(this);var a=f(this),b=this,c=b.id,d=
-B+"%",e=100+2*B+"%",e={position:"absolute",top:d,left:d,display:"block",width:e,height:e,margin:0,padding:0,background:"#fff",border:0,opacity:0},d=G?{position:"absolute",visibility:"hidden"}:B?e:{position:"absolute",opacity:0},h="checkbox"==b[l]?g.checkboxClass||"icheckbox":g.radioClass||"i"+x,k=f(D+'[for="'+c+'"]').add(a.closest(D)),q=a.wrap('<div class="'+h+'"/>')[r]("ifCreated").parent().append(g.insert),e=f('<ins class="'+F+'"/>').css(e).appendTo(q);a.data(n,{o:g,s:a.attr("style")}).css(d);
g.inheritClass&&q[t](b.className);g.inheritID&&c&&q.attr("id",n+"-"+c);"static"==q.css("position")&&q.css("position","relative");C(a,!0,E);if(k.length)k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i",function(c){var d=c[l],e=f(this);if(!b[u])if("click"==d?C(a,!1,!0):z&&(/ve|nd/.test(d)?(q[A](m),e[A](s)):(q[t](m),e[t](s))),G)c.stopPropagation();else return!1});a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(c){var d=c[l];c=c.keyCode;if("click"==d)return!1;if("keydown"==
d&&32==c)return b[l]==x&&b[j]||(b[j]?w(a,j):p(a,j)),!1;if("keyup"==d&&b[l]==x)!b[j]&&p(a,j);else if(/us|ur/.test(d))q["blur"==d?A:t](y)});e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(d){var c=d[l],e=/wn|up/.test(c)?v:m;if(!b[u]){if("click"==c)C(a,!1,!0);else{if(/wn|er|in/.test(c))q[t](e);else q[A](e+" "+v);if(k.length&&z&&e==m)k[/ut|nd/.test(c)?A:t](s)}if(G)d.stopPropagation();else return!1}})})}return this}})(jQuery);


/* bootstrapSwitch v1.8  */
/*!function($){"use strict";$.fn['bootstrapSwitch']=function(method){var inputSelector='input[type!="hidden"]';var methods={init:function(){return this.each(function(){var $element=$(this),$div,$switchLeft,$switchRight,$label,$form=$element.closest('form'),myClasses="",classes=$element.attr('class'),color,moving,onLabel="ON",offLabel="OFF",icon=false,textLabel=false;$.each(['switch-mini','switch-small','switch-large'],function(i,el){if(classes.indexOf(el)>=0)myClasses=el});$element.addClass('has-switch');if($element.data('on')!==undefined)color="switch-"+$element.data('on');if($element.data('on-label')!==undefined)onLabel=$element.data('on-label');if($element.data('off-label')!==undefined)offLabel=$element.data('off-label');if($element.data('label-icon')!==undefined)icon=$element.data('label-icon');if($element.data('text-label')!==undefined)textLabel=$element.data('text-label');$switchLeft=$('<span>').addClass("switch-left").addClass(myClasses).addClass(color).html(onLabel);color='';if($element.data('off')!==undefined)color="switch-"+$element.data('off');$switchRight=$('<span>').addClass("switch-right").addClass(myClasses).addClass(color).html(offLabel);$label=$('<label>').html("&nbsp;").addClass(myClasses+" normal").attr('for',$element.find(inputSelector).attr('id'));if(icon){$label.html('<i class="fa '+icon+'"></i>').removeClass("normal")}if(textLabel){$label.html(''+textLabel+'')}$div=$element.find(inputSelector).wrap($('<div>')).parent().data('animated',false);if($element.data('animated')!==false)$div.addClass('switch-animate').data('animated',true);$div.append($switchLeft).append($label).append($switchRight);$element.addClass( $element.find(inputSelector).is(':checked') ? 'checked' : 'unchecked' );$element.find('>div').addClass($element.find(inputSelector).is(':checked')?'switch-on':'switch-off');if($element.find(inputSelector).is(':disabled'))$(this).addClass('deactivate');var changeStatus=function($this){if($element.parent('label').is('.label-change-switch')){}else{$this.siblings('label').trigger('mousedown').trigger('mouseup').trigger('click')}};$element.on('keydown',function(e){if(e.keyCode===32){e.stopImmediatePropagation();e.preventDefault();changeStatus($(e.target).find('span:first'))}});$switchLeft.on('click',function(e){changeStatus($(this))});$switchRight.on('click',function(e){changeStatus($(this))});$element.find(inputSelector).on('change',function(e,skipOnChange){var $this=$(this),$element=$this.parent(),thisState=$this.is(':checked'),state=$element.is('.switch-off');e.preventDefault();$element.css('left','');if(state===thisState){if(thisState){$element.removeClass('switch-off').addClass('switch-on');$element.parents(".has-switch").removeClass('unchecked').addClass('checked');}else{ $element.removeClass('switch-on').addClass('switch-off');$element.parents(".has-switch").removeClass('checked').addClass('unchecked');}if($element.data('animated')!==false)$element.addClass("switch-animate");if(typeof skipOnChange==='boolean'&&skipOnChange)return;$element.parent().trigger('switch-change',{'el':$this,'value':thisState})}});$element.find('label').on('mousedown touchstart',function(e){var $this=$(this);moving=false;e.preventDefault();e.stopImmediatePropagation();$this.closest('div').removeClass('switch-animate');if($this.closest('.has-switch').is('.deactivate')){$this.unbind('click')}else if($this.closest('.switch-on').parent().is('.radio-no-uncheck')){$this.unbind('click')}else{  if(!$element.hasClass("ios7")){ $this.on('mousemove touchmove',function(e){var $element=$(this).closest('.make-switch'),relativeX=(e.pageX||e.originalEvent.targetTouches[0].pageX)-$element.offset().left,percent=(relativeX/$element.width())*100,left=25,right=75;moving=true;if(percent<left)percent=left;else if(percent>right)percent=right;$element.find('>div').css('left',(percent-right)+"%")});}$this.on('click touchend',function(e){var $this=$(this),$target=$(e.target),$myRadioCheckBox=$target.siblings('input');e.stopImmediatePropagation();e.preventDefault();$this.unbind('mouseleave');if(moving)$myRadioCheckBox.prop('checked',!(parseInt($this.parent().css('left'))<-25));else $myRadioCheckBox.prop("checked",!$myRadioCheckBox.is(":checked"));moving=false;$myRadioCheckBox.trigger('change')});$this.on('mouseleave',function(e){var $this=$(this),$myInputBox=$this.siblings('input');e.preventDefault();e.stopImmediatePropagation();$this.unbind('mouseleave');$this.trigger('mouseup');$myInputBox.prop('checked',!(parseInt($this.parent().css('left'))<-25)).trigger('change')});$this.on('mouseup',function(e){e.stopImmediatePropagation();e.preventDefault();$(this).unbind('mousemove')})}});if($form.data('bootstrapSwitch')!=='injected'){$form.bind('reset',function(){setTimeout(function(){$form.find('.make-switch').each(function(){var $input=$(this).find(inputSelector);$input.prop('checked',$input.is(':checked')).trigger('change')})},1)});$form.data('bootstrapSwitch','injected')}})},toggleActivation:function(){var $this=$(this);$this.toggleClass('deactivate');$this.find(inputSelector).prop('disabled',$this.is('.deactivate'))},isActive:function(){return!$(this).hasClass('deactivate')},setActive:function(active){var $this=$(this);if(active){$this.removeClass('deactivate');$this.find(inputSelector).removeAttr('disabled')}else{$this.addClass('deactivate');$this.find(inputSelector).attr('disabled','disabled')}},toggleState:function(skipOnChange){var $input=$(this).find(':checkbox');$input.prop('checked',!$input.is(':checked')).trigger('change',skipOnChange)},toggleRadioState:function(skipOnChange){var $radioinput=$(this).find(':radio');$radioinput.not(':checked').prop('checked',!$radioinput.is(':checked')).trigger('change',skipOnChange)},toggleRadioStateAllowUncheck:function(uncheck,skipOnChange){var $radioinput=$(this).find(':radio');if(uncheck){$radioinput.not(':checked').trigger('change',skipOnChange)}else{$radioinput.not(':checked').prop('checked',!$radioinput.is(':checked')).trigger('change',skipOnChange)}},setState:function(value,skipOnChange){$(this).find(inputSelector).prop('checked',value).trigger('change',skipOnChange)},setOnLabel:function(value){var $switchLeft=$(this).find(".switch-left");$switchLeft.html(value)},setOffLabel:function(value){var $switchRight=$(this).find(".switch-right");$switchRight.html(value)},setOnClass:function(value){var $switchLeft=$(this).find(".switch-left");var color='';if(value!==undefined){if($(this).attr('data-on')!==undefined){color="switch-"+$(this).attr('data-on')}$switchLeft.removeClass(color);color="switch-"+value;$switchLeft.addClass(color)}},setOffClass:function(value){var $switchRight=$(this).find(".switch-right");var color='';if(value!==undefined){if($(this).attr('data-off')!==undefined){color="switch-"+$(this).attr('data-off')}$switchRight.removeClass(color);color="switch-"+value;$switchRight.addClass(color)}},setAnimated:function(value){var $element=$(this).find(inputSelector).parent();if(value===undefined)value=false;$element.data('animated',value);$element.attr('data-animated',value);if($element.data('animated')!==false){$element.addClass("switch-animate")}else{$element.removeClass("switch-animate")}},setSizeClass:function(value){var $element=$(this);var $switchLeft=$element.find(".switch-left");var $switchRight=$element.find(".switch-right");var $label=$element.find("label");$.each(['switch-mini','switch-small','switch-large'],function(i,el){if(el!==value){$switchLeft.removeClass(el);$switchRight.removeClass(el);$label.removeClass(el)}else{$switchLeft.addClass(el);$switchRight.addClass(el);$label.addClass(el)}})},status:function(){return $(this).find(inputSelector).is(':checked')},destroy:function(){var $element=$(this),$div=$element.find('div'),$form=$element.closest('form'),$inputbox;$div.find(':not(input)').remove();$inputbox=$div.children();$inputbox.unwrap().unwrap();$inputbox.unbind('change');if($form){$form.unbind('reset');$form.removeData('bootstrapSwitch')}return $inputbox}};if(methods[method])return methods[method].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof method==='object'||!method)return methods.init.apply(this,arguments);else $.error('Method '+method+' does not exist!')}}(jQuery);(function($){$(function(){$('.switch')['bootstrapSwitch']()})})(jQuery);*/
!function($){$.fn.bootstrapSwitch=function(method){var inputSelector='input[type!="hidden"]';var methods={init:function(){return this.each(function(){var $element=$(this),$div,$switchLeft,$switchRight,$label,$form=$element.closest("form"),myClasses="",classes=$element.attr("class"),color,moving,onLabel="<i class='fa fa-check'></i>",offLabel="<i class='fa fa-times'></i>",icon=false,textLabel=false;$.each(["switch-mini","switch-small","switch-large"],function(i,el){if(classes.indexOf(el)>=0){myClasses=el}});$element.addClass("has-switch");if($element.data("on")!==undefined){color="switch-"+$element.data("on")}if($element.data("on-label")!==undefined){onLabel=$element.data("on-label")}if($element.data("off-label")!==undefined){offLabel=$element.data("off-label")}if($element.data("label-icon")!==undefined){icon=$element.data("label-icon")}if($element.data("text-label")!==undefined){textLabel=$element.data("text-label")}$switchLeft=$("<span>").addClass("switch-left").addClass(myClasses).addClass(color).html(onLabel);color="";if($element.data("off")!==undefined){color="switch-"+$element.data("off")}$switchRight=$("<span>").addClass("switch-right").addClass(myClasses).addClass(color).html(offLabel);$label=$("<label>").html("&nbsp;").addClass(myClasses+" normal").attr("for",$element.find(inputSelector).attr("id"));if(icon){$label.html('<i class="fa '+icon+'"></i>').removeClass("normal")}if(textLabel){$label.html(""+textLabel+"")}$div=$element.find(inputSelector).wrap($("<div>")).parent().data("animated",false);if($element.data("animated")!==false){$div.addClass("switch-animate").data("animated",true)}$div.append($switchLeft).append($label).append($switchRight);$element.addClass($element.find(inputSelector).is(":checked")?"checked":"unchecked");$element.find(">div").addClass($element.find(inputSelector).is(":checked")?"switch-on":"switch-off");if($element.find(inputSelector).is(":disabled")){$(this).addClass("deactivate")}var changeStatus=function($this){if($element.parent("label").is(".label-change-switch")){}else{$this.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")}};$element.on("keydown",function(e){if(e.keyCode===32){e.stopImmediatePropagation();e.preventDefault();changeStatus($(e.target).find("span:first"))}});$switchLeft.on("click",function(e){changeStatus($(this))});$switchRight.on("click",function(e){changeStatus($(this))});$element.find(inputSelector).on("change",function(e,skipOnChange){var $this=$(this),$element=$this.parent(),thisState=$this.is(":checked"),state=$element.is(".switch-off");e.preventDefault();$element.css("left","");if(state===thisState){if(thisState){$element.removeClass("switch-off").addClass("switch-on");$element.parents(".has-switch").removeClass("unchecked").addClass("checked")}else{$element.removeClass("switch-on").addClass("switch-off");$element.parents(".has-switch").removeClass("checked").addClass("unchecked")}if($element.data("animated")!==false){$element.addClass("switch-animate")}if(typeof skipOnChange==="boolean"&&skipOnChange){return}$element.parent().trigger("switch-change",{el:$this,value:thisState})}});$element.find("label").on("mousedown touchstart",function(e){var $this=$(this);moving=false;e.preventDefault();e.stopImmediatePropagation();$this.closest("div").removeClass("switch-animate");if($this.closest(".has-switch").is(".deactivate")){$this.unbind("click")}else{if($this.closest(".switch-on").parent().is(".radio-no-uncheck")){$this.unbind("click")}else{if(!$element.hasClass("ios")){$this.on("mousemove touchmove",function(e){var $element=$(this).closest(".switch"),relativeX=(e.pageX||e.originalEvent.targetTouches[0].pageX)-$element.offset().left,percent=(relativeX/$element.width())*100,left=25,right=75;moving=true;if(percent<left){percent=left}else{if(percent>right){percent=right}}$element.find(">div").css("left",(percent-right)+"%")})}$this.on("click touchend",function(e){var $this=$(this),$target=$(e.target),$myRadioCheckBox=$target.siblings("input");e.stopImmediatePropagation();e.preventDefault();$this.unbind("mouseleave");if(moving){$myRadioCheckBox.prop("checked",!(parseInt($this.parent().css("left"))<-25))}else{$myRadioCheckBox.prop("checked",!$myRadioCheckBox.is(":checked"))}moving=false;$myRadioCheckBox.trigger("change")});$this.on("mouseleave",function(e){var $this=$(this),$myInputBox=$this.siblings("input");e.preventDefault();e.stopImmediatePropagation();$this.unbind("mouseleave");$this.trigger("mouseup");$myInputBox.prop("checked",!(parseInt($this.parent().css("left"))<-25)).trigger("change")});$this.on("mouseup",function(e){e.stopImmediatePropagation();e.preventDefault();$(this).unbind("mousemove")})}}});if($form.data("bootstrapSwitch")!=="injected"){$form.bind("reset",function(){setTimeout(function(){$form.find(".make-switch").each(function(){var $input=$(this).find(inputSelector);$input.prop("checked",$input.is(":checked")).trigger("change")})},1)});$form.data("bootstrapSwitch","injected")}})},toggleActivation:function(){var $this=$(this);$this.toggleClass("deactivate");$this.find(inputSelector).prop("disabled",$this.is(".deactivate"))},isActive:function(){return !$(this).hasClass("deactivate")},setActive:function(active){var $this=$(this);if(active){$this.removeClass("deactivate");$this.find(inputSelector).removeAttr("disabled")}else{$this.addClass("deactivate");$this.find(inputSelector).attr("disabled","disabled")}},toggleState:function(skipOnChange){var $input=$(this).find(":checkbox");$input.prop("checked",!$input.is(":checked")).trigger("change",skipOnChange)},toggleRadioState:function(skipOnChange){var $radioinput=$(this).find(":radio");$radioinput.not(":checked").prop("checked",!$radioinput.is(":checked")).trigger("change",skipOnChange)},toggleRadioStateAllowUncheck:function(uncheck,skipOnChange){var $radioinput=$(this).find(":radio");if(uncheck){$radioinput.not(":checked").trigger("change",skipOnChange)}else{$radioinput.not(":checked").prop("checked",!$radioinput.is(":checked")).trigger("change",skipOnChange)}},setState:function(value,skipOnChange){$(this).find(inputSelector).prop("checked",value).trigger("change",skipOnChange)},setOnLabel:function(value){var $switchLeft=$(this).find(".switch-left");$switchLeft.html(value)},setOffLabel:function(value){var $switchRight=$(this).find(".switch-right");$switchRight.html(value)},setOnClass:function(value){var $switchLeft=$(this).find(".switch-left");var color="";if(value!==undefined){if($(this).attr("data-on")!==undefined){color="switch-"+$(this).attr("data-on")}$switchLeft.removeClass(color);color="switch-"+value;$switchLeft.addClass(color)}},setOffClass:function(value){var $switchRight=$(this).find(".switch-right");var color="";if(value!==undefined){if($(this).attr("data-off")!==undefined){color="switch-"+$(this).attr("data-off")}$switchRight.removeClass(color);color="switch-"+value;$switchRight.addClass(color)}},setAnimated:function(value){var $element=$(this).find(inputSelector).parent();if(value===undefined){value=false}$element.data("animated",value);$element.attr("data-animated",value);if($element.data("animated")!==false){$element.addClass("switch-animate")}else{$element.removeClass("switch-animate")}},setSizeClass:function(value){var $element=$(this);var $switchLeft=$element.find(".switch-left");var $switchRight=$element.find(".switch-right");var $label=$element.find("label");$.each(["switch-mini","switch-small","switch-large"],function(i,el){if(el!==value){$switchLeft.removeClass(el);$switchRight.removeClass(el);$label.removeClass(el)}else{$switchLeft.addClass(el);$switchRight.addClass(el);$label.addClass(el)}})},status:function(){return $(this).find(inputSelector).is(":checked")},destroy:function(){var $element=$(this),$div=$element.find("div"),$form=$element.closest("form"),$inputbox;$div.find(":not(input)").remove();$inputbox=$div.children();$inputbox.unwrap().unwrap();$inputbox.unbind("change");if($form){$form.unbind("reset");$form.removeData("bootstrapSwitch")}return $inputbox}};if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist!")}}}}(jQuery);(function($){$(function(){$(".switch")["bootstrapSwitch"]()})})(jQuery);





/*
 * bootstrap-tagsinput v0.3.9 by Tim Schlechter
 * 
 */
!function(a){"use strict";function b(b,c){this.itemsArray=[],this.$element=a(b),this.$element.hide(),this.isSelect="SELECT"===b.tagName,this.multiple=this.isSelect&&b.hasAttribute("multiple"),this.objectItems=c&&c.itemValue,this.placeholderText=b.hasAttribute("placeholder")?this.$element.attr("placeholder"):"",this.inputSize=Math.max(1,this.placeholderText.length),this.$container=a('<div class="bootstrap-tagsinput"></div>'),this.$input=a('<input size="'+this.inputSize+'" type="text" placeholder="'+this.placeholderText+'"/>').appendTo(this.$container),this.$element.after(this.$container),this.build(c)}function c(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(a){return a[c]}}}function d(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(){return c}}}function e(a){return a?h.text(a).html():""}function f(a){var b=0;if(document.selection){a.focus();var c=document.selection.createRange();c.moveStart("character",-a.value.length),b=c.text.length}else(a.selectionStart||"0"==a.selectionStart)&&(b=a.selectionStart);return b}var g={tagClass:function(){return"label label-default"},itemValue:function(a){return a?a.toString():a},itemText:function(a){return this.itemValue(a)},freeInput:!0,maxTags:void 0,confirmKeys:[13],onTagExists:function(a,b){b.hide().fadeIn()}};b.prototype={constructor:b,add:function(b,c){var d=this;if(!(d.options.maxTags&&d.itemsArray.length>=d.options.maxTags||b!==!1&&!b)){if("object"==typeof b&&!d.objectItems)throw"Can't add objects when itemValue option is not set";if(!b.toString().match(/^\s*$/)){if(d.isSelect&&!d.multiple&&d.itemsArray.length>0&&d.remove(d.itemsArray[0]),"string"==typeof b&&"INPUT"===this.$element[0].tagName){var f=b.split(",");if(f.length>1){for(var g=0;g<f.length;g++)this.add(f[g],!0);return c||d.pushVal(),void 0}}var h=d.options.itemValue(b),i=d.options.itemText(b),j=d.options.tagClass(b),k=a.grep(d.itemsArray,function(a){return d.options.itemValue(a)===h})[0];if(k){if(d.options.onTagExists){var l=a(".tag",d.$container).filter(function(){return a(this).data("item")===k});d.options.onTagExists(b,l)}}else{d.itemsArray.push(b);var m=a('<span class="tag '+e(j)+'">'+e(i)+'<span data-role="remove"></span></span>');if(m.data("item",b),d.findInputWrapper().before(m),m.after(" "),d.isSelect&&!a('option[value="'+escape(h)+'"]',d.$element)[0]){var n=a("<option selected>"+e(i)+"</option>");n.data("item",b),n.attr("value",h),d.$element.append(n)}c||d.pushVal(),d.options.maxTags===d.itemsArray.length&&d.$container.addClass("bootstrap-tagsinput-max"),d.$element.trigger(a.Event("itemAdded",{item:b}))}}}},remove:function(b,c){var d=this;d.objectItems&&(b="object"==typeof b?a.grep(d.itemsArray,function(a){return d.options.itemValue(a)==d.options.itemValue(b)})[0]:a.grep(d.itemsArray,function(a){return d.options.itemValue(a)==b})[0]),b&&(a(".tag",d.$container).filter(function(){return a(this).data("item")===b}).remove(),a("option",d.$element).filter(function(){return a(this).data("item")===b}).remove(),d.itemsArray.splice(a.inArray(b,d.itemsArray),1)),c||d.pushVal(),d.options.maxTags>d.itemsArray.length&&d.$container.removeClass("bootstrap-tagsinput-max"),d.$element.trigger(a.Event("itemRemoved",{item:b}))},removeAll:function(){var b=this;for(a(".tag",b.$container).remove(),a("option",b.$element).remove();b.itemsArray.length>0;)b.itemsArray.pop();b.pushVal(),b.options.maxTags&&!this.isEnabled()&&this.enable()},refresh:function(){var b=this;a(".tag",b.$container).each(function(){var c=a(this),d=c.data("item"),f=b.options.itemValue(d),g=b.options.itemText(d),h=b.options.tagClass(d);if(c.attr("class",null),c.addClass("tag "+e(h)),c.contents().filter(function(){return 3==this.nodeType})[0].nodeValue=e(g),b.isSelect){var i=a("option",b.$element).filter(function(){return a(this).data("item")===d});i.attr("value",f)}})},items:function(){return this.itemsArray},pushVal:function(){var b=this,c=a.map(b.items(),function(a){return b.options.itemValue(a).toString()});b.$element.val(c,!0).trigger("change")},build:function(b){var e=this;e.options=a.extend({},g,b);var h=e.options.typeahead||{};e.objectItems&&(e.options.freeInput=!1),c(e.options,"itemValue"),c(e.options,"itemText"),c(e.options,"tagClass"),e.options.source&&(h.source=e.options.source),h.source&&a.fn.typeahead&&(d(h,"source"),e.$input.typeahead({source:function(b,c){function d(a){for(var b=[],d=0;d<a.length;d++){var g=e.options.itemText(a[d]);f[g]=a[d],b.push(g)}c(b)}this.map={};var f=this.map,g=h.source(b);a.isFunction(g.success)?g.success(d):a.when(g).then(d)},updater:function(a){e.add(this.map[a])},matcher:function(a){return-1!==a.toLowerCase().indexOf(this.query.trim().toLowerCase())},sorter:function(a){return a.sort()},highlighter:function(a){var b=new RegExp("("+this.query+")","gi");return a.replace(b,"<strong>$1</strong>")}})),e.$container.on("click",a.proxy(function(){e.$input.focus()},e)),e.$container.on("keydown","input",a.proxy(function(b){var c=a(b.target),d=e.findInputWrapper();switch(b.which){case 8:if(0===f(c[0])){var g=d.prev();g&&e.remove(g.data("item"))}break;case 46:if(0===f(c[0])){var h=d.next();h&&e.remove(h.data("item"))}break;case 37:var i=d.prev();0===c.val().length&&i[0]&&(i.before(d),c.focus());break;case 39:var j=d.next();0===c.val().length&&j[0]&&(j.after(d),c.focus());break;default:e.options.freeInput&&a.inArray(b.which,e.options.confirmKeys)>=0&&(e.add(c.val()),c.val(""),b.preventDefault())}c.attr("size",Math.max(this.inputSize,c.val().length))},e)),e.$container.on("click","[data-role=remove]",a.proxy(function(b){e.remove(a(b.target).closest(".tag").data("item"))},e)),e.options.itemValue===g.itemValue&&("INPUT"===e.$element[0].tagName?e.add(e.$element.val()):a("option",e.$element).each(function(){e.add(a(this).attr("value"),!0)}))},destroy:function(){var a=this;a.$container.off("keypress","input"),a.$container.off("click","[role=remove]"),a.$container.remove(),a.$element.removeData("tagsinput"),a.$element.show()},focus:function(){this.$input.focus()},input:function(){return this.$input},findInputWrapper:function(){for(var b=this.$input[0],c=this.$container[0];b&&b.parentNode!==c;)b=b.parentNode;return a(b)}},a.fn.tagsinput=function(c,d){var e=[];return this.each(function(){var f=a(this).data("tagsinput");if(f){var g=f[c](d);void 0!==g&&e.push(g)}else f=new b(this,c),a(this).data("tagsinput",f),e.push(f),"SELECT"===this.tagName&&a("option",a(this)).attr("selected","selected"),a(this).val(a(this).val())}),"string"==typeof c?e.length>1?e:e[0]:e},a.fn.tagsinput.Constructor=b;var h=a("<div />");a(function(){a("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()})}(window.jQuery);



/* Parsley dist/parsley.min.js build version 1.2.2 http://parsleyjs.org */
!function(d){var h=function(a){this.messages={defaultMessage:"This value seems to be invalid.",type:{email:"This value should be a valid email.",url:"This value should be a valid url.",urlstrict:"This value should be a valid url.",number:"This value should be a valid number.",digits:"This value should be digits.",dateIso:"This value should be a valid date (YYYY-MM-DD).",alphanum:"This value should be alphanumeric.",phone:"This value should be a valid phone number."},notnull:"This value should not be null.",
notblank:"This value should not be blank.",required:"This value is required.",regexp:"This value seems to be invalid.",min:"This value should be greater than or equal to %s.",max:"This value should be lower than or equal to %s.",range:"This value should be between %s and %s.",minlength:"This value is too short. It should have %s characters or more.",maxlength:"This value is too long. It should have %s characters or less.",rangelength:"This value length is invalid. It should be between %s and %s characters long.",
mincheck:"You must select at least %s choices.",maxcheck:"You must select %s choices or less.",rangecheck:"You must select between %s and %s choices.",equalto:"This value should be the same."};this.init(a)};h.prototype={constructor:h,validators:{notnull:function(){return{validate:function(a){return 0<a.length},priority:2}},notblank:function(){return{validate:function(a){return"string"===typeof a&&""!==a.replace(/^\s+/g,"").replace(/\s+$/g,"")},priority:2}},required:function(){var a=this;return{validate:function(b){if("object"===
typeof b){for(var c in b)if(a.required().validate(b[c]))return!0;return!1}return a.notnull().validate(b)&&a.notblank().validate(b)},priority:512}},type:function(){return{validate:function(a,b){var c;switch(b){case "number":c=/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;break;case "digits":c=/^\d+$/;break;case "alphanum":c=/^\w+$/;break;case "email":c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
break;case "url":a=/(https?|s?ftp|git)/i.test(a)?a:"http://"+a;case "urlstrict":c=/^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
break;case "dateIso":c=/^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;break;case "phone":c=/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;break;default:return!1}return""!==a?c.test(a):!1},priority:256}},regexp:function(){return{validate:function(a,b,c){return RegExp(b,c.options.regexpFlag||"").test(a)},priority:64}},minlength:function(){return{validate:function(a,b){return a.length>=b},priority:32}},maxlength:function(){return{validate:function(a,
b){return a.length<=b},priority:32}},rangelength:function(){var a=this;return{validate:function(b,c){return a.minlength().validate(b,c[0])&&a.maxlength().validate(b,c[1])},priority:32}},min:function(){return{validate:function(a,b){return Number(a)>=b},priority:32}},max:function(){return{validate:function(a,b){return Number(a)<=b},priority:32}},range:function(){var a=this;return{validate:function(b,c){return a.min().validate(b,c[0])&&a.max().validate(b,c[1])},priority:32}},equalto:function(){return{validate:function(a,
b,c){c.options.validateIfUnchanged=!0;return a===d(b).val()},priority:64}},remote:function(){return{validate:function(a,b,c){var e={},f={};e[c.$element.attr("name")]=a;"undefined"!==typeof c.options.remoteDatatype&&(f={dataType:c.options.remoteDatatype});var g=function(a,b){"undefined"!==typeof b&&("undefined"!==typeof c.Validator.messages.remote&&b!==c.Validator.messages.remote)&&d(c.UI.ulError+" .remote").remove();if(!1===a)c.options.listeners.onFieldError(c.element,c.constraints,c);else!0===a&&
!1===c.options.listeners.onFieldSuccess(c.element,c.constraints,c)&&(a=!1);c.updtConstraint({name:"remote",valid:a},b);c.manageValidationResult()},k=function(a){if("object"===typeof a)return a;try{a=d.parseJSON(a)}catch(b){}return a},l=function(a){return"object"===typeof a&&null!==a?"undefined"!==typeof a.error?a.error:"undefined"!==typeof a.message?a.message:null:null};d.ajax(d.extend({},{url:b,data:e,type:c.options.remoteMethod||"GET",success:function(a){a=k(a);g(1===a||!0===a||"object"===typeof a&&
null!==a&&"undefined"!==typeof a.success,l(a))},error:function(a){a=k(a);g(!1,l(a))}},f));return null},priority:64}},mincheck:function(){var a=this;return{validate:function(b,c){return a.minlength().validate(b,c)},priority:32}},maxcheck:function(){var a=this;return{validate:function(b,c){return a.maxlength().validate(b,c)},priority:32}},rangecheck:function(){var a=this;return{validate:function(b,c){return a.rangelength().validate(b,c)},priority:32}}},init:function(a){var b=a.validators;a=a.messages;
for(var c in b)this.addValidator(c,b[c]);for(c in a)this.addMessage(c,a[c])},formatMesssage:function(a,b){if("object"===typeof b){for(var c in b)a=this.formatMesssage(a,b[c]);return a}return"string"===typeof a?a.replace(/%s/i,b):""},addValidator:function(a,b){if("undefined"===typeof b().validate)throw Error("Validator `"+a+"` must have a validate method. See more here: http://parsleyjs.org/documentation.html#javascript-general");"undefined"===typeof b().priority&&(b={validate:b().validate,priority:32},
window.console&&window.console.warn&&window.console.warn("Validator `"+a+"` should have a priority. Default priority 32 given"));this.validators[a]=b},addMessage:function(a,b,c){if("undefined"!==typeof c&&!0===c)this.messages.type[a]=b;else if("type"===a)for(var d in b)this.messages.type[d]=b[d];else this.messages[a]=b}};var n=function(a){this.init(a)};n.prototype={constructor:n,init:function(a){this.ParsleyInstance=a;this.hash=a.hash;this.options=this.ParsleyInstance.options;this.errorClassHandler=
this.options.errors.classHandler(this.ParsleyInstance.element,this.ParsleyInstance.isRadioOrCheckbox)||this.ParsleyInstance.$element;this.ulErrorManagement()},ulErrorManagement:function(){this.ulError="#"+this.hash;this.ulTemplate=d(this.options.errors.errorsWrapper).attr("id",this.hash).addClass("parsley-error-list")},removeError:function(a){a=this.ulError+" ."+a;var b=this;this.options.animate?d(a).fadeOut(this.options.animateDuration,function(){d(this).remove();b.ulError&&0===d(b.ulError).children().length&&
b.removeErrors()}):d(a).remove()},addError:function(a){for(var b in a){var c=d(this.options.errors.errorElem).addClass(b);d(this.ulError).append(this.options.animate?d(c).html(a[b]).hide().fadeIn(this.options.animateDuration):d(c).html(a[b]))}},removeErrors:function(){this.options.animate?d(this.ulError).fadeOut(this.options.animateDuration,function(){d(this).remove()}):d(this.ulError).remove()},reset:function(){this.ParsleyInstance.valid=null;this.removeErrors();this.ParsleyInstance.validatedOnce=
!1;this.errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);for(var a in this.constraints)this.constraints[a].valid=null;return this},manageError:function(a){d(this.ulError).length||this.manageErrorContainer();if(!("required"===a.name&&null!==this.ParsleyInstance.getVal()&&0<this.ParsleyInstance.getVal().length))if(this.ParsleyInstance.isRequired&&"required"!==a.name&&(null===this.ParsleyInstance.getVal()||0===this.ParsleyInstance.getVal().length))this.removeError(a.name);
else{var b=a.name,c=!1!==this.options.errorMessage?"custom-error-message":b,e={};a=!1!==this.options.errorMessage?this.options.errorMessage:"type"===a.name?this.ParsleyInstance.Validator.messages[b][a.requirements]:"undefined"===typeof this.ParsleyInstance.Validator.messages[b]?this.ParsleyInstance.Validator.messages.defaultMessage:this.ParsleyInstance.Validator.formatMesssage(this.ParsleyInstance.Validator.messages[b],a.requirements);d(this.ulError+" ."+c).length||(e[c]=a,this.addError(e))}},manageErrorContainer:function(){var a=
this.options.errorContainer||this.options.errors.container(this.ParsleyInstance.element,this.ParsleyInstance.isRadioOrCheckbox),b=this.options.animate?this.ulTemplate.css("display",""):this.ulTemplate;"undefined"!==typeof a?d(a).append(b):!this.ParsleyInstance.isRadioOrCheckbox?this.ParsleyInstance.$element.after(b):this.ParsleyInstance.$element.parent().after(b)}};var m=function(a,b,c){this.options=b;if("ParsleyFieldMultiple"===c)return this;this.init(a,c||"ParsleyField")};m.prototype={constructor:m,
init:function(a,b){this.type=b;this.valid=!0;this.element=a;this.validatedOnce=!1;this.$element=d(a);this.val=this.$element.val();this.Validator=new h(this.options);this.isRequired=!1;this.constraints={};"undefined"===typeof this.isRadioOrCheckbox&&(this.isRadioOrCheckbox=!1,this.hash=this.generateHash());this.UI=new n(this);this.bindHtml5Constraints();this.addConstraints();this.hasConstraints()&&this.bindValidationEvents()},setParent:function(a){this.$parent=d(a)},getParent:function(){return this.$parent},
bindHtml5Constraints:function(){if(this.$element.hasClass("required")||this.$element.attr("required"))this.options.required=!0;var a=this.$element.attr("type");"undefined"!==typeof a&&RegExp(a,"i").test("email url number range tel")&&(this.options.type="tel"===a?"phone":a,RegExp(this.options.type,"i").test("number range")&&(this.options.type="number","undefined"!==typeof this.$element.attr("min")&&this.$element.attr("min").length&&(this.options.min=this.$element.attr("min")),"undefined"!==typeof this.$element.attr("max")&&
this.$element.attr("max").length&&(this.options.max=this.$element.attr("max"))));"string"===typeof this.$element.attr("pattern")&&this.$element.attr("pattern").length&&(this.options.regexp=this.$element.attr("pattern"))},addConstraints:function(){for(var a in this.options){var b={};b[a]=this.options[a];this.addConstraint(b,!0,!1)}},addConstraint:function(a,b,c){for(var d in a)d=d.toLowerCase(),"function"===typeof this.Validator.validators[d]&&(this.constraints[d]={name:d,requirements:a[d],valid:null},
"required"===d&&(this.isRequired=!0),this.addCustomConstraintMessage(d));"undefined"===typeof b&&this.bindValidationEvents()},updateConstraint:function(a,b){for(var c in a)this.updtConstraint({name:c,requirements:a[c],valid:null},b)},updtConstraint:function(a,b){this.constraints[a.name]=d.extend(!0,this.constraints[a.name],a);"string"===typeof b&&(this.Validator.messages[a.name]=b);this.bindValidationEvents()},removeConstraint:function(a){a=a.toLowerCase();delete this.constraints[a];"required"===
a&&(this.isRequired=!1);this.hasConstraints()?this.bindValidationEvents():this.UI.reset()},addCustomConstraintMessage:function(a){var b=a+("type"===a&&"undefined"!==typeof this.options[a]?this.options[a].charAt(0).toUpperCase()+this.options[a].substr(1):"")+"Message";"undefined"!==typeof this.options[b]&&this.Validator.addMessage("type"===a?this.options[a]:a,this.options[b],"type"===a)},bindValidationEvents:function(){this.valid=null;this.$element.addClass("parsley-validated");this.$element.off("."+
this.type);this.options.remote&&!/change/i.test(this.options.trigger)&&(this.options.trigger=!this.options.trigger?"change":" change");var a=(!this.options.trigger?"":this.options.trigger)+(/key/i.test(this.options.trigger)?"":" keyup");this.$element.is("select")&&(a+=/change/i.test(a)?"":" change");a=a.replace(/^\s+/g,"").replace(/\s+$/g,"");this.$element.on((a+" ").split(" ").join("."+this.type+" "),!1,d.proxy(this.eventValidation,this))},generateHash:function(){return"parsley-"+(Math.random()+
"").substring(2)},getHash:function(){return this.hash},getVal:function(){return"undefined"!==typeof this.$element.domApi(this.options.namespace).value?this.$element.domApi(this.options.namespace).value:this.$element.val()},eventValidation:function(a){var b=this.getVal();if("keyup"===a.type&&!/keyup/i.test(this.options.trigger)&&!this.validatedOnce||"change"===a.type&&!/change/i.test(this.options.trigger)&&!this.validatedOnce||!this.isRadioOrCheckbox&&this.getLength(b)<this.options.validationMinlength&&
!this.validatedOnce)return!0;this.validate()},getLength:function(a){return!a||!a.hasOwnProperty("length")?0:a.length},isValid:function(){return this.validate(!1)},hasConstraints:function(){for(var a in this.constraints)return!0;return!1},validate:function(a){var b=this.getVal(),c=null;if(!this.hasConstraints()||this.$element.is(this.options.excluded))return null;if(this.options.listeners.onFieldValidate(this.element,this)||""===b&&!this.isRequired)return this.UI.reset(),null;if(!this.needsValidation(b))return this.valid;
c=this.applyValidators();("undefined"!==typeof a?a:this.options.showErrors)&&this.manageValidationResult();return c},needsValidation:function(a){if(!this.options.validateIfUnchanged&&null!==this.valid&&this.val===a&&this.validatedOnce)return!1;this.val=a;return this.validatedOnce=!0},applyValidators:function(){var a=null,b;for(b in this.constraints){var c=this.Validator.validators[this.constraints[b].name]().validate(this.val,this.constraints[b].requirements,this);!1===c?(a=!1,this.constraints[b].valid=
a):!0===c&&(this.constraints[b].valid=!0,a=!1!==a)}if(!1===a)this.options.listeners.onFieldError(this.element,this.constraints,this);else!0===a&&!1===this.options.listeners.onFieldSuccess(this.element,this.constraints,this)&&(a=!1);return a},manageValidationResult:function(){var a=null,b=[],c;for(c in this.constraints)!1===this.constraints[c].valid?(b.push(this.constraints[c]),a=!1):!0===this.constraints[c].valid&&(this.UI.removeError(this.constraints[c].name),a=!1!==a);this.valid=a;if(!0===this.valid)return this.UI.removeErrors(),
this.UI.errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass),!0;if(!1===this.valid){if(!0===this.options.priorityEnabled){for(var a=0,e,f=0;f<b.length;f++)e=this.Validator.validators[b[f].name]().priority,e>a&&(c=b[f],a=e);this.UI.manageError(c)}else for(f=0;f<b.length;f++)this.UI.manageError(b[f]);this.UI.errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);return!1}this.UI.ulError&&0===d(this.ulError).children().length&&
this.UI.removeErrors();return a},addListener:function(a){for(var b in a)this.options.listeners[b]=a[b]},destroy:function(){this.$element.removeClass("parsley-validated");this.UI.reset();this.$element.off("."+this.type).removeData(this.type)}};var p=function(a,b,c){this.initMultiple(a,b);this.inherit(a,b);this.Validator=new h(b);this.init(a,c||"ParsleyFieldMultiple")};p.prototype={constructor:p,initMultiple:function(a,b){this.element=a;this.$element=d(a);this.group=b.group||!1;this.hash=this.getName();
this.siblings=this.group?'[parsley-group="'+this.group+'"]':'input[name="'+this.$element.attr("name")+'"]';this.isRadioOrCheckbox=!0;this.isRadio=this.$element.is("input[type=radio]");this.isCheckbox=this.$element.is("input[type=checkbox]");this.errorClassHandler=b.errors.classHandler(a,this.isRadioOrCheckbox)||this.$element.parent()},inherit:function(a,b){var c=new m(a,b,"ParsleyFieldMultiple"),d;for(d in c)"undefined"===typeof this[d]&&(this[d]=c[d])},getName:function(){if(this.group)return"parsley-"+
this.group;if("undefined"===typeof this.$element.attr("name"))throw"A radio / checkbox input must have a parsley-group attribute or a name to be Parsley validated !";return"parsley-"+this.$element.attr("name").replace(/(:|\.|\[|\])/g,"")},getVal:function(){if(this.isRadio)return d(this.siblings+":checked").val()||"";if(this.isCheckbox){var a=[];d(this.siblings+":checked").each(function(){a.push(d(this).val())});return a}},bindValidationEvents:function(){this.valid=null;this.$element.addClass("parsley-validated");
this.$element.off("."+this.type);var a=this,b=(!this.options.trigger?"":this.options.trigger)+(/change/i.test(this.options.trigger)?"":" change"),b=b.replace(/^\s+/g,"").replace(/\s+$/g,"");d(this.siblings).each(function(){d(this).on(b.split(" ").join("."+a.type+" "),!1,d.proxy(a.eventValidation,a))})}};var q=function(a,b,c){this.init(a,b,c||"parsleyForm")};q.prototype={constructor:q,init:function(a,b,c){this.type=c;this.items=[];this.$element=d(a);this.options=b;var e=this;this.$element.find(b.inputs).each(function(){e.addItem(this)});
this.$element.on("submit."+this.type,!1,d.proxy(this.validate,this))},addListener:function(a){for(var b in a)if(/Field/.test(b))for(var c=0;c<this.items.length;c++)this.items[c].addListener(a);else this.options.listeners[b]=a[b]},addItem:function(a){if(d(a).is(this.options.excluded))return!1;a=d(a).parsley(this.options);a.setParent(this);this.items.push(a)},removeItem:function(a){a=d(a).parsley();for(var b=0;b<this.items.length;b++)if(this.items[b].hash===a.hash)return this.items[b].destroy(),this.items.splice(b,
1),!0;return!1},validate:function(a){var b=!0;this.focusedField=!1;for(var c=0;c<this.items.length;c++)if("undefined"!==typeof this.items[c]&&!1===this.items[c].validate()&&(b=!1,!this.focusedField&&"first"===this.options.focus||"last"===this.options.focus))this.focusedField=this.items[c].$element;if(this.focusedField&&!b)if(0<this.options.scrollDuration){var e=this,c=this.focusedField.offset().top-d(window).height()/2;d("html, body").animate({scrollTop:c},this.options.scrollDuration,function(){e.focusedField.focus()})}else this.focusedField.focus();
a=this.options.listeners.onFormValidate(b,a,this);return"undefined"!==typeof a?a:b},isValid:function(){for(var a=0;a<this.items.length;a++)if(!1===this.items[a].isValid())return!1;return!0},removeErrors:function(){for(var a=0;a<this.items.length;a++)this.items[a].parsley("reset")},destroy:function(){for(var a=0;a<this.items.length;a++)this.items[a].destroy();this.$element.off("."+this.type).removeData(this.type)},reset:function(){for(var a=0;a<this.items.length;a++)this.items[a].UI.reset()}};d.fn.parsley=
function(a,b){function c(b,c){var e=d(b).data(c);if(!e){switch(c){case "parsleyForm":e=new q(b,f,"parsleyForm");break;case "parsleyField":e=new m(b,f,"parsleyField");break;case "parsleyFieldMultiple":e=new p(b,f,"parsleyFieldMultiple");break;default:return}d(b).data(c,e)}return"string"===typeof a&&"function"===typeof e[a]?(e=e[a].apply(e,k),"undefined"!==typeof e?e:d(b)):e}var e=d(this).data("parsleyNamespace")?d(this).data("parsleyNamespace"):"undefined"!==typeof a&&"undefined"!==typeof a.namespace?
a.namespace:d.fn.parsley.defaults.namespace,f=d.extend(!0,{},d.fn.parsley.defaults,"undefined"!==typeof window.ParsleyConfig?window.ParsleyConfig:{},a,this.domApi(e)),g=null,k=Array.prototype.slice.call(arguments,1);d(this).is("form")||"undefined"!==typeof d(this).domApi(e).bind?g=c(d(this),"parsleyForm"):d(this).is(f.inputs)&&(g=c(d(this),!d(this).is("input[type=radio], input[type=checkbox]")?"parsleyField":"parsleyFieldMultiple"));return"function"===typeof b?b():g};d(window).on("load",function(){d("[parsley-validate], [data-parsley-validate]").each(function(){d(this).parsley()})});
d.fn.domApi=function(a){var b,c={},e=RegExp("^"+a,"i");if("undefined"===typeof this[0])return{};for(var f in this[0].attributes)if(b=this[0].attributes[f],null!==b&&b.specified&&e.test(b.name)){var g=c,k=r(b.name.replace(a,"")),l;b=b.value;var h=void 0;try{l=b?"true"==b||("false"==b?!1:"null"==b?null:!isNaN(h=Number(b))?h:/^[\[\{]/.test(b)?d.parseJSON(b):b):b}catch(m){l=b}g[k]=l}return c};var r=function(a){return a.replace(/-+(.)?/g,function(a,c){return c?c.toUpperCase():""})};d.fn.parsley.defaults=
{namespace:"parsley-",inputs:"input, textarea, select",excluded:"input[type=hidden], input[type=file], :disabled",priorityEnabled:!0,trigger:!1,animate:!0,animateDuration:300,scrollDuration:500,focus:"first",validationMinlength:3,successClass:"parsley-success",errorClass:"parsley-error",errorMessage:!1,validators:{},showErrors:!0,messages:{},validateIfUnchanged:!1,errors:{classHandler:function(a,b){},container:function(a,b){},errorsWrapper:"<ul></ul>",errorElem:"<li></li>"},listeners:{onFieldValidate:function(a,
b){return!1},onFormValidate:function(a,b,c){},onFieldError:function(a,b,c){},onFieldSuccess:function(a,b,c){}}}}(window.jQuery||window.Zepto);



/*
colpick Color Picker
Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses

For usage and examples: colpick.com/plugin
 */

(function ($) {
	var colpick = function () {
		var
			tpl = '<div class="colpick"><div class="colpick_color"><div class="colpick_color_overlay1"><div class="colpick_color_overlay2"><div class="colpick_selector_outer"><div class="colpick_selector_inner"></div></div></div></div></div><div class="colpick_hue"><div class="colpick_hue_arrs"><div class="colpick_hue_larr"></div><div class="colpick_hue_rarr"></div></div></div><div class="colpick_new_color"></div><div class="colpick_current_color"></div><div class="colpick_hex_field"><div class="colpick_field_letter">#</div><input type="text" maxlength="6" size="6" /></div><div class="colpick_rgb_r colpick_field"><div class="colpick_field_letter">R</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_g colpick_field"><div class="colpick_field_letter">G</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_rgb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_h colpick_field"><div class="colpick_field_letter">H</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_s colpick_field"><div class="colpick_field_letter">S</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_hsb_b colpick_field"><div class="colpick_field_letter">B</div><input type="text" maxlength="3" size="3" /><div class="colpick_field_arrs"><div class="colpick_field_uarr"></div><div class="colpick_field_darr"></div></div></div><div class="colpick_submit"></div></div>',
			defaults = {
				showEvent: 'click',
				bornIn: "body",
				onShow: function () {},
				onBeforeShow: function(){},
				onHide: function () {},
				onChange: function () {},
				onSubmit: function () {},
				colorScheme: 'light',
				color: '2EB398',
				livePreview: true,
				flat: false,
				layout: 'full',
				submit: 1,
				submitText: '<i class="fa fa-magic"></i>',
				height: 156
			},
			//Fill the inputs of the plugin
			fillRGBFields = function  (hsb, cal) {
				var rgb = hsbToRgb(hsb);
				$(cal).data('colpick').fields
					.eq(1).val(rgb.r).end()
					.eq(2).val(rgb.g).end()
					.eq(3).val(rgb.b).end();
			},
			fillHSBFields = function  (hsb, cal) {
				$(cal).data('colpick').fields
					.eq(4).val(Math.round(hsb.h)).end()
					.eq(5).val(Math.round(hsb.s)).end()
					.eq(6).val(Math.round(hsb.b)).end();
			},
			fillHexFields = function (hsb, cal) {
				$(cal).data('colpick').fields.eq(0).val(hsbToHex(hsb));
			},
			//Set the round selector position
			setSelector = function (hsb, cal) {
				$(cal).data('colpick').selector.css('backgroundColor', '#' + hsbToHex({h: hsb.h, s: 100, b: 100}));
				$(cal).data('colpick').selectorIndic.css({
					left: parseInt($(cal).data('colpick').height * hsb.s/100, 10),
					top: parseInt($(cal).data('colpick').height * (100-hsb.b)/100, 10)
				});
			},
			//Set the hue selector position
			setHue = function (hsb, cal) {
				$(cal).data('colpick').hue.css('top', parseInt($(cal).data('colpick').height - $(cal).data('colpick').height * hsb.h/360, 10));
			},
			//Set current and new colors
			setCurrentColor = function (hsb, cal) {
				$(cal).data('colpick').currentColor.css('backgroundColor', '#' + hsbToHex(hsb));
			},
			setNewColor = function (hsb, cal) {
				$(cal).data('colpick').newColor.css('backgroundColor', '#' + hsbToHex(hsb));
			},
			//Called when the new color is changed
			change = function (ev) {
				var cal = $(this).parent().parent(), col;
				if (this.parentNode.className.indexOf('_hex') > 0) {
					cal.data('colpick').color = col = hexToHsb(fixHex(this.value));
					fillRGBFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				} else if (this.parentNode.className.indexOf('_hsb') > 0) {
					cal.data('colpick').color = col = fixHSB({
						h: parseInt(cal.data('colpick').fields.eq(4).val(), 10),
						s: parseInt(cal.data('colpick').fields.eq(5).val(), 10),
						b: parseInt(cal.data('colpick').fields.eq(6).val(), 10)
					});
					fillRGBFields(col, cal.get(0));
					fillHexFields(col, cal.get(0));
				} else {
					cal.data('colpick').color = col = rgbToHsb(fixRGB({
						r: parseInt(cal.data('colpick').fields.eq(1).val(), 10),
						g: parseInt(cal.data('colpick').fields.eq(2).val(), 10),
						b: parseInt(cal.data('colpick').fields.eq(3).val(), 10)
					}));
					fillHexFields(col, cal.get(0));
					fillHSBFields(col, cal.get(0));
				}
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
				cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col)]);
			},
			//Change style on blur and on focus of inputs
			blur = function (ev) {
				$(this).parent().removeClass('colpick_focus');
			},
			focus = function () {
				$(this).parent().parent().data('colpick').fields.parent().removeClass('colpick_focus');
				$(this).parent().addClass('colpick_focus');
			},
			//Increment/decrement arrows functions
			downIncrement = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var field = $(this).parent().find('input').focus();
				var current = {
					el: $(this).parent().addClass('colpick_slider'),
					max: this.parentNode.className.indexOf('_hsb_h') > 0 ? 360 : (this.parentNode.className.indexOf('_hsb') > 0 ? 100 : 255),
					y: ev.pageY,
					field: field,
					val: parseInt(field.val(), 10),
					preview: $(this).parent().parent().data('colpick').livePreview
				};
				$(document).mouseup(current, upIncrement);
				$(document).mousemove(current, moveIncrement);
			},
			moveIncrement = function (ev) {
				ev.data.field.val(Math.max(0, Math.min(ev.data.max, parseInt(ev.data.val - ev.pageY + ev.data.y, 10))));
				if (ev.data.preview) {
					change.apply(ev.data.field.get(0), [true]);
				}
				return false;
			},
			upIncrement = function (ev) {
				change.apply(ev.data.field.get(0), [true]);
				ev.data.el.removeClass('colpick_slider').find('input').focus();
				$(document).off('mouseup', upIncrement);
				$(document).off('mousemove', moveIncrement);
				return false;
			},
			//Hue slider functions
			downHue = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var current = {
					cal: $(this).parent(),
					y: $(this).offset().top
				};
				current.preview = current.cal.data('colpick').livePreview;
				$(document).mouseup(current, upHue);
				$(document).mousemove(current, moveHue);
				
				change.apply(
					current.cal.data('colpick')
					.fields.eq(4).val(parseInt(360*(current.cal.data('colpick').height - (ev.pageY - current.y))/current.cal.data('colpick').height, 10))
						.get(0),
					[current.preview]
				);
			},
			moveHue = function (ev) {
				change.apply(
					ev.data.cal.data('colpick')
					.fields.eq(4).val(parseInt(360*(ev.data.cal.data('colpick').height - Math.max(0,Math.min(ev.data.cal.data('colpick').height,(ev.pageY - ev.data.y))))/ev.data.cal.data('colpick').height, 10))
						.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upHue = function (ev) {
				fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				$(document).off('mouseup', upHue);
				$(document).off('mousemove', moveHue);
				return false;
			},
			//Color selector functions
			downSelector = function (ev) {
				ev.preventDefault ? ev.preventDefault() : ev.returnValue = false;
				var current = {
					cal: $(this).parent(),
					pos: $(this).offset()
				};
				current.preview = current.cal.data('colpick').livePreview;
				
				$(document).mouseup(current, upSelector);
				$(document).mousemove(current, moveSelector);
				
				change.apply(
					current.cal.data('colpick').fields
					.eq(6).val(parseInt(100*(current.cal.data('colpick').height - (ev.pageY - current.pos.top))/current.cal.data('colpick').height, 10)).end()
					.eq(5).val(parseInt(100*(ev.pageX - current.pos.left)/current.cal.data('colpick').height, 10))
					.get(0),
					[current.preview]
				);
			},
			moveSelector = function (ev) {
				change.apply(
					ev.data.cal.data('colpick').fields
					.eq(6).val(parseInt(100*(ev.data.cal.data('colpick').height - Math.max(0,Math.min(ev.data.cal.data('colpick').height,(ev.pageY - ev.data.pos.top))))/ev.data.cal.data('colpick').height, 10)).end()
					.eq(5).val(parseInt(100*(Math.max(0,Math.min(ev.data.cal.data('colpick').height,(ev.pageX - ev.data.pos.left))))/ev.data.cal.data('colpick').height, 10))
					.get(0),
					[ev.data.preview]
				);
				return false;
			},
			upSelector = function (ev) {
				fillRGBFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				fillHexFields(ev.data.cal.data('colpick').color, ev.data.cal.get(0));
				$(document).off('mouseup', upSelector);
				$(document).off('mousemove', moveSelector);
				return false;
			},
			//Submit button
			clickSubmit = function (ev) {
				var cal = $(this).parent();
				var col = cal.data('colpick').color;
				cal.data('colpick').origColor = col;
				setCurrentColor(col, cal.get(0));
				cal.data('colpick').onSubmit(col, hsbToHex(col), hsbToRgb(col), cal.data('colpick').el);
			},
			//Show/hide the color picker
			show = function (ev) {
				var cal = $('#' + $(this).data('colpickId'));
				cal.data('colpick').onBeforeShow.apply(this, [cal.get(0)]);
				var newBorn=$(cal.data('colpick').bornIn);
				var bornPos=newBorn.offset();
				var pos = $(this).offset();
				var top = newBorn.scrollTop()+pos.top + this.offsetHeight;
				var left = pos.left-bornPos.left;
				var viewPort = getViewport();
				if (left + 346 > viewPort.l + viewPort.w) {
					left -= 346;
				}
				cal.css({left: left + 'px', top: top + 'px'});
				if (cal.data('colpick').onShow.apply(this, [cal.get(0)]) != false) {
					cal.show();
				}
				//Hide when user clicks outside
				$('html').mousedown({cal:cal}, hide);
				cal.mousedown(function(ev){ev.stopPropagation();})
			},
			hide = function (ev) {
				if (ev.data.cal.data('colpick').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
					ev.data.cal.hide();
				}
				$('html').off('mousedown', hide);
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth)
				};
			},
			//Fix the values if the user enters a negative or high value
			fixHSB = function (hsb) {
				return {
					h: Math.min(360, Math.max(0, hsb.h)),
					s: Math.min(100, Math.max(0, hsb.s)),
					b: Math.min(100, Math.max(0, hsb.b))
				};
			}, 
			fixRGB = function (rgb) {
				return {
					r: Math.min(255, Math.max(0, rgb.r)),
					g: Math.min(255, Math.max(0, rgb.g)),
					b: Math.min(255, Math.max(0, rgb.b))
				};
			},
			fixHex = function (hex) {
				var len = 6 - hex.length;
				if (len > 0) {
					var o = [];
					for (var i=0; i<len; i++) {
						o.push('0');
					}
					o.push(hex);
					hex = o.join('');
				}
				return hex;
			},
			restoreOriginal = function () {
				var cal = $(this).parent();
				var col = cal.data('colpick').origColor;
				cal.data('colpick').color = col;
				fillRGBFields(col, cal.get(0));
				fillHexFields(col, cal.get(0));
				fillHSBFields(col, cal.get(0));
				setSelector(col, cal.get(0));
				setHue(col, cal.get(0));
				setNewColor(col, cal.get(0));
			};
		return {
			init: function (opt) {
				opt = $.extend({}, defaults, opt||{});
				//Set color
				if (typeof opt.color == 'string') {
					opt.color = hexToHsb(opt.color);
				} else if (opt.color.r != undefined && opt.color.g != undefined && opt.color.b != undefined) {
					opt.color = rgbToHsb(opt.color);
				} else if (opt.color.h != undefined && opt.color.s != undefined && opt.color.b != undefined) {
					opt.color = fixHSB(opt.color);
				} else {
					return this;
				}
				
				//For each selected DOM element
				return this.each(function () {
					//If the element does not have an ID
					if (!$(this).data('colpickId')) {
						var options = $.extend({}, opt);
						options.origColor = opt.color;
						//Generate and assign a random ID
						var id = 'collorpicker_' + parseInt(Math.random() * 1000);
						$(this).data('colpickId', id);
						//Set the tpl's ID and get the HTML
						var cal = $(tpl).attr('id', id);
						//Add class according to layout
						cal.addClass('colpick_'+options.layout+(options.submit?'':' colpick_'+options.layout+'_ns'));
						//Add class if the color scheme is not default
						if(options.colorScheme != 'light') {
							cal.addClass('colpick_'+options.colorScheme);
						}
						//Setup submit button
						cal.find('div.colpick_submit').html(options.submitText).click(clickSubmit);
						//Setup input fields
						options.fields = cal.find('input').change(change).blur(blur).focus(focus);
						cal.find('div.colpick_field_arrs').mousedown(downIncrement).end().find('div.colpick_current_color').click(restoreOriginal);
						//Setup hue selector
						options.selector = cal.find('div.colpick_color').mousedown(downSelector);
						options.selectorIndic = options.selector.find('div.colpick_selector_outer');
						//Store parts of the plugin
						options.el = this;
						options.hue = cal.find('div.colpick_hue_arrs');
						huebar = options.hue.parent();
						//Paint the hue bar
						var UA = navigator.userAgent.toLowerCase();
						var isIE = navigator.appName === 'Microsoft Internet Explorer';
						var IEver = isIE ? parseFloat( UA.match( /msie ([0-9]{1,}[\.0-9]{0,})/ )[1] ) : 0;
						var ngIE = ( isIE && IEver < 10 );
						var stops = ['#ff0000','#ff0080','#ff00ff','#8000ff','#0000ff','#0080ff','#00ffff','#00ff80','#00ff00','#80ff00','#ffff00','#ff8000','#ff0000'];
						if(ngIE) {
							var i, div;
							for(i=0; i<=11; i++) {
								div = $('<div></div>').attr('style','height:8.333333%; filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+stops[i]+', endColorstr='+stops[i+1]+'); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+stops[i]+', endColorstr='+stops[i+1]+')";');
								huebar.append(div);
							}
						} else {
							stopList = stops.join(',');
							huebar.attr('style','background:-webkit-linear-gradient(top center,'+stopList+'); background:-moz-linear-gradient(top center,'+stopList+'); background:linear-gradient(to bottom,'+stopList+'); ');
							huebar.css({'background':'linear-gradient(to bottom,'+stopList+')'});
							huebar.css({'background':'-moz-linear-gradient(top,'+stopList+')'});
						}
						cal.find('div.colpick_hue').mousedown(downHue);
						options.newColor = cal.find('div.colpick_new_color');
						options.currentColor = cal.find('div.colpick_current_color');
						//Store options and fill with default color
						cal.data('colpick', options);
						fillRGBFields(options.color, cal.get(0));
						fillHSBFields(options.color, cal.get(0));
						fillHexFields(options.color, cal.get(0));
						setHue(options.color, cal.get(0));
						setSelector(options.color, cal.get(0));
						setCurrentColor(options.color, cal.get(0));
						setNewColor(options.color, cal.get(0));
						//Append to body if flat=false, else show in place
						if (options.flat) {
							cal.appendTo(this).show();
							cal.addClass("colpick_flat").css({
								position: 'relative',
								display: 'block'
							});
						} else {
							//cal.appendTo(document.body);
							cal.appendTo(options.bornIn);
							$(this).on(options.showEvent, show);
							cal.css({
								position:'absolute'
							});
						}
					}
				});
			},
			//Shows the picker
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('colpickId')) {
						show.apply(this);
					}
				});
			},
			//Hides the picker
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('colpickId')) {
						$('#' + $(this).data('colpickId')).hide();
					}
				});
			},
			//Sets a color as new and current (default)
			setColor: function(col, setCurrent) {
				setCurrent = (typeof setCurrent === "undefined") ? 1 : setCurrent;
				if (typeof col == 'string') {
					col = hexToHsb(col);
				} else if (col.r != undefined && col.g != undefined && col.b != undefined) {
					col = rgbToHsb(col);
				} else if (col.h != undefined && col.s != undefined && col.b != undefined) {
					col = fixHSB(col);
				} else {
					return this;
				}
				return this.each(function(){
					if ($(this).data('colpickId')) {
						var cal = $('#' + $(this).data('colpickId'));
						cal.data('colpick').color = col;
						cal.data('colpick').origColor = col;
						fillRGBFields(col, cal.get(0));
						fillHSBFields(col, cal.get(0));
						fillHexFields(col, cal.get(0));
						setHue(col, cal.get(0));
						setSelector(col, cal.get(0));
						
						setNewColor(col, cal.get(0));
						cal.data('colpick').onChange.apply(cal.parent(), [col, hsbToHex(col), hsbToRgb(col), 1]);
						if(setCurrent) {
							setCurrentColor(col, cal.get(0));
						}
					}
				});
			}
		};
	}();
	//Color space convertions
	var hexToRgb = function (hex) {
		var hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
		return {r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF)};
	};
	var hexToHsb = function (hex) {
		return rgbToHsb(hexToRgb(hex));
	};
	var rgbToHsb = function (rgb) {
		var hsb = {h: 0, s: 0, b: 0};
		var min = Math.min(rgb.r, rgb.g, rgb.b);
		var max = Math.max(rgb.r, rgb.g, rgb.b);
		var delta = max - min;
		hsb.b = max;
		hsb.s = max != 0 ? 255 * delta / max : 0;
		if (hsb.s != 0) {
			if (rgb.r == max) hsb.h = (rgb.g - rgb.b) / delta;
			else if (rgb.g == max) hsb.h = 2 + (rgb.b - rgb.r) / delta;
			else hsb.h = 4 + (rgb.r - rgb.g) / delta;
		} else hsb.h = -1;
		hsb.h *= 60;
		if (hsb.h < 0) hsb.h += 360;
		hsb.s *= 100/255;
		hsb.b *= 100/255;
		return hsb;
	};
	var hsbToRgb = function (hsb) {
		var rgb = {};
		var h = Math.round(hsb.h);
		var s = Math.round(hsb.s*255/100);
		var v = Math.round(hsb.b*255/100);
		if(s == 0) {
			rgb.r = rgb.g = rgb.b = v;
		} else {
			var t1 = v;
			var t2 = (255-s)*v/255;
			var t3 = (t1-t2)*(h%60)/60;
			if(h==360) h = 0;
			if(h<60) {rgb.r=t1;	rgb.b=t2; rgb.g=t2+t3}
			else if(h<120) {rgb.g=t1; rgb.b=t2;	rgb.r=t1-t3}
			else if(h<180) {rgb.g=t1; rgb.r=t2;	rgb.b=t2+t3}
			else if(h<240) {rgb.b=t1; rgb.r=t2;	rgb.g=t1-t3}
			else if(h<300) {rgb.b=t1; rgb.g=t2;	rgb.r=t2+t3}
			else if(h<360) {rgb.r=t1; rgb.g=t2;	rgb.b=t1-t3}
			else {rgb.r=0; rgb.g=0;	rgb.b=0}
		}
		return {r:Math.round(rgb.r), g:Math.round(rgb.g), b:Math.round(rgb.b)};
	};
	var rgbToHex = function (rgb) {
		var hex = [
			rgb.r.toString(16),
			rgb.g.toString(16),
			rgb.b.toString(16)
		];
		$.each(hex, function (nr, val) {
			if (val.length == 1) {
				hex[nr] = '0' + val;
			}
		});
		return hex.join('');
	};
	var hsbToHex = function (hsb) {
		return rgbToHex(hsbToRgb(hsb));
	};
	
	$.fn.extend({
		colpick: colpick.init,
		colpickHide: colpick.hidePicker,
		colpickShow: colpick.showPicker,
		colpickSetColor: colpick.setColor
	});
	$.extend({
		colpickRgbToHex: rgbToHex,
		colpickRgbToHsb: rgbToHsb,
		colpickHsbToHex: hsbToHex,
		colpickHsbToRgb: hsbToRgb,
		colpickHexToHsb: hexToHsb,
		colpickHexToRgb: hexToRgb
	});
})(jQuery)

/**
 * bootstrap-colorpalette.js
 * (c) 2013~ Jiung Kang
 * Licensed under the Apache License, Version 2.0 (the "License");
 */

!(function($) {
  "use strict";
  var aaColor = [
    ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
    ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
    ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
    ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
    ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
    ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
    ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
    ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
  ];

  var createPaletteElement = function(element, _aaColor) {
    element.addClass('bootstrap-colorpalette');
    var aHTML = [];
    $.each(_aaColor, function(i, aColor){
      aHTML.push('<div>');
      $.each(aColor, function(i, sColor) {
        var sButton = ['<a href="javascript:void(0)"  class="btn-color" style="background-color:', sColor,
          '" data-value="', sColor,
          '" title="', sColor,
          '"></a>'].join('');
        aHTML.push(sButton);
      });
      aHTML.push('</div>');
    });
    element.html(aHTML.join(''));
  };

  var attachEvent = function(palette) {
    palette.element.on('click', function(e) {
      var welTarget = $(e.target),
          welBtn = welTarget.closest('.btn-color');

      if (!welBtn[0]) { return; }

      var value = welBtn.attr('data-value');
      palette.value = value;
      palette.element.trigger({
        type: 'selectColor',
        color: value,
        element: palette.element
      });
    });
  };

  var Palette = function(element, options) {
    this.element = element;
    createPaletteElement(element, options && options.colors || aaColor);
    attachEvent(this);
  };

  $.fn.extend({
    colorPalette : function(options) {
      this.each(function () {
        var $this = $(this),
            data = $this.data('colorpalette');
        if (!data) {
          $this.data('colorpalette', new Palette($this, options));
        }
      });
      return this;
    }
  });
})(jQuery);



/* ==========================================================
 * bootstrap-maxlength.js v1.4.2
 * 
 * Copyright (c) 2013 Maurizio Napoleoni; 
 *
 * Licensed under the terms of the MIT license.
 * See: https://github.com/mimo84/bootstrap-maxlength/blob/master/LICENSE
 * ========================================================== */
/*jslint browser:true*/
/*global  jQuery*/
(function ($) {
    "use strict";

    $.fn.extend({
        maxlength: function ( options, callback) {
		   
            var element=$(this), 
                defaults = {
                    alwaysShow: element.data("always-show") || false, // if true the indicator it's always shown.
				bornIn:  "body", // if true the indicator it's always shown.
                    threshold: element.data("threshold") || 10, // Represents how many chars left are needed to show up the counter
                    warningClass: "label label-success",
                    limitReachedClass: "label label-danger",
                    separator: element.data("separator") || ' / ',
                    preText: element.data("pre-text"),
                    postText: element.data("post-text"),
                    showMaxLength : true,
                    placement: element.data("position") || 'bottom-left',
                    showCharsTyped: true, // show the number of characters typed and not the number of characters remaining
                    validate: false, // if the browser doesn't support the maxlength attribute, attempt to type more than
                                                                        // the indicated chars, will be prevented.
                    utf8: false // counts using bytesize rather than length.  eg: '£' is counted as 2 characters.
                };

            if ($.isFunction(options) && !callback) {
                callback = options;
                options = {};
            }
            options = $.extend(defaults, options);
		  console.log(options.warningClass);
		 var documentBody = $(options.bornIn);
          /**
          * Return the length of the specified input.
          *
          * @param input
          * @return {number}
          */
            function inputLength(input) {
              var text = input.val();
              var matches = text.match(/\n/g);

              var breaks = 0;
              var currentLength = 0;

              if (options.utf8) {
                breaks = matches ? utf8Length(matches) : 0;
                currentLength = utf8Length(input.val()) + breaks;
              } else {
                breaks = matches ? matches.length : 0;
                currentLength = input.val().length + breaks;
              }
              return currentLength;
            }

          /**
          * Return the length of the specified input in UTF8 encoding.
          *
          * @param input
          * @return {number}
          */
            function utf8Length(string) {
              var utf8length = 0;
              for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                  utf8length++;
                }
                else if((c > 127) && (c < 2048)) {
                  utf8length = utf8length+2;
                }
                else {
                  utf8length = utf8length+3;
                }
              }
              return utf8length;
            }

          /**
           * Return true if the indicator should be showing up.
           *
           * @param input
           * @param thereshold
           * @param maxlength
           * @return {number}
           */
            function charsLeftThreshold(input, thereshold, maxlength) {
                var output = true;
                if (!options.alwaysShow && (maxlength - inputLength(input) > thereshold)) {
                    output = false;
                }
                return output;
            }

          /**
           * Returns how many chars are left to complete the fill up of the form.
           *
           * @param input
           * @param maxlength
           * @return {number}
           */
            function remainingChars(input, maxlength) {
                var length = maxlength - inputLength(input);
                return length;
            }

          /**
           * When called displays the indicator.
           *
           * @param indicator
           */
            function showRemaining(indicator) {
                indicator.css({
                    display: 'block'
                });
            }

          /**
           * When called shows the indicator.
           *
           * @param indicator
           */
            function hideRemaining(indicator) {
                indicator.css({
                    display: 'none'
                });
            }

           /**
           * This function updates the value in the indicator
           *  
           * @param maxLengthThisInput
           * @param typedChars
           * @return String
           */
            function updateMaxLengthHTML(maxLengthThisInput, typedChars) {
                var output = '';
                if (options.message){
                    output = options.message.replace('%charsTyped%', typedChars)
                            .replace('%charsRemaining%', maxLengthThisInput - typedChars)
                            .replace('%charsTotal%', maxLengthThisInput);
                } else {
                    if (options.preText) {
                        output += options.preText;
                    }
                    if (!options.showCharsTyped) {
                        output += maxLengthThisInput - typedChars;
                    }
                    else {
                        output += typedChars;
                    }
                    if (options.showMaxLength) {
                       output += options.separator + maxLengthThisInput;
                    }
                    if (options.postText) {
                        output += options.postText;
                    }
                }
                return output;
            }

          /**
           * This function updates the value of the counter in the indicator.
           * Wants as parameters: the number of remaining chars, the element currently managed,
           * the maxLength for the current input and the indicator generated for it.
           *
           * @param remaining
           * @param currentInput
           * @param maxLengthCurrentInput
           * @param maxLengthIndicator
           */
            function manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator) {
                maxLengthIndicator.html(updateMaxLengthHTML(maxLengthCurrentInput, (maxLengthCurrentInput - remaining)));

                if (remaining > 0) {
                    if (charsLeftThreshold(currentInput, options.threshold, maxLengthCurrentInput)) {
                        showRemaining(maxLengthIndicator.removeClass(options.limitReachedClass).addClass(options.warningClass));
                    } else {
                        hideRemaining(maxLengthIndicator);
                    }
                } else {
                    showRemaining(maxLengthIndicator.removeClass(options.warningClass).addClass(options.limitReachedClass));
                }
            }

          /**
           * This function returns an object containing all the 
           * informations about the position of the current input 
           *  
           *  @param currentInput
           *  @return object {bottom height left right top  width}
           *
           */
            function getPosition(currentInput) {
                var el = currentInput[0];
                return $.extend({}, (typeof el.getBoundingClientRect === 'function') ? el.getBoundingClientRect() : {
                    width: el.offsetWidth,
                    height: el.offsetHeight
                }, currentInput.offset());
            }

          /**
           *  This function places the maxLengthIndicator at the
           *  top / bottom / left / right of the currentInput
           *
           *  @param currentInput
           *  @param maxLengthIndicator
           *  @return null
           *
           */
            function place(currentInput, maxLengthIndicator) {
                var pos = getPosition(currentInput),
				documentBorn=documentBody.offset(),
                    inputOuter = currentInput.outerWidth(),
                    outerWidth = maxLengthIndicator.outerWidth(),
                    actualWidth = maxLengthIndicator.outerWidth(),
                    actualHeight = maxLengthIndicator.outerHeight(),
				top=documentBody.scrollTop()+pos.top,
				left=pos.left-documentBorn.left;
                switch (options.placement) {
                case 'bottom':
                    maxLengthIndicator.css({top: top + pos.height, left: left + pos.width / 2 - actualWidth / 2});
                    break;
                case 'top':
                    maxLengthIndicator.css({top: top - actualHeight, left: left + pos.width / 2 - actualWidth / 2});
                    break;
                case 'left':
                    maxLengthIndicator.css({top: top + pos.height / 2 - actualHeight / 2, left: left - actualWidth});
                    break;
                case 'right':
                    maxLengthIndicator.css({top: top + pos.height / 2 - actualHeight / 2, left: left + pos.width});
                    break;
                case 'bottom-right':
                    maxLengthIndicator.css({top: top + pos.height, left: left + inputOuter - actualWidth});
                    break;
                case 'top-right':
                    maxLengthIndicator.css({top: top - actualHeight, left: left + inputOuter - actualWidth});
                    break;
                case 'top-left':
                    maxLengthIndicator.css({top: top - actualHeight, left: left });
                    break;
                case 'bottom-left':
                    maxLengthIndicator.css({top: top + currentInput.outerHeight(), left: left });
                    break;
                case 'centered-right':
                    maxLengthIndicator.css({top: top + (actualHeight / 2), left: left + inputOuter - outerWidth - 3});
                    break;
                }
            }

            /**
             *  This function retrieves the maximum length of currentInput
             *
             *  @param currentInput
             *  @return {number}
             *
             */
            function getMaxLength(currentInput) {
                return currentInput.attr('maxlength') || currentInput.attr('size');
            }

            return this.each(function() {

              var currentInput = $(this),
                  maxLengthCurrentInput,
                  maxLengthIndicator;

              currentInput.focus(function () {
                    var maxlengthContent = updateMaxLengthHTML(maxLengthCurrentInput, '0');
                    maxLengthCurrentInput = getMaxLength(currentInput);

                    maxLengthIndicator = $('<span class="bootstrap-maxlength"></span>').css({
                        display: 'none',
                        position: 'absolute',
                        whiteSpace: 'nowrap',
                        zIndex: 1099
                    }).html(maxlengthContent);

                // We need to detect resizes if we are dealing with a textarea:
                if (currentInput.is('textarea')) {
                    currentInput.data('maxlenghtsizex', currentInput.outerWidth());
                    currentInput.data('maxlenghtsizey', currentInput.outerHeight());

                    currentInput.mouseup(function() {
                        if (currentInput.outerWidth() !== currentInput.data('maxlenghtsizex') || currentInput.outerHeight() !== currentInput.data('maxlenghtsizey')) {
                            place(currentInput, maxLengthIndicator);
                        }

                        currentInput.data('maxlenghtsizex', currentInput.outerWidth());
                        currentInput.data('maxlenghtsizey', currentInput.outerHeight());
                    });
                }

                documentBody.append(maxLengthIndicator);

                var remaining = remainingChars(currentInput, getMaxLength(currentInput));
                    manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);
                    place(currentInput, maxLengthIndicator);
              });

                currentInput.blur(function() {
                    maxLengthIndicator.remove();
                });

                currentInput.keyup(function(e) {
                    var remaining = remainingChars(currentInput, getMaxLength(currentInput)),
                        output = true,
                        keyCode = e.keyCode || e.which;
                    // Handle the tab press when the maxlength have been reached.
                    // if (remaining===0 && keyCode===9 && !e.shiftKey) {
                      // currentInput.attr('maxlength',getMaxLength(currentInput)+1)
                                  // .trigger({
                                    // type: 'keypress',
                                    // which: 9
                                  // }).attr('maxlength',getMaxLength(currentInput)-1);
                    // }
                    if (options.validate && remaining < 0) {
                        output = false;
                    } else {
                        manageRemainingVisibility(remaining, currentInput, maxLengthCurrentInput, maxLengthIndicator);
                    }
                    return output;
                });
            });
        }
    });
}(jQuery));


/*!
 * bootstrap-select v1.3.5
 * http://silviomoreto.github.io/bootstrap-select/
 *
 * Copyright 2013 bootstrap-select
 * Licensed under the MIT license
 */

!function($) {

    "use strict";

    $.expr[":"].icontains = function(obj, index, meta) {
        return $(obj).text().toUpperCase().indexOf(meta[3].toUpperCase()) >= 0;
    };

    var Selectpicker = function(element, options, e) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.$button = null;
        this.$menu = null;

        //Merge defaults, options and data-attributes to make our options
        this.options = $.extend({}, $.fn.selectpicker.defaults, this.$element.data(), typeof options == 'object' && options);

        //If we have no title yet, check the attribute 'title' (this is missed by jq as its not a data-attribute
        if (this.options.title == null) {
            this.options.title = this.$element.attr('title');
        }

        //Expose public methods
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.refresh = Selectpicker.prototype.refresh;
        this.setStyle = Selectpicker.prototype.setStyle;
        this.selectAll = Selectpicker.prototype.selectAll;
        this.deselectAll = Selectpicker.prototype.deselectAll;
        this.init();
    };

    Selectpicker.prototype = {

        constructor: Selectpicker,

        init: function() {
            this.$element.hide();
            this.multiple = this.$element.prop('multiple');
            var id = this.$element.attr('id');
            this.$newElement = this.createView();
            this.$element.after(this.$newElement);
            this.$menu = this.$newElement.find('> .dropdown-menu');
            this.$button = this.$newElement.find('> button');
            this.$searchbox = this.$newElement.find('input');

            if (id !== undefined) {
                var that = this;
                this.$button.attr('data-id', id);
                $('label[for="' + id + '"]').click(function(e) {
                    e.preventDefault();
                    that.$button.focus();
                });
            }

            this.checkDisabled();
            this.clickListener();
            this.liveSearchListener();
            this.render();
            this.liHeight();
            this.setStyle();
            this.setWidth();
            if (this.options.container) {
                this.selectPosition();
            }
            this.$menu.data('this', this);
            this.$newElement.data('this', this);
        },

        createDropdown: function() {
            //If we are multiple, then add the show-tick class by default
            var multiple = this.multiple ? ' show-tick' : '';
            var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
            var searchbox = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>' : '';
            var drop =
                "<div class='btn-group bootstrap-select" + multiple + "'>" +
                    "<button type='button' class='btn dropdown-toggle selectpicker' data-toggle='dropdown'>" +
                        "<div class='filter-option pull-left'></div>&nbsp;" +
                        "<div class='caret'></div>" +
                    "</button>" +
                    "<div class='dropdown-menu open'>" +
                        header +
                        searchbox +
                        "<ul class='dropdown-menu inner selectpicker' role='menu'>" +
                        "</ul>" +
                    "</div>" +
                "</div>";

            return $(drop);
        },

        createView: function() {
            var $drop = this.createDropdown();
            var $li = this.createLi();
            $drop.find('ul').append($li);
            return $drop;
        },

        reloadLi: function() {
            //Remove all children.
            this.destroyLi();
            //Re build
            var $li = this.createLi();
            this.$menu.find('ul').append( $li );
        },

        destroyLi: function() {
            this.$menu.find('li').remove();
        },

        createLi: function() {
            var that = this,
                _liA = [],
                _liHtml = '';

            this.$element.find('option').each(function() {
                var $this = $(this);

                //Get the class and text for the option
                var optionClass = $this.attr("class") || '';
                var inline = $this.attr("style") || '';
                var text =  $this.data('content') ? $this.data('content') : $this.html();
                var subtext = $this.data('subtext') !== undefined ? '<small class="muted text-muted">' + $this.data('subtext') + '</small>' : '';
                var icon = $this.data('icon') !== undefined ? '<i class="glyphicon '+$this.data('icon')+'"></i> ' : '';
                if (icon !== '' && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                    icon = '<span>'+icon+'</span>';
                }

                if (!$this.data('content')) {
                    //Prepend any icon and append any subtext to the main text.
                    text = icon + '<span class="text">' + text + subtext + '</span>';
                }

                if (that.options.hideDisabled && ($this.is(':disabled') || $this.parent().is(':disabled'))) {
                    _liA.push('<a style="min-height: 0; padding: 0"></a>');
                } else if ($this.parent().is('optgroup') && $this.data('divider') !== true) {
                    if ($this.index() == 0) {
                        //Get the opt group label
                        var label = $this.parent().attr('label');
                        var labelSubtext = $this.parent().data('subtext') !== undefined ? '<small class="muted text-muted">'+$this.parent().data('subtext')+'</small>' : '';
                        var labelIcon = $this.parent().data('icon') ? '<i class="'+$this.parent().data('icon')+'"></i> ' : '';
                        label = labelIcon + '<span class="text">' + label + labelSubtext + '</span>';

                        if ($this[0].index != 0) {
                            _liA.push(
                                '<div class="div-contain"><div class="divider"></div></div>'+
                                '<dt>'+label+'</dt>'+
                                that.createA(text, "opt " + optionClass, inline )
                                );
                        } else {
                            _liA.push(
                                '<dt>'+label+'</dt>'+
                                that.createA(text, "opt " + optionClass, inline ));
                        }
                    } else {
                         _liA.push(that.createA(text, "opt " + optionClass, inline ));
                    }
                } else if ($this.data('divider') === true) {
                    _liA.push('<div class="div-contain"><div class="divider"></div></div>');
                } else if ($(this).data('hidden') === true) {
                    _liA.push('');
                } else {
                    _liA.push(that.createA(text, optionClass, inline ));
                }
            });

            $.each(_liA, function(i, item) {
                _liHtml += "<li rel=" + i + ">" + item + "</li>";
            });

            //If we are not multiple, and we dont have a selected item, and we dont have a title, select the first element so something is set in the button
            if (!this.multiple && this.$element.find('option:selected').length==0 && !this.options.title) {
                this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
            }

            return $(_liHtml);
        },

        createA: function(text, classes, inline) {
            return '<a tabindex="0" class="'+classes+'" style="'+inline+'">' +
                 text +
                 '<i class="glyphicon glyphicon-ok icon-ok check-mark"></i>' +
                 '</a>';
        },

        render: function() {
            var that = this;

            //Update the LI to match the SELECT
            this.$element.find('option').each(function(index) {
               that.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled') );
               that.setSelected(index, $(this).is(':selected') );
            });

            this.tabIndex();

            var selectedItems = this.$element.find('option:selected').map(function() {
                var $this = $(this);
                var icon = $this.data('icon') && that.options.showIcon ? '<i class="glyphicon ' + $this.data('icon') + '"></i> ' : '';
                var subtext;
                if (that.options.showSubtext && $this.attr('data-subtext') && !that.multiple) {
                    subtext = ' <small class="muted text-muted">'+$this.data('subtext') +'</small>';
                } else {
                    subtext = '';
                }
                if ($this.data('content') && that.options.showContent) {
                    return $this.data('content');
                } else if ($this.attr('title') != undefined) {
                    return $this.attr('title');
                } else {
                    return icon + $this.html() + subtext;
                }
            }).toArray();

            //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
            //Convert all the values into a comma delimited string
            var title = !this.multiple ? selectedItems[0] : selectedItems.join(", ");

            //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
            if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
                var max = this.options.selectedTextFormat.split(">");
                var notDisabled = this.options.hideDisabled ? ':not([disabled])' : '';
                if ( (max.length>1 && selectedItems.length > max[1]) || (max.length==1 && selectedItems.length>=2)) {
                    title = this.options.countSelectedText.replace('{0}', selectedItems.length).replace('{1}', this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+notDisabled).length);
                }
             }

            //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
            if (!title) {
                title = this.options.title != undefined ? this.options.title : this.options.noneSelectedText;
            }

            this.$newElement.find('.filter-option').html(title);
        },

        setStyle: function(style, status) {
            if (this.$element.attr('class')) {
                this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device/gi, ''));
            }

            var buttonClass = style ? style : this.options.style;

            if (status == 'add') {
                this.$button.addClass(buttonClass);
            } else if (status == 'remove') {
                this.$button.removeClass(buttonClass);
            } else {
                this.$button.removeClass(this.options.style);
                this.$button.addClass(buttonClass);
            }
        },

        liHeight: function() {
            var selectClone = this.$newElement.clone();
            selectClone.appendTo('body');
            var $menuClone = selectClone.addClass('open').find('> .dropdown-menu');
            var liHeight = $menuClone.find('li > a').outerHeight();
            var headerHeight = this.options.header ? $menuClone.find('.popover-title').outerHeight() : 0;
            var searchHeight = this.options.liveSearch ? $menuClone.find('.bootstrap-select-searchbox').outerHeight() : 0;
            selectClone.remove();
            this.$newElement.data('liHeight', liHeight).data('headerHeight', headerHeight).data('searchHeight', searchHeight);
        },

        setSize: function() {
            var that = this,
                menu = this.$menu,
                menuInner = menu.find('.inner'),
                selectHeight = this.$newElement.outerHeight(),
                liHeight = this.$newElement.data('liHeight'),
                headerHeight = this.$newElement.data('headerHeight'),
                searchHeight = this.$newElement.data('searchHeight'),
                divHeight = menu.find('li .divider').outerHeight(true),
                menuPadding = parseInt(menu.css('padding-top')) +
                              parseInt(menu.css('padding-bottom')) +
                              parseInt(menu.css('border-top-width')) +
                              parseInt(menu.css('border-bottom-width')),
                notDisabled = this.options.hideDisabled ? ':not(.disabled)' : '',
                $window = $(window),
                menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2,
                menuHeight,
                selectOffsetTop,
                selectOffsetBot,
                posVert = function() {
                    selectOffsetTop = that.$newElement.offset().top - $window.scrollTop();
                    selectOffsetBot = $window.height() - selectOffsetTop - selectHeight;
                };
                posVert();
                if (this.options.header) menu.css('padding-top', 0);

            if (this.options.size == 'auto') {
                var getSize = function() {
                    var minHeight;
                    posVert();
                    menuHeight = selectOffsetBot - menuExtras;
                    that.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && (menuHeight - menuExtras) < menu.height() && that.options.dropupAuto);
                    if (that.$newElement.hasClass('dropup')) {
                        menuHeight = selectOffsetTop - menuExtras;
                    }
                    if ((menu.find('li').length + menu.find('dt').length) > 3) {
                        minHeight = liHeight*3 + menuExtras - 2;
                    } else {
                        minHeight = 0;
                    }
                    menu.css({'max-height' : menuHeight + 'px', 'overflow' : 'hidden', 'min-height' : minHeight + 'px'});
                    menuInner.css({'max-height' : menuHeight - headerHeight - searchHeight- menuPadding + 'px', 'overflow-y' : 'auto', 'min-height' : minHeight - menuPadding + 'px'});
                };
                getSize();
                $(window).resize(getSize);
                $(window).scroll(getSize);
            } else if (this.options.size && this.options.size != 'auto' && menu.find('li'+notDisabled).length > this.options.size) {
                var optIndex = menu.find("li"+notDisabled+" > *").filter(':not(.div-contain)').slice(0,this.options.size).last().parent().index();
                var divLength = menu.find("li").slice(0,optIndex + 1).find('.div-contain').length;
                menuHeight = liHeight*this.options.size + divLength*divHeight + menuPadding;
                this.$newElement.toggleClass('dropup', (selectOffsetTop > selectOffsetBot) && menuHeight < menu.height() && this.options.dropupAuto);
                menu.css({'max-height' : menuHeight + headerHeight + searchHeight + 'px', 'overflow' : 'hidden'});
                menuInner.css({'max-height' : menuHeight - menuPadding + 'px', 'overflow-y' : 'auto'});
            }
        },

        setWidth: function() {
            if (this.options.width == 'auto') {
                this.$menu.css('min-width', '0');

                // Get correct width if element hidden
                var selectClone = this.$newElement.clone().appendTo('body');
                var ulWidth = selectClone.find('> .dropdown-menu').css('width');
                selectClone.remove();

                this.$newElement.css('width', ulWidth);
            } else if (this.options.width == 'fit') {
                // Remove inline min-width so width can be changed from 'auto'
                this.$menu.css('min-width', '');
                this.$newElement.css('width', '').addClass('fit-width');
            } else if (this.options.width) {
                // Remove inline min-width so width can be changed from 'auto'
                this.$menu.css('min-width', '');
                this.$newElement.css('width', this.options.width);
            } else {
                // Remove inline min-width/width so width can be changed
                this.$menu.css('min-width', '');
                this.$newElement.css('width', '');
            }
            // Remove fit-width class if width is changed programmatically
            if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
                this.$newElement.removeClass('fit-width');
            }
        },

        selectPosition: function() {
            var that = this,
                drop = "<div />",
                $drop = $(drop),
                pos,
                actualHeight,
                getPlacement = function($element) {
                    $drop.addClass($element.attr('class')).toggleClass('dropup', $element.hasClass('dropup'));
                    pos = $element.offset();
                    actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;
                    $drop.css({'top' : pos.top + actualHeight, 'left' : pos.left, 'width' : $element[0].offsetWidth, 'position' : 'absolute'});
                };
            this.$newElement.on('click', function() {
                getPlacement($(this));
                $drop.appendTo(that.options.container);
                $drop.toggleClass('open', !$(this).hasClass('open'));
                $drop.append(that.$menu);
            });
            $(window).resize(function() {
                getPlacement(that.$newElement);
            });
            $(window).on('scroll', function() {
                getPlacement(that.$newElement);
            });
            $('html').on('click', function(e) {
                if ($(e.target).closest(that.$newElement).length < 1) {
                    $drop.removeClass('open');
                }
            });
        },

        mobile: function() {
            this.$element.addClass('mobile-device').appendTo(this.$newElement);
            if (this.options.container) this.$menu.hide();
        },

        refresh: function() {
            this.reloadLi();
            this.render();
            this.setWidth();
            this.setStyle();
            this.checkDisabled();
            this.liHeight();
        },
        
        update: function() {
            this.reloadLi();
            this.setWidth();
            this.setStyle();
            this.checkDisabled();
            this.liHeight();
        },

        setSelected: function(index, selected) {
            this.$menu.find('li').eq(index).toggleClass('selected', selected);
        },

        setDisabled: function(index, disabled) {
            if (disabled) {
                this.$menu.find('li').eq(index).addClass('disabled').find('a').attr('href','#').attr('tabindex',-1);
            } else {
                this.$menu.find('li').eq(index).removeClass('disabled').find('a').removeAttr('href').attr('tabindex',0);
            }
        },

        isDisabled: function() {
            return this.$element.is(':disabled');
        },

        checkDisabled: function() {
            var that = this;

            if (this.isDisabled()) {
                this.$button.addClass('disabled').attr('tabindex', -1);
            } else {
                if (this.$button.hasClass('disabled')) {
                    this.$button.removeClass('disabled');
                }

                if (this.$button.attr('tabindex') == -1) {
                    if (!this.$element.data('tabindex')) this.$button.removeAttr('tabindex');
                }
            }

            this.$button.click(function() {
                return !that.isDisabled();
            });
        },

        tabIndex: function() {
            if (this.$element.is('[tabindex]')) {
                this.$element.data('tabindex', this.$element.attr("tabindex"));
                this.$button.attr('tabindex', this.$element.data('tabindex'));
            }
        },

        clickListener: function() {
            var that = this;

            $('body').on('touchstart.dropdown', '.dropdown-menu', function(e) {
                e.stopPropagation();
            });

            this.$newElement.on('click', function() {
                that.setSize();
            });

            this.$menu.on('click', 'li a', function(e) {
                var clickedIndex = $(this).parent().index(),
                    prevValue = that.$element.val();

                //Dont close on multi choice menu
                if (that.multiple) {
                    e.stopPropagation();
                }

                e.preventDefault();

                //Dont run if we have been disabled
                if (!that.isDisabled() && !$(this).parent().hasClass('disabled')) {
                    var $options = that.$element.find('option');
                    var $option = $options.eq(clickedIndex);

                    //Deselect all others if not multi select box
                    if (!that.multiple) {
                        $options.prop('selected', false);
                        $option.prop('selected', true);
                    }
                    //Else toggle the one we have chosen if we are multi select.
                    else {
                        var state = $option.prop('selected');

                        $option.prop('selected', !state);
                    }

                    that.$button.focus();

                    // Trigger select 'change'
                    if (prevValue != that.$element.val()) {
                        that.$element.change();
                    }
                }
            });

            this.$menu.on('click', 'li.disabled a, li dt, li .div-contain, h3.popover-title', function(e) {
                if (e.target == this) {
                    e.preventDefault();
                    e.stopPropagation();
                    that.$button.focus();
                }
            });

            this.$searchbox.on('click', function(e) {
                e.stopPropagation();
            });

            this.$element.change(function() {
                that.render();
            });
        },

        liveSearchListener: function() {
            var that = this;

            this.$newElement.on('click.dropdown.data-api', function(){
                if(that.options.liveSearch) {
                    setTimeout(function() {
                        that.$searchbox.focus();
                    }, 10);
                }
            });

            this.$searchbox.on('keyup', function(e) {
                if(e.keyCode == 40) {
                    // Down-arrow should go to the first visible item.
                    that.$menu.find('li:not(.divider):visible a').first().focus();
                }
                else if(e.keyCode == 38) {
                    // Up-arrow should go to the last visible item.
                    that.$menu.find('li:not(.divider):visible a').last().focus();
                }
                else if (that.$searchbox.val()) {
                    that.$menu.find('li').show().not(':icontains(' + that.$searchbox.val() + ')').hide();
                } else {
                    that.$menu.find('li').show();
                }
            }).on('keydown', function(e) {
                if(e.keyCode == 13) {
                    // Prevent return from submitting any form here (needs to be in keydown instead of keyup).
                    // Closes the dropdown and focuses it.
                    that.$button.click().focus();
                    e.preventDefault();
                    return false;
                }
            });
        },

        val: function(value) {

            if (value != undefined) {
                this.$element.val( value );

                this.$element.change();
                return this.$element;
            } else {
                return this.$element.val();
            }
        },

        selectAll: function() {
            this.$element.find('option').prop('selected', true).attr('selected', 'selected');
            this.render();
        },

        deselectAll: function() {
            this.$element.find('option').prop('selected', false).removeAttr('selected');
            this.render();
        },

        keydown: function(e) {
            var that = $(this).parent().data('this');
            // If the dropdown is closed, open it and move focus to the search box, if there is one.
            if(that.$searchbox && that.$searchbox.is(':not(:visible)') && e.keyCode >= 48 && e.keyCode <= 90) {
                $(':focus').click();
                that.$searchbox.focus();
            }
        },

        keyup: function(e) {
            var $this,
                $items,
                $parent,
                that;

            $this = $(this);

            $parent = $this.parent();

            that = $parent.data('this');

            if (that.options.container) $parent = that.$menu;

            $items = $('[role=menu] li:not(.divider):visible a', $parent);

            if (!$items.length) return;

            if (/(38|40)/.test(e.keyCode) && that.$searchbox) {
                // Since we bind on keyup, the focus will have already changed here. Keep track of the last focused item and the current,
                // and if they match (and are at the top or bottom of the list), move the focus to the searchbox.
                var index = $items.index($(':focus'));
                var last = $this.data('lastIndex');
                $this.data('lastIndex', index);
                if(index == last) {
                    if(index == 0 || index == $items.length - 1) that.$searchbox.focus();
                }
            }
            else {
                var keyCodeMap = {
                    48:"0", 49:"1", 50:"2", 51:"3", 52:"4", 53:"5", 54:"6", 55:"7", 56:"8", 57:"9", 59:";",
                    65:"a", 66:"b", 67:"c", 68:"d", 69:"e", 70:"f", 71:"g", 72:"h", 73:"i", 74:"j", 75:"k", 76:"l",
                    77:"m", 78:"n", 79:"o", 80:"p", 81:"q", 82:"r", 83:"s", 84:"t", 85:"u", 86:"v", 87:"w", 88:"x", 89:"y", 90:"z",
                    96:"0", 97:"1", 98:"2", 99:"3", 100:"4", 101:"5", 102:"6", 103:"7", 104:"8", 105:"9"
                };

                var keyIndex = [];

                $items.each(function() {
                    if ($(this).parent().is(':not(.disabled)')) {
                        if ($.trim($(this).text().toLowerCase()).substring(0,1) == keyCodeMap[e.keyCode]) {
                            keyIndex.push($(this).parent().index());
                        }
                    }
                });

                var count = $(document).data('keycount');
                count++;
                $(document).data('keycount',count);

                var prevKey = $.trim($(':focus').text().toLowerCase()).substring(0,1);

                if (prevKey != keyCodeMap[e.keyCode]) {
                    count = 1;
                    $(document).data('keycount',count);
                } else if (count >= keyIndex.length) {
                    $(document).data('keycount',0);
                }

                $items.eq(keyIndex[count - 1]).focus();
            }

            // Select focused option if "Enter" or "Spacebar" are pressed inside the menu.
            if (/(13|32)/.test(e.keyCode) && $this.is('[role=menu]')) {
                e.preventDefault();
                $(':focus').click();
                $(document).data('keycount',0);
            }
        },

        hide: function() {
            this.$newElement.hide();
        },

        show: function() {
            this.$newElement.show();
        },

        destroy: function() {
            this.$newElement.remove();
            this.$element.remove();
        }
    };

    $.fn.selectpicker = function(option, event) {
       //get the args of the outer function..
       var args = arguments;
       var value;
       var chain = this.each(function() {
            if ($(this).is('select')) {
                var $this = $(this),
                    data = $this.data('selectpicker'),
                    options = typeof option == 'object' && option;

                if (!data) {
                    $this.data('selectpicker', (data = new Selectpicker(this, options, event)));
                } else if (options) {
                    for(var i in options) {
                       data.options[i] = options[i];
                    }
                }

                if (typeof option == 'string') {
                    //Copy the value of option, as once we shift the arguments
                    //it also shifts the value of option.
                    var property = option;
                    if (data[property] instanceof Function) {
                        [].shift.apply(args);
                        value = data[property].apply(data, args);
                    } else {
                        value = data.options[property];
                    }
                }
            }
        });

        if (value != undefined) {
            return value;
        } else {
            return chain;
        }
    };

    $.fn.selectpicker.defaults = {
        style: 'btn-default',
        size: 'auto',
        title: null,
        selectedTextFormat : 'values',
        noneSelectedText : 'Nothing selected',
        countSelectedText: '{0} of {1} selected',
        width: false,
        container: false,
        hideDisabled: false,
        showSubtext: false,
        showIcon: true,
        showContent: true,
        dropupAuto: true,
        header: false,
        liveSearch: false
    };

    $(document)
        .data('keycount', 0)
        .on('keydown', '.selectpicker[data-toggle=dropdown], .selectpicker[role=menu]' , Selectpicker.prototype.keydown)
        .on('keyup', '.selectpicker[data-toggle=dropdown], .selectpicker[role=menu]' , Selectpicker.prototype.keyup);

}(window.jQuery);



/* ===========================================================
 * Bootstrap: fileinput.js v3.0.0-p7
 * http://jasny.github.com/bootstrap/javascript.html#fileinput
 * ===========================================================
 * Copyright 2012 Jasny BV, Netherlands.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

+function ($) { "use strict";

  var isIE = window.navigator.appName == 'Microsoft Internet Explorer'

  // FILEUPLOAD PUBLIC CLASS DEFINITION
  // =================================

  var Fileupload = function (element, options) {
    this.$element = $(element)
      
    this.$input = this.$element.find(':file')
    if (this.$input.length === 0) return

    this.name = this.$input.attr('name') || options.name

    this.$hidden = this.$element.find('input[type=hidden][name="'+this.name+'"]')
    if (this.$hidden.length === 0) {
      this.$hidden = $('<input type="hidden" />')
      this.$element.prepend(this.$hidden)
    }

    this.$preview = this.$element.find('.fileinput-preview')
    var height = this.$preview.css('height')
    if (this.$preview.css('display') != 'inline' && height != '0px' && height != 'none') this.$preview.css('line-height', height)

    this.original = {
      exists: this.$element.hasClass('fileinput-exists'),
      preview: this.$preview.html(),
      hiddenVal: this.$hidden.val()
    }
    
    this.listen()
  }
  
  Fileupload.prototype.listen = function() {
    this.$input.on('change.bs.fileinput', $.proxy(this.change, this))
    $(this.$input[0].form).on('reset.bs.fileinput', $.proxy(this.reset, this))
    
    this.$element.find('[data-trigger="fileinput"]').on('click.bs.fileinput', $.proxy(this.trigger, this))
    this.$element.find('[data-dismiss="fileinput"]').on('click.bs.fileinput', $.proxy(this.clear, this))
  },

  Fileupload.prototype.change = function(e) {
    if (e.target.files === undefined) e.target.files = e.target && e.target.value ? [ {name: e.target.value.replace(/^.+\\/, '')} ] : []
    if (e.target.files.length === 0) return

    this.$hidden.val('')
    this.$hidden.attr('name', '')
    this.$input.attr('name', this.name)

    var file = e.target.files[0]

    if (this.$preview.length > 0 && (typeof file.type !== "undefined" ? file.type.match('image.*') : file.name.match(/\.(gif|png|jpe?g)$/i)) && typeof FileReader !== "undefined") {
      var reader = new FileReader()
      var preview = this.$preview
      var element = this.$element

      reader.onload = function(re) {
        var $img = $('<img>').attr('src', re.target.result)
        e.target.files[0].result = re.target.result
        
        element.find('.fileinput-filename').text(file.name)
        
        // if parent has max-height, using `(max-)height: 100%` on child doesn't take padding and border into account
        if (preview.css('max-height') != 'none') $img.css('max-height', parseInt(preview.css('max-height'), 10) - parseInt(preview.css('padding-top'), 10) - parseInt(preview.css('padding-bottom'), 10)  - parseInt(preview.css('border-top'), 10) - parseInt(preview.css('border-bottom'), 10))
        
        preview.html($img)
        element.addClass('fileinput-exists').removeClass('fileinput-new')

        element.trigger('change.bs.fileinput', e.target.files)
      }

      reader.readAsDataURL(file)
    } else {
      this.$element.find('.fileinput-filename').text(file.name)
      this.$preview.text(file.name)
      
      this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
      
      this.$element.trigger('change.bs.fileinput')
    }
  },

  Fileupload.prototype.clear = function(e) {
    if (e) e.preventDefault()
    
    this.$hidden.val('')
    this.$hidden.attr('name', this.name)
    this.$input.attr('name', '')

    //ie8+ doesn't support changing the value of input with type=file so clone instead
    if (isIE) { 
      var inputClone = this.$input.clone(true);
      this.$input.after(inputClone);
      this.$input.remove();
      this.$input = inputClone;
    } else {
      this.$input.val('')
    }

    this.$preview.html('')
    this.$element.find('.fileinput-filename').text('')
    this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    if (e !== false) {
      this.$input.trigger('change')
      this.$element.trigger('clear.bs.fileinput')
    }
  },

  Fileupload.prototype.reset = function() {
    this.clear(false)

    this.$hidden.val(this.original.hiddenVal)
    this.$preview.html(this.original.preview)
    this.$element.find('.fileinput-filename').text('')

    if (this.original.exists) this.$element.addClass('fileinput-exists').removeClass('fileinput-new')
     else this.$element.addClass('fileinput-new').removeClass('fileinput-exists')
    
    this.$element.trigger('reset.bs.fileinput')
  },

  Fileupload.prototype.trigger = function(e) {
    this.$input.trigger('click')
    e.preventDefault()
  }

  
  // FILEUPLOAD PLUGIN DEFINITION
  // ===========================

  $.fn.fileinput = function (options) {
    return this.each(function () {
      var $this = $(this)
      , data = $this.data('fileinput')
      if (!data) $this.data('fileinput', (data = new Fileupload(this, options)))
      if (typeof options == 'string') data[options]()
    })
  }

  $.fn.fileinput.Constructor = Fileupload


  // FILEUPLOAD DATA-API
  // ==================

  $(document).on('click.fileinput.data-api', '[data-provides="fileinput"]', function (e) {
    var $this = $(this)
    if ($this.data('fileinput')) return
    $this.fileinput($this.data())
      
    var $target = $(e.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
    if ($target.length > 0) {
      e.preventDefault()
      $target.trigger('click.bs.fileinput')
    }
  })

}(window.jQuery);


/*global define*/
(function (global, undefined) {
	"use strict";

	var document = global.document,
	    Alertify;

	Alertify = function () {

		var _alertify = {},
		    dialogs   = {},
		    isopen    = false,
		    keys      = { ENTER: 13, ESC: 27, SPACE: 32 },
		    queue     = [],
		    $, btnCancel, btnOK, btnReset, btnResetBack, btnFocus, elCallee, elCover, elDialog, elLog, form, input, getTransitionEvent;

		/**
		 * Markup pieces
		 * @type {Object}
		 */
		dialogs = {
			buttons : {
				holder : "<nav class=\"alertify-buttons\">{{buttons}}</nav>",
				submit : "<button type=\"submit\" class=\"alertify-button alertify-button-ok\" id=\"alertify-ok\">{{ok}}</button>",
				ok     : "<button class=\"alertify-button alertify-button-ok\" id=\"alertify-ok\">{{ok}}</button>",
				cancel : "<button class=\"alertify-button alertify-button-cancel\" id=\"alertify-cancel\">{{cancel}}</button>"
			},
			input   : "<div class=\"alertify-text-wrapper\"><input type=\"text\" class=\"alertify-text\" id=\"alertify-text\"></div>",
			message : "<p class=\"alertify-message\">{{message}}</p>",
			log     : "<article class=\"alertify-log{{class}}\">{{message}}</article>"
		};

		/**
		 * Return the proper transitionend event
		 * @return {String}    Transition type string
		 */
		getTransitionEvent = function () {
			var t,
			    type,
			    supported   = false,
			    el          = document.createElement("fakeelement"),
			    transitions = {
				    "WebkitTransition" : "webkitTransitionEnd",
				    "MozTransition"    : "transitionend",
				    "OTransition"      : "otransitionend",
				    "transition"       : "transitionend"
			    };

			for (t in transitions) {
				if (el.style[t] !== undefined) {
					type      = transitions[t];
					supported = true;
					break;
				}
			}

			return {
				type      : type,
				supported : supported
			};
		};

		/**
		 * Shorthand for document.getElementById()
		 *
		 * @param  {String} id    A specific element ID
		 * @return {Object}       HTML element
		 */
		$ = function (id) {
			return document.getElementById(id);
		};

		/**
		 * Alertify private object
		 * @type {Object}
		 */
		_alertify = {

			/**
			 * Labels object
			 * @type {Object}
			 */
			labels : {
				ok     : "OK",
				cancel : "Cancel"
			},

			/**
			 * Delay number
			 * @type {Number}
			 */
			delay : 5000,

			/**
			 * Whether buttons are reversed (default is secondary/primary)
			 * @type {Boolean}
			 */
			buttonReverse : false,

			/**
			 * Which button should be focused by default
			 * @type {String}	"ok" (default), "cancel", or "none"
			 */
			buttonFocus : "ok",

			/**
			 * Set the transition event on load
			 * @type {[type]}
			 */
			transition : undefined,

			/**
			 * Set the proper button click events
			 *
			 * @param {Function} fn    [Optional] Callback function
			 *
			 * @return {undefined}
			 */
			addListeners : function (fn) {
				var hasOK     = (typeof btnOK !== "undefined"),
				    hasCancel = (typeof btnCancel !== "undefined"),
				    hasInput  = (typeof input !== "undefined"),
				    val       = "",
				    self      = this,
				    ok, cancel, common, key, reset;

				// ok event handler
				ok = function (event) {
					if (typeof event.preventDefault !== "undefined") event.preventDefault();
					common(event);
					if (typeof input !== "undefined") val = input.value;
					if (typeof fn === "function") {
						if (typeof input !== "undefined") {
							fn(true, val);
						}
						else fn(true);
					}
					return false;
				};

				// cancel event handler
				cancel = function (event) {
					if (typeof event.preventDefault !== "undefined") event.preventDefault();
					common(event);
					if (typeof fn === "function") fn(false);
					return false;
				};

				// common event handler (keyup, ok and cancel)
				common = function (event) {
					self.hide();
					self.unbind(document.body, "keyup", key);
					self.unbind(btnReset, "focus", reset);
					if (hasOK) self.unbind(btnOK, "click", ok);
					if (hasCancel) self.unbind(btnCancel, "click", cancel);
				};

				// keyup handler
				key = function (event) {
					var keyCode = event.keyCode;
					if ((keyCode === keys.SPACE && !hasInput) || (hasInput && keyCode === keys.ENTER)) ok(event);
					if (keyCode === keys.ESC && hasCancel) cancel(event);
				};

				// reset focus to first item in the dialog
				reset = function (event) {
					if (hasInput) input.focus();
					else if (!hasCancel || self.buttonReverse) btnOK.focus();
					else btnCancel.focus();
				};

				// handle reset focus link
				// this ensures that the keyboard focus does not
				// ever leave the dialog box until an action has
				// been taken
				this.bind(btnReset, "focus", reset);
				this.bind(btnResetBack, "focus", reset);
				// handle OK click
				if (hasOK) this.bind(btnOK, "click", ok);
				// handle Cancel click
				if (hasCancel) this.bind(btnCancel, "click", cancel);
				// listen for keys, Cancel => ESC
				this.bind(document.body, "keyup", key);
				if (!this.transition.supported) {
					this.setFocus();
				}
			},

			/**
			 * Bind events to elements
			 *
			 * @param  {Object}   el       HTML Object
			 * @param  {Event}    event    Event to attach to element
			 * @param  {Function} fn       Callback function
			 *
			 * @return {undefined}
			 */
			bind : function (el, event, fn) {
				if (typeof el.addEventListener === "function") {
					el.addEventListener(event, fn, false);
				} else if (el.attachEvent) {
					el.attachEvent("on" + event, fn);
				}
			},

			/**
			 * Use alertify as the global error handler (using window.onerror)
			 *
			 * @return {boolean} success
			 */
			handleErrors : function () {
				if (typeof global.onerror !== "undefined") {
					var self = this;
					global.onerror = function (msg, url, line) {
						self.error("[" + msg + " on line " + line + " of " + url + "]", 0);
					};
					return true;
				} else {
					return false;
				}
			},

			/**
			 * Append button HTML strings
			 *
			 * @param {String} secondary    The secondary button HTML string
			 * @param {String} primary      The primary button HTML string
			 *
			 * @return {String}             The appended button HTML strings
			 */
			appendButtons : function (secondary, primary) {
				return this.buttonReverse ? primary + secondary : secondary + primary;
			},

			/**
			 * Build the proper message box
			 *
			 * @param  {Object} item    Current object in the queue
			 *
			 * @return {String}         An HTML string of the message box
			 */
			build : function (item) {
				var html    = "",
				    type    = item.type,
				    message = item.message,
				    css     = item.cssClass || "";

				html += "<div class=\"alertify-dialog\">";
				html += "<a id=\"alertify-resetFocusBack\" class=\"alertify-resetFocus\" href=\"#\">Reset Focus</a>";

				if (_alertify.buttonFocus === "none") html += "<a href=\"#\" id=\"alertify-noneFocus\" class=\"alertify-hidden\"></a>";

				// doens't require an actual form
				if (type === "prompt") html += "<div id=\"alertify-form\">";

				html += "<article class=\"alertify-inner\">";
				html += dialogs.message.replace("{{message}}", message);

				if (type === "prompt") html += dialogs.input;

				html += dialogs.buttons.holder;
				html += "</article>";

				if (type === "prompt") html += "</div>";

				html += "<a id=\"alertify-resetFocus\" class=\"alertify-resetFocus\" href=\"#\">Reset Focus</a>";
				html += "</div>";

				switch (type) {
				case "confirm":
					html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.ok));
					html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
					break;
				case "prompt":
					html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.submit));
					html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
					break;
				case "alert":
					html = html.replace("{{buttons}}", dialogs.buttons.ok);
					html = html.replace("{{ok}}", this.labels.ok);
					break;
				default:
					break;
				}

				elDialog.className = "alertify alertify-" + type + " " + css;
				elCover.className  = "alertify-cover";
				return html;
			},

			/**
			 * Close the log messages
			 *
			 * @param  {Object} elem    HTML Element of log message to close
			 * @param  {Number} wait    [optional] Time (in ms) to wait before automatically hiding the message, if 0 never hide
			 *
			 * @return {undefined}
			 */
			close : function (elem, wait) {
				// Unary Plus: +"2" === 2
				var timer = (wait && !isNaN(wait)) ? +wait : this.delay,
				    self  = this,
				    hideElement, transitionDone;

				// set click event on log messages
				this.bind(elem, "click", function () {
					hideElement(elem);
				});
				// Hide the dialog box after transition
				// This ensure it doens't block any element from being clicked
				transitionDone = function (event) {
					event.stopPropagation();
					// unbind event so function only gets called once
					self.unbind(this, self.transition.type, transitionDone);
					// remove log message
					elLog.removeChild(this);
					if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
				};
				// this sets the hide class to transition out
				// or removes the child if css transitions aren't supported
				hideElement = function (el) {
					// ensure element exists
					if (typeof el !== "undefined" && el.parentNode === elLog) {
						// whether CSS transition exists
						if (self.transition.supported) {
							self.bind(el, self.transition.type, transitionDone);
							el.className += " alertify-log-hide";
						} else {
							elLog.removeChild(el);
							if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
						}
					}
				};
				// never close (until click) if wait is set to 0
				if (wait === 0) return;
				// set timeout to auto close the log message
				setTimeout(function () { hideElement(elem); }, timer);
			},

			/**
			 * Create a dialog box
			 *
			 * @param  {String}   message        The message passed from the callee
			 * @param  {String}   type           Type of dialog to create
			 * @param  {Function} fn             [Optional] Callback function
			 * @param  {String}   placeholder    [Optional] Default value for prompt input field
			 * @param  {String}   cssClass       [Optional] Class(es) to append to dialog box
			 *
			 * @return {Object}
			 */
			dialog : function (message, type, fn, placeholder, cssClass) {
				// set the current active element
				// this allows the keyboard focus to be resetted
				// after the dialog box is closed
				elCallee = document.activeElement;
				// check to ensure the alertify dialog element
				// has been successfully created
				var check = function () {
					if ((elLog && elLog.scrollTop !== null) && (elCover && elCover.scrollTop !== null)) return;
					else check();
				};
				// error catching
				if (typeof message !== "string") throw new Error("message must be a string");
				if (typeof type !== "string") throw new Error("type must be a string");
				if (typeof fn !== "undefined" && typeof fn !== "function") throw new Error("fn must be a function");
				// initialize alertify if it hasn't already been done
				this.init();
				check();

				queue.push({ type: type, message: message, callback: fn, placeholder: placeholder, cssClass: cssClass });
				if (!isopen) this.setup();

				return this;
			},

			/**
			 * Extend the log method to create custom methods
			 *
			 * @param  {String} type    Custom method name
			 *
			 * @return {Function}
			 */
			extend : function (type) {
				if (typeof type !== "string") throw new Error("extend method must have exactly one paramter");
				return function (message, wait) {
					this.log(message, type, wait);
					return this;

				};
			},

			/**
			 * Hide the dialog and rest to defaults
			 *
			 * @return {undefined}
			 */
			hide : function () {
				var transitionDone,
				    self = this;
				// remove reference from queue
				queue.splice(0,1);
				// if items remaining in the queue
				if (queue.length > 0) this.setup(true);
				else {
					isopen = false;
					// Hide the dialog box after transition
					// This ensure it doens't block any element from being clicked
					transitionDone = function (event) {
						event.stopPropagation();
						// unbind event so function only gets called once
						self.unbind(elDialog, self.transition.type, transitionDone);
					};
					// whether CSS transition exists
					if (this.transition.supported) {
						this.bind(elDialog, this.transition.type, transitionDone);
						elDialog.className = "alertify alertify-hide alertify-hidden";
					} else {
						elDialog.className = "alertify alertify-hide alertify-hidden alertify-isHidden";
					}
					elCover.className  = "alertify-cover alertify-cover-hidden";
					// set focus to the last element or body
					// after the dialog is closed
					elCallee.focus();
				}
			},

			/**
			 * Initialize Alertify
			 * Create the 2 main elements
			 *
			 * @return {undefined}
			 */
			init : function () {
				// ensure legacy browsers support html5 tags
				document.createElement("nav");
				document.createElement("article");
				document.createElement("section");
				// cover
				if ($("alertify-cover") == null) {
					elCover = document.createElement("div");
					elCover.setAttribute("id", "alertify-cover");
					elCover.className = "alertify-cover alertify-cover-hidden";
					document.body.appendChild(elCover);
				}
				// main element
				if ($("alertify") == null) {
					isopen = false;
					queue = [];
					elDialog = document.createElement("section");
					elDialog.setAttribute("id", "alertify");
					elDialog.className = "alertify alertify-hidden";
					document.body.appendChild(elDialog);
				}
				// log element
				if ($("alertify-logs") == null) {
					elLog = document.createElement("section");
					elLog.setAttribute("id", "alertify-logs");
					elLog.className = "alertify-logs alertify-logs-hidden";
					document.body.appendChild(elLog);
				}
				// set tabindex attribute on body element
				// this allows script to give it focus
				// after the dialog is closed
				document.body.setAttribute("tabindex", "0");
				// set transition type
				this.transition = getTransitionEvent();
			},

			/**
			 * Show a new log message box
			 *
			 * @param  {String} message    The message passed from the callee
			 * @param  {String} type       [Optional] Optional type of log message
			 * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding the log
			 *
			 * @return {Object}
			 */
			log : function (message, type, wait) {
				// check to ensure the alertify dialog element
				// has been successfully created
				var check = function () {
					if (elLog && elLog.scrollTop !== null) return;
					else check();
				};
				// initialize alertify if it hasn't already been done
				this.init();
				check();

				elLog.className = "alertify-logs";
				this.notify(message, type, wait);
				return this;
			},

			/**
			 * Add new log message
			 * If a type is passed, a class name "alertify-log-{type}" will get added.
			 * This allows for custom look and feel for various types of notifications.
			 *
			 * @param  {String} message    The message passed from the callee
			 * @param  {String} type       [Optional] Type of log message
			 * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding
			 *
			 * @return {undefined}
			 */
			notify : function (message, type, wait) {
				var log = document.createElement("article");
				log.className = "alertify-log" + ((typeof type === "string" && type !== "") ? " alertify-log-" + type : "");
				log.innerHTML = message;
				// append child
				elLog.appendChild(log);
				// triggers the CSS animation
				setTimeout(function() { log.className = log.className + " alertify-log-show"; }, 50);
				this.close(log, wait);
			},

			/**
			 * Set properties
			 *
			 * @param {Object} args     Passing parameters
			 *
			 * @return {undefined}
			 */
			set : function (args) {
				var k;
				// error catching
				if (typeof args !== "object" && args instanceof Array) throw new Error("args must be an object");
				// set parameters
				for (k in args) {
					if (args.hasOwnProperty(k)) {
						this[k] = args[k];
					}
				}
			},

			/**
			 * Common place to set focus to proper element
			 *
			 * @return {undefined}
			 */
			setFocus : function () {
				if (input) {
					input.focus();
					input.select();
				}
				else btnFocus.focus();
			},

			/**
			 * Initiate all the required pieces for the dialog box
			 *
			 * @return {undefined}
			 */
			setup : function (fromQueue) {
				var item = queue[0],
				    self = this,
				    transitionDone;

				// dialog is open
				isopen = true;
				// Set button focus after transition
				transitionDone = function (event) {
					event.stopPropagation();
					self.setFocus();
					// unbind event so function only gets called once
					self.unbind(elDialog, self.transition.type, transitionDone);
				};
				// whether CSS transition exists
				if (this.transition.supported && !fromQueue) {
					this.bind(elDialog, this.transition.type, transitionDone);
				}
				// build the proper dialog HTML
				elDialog.innerHTML = this.build(item);
				// assign all the common elements
				btnReset  = $("alertify-resetFocus");
				btnResetBack  = $("alertify-resetFocusBack");
				btnOK     = $("alertify-ok")     || undefined;
				btnCancel = $("alertify-cancel") || undefined;
				btnFocus  = (_alertify.buttonFocus === "cancel") ? btnCancel : ((_alertify.buttonFocus === "none") ? $("alertify-noneFocus") : btnOK),
				input     = $("alertify-text")   || undefined;
				form      = $("alertify-form")   || undefined;
				// add placeholder value to the input field
				if (typeof item.placeholder === "string" && item.placeholder !== "") input.value = item.placeholder;
				if (fromQueue) this.setFocus();
				this.addListeners(item.callback);
			},

			/**
			 * Unbind events to elements
			 *
			 * @param  {Object}   el       HTML Object
			 * @param  {Event}    event    Event to detach to element
			 * @param  {Function} fn       Callback function
			 *
			 * @return {undefined}
			 */
			unbind : function (el, event, fn) {
				if (typeof el.removeEventListener === "function") {
					el.removeEventListener(event, fn, false);
				} else if (el.detachEvent) {
					el.detachEvent("on" + event, fn);
				}
			}
		};

		return {
			alert   : function (message, fn, cssClass) { _alertify.dialog(message, "alert", fn, "", cssClass); return this; },
			confirm : function (message, fn, cssClass) { _alertify.dialog(message, "confirm", fn, "", cssClass); return this; },
			extend  : _alertify.extend,
			init    : _alertify.init,
			log     : function (message, type, wait) { _alertify.log(message, type, wait); return this; },
			prompt  : function (message, fn, placeholder, cssClass) { _alertify.dialog(message, "prompt", fn, placeholder, cssClass); return this; },
			success : function (message, wait) { _alertify.log(message, "success", wait); return this; },
			error   : function (message, wait) { _alertify.log(message, "error", wait); return this; },
			set     : function (args) { _alertify.set(args); },
			labels  : _alertify.labels,
			debug   : _alertify.handleErrors
		};
	};

	// AMD and window support
	if (typeof define === "function") {
		define([], function () { return new Alertify(); });
	} else if (typeof global.alertify === "undefined") {
		global.alertify = new Alertify();
	}

}(this));



//prettify
var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();


/**
 * @author Will Steinmetz
 * 
 * jQuery notification plug-in inspired by the notification style of Windows 8
 * 
 * Copyright (c)2013, Will Steinmetz
 * Licensed under the BSD license.
 * http://opensource.org/licenses/BSD-3-Clause
 */
;(function($) {
	var settings = {
		life: 10000,
		theme: 'default',
		iconClose:"fa fa-times",
		sticky: false,
		verticalEdge: 'right',
		horizontalEdge: 'top',
		zindex: 1100
	};
	
	var methods = {
		init: function(message, options) {
			return this.each(function() {
				var $this = $(this),
					data = $this.data('notific8');
					
                $this.data('notific8', {
                    target: $this,
                    settings: {},
                    message: ""
                });
                data = $this.data('notific8');
				data.message = message;
				
				// apply the options
				$.extend(data.settings, settings, options);
				
				// add the notification to the stack
				methods._buildNotification($this);
			});
		},
		
        /**
         * Destroy the notification
         */
		destroy: function($this) {
			var data = $this.data('notific8');
			
			$(window).unbind('.notific8');
			$this.removeData('notific8');
		},
		
		/**
		 * Build the notification and add it to the screen's stack
		 */
		_buildNotification: function($this) {
			var data = $this.data('notific8'),
				notification = $('<div />'),
				num = Number($('body').attr('data-notific8s'));
            num++;
			
			var fontColor=data.settings.theme!="default" ? data.settings.fColor || "#FFF" :'';
			
			notification.addClass('jquery-notific8-notification');
			
			notification.attr('data-color', data.settings.theme);
			notification.css({"background-color":$.fillColor(notification) , "color": fontColor }) ;
			
			notification.attr('id', 'jquery-notific8-notification-' + num);
			$('body').attr('data-notific8s', num);
			
			// check for a heading
			if (data.settings.hasOwnProperty('heading') && (typeof data.settings.heading == "string")) {
				notification.append($('<div />').addClass('jquery-notific8-heading').html(data.settings.heading));
			}
			
			// check if the notification is supposed to be sticky
			if (data.settings.sticky) {
			    var close = $('<div />').addClass('jquery-notific8-close-sticky').append(
                    $('<span />').html('close x')
                );
			  
                close.click(function(event) {
				notification.removeClass("in");
				setTimeout(function() { notification.remove() },500);
                });
                notification.append(close);
                notification.addClass('sticky');
			 notification.find(".jquery-notific8-close-sticky").css({"background-color":$.xcolor.darken( $.fillColor(notification)  , 1 , 13) }) ;
            }
            // otherwise, put the normal close button up that is only display
            // when the notification is hovered over
            else {
                var close = $('<div />').addClass('jquery-notific8-close').append(
                    $('<i />').addClass(data.settings.iconClose)
                );
                close.click(function(event) {
				notification.removeClass("in");
				setTimeout(function() { notification.remove() },500);
                });
                notification.append(close);
            }
			
			// add the message
			notification.append($('<div />').addClass('jquery-notific8-message').html(data.message));
			
			// add the notification to the stack
			$('.jquery-notific8-container.' + data.settings.verticalEdge + '.' + data.settings.horizontalEdge).append(notification);
			
			// slide the message onto the screen
			setTimeout(function () { notification.addClass("in") }, 10);
                    if (!data.settings.sticky) {
                        (function(n, l) {
                            setTimeout(function() {
						notification.removeClass("in");
						setTimeout(function() { notification.remove() },500);
                            }, l);
                        })(notification, data.settings.life);
                    }
                    data.settings = {};
		},
        
        /**
         * Set up the configuration settings
         */
        configure: function(options) {
            $.extend(settings, options);
        },
        
        /**
         * Set up the z-index
         */
        zindex: function(zindex) {
            settings.zindex = zindex;
        }
	};
	
	// wrapper since this plug-in is called without selecting an item first
	$.notific8 = function(message, options) {
		switch (message) {
            case 'configure':
            case 'config':
                return methods.configure.apply(this, [options]);
            break;
            case 'zindex':
                return methods.zindex.apply(this, [options]);
            break;
            default:
                if (typeof options == 'undefined') {
                    options = {};
                }
                
                // make sure that the stack containers exist
                if ($('.jquery-notific8-container').size() === 0) {
                    var $body = $('body');
                    $body.attr('data-notific8s', 0);
                    $body.append($('<div />').addClass('jquery-notific8-container').addClass('top').addClass('right'));
                    $body.append($('<div />').addClass('jquery-notific8-container').addClass('top').addClass('left'));
                    $body.append($('<div />').addClass('jquery-notific8-container').addClass('bottom').addClass('right'));
                    $body.append($('<div />').addClass('jquery-notific8-container').addClass('bottom').addClass('left'));
                    $('.jquery-notific8-container').css('z-index', settings.zindex);
                }
                
                // make sure the edge settings exist
                if ((!options.hasOwnProperty('verticalEdge')) || ((options.verticalEdge.toLowerCase() != 'right') && (options.verticalEdge.toLowerCase() != 'left'))) {
                    options.verticalEdge = settings.verticalEdge;
                }
                if ((!options.hasOwnProperty('horizontalEdge')) || ((options.horizontalEdge.toLowerCase() != 'top') && (options.horizontalEdge.toLowerCase() != 'bottom'))) {
                    options.horizontalEdge = settings.horizontalEdge;
                }
                options.verticalEdge = options.verticalEdge.toLowerCase();
                options.horizontalEdge = options.horizontalEdge.toLowerCase();
                
                //display the notification in the right corner
                $('.jquery-notific8-container.' + options.verticalEdge + '.' + options.horizontalEdge).notific8(message, options);
            break;
        }
	};
	
	// plugin setup
	$.fn.notific8 = function(message, options) {
        if (typeof message == "string") {
            return methods.init.apply(this, arguments);
        } else {
            $.error('jQuery.notific8 takes a string message as the first parameter');
        }
	};
})(jQuery);





/*
 * Depend Class v0.1b : attach class based on first class in list of current element
 * File: jquery.dependClass.js
 * Copyright (c) 2009 Egor Hmelyoff, hmelyoff@gmail.com
 */
(function($) {
	// Init plugin function
	$.baseClass = function(obj){
	  obj = $(obj);
	  return obj.get(0).className.match(/([^ ]+)/)[1];
	};
	
	$.fn.addDependClass = function(className, delimiter){
		var options = {
		  delimiter: delimiter ? delimiter : '-'
		}
		return this.each(function(){
		  var baseClass = $.baseClass(this);
		  if(baseClass)
    		$(this).addClass(baseClass + options.delimiter + className);
		});
	};

	$.fn.removeDependClass = function(className, delimiter){
		var options = {
		  delimiter: delimiter ? delimiter : '-'
		}
		return this.each(function(){
		  var baseClass = $.baseClass(this);
		  if(baseClass)
    		$(this).removeClass(baseClass + options.delimiter + className);
		});
	};

	$.fn.toggleDependClass = function(className, delimiter){
		var options = {
		  delimiter: delimiter ? delimiter : '-'
		}
		return this.each(function(){
		  var baseClass = $.baseClass(this);
		  if(baseClass)
		    if($(this).is("." + baseClass + options.delimiter + className))
    		  $(this).removeClass(baseClass + options.delimiter + className);
    		else
    		  $(this).addClass(baseClass + options.delimiter + className);
		});
	};

	// end of closure
})(jQuery);


// jQuery Slider Plugin
// Egor Khmelev - http://blog.egorkhmelev.com/ - hmelyoff@gmail.com
!function(){Function.prototype.inheritFrom=function(t,e){var i=function(){};if(i.prototype=t.prototype,this.prototype=new i,this.prototype.constructor=this,this.prototype.baseConstructor=t,this.prototype.superClass=t.prototype,e)for(var s in e)this.prototype[s]=e[s]},Number.prototype.jSliderNice=function(t){var e,i=/^(-)?(\d+)([\.,](\d+))?$/,s=Number(this),n=String(s),o="",r=" ";if(e=n.match(i)){var a=e[2],h=e[4]?Number("0."+e[4]):0;if(h){var l=Math.pow(10,t?t:2);if(h=Math.round(h*l),sNewDecPart=String(h),o=sNewDecPart,sNewDecPart.length<t)for(var u=t-sNewDecPart.length,c=0;u>c;c++)o="0"+o;o=","+o}else if(t&&0!=t){for(var c=0;t>c;c++)o+="0";o=","+o}var d;if(Number(a)<1e3)d=a+o;else{var c,p="";for(c=1;3*c<a.length;c++)p=r+a.substring(a.length-3*c,a.length-3*(c-1))+p;d=a.substr(0,3-3*c+a.length)+p+o}return e[1]?"-"+d:d}return n},this.jSliderIsArray=function(t){return"undefined"==typeof t?!1:t instanceof Array||!(t instanceof Object)&&"[object Array]"==Object.prototype.toString.call(t)||"number"==typeof t.length&&"undefined"!=typeof t.splice&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice")?!0:!1}}(),function(){var t={};this.jSliderTmpl=function e(i,s){var n=/\W/.test(i)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+i.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):t[i]=t[i]||e(i);return s?n(s):n}}(),function(t){this.Draggable=function(){this._init.apply(this,arguments)},Draggable.prototype={oninit:function(){},events:function(){},onmousedown:function(){this.ptr.css({position:"absolute"})},onmousemove:function(t,e,i){this.ptr.css({left:e,top:i})},onmouseup:function(){},isDefault:{drag:!1,clicked:!1,toclick:!0,mouseup:!1},_init:function(){if(arguments.length>0){this.ptr=t(arguments[0]),this.outer=t(".draggable-outer"),this.is={},t.extend(this.is,this.isDefault);var e=this.ptr.offset();this.d={left:e.left,top:e.top,width:this.ptr.width(),height:this.ptr.height()},this.oninit.apply(this,arguments),this._events()}},_getPageCoords:function(t){return t.targetTouches&&t.targetTouches[0]?{x:t.targetTouches[0].pageX,y:t.targetTouches[0].pageY}:{x:t.pageX,y:t.pageY}},_bindEvent:function(t,e,i){this.supportTouches_?t.get(0).addEventListener(this.events_[e],i,!1):t.bind(this.events_[e],i)},_events:function(){var e=this;this.supportTouches_=t.browser.webkit&&-1!=navigator.userAgent.indexOf("Mobile"),this.events_={click:this.supportTouches_?"touchstart":"click",down:this.supportTouches_?"touchstart":"mousedown",move:this.supportTouches_?"touchmove":"mousemove",up:this.supportTouches_?"touchend":"mouseup"},this._bindEvent(t(document),"move",function(t){e.is.drag&&(t.stopPropagation(),t.preventDefault(),e._mousemove(t))}),this._bindEvent(t(document),"down",function(t){e.is.drag&&(t.stopPropagation(),t.preventDefault())}),this._bindEvent(t(document),"up",function(t){e._mouseup(t)}),this._bindEvent(this.ptr,"down",function(t){return e._mousedown(t),!1}),this._bindEvent(this.ptr,"up",function(t){e._mouseup(t)}),this.ptr.find("a").click(function(){return e.is.clicked=!0,e.is.toclick?void 0:(e.is.toclick=!0,!1)}).mousedown(function(t){return e._mousedown(t),!1}),this.events()},_mousedown:function(e){this.is.drag=!0,this.is.clicked=!1,this.is.mouseup=!1;var i=this.ptr.offset(),s=this._getPageCoords(e);this.cx=s.x-i.left,this.cy=s.y-i.top,t.extend(this.d,{left:i.left,top:i.top,width:this.ptr.width(),height:this.ptr.height()}),this.outer&&this.outer.get(0)&&this.outer.css({height:Math.max(this.outer.height(),t(document.body).height()),overflow:"hidden"}),this.onmousedown(e)},_mousemove:function(t){this.is.toclick=!1;var e=this._getPageCoords(t);this.onmousemove(t,e.x-this.cx,e.y-this.cy)},_mouseup:function(e){this.is.drag&&(this.is.drag=!1,this.outer&&this.outer.get(0)&&(t.browser.mozilla?this.outer.css({overflow:"hidden"}):this.outer.css({overflow:"visible"}),t.browser.msie&&"6.0"==t.browser.version?this.outer.css({height:"100%"}):this.outer.css({height:"auto"})),this.onmouseup(e))}}}(jQuery),function(t){function e(){this.baseConstructor.apply(this,arguments)}t.jslider=function(e,i){var s=t(e);return s.data("jslider")||s.data("jslider",new jSlider(e,i)),s.data("jslider")},t.fn.jslider=function(e,i){function s(t){return void 0!==t}function n(t){return null!=t}var o,r=arguments;return this.each(function(){var a=t.jslider(this,e);if("string"==typeof e)switch(e){case"value":if(s(r[1])&&s(r[2])){var h=a.getPointers();n(h[0])&&n(r[1])&&(h[0].set(r[1]),h[0].setIndexOver()),n(h[1])&&n(r[2])&&(h[1].set(r[2]),h[1].setIndexOver())}else if(s(r[1])){var h=a.getPointers();n(h[0])&&n(r[1])&&(h[0].set(r[1]),h[0].setIndexOver())}else o=a.getValue();break;case"prc":if(s(r[1])&&s(r[2])){var h=a.getPointers();n(h[0])&&n(r[1])&&(h[0]._set(r[1]),h[0].setIndexOver()),n(h[1])&&n(r[2])&&(h[1]._set(r[2]),h[1].setIndexOver())}else if(s(r[1])){var h=a.getPointers();n(h[0])&&n(r[1])&&(h[0]._set(r[1]),h[0].setIndexOver())}else o=a.getPrcValue();break;case"calculatedValue":var l=a.getValue().split(";");o="";for(var u=0;u<l.length;u++)o+=(u>0?";":"")+a.nice(l[u]);break;case"skin":a.setSkin(r[1])}else e||i||(jSliderIsArray(o)||(o=[]),o.push(jslider))}),jSliderIsArray(o)&&1==o.length&&(o=o[0]),o||this};var i={settings:{from:1,to:10,step:1,smooth:!0,limits:!0,round:0,value:"5;7",dimension:""},className:"jslider",selector:".jslider-",template:jSliderTmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l"><i></i></i><i class="r"><i></i></i><i class="v"><i></i></i></div><div class="<%=className%>-pointer"><i></i></div><div class="<%=className%>-pointer <%=className%>-pointer-to"><i></i></div><div class="<%=className%>-label"><span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div><div class="<%=className%>-value"><span></span><%=settings.dimension%></div><div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div><div class="<%=className%>-scale"><%=scale%></div></td></tr></table></span>')};this.jSlider=function(){return this.init.apply(this,arguments)},jSlider.prototype={init:function(e,s){this.settings=t.extend(!0,{},i.settings,s?s:{}),this.inputNode=t(e).hide(),this.settings.interval=this.settings.to-this.settings.from,this.settings.value=this.inputNode.attr("value"),this.settings.calculate&&t.isFunction(this.settings.calculate)&&(this.nice=this.settings.calculate),this.settings.onstatechange&&t.isFunction(this.settings.onstatechange)&&(this.onstatechange=this.settings.onstatechange),this.is={init:!1},this.o={},this.create()},onstatechange:function(){},create:function(){var s=this;this.domNode=t(i.template({className:i.className,settings:{from:this.nice(this.settings.from),to:this.nice(this.settings.to),dimension:this.settings.dimension},scale:this.generateScale()})),this.inputNode.after(this.domNode),this.drawScale(),this.settings.skin&&this.settings.skin.length>0&&this.setSkin(this.settings.skin),this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},t.extend(this.o,{pointers:{},labels:{0:{o:this.domNode.find(i.selector+"value").not(i.selector+"value-to")},1:{o:this.domNode.find(i.selector+"value").filter(i.selector+"value-to")}},limits:{0:this.domNode.find(i.selector+"label").not(i.selector+"label-to"),1:this.domNode.find(i.selector+"label").filter(i.selector+"label-to")}}),t.extend(this.o.labels[0],{value:this.o.labels[0].o.find("span")}),t.extend(this.o.labels[1],{value:this.o.labels[1].o.find("span")}),s.settings.value.split(";")[1]||(this.settings.single=!0,this.domNode.addDependClass("single")),s.settings.limits||this.domNode.addDependClass("limitless"),this.domNode.find(i.selector+"pointer").each(function(t){var i=s.settings.value.split(";")[t];if(i){s.o.pointers[t]=new e(this,t,s);var n=s.settings.value.split(";")[t-1];n&&new Number(i)<new Number(n)&&(i=n),i=i<s.settings.from?s.settings.from:i,i=i>s.settings.to?s.settings.to:i,s.o.pointers[t].set(i,!0)}}),this.o.value=this.domNode.find(".v"),this.is.init=!0,t.each(this.o.pointers,function(){s.redraw(this)}),function(e){t(window).resize(function(){e.onresize()})}(this)},setSkin:function(t){this.skin_&&this.domNode.removeDependClass(this.skin_,"_"),this.domNode.addDependClass(this.skin_=t,"_")},setPointersIndex:function(){t.each(this.getPointers(),function(t){this.index(t)})},getPointers:function(){return this.o.pointers},generateScale:function(){if(this.settings.scale&&this.settings.scale.length>0){for(var t="",e=this.settings.scale,i=Math.round(100/(e.length-1)*10)/10,s=0;s<e.length;s++)t+='<span style="left: '+s*i+'%">'+("|"!=e[s]?"<ins>"+e[s]+"</ins>":"")+"</span>";return t}return""},drawScale:function(){this.domNode.find(i.selector+"scale span ins").each(function(){t(this).css({marginLeft:-t(this).outerWidth()/2})})},onresize:function(){var e=this;this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},t.each(this.o.pointers,function(){e.redraw(this)})},limits:function(t,e){if(!this.settings.smooth){var i=100*this.settings.step/this.settings.interval;t=Math.round(t/i)*i}var s=this.o.pointers[1-e.uid];return s&&e.uid&&t<s.value.prc&&(t=s.value.prc),s&&!e.uid&&t>s.value.prc&&(t=s.value.prc),0>t&&(t=0),t>100&&(t=100),Math.round(10*t)/10},redraw:function(t){return this.is.init?(this.setValue(),this.o.pointers[0]&&this.o.pointers[1]&&this.o.value.css({left:this.o.pointers[0].value.prc+"%",width:this.o.pointers[1].value.prc-this.o.pointers[0].value.prc+"%"}),this.o.labels[t.uid].value.html(this.nice(t.value.origin)),this.redrawLabels(t),void 0):!1},redrawLabels:function(t){function e(t,e,s){return e.margin=-e.label/2,label_left=e.border+e.margin,0>label_left&&(e.margin-=label_left),e.border+e.label/2>i.sizes.domWidth?(e.margin=0,e.right=!0):e.right=!1,t.o.css({left:s+"%",marginLeft:e.margin,right:"auto"}),e.right&&t.o.css({left:"auto",right:0}),e}var i=this,s=this.o.labels[t.uid],n=t.value.prc,o={label:s.o.outerWidth(),right:!1,border:n*this.sizes.domWidth/100};if(!this.settings.single){var r=this.o.pointers[1-t.uid],a=this.o.labels[r.uid];switch(t.uid){case 0:o.border+o.label/2>a.o.offset().left-this.sizes.domOffset.left?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(r.value.origin)),s.o.css({visibility:"visible"}),n=(r.value.prc-n)/2+n,r.value.prc!=t.value.prc&&(s.value.html(this.nice(t.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(r.value.origin)),o.label=s.o.outerWidth(),o.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"});break;case 1:o.border-o.label/2<a.o.offset().left-this.sizes.domOffset.left+a.o.outerWidth()?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(r.value.origin)),s.o.css({visibility:"visible"}),n=(n-r.value.prc)/2+r.value.prc,r.value.prc!=t.value.prc&&(s.value.html(this.nice(r.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(t.value.origin)),o.label=s.o.outerWidth(),o.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"})}}if(o=e(s,o,n),a){var o={label:a.o.outerWidth(),right:!1,border:r.value.prc*this.sizes.domWidth/100};o=e(a,o,r.value.prc)}this.redrawLimits()},redrawLimits:function(){if(this.settings.limits){var t=[!0,!0];for(key in this.o.pointers)if(!this.settings.single||0==key){var e=this.o.pointers[key],i=this.o.labels[e.uid],s=i.o.offset().left-this.sizes.domOffset.left,n=this.o.limits[0];s<n.outerWidth()&&(t[0]=!1);var n=this.o.limits[1];s+i.o.outerWidth()>this.sizes.domWidth-n.outerWidth()&&(t[1]=!1)}for(var o=0;o<t.length;o++)t[o]?this.o.limits[o].fadeIn("fast"):this.o.limits[o].fadeOut("fast")}},setValue:function(){var t=this.getValue();this.inputNode.attr("value",t),this.onstatechange.call(this,t)},getValue:function(){if(!this.is.init)return!1;var e=this,i="";return t.each(this.o.pointers,function(t){void 0==this.value.prc||isNaN(this.value.prc)||(i+=(t>0?";":"")+e.prcToValue(this.value.prc))}),i},getPrcValue:function(){if(!this.is.init)return!1;var e="";return t.each(this.o.pointers,function(t){void 0==this.value.prc||isNaN(this.value.prc)||(e+=(t>0?";":"")+this.value.prc)}),e},prcToValue:function(t){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0)for(var e=this.settings.heterogeneity,i=0,s=this.settings.from,n=0;n<=e.length;n++){if(e[n])var o=e[n].split("/");else var o=[100,this.settings.to];if(o[0]=new Number(o[0]),o[1]=new Number(o[1]),t>=i&&t<=o[0])var r=s+(t-i)*(o[1]-s)/(o[0]-i);i=o[0],s=o[1]}else var r=this.settings.from+t*this.settings.interval/100;return this.round(r)},valueToPrc:function(t,e){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0)for(var i=this.settings.heterogeneity,s=0,n=this.settings.from,o=0;o<=i.length;o++){if(i[o])var r=i[o].split("/");else var r=[100,this.settings.to];if(r[0]=new Number(r[0]),r[1]=new Number(r[1]),t>=n&&t<=r[1])var a=e.limits(s+(t-n)*(r[0]-s)/(r[1]-n));s=r[0],n=r[1]}else var a=e.limits(100*(t-this.settings.from)/this.settings.interval);return a},round:function(t){return t=Math.round(t/this.settings.step)*this.settings.step,t=this.settings.round?Math.round(t*Math.pow(10,this.settings.round))/Math.pow(10,this.settings.round):Math.round(t)},nice:function(t){return t=t.toString().replace(/,/gi,"."),t=t.toString().replace(/ /gi,""),Number.prototype.jSliderNice?new Number(t).jSliderNice(this.settings.round).replace(/-/gi,"&minus;"):new Number(t)}},e.inheritFrom(Draggable,{oninit:function(t,e,i){this.uid=e,this.parent=i,this.value={},this.settings=this.parent.settings},onmousedown:function(){this._parent={offset:this.parent.domNode.offset(),width:this.parent.domNode.width()},this.ptr.addDependClass("hover"),this.setIndexOver()},onmousemove:function(t){var e=this._getPageCoords(t);this._set(this.calc(e.x))},onmouseup:function(){this.parent.settings.callback&&t.isFunction(this.parent.settings.callback)&&this.parent.settings.callback.call(this.parent,this.parent.getValue()),this.ptr.removeDependClass("hover")},setIndexOver:function(){this.parent.setPointersIndex(1),this.index(2)},index:function(t){this.ptr.css({zIndex:t})},limits:function(t){return this.parent.limits(t,this)},calc:function(t){var e=this.limits(100*(t-this._parent.offset.left)/this._parent.width);return e},set:function(t,e){this.value.origin=this.parent.round(t),this._set(this.parent.valueToPrc(t,this),e)},_set:function(t,e){e||(this.value.origin=this.parent.prcToValue(t)),this.value.prc=t,this.ptr.css({left:t+"%"}),this.parent.redraw(this)}})}(jQuery);

/**
 * Slider Pagination Concept
 * jquery.pagination.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
!function(t){"use strict";t.Slider=function(t,i){this.$el=i,this.range=t.range,this.value=t.value,this.total=t.total,this.width=t.width,this._create()},t.Slider.prototype={_create:function(){ this.slider=this.$el.slider({ range: this.range ,value:this.value,min:1,max:this.total,step:1}),this.$value=t("<span>"+this.value+"</span>"),this.getHandle().append(this.$value)},setValue:function(t){this.value=t,this.$value.text(t),this.slider.slider("value",t)},getValue:function(){return this.value},getHandle:function(){return this.$el.find("a.ui-slider-handle")},getSlider:function(){return this.slider},getSliderEl:function(){return this.$el},next:function(t){this.value<this.total&&(this.setValue(++this.value),t&&t.call(this,this.value))},previous:function(t){this.value>1&&(this.setValue(--this.value),t&&t.call(this,this.value))}},t.Pagination=function(i,n){this.$el=t(n),this._init(i)},t.Pagination.defaults={  value:1,total:5,width:200,onChange:function(){return!1},onSlide:function(){return!1}},t.Pagination.prototype={_init:function(i){this.options=t.extend(!0,{},t.Pagination.defaults,i);var n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.transEndEventName=n[Modernizr.prefixed("transition")],t.fn.applyStyle=Modernizr.csstransitions?t.fn.css:t.fn.animate,this._layout(),this._initEvents()},_layout:function(){this.$navNext=this.$el.find("nav > a.cp-next"),this.$navPrev=this.$el.find("nav > a.cp-prev");var i=t('<div class="cp-slider"></div>').appendTo(this.$el);this.slider=new t.Slider({ range: this.options.range, value:this.options.value,total:this.options.total,width:this.options.width},i),this.isSliderOpened=this.options.sliderOpened},_initEvents:function(){var i=this;this.slider.getHandle().on("click",function(){return i.isSliderOpened?!1:(i.isSliderOpened=!0,i.slider.getSliderEl().addClass("cp-slider-open"),i.$el.stop().applyStyle({width:i.options.width},t.extend(!0,[],{duration:"150ms"})),i.toggleNavigation(!1),!1)}),this.slider.getSlider().on({slidestop:function(n,e){if(!i.isSliderOpened)return!1;var s=function(){i.isSliderOpened=!1,i.slider.getSliderEl().removeClass("cp-slider-open"),i.toggleNavigation(!0)};i.$el.stop().applyStyle({width:0},t.extend(!0,[],{duration:"150ms",complete:s})).on(i.transEndEventName,function(){t(this).off(i.transEndEventName),s.call()}),i.options.onChange(e.value)},slide:function(t,n){return i.isSliderOpened?(i.slider.setValue(n.value),i.options.onSlide(n.value),void 0):!1}}),this.$navNext.on("click",function(){return i.slider.next(function(t){i.options.onChange(t)}),!1}),this.$navPrev.on("click",function(){return i.slider.previous(function(t){i.options.onChange(t)}),!1})},toggleNavigation:function(i){t.fn.render=i?t.fn.show:t.fn.hide,this.$navNext.render(),this.$navPrev.render()}},t.fn.modernSlider=function(i){var n=t.data(this,"pagination");if("string"==typeof i){var e=Array.prototype.slice.call(arguments,1);this.each(function(){n[i].apply(n,e)})}else this.each(function(){n?n._init():n=t.data(this,"pagination",new t.Pagination(i,this))});return n}}(jQuery,window);

/**
 * @name        jQuery FullScreen Plugin
 * @author      Martin Angelov, Morten Sjøgren
 * @version     1.2
 * @url         http://tutorialzine.com/2012/02/enhance-your-website-fullscreen-api/
 * @license     MIT License
 */

/*jshint browser: true, jquery: true */
(function($){
	"use strict";

	// These helper functions available only to our plugin scope.
	function supportFullScreen(){
		var doc = document.documentElement;

		return ('requestFullscreen' in doc) ||
				('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
				('webkitRequestFullScreen' in doc);
	}

	function requestFullScreen(elem){
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullScreen) {
			elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	}

	function fullScreenStatus(){
		return document.fullscreen ||
				document.mozFullScreen ||
				document.webkitIsFullScreen ||
				false;
	}

	function cancelFullScreen(){
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}

	function onFullScreenEvent(callback){
		$(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function(){
			// The full screen status is automatically
			// passed to our callback as an argument.
			callback(fullScreenStatus());
		});
	}

	// Adding a new test to the jQuery support object
	$.support.fullscreen = supportFullScreen();

	// Creating the plugin
	$.fn.fullScreen = function(props){
		if(!$.support.fullscreen || this.length !== 1) {
			// The plugin can be called only
			// on one element at a time

			return this;
		}

		if(fullScreenStatus()){
			// if we are already in fullscreen, exit
			cancelFullScreen();
			return this;
		}

		// You can potentially pas two arguments a color
		// for the background and a callback function

		var options = $.extend({
			'background'      : '#111',
			'callback'        : $.noop( ),
			'fullscreenClass' : 'fullScreen'
		}, props),

		elem = this,

		// This temporary div is the element that is
		// actually going to be enlarged in full screen

		fs = $('<div>', {
			'css' : {
				'overflow-y' : 'auto',
				'background' : options.background,
				'width'      : '100%',
				'height'     : '100%'
			}
		})
			.insertBefore(elem)
			.append(elem);

		// You can use the .fullScreen class to
		// apply styling to your element
		elem.addClass( options.fullscreenClass );

		// Inserting our element in the temporary
		// div, after which we zoom it in fullscreen

		requestFullScreen(fs.get(0));

		fs.click(function(e){
			if(e.target == this){
				// If the black bar was clicked
				cancelFullScreen();
			}
		});

		elem.cancel = function(){
			cancelFullScreen();
			return elem;
		};

		onFullScreenEvent(function(fullScreen){
			if(!fullScreen){
				// We have exited full screen.
			        // Detach event listener
			        $(document).off( 'fullscreenchange mozfullscreenchange webkitfullscreenchange' );
				// Remove the class and destroy
				// the temporary div

				elem.removeClass( options.fullscreenClass ).insertBefore(fs);
				fs.remove();
			}

			// Calling the facultative user supplied callback
			if(options.callback) {
                            options.callback(fullScreen);
                        }
		});

		return elem;
	};

	$.fn.cancelFullScreen = function( ) {
			cancelFullScreen();

			return this;
	};
}(jQuery));


/*!
 * jQuery twitter bootstrap wizard plugin
 * Examples and documentation at: http://github.com/VinceG/twitter-bootstrap-wizard
 * version 1.0
 * Requires jQuery v1.3.2 or later
 * Supports Bootstrap 2.2.x, 2.3.x, 3.0
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Vadim Vincent Gabriel (http://vadimg.com), Jason Gill (www.gilluminate.com)
 */
(function(e){var k=function(d,g){d=e(d);var a=this,b=e.extend({},e.fn.bootstrapWizard.defaults,g),f=null,c=null;this.rebindClick=function(b,a){b.unbind("click",a).bind("click",a)};this.fixNavigationButtons=function(){f.length||(c.find("a:first").tab("show"),f=c.find('li:has([data-toggle="tab"]):first'));e(b.previousSelector,d).toggleClass("disabled",a.firstIndex()>=a.currentIndex());e(b.nextSelector,d).toggleClass("disabled",a.currentIndex()>=a.navigationLength());a.rebindClick(e(b.nextSelector,d),
a.next);a.rebindClick(e(b.previousSelector,d),a.previous);a.rebindClick(e(b.lastSelector,d),a.last);a.rebindClick(e(b.firstSelector,d),a.first);if(b.onTabShow&&"function"===typeof b.onTabShow&&!1===b.onTabShow(f,c,a.currentIndex()))return!1};this.next=function(h){if(d.hasClass("last")||b.onNext&&"function"===typeof b.onNext&&!1===b.onNext(f,c,a.nextIndex()))return!1;$index=a.nextIndex();$index>a.navigationLength()||c.find('li:has([data-toggle="tab"]):eq('+$index+") a").tab("show")};this.previous=
function(h){if(d.hasClass("first")||b.onPrevious&&"function"===typeof b.onPrevious&&!1===b.onPrevious(f,c,a.previousIndex()))return!1;$index=a.previousIndex();0>$index||c.find('li:has([data-toggle="tab"]):eq('+$index+") a").tab("show")};this.first=function(h){if(b.onFirst&&"function"===typeof b.onFirst&&!1===b.onFirst(f,c,a.firstIndex())||d.hasClass("disabled"))return!1;c.find('li:has([data-toggle="tab"]):eq(0) a').tab("show")};this.last=function(h){if(b.onLast&&"function"===typeof b.onLast&&!1===
b.onLast(f,c,a.lastIndex())||d.hasClass("disabled"))return!1;c.find('li:has([data-toggle="tab"]):eq('+a.navigationLength()+") a").tab("show")};this.currentIndex=function(){return c.find('li:has([data-toggle="tab"])').index(f)};this.firstIndex=function(){return 0};this.lastIndex=function(){return a.navigationLength()};this.getIndex=function(a){return c.find('li:has([data-toggle="tab"])').index(a)};this.nextIndex=function(){return c.find('li:has([data-toggle="tab"])').index(f)+1};this.previousIndex=
function(){return c.find('li:has([data-toggle="tab"])').index(f)-1};this.navigationLength=function(){return c.find('li:has([data-toggle="tab"])').length-1};this.activeTab=function(){return f};this.nextTab=function(){return c.find('li:has([data-toggle="tab"]):eq('+(a.currentIndex()+1)+")").length?c.find('li:has([data-toggle="tab"]):eq('+(a.currentIndex()+1)+")"):null};this.previousTab=function(){return 0>=a.currentIndex()?null:c.find('li:has([data-toggle="tab"]):eq('+parseInt(a.currentIndex()-1)+")")};
this.show=function(a){return d.find('li:has([data-toggle="tab"]):eq('+a+") a").tab("show")};this.disable=function(a){c.find('li:has([data-toggle="tab"]):eq('+a+")").addClass("disabled")};this.enable=function(a){c.find('li:has([data-toggle="tab"]):eq('+a+")").removeClass("disabled")};this.hide=function(a){c.find('li:has([data-toggle="tab"]):eq('+a+")").hide()};this.display=function(a){c.find('li:has([data-toggle="tab"]):eq('+a+")").show()};this.remove=function(a){var b="undefined"!=typeof a[1]?a[1]:
!1;a=c.find('li:has([data-toggle="tab"]):eq('+a[0]+")");b&&(b=a.find("a").attr("href"),e(b).remove());a.remove()};c=d.find("ul:first",d);f=c.find('li:has([data-toggle="tab"]).active',d);c.hasClass(b.tabClass)||c.addClass(b.tabClass);if(b.onInit&&"function"===typeof b.onInit)b.onInit(f,c,0);if(b.onShow&&"function"===typeof b.onShow)b.onShow(f,c,a.nextIndex());a.fixNavigationButtons();e('a[data-toggle="tab"]',c).on("click",function(d){d=c.find('li:has([data-toggle="tab"])').index(e(d.currentTarget).parent('li:has([data-toggle="tab"])'));
if(b.onTabClick&&"function"===typeof b.onTabClick&&!1===b.onTabClick(f,c,a.currentIndex(),d))return!1});e('a[data-toggle="tab"]',c).on("shown shown.bs.tab",function(d){$element=e(d.target).parent();d=c.find('li:has([data-toggle="tab"])').index($element);if($element.hasClass("disabled")||b.onTabChange&&"function"===typeof b.onTabChange&&!1===b.onTabChange(f,c,a.currentIndex(),d))return!1;f=$element;a.fixNavigationButtons()})};e.fn.bootstrapWizard=function(d){if("string"==typeof d){var g=Array.prototype.slice.call(arguments,
1);1===g.length&&g.toString();return this.data("bootstrapWizard")[d](g)}return this.each(function(a){a=e(this);if(!a.data("bootstrapWizard")){var b=new k(a,d);a.data("bootstrapWizard",b)}})};e.fn.bootstrapWizard.defaults={tabClass:"nav nav-pills",nextSelector:".wizard .next",previousSelector:".wizard .previous",firstSelector:".wizard  .first",lastSelector:".wizard  .last",onShow:null,onInit:null,onNext:null,onPrevious:null,onLast:null,onFirst:null,onTabChange:null,onTabClick:null,onTabShow:null}})(jQuery);



/*
Loading canvas
 throbber.js v 0.1 2011-09-18
 http://aino.com

 Copyright (c) 2011, Aino
 Licensed under the MIT license.
*/
(function(p){var g=p.document,e=Math,l="getContext"in g.createElement("canvas"),h=function(d,a){d=d||{};for(var c in a)d[c]=a[c];return d},m=function(d,a,c){c=c?-2:2;d.translate(a/c,a/c)},t,k,u,q,r;Throbber=function(d){var a=this.elem=g.createElement("canvas"),c=this;isNaN(d)||(d={size:d});this.o={size:34,rotationspeed:6,clockwise:!0,color:"#fff",fade:300,fallback:!1,alpha:1};this.configure(d);this.phase=-1;l?(this.ctx=a.getContext("2d"),a.width=a.height=this.o.size):this.o.fallback&&(a=this.elem=
new Image,a.src=this.o.fallback);this.loop=function(){var b=c.o,d=0,g=1E3/b.fade/b.fps,n=c.step,h=a.style,v="filter"in h&&b.fallback&&!l;return function(){3==c.phase&&(d-=g,0>=d&&(c.phase=0));1==c.phase&&(d+=g,1<=d&&(c.phase=2));if(v)h.filter="alpha(opacity="+e.min(100*b.alpha,e.max(0,Math.round(100*d)))+")";else if(!l&&b.fallback)h.opacity=d;else if(l){var a=c.ctx,s=n;t=1-d||0;q=1;r=-1;var f=b.size;!1===b.clockwise&&(q=-1,r=1);a.clearRect(0,0,f,f);a.globalAlpha=b.alpha;a.lineWidth=b.strokewidth;
for(k=0;k<b.lines;k++)u=k+s>=b.lines?k-b.lines+s:k+s,a.strokeStyle="rgba("+b.color.join(",")+","+e.max(0,u/b.lines-t)+")",a.beginPath(),a.moveTo(f/2,f/2-b.padding/2),a.lineTo(f/2,0),a.stroke(b.strokewidth),m(a,f,!1),a.rotate(q*(360/b.lines)*e.PI/180),m(a,f,!0);b.rotationspeed&&(a.save(),m(a,f,!1),a.rotate(r*(360/b.lines/(20-2*b.rotationspeed))*e.PI/180),m(a,f,!0));n=0===n?c.o.lines:n-1}p.setTimeout(c.loop,1E3/b.fps)}}()};Throbber.prototype={constructor:Throbber,appendTo:function(d){this.elem.style.display=
"none";d.appendChild(this.elem);return this},configure:function(d){var a,c,b=this.o;h(b,d||{});a=b.color;l?(c=g.createElement("i"),c.style.display="none",c.style.color=a,g.body.appendChild(c),a=p.getComputedStyle(c,null).getPropertyValue("color").replace(/^rgba?\(([^\)]+)\)/,"$1").replace(/\s/g,"").split(",").splice(0,4),g.body.removeChild(c),c=4==a.length?a.pop():1):(a=!1,c=1);h(b,h({padding:b.size/2,strokewidth:e.max(1,e.min(b.size/30,3)),lines:e.min(30,b.size/2+4),alpha:c||1,fps:e.min(30,b.size+
4)},d));b.color=a;this.step=b.lines;return this},start:function(){this.elem.style.display="block";-1==this.phase&&this.loop();this.phase=1;return this},stop:function(){this.phase=3;return this},toggle:function(){2==this.phase?this.stop():this.start()}}})(this);