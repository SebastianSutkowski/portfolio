(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(n,e,t){n.exports=t.p+"static/media/medyk.b6df5606.PNG"},,,,,,,,function(n,e,t){n.exports=t.p+"static/media/svgMain.49674221.svg"},function(n,e,t){n.exports=t.p+"static/media/svgAbout.16cd63f8.svg"},function(n,e,t){n.exports=t.p+"static/media/portfolio.2c247d43.PNG"},function(n,e,t){n.exports=t.p+"static/media/svgSkills.b8f536bc.svg"},function(n,e,t){n.exports=t.p+"static/media/svgMail.42d0a5c9.svg"},,,,,function(n,e,t){n.exports=t(32)},,,,,function(n,e,t){},,,function(n,e,t){n.exports=t.p+"static/media/dog.e225b146.jpg"},function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),r=t(10),i=t.n(r),l=t(2),c=(t(28),t(1)),s=t(7);function u(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  background-color: white;\n  box-shadow: ",";\n  z-index: 10;\n  width: 100%;\n  font-size: 20px;\n  font-weight: 600;\n  height: 60px;\n  line-height: 60px;\n  color: ",";\n  transition: 0.3s;\n  section:nth-of-type(1) {\n    flex: 3;\n    // background-color:red;\n    text-align: center;\n    p {\n      cursor: pointer;\n    }\n  }\n  ul {\n    flex: 8;\n    // background-color: green;\n    display: flex;\n    justify-content: center;\n    list-style-type: none;\n    li {\n      padding: 0 1vw;\n    }\n    li:hover {\n      color: ",";\n      cursor: pointer;\n    }\n  }\n  div {\n    display: none;\n    width: 30px;\n    /* background-color: red; */\n    height: 30px;\n    overflow: hidden;\n    cursor: pointer;\n    margin: 15px 10vw;\n  }\n  section:nth-of-type(2) {\n    position: absolute;\n    margin-left: 100vw;\n    transition: 0.3s;\n    ul {\n      display: flex;\n      flex-direction: column;\n      /* background-color: #fff; */\n      z-index: 20;\n      position: relative;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -60%);\n      li {\n        margin: auto;\n        font-size: 30px;\n      }\n    }\n  }\n  @media (max-width: 750px) {\n    section:nth-of-type(1) {\n      flex: 1;\n    }\n    ul:nth-of-type(1) {\n      display: none;\n    }\n    div {\n      display: block;\n      z-index: 2;\n\n      div {\n        width: 100%;\n\n        height: 4px;\n        margin: calc(25% - 2px) 0;\n        background-color: ",";\n        border-radius: 2px;\n        transition: 0.3s;\n      }\n      div:nth-of-type(1) {\n        transform: ",";\n      }\n      div:nth-of-type(2) {\n        opacity: ",";\n      }\n      div:nth-of-type(3) {\n        transform: ",";\n      }\n    }\n    section:nth-of-type(2) {\n      margin-left: ",";\n      position: absolute;\n      z-index: 1;\n      width: 100vw;\n      height: 100vh;\n      background-color: white;\n    }\n  }\n"]);return u=function(){return n},n}var d=c.b.nav(u(),window.scrollY>20?"2px -8px 28px 0px ".concat((function(n){return n.theme.colors.blue.dark})):null,(function(n){return n.theme.colors.blue.dark}),(function(n){return n.theme.colors.blue.normal}),(function(n){return n.theme.colors.blue.dark}),(function(n){return n.open?"rotate(0deg)":"translate(0, 7px) rotate(45deg)"}),(function(n){return n.open?"1":"0"}),(function(n){return n.open?"rotate(0deg)":"translate(0, -12px) rotate(-45deg)"}),(function(n){return n.open?"100vw":"0vw"}));function p(){var n=Object(l.a)(["\npadding-top: 5vw;\n// background-color: rgba(238, 238, 238, 0.562);\nposition: relative;\nheader{\n   text-align: center;\n   h1{\n     display: block;\n     width: auto;\n      font-weight: 600;\n      color:",";\n   }\n}\nsection{\n   margin-top: 5vw;\n   display: flex;\n   flex-wrap: wrap;\n   justify-content: center;\n   div{\n      box-shadow: 0px 0px 30px -4px rgba(0,0,0,0.75);\n      overflow: hidden;\n      margin: 0 1vw;\n      display: block;\n      background-color: ",";\n      border-radius: 10px;\n      width:25vw;\n      position: relative;\n      \n      div{\n         margin: 0;\n         width:100%;\n         height: 100%;\n         /* display: none; */\n         color:white;\n         position: absolute;\n         top:0;\n         left:0;\n         transition: .5s;\n         opacity:0;\n         clip-path:circle(5% at 100% 0%);\n         p{\n            padding:2vw 2vw 0 2vw;\n            font-size:20px;\n            position: absolute;\n            /* top: 50%; */\n         }\n         button{\n            position: absolute;\n            font-size:20px;\n            width:8vw;\n            font-weight:500;\n            padding: 10px 0;\n            background-color:",";\n            color:white;\n            border:none;\n            border-radius:10px;\n            cursor:pointer;\n         }\n         button:nth-of-type(1){\n            bottom:10%;\n            left:10%;\n         }\n         button:nth-of-type(2){\n            bottom:10%;\n            right:10%;\n         }\n\n      }\n      img{\n         height:15.4vw; \n         opacity:1;\n         transition:.5s ;\n         position:relative;\n         top:50%;\n         transform:translate(0,-50%);\n         min-width:100%;\n         min-height:100%;\n      }\n   }\n   div:hover{\n      img{\n         opacity:0;\n      }\n      div{\n         clip-path:circle(150% at 100% 0%);\n         display: block;\n         opacity:1;\n         \n      }\n   }\n}\n@media (max-width:1024px) {\n   section{\n   div{\n      min-width:270px;\n      min-height:141px;\n      margin: 2vw 2vw;\n      div{\n         p{\n            font-size:18px;\n         }\n         button{\n            font-size:15px;\n            width:auto;\n            padding: 10px 15px;\n         }\n      }\n   }\n}\n}\n"]);return p=function(){return n},n}var m=c.b.article(p(),(function(n){return n.theme.colors.blue.dark}),(function(n){return n.theme.colors.blue.normal}),(function(n){return n.theme.colors.blue.dark}));t(31);function f(){var n=Object(l.a)(["\nheight:calc( 100vh - 60px );\ndisplay:flex;\npadding-top:60px;\nbackground: linear-gradient(300deg, "," 44%, white 44%);\n\nsection:nth-child(1){\n   flex:1;\n   // background-color: green;\n   margin-left: 15vw;\n   margin-top: 50vh;\n   transform: translate(0, -60%);\n   h1{\n      padding: 5px;\n      font-weight:600;\n      color:",";\n   }\n   h2{\n      padding: 5px;\n      color:","\n   }\n   h3{\n      padding: 5px;\n      color:","\n   }\n}\nsection:nth-child(2){\n   flex:1;\n   position:relative;\n   img{\n      position:absolute;\n      bottom:10vh;\n      width:80%;\n   }\n}\n@media (max-width:1024px) {\n   section:nth-child(1){\n   margin-left: 5vw;\n   }\n}\n@media (max-width:720px) {\n   section:nth-child(1){\n   margin-top: 40vh;\n   margin-left: 5vw;\n   h1{\n      font-size: 25px;\n   }\n   h2{\n      font-size: 20px;\n   }\n   h3{\n      font-size: 15px;\n   }\n   }\n   section:nth-child(2){\n   img{\n      position:absolute;\n      bottom:5vh;\n      right:5vw;\n      width:40vw;\n      min-width:220px;\n   }\n}\n}\n"]);return f=function(){return n},n}var h=c.b.article(f(),(function(n){return n.theme.colors.blue.normal}),(function(n){return n.theme.colors.blue.dark}),(function(n){return n.theme.colors.blue.normal}),(function(n){return n.theme.colors.blue.normal}));function g(){var n=Object(l.a)(["\n   padding-top: 5vw;\n   background-color: rgba(238, 238, 238, 0.562);\n   header{\n      text-align: center;\n      h1{\n        display: block;\n        width: auto;\n         font-weight: 600;\n         color:",";\n      }\n   }\n   section{\n      display: flex;\n      margin: 0 10vw;\n      \n      img{\n         width: 30vw;\n      }\n      p{\n         /* height: 20vw; */\n         padding:auto 0;\n         padding-bottom:5vw;\n         margin-left: 30px;\n         font-size: 20px;\n         margin-top: 20px;\n         font-weight: 500;\n         color:",";\n      }\n   }\n   @media (max-width:950px) {\n      section{\n      margin: 0 5vw;\n      img{\n        min-width:250px;\n      }\n      p{\n         margin-left: 10px;\n         font-size: 20px;\n      }\n   }\n   @media (max-width:720px) {\n      section{\n      p{\n         font-size: 15px;\n      }\n   }\n}\n   @media (max-width:720px) {\n      section{\n         img{\n            display:none;\n         }\n   }\n}\n}\n"]);return g=function(){return n},n}var x=c.b.article(g(),(function(n){return n.theme.colors.blue.dark}),(function(n){return n.theme.colors.blue.dark}));function b(){var n=Object(l.a)(["\nmargin-top: 5vw;\npadding-top: 5vw;\nbackground-color: rgba(238, 238, 238, 0.562);\nheader{\n   text-align: center;\n   h1{\n     display: block;\n     width: auto;\n      font-weight: 600;\n      color:",";\n   }\n}\nsection{\n   margin-top:3vw;\n   position: relative;\n   div{\n      display:flex;\n      flex-wrap:wrap;\n      justify-content:center;\n      div{\n         border-radius:50%;\n         width:calc(70px + 5vw);\n         height:calc(70px + 5vw);\n         position:relative;\n         margin: 1vw 1vw;\n         box-shadow: 0px 0px 29px -9px ",";\n         i{\n            position:absolute;\n            top:50%;\n            left:50%;\n            transform:translate(-50%,-50%);\n            font-size:calc(50px + 3vw);\n            transition:.2s;\n         }\n         p{\n            display:block;\n            position:absolute;\n            top:50%;\n            left:50%;\n            transform:translate(-50%,-50%) scaleX(0);\n            font-size:20px;\n            transition:.15s;\n            color:",";\n            font-weight:600;\n            text-align:center;\n         }\n      }\n      div:hover{\n         i{\n            transform:translate(-50%,-50%) scaleX(0);\n         }\n         p{\n            transition-delay: .2s;\n            transform:translate(-50%,-50%) scaleX(1);\n         }\n      }\n      \n   }\n   img{\n      position:relative;\n      width: 30vw;\n      min-width:220px;\n      left:50%;\n      transform:translate(-50%,0);\n   }\n\n\n}\n@media (max-width:840px) {\n   section{\n      div{\n         div{\n            width:calc(50px + 5vw);\n            height:calc(50px + 5vw);\n            i{\n            font-size:calc(30px + 3vw);\n         }\n         }\n      }\n   }\n}\n"]);return b=function(){return n},n}var v=c.b.article(b(),(function(n){return n.theme.colors.blue.dark}),(function(n){return n.theme.colors.blue.dark}),(function(n){return n.theme.colors.blue.dark}));function w(){var n=Object(l.a)(["\nmargin: 5vw 10vw;\n/* padding-top: 5vw; */\nheader{\n   text-align: center;\n   h1{\n     display: block;\n     width: auto;\n      font-weight: 600;\n      color:",";\n   }\n}\nsection{\n   display:flex;\n   flex-direction:row;\n   justify-content:center;\n   img{\n      width:30vw;\n   }\n}\n   @media (max-width:700px) {\n   margin: 5vw 3vw;\n   section{\n      img{\n         display:none;\n      }\n   }\n}\n\n"]);return w=function(){return n},n}var E=c.b.article(w(),(function(n){return n.theme.colors.blue.dark})),y=function(n){var e=Object(o.useState)(0),t=Object(s.a)(e,2),r=(t[0],t[1]),i=Object(o.useState)(!0),l=Object(s.a)(i,2),c=l[0],u=l[1];function p(){r(window.pageYOffset),window.scrollY>100?document.querySelector("nav").style.boxShadow="2px -8px 28px 0px #344D90":document.querySelector("nav").style.boxShadow="0px 0px 0px 0px white"}function f(n){var e=a.a.createElement(h,null).type.styledComponentId,t=a.a.createElement(x,null).type.styledComponentId,o=(a.a.createElement(m,null).type.styledComponentId,a.a.createElement(v,null).type.styledComponentId),r=a.a.createElement(E,null).type.styledComponentId,i=document.querySelector(".".concat(e)).offsetHeight-60;[{name:"0",value:0},{name:"aboutPosition",value:i},{name:"worksPosition",value:i+document.querySelector(".".concat(t)).offsetHeight},{name:"skillsPosition",value:document.querySelector(".".concat(o)).offsetTop-60},{name:"contactPosition",value:document.querySelector(".".concat(r)).offsetTop-60}].map((function(e){n==e.name&&(window.scrollTo(0,e.value),console.log(e))}))}return Object(o.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}})),a.a.createElement(d,{open:c},a.a.createElement("section",null,a.a.createElement("p",{onClick:function(){return f(0)}},"<SebastianSutkowski/>")),a.a.createElement("ul",null,a.a.createElement("li",{onClick:function(){return f(0)}},"Home"),a.a.createElement("li",{onClick:function(){return f("aboutPosition")}},"About"),a.a.createElement("li",{onClick:function(){return f("worksPosition")}},"Works"),a.a.createElement("li",{onClick:function(){return f("skillsPosition")}},"Technologies"),a.a.createElement("li",{onClick:function(){return f("contactPosition")}},"Contact")),a.a.createElement("div",{onClick:function(){return u(!c)}},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("section",null,a.a.createElement("ul",null,a.a.createElement("li",{onClick:function(){return f(0),u(!c)}},"Home"),a.a.createElement("li",{onClick:function(){return f("aboutPosition"),u(!c)}},"About"),a.a.createElement("li",{onClick:function(){return f("worksPosition"),u(!c)}},"Works"),a.a.createElement("li",{onClick:function(){return f("skillsPosition"),u(!c)}},"Technologies"),a.a.createElement("li",{onClick:function(){return f("contactPosition"),u(!c)}},"Contact"))))},k={colors:{blue:{normal:"#5CC5EF",dark:"#344D90"},orange:{normal:"#FFB745",dark:"#E7552C"}}};function S(){var n=Object(l.a)(["\n  font-size: 20px;\n  padding: 10px 40px;\n  margin: 10px 0;\n  background-color: ",";\n  color: white;\n  border: none;\n  border-radius: 10px;\n  border: solid 1px white;\n  transition: 0.3s;\n  cursor: pointer;\n  &:hover {\n    background-color: ",";\n  }\n  @media (max-width: 720px) {\n    font-size: 15px;\n    padding: 5px 20px;\n  }\n"]);return S=function(){return n},n}var C=c.b.button(S(),(function(n){return n.theme.colors.blue.dark}),(function(n){return n.theme.colors.blue.normal})),j=function(n){var e=n.content;return a.a.createElement(C,null,e)},O=t(14),z=t.n(O),P=function(){return a.a.createElement(h,null,a.a.createElement("section",null,a.a.createElement("h1",null,"Sebastian Sutkowski"),a.a.createElement("h2",null,"Front-end develoer"),a.a.createElement("h3",null,"lets check my portfolio and hire me"),a.a.createElement(j,{content:"contact me"})),a.a.createElement("section",null,a.a.createElement("img",{src:z.a,alt:"photo"})))},q=t(15),F=t.n(q),R=function(){return a.a.createElement(x,null,a.a.createElement("header",null,a.a.createElement("h1",null,"About me")),a.a.createElement("section",null,a.a.createElement("img",{src:F.a,alt:"photo"}),a.a.createElement("p",null," Hi, my name is Sebastian. i'm an enginerr of Automatics and Robotics and now i'm finishing a master's degree. In my studies i had contact with many programming languages, but they are not used in web-development. It allowed me to learn the rules of coding and many aspects of their use. When i started learning front-end, i liked it very much. I would like to do this in the future and increase my competences.")))},I=t(6),M=t.n(I),H=t(16),T=t.n(H),A=[{img:M.a,description:"First comercial project realised for my sports-club (not finished)."},{img:T.a,description:"Portfolio you are currently watching "},{img:M.a,description:"comercial project realised for my sports-club"}],W=function(){var n=a.a.createElement(m,null).type.styledComponentId;document.getElementsByClassName("".concat(n)),document.querySelectorAll("article");return a.a.createElement(m,null,a.a.createElement("header",null,a.a.createElement("h1",null,"My Works")),a.a.createElement("section",null,A.map((function(n){return a.a.createElement("div",null,a.a.createElement("img",{src:n.img,alt:"photo"}),a.a.createElement("div",null,a.a.createElement("p",null,n.description),a.a.createElement("button",null,"live"),a.a.createElement("button",null,"repo")))}))))},D=t(17),L=t.n(D),X=[{color:"#f34f29",class:"fab fa-git-alt",description:"Git"},{color:"#61dbfb",class:"fab fa-react",description:"React"},{color:"#f0db4f",class:"fab fa-js-square",description:"Java- Script"},{color:"#F16529",class:"fab fa-html5",description:"HTML"},{color:"#264de4",class:"fab fa-css3-alt",description:"CSS"},{color:"#cc6699",class:"fab fa-sass",description:"SASS"}],B=function(){return a.a.createElement(v,null,a.a.createElement("header",null,a.a.createElement("h1",null,"My Skills")),a.a.createElement("section",null,a.a.createElement("div",null,X.map((function(n){return a.a.createElement("div",null,a.a.createElement("i",{style:{color:n.color},class:n.class}),a.a.createElement("p",null,n.description))}))),a.a.createElement("img",{src:L.a,alt:"photo"})))},N=t(18),G=t.n(N),J=t(19),Y=t(20),U=t(4),$=t(22),_=t(21);function K(){var n=Object(l.a)(["\nwidth:auto;\nflex:1;\nposition: relative;\nright:0;\nform{\n   padding:15px;\n   display:flex;\n   flex-direction:column;\n   input,textarea{\n      border:none;\n      padding:0 10px;\n      border-radius:10px;\n      box-shadow: 0px 0px 15px -4px ",";\n   }\n   input:focus {\n      /* border:solid 10px ","; */\n   }\n   input:nth-of-type(1){\n      height:30px;\n      margin-bottom:15px;\n      min-width:300px;\n   }\n   textarea{\n      padding:10px 10px;\n      height:calc(24vw - 110px);\n      min-height:130px;\n      min-width:300px;\n      margin-bottom:15px;\n      resize:none;\n   }\n   button{\n      width:200px;\n   }\n}\n\n"]);return K=function(){return n},n}var Q=c.b.div(K(),(function(n){return n.theme.colors.blue.dark}),(function(n){return n.theme.colors.blue.dark})),V=function(n){Object($.a)(t,n);var e=Object(_.a)(t);function t(n){var o;return Object(J.a)(this,t),(o=e.call(this,n)).submitForm=o.submitForm.bind(Object(U.a)(o)),o.state={status:""},o}return Object(Y.a)(t,[{key:"render",value:function(){var n=this.state.status;return a.a.createElement(Q,null,a.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/xknqjgwv",method:"POST"},a.a.createElement("input",{placeholder:"Enter your email",type:"email",name:"email"}),a.a.createElement("textarea",{placeholder:"Message",name:"message"}),"SUCCESS"===n?a.a.createElement("p",null,"Thanks!"):a.a.createElement(j,{content:"Send"}),"ERROR"===n&&a.a.createElement("p",null,"Ooops! There was an error.")))}},{key:"submitForm",value:function(n){var e=this;n.preventDefault();var t=n.target,o=new FormData(t),a=new XMLHttpRequest;a.open(t.method,t.action),a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?(t.reset(),e.setState({status:"SUCCESS"})):e.setState({status:"ERROR"}))},a.send(o)}}]),t}(a.a.Component),Z=function(){return a.a.createElement(E,null,a.a.createElement("header",null,a.a.createElement("h1",null,"Contact Me")),a.a.createElement("section",null,a.a.createElement(V,null),a.a.createElement("img",{src:G.a,alt:"photo"})))};function nn(){var n=Object(l.a)(["\nbackground-color:  ",";\npadding:10px 0;\ncolor:white;\ntext-align:center;\na{\n  color:#ddd;\n  text-decoration:none;\n}\n"]);return nn=function(){return n},n}var en=c.b.footer(nn(),(function(n){return n.theme.colors.blue.dark}));var tn=function(){return a.a.createElement(c.a,{theme:k},a.a.createElement(y,null),a.a.createElement(P,null),a.a.createElement(R,null),a.a.createElement(W,null),a.a.createElement(B,null),a.a.createElement(Z,null),a.a.createElement(en,null,"Copyrights \xa9 2020",a.a.createElement("a",{href:"https://github.com/sebo9611",target:"_blank"}," Sebastian Sutkowski")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(tn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.07be617e.chunk.js.map