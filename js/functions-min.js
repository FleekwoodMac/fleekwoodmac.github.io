$((function(){var e=Cookies.get("no-lines"),t=Cookies.get("dark"),o=Cookies.get("boxed");"true"==e&&$("body").addClass("no-lines"),"true"==t&&$("html").addClass("dark"),"true"==o&&$("body").addClass("boxed");var n=$('<div class="toggleContainer"><span class="container-caption">Customize</span><div class="toggle-container-btn ion-ios-cog-outline"></div></div>'),i=$('<div id="linesOption" class="option"><span class="caption">Vertical lines</span><div class="toggle-btn ion-ios-barcode-outline"></div>'),a=$('<div id="darkOption" class="option"><span class="caption">Dark mode</span><div class="toggle-btn ion-contrast"></div>'),s=$('<div id="boxedOption" class="option"><span class="caption">Boxed mode</span><div class="toggle-btn ion-cube"></div>');$("body").append(n),n.prepend(i),n.prepend(a),n.prepend(s),$("body").on("click",".toggle-container-btn",(function(){$(".toggleContainer").toggleClass("active")})),$("body").on("click","#linesOption",(function(){$("body").toggleClass("no-lines"),$("body").hasClass("no-lines")?Cookies.set("no-lines","true"):Cookies.set("no-lines","false")})),$("body").on("click","#darkOption",(function(){$("html").toggleClass("dark"),$("html").hasClass("dark")?Cookies.set("dark","true"):Cookies.set("dark","false")})),$("body").on("click","#boxedOption",(function(){$("body").toggleClass("boxed"),$("body").hasClass("boxed")?Cookies.set("boxed","true"):Cookies.set("boxed","false")})),$("body").on("click",".option",(function(){$(this).toggleClass("active")}))})),function(e){if("function"==typeof define&&define.amd)define(e);else if("object"==typeof exports)module.exports=e();else{var t=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=t,o}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var o=arguments[e];for(var n in o)t[n]=o[n]}return t}return function t(o){function n(t,i,a){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(a=e({path:"/"},n.defaults,a)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*a.expires),a.expires=r}try{s=JSON.stringify(i),/^[\{\[]/.test(s)&&(i=s)}catch(e){}return i=o.write?o.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[t,"=",i,a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}t||(s={});for(var c=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<c.length;d++){var p=c[d].split("="),f=p.slice(1).join("=");'"'===f.charAt(0)&&(f=f.slice(1,-1));try{var u=p[0].replace(l,decodeURIComponent);if(f=o.read?o.read(f,u):o(f,u)||f.replace(l,decodeURIComponent),this.json)try{f=JSON.parse(f)}catch(e){}if(t===u){s=f;break}t||(s[u]=f)}catch(e){}}return s}}return n.set=n,n.get=function(e){return n(e)},n.getJSON=function(){return n.apply({json:!0},[].slice.call(arguments))},n.defaults={},n.remove=function(t,o){n(t,"",e(o,{expires:-1}))},n.withConverter=t,n}((function(){}))})),function(e){"use strict";function t(){e(".parallax").each((function(){var t=e(this),o=+(o=e(window).scrollTop()*i).toFixed(2);t.hasClass("fs")?t.css("transform","translate3d(-50%,-"+(50-.15*o)+"%,0)"):t.css("transform","translate3d(0,"+o+"px,0)")}))}function o(){var t=e(window).height(),o=e(window).scrollTop(),n=o+t;e.each(a,(function(){var t=e(this),i=t.outerHeight(),a=t.offset().top-100;a+i>=o&&a<=n?t.addClass("in-view"):t.removeClass("in-view")}))}e("body").append('<div class="l1"></div><div class="l2"></div><div class="l3"></div>'),e("a[href!=#][data-toggle!=tab][data-toggle!=collapse][target!=_blank][class!=anchor]").addClass("smooth"),e(".smooth-transition").animsition({linkElement:".smooth",inDuration:500,outDuration:500}),e("html").on("click",(function(t){e(".navigation, .nav-trigger").removeClass("tapped")})),e(".nav-trigger").on("click",(function(t){t.stopPropagation(),e(".navigation").toggleClass("tapped"),e(".navigation").hasClass("tapped")?e(".nav-trigger").addClass("tapped"):e(".nav-trigger").removeClass("tapped")})),e(".navigation li").on("click",(function(t){t.stopPropagation(),e(this).toggleClass("tapped")}));var n=e(".grid");n.imagesLoaded((function(){n.packery({itemSelector:".item"})})),e(".filter-trigger").on("click",(function(t){t.preventDefault(),e("body").addClass("filters-active"),e("html,body").animate({scrollTop:e(".grid").offset().top+"px"},500),e(".filter-container").fadeIn()})),e(".filter-container").on("click",(function(t){t.preventDefault(),e("body").removeClass("filters-active"),e(".filter-container").fadeOut()})),e(".filter").on("click",(function(t){t.preventDefault(),t.stopPropagation();var o=e(this).attr("data-filter");e(".filter.active").removeClass("active"),e(this).addClass("active"),e(".grid").find(".item:not(."+o+")").css({"-webkit-transition":"all .25s",transition:"all .25s","-webkit-transform":"scale(0)",transform:"scale(0)","-webkit-opacity":"0",opacity:"0"}),setTimeout((function(){e(".grid").find(".item:not(."+o+")").hide(0),e(".grid").find("."+o).show(0).css({"-webkit-transform":"scale(1)","-webkit-opacity":"1",transform:"scale(1)",opacity:"1"}),n.packery("layout")}),250)})),e(window).on("resize",(function(){setTimeout((function(){n.packery("layout"),window.requestAnimationFrame(o)}),1500)})),e(".anchor").on("click",(function(t){t.preventDefault(),t.stopPropagation();var o=e(this).attr("href");e("html,body").animate({scrollTop:e(o).offset().top+"px"})}));var i=.15;e(window).on("scroll",(function(){window.requestAnimationFrame(t)}));var a=e(".item, .fadein");e(window).on("scroll resize",(function(){window.requestAnimationFrame(o),e(".anchor").each((function(){"#"+e(".in-view").attr("id")==e(this).attr("href")&&(e(".anchor").removeClass("active"),e(this).addClass("active"))}))})),e(window).on("load",(function(){window.requestAnimationFrame(o)})),e(window).on("pageshow",(function(e){e.originalEvent.persisted&&window.location.reload()}))}(jQuery),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),t=document.getElementById("submit-button"),o=(document.getElementById("content"),{happydev:"pages/sp/sp23.html",happydesign:"pages/sp/dp23.html"});t.addEventListener("click",(function(){const t=e.value,n=o[t];n?(e.value="",window.location.href=n+"?v="+Math.random()):alert("Incorrect password. Please try again.")}))}));