(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(19),c=a.n(r),i=(a(15),a(23)),o=a(2),l="https://auth.nomoreparties.co",u=function(e){return e.ok?e.json():(console.log("\u041e\u0448\u0438\u0431\u043a\u0430"),Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)),"Err")},d=a(8),p=a.p+"static/media/logo.bbe2a6ea.svg",j=a(0);var h=function(e){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("img",{alt:"\u041b\u043e\u0433\u043e",src:p,className:"header__logo"}),Object(j.jsxs)("div",{className:"header__info",children:[Object(j.jsx)("p",{className:"header__text",children:e.email}),Object(j.jsx)(d.b,{to:e.link,children:Object(j.jsx)("p",{onClick:e.signOut&&function(){e.signOut()},className:"header__btn",children:e.title})})]})]})};var m=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer__creator",children:"\xa9 2021 Mesto Russia"})})},_=a.p+"static/media/trash.2af49b82.svg",b=s.a.createContext();var f=function(e){var t=s.a.useContext(b),a=e.card.owner._id===t._id,n="gallery__trash-bin ".concat(a?"gallery__trash-bin_visible":"gallery__trash-bin_hidden"),r=e.card.likes.some((function(e){return e._id===t._id})),c="gallery__item-like ".concat(r?"gallery__item-like_active":"");return Object(j.jsxs)("div",{className:"gallery__item",children:[Object(j.jsx)("img",{className:n,onClick:function(){e.onCardDelete(e.card)},src:_,alt:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(j.jsx)("img",{alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",src:e.card.link,onClick:function(){e.onCardClick(e.card)},className:"gallery__item-pic"}),Object(j.jsxs)("div",{className:"gallery__info",children:[Object(j.jsx)("h2",{className:"gallery__item-title",children:e.card.name}),Object(j.jsxs)("div",{className:"gallery__likes",children:[Object(j.jsx)("button",{type:"button",onClick:function(){e.onCardLike(e.card)},className:c}),Object(j.jsx)("p",{className:"gallery__item-like-amount",children:e.card.likes.length})]})]})]})};var O=function(e){var t=s.a.useContext(b);return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("div",{className:"profile__avatar-overlay",onClick:e.onEditAvatar}),Object(j.jsx)("div",{style:{backgroundImage:"url(".concat(t.avatar,")")},className:"profile__avatar"}),Object(j.jsxs)("div",{className:"profile__text-info",children:[Object(j.jsxs)("div",{className:"profile__row",children:[Object(j.jsx)("h1",{className:"profile__name",id:"profile__name",children:t.name}),Object(j.jsx)("button",{type:"button",className:"profile__settings",onClick:e.onEditProfile,id:"settings"})]}),Object(j.jsx)("p",{className:"profile__status",id:"profile__status",children:t.about})]})]}),Object(j.jsx)("button",{type:"button",id:"add_btn",className:"profile__add-btn",onClick:e.onAddPlace})]}),Object(j.jsx)("section",{className:"gallery",children:e.cards.map((function(t){return Object(j.jsx)(f,{onCardDelete:e.onCardDelete,onCardLike:e.onCardLike,card:t,onCardClick:e.onCardClick},t._id)}))})]})},x=a(21),g=a(22),v=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)).catch((function(e){console.log(e)}))},N=new(function(){function e(){Object(x.a)(this,e),this._urlCards="https://mesto.nomoreparties.co/v1/cohort-20/cards/",this._urlUserInfo="https://mesto.nomoreparties.co/v1/cohort-20/users/me/",this._headers={"content-type":"application/json",authorization:"cc284eaa-be85-4547-943e-099c0aa22925"}}return Object(g.a)(e,[{key:"getData",value:function(){return fetch(this._urlCards,{method:"GET",headers:this._headers}).then(v)}},{key:"getUserInfo",value:function(){return fetch(this._urlUserInfo,{method:"GET",headers:this._headers}).then(v)}},{key:"setUserInfo",value:function(e){return fetch(this._urlUserInfo,{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(v)}},{key:"addNewCard",value:function(e){return fetch(this._urlCards,{method:"POST",headers:this._headers,body:JSON.stringify({name:e.place,link:e.link})}).then(v)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._urlCards,"likes/").concat(e),{method:"PUT",headers:this._headers}).then(v):fetch("".concat(this._urlCards,"likes/").concat(e),{method:"DELETE",headers:this._headers}).then(v)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._urlCards).concat(e),{method:"DELETE",headers:this._headers}).then(v)}},{key:"addAvatar",value:function(e){return fetch("".concat(this._urlUserInfo,"avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(v)}}]),e}());var C=function(e){return Object(j.jsx)("div",{className:e.card?"popup popup_display_flex":"popup",id:"popup_image",children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{type:"button",className:"popup__close-cross",onClick:e.onClose}),Object(j.jsx)("img",{className:"popup__image",src:String(e.card.link),alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(j.jsx)("p",{className:"popup__subtitle",children:e.card.name})]})})};var k=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:e.isOpen?"popup popup_display_flex":"popup",children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{type:"button",className:"popup__close-cross",onClick:e.onClose}),Object(j.jsxs)("form",{id:e.name,name:e.name,onSubmit:e.onSubmit,className:"popup__card",children:[Object(j.jsx)("h2",{className:"popup__header",children:e.title}),e.children,Object(j.jsx)("button",{disabled:e.isValid?"":"disabled",className:e.isValid?"popup__btn":"popup__btn popup__btn_disabled",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})})};var y=function(e){var t=s.a.useState(""),a=Object(o.a)(t,2),n=a[0],r=a[1],c=s.a.useState(""),i=Object(o.a)(c,2),l=i[0],u=i[1],d=s.a.useContext(b),p=s.a.useState({errorMessage:"",isValid:!0}),h=Object(o.a)(p,2),m=h[0],_=h[1],f=s.a.useState({errorMessage:"",isValid:!0}),O=Object(o.a)(f,2),x=O[0],g=O[1],v=s.a.useState(!0),N=Object(o.a)(v,2),C=N[0],y=N[1],S=s.a.useRef(),w=s.a.useRef();return s.a.useEffect((function(){r(d.name),u(d.about)}),[d]),s.a.useEffect((function(){y(m.isValid&&x.isValid)}),[m,x]),s.a.useEffect((function(){S.current.value=n,w.current.value=l,_({errorMessage:"",isValid:!0}),g({errorMessage:"",isValid:!0})}),[e.isOpen]),Object(j.jsxs)(k,{isValid:C,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:S.current.value,about:w.current.value})},onClose:e.onClose,isOpen:e.isOpen,name:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:[Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{ref:S,className:"popup__row",name:"name",type:"text",minLength:"2",maxLength:"40",required:!0,id:"name",defaultValue:n,onChange:function(e){_({errorMessage:e.target.validationMessage,isValid:e.target.checkValidity()})},placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(j.jsx)("span",{className:"popup__row-error_active name-error",children:m.errorMessage})]}),Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{ref:w,className:"popup__row",name:"about",type:"text",id:"job",minLength:"2",required:!0,maxLength:"200",defaultValue:l,onChange:function(e){g({errorMessage:e.target.validationMessage,isValid:e.target.checkValidity()})},placeholder:"\u0427\u0435\u043c \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442\u0435\u0441\u044c?"}),Object(j.jsx)("span",{className:"popup__row-error_active job-error",children:x.errorMessage})]})]})};var S=function(e){var t=s.a.useState({errorMessage:"",isValid:!1}),a=Object(o.a)(t,2),n=a[0],r=a[1],c=s.a.useState(!0),i=Object(o.a)(c,2),l=i[0],u=i[1],d=s.a.useRef();return s.a.useEffect((function(){u(n.isValid)}),[n]),s.a.useEffect((function(){d.current.value="",r({errorMessage:"",isValid:!1})}),[e.isOpen]),Object(j.jsx)(k,{isValid:l,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:d.current.value})},onClose:e.onClose,isOpen:e.isOpen,name:"editAvatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{onChange:function(e){r({errorMessage:e.target.validationMessage,isValid:e.target.checkValidity()})},ref:d,className:"popup__row",type:"url",name:"link_avatar",id:"avatar",required:!0,defaultValue:"",placeholder:"\u0421\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(j.jsx)("span",{className:"popup__row-error_active avatar-error",children:n.errorMessage})]})})};var w=function(e){var t=s.a.useRef(),a=s.a.useRef(),n=s.a.useState({errorMessage:"",isValid:!1}),r=Object(o.a)(n,2),c=r[0],i=r[1],l=s.a.useState({errorMessage:"",isValid:!1}),u=Object(o.a)(l,2),d=u[0],p=u[1],h=s.a.useState(!1),m=Object(o.a)(h,2),_=m[0],b=m[1];function f(){i({errorMessage:t.current.validationMessage,isValid:t.current.checkValidity()}),p({errorMessage:a.current.validationMessage,isValid:a.current.checkValidity()})}return s.a.useEffect((function(){b(c.isValid&&d.isValid)}),[c,d]),s.a.useEffect((function(){t.current.value="",a.current.value="",i({errorMessage:"",isValid:!1}),p({errorMessage:"",isValid:!1})}),[e.isOpen]),Object(j.jsxs)(k,{isValid:_,onSubmit:function(n){n.preventDefault(),e.onAddPlaceSubmit({place:t.current.value,link:a.current.value})},onClose:e.onClose,isOpen:e.isOpen,name:"addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:[Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{onChange:f,ref:t,className:"popup__row",type:"text",minLength:"2",maxLength:"30",name:"place",id:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(j.jsx)("span",{className:"popup__row-error_active place-error",children:c.errorMessage})]}),Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{onChange:f,ref:a,className:"popup__row",type:"url",name:"link",id:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(j.jsx)("span",{className:"popup__row-error_active link-error",children:d.errorMessage})]})]})};var V=function(e){return Object(j.jsx)(k,{onSubmit:e.onSubmit,isValid:!0,onClose:e.onClose,isOpen:e.isOpen,name:"deleteCard",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"})};var E=function(e){var t=s.a.useRef(),a=s.a.useRef();return Object(j.jsx)("main",{className:"content",children:Object(j.jsx)("div",{className:"popup__container",children:Object(j.jsxs)("form",{className:"popup__card_theme_dark",children:[Object(j.jsx)("h2",{className:"popup__header",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{ref:t,defaultValue:"",className:"popup__row_theme_dark",name:"email",type:"email",minLength:"2",maxLength:"40",required:!0,id:"Email",placeholder:"Email"}),Object(j.jsx)("span",{className:"popup__row-error_active name-error"})]}),Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{ref:a,defaultValue:"",className:"popup__row_theme_dark",name:"password",type:"password",minLength:"2",maxLength:"40",required:!0,id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("span",{className:"popup__row-error_active name-error"})]}),Object(j.jsx)("button",{onClick:function(n){n.preventDefault(),e.onRegister(a.current.value,t.current.value)},className:"popup__btn_theme_dark",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(j.jsx)(d.b,{to:"sign-in",children:Object(j.jsx)("span",{className:"popup__login",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})]})})})};var M=function(e){var t=s.a.useRef(),a=s.a.useRef();return Object(j.jsx)("main",{className:"content",children:Object(j.jsx)("div",{className:"popup__container",children:Object(j.jsxs)("form",{className:"popup__card_theme_dark",children:[Object(j.jsx)("h2",{className:"popup__header",children:"\u0412\u0445\u043e\u0434"}),Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{ref:t,className:"popup__row_theme_dark",required:!0,type:"email",minLength:"2",maxLength:"40",placeholder:"Email"}),Object(j.jsx)("span",{className:"popup__row-error_active name-error"})]}),Object(j.jsxs)("div",{className:"popup__field",children:[Object(j.jsx)("input",{ref:a,className:"popup__row_theme_dark",required:!0,type:"password",minLength:"2",maxLength:"40",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("span",{className:"popup__row-error name-error"})]}),Object(j.jsx)("button",{onClick:function(n){n.preventDefault(),""!==a.current.value&&""!==t.current.value&&e.onLogIn(a.current.value,t.current.value)},className:"popup__btn_theme_dark",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})})},L=a.p+"static/media/Err.df8eddf6.svg",I=a.p+"static/media/Ok.1b6082f8.svg";var P=function(e){return Object(j.jsx)("div",{className:e.isOpen?"popup popup_display_flex":"popup",children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("button",{type:"button",className:"popup__close-cross",onClick:e.onClose}),Object(j.jsxs)("div",{className:"popup__card",children:[Object(j.jsx)("img",{src:e.isOk?I:L,className:"popup__response"}),Object(j.jsx)("p",{className:"popup__response-text",children:e.isOk?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})})},T=a(24),D=a(25),U=a(3),A=function(e){var t=e.component,a=Object(D.a)(e,["component"]);return Object(j.jsx)(U.b,{children:function(){return a.loggedIn?Object(j.jsx)(t,Object(T.a)({},a)):Object(j.jsx)(U.a,{to:"./sign-in"})}})};var R=function(){var e=s.a.useState([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=s.a.useState(!1),d=Object(o.a)(c,2),p=d[0],_=d[1],f=s.a.useState(!1),x=Object(o.a)(f,2),g=x[0],v=x[1],k=s.a.useState(!1),L=Object(o.a)(k,2),I=L[0],T=L[1],D=s.a.useState(!1),R=Object(o.a)(D,2),q=R[0],J=R[1],F=s.a.useState(!1),B=Object(o.a)(F,2),G=B[0],z=B[1],H=s.a.useState(""),K=Object(o.a)(H,2),Q=K[0],W=K[1],X=s.a.useState(null),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1],ee=s.a.useState([]),te=Object(o.a)(ee,2),ae=te[0],ne=te[1],se=s.a.useState(!1),re=Object(o.a)(se,2),ce=re[0],ie=re[1],oe=s.a.useState(!1),le=Object(o.a)(oe,2),ue=le[0],de=le[1],pe=s.a.useState(null),je=Object(o.a)(pe,2),he=je[0],me=je[1],_e=Object(U.g)();function be(){T(!1),_(!1),v(!1),W(""),J(!1),z(!1)}return Object(n.useEffect)((function(){N.getData().then((function(e){ne(e)}))}),[]),Object(n.useEffect)((function(){!function(){var e=localStorage.getItem("jwt");e&&(t=e,fetch("".concat(l,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(u)).then((function(e){e&&(me(e.data.email),ie(!0))}));var t}()}),[]),Object(n.useEffect)((function(){N.getUserInfo().then((function(e){r(e)}))}),[]),s.a.useEffect((function(){ce&&(_e.push("/profile"),console.log("\u041f\u0435\u0440\u0435\u043f\u0440\u0430\u0432\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))}),[ce,he]),Object(j.jsxs)(b.Provider,{value:a,children:[Object(j.jsx)("meta",{charSet:"UTF-8"}),Object(j.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(j.jsx)("title",{children:"Mesto"}),Object(j.jsxs)("div",{className:"main",tabIndex:0,onKeyDown:function(e){"Escape"===e.key&&be()},onClick:function(e){(I||p||g||q||Q)&&e.target.classList.contains("popup")&&be()},children:[ce&&Object(j.jsx)(h,{email:he,loggedIn:ce,title:"\u0412\u044b\u0439\u0442\u0438",link:"/sign-in",signOut:function(){localStorage.removeItem("jwt"),ie(!1),_e.push("/sign-in"),console.log(localStorage)}}),Object(j.jsx)(C,{onClose:be,card:Q}),Object(j.jsx)(S,{onUpdateAvatar:function(e){N.addAvatar(e.avatar).then((function(e){r(e),be()}))},isOpen:I,onClose:be}),Object(j.jsx)(y,{onUpdateUser:function(e){N.setUserInfo(e).then((function(e){r(e),be()}))},isOpen:p,onClose:be}),Object(j.jsx)(w,{onAddPlaceSubmit:function(e){N.addNewCard(e).then((function(e){ne([e].concat(Object(i.a)(ae))),be()}))},isOpen:g,onClose:be}),Object(j.jsx)(V,{onSubmit:function(e){e.preventDefault(),N.deleteCard(Z._id).then((function(e){var t=ae.filter((function(e){return e._id!==Z._id}));ne(t),be()}))},onClose:be,isOpen:q}),Object(j.jsxs)(U.d,{children:[Object(j.jsx)(U.b,{exact:!0,path:"/",children:ce?Object(j.jsx)(U.a,{to:"/profile"}):Object(j.jsx)(U.a,{to:"/sign-in"})}),Object(j.jsx)(A,{path:"/profile",loggedIn:ce,component:O,cards:ae,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));N.changeLikeCardStatus(e._id,!t).then((function(t){console.log(t);var a=ae.map((function(a){return a._id===e._id?t:a}));ne(a)}))},onCardDelete:function(e){$(e),J(!q)},onCardClick:function(e){W(e)},onEditProfile:function(){_(!p)},onAddPlace:function(){v(!g)},onEditAvatar:function(){T(!I)}}),Object(j.jsxs)(U.b,{path:"/sign-up",children:[Object(j.jsx)(P,{isOk:ue,isOpen:G,onClose:be}),Object(j.jsx)(h,{title:"\u0412\u043e\u0439\u0442\u0438",link:"/sign-in"}),Object(j.jsx)(E,{onRegister:function(e,t){(function(e,t){return console.log(JSON.stringify({password:e,email:t})),fetch("".concat(l,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(u)})(e,t).then((function(e){"Err"===e?(de(!1),z(!0)):(de(!0),z(!0),_e.push("/sign-in"))}))}})]}),Object(j.jsxs)(U.b,{path:"/sign-in",children:[Object(j.jsx)(P,{isOk:ue,isOpen:G,onClose:be}),Object(j.jsx)(h,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",link:"/sign-up"}),Object(j.jsx)(M,{onLogIn:function(e,t){(function(e,t){return console.log(JSON.stringify({password:e,email:t})),fetch("".concat(l,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(u)})(e,t).then((function(e){"Err"===e||(localStorage.setItem("jwt",e.token),ie(!0),_e.push("/profile"))}))}})]})]}),Object(j.jsx)(m,{})]})]})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d.a,{basename:"/mesto-react",children:Object(j.jsx)(R,{})})}),document.getElementById("root")),q()}},[[36,1,2]]]);
//# sourceMappingURL=main.eeb08c86.chunk.js.map