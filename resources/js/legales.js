(function(e,t){function O(e){if(i==="")return e;e=e.charAt(0).toUpperCase()+e.substr(1);return i+e}var n=Math,r=t.createElement("div").style,i=function(){var e="t,webkitT,MozT,msT,OT".split(","),t,n=0,i=e.length;for(;n<i;n++){t=e[n]+"ransform";if(t in r){return e[n].substr(0,e[n].length-1)}}return false}(),s=i?"-"+i.toLowerCase()+"-":"",o=O("transform"),u=O("transitionProperty"),a=O("transitionDuration"),f=O("transformOrigin"),l=O("transitionTimingFunction"),c=O("transitionDelay"),h=/android/gi.test(navigator.appVersion),p=/iphone|ipad/gi.test(navigator.appVersion),d=/hp-tablet/gi.test(navigator.appVersion),v=O("perspective")in r,m="ontouchstart"in e&&!d,g=!!i,y=O("transition")in r,b="onorientationchange"in e?"orientationchange":"resize",w=m?"touchstart":"mousedown",E=m?"touchmove":"mousemove",S=m?"touchend":"mouseup",x=m?"touchcancel":"mouseup",T=i=="Moz"?"DOMMouseScroll":"mousewheel",N=function(){if(i===false)return false;var e={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"};return e[i]}(),C=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){return setTimeout(e,1)}}(),k=function(){return e.cancelRequestAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame||e.mozCancelRequestAnimationFrame||e.oCancelRequestAnimationFrame||e.msCancelRequestAnimationFrame||clearTimeout}(),L=v?" translateZ(0)":"",A=function(n,r){var i=this,c;i.wrapper=typeof n=="object"?n:t.getElementById(n);i.wrapper.style.overflow="hidden";i.scroller=i.wrapper.children[0];i.options={hScroll:true,vScroll:true,x:0,y:0,bounce:true,bounceLock:false,momentum:true,lockDirection:true,useTransform:true,useTransition:false,topOffset:0,checkDOMChanges:false,handleClick:true,hScrollbar:true,vScrollbar:true,fixedScrollbar:h,hideScrollbar:p,fadeScrollbar:p&&v,scrollbarClass:"",zoom:false,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:false,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(e){e.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(c in r)i.options[c]=r[c];i.x=i.options.x;i.y=i.options.y;i.options.useTransform=g&&i.options.useTransform;i.options.hScrollbar=i.options.hScroll&&i.options.hScrollbar;i.options.vScrollbar=i.options.vScroll&&i.options.vScrollbar;i.options.zoom=i.options.useTransform&&i.options.zoom;i.options.useTransition=y&&i.options.useTransition;if(i.options.zoom&&h){L=""}i.scroller.style[u]=i.options.useTransform?s+"transform":"top left";i.scroller.style[a]="0";i.scroller.style[f]="0 0";if(i.options.useTransition)i.scroller.style[l]="cubic-bezier(0.33,0.66,0.66,1)";if(i.options.useTransform)i.scroller.style[o]="translate("+i.x+"px,"+i.y+"px)"+L;else i.scroller.style.cssText+=";position:absolute;top:"+i.y+"px;left:"+i.x+"px";if(i.options.useTransition)i.options.fixedScrollbar=true;i.refresh();i._bind(b,e);i._bind(w);if(!m){i._bind("mouseout",i.wrapper);if(i.options.wheelAction!="none")i._bind(T)}if(i.options.checkDOMChanges)i.checkDOMTime=setInterval(function(){i._checkDOMChanges()},500)};A.prototype={enabled:true,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(e){var t=this;switch(e.type){case w:if(!m&&e.button!==0)return;t._start(e);break;case E:t._move(e);break;case S:case x:t._end(e);break;case b:t._resize();break;case T:t._wheel(e);break;case"mouseout":t._mouseout(e);break;case N:t._transitionEnd(e);break}},_checkDOMChanges:function(){if(this.moved||this.zoomed||this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale)return;this.refresh()},_scrollbar:function(e){var r=this,i;if(!r[e+"Scrollbar"]){if(r[e+"ScrollbarWrapper"]){if(g)r[e+"ScrollbarIndicator"].style[o]="";r[e+"ScrollbarWrapper"].parentNode.removeChild(r[e+"ScrollbarWrapper"]);r[e+"ScrollbarWrapper"]=null;r[e+"ScrollbarIndicator"]=null}return}if(!r[e+"ScrollbarWrapper"]){i=t.createElement("div");if(r.options.scrollbarClass)i.className=r.options.scrollbarClass+e.toUpperCase();else i.style.cssText="position:absolute;z-index:100;"+(e=="h"?"height:7px;bottom:1px;left:2px;right:"+(r.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(r.hScrollbar?"7":"2")+"px;top:2px;right:1px");i.style.cssText+=";pointer-events:none;"+s+"transition-property:opacity;"+s+"transition-duration:"+(r.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(r.options.hideScrollbar?"0":"1");r.wrapper.appendChild(i);r[e+"ScrollbarWrapper"]=i;i=t.createElement("div");if(!r.options.scrollbarClass){i.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+s+"background-clip:padding-box;"+s+"box-sizing:border-box;"+(e=="h"?"height:100%":"width:100%")+";"+s+"border-radius:3px;border-radius:3px"}i.style.cssText+=";pointer-events:none;"+s+"transition-property:"+s+"transform;"+s+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+s+"transition-duration:0;"+s+"transform: translate(0,0)"+L;if(r.options.useTransition)i.style.cssText+=";"+s+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)";r[e+"ScrollbarWrapper"].appendChild(i);r[e+"ScrollbarIndicator"]=i}if(e=="h"){r.hScrollbarSize=r.hScrollbarWrapper.clientWidth;r.hScrollbarIndicatorSize=n.max(n.round(r.hScrollbarSize*r.hScrollbarSize/r.scrollerW),8);r.hScrollbarIndicator.style.width=r.hScrollbarIndicatorSize+"px";r.hScrollbarMaxScroll=r.hScrollbarSize-r.hScrollbarIndicatorSize;r.hScrollbarProp=r.hScrollbarMaxScroll/r.maxScrollX}else{r.vScrollbarSize=r.vScrollbarWrapper.clientHeight;r.vScrollbarIndicatorSize=n.max(n.round(r.vScrollbarSize*r.vScrollbarSize/r.scrollerH),8);r.vScrollbarIndicator.style.height=r.vScrollbarIndicatorSize+"px";r.vScrollbarMaxScroll=r.vScrollbarSize-r.vScrollbarIndicatorSize;r.vScrollbarProp=r.vScrollbarMaxScroll/r.maxScrollY}r._scrollbarPos(e,true)},_resize:function(){var e=this;setTimeout(function(){e.refresh()},h?200:0)},_pos:function(e,t){if(this.zoomed)return;e=this.hScroll?e:0;t=this.vScroll?t:0;if(this.options.useTransform){this.scroller.style[o]="translate("+e+"px,"+t+"px) scale("+this.scale+")"+L}else{e=n.round(e);t=n.round(t);this.scroller.style.left=e+"px";this.scroller.style.top=t+"px"}this.x=e;this.y=t;this._scrollbarPos("h");this._scrollbarPos("v")},_scrollbarPos:function(e,t){var r=this,i=e=="h"?r.x:r.y,s;if(!r[e+"Scrollbar"])return;i=r[e+"ScrollbarProp"]*i;if(i<0){if(!r.options.fixedScrollbar){s=r[e+"ScrollbarIndicatorSize"]+n.round(i*3);if(s<8)s=8;r[e+"ScrollbarIndicator"].style[e=="h"?"width":"height"]=s+"px"}i=0}else if(i>r[e+"ScrollbarMaxScroll"]){if(!r.options.fixedScrollbar){s=r[e+"ScrollbarIndicatorSize"]-n.round((i-r[e+"ScrollbarMaxScroll"])*3);if(s<8)s=8;r[e+"ScrollbarIndicator"].style[e=="h"?"width":"height"]=s+"px";i=r[e+"ScrollbarMaxScroll"]+(r[e+"ScrollbarIndicatorSize"]-s)}else{i=r[e+"ScrollbarMaxScroll"]}}r[e+"ScrollbarWrapper"].style[c]="0";r[e+"ScrollbarWrapper"].style.opacity=t&&r.options.hideScrollbar?"0":"1";r[e+"ScrollbarIndicator"].style[o]="translate("+(e=="h"?i+"px,0)":"0,"+i+"px)")+L},_start:function(e){var t=this,r=m?e.touches[0]:e,i,s,u,a,f;if(!t.enabled)return;if(t.options.onBeforeScrollStart)t.options.onBeforeScrollStart.call(t,e);if(t.options.useTransition||t.options.zoom)t._transitionTime(0);t.moved=false;t.animating=false;t.zoomed=false;t.distX=0;t.distY=0;t.absDistX=0;t.absDistY=0;t.dirX=0;t.dirY=0;if(t.options.zoom&&m&&e.touches.length>1){a=n.abs(e.touches[0].pageX-e.touches[1].pageX);f=n.abs(e.touches[0].pageY-e.touches[1].pageY);t.touchesDistStart=n.sqrt(a*a+f*f);t.originX=n.abs(e.touches[0].pageX+e.touches[1].pageX-t.wrapperOffsetLeft*2)/2-t.x;t.originY=n.abs(e.touches[0].pageY+e.touches[1].pageY-t.wrapperOffsetTop*2)/2-t.y;if(t.options.onZoomStart)t.options.onZoomStart.call(t,e)}if(t.options.momentum){if(t.options.useTransform){i=getComputedStyle(t.scroller,null)[o].replace(/[^0-9\-.,]/g,"").split(",");s=i[4]*1;u=i[5]*1}else{s=getComputedStyle(t.scroller,null).left.replace(/[^0-9-]/g,"")*1;u=getComputedStyle(t.scroller,null).top.replace(/[^0-9-]/g,"")*1}if(s!=t.x||u!=t.y){if(t.options.useTransition)t._unbind(N);else k(t.aniTime);t.steps=[];t._pos(s,u)}}t.absStartX=t.x;t.absStartY=t.y;t.startX=t.x;t.startY=t.y;t.pointX=r.pageX;t.pointY=r.pageY;t.startTime=e.timeStamp||Date.now();if(t.options.onScrollStart)t.options.onScrollStart.call(t,e);t._bind(E);t._bind(S);t._bind(x)},_move:function(e){var t=this,r=m?e.touches[0]:e,i=r.pageX-t.pointX,s=r.pageY-t.pointY,u=t.x+i,a=t.y+s,f,l,c,h=e.timeStamp||Date.now();if(t.options.onBeforeScrollMove)t.options.onBeforeScrollMove.call(t,e);if(t.options.zoom&&m&&e.touches.length>1){f=n.abs(e.touches[0].pageX-e.touches[1].pageX);l=n.abs(e.touches[0].pageY-e.touches[1].pageY);t.touchesDist=n.sqrt(f*f+l*l);t.zoomed=true;c=1/t.touchesDistStart*t.touchesDist*this.scale;if(c<t.options.zoomMin)c=.5*t.options.zoomMin*Math.pow(2,c/t.options.zoomMin);else if(c>t.options.zoomMax)c=2*t.options.zoomMax*Math.pow(.5,t.options.zoomMax/c);t.lastScale=c/this.scale;u=this.originX-this.originX*t.lastScale+this.x,a=this.originY-this.originY*t.lastScale+this.y;this.scroller.style[o]="translate("+u+"px,"+a+"px) scale("+c+")"+L;if(t.options.onZoom)t.options.onZoom.call(t,e);return}t.pointX=r.pageX;t.pointY=r.pageY;if(u>0||u<t.maxScrollX){u=t.options.bounce?t.x+i/2:u>=0||t.maxScrollX>=0?0:t.maxScrollX}if(a>t.minScrollY||a<t.maxScrollY){a=t.options.bounce?t.y+s/2:a>=t.minScrollY||t.maxScrollY>=0?t.minScrollY:t.maxScrollY}t.distX+=i;t.distY+=s;t.absDistX=n.abs(t.distX);t.absDistY=n.abs(t.distY);if(t.absDistX<6&&t.absDistY<6){return}if(t.options.lockDirection){if(t.absDistX>t.absDistY+5){a=t.y;s=0}else if(t.absDistY>t.absDistX+5){u=t.x;i=0}}t.moved=true;t._pos(u,a);t.dirX=i>0?-1:i<0?1:0;t.dirY=s>0?-1:s<0?1:0;if(h-t.startTime>300){t.startTime=h;t.startX=t.x;t.startY=t.y}if(t.options.onScrollMove)t.options.onScrollMove.call(t,e)},_end:function(e){if(m&&e.touches.length!==0)return;var r=this,i=m?e.changedTouches[0]:e,s,u,f={dist:0,time:0},l={dist:0,time:0},c=(e.timeStamp||Date.now())-r.startTime,h=r.x,p=r.y,d,v,g,y,b;r._unbind(E);r._unbind(S);r._unbind(x);if(r.options.onBeforeScrollEnd)r.options.onBeforeScrollEnd.call(r,e);if(r.zoomed){b=r.scale*r.lastScale;b=Math.max(r.options.zoomMin,b);b=Math.min(r.options.zoomMax,b);r.lastScale=b/r.scale;r.scale=b;r.x=r.originX-r.originX*r.lastScale+r.x;r.y=r.originY-r.originY*r.lastScale+r.y;r.scroller.style[a]="200ms";r.scroller.style[o]="translate("+r.x+"px,"+r.y+"px) scale("+r.scale+")"+L;r.zoomed=false;r.refresh();if(r.options.onZoomEnd)r.options.onZoomEnd.call(r,e);return}if(!r.moved){if(m){if(r.doubleTapTimer&&r.options.zoom){clearTimeout(r.doubleTapTimer);r.doubleTapTimer=null;if(r.options.onZoomStart)r.options.onZoomStart.call(r,e);r.zoom(r.pointX,r.pointY,r.scale==1?r.options.doubleTapZoom:1);if(r.options.onZoomEnd){setTimeout(function(){r.options.onZoomEnd.call(r,e)},200)}}else if(this.options.handleClick){r.doubleTapTimer=setTimeout(function(){r.doubleTapTimer=null;s=i.target;while(s.nodeType!=1)s=s.parentNode;if(s.tagName!="SELECT"&&s.tagName!="INPUT"&&s.tagName!="TEXTAREA"){u=t.createEvent("MouseEvents");u.initMouseEvent("click",true,true,e.view,1,i.screenX,i.screenY,i.clientX,i.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null);u._fake=true;s.dispatchEvent(u)}},r.options.zoom?250:0)}}r._resetPos(200);if(r.options.onTouchEnd)r.options.onTouchEnd.call(r,e);return}if(c<300&&r.options.momentum){f=h?r._momentum(h-r.startX,c,-r.x,r.scrollerW-r.wrapperW+r.x,r.options.bounce?r.wrapperW:0):f;l=p?r._momentum(p-r.startY,c,-r.y,r.maxScrollY<0?r.scrollerH-r.wrapperH+r.y-r.minScrollY:0,r.options.bounce?r.wrapperH:0):l;h=r.x+f.dist;p=r.y+l.dist;if(r.x>0&&h>0||r.x<r.maxScrollX&&h<r.maxScrollX)f={dist:0,time:0};if(r.y>r.minScrollY&&p>r.minScrollY||r.y<r.maxScrollY&&p<r.maxScrollY)l={dist:0,time:0}}if(f.dist||l.dist){g=n.max(n.max(f.time,l.time),10);if(r.options.snap){d=h-r.absStartX;v=p-r.absStartY;if(n.abs(d)<r.options.snapThreshold&&n.abs(v)<r.options.snapThreshold){r.scrollTo(r.absStartX,r.absStartY,200)}else{y=r._snap(h,p);h=y.x;p=y.y;g=n.max(y.time,g)}}r.scrollTo(n.round(h),n.round(p),g);if(r.options.onTouchEnd)r.options.onTouchEnd.call(r,e);return}if(r.options.snap){d=h-r.absStartX;v=p-r.absStartY;if(n.abs(d)<r.options.snapThreshold&&n.abs(v)<r.options.snapThreshold)r.scrollTo(r.absStartX,r.absStartY,200);else{y=r._snap(r.x,r.y);if(y.x!=r.x||y.y!=r.y)r.scrollTo(y.x,y.y,y.time)}if(r.options.onTouchEnd)r.options.onTouchEnd.call(r,e);return}r._resetPos(200);if(r.options.onTouchEnd)r.options.onTouchEnd.call(r,e)},_resetPos:function(e){var t=this,n=t.x>=0?0:t.x<t.maxScrollX?t.maxScrollX:t.x,r=t.y>=t.minScrollY||t.maxScrollY>0?t.minScrollY:t.y<t.maxScrollY?t.maxScrollY:t.y;if(n==t.x&&r==t.y){if(t.moved){t.moved=false;if(t.options.onScrollEnd)t.options.onScrollEnd.call(t)}if(t.hScrollbar&&t.options.hideScrollbar){if(i=="webkit")t.hScrollbarWrapper.style[c]="300ms";t.hScrollbarWrapper.style.opacity="0"}if(t.vScrollbar&&t.options.hideScrollbar){if(i=="webkit")t.vScrollbarWrapper.style[c]="300ms";t.vScrollbarWrapper.style.opacity="0"}return}t.scrollTo(n,r,e||0)},_wheel:function(e){var t=this,n,r,i,s,o;if("wheelDeltaX"in e){n=e.wheelDeltaX/12;r=e.wheelDeltaY/12}else if("wheelDelta"in e){n=r=e.wheelDelta/12}else if("detail"in e){n=r=-e.detail*3}else{return}if(t.options.wheelAction=="zoom"){o=t.scale*Math.pow(2,1/3*(r?r/Math.abs(r):0));if(o<t.options.zoomMin)o=t.options.zoomMin;if(o>t.options.zoomMax)o=t.options.zoomMax;if(o!=t.scale){if(!t.wheelZoomCount&&t.options.onZoomStart)t.options.onZoomStart.call(t,e);t.wheelZoomCount++;t.zoom(e.pageX,e.pageY,o,400);setTimeout(function(){t.wheelZoomCount--;if(!t.wheelZoomCount&&t.options.onZoomEnd)t.options.onZoomEnd.call(t,e)},400)}return}i=t.x+n;s=t.y+r;if(i>0)i=0;else if(i<t.maxScrollX)i=t.maxScrollX;if(s>t.minScrollY)s=t.minScrollY;else if(s<t.maxScrollY)s=t.maxScrollY;if(t.maxScrollY<0){t.scrollTo(i,s,0)}},_mouseout:function(e){var t=e.relatedTarget;if(!t){this._end(e);return}while(t=t.parentNode)if(t==this.wrapper)return;this._end(e)},_transitionEnd:function(e){var t=this;if(e.target!=t.scroller)return;t._unbind(N);t._startAni()},_startAni:function(){var e=this,t=e.x,r=e.y,i=Date.now(),s,o,u;if(e.animating)return;if(!e.steps.length){e._resetPos(400);return}s=e.steps.shift();if(s.x==t&&s.y==r)s.time=0;e.animating=true;e.moved=true;if(e.options.useTransition){e._transitionTime(s.time);e._pos(s.x,s.y);e.animating=false;if(s.time)e._bind(N);else e._resetPos(0);return}u=function(){var a=Date.now(),f,l;if(a>=i+s.time){e._pos(s.x,s.y);e.animating=false;if(e.options.onAnimationEnd)e.options.onAnimationEnd.call(e);e._startAni();return}a=(a-i)/s.time-1;o=n.sqrt(1-a*a);f=(s.x-t)*o+t;l=(s.y-r)*o+r;e._pos(f,l);if(e.animating)e.aniTime=C(u)};u()},_transitionTime:function(e){e+="ms";this.scroller.style[a]=e;if(this.hScrollbar)this.hScrollbarIndicator.style[a]=e;if(this.vScrollbar)this.vScrollbarIndicator.style[a]=e},_momentum:function(e,t,r,i,s){var o=6e-4,u=n.abs(e)/t,a=u*u/(2*o),f=0,l=0;if(e>0&&a>r){l=s/(6/(a/u*o));r=r+l;u=u*r/a;a=r}else if(e<0&&a>i){l=s/(6/(a/u*o));i=i+l;u=u*i/a;a=i}a=a*(e<0?-1:1);f=u/o;return{dist:a,time:n.round(f)}},_offset:function(e){var t=-e.offsetLeft,n=-e.offsetTop;while(e=e.offsetParent){t-=e.offsetLeft;n-=e.offsetTop}if(e!=this.wrapper){t*=this.scale;n*=this.scale}return{left:t,top:n}},_snap:function(e,t){var r=this,i,s,o,u,a,f;o=r.pagesX.length-1;for(i=0,s=r.pagesX.length;i<s;i++){if(e>=r.pagesX[i]){o=i;break}}if(o==r.currPageX&&o>0&&r.dirX<0)o--;e=r.pagesX[o];a=n.abs(e-r.pagesX[r.currPageX]);a=a?n.abs(r.x-e)/a*500:0;r.currPageX=o;o=r.pagesY.length-1;for(i=0;i<o;i++){if(t>=r.pagesY[i]){o=i;break}}if(o==r.currPageY&&o>0&&r.dirY<0)o--;t=r.pagesY[o];f=n.abs(t-r.pagesY[r.currPageY]);f=f?n.abs(r.y-t)/f*500:0;r.currPageY=o;u=n.round(n.max(a,f))||200;return{x:e,y:t,time:u}},_bind:function(e,t,n){(t||this.scroller).addEventListener(e,this,!!n)},_unbind:function(e,t,n){(t||this.scroller).removeEventListener(e,this,!!n)},destroy:function(){var t=this;t.scroller.style[o]="";t.hScrollbar=false;t.vScrollbar=false;t._scrollbar("h");t._scrollbar("v");t._unbind(b,e);t._unbind(w);t._unbind(E);t._unbind(S);t._unbind(x);if(!t.options.hasTouch){t._unbind("mouseout",t.wrapper);t._unbind(T)}if(t.options.useTransition)t._unbind(N);if(t.options.checkDOMChanges)clearInterval(t.checkDOMTime);if(t.options.onDestroy)t.options.onDestroy.call(t)},refresh:function(){var e=this,t,r,i,s,o=0,u=0;if(e.scale<e.options.zoomMin)e.scale=e.options.zoomMin;e.wrapperW=e.wrapper.clientWidth||1;e.wrapperH=e.wrapper.clientHeight||1;e.minScrollY=-e.options.topOffset||0;e.scrollerW=n.round(e.scroller.offsetWidth*e.scale);e.scrollerH=n.round((e.scroller.offsetHeight+e.minScrollY)*e.scale);e.maxScrollX=e.wrapperW-e.scrollerW;e.maxScrollY=e.wrapperH-e.scrollerH+e.minScrollY;e.dirX=0;e.dirY=0;if(e.options.onRefresh)e.options.onRefresh.call(e);e.hScroll=e.options.hScroll&&e.maxScrollX<0;e.vScroll=e.options.vScroll&&(!e.options.bounceLock&&!e.hScroll||e.scrollerH>e.wrapperH);e.hScrollbar=e.hScroll&&e.options.hScrollbar;e.vScrollbar=e.vScroll&&e.options.vScrollbar&&e.scrollerH>e.wrapperH;t=e._offset(e.wrapper);e.wrapperOffsetLeft=-t.left;e.wrapperOffsetTop=-t.top;if(typeof e.options.snap=="string"){e.pagesX=[];e.pagesY=[];s=e.scroller.querySelectorAll(e.options.snap);for(r=0,i=s.length;r<i;r++){o=e._offset(s[r]);o.left+=e.wrapperOffsetLeft;o.top+=e.wrapperOffsetTop;e.pagesX[r]=o.left<e.maxScrollX?e.maxScrollX:o.left*e.scale;e.pagesY[r]=o.top<e.maxScrollY?e.maxScrollY:o.top*e.scale}}else if(e.options.snap){e.pagesX=[];while(o>=e.maxScrollX){e.pagesX[u]=o;o=o-e.wrapperW;u++}if(e.maxScrollX%e.wrapperW)e.pagesX[e.pagesX.length]=e.maxScrollX-e.pagesX[e.pagesX.length-1]+e.pagesX[e.pagesX.length-1];o=0;u=0;e.pagesY=[];while(o>=e.maxScrollY){e.pagesY[u]=o;o=o-e.wrapperH;u++}if(e.maxScrollY%e.wrapperH)e.pagesY[e.pagesY.length]=e.maxScrollY-e.pagesY[e.pagesY.length-1]+e.pagesY[e.pagesY.length-1]}e._scrollbar("h");e._scrollbar("v");if(!e.zoomed){e.scroller.style[a]="0";e._resetPos(200)}},scrollTo:function(e,t,n,r){var i=this,s=e,o,u;i.stop();if(!s.length)s=[{x:e,y:t,time:n,relative:r}];for(o=0,u=s.length;o<u;o++){if(s[o].relative){s[o].x=i.x-s[o].x;s[o].y=i.y-s[o].y}i.steps.push({x:s[o].x,y:s[o].y,time:s[o].time||0})}i._startAni()},scrollToElement:function(e,t){var r=this,i;e=e.nodeType?e:r.scroller.querySelector(e);if(!e)return;i=r._offset(e);i.left+=r.wrapperOffsetLeft;i.top+=r.wrapperOffsetTop;i.left=i.left>0?0:i.left<r.maxScrollX?r.maxScrollX:i.left;i.top=i.top>r.minScrollY?r.minScrollY:i.top<r.maxScrollY?r.maxScrollY:i.top;t=t===undefined?n.max(n.abs(i.left)*2,n.abs(i.top)*2):t;r.scrollTo(i.left,i.top,t)},scrollToPage:function(e,t,n){var r=this,i,s;n=n===undefined?400:n;if(r.options.onScrollStart)r.options.onScrollStart.call(r);if(r.options.snap){e=e=="next"?r.currPageX+1:e=="prev"?r.currPageX-1:e;t=t=="next"?r.currPageY+1:t=="prev"?r.currPageY-1:t;e=e<0?0:e>r.pagesX.length-1?r.pagesX.length-1:e;t=t<0?0:t>r.pagesY.length-1?r.pagesY.length-1:t;r.currPageX=e;r.currPageY=t;i=r.pagesX[e];s=r.pagesY[t]}else{i=-r.wrapperW*e;s=-r.wrapperH*t;if(i<r.maxScrollX)i=r.maxScrollX;if(s<r.maxScrollY)s=r.maxScrollY}r.scrollTo(i,s,n)},disable:function(){this.stop();this._resetPos(0);this.enabled=false;this._unbind(E);this._unbind(S);this._unbind(x)},enable:function(){this.enabled=true},stop:function(){if(this.options.useTransition)this._unbind(N);else k(this.aniTime);this.steps=[];this.moved=false;this.animating=false},zoom:function(e,t,n,r){var i=this,s=n/i.scale;if(!i.options.useTransform)return;i.zoomed=true;r=r===undefined?200:r;e=e-i.wrapperOffsetLeft-i.x;t=t-i.wrapperOffsetTop-i.y;i.x=e-e*s+i.x;i.y=t-t*s+i.y;i.scale=n;i.refresh();i.x=i.x>0?0:i.x<i.maxScrollX?i.maxScrollX:i.x;i.y=i.y>i.minScrollY?i.minScrollY:i.y<i.maxScrollY?i.maxScrollY:i.y;i.scroller.style[a]=r+"ms";i.scroller.style[o]="translate("+i.x+"px,"+i.y+"px) scale("+n+")"+L;i.zoomed=false},isReady:function(){return!this.moved&&!this.zoomed&&!this.animating}};r=null;if(typeof exports!=="undefined")exports.iScroll=A;else e.iScroll=A})(window,document)

var myScroll;var seccion=null;document.addEventListener("pageshow",function(e){seccion=e.data.section;if(myScroll!=null){if(seccion!=null){$("#scroller").css("opacity",0)}else{$("#scroller").css("opacity",1)}myScroll.scrollToElement("."+seccion,100);if(seccion!=null){$("#scroller").css("opacity",1)}seccion=null}},false);$(window).resize(function(){if(myScroll!=null){setTimeout(function(){myScroll.refresh();if(seccion!=null)myScroll.scrollToElement("."+seccion,100);seccion=null},0)}});$(document).ready(function(e){setTimeout(function(){myScroll=new iScroll("wrapper",{scrollbarClass:"myScrollbar"});if(seccion!=null){$("#scroller").css("opacity",0);myScroll.scrollToElement("."+seccion,100);$("#scroller").css("opacity",1);seccion=null}else{$("#scroller").css("opacity",1)}},100)})