(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e){e.exports=JSON.parse('{"404":{"back_404":"Go home","text":"Sorry, I can\'t find the page you\'re looking for...","button_text":"Do you want help to return home?"},"home":{"about":"About me","about_alt":"About","work":"My Work","work_alt":"Work","contact":"Contact me","contact_alt":"Contact"},"about":{"find_me":"You\'ll find me on:"},"work":{"no_projects":"Whoops! There\'s nothing here yet!","categories":"Categories","category_all":"All","website":"Visit Website","source":"Source Code"},"contact":{"toast":{"close":"Close"},"form":{"name":"What\'s your name?","email":"What\'s your email?","message":"Please, explain yourself:","validation":{"invalid_name":"Invalid name","invalid_email":"Invalid email","invalid_message":"Invalid message","invalid_grecaptcha":"Invalid gRecaptchaResponse","server_error":"Server reported an error","conection_error":"Connection Error","success":"Message sent successfully"}},"loading":"Loading","send":"Send","sending":"Sending"},"misc":{"back":"Go back"}}')},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(8),o=n.n(r),a=n(9),c=n.n(a),i=n(10),u=n.n(i),l=n(11),s=n.n(l),f=n(5),d=n.n(f),p=n(1);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var v=function(e){u()(n,e);var t=m(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props.iconColor?{fill:this.props.iconColor}:null;return p.default.createElement("svg",{style:e,viewBox:"0 0 24 24"},p.default.createElement("use",{xlinkHref:"".concat("/","assets/icons.svg#").concat(this.props.iconName)}))}}]),n}(p.default.PureComponent)},70:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var r=n(8),o=n.n(r),a=n(9),c=n.n(a),i=n(10),u=n.n(i),l=n(11),s=n.n(l),f=n(5),d=n.n(f),p=n(1),m=n(7),v=n(48),h=n(47);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s()(this,n)}}var _=h[404],g=function(e){u()(n,e);var t=y(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return p.default.createElement("div",{className:"pt-content-card__404-container flex flex-dc"},p.default.createElement("div",{className:"pt-content-card__body pt-content-card__body__404 flex flex-dc flex-full-center"},p.default.createElement(v.a,{iconName:"clippy"}),p.default.createElement("p",null,_.text),p.default.createElement(m.b,{to:"/",title:_.back_404},p.default.createElement("div",null,_.button_text))))}}]),n}(p.default.PureComponent)}}]);