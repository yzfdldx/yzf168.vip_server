webpackJsonp([4],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(1),r=l(n),o=a(14),u=l(o);a(235);var i=a(164),s=l(i),f=a(21),d=a(166),c=l(d),p=(0,f.dva)(s["default"]);p.model(c["default"]),u["default"].render(r["default"].createElement(p,null),document.getElementById("root"))},26:function(e,t,a){e.exports={"default":a(48),__esModule:!0}},34:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(40),r=l(n),o=a(41),u=l(o);r["default"].Item=u["default"],t["default"]=r["default"],e.exports=t["default"]},35:[286,57],40:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(5),o=n(r),u=a(10),i=n(u),s=a(2),f=n(s),d=a(6),c=n(d),p=a(4),m=n(p),h=a(3),y=n(h),v=a(7),b=n(v),_=a(1),g=l(_),w=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&(a[l[n]]=e[l[n]]);return a},x=function(e){function t(){return(0,f["default"])(this,t),(0,m["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,y["default"])(t,e),(0,c["default"])(t,[{key:"render",value:function(){var e,t=this.props,a=t.direction,l=t.wrap,n=t.justify,r=t.align,u=t.alignContent,s=t.className,f=t.children,d=t.prefixCls,c=t.style,p=w(t,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),m=(0,b["default"])(d,s,(e={},(0,i["default"])(e,d+"-dir-row","row"===a),(0,i["default"])(e,d+"-dir-row-reverse","row-reverse"===a),(0,i["default"])(e,d+"-dir-column","column"===a),(0,i["default"])(e,d+"-dir-column-reverse","column-reverse"===a),(0,i["default"])(e,d+"-nowrap","nowrap"===l),(0,i["default"])(e,d+"-wrap","wrap"===l),(0,i["default"])(e,d+"-wrap-reverse","wrap-reverse"===l),(0,i["default"])(e,d+"-justify-start","start"===n),(0,i["default"])(e,d+"-justify-end","end"===n),(0,i["default"])(e,d+"-justify-center","center"===n),(0,i["default"])(e,d+"-justify-between","between"===n),(0,i["default"])(e,d+"-justify-around","around"===n),(0,i["default"])(e,d+"-align-start","start"===r),(0,i["default"])(e,d+"-align-center","center"===r),(0,i["default"])(e,d+"-align-end","end"===r),(0,i["default"])(e,d+"-align-baseline","baseline"===r),(0,i["default"])(e,d+"-align-stretch","stretch"===r),(0,i["default"])(e,d+"-align-content-start","start"===u),(0,i["default"])(e,d+"-align-content-end","end"===u),(0,i["default"])(e,d+"-align-content-center","center"===u),(0,i["default"])(e,d+"-align-content-between","between"===u),(0,i["default"])(e,d+"-align-content-around","around"===u),(0,i["default"])(e,d+"-align-content-stretch","stretch"===u),e));return g.createElement("div",(0,o["default"])({className:m,style:c},p),f)}}]),t}(g.Component);t["default"]=x,x.defaultProps={prefixCls:"am-flexbox",align:"center"},e.exports=t["default"]},41:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(5),o=n(r),u=a(2),i=n(u),s=a(6),f=n(s),d=a(4),c=n(d),p=a(3),m=n(p),h=a(7),y=n(h),v=a(1),b=l(v),_=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&(a[l[n]]=e[l[n]]);return a},g=function(e){function t(){return(0,i["default"])(this,t),(0,c["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,m["default"])(t,e),(0,f["default"])(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,l=e.prefixCls,n=e.style,r=_(e,["children","className","prefixCls","style"]),u=(0,y["default"])(l+"-item",a);return b.createElement("div",(0,o["default"])({className:u,style:n},r),t)}}]),t}(b.Component);t["default"]=g,g.defaultProps={prefixCls:"am-flexbox"},e.exports=t["default"]},48:function(e,t,a){var l=a(8),n=l.JSON||(l.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},57:241,70:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return"string"==typeof e}function o(e){return r(e.type)&&P(e.props.children)?x.cloneElement(e,{},e.props.children.split("").join(" ")):r(e)?(P(e)&&(e=e.split("").join(" ")),x.createElement("span",null,e)):e}Object.defineProperty(t,"__esModule",{value:!0});var u=a(5),i=n(u),s=a(10),f=n(s),d=a(2),c=n(d),p=a(6),m=n(p),h=a(4),y=n(h),v=a(3),b=n(v),_=a(7),g=n(_),w=a(1),x=l(w),O=a(33),j=n(O),E=a(16),k=n(E),C=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&(a[l[n]]=e[l[n]]);return a},N=/^[\u4e00-\u9fa5]{2}$/,P=N.test.bind(N),S=function(e){function t(){return(0,c["default"])(this,t),(0,y["default"])(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,b["default"])(t,e),(0,m["default"])(t,[{key:"render",value:function(){var e,t=this.props,a=t.children,l=t.className,n=t.prefixCls,r=t.type,u=t.size,s=t.inline,d=t.disabled,c=t.icon,p=t.loading,m=t.activeStyle,h=t.activeClassName,y=t.onClick,v=C(t,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),b=p?"loading":c,_=(0,g["default"])(n,l,(e={},(0,f["default"])(e,n+"-primary","primary"===r),(0,f["default"])(e,n+"-ghost","ghost"===r),(0,f["default"])(e,n+"-warning","warning"===r),(0,f["default"])(e,n+"-small","small"===u),(0,f["default"])(e,n+"-inline",s),(0,f["default"])(e,n+"-disabled",d),(0,f["default"])(e,n+"-loading",p),(0,f["default"])(e,n+"-icon",!!b),e)),w=x.Children.map(a,o),O=void 0;if("string"==typeof b)O=x.createElement(k["default"],{"aria-hidden":"true",type:b,size:"small"===u?"xxs":"md",className:n+"-icon"});else if(b){var E=b.props&&b.props.className,N=(0,g["default"])("am-icon",n+"-icon","small"===u?"am-icon-xxs":"am-icon-md");O=x.cloneElement(b,{className:E?E+" "+N:N})}return x.createElement(j["default"],{activeClassName:h||(m?n+"-active":void 0),disabled:d,activeStyle:m},x.createElement("a",(0,i["default"])({role:"button",className:_},v,{onClick:d?void 0:y,"aria-disabled":d}),O,w))}}]),t}(x.Component);S.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},t["default"]=S,e.exports=t["default"]},71:[287,95],95:241,164:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(34),r=l(n),o=a(70),u=l(o),i=a(44),s=l(i),f=a(16),d=l(f),c=a(24),p=l(c),m=a(26),h=l(m),y=a(5),v=l(y),b=a(2),_=l(b),g=a(4),w=l(g),x=a(3),O=l(x),j=a(42),E=l(j);a(35),a(71),a(45),a(17),a(25),a(43);var k=a(1),C=l(k);a(234);var N=a(21),P=a(14),S=(l(P),E["default"].Item),M=S.Brief,I=function(e){function t(a,l){(0,_["default"])(this,t);var n=(0,w["default"])(this,e.call(this,a,l));return n.previewFn=function(e){if(e){var t=n.state,a=t.search,l=(t.bookshelf,t.userData),r=localStorage.getItem("xiaoshuo_bookshelf");try{var o=JSON.parse(r);if(o||(o={}),!val){var u=o[l.id]?o[l.id]:{};o[l.id]=(0,v["default"])({},u,l),n.setState({bookshelf:l})}localStorage.setItem("xiaoshuo_bookshelf",(0,h["default"])(o))}catch(i){}setTimeout(function(){window.location.href="/preview.html?"+escape(a)},50)}},n.bookshelfFn=function(e){var t=n.state.userData,a=localStorage.getItem("xiaoshuo_bookshelf");try{var l=JSON.parse(a);l||(l={}),e?(delete l[t.id],n.setState({bookshelf:null})):(l[t.id]=t,n.setState({bookshelf:t})),localStorage.setItem("xiaoshuo_bookshelf",(0,h["default"])(l))}catch(r){}},n.state={userData:{},search:"",bookshelf:null,moreOnoff:!1},n}return(0,O["default"])(t,e),t.prototype.componentDidMount=function(){var e=this.props.dispatch,t=unescape(window.location.search),a=t?t.split("?")[1].split("&"):[],l={};a.forEach(function(e){var t=e.split("=");l[t[0]]=t[1]}),this.setState({userData:l,search:a.join("&")}),p["default"].loading("Loading...",5),setTimeout(function(){p["default"].hide()},5e3);var n=localStorage.getItem("xiaoshuo_bookshelf");try{var r=JSON.parse(n);r&&r[""+l.id]&&this.setState({bookshelf:r[""+l.id]})}catch(o){}e({type:"index/details_Fn",payload:{data:{id:l.id},back:function(){p["default"].hide()}}})},t.prototype.render=function(){var e=this,t=this.state,a=t.bookshelf,l=t.moreOnoff,n=this.props.index,o=n.details;return console.log(o),C["default"].createElement("div",{className:"bookstores_header"},C["default"].createElement(s["default"],{mode:"dark",leftContent:C["default"].createElement(d["default"],{type:"left"}),onLeftClick:function(){history.go(-1)}}),C["default"].createElement(E["default"],{className:"my-list"},C["default"].createElement(S,{thumb:o.img?o.img:"https://gw-office.alipayobjects.com/basement_prod/6ecbc63c-12bb-4ca2-87f6-f52eb130c63b.png",multipleLine:!0},o.title,C["default"].createElement(M,null,"\u4f5c\u8005\uff1a",o.author),C["default"].createElement(M,null,"\u7c7b\u578b\uff1a",o.type),C["default"].createElement(M,null,"\u72b6\u6001\uff1a",o.schedule),C["default"].createElement(M,null,"\u6700\u65b0\u7ae0\u8282\uff1a",o.chapters),C["default"].createElement(M,null,"\u66f4\u65b0\uff1a",o.time))),C["default"].createElement(r["default"],{className:"appButton"},C["default"].createElement(r["default"].Item,null,C["default"].createElement(u["default"],{onClick:this.previewFn},"\u5f00\u59cb\u9605\u8bfb")),C["default"].createElement(r["default"].Item,null,C["default"].createElement(u["default"],{onClick:this.bookshelfFn.bind(this,a)},a?"\u79fb\u51fa\u4e66\u67b6":"\u52a0\u5165\u4e66\u67b6")),C["default"].createElement(r["default"].Item,null,C["default"].createElement(u["default"],{onClick:function(){o.down?window.open(o.down):""}},"TXT\u4e0b\u8f7d"))),C["default"].createElement("div",{className:"appdetail"},C["default"].createElement("h4",null,"\u7b80\u4ecb",C["default"].createElement("span",{onClick:function(){e.setState({moreOnoff:!l})}},l?"\u9690\u85cf>>":"\u66f4\u591a>>")),C["default"].createElement("p",{style:l?{overflow:"visible",display:"block"}:null},o.introduction)),C["default"].createElement(E["default"],{className:"appCatalog"},C["default"].createElement(S,{arrow:"horizontal",thumb:"https://gw.alipayobjects.com/zos/rmsportal/iXVHARNNlmdCGnwWxQPH.svg",multipleLine:!0},"\u6700\u65b0\u7ae0\u8282\uff1a",o.chapters,C["default"].createElement(M,null,"\u66f4\u65b0\uff1a",o.time))))},t}(C["default"].Component),F=function(e){return e};t["default"]=(0,N.connect)(I,F),e.exports=t["default"]},165:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(24),r=l(n),o=a(36),u=l(o);a(25);var i=a(69),s=l(i);t["default"]=function(e,t,a){return e?new u["default"](function(l,n){try{(0,s["default"])({url:e.url,method:e.method?e.method:"get",contentType:"application/x-www-form-urlencoded;charset=UTF-8",data:e.data?e.data:void 0,success:function(e){e&&e.result&&"succeed"===e.result?(t&&t(e.data),l&&l(e.data)):(r["default"].fail("\u8bf7\u6c42\u5931\u8d25:"+e.message,1),n&&n(e),a&&a(e))},error:function(e){r["default"].fail("\u8bf7\u6c42\u5931\u8d25:"+e,1),n&&n(e),a&&a(e)}})}catch(o){n&&n(o)}}):a?a("\u8bf7\u914d\u7f6e\u53c2\u6570"):""},e.exports=t["default"]},166:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),r=l(n),o=a(38),u=l(o),i=a(37),s=l(i),f=a(167);t["default"]={namespace:"index",state:{details:{}},effects:{details_Fn:function(e,t){var a=this,l=e.payload,n=(e.state,t.call),r=t.put;return(0,s["default"])(u["default"].mark(function o(){var e;return u["default"].wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(f.details_Ajax,l.data);case 3:return e=t.sent,t.next=6,r({type:"save",payload:{details:e}});case 6:l.back&&l.back(),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](0);case 11:case"end":return t.stop()}},o,a,[[0,9]])}))()}},reducers:{save:function(e,t){return(0,r["default"])({},e,t.payload)}}},e.exports=t["default"]},167:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.aaAjax=t.details_Ajax=void 0;var n=a(165),r=l(n),o=window.xiaoshuo_json?window.xiaoshuo_json:"http://"+window.location.hostname;t.details_Ajax=function(e){var t=encodeURI(o+"/xiaoshuo/details.json");return(0,r["default"])({url:t,data:e})},t.aaAjax=function(e){return{a:23}}},234:241,235:241});