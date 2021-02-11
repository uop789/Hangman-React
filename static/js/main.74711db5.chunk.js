(this["webpackJsonphangman-react"]=this["webpackJsonphangman-react"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),c=s(7),i=s.n(c),a=s(2),o=(s(12),s(0)),j=function(){return Object(o.jsx)("h1",{children:"Welcome to the Hangman Game!"})},l=function(e){var t=e.errorMessage;return Object(o.jsx)("div",{className:"notification-container",children:t&&Object(o.jsx)("p",{children:t})})},u=function(e){var t=e.targetWord,s=e.handleInput,r=e.handleClick;return Object(o.jsxs)("div",{className:"gameConfig_container",children:[Object(o.jsx)("p",{children:"Player one type in a target word"}),Object(o.jsx)("input",{type:"text",value:t,onChange:s}),Object(o.jsx)("button",{onClick:r,children:"Start Guessing"})]})},d=s(3),b=function(e){var t=e.missLetters.length;return Object(o.jsxs)("svg",{height:"250",width:"200",className:"figure-container",children:[Object(o.jsx)("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),Object(o.jsx)("line",{x1:"60",y1:"20",x2:"60",y2:"50"}),Object(o.jsx)("line",{x1:"140",y1:"20",x2:"140",y2:"230"}),Object(o.jsx)("line",{x1:"60",y1:"230",x2:"180",y2:"230"}),t>0&&Object(o.jsx)("circle",{cx:"60",cy:"70",r:"20"}),t>1&&Object(o.jsx)("line",{x1:"60",y1:"90",x2:"60",y2:"150"}),t>2&&Object(o.jsx)("line",{x1:"60",y1:"120",x2:"40",y2:"100"}),t>3&&Object(o.jsx)("line",{x1:"60",y1:"120",x2:"80",y2:"100"}),t>4&&Object(o.jsx)("line",{x1:"60",y1:"150",x2:"40",y2:"180"}),t>5&&Object(o.jsx)("line",{x1:"60",y1:"150",x2:"80",y2:"180"})]})},x=function(e){var t=e.targetWord,s=e.correctLetters;return Object(o.jsxs)(o.Fragment,{children:["Word: ",Object(d.a)(t).map((function(e){return s.includes(e)?"".concat(e," "):"_ "}))]})},O=function(e){var t=e.missLetters;return Object(o.jsxs)(o.Fragment,{children:["Misses: ",t.map((function(e,s){return s===t.length-1?e:"".concat(e,", ")}))]})},h=function(e){var t=e.targetWord,s=e.guess,r=e.correctLetters,n=e.missLetters;return Object(o.jsxs)("div",{className:"status-container",children:[Object(o.jsx)(x,{targetWord:t,correctLetters:r}),Object(o.jsxs)("p",{children:["Guess: ",s]}),Object(o.jsx)(O,{missLetters:n})]})},g=function(e,t){return e.includes(t)},f=function(e){var t=e.targetWord,s=e.showNotification,n=e.guess,c=e.setGuess,i=e.correctLetters,a=e.setCorrectLetters,j=e.missLetters,l=e.setMissLetters;return Object(r.useEffect)((function(){var e=function(e){var r=e.key,n=e.keyCode;if(n>=65&&n<=90){var o=r.toLowerCase();c(r),t.includes(o)?g(i,o)?s("You have already guessed this letter"):a([].concat(Object(d.a)(i),[o])):g(j,o)?s("You have already guessed this letter"):l([].concat(Object(d.a)(j),[o]))}else s("only 26 letters allowed")};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n,i,j]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Find the hidden word - Player two enter a letter"}),Object(o.jsx)(b,{missLetters:j}),Object(o.jsx)(h,{targetWord:t,guess:n,correctLetters:i,missLetters:j})]})},y=function(e){var t=e.targetWord,s=e.setTargetWord,r=e.correctLetters,n=e.setCorrectLetters,c=e.missLetters,i=e.setMissLetters,a=e.setStartGuess,j=6!==c.length&&(0===Object(d.a)(t).filter((function(e){return!r.includes(e)})).length||"pending");return"pending"!==j?Object(o.jsxs)("div",{className:"result-container",children:[Object(o.jsx)("div",{className:j?"win":"lost",children:j?Object(o.jsx)("h2",{className:"win",children:"You got it! Player 2 won!"}):Object(o.jsxs)("h2",{children:["You used all chances! Player 1 won! The word was ",t,"!"]})}),Object(o.jsx)("button",{onClick:function(){a(!1),s(""),n([]),i([])},children:"Play Again"})]}):null},m=function(e){var t=e.showNotification,s=Object(r.useState)(""),n=Object(a.a)(s,2),c=n[0],i=n[1],j=Object(r.useState)(!1),l=Object(a.a)(j,2),d=l[0],b=l[1],x=Object(r.useState)(""),O=Object(a.a)(x,2),h=O[0],g=O[1],m=Object(r.useState)([]),v=Object(a.a)(m,2),L=v[0],w=v[1],p=Object(r.useState)([]),W=Object(a.a)(p,2),C=W[0],N=W[1];return Object(o.jsx)(o.Fragment,{children:d?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{targetWord:c,showNotification:t,guess:h,setGuess:g,correctLetters:L,setCorrectLetters:w,missLetters:C,setMissLetters:N}),Object(o.jsx)(y,{setStartGuess:b,targetWord:c,setTargetWord:i,correctLetters:L,setCorrectLetters:w,missLetters:C,setMissLetters:N})]}):Object(o.jsx)(u,{targetWord:c,handleInput:function(e){var s=e.target.value;/^[a-z]+$/.test(s)||""===s?i(s):t("only 26 letters in lowecase allowed")},handleClick:function(){c.length>0?b(!0):t("please give a target word")}})})};var v=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),s=t[0],n=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)(l,{errorMessage:s}),Object(o.jsx)(m,{showNotification:function(e){n(e),setTimeout((function(){n("")}),2e3)}})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.74711db5.chunk.js.map