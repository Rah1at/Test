!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}([function(t,e){t.exports=jQuery},function(t,e,i){"use strict";function n(){return"rtl"===r()("html").attr("dir")}function o(t,e){return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-"+e:"")}function s(t){var e,i={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div");for(var o in i)"undefined"!=typeof n.style[o]&&(e=i[o]);return e?e:(e=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}i.d(e,"b",function(){return n}),i.d(e,"a",function(){return o}),i.d(e,"c",function(){return s});var a=i(0),r=i.n(a)},function(t,e,i){"use strict";function n(t){var e={};return"string"!=typeof t?e:(t=t.trim().slice(1,-1))?e=t.split("&").reduce(function(t,e){var i=e.replace(/\+/g," ").split("="),n=i[0],o=i[1];return n=decodeURIComponent(n),o=void 0===o?null:decodeURIComponent(o),t.hasOwnProperty(n)?Array.isArray(t[n])?t[n].push(o):t[n]=[t[n],o]:t[n]=o,t},{}):e}i.d(e,"a",function(){return r});var o=i(0),s=i.n(o),a=window.matchMedia||function(){var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;e.type="text/css",e.id="matchmediajs-test",i&&i.parentNode&&i.parentNode.insertBefore(e,i),n="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var i="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=i:e.textContent=i,"1px"===n.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}(),r={queries:[],current:"",_init:function(){var t=this,e=s()("meta.foundation-mq");e.length||s()('<meta class="foundation-mq">').appendTo(document.head);var i,o=s()(".foundation-mq").css("font-family");i=n(o);for(var a in i)i.hasOwnProperty(a)&&t.queries.push({name:a,value:"only screen and (min-width: "+i[a]+")"});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(t){var e=this.get(t);return!!e&&a(e).matches},is:function(t){return t=t.trim().split(" "),t.length>1&&"only"===t[1]?t[0]===this._getCurrentSize():this.atLeast(t[0])},get:function(t){for(var e in this.queries)if(this.queries.hasOwnProperty(e)){var i=this.queries[e];if(t===i.name)return i.value}return null},_getCurrentSize:function(){for(var t,e=0;e<this.queries.length;e++){var i=this.queries[e];a(i.value).matches&&(t=i)}return"object"==typeof t?t.name:t},_watcher:function(){var t=this;s()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery",function(){var e=t._getCurrentSize(),i=t.current;e!==i&&(t.current=e,s()(window).trigger("changed.zf.mediaquery",[e,i]))})}}},function(t,e,i){"use strict";function n(t,e,i){var n=void 0,o=Array.prototype.slice.call(arguments,3);s()(window).off(e).on(e,function(e){n&&clearTimeout(n),n=setTimeout(function(){i.apply(null,o)},t||10)})}i.d(e,"a",function(){return f});var o=i(0),s=i.n(o),a=i(5),r=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if(t[e]+"MutationObserver"in window)return window[t[e]+"MutationObserver"];return!1}(),l=function(t,e){t.data(e).split(" ").forEach(function(i){s()("#"+i)["close"===e?"trigger":"triggerHandler"](e+".zf.trigger",[t])})},f={Listeners:{Basic:{},Global:{}},Initializers:{}};f.Listeners.Basic={openListener:function(){l(s()(this),"open")},closeListener:function(){var t=s()(this).data("close");t?l(s()(this),"close"):s()(this).trigger("close.zf.trigger")},toggleListener:function(){var t=s()(this).data("toggle");t?l(s()(this),"toggle"):s()(this).trigger("toggle.zf.trigger")},closeableListener:function(t){t.stopPropagation();var e=s()(this).data("closable");""!==e?a.a.animateOut(s()(this),e,function(){s()(this).trigger("closed.zf")}):s()(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function(){var t=s()(this).data("toggle-focus");s()("#"+t).triggerHandler("toggle.zf.trigger",[s()(this)])}},f.Initializers.addOpenListener=function(t){t.off("click.zf.trigger",f.Listeners.Basic.openListener),t.on("click.zf.trigger","[data-open]",f.Listeners.Basic.openListener)},f.Initializers.addCloseListener=function(t){t.off("click.zf.trigger",f.Listeners.Basic.closeListener),t.on("click.zf.trigger","[data-close]",f.Listeners.Basic.closeListener)},f.Initializers.addToggleListener=function(t){t.off("click.zf.trigger",f.Listeners.Basic.toggleListener),t.on("click.zf.trigger","[data-toggle]",f.Listeners.Basic.toggleListener)},f.Initializers.addCloseableListener=function(t){t.off("close.zf.trigger",f.Listeners.Basic.closeableListener),t.on("close.zf.trigger","[data-closeable], [data-closable]",f.Listeners.Basic.closeableListener)},f.Initializers.addToggleFocusListener=function(t){t.off("focus.zf.trigger blur.zf.trigger",f.Listeners.Basic.toggleFocusListener),t.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",f.Listeners.Basic.toggleFocusListener)},f.Listeners.Global={resizeListener:function(t){r||t.each(function(){s()(this).triggerHandler("resizeme.zf.trigger")}),t.attr("data-events","resize")},scrollListener:function(t){r||t.each(function(){s()(this).triggerHandler("scrollme.zf.trigger")}),t.attr("data-events","scroll")},closeMeListener:function(t,e){var i=t.namespace.split(".")[0],n=s()("[data-"+i+"]").not('[data-yeti-box="'+e+'"]');n.each(function(){var t=s()(this);t.triggerHandler("close.zf.trigger",[t])})}},f.Initializers.addClosemeListener=function(t){var e=s()("[data-yeti-box]"),i=["dropdown","tooltip","reveal"];if(t&&("string"==typeof t?i.push(t):"object"==typeof t&&"string"==typeof t[0]?i.concat(t):console.error("Plugin names must be strings")),e.length){var n=i.map(function(t){return"closeme.zf."+t}).join(" ");s()(window).off(n).on(n,f.Listeners.Global.closeMeListener)}},f.Initializers.addResizeListener=function(t){var e=s()("[data-resize]");e.length&&n(t,"resize.zf.trigger",f.Listeners.Global.resizeListener,e)},f.Initializers.addScrollListener=function(t){var e=s()("[data-scroll]");e.length&&n(t,"scroll.zf.trigger",f.Listeners.Global.scrollListener,e)},f.Initializers.addMutationEventsListener=function(t){if(!r)return!1;var e=t.find("[data-resize], [data-scroll], [data-mutate]"),i=function(t){var e=s()(t[0].target);switch(t[0].type){case"attributes":"scroll"===e.attr("data-events")&&"data-events"===t[0].attributeName&&e.triggerHandler("scrollme.zf.trigger",[e,window.pageYOffset]),"resize"===e.attr("data-events")&&"data-events"===t[0].attributeName&&e.triggerHandler("resizeme.zf.trigger",[e]),"style"===t[0].attributeName&&(e.closest("[data-mutate]").attr("data-events","mutate"),e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[e.closest("[data-mutate]")]));break;case"childList":e.closest("[data-mutate]").attr("data-events","mutate"),e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[e.closest("[data-mutate]")]);break;default:return!1}};if(e.length)for(var n=0;n<=e.length-1;n++){var o=new r(i);o.observe(e[n],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}},f.Initializers.addSimpleListeners=function(){var t=s()(document);f.Initializers.addOpenListener(t),f.Initializers.addCloseListener(t),f.Initializers.addToggleListener(t),f.Initializers.addCloseableListener(t),f.Initializers.addToggleFocusListener(t)},f.Initializers.addGlobalListeners=function(){var t=s()(document);f.Initializers.addMutationEventsListener(t),f.Initializers.addResizeListener(),f.Initializers.addScrollListener(),f.Initializers.addClosemeListener()},f.init=function(t,e){if("undefined"==typeof t.triggersInitialized){t(document);"complete"===document.readyState?(f.Initializers.addSimpleListeners(),f.Initializers.addGlobalListeners()):t(window).on("load",function(){f.Initializers.addSimpleListeners(),f.Initializers.addGlobalListeners()}),t.triggersInitialized=!0}e&&(e.Triggers=f,e.IHearYou=f.Initializers.addGlobalListeners)}},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function s(t){return o("undefined"!=typeof t.constructor.name?t.constructor.name:t.className)}i.d(e,"a",function(){return f});var a=i(0),r=(i.n(a),i(1)),l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),f=function(){function t(e,o){n(this,t),this._setup(e,o);var a=s(this);this.uuid=i.i(r.a)(6,a),this.$element.attr("data-"+a)||this.$element.attr("data-"+a,this.uuid),this.$element.data("zfPlugin")||this.$element.data("zfPlugin",this),this.$element.trigger("init.zf."+a)}return l(t,[{key:"destroy",value:function(){this._destroy();var t=s(this);this.$element.removeAttr("data-"+t).removeData("zfPlugin").trigger("destroyed.zf."+t);for(var e in this)this[e]=null}}]),t}()},function(t,e,i){"use strict";function n(t,e,n,o){function f(){t||e.hide(),u(),o&&o.apply(e)}function u(){e[0].style.transitionDuration=0,e.removeClass(c+" "+h+" "+n)}if(e=s()(e).eq(0),e.length){var c=t?r[0]:r[1],h=t?l[0]:l[1];u(),e.addClass(n).css("transition","none"),requestAnimationFrame(function(){e.addClass(c),t&&e.show()}),requestAnimationFrame(function(){e[0].offsetWidth,e.css("transition","").addClass(h)}),e.one(i.i(a.c)(e),f)}}i.d(e,"a",function(){return f});var o=i(0),s=i.n(o),a=i(1),r=["mui-enter","mui-leave"],l=["mui-enter-active","mui-leave-active"],f={animateIn:function(t,e,i){n(!0,t,e,i)},animateOut:function(t,e,i){n(!1,t,e,i)}}},function(t,e,i){"use strict";function n(t){if(void 0===Function.prototype.name){var e=/function\s([^(]{1,})\(/,i=e.exec(t.toString());return i&&i.length>1?i[1].trim():""}return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name}function o(t){return"true"===t||"false"!==t&&(isNaN(1*t)?t:parseFloat(t))}function s(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}i.d(e,"a",function(){return c});var a=i(0),r=i.n(a),l=i(1),f=i(2),u="6.4.2",c={version:u,_plugins:{},_uuids:[],plugin:function(t,e){var i=e||n(t),o=s(i);this._plugins[o]=this[i]=t},registerPlugin:function(t,e){var o=e?s(e):n(t.constructor).toLowerCase();t.uuid=i.i(l.a)(6,o),t.$element.attr("data-"+o)||t.$element.attr("data-"+o,t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t),t.$element.trigger("init.zf."+o),this._uuids.push(t.uuid)},unregisterPlugin:function(t){var e=s(n(t.$element.data("zfPlugin").constructor));this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-"+e).removeData("zfPlugin").trigger("destroyed.zf."+e);for(var i in t)t[i]=null},reInit:function(t){var e=t instanceof r.a;try{if(e)t.each(function(){r()(this).data("zfPlugin")._init()});else{var i=typeof t,n=this,o={object:function(t){t.forEach(function(t){t=s(t),r()("[data-"+t+"]").foundation("_init")})},string:function(){t=s(t),r()("[data-"+t+"]").foundation("_init")},undefined:function(){this.object(Object.keys(n._plugins))}};o[i](t)}}catch(t){console.error(t)}finally{return t}},reflow:function(t,e){"undefined"==typeof e?e=Object.keys(this._plugins):"string"==typeof e&&(e=[e]);var i=this;r.a.each(e,function(e,n){var s=i._plugins[n],a=r()(t).find("[data-"+n+"]").addBack("[data-"+n+"]");a.each(function(){var t=r()(this),e={};if(t.data("zfPlugin"))return void console.warn("Tried to initialize "+n+" on an element that already has a Foundation plugin.");if(t.attr("data-options")){t.attr("data-options").split(";").forEach(function(t,i){var n=t.split(":").map(function(t){return t.trim()});n[0]&&(e[n[0]]=o(n[1]))})}try{t.data("zfPlugin",new s(r()(this),e))}catch(t){console.error(t)}finally{return}})})},getFnName:n,addToJquery:function(t){var e=function(e){var i=typeof e,o=t(".no-js");if(o.length&&o.removeClass("no-js"),"undefined"===i)f.a._init(),c.reflow(this);else{if("string"!==i)throw new TypeError("We're sorry, "+i+" is not a valid parameter. You must use a string representing the method you wish to invoke.");var s=Array.prototype.slice.call(arguments,1),a=this.data("zfPlugin");if(void 0===a||void 0===a[e])throw new ReferenceError("We're sorry, '"+e+"' is not an available method for "+(a?n(a):"this element")+".");1===this.length?a[e].apply(a,s):this.each(function(i,n){a[e].apply(t(n).data("zfPlugin"),s)})}return this};return t.fn.foundation=e,t}};c.util={throttle:function(t,e){var i=null;return function(){var n=this,o=arguments;null===i&&(i=setTimeout(function(){t.apply(n,o),i=null},e))}}},window.Foundation=c,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var i=t[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(n+16,e);return setTimeout(function(){t(n=i)},i-e)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},o=function(){return i.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),o.prototype=new n,o})},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(){return/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)}function r(){return/Android/.test(window.navigator.userAgent)}function l(){return a()||r()}i.d(e,"a",function(){return v});var f=i(0),u=i.n(f),c=i(11),h=i(2),d=i(5),p=i(4),m=i(3),g=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),v=function(t){function e(){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),g(e,[{key:"_setup",value:function(t,i){this.$element=t,this.options=u.a.extend({},e.defaults,this.$element.data(),i),this.className="Reveal",this._init(),m.a.init(u.a),c.a.register("Reveal",{ESCAPE:"close"})}},{key:"_init",value:function(){h.a._init(),this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:h.a.current},this.isMobile=l(),this.$anchor=u()('[data-open="'+this.id+'"]').length?u()('[data-open="'+this.id+'"]'):u()('[data-toggle="'+this.id+'"]'),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(u()(this.options.appendTo)),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#"+this.id&&u()(window).one("load.zf.reveal",this.open.bind(this))}},{key:"_makeOverlay",value:function(){var t="";return this.options.additionalOverlayClasses&&(t=" "+this.options.additionalOverlayClasses),u()("<div></div>").addClass("reveal-overlay"+t).appendTo(this.options.appendTo)}},{key:"_updatePosition",value:function(){var t,e,i=this.$element.outerWidth(),n=u()(window).width(),o=this.$element.outerHeight(),s=u()(window).height();t="auto"===this.options.hOffset?parseInt((n-i)/2,10):parseInt(this.options.hOffset,10),e="auto"===this.options.vOffset?o>s?parseInt(Math.min(100,s/10),10):parseInt((s-o)/4,10):parseInt(this.options.vOffset,10),this.$element.css({top:e+"px"}),this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:t+"px"}),this.$element.css({margin:"0px"}))}},{key:"_events",value:function(){var t=this,e=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function(i,n){if(i.target===e.$element[0]||u()(i.target).parents("[data-closable]")[0]===n)return t.close.apply(t)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function(){e._updatePosition()}}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(t){t.target!==e.$element[0]&&!u.a.contains(e.$element[0],t.target)&&u.a.contains(document,t.target)&&e.close()}),this.options.deepLink&&u()(window).on("popstate.zf.reveal:"+this.id,this._handleState.bind(this))}},{key:"_handleState",value:function(t){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}},{key:"open",value:function(){function t(){n.isMobile?(n.originalScrollPos||(n.originalScrollPos=window.pageYOffset),u()("html, body").addClass("is-reveal-open")):u()("body").addClass("is-reveal-open")}var e=this;if(this.options.deepLink){var i="#"+this.id;window.history.pushState?this.options.updateHistory?window.history.pushState({},"",i):window.history.replaceState({},"",i):window.location.hash=i}this.isActive=!0,this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||this.$element.trigger("closeme.zf.reveal",this.id);var n=this;this.options.animationIn?!function(){var i=function(){n.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),t(),c.a.trapFocus(n.$element)};e.options.overlay&&d.a.animateIn(e.$overlay,"fade-in"),d.a.animateIn(e.$element,e.options.animationIn,function(){e.$element&&(e.focusableElements=c.a.findFocusable(e.$element),i())})}():(this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay)),this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),c.a.trapFocus(this.$element),t(),this._extraHandlers(),this.$element.trigger("open.zf.reveal")}},{key:"_extraHandlers",value:function(){var t=this;this.$element&&(this.focusableElements=c.a.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||u()("body").on("click.zf.reveal",function(e){e.target!==t.$element[0]&&!u.a.contains(t.$element[0],e.target)&&u.a.contains(document,e.target)&&t.close()}),this.options.closeOnEsc&&u()(window).on("keydown.zf.reveal",function(e){c.a.handleKey(e,"Reveal",{close:function(){t.options.closeOnEsc&&t.close()}})}))}},{key:"close",value:function(){function t(){e.isMobile?(0===u()(".reveal:visible").length&&u()("html, body").removeClass("is-reveal-open"),e.originalScrollPos&&(u()("body").scrollTop(e.originalScrollPos),e.originalScrollPos=null)):0===u()(".reveal:visible").length&&u()("body").removeClass("is-reveal-open"),c.a.releaseFocus(e.$element),e.$element.attr("aria-hidden",!0),e.$element.trigger("closed.zf.reveal")}if(!this.isActive||!this.$element.is(":visible"))return!1;var e=this;this.options.animationOut?(this.options.overlay&&d.a.animateOut(this.$overlay,"fade-out"),d.a.animateOut(this.$element,this.options.animationOut,t)):(this.$element.hide(this.options.hideDelay),this.options.overlay?this.$overlay.hide(0,t):t()),this.options.closeOnEsc&&u()(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&u()("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,e.options.deepLink&&(window.history.replaceState?window.history.replaceState("",document.title,window.location.href.replace("#"+this.id,"")):window.location.hash=""),this.$anchor.focus()}},{key:"toggle",value:function(){this.isActive?this.close():this.open()}},{key:"_destroy",value:function(){this.options.overlay&&(this.$element.appendTo(u()(this.options.appendTo)),this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),u()(window).off(".zf.reveal:"+this.id)}}]),e}(p.a);v.defaults={animationIn:"",animationOut:"",showDelay:0,hideDelay:0,closeOnClick:!0,closeOnEsc:!0,multipleOpened:!1,vOffset:"auto",hOffset:"auto",fullScreen:!1,btmOffsetPct:10,overlay:!0,resetOnClose:!1,deepLink:!1,updateHistory:!1,appendTo:"body",additionalOverlayClasses:""}},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}i.d(e,"a",function(){return p});var a=i(0),r=i.n(a),l=i(1),f=i(2),u=i(3),c=i(9),h=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),d=function t(e,i,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,i);if(void 0===o){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},p=function(t){function e(){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),h(e,[{key:"_setup",value:function(t,i){this.$element=t,this.options=r.a.extend({},e.defaults,this.$element.data(),i),this.className="Tooltip",this.isActive=!1,this.isClick=!1,u.a.init(r.a),this._init()}},{key:"_init",value:function(){f.a._init();var t=this.$element.attr("aria-describedby")||i.i(l.a)(6,"tooltip");this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?r()(this.options.template):this._buildTemplate(t),this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":t,"data-yeti-box":t,"data-toggle":t,"data-resize":t}).addClass(this.options.triggerClass),d(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function(){var t=this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);return t?t[0]:"top"}},{key:"_getDefaultAlignment",value:function(){return"center"}},{key:"_getHOffset",value:function(){return"left"===this.position||"right"===this.position?this.options.hOffset+this.options.tooltipWidth:this.options.hOffset}},{key:"_getVOffset",value:function(){return"top"===this.position||"bottom"===this.position?this.options.vOffset+this.options.tooltipHeight:this.options.vOffset}},{key:"_buildTemplate",value:function(t){var e=(this.options.tooltipClass+" "+this.options.positionClass+" "+this.options.templateClasses).trim(),i=r()("<div></div>").addClass(e).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:t});return i}},{key:"_setPosition",value:function(){d(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_setPosition",this).call(this,this.$element,this.template)}},{key:"show",value:function(){if("all"!==this.options.showOn&&!f.a.is(this.options.showOn))return!1;var t=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.template.removeClass("top bottom left right").addClass(this.position),this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-"+this.alignment),this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),t.isActive=!0,this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){}),this.$element.trigger("show.zf.tooltip")}},{key:"hide",value:function(){var t=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){t.isActive=!1,t.isClick=!1}),this.$element.trigger("hide.zf.tooltip")}},{key:"_events",value:function(){var t=this,e=(this.template,!1);this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(e){t.isActive||(t.timeout=setTimeout(function(){t.show()},t.options.hoverDelay))}).on("mouseleave.zf.tooltip",function(i){clearTimeout(t.timeout),(!e||t.isClick&&!t.options.clickOpen)&&t.hide()}),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick||(t.isClick=!0,!t.options.disableHover&&t.$element.attr("tabindex")||t.isActive||t.show())}):this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(e){t.isActive?t.hide():t.show()}),this.$element.on({"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(i){return e=!0,t.isClick?(t.options.clickOpen||(e=!1),!1):void t.show()}).on("focusout.zf.tooltip",function(i){e=!1,t.isClick=!1,t.hide()}).on("resizeme.zf.trigger",function(){t.isActive&&t._setPosition()})}},{key:"toggle",value:function(){this.isActive?this.hide():this.show()}},{key:"_destroy",value:function(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass("has-tip top right left").removeAttr("aria-describedby aria-haspopup data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),this.template.remove()}}]),e}(c.a);p.defaults={disableForTouch:!1,hoverDelay:200,fadeInDuration:150,fadeOutDuration:150,disableHover:!1,templateClasses:"",tooltipClass:"tooltip",triggerClass:"has-tip",showOn:"small",template:"",tipText:"",touchCloseText:"Tap to close.",clickOpen:!0,positionClass:"",position:"auto",alignment:"auto",allowOverlap:!1,allowBottomOverlap:!1,vOffset:0,hOffset:0,tooltipHeight:14,tooltipWidth:12,allowHtml:!1}},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var i=e.indexOf(t);return i===e.length-1?e[0]:e[i+1]}i.d(e,"a",function(){return m});var r=i(10),l=i(4),f=i(1),u=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=["left","right","top","bottom"],h=["top","bottom","center"],d=["left","right","center"],p={left:h,right:h,top:d,bottom:d},m=function(t){function e(){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),u(e,[{key:"_init",value:function(){this.triedPositions={},this.position="auto"===this.options.position?this._getDefaultPosition():this.options.position,this.alignment="auto"===this.options.alignment?this._getDefaultAlignment():this.options.alignment}},{key:"_getDefaultPosition",value:function(){return"bottom"}},{key:"_getDefaultAlignment",value:function(){switch(this.position){case"bottom":case"top":return i.i(f.b)()?"right":"left";case"left":case"right":return"bottom"}}},{key:"_reposition",value:function(){this._alignmentsExhausted(this.position)?(this.position=a(this.position,c),this.alignment=p[this.position][0]):this._realign()}},{key:"_realign",value:function(){this._addTriedPosition(this.position,this.alignment),this.alignment=a(this.alignment,p[this.position])}},{key:"_addTriedPosition",value:function(t,e){this.triedPositions[t]=this.triedPositions[t]||[],this.triedPositions[t].push(e)}},{key:"_positionsExhausted",value:function(){for(var t=!0,e=0;e<c.length;e++)t=t&&this._alignmentsExhausted(c[e]);return t}},{key:"_alignmentsExhausted",value:function(t){return this.triedPositions[t]&&this.triedPositions[t].length==p[t].length}},{key:"_getVOffset",value:function(){return this.options.vOffset}},{key:"_getHOffset",value:function(){return this.options.hOffset}},{key:"_setPosition",value:function(t,e,i){if("false"===t.attr("aria-expanded"))return!1;r.a.GetDimensions(e),r.a.GetDimensions(t);if(e.offset(r.a.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset())),!this.options.allowOverlap){for(var n=1e8,o={position:this.position,alignment:this.alignment};!this._positionsExhausted();){var s=r.a.OverlapArea(e,i,!1,!1,this.options.allowBottomOverlap);if(0===s)return;s<n&&(n=s,o={position:this.position,alignment:this.alignment}),this._reposition(),e.offset(r.a.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}this.position=o.position,this.alignment=o.alignment,e.offset(r.a.GetExplicitOffsets(e,t,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}}}]),e}(l.a);m.defaults={position:"auto",alignment:"auto",allowOverlap:!1,allowBottomOverlap:!0,vOffset:0,hOffset:0}},function(t,e,i){"use strict";function n(t,e,i,n,s){return 0===o(t,e,i,n,s)}function o(t,e,i,n,o){var a,r,l,f,u=s(t);if(e){var c=s(e);r=c.height+c.offset.top-(u.offset.top+u.height),a=u.offset.top-c.offset.top,l=u.offset.left-c.offset.left,f=c.width+c.offset.left-(u.offset.left+u.width)}else r=u.windowDims.height+u.windowDims.offset.top-(u.offset.top+u.height),a=u.offset.top-u.windowDims.offset.top,l=u.offset.left-u.windowDims.offset.left,f=u.windowDims.width-(u.offset.left+u.width);return r=o?0:Math.min(r,0),a=Math.min(a,0),l=Math.min(l,0),f=Math.min(f,0),i?l+f:n?a+r:Math.sqrt(a*a+r*r+l*l+f*f)}function s(t){if(t=t.length?t[0]:t,t===window||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var e=t.getBoundingClientRect(),i=t.parentNode.getBoundingClientRect(),n=document.body.getBoundingClientRect(),o=window.pageYOffset,s=window.pageXOffset;
return{width:e.width,height:e.height,offset:{top:e.top+o,left:e.left+s},parentDims:{width:i.width,height:i.height,offset:{top:i.top+o,left:i.left+s}},windowDims:{width:n.width,height:n.height,offset:{top:o,left:s}}}}function a(t,e,n,o,s,a){switch(console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"),n){case"top":return i.i(l.b)()?r(t,e,"top","left",o,s,a):r(t,e,"top","right",o,s,a);case"bottom":return i.i(l.b)()?r(t,e,"bottom","left",o,s,a):r(t,e,"bottom","right",o,s,a);case"center top":return r(t,e,"top","center",o,s,a);case"center bottom":return r(t,e,"bottom","center",o,s,a);case"center left":return r(t,e,"left","center",o,s,a);case"center right":return r(t,e,"right","center",o,s,a);case"left bottom":return r(t,e,"bottom","left",o,s,a);case"right bottom":return r(t,e,"bottom","right",o,s,a);case"center":return{left:$eleDims.windowDims.offset.left+$eleDims.windowDims.width/2-$eleDims.width/2+s,top:$eleDims.windowDims.offset.top+$eleDims.windowDims.height/2-($eleDims.height/2+o)};case"reveal":return{left:($eleDims.windowDims.width-$eleDims.width)/2+s,top:$eleDims.windowDims.offset.top+o};case"reveal full":return{left:$eleDims.windowDims.offset.left,top:$eleDims.windowDims.offset.top};default:return{left:i.i(l.b)()?$anchorDims.offset.left-$eleDims.width+$anchorDims.width-s:$anchorDims.offset.left+s,top:$anchorDims.offset.top+$anchorDims.height+o}}}function r(t,e,i,n,o,a,r){var l,f,u=s(t),c=e?s(e):null;switch(i){case"top":l=c.offset.top-(u.height+o);break;case"bottom":l=c.offset.top+c.height+o;break;case"left":f=c.offset.left-(u.width+a);break;case"right":f=c.offset.left+c.width+a}switch(i){case"top":case"bottom":switch(n){case"left":f=c.offset.left+a;break;case"right":f=c.offset.left-u.width+c.width-a;break;case"center":f=r?a:c.offset.left+c.width/2-u.width/2+a}break;case"right":case"left":switch(n){case"bottom":l=c.offset.top-o+c.height-u.height;break;case"top":l=c.offset.top+o;break;case"center":l=c.offset.top+o+c.height/2-u.height/2}}return{top:l,left:f}}i.d(e,"a",function(){return f});var l=i(1),f={ImNotTouchingYou:n,OverlapArea:o,GetDimensions:s,GetOffsets:a,GetExplicitOffsets:r}},function(t,e,i){"use strict";function n(t){return!!t&&t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!r()(this).is(":visible")||r()(this).attr("tabindex")<0)})}function o(t){var e=f[t.which||t.keyCode]||String.fromCharCode(t.which).toUpperCase();return e=e.replace(/\W+/,""),t.shiftKey&&(e="SHIFT_"+e),t.ctrlKey&&(e="CTRL_"+e),t.altKey&&(e="ALT_"+e),e=e.replace(/_$/,"")}function s(t){var e={};for(var i in t)e[t[i]]=t[i];return e}i.d(e,"a",function(){return c});var a=i(0),r=i.n(a),l=i(1),f={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",35:"END",36:"HOME",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},u={},c={keys:s(f),parseKey:o,handleKey:function(t,e,n){var o,s,a,f=u[e],c=this.parseKey(t);if(!f)return console.warn("Component not defined!");if(o="undefined"==typeof f.ltr?f:i.i(l.b)()?r.a.extend({},f.ltr,f.rtl):r.a.extend({},f.rtl,f.ltr),s=o[c],a=n[s],a&&"function"==typeof a){var h=a.apply();(n.handled||"function"==typeof n.handled)&&n.handled(h)}else(n.unhandled||"function"==typeof n.unhandled)&&n.unhandled()},findFocusable:n,register:function(t,e){u[t]=e},trapFocus:function(t){var e=n(t),i=e.eq(0),s=e.eq(-1);t.on("keydown.zf.trapfocus",function(t){t.target===s[0]&&"TAB"===o(t)?(t.preventDefault(),i.focus()):t.target===i[0]&&"SHIFT_TAB"===o(t)&&(t.preventDefault(),s.focus())})},releaseFocus:function(t){t.off("keydown.zf.trapfocus")}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),o=i.n(n),s=i(6),a=i(2),r=i(3),l=i(7),f=i(8);s.a.addToJquery(o.a),s.a.MediaQuery=a.a,r.a.init(o.a,s.a),s.a.plugin(l.a,"Reveal"),s.a.plugin(f.a,"Tooltip")}]);

function matchPopupToWindowSize(){
	var popupHeight 	= $('#popup-register').parent('div.popup-inner').height();
	var windowHeight 	= $(window).height();
	if((popupHeight + 90)>windowHeight){
		var newTopValue=parseInt(popupHeight,10)/2 + 50;
		newTopValue = parseInt(newTopValue,10);
		$('#popup-register').parent('div.popup-inner').css('top',newTopValue);
	}else{
		$('#popup-register').parent('div.popup-inner').css('top','50vh');
	}
}
$(window).on('resize', function () {
	 matchPopupToWindowSize();
});
$(document).foundation();
$(document).ready(function($)
{
	$('#register-form').append('<input type="hidden" name="jsv" value="1" />');
	
	$('#slider .bxslider li').css('display', 'block');
	$('.bxslider').bxSlider({
		'speed': 450,
		'auto': true,
		'pause': 3700,
		'autoHover': true
	});
	
	$(window).scroll( function () {
		if($(this).scrollTop() > 70) {
			$('body').addClass('scrolled');
		}
		else {
			$('body').removeClass('scrolled');
		}
	});

	$(".checkboxx").addClass('checkbox');
	$(".checkbox label a").bind( "click", function(e) {
		e.stopPropagation();
		return true;
	});
	$(".checkbox label").bind( "click", function() {
		if($(this).hasClass('active')) {
			$(this).find('input[type="checkbox"]').prop('checked', false);
		}
		else {
			$(this).find('input[type="checkbox"]').prop('checked', true);
		}
		$(this).toggleClass("active");
		return false;
	});
	
	$('.tabbs-link a').click( function() {
		if($(window).width() < 760) {
			$('html,body').animate({
				scrollTop: ($('#cities').offset().top-110)
			}, 400);
		}
	});

	$(".hamburder").click(function(e) {
		e.preventDefault();
		if($(window ).width() < 1025) {
			$(this).parent().find('nav').toggle();
		}
		return false;
	});
	
	$(window).resize(function() {
		if($(window ).width() >= 1025) {
			if(!$('#header nav').is(':visible')) {
				$('#header nav').removeAttr('style');
			}
		}
	});

	$(".mobile-toggle h4").click(function(e) {
		if($( window ).width() < 760) {
			$(this).parent().find('.mobile-toggle-my').toggle();
		}
	});

	$(".img-hover").hover(function() {
		$(this).find('.icon').addClass("active");
	}
	, function() {
		$(this).find('.icon').removeClass("active");
	});

	$('.img-hover').click( function() {
		window.location.href=$(this).find('a').attr('href');
	});

	$('body').on('click', '.alert-box .close', function() {
		$(this).parent().toggle('slow');
		return false;
	});

	$('form').not('.noajax').submit(function(event) {
		if($(this).hasClass('noajax')) {
			return true;
		}
		var form = $(this);
		form.find('.alert-box').remove();
		form.find('input[type="submit"]').hide();
		$.ajax({
			type: 'POST',
			url: form.attr('action'),
			data: form.serialize()+'&ajax=1',
			dataType: 'json',
		})
		.done(function(data) {
			if(data.data != '') {
				var alert_type = 'warning';
				if(data.success) {
					var alert_type = 'info';
					form.find('input[type="text"], input[type="email"], textarea').not('input[name="amount"]').val('');
					form.find('input[type="checkbox"]').prop('checked', false);
					form.find('.checkbox label').trigger('click');
					
					if(form.attr('id') == 'order-form') {
						gtag('config', 'UA-7400474-1', {
						  'page_path': '../../cel'
						});
						fbq('track', 'Purchase');
					}
				}
				
				//if(data.success && form.attr('id') == 'order-form' && data.form_id && ($('select[name="dieta"] option:selected').attr('data-p') != '0.00' || ($('input[name="amount"]').val() != '' && parseFloat($('input[name="amount"]').val()) > 0))) {
				if(data.success && form.attr('id') == 'order-form' && data.form_id && $('select[name="dieta"] option:selected').attr('data-p') != '0.00' && $('select[name="dieta"] option:selected').attr('data-parent') != 'empty') {
					if($('select[name="dieta"] option:selected').attr('data-p') == 'voucher') {
						$('input[name="fid2"]').val(data.form_id);
						$('#form-ext2').prepend('<label class="bold">'+data.data+'</span>');
						$('#form-ext2').removeClass('hide');
						//$('#order-value2 span').text(parseFloat($('input[name="amount"]').val()).toFixed(2)+' PLN');
					}
					else if($('select[name="dieta"] option:selected').attr('data-p') != '0.00') {
						var selected_diet = $('select[name="dieta"] option:selected').attr('data-id');
						$('input[name="fid"]').val(data.form_id);
						if(selected_diet != '') {
							$('select[name="diet"]').val(selected_diet);
						}
						$('#form-ext').prepend('<label class="bold">'+data.data+'</span>');
						$('#form-ext').removeClass('hide');
						$('#diet').trigger('change');
						if($('select[name="kalorycznosc"]').length) {
							var selected_kcal = $('select[name="kalorycznosc"] option:selected').attr('data-id');
							if(selected_kcal != '') {
								$('select[name="diet"]').last().val(selected_kcal);
							}
						}
					}
					
					form.find('.form-result').parent().hide();
					form.find('.form-main').hide();
					$('#content h1').next('p').hide();
					$('#content h1').hide();
					$('#order-form > .row').hide();
					
					$('html,body').animate({
						scrollTop: ($('#order-form').offset().top-110)
					}, 400);
				}
				else {
					var html = '<div data-alert class="alert-box '+alert_type+' radius">'+data.data+'<a href="#" class="close">&times;</a></div>';
					var result_cont = form.find('.form-result');
					if(result_cont.length && result_cont.is(':visible')) {
						result_cont.show();
						result_cont.html(html);
						$('html,body').animate({
							scrollTop: ($('.form-result').offset().top-110)
						}, 400);
					}
					else {
						form.append(html);
					}
				}
			}
			form.find('input[type="submit"]').show();
		});
		event.preventDefault();
	});
	
	$('input[name="order_length"]').keyup( function() {
		var el = $(this);
		setTimeout( function() {
			if(isNaN(parseInt(el.val())) || parseInt(el.val()) < 3) {
				el.val(3);
				
				el.trigger('change');
			}
		}, 2000);
		if(parseInt(el.val()) >= 3) {
			el.css('background', '#fefefe');
		}
		calculatePrice();
	});
	$('.order-ext').change( function() {
		calculatePrice();
	}).trigger('change');
	
	$('#diet').change( function() {
		$('.calorie_select').addClass('hide');
		$('.calorie_select select').each( function(i,el) {
			$(el).attr('name', '');
		});
		var selected_option = $('#diet option:selected');
		if(selected_option.attr('data-parent') != '') {
			$('#calorie_select'+selected_option.attr('data-parent')).removeClass('hide');
			$('#calorie_select'+selected_option.attr('data-parent')+' select').attr('name', 'diet');
		}
		calculatePrice();
	}).trigger('change');
	
	$('select[name="dieta"]').change( function() {
		$('.cal_select').addClass('hide');
		$('.cal_select select').each( function(i,el) {
			$(el).attr('name', '');
		});
		var selected_option = $('select[name="dieta"] option:selected');
		if(selected_option.attr('data-parent') == 'empty') {
			$('#cal_select_empty').removeClass('hide');
		}
		else if(selected_option.attr('data-p') == 'voucher') {
			
		}
		else if(selected_option.attr('data-parent') != '') {
			$('#cal_select'+selected_option.attr('data-parent')).removeClass('hide');
			$('#cal_select'+selected_option.attr('data-parent')+' select').attr('name', 'kalorycznosc');
		}
		else {
			$('#cal_select'+selected_option.attr('data-id')).removeClass('hide');
		}
		calculatePrice();
	}).trigger('change');
	
	function calculatePrice() {
		var order_length = parseInt($('input[name="order_length"]').val());
		if(isNaN(order_length)) {
			order_length = 0;
		}
		var delivery = $('select[name="delivery_system"]').val();
		var price_mode = '1';
		if(delivery == 1) {
			if(order_length >= 60) {
				price_mode = '3';
			}
			else if(order_length >= 20) {
				price_mode = '2';
			}
		}
		else {
			if(order_length >= 84) {
				price_mode = '3';
			}
			else if(order_length >= 28) {
				price_mode = '2';
			}
		}
		var diet_option = $('select[name="diet"]:last option:selected');
		var order_value = order_length * parseFloat(diet_option.attr('data-price'+price_mode));
		$('#order-value span').text(order_value.toFixed(2)+' PLN');
	}
	
	$('#pay').click( function() {
		if($('input[name="order_length"]').val() == '' || parseInt($('input[name="order_length"]').val()) < 3) {
			$('input[name="order_length"]').css('background', 'rgba(255,0,0,.3)');
			return false;
		}
		var button = $(this);
		button.hide();
		var form = $(this).closest('form');
		form.addClass('noajax');
		form.attr('action', form.attr('action')+'/payment');
		form.submit();
	});
	
	$('#pay2').click( function() {
		if($('input[name="amount"]').val() == '' || isNaN(parseInt($('input[name="amount"]').val()))) {
			return false;
		}
		var button = $(this);
		button.hide();
		var form = $(this).closest('form');
		form.addClass('noajax');
		form.attr('action', form.attr('action')+'/payment');
		form.submit();
	});
	
	$('input[name="amount"]').keyup( function() {
		var el = $(this);
		if(el.val() != '' && isNaN(parseInt(el.val()))) {
			el.val('');
		}
		else if(el.val() != '') {
			el.val(parseInt(el.val()));
		}
	});

	$('#order-form input[type="submit"]').click(function(event) {
		$(this).closest('form').submit();
		event.preventDefault();
	});

	//nasze menu
	$('.our_menu .menu_desc').hide();
	$('.our_menu .diet_info span.first').removeClass('hide');
	$('.our_menu .diet_info').click( function(ev) {
		$(this).find('span.first').addClass('hide');
		$(this).find('span.second').removeClass('hide');
		$('.our_menu .menu_desc').not($(this).parent().parent().next('div')).hide();
		$('.our_menu .diet_info span.second').not($(this).find('span.second')).addClass('hide');
		$('.our_menu .diet_info span.first').not($(this).find('span.first')).removeClass('hide');

		if($(this).parent().parent().next('div').is(':visible')) {
			$(this).find('span.first').removeClass('hide');
			$(this).find('span.second').addClass('hide');
		}
		else {
			$(this).find('span.first').addClass('hide');
			$(this).find('span.second').removeClass('hide');
		}
		$(this).parent().parent().next('div').slideToggle('slow');
		ev.preventDefault();
	});

	//nasze porady i artykuly
	$('.articles div.desc').hide();

	$('.articles h2').click( function(ev) {
		if(!$(this).find('a').attr('href')) {
			$(this).next('div.desc').slideToggle('fast');
			ev.preventDefault();
		}
	});

	$('a[href*="#"]:not([href="#"])').click(function() {
		if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if(target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top)
				}, 400);
				return false;
			}
		}
	});

	$('#area-2 #sets a').click( function(e) {
		e.preventDefault();
		$('#area-2 #sets-tab > .row').hide();
		if($(window).width() < 760) {
			$('#area-2 #sets-tab >.p-'+$(this).attr('data-id')).toggle();
			$('html,body').animate({
				scrollTop: ($('#sets-tab').offset().top-20)
			}, 400);
		}
		else {
			$('#area-2 #sets-tab >.p-'+$(this).attr('data-id')).toggle('slow');
			$('html,body').animate({
				scrollTop: ($('#area-2').offset().top)
			}, 400);
		}
	});
	
	$('#calcs-desc .desc').hide();
	$('#calcs .show-desc').click( function(e) {
		e.preventDefault();
		$('#calcs-desc .desc').hide();
		var id = $(this).closest('.calculator').attr('id');
		if($(window).width() < 760) {
			$('#calcs-desc .'+id).toggle();
			$('html,body').animate({
				scrollTop: ($('#calcs-desc').offset().top-60)
			}, 400);
		}
		else {
			$('#calcs-desc .'+id).toggle('slow');
		}
	});
	
	$('#promo-desc > div').hide();
	$('.promo-boxes > div').click( function(e) {
		e.preventDefault();
		$('#promo-desc > div').hide();
		if($(window).width() < 760) {
			$('#promo-desc > .promo-desc-'+$(this).find('.details').attr('data-index')).slideDown();
			$('html,body').animate({
				scrollTop: ($('#promo-desc').offset().top-60)
			}, 400);
		}
		else {
			$('#promo-desc > .promo-desc-'+$(this).find('.details').attr('data-index')).slideDown('slow');
		}
	});
	
	if(!$('#area-5 .bx-wrapper').is(':visible')) {
	//	var anchormap = $('#anachormap');
	//	anchormap.clone(true).insertAfter($('#area-5 .bx-wrapper'));
	//	anchormap.remove();
	//	$('#area-1 >.row > .medium-6').removeClass('medium-6').addClass('medium-12');
	}
	
	$('#anachormap a').each( function(index, el) {
		if($(el).css('visibility') === 'hidden') {
			$(el).find('span').hover(
				function() {
					$(el).find('label').css('visibility', 'visible');
					$(el).find('label').css('background', '#FFF');
					$(el).find('label').css('border', '1px solid #eee');
					$(el).find('label').css('padding', '3px');
					$(el).find('label').css('z-index', '3');
					$(el).find('label').css('display', 'inline-block');
					$(el).find('label').css('top', '20px');
				},
				function() {
					$(el).find('label').css('visibility', 'hidden');
				}
			);
		}
	});
	
	setTimeout(function(){ $('#fixed-phone').addClass('shown') }, 5000);

	$('#cookies-policy span').click( function() {
		$('#cookies-policy').css('display','none');
	});
	$('#cookies-policy a').click( function() {
		return true;
	});
	$('#cookies-policy').not('#cookies-policy a').click( function(e) {
		if($('.hamburder').is(':visible') && $(e.target).prop('tagName') != 'A') {
			$('#cookies-policy').css('display','none');
		}
	});
	wd_cookie_policy(lang);
	
	$('[data-popup-open]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-open');
		$('[data-popup="' + targeted_popup_class + '"]').css('height',$(document).height()).fadeIn(350);
		matchPopupToWindowSize();
		e.preventDefault();
	});


	$('[data-popup-close]').on('click', function(e)  {
		var targeted_popup_class = jQuery(this).attr('data-popup-close');
		$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
		e.preventDefault();
	});


	$('.login-link').click( function() {
		if(!jQuery('#popup2').is(':visible')) {
			jQuery('#popup2').fadeIn(350);
			$.ajax({
				type: 'POST',
				url: '../../pl/check_session',
				dataType: 'json'
			});
		}
	});
	$('#popup-register #register-form').submit( function(e) {
		var f = $(this);
		if(f.find('input[name="password"]').val() != f.find('input[name="password2"]').val()) {
			$('#popup-register span.color').remove();
			$('#popup-register').prepend('<span class="color">'+f.find('input[name="password"]').attr('data-msg')+'</span>');
			return false;
		}
		$.ajax({
			type: 'POST',
			url: '../../'+f.attr('data-locale')+'/check_user_exists',
			data: 'email='+f.find('input[name="email"]').val(),
			dataType: 'json',
		})
		.done(function(data) {
			if(data.data != '') {
				$('#popup-register').hide();
				$('#popup-login').show();
				$('#popup-login').find('input[name="_username"]').val(f.find('input[name="email"]').val());
				$('#popup-login span.color').remove();
				$('#popup-login').prepend('<span class="color">'+data.data+'</span>');
				return false;
			}
			
			f.unbind('submit').submit();
		});
		e.preventDefault();
	});
	
	$('#popup-login #login-form').submit( function(e) {
		var f = $(this);
		$.ajax({
			type: 'POST',
			url: '../../'+f.attr('data-locale')+'/popuplogin',
			data: 'login='+f.find('input[name="_username"]').val()+'&pass='+f.find('input[name="_password"]').val(),
			dataType: 'json',
		})
		.done(function(data) {
			if(data.data != '') {
				$('#popup-login span.color').remove();
				f.find('input[name="_username"]').val('');
				f.find('input[name="_password"]').val('');
				$('#popup-login').prepend('<span class="color">'+data.data+'</span>');
				return false;
			}
			
			window.location.replace(f.find('input[name="_target_path"]').val());
		});
		e.preventDefault();
	});
	
	$('#popup-main-page').on('click', function(e)  {
		//if(e.target !== e.currentTarget) return;
		jQuery(this).fadeOut(350);
	});
});

jQuery(window).load(function() {
	if(jQuery('#popup').length && jQuery(window).width() > 850) {
		jQuery('#popup').fadeIn(350);
	}
	if(jQuery('#popup-main-page').length) {
		setTimeout( function() {
			jQuery('#popup-main-page').fadeIn(350);
		}, 2000);
	}
});


function dialogOpen(targeted_popup_class) {  
		$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
		e.preventDefault(); 
}

function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}
function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
	  {
	    return unescape(y);
	  }
	}
}

function wd_cookie_policy(lang) {
	var policy = getCookie("cookie-policy");
	if (policy!=null && policy!="") {

	}
	else {
		setCookie("cookie-policy",1,365);
		var test = getCookie("cookie-policy");

		if(lang == 'pl') {
			var text = 'Ta strona wykorzystuje ciasteczka (ang. cookies). Korzystanie z naszego serwisu bez zmiany ustawie?? dotycz??cych cookies oznacza, ??e b??d?? one zapisane w pami??ci urz??dzenia. Wi??cej w <a href="../../doc/polityka_prywatnosci.pdf" target="_blank">Polityce prywatno??ci.</a>';
		}
		else if(lang == 'en') {
			var text = 'In our website we use cookies to gather information related to the use of the site. By using our site without changing the setting of cookies you agree to store them in the device memory. For more information <a href="../../doc/polityka_prywatnosci_en.pdf" target="_blank">privacy policy</a>';
		}

		if (test!=null && test!="") {
			$('#cookies-policy-text').html(text);
			$('#cookies-policy').css('display','block');
			if($('.hamburder').is(':visible')) {
				setTimeout(function() {
					$('#cookies-policy').css('display','none');
				}, 4000);
			}
		}
   }
}
$(document).ready(function($)
{
	$('.more').each(function() {
		var that = $(this);

		$('<span>' + that.attr('data-dots') + ' <a>' + that.attr('data-more') + '</a></span>').appendTo(that.children('.hidden').prev()).on('click',function(e) {
			e.preventDefault();
			that = $(this);
			that.parent().next().removeClass('hidden');
			that.remove();
			matchPopupToWindowSize();
		});
	});

	$('#login-form a').last().on('click',function(){
		$('#popup-login').hide();
		$('#popup-register').show();
		matchPopupToWindowSize();
	});
	$('#register-form a').last().on('click',function(){
		$('#popup-register').hide();
		$('#popup-login').show();
		matchPopupToWindowSize();
	});
})