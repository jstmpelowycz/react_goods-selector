(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(7),s=n.n(c),o=(n(19),n(14)),a=n(8),l=n(9),r=n(10),i=n(13),d=(n(20),n(1)),u=n.n(d),p=n(4),h=n.n(p),j=n(24),m=n(0),f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selectedGoods:[]},e.handleAddButtonClick=function(t){e.setState((function(e){var n=e.selectedGoods;return{selectedGoods:[].concat(Object(o.a)(n),[t])}}))},e.handleRemoveButtonClick=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.handleClearButtonClick=function(){e.setState((function(){return{selectedGoods:[]}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods,n=function(e){return t.includes(e)},c=1===t.length?t[0].toLowerCase():("".concat(t.slice(0,-1).join(", "))+" and ".concat(t.slice(-1))).toLowerCase(),s=function(e){return n(e)?"Remove":"Add"};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{className:"App__title",children:0===t.length?"No goods selected":"Goods selected: ".concat(c)}),Object(m.jsx)("ul",{className:"App__list",children:f.map((function(t){return Object(m.jsxs)("li",{className:" App__item d-flex justify-content-between align-items-center ",children:[Object(m.jsx)("span",{className:h()("App__item-text",{"App__item-text--disabled":n(t)}),children:t}),Object(m.jsx)(j.a,{className:"App__item-button ms-3",onClick:function(){return function(t){return n(t)?e.handleRemoveButtonClick(t):e.handleAddButtonClick(t)}(t)},children:s(t)})]},t)}))}),t.length>0&&Object(m.jsx)(j.a,{className:"App__clearButton",onClick:this.handleClearButtonClick,children:"Clear"})]})}}]),n}(u.a.Component);s.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.474c70ba.chunk.js.map