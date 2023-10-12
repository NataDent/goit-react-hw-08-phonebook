"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[384],{3384:function(e,n,r){r.r(n),r.d(n,{default:function(){return J}});var o=r(9439),t=r(5705),a=r(824),l=r(9589),i=r(1917),c=r(9657),s=r(930),u=r(6336),d=r(7653),m=r(8007),h=r(9434),b=r(3634),f=r(6916),x=function(e){return e.contacts.items},j=function(e){return e.contacts.isLoading},p=function(e){return e.contacts.error},v=(0,f.P1)([x,function(e){return e.filter.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),g=r(1087),C=r(184),S=m.Ry().shape({name:m.Z_().min(2,"Too short!").required("Required"),number:m.Z_().min(9,"Too Short!").max(10,"Too long!").required("The field cannot be empty").matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/,"Number must be in the format XXX-XX-XX")}),y=function(){var e=(0,h.v9)(x),n=(0,h.I0)();return(0,C.jsxs)(a.xu,{maxW:"50%",mx:"auto",p:5,children:[(0,C.jsx)(l.X,{fontSize:"3xl",color:"brand.600",textAlign:"center",mb:5,children:"Create A Contact"}),(0,C.jsx)(t.J9,{initialValues:{name:"",number:""},validationSchema:S,onSubmit:function(r,o){var t=e.find((function(e){return e.name===r.name})),a=e.find((function(e){return e.number===r.number}));t?alert("Such name  already exists"):a?alert("Such number already exists"):(n((0,b.uK)(r)),o.resetForm())},children:function(e){var n=e.handleSubmit;return(0,C.jsx)(g.l0,{onSubmit:n,children:(0,C.jsxs)(i.g,{autoComplete:"true",spacing:5,m:"auto",align:"flex-start",children:[(0,C.jsxs)(c.NI,{children:[(0,C.jsx)(s.l,{htmlFor:"name",color:"brand.900",children:"Name"}),(0,C.jsx)(t.gN,{as:u.I,id:"name",name:"name",placeholder:"Name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,C.jsx)(t.Bc,{component:"div",name:"name"})]}),(0,C.jsxs)(c.NI,{children:[(0,C.jsx)(s.l,{htmlFor:"phone",color:"brand.900",children:"Phone number"}),(0,C.jsx)(t.gN,{as:u.I,id:"number",name:"number",placeholder:"Phone: 123-45-67",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,C.jsx)(t.Bc,{component:"div",name:"name"})]}),(0,C.jsx)(d.z,{type:"submit",variant:"solid",bgColor:"brand.100",_hover:{bgColor:"brand.700",color:"#fff"},mx:"auto",color:"brand.900",children:"Add contact"})]})})}})]})},_=r(1022),z=r(6661),X=r(2715),I=r(3771),N=function(){var e=(0,_.q)(),n=e.isOpen,r=e.onOpen,o=(0,h.I0)(),t=(0,h.v9)(v);return(0,C.jsxs)(z.QI,{display:"flex",flexDirection:"column",mt:5,px:5,maxW:"50%",mx:"auto",children:[(0,C.jsx)(l.X,{fontSize:"3xl",color:"brand.600",textAlign:"center",mb:5,children:"Your Contacts"}),t.map((function(e){var t=e.id,a=e.name,l=e.number;return(0,C.jsxs)(z.HC,{display:"flex",justifyContent:"space-between",p:1,listStyle:"none",onClick:n,children:[(0,C.jsxs)(X.x,{fontSize:18,fontWeight:"bold",color:"brand.900",children:[a,": ",l]}),(0,C.jsxs)(I.h,{gap:1,children:[(0,C.jsx)(d.z,{variant:"solid",bgColor:"brand.100",color:"brand.900",_hover:{bgColor:"brand.700",color:"#fff"},type:"button",onClick:r,children:"Edit"}),(0,C.jsx)(d.z,{variant:"solid",bgColor:"brand.100",color:"brand.900",_hover:{bgColor:"brand.700",color:"#fff"},type:"button",onClick:function(){return function(e){return o((0,b.GK)(e))}(t)},children:"Delete"})]})]},t)}))]})},k=r(4808),F=r(8410),q=function(){var e=(0,h.I0)();return(0,C.jsx)(F.W,{p:5,maxW:"50%",m:"auto",children:(0,C.jsx)(u.I,{placeholder:"Find contacts by name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600",type:"text",name:"find",onChange:function(n){return e((0,k.Tv)(n.target.value))}})})},T=r(990),B=r(8874),R=r(4605),w=r(5473),P=r(634),Z=r(6241),A=r(7685),W=r(2791),O=r(4164),L=document.querySelector("#modal-root"),D=m.Ry().shape({name:m.Z_().min(2,"Too short!").required("Required"),number:m.Z_().min(9,"Too Short!").max(10,"Too long!").required("The field cannot be empty").matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/,"Number must be in the format XXX-XX-XX")}),E=function(){var e=(0,_.q)(),n=e.isOpen,r=e.onClose,o=(0,h.v9)(x),a=(0,h.I0)(),l=W.useRef(null),m=W.useRef(null);return(0,O.createPortal)((0,C.jsxs)(T.u_,{initialFocusRef:l,finalFocusRef:m,isOpen:n,onClose:r,children:[(0,C.jsx)(B.Z,{}),(0,C.jsxs)(R.h,{children:[(0,C.jsx)(w.x,{children:"Update your contact"}),(0,C.jsx)(P.o,{}),(0,C.jsx)(Z.f,{pb:6,children:(0,C.jsx)(t.J9,{initialValues:{name:"",number:""},validationSchema:D,onSubmit:function(e,n){var r=o.find((function(n){return n.name===e.name})),t=o.find((function(n){return n.number===e.number}));r?alert("Such name  already exists"):t?alert("Such number already exists"):(a((0,b.Tk)(e)),n.resetForm())},children:function(e){var n=e.handleSubmit;return(0,C.jsx)(g.l0,{onSubmit:n,children:(0,C.jsxs)(i.g,{autoComplete:"true",spacing:5,m:"auto",align:"flex-start",children:[(0,C.jsxs)(c.NI,{children:[(0,C.jsx)(s.l,{htmlFor:"name",color:"brand.900",children:"Name"}),(0,C.jsx)(t.gN,{as:u.I,id:"name",name:"name",placeholder:"Name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,C.jsx)(t.Bc,{component:"div",name:"name"})]}),(0,C.jsxs)(c.NI,{children:[(0,C.jsx)(s.l,{htmlFor:"phone",color:"brand.900",children:"Phone number"}),(0,C.jsx)(t.gN,{as:u.I,id:"number",name:"number",placeholder:"Phone: 123-45-67",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,C.jsx)(t.Bc,{component:"div",name:"name"})]}),(0,C.jsx)(d.z,{type:"submit",variant:"solid",bgColor:"brand.100",_hover:{bgColor:"brand.700",color:"#fff"},mx:"auto",color:"brand.900",children:"Add contact"})]})})}})}),(0,C.jsxs)(A.m,{children:[(0,C.jsx)(d.z,{type:"submit",variant:"solid",bgColor:"brand.100",_hover:{bgColor:"brand.700",color:"#fff"},mx:"auto",color:"brand.900",mr:3,children:"Save"}),(0,C.jsx)(d.z,{onClick:r,children:"Cancel"})]})]})]}),L)},J=function(){var e=(0,h.v9)(x),n=(0,h.v9)(j),r=(0,h.v9)(p),t=(0,h.I0)(),a=(0,W.useState)(!1),l=(0,o.Z)(a,2),i=l[0],c=l[1];(0,W.useEffect)((function(){t((0,b.yF)())}),[t]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y,{}),(0,C.jsx)(q,{}),n&&!r&&(0,C.jsx)("b",{fontSize:20,color:"brand.900",children:"Request in progress..."}),e?(0,C.jsx)(N,{}):(0,C.jsx)("b",{fontSize:20,color:"brand.900",children:"No contacts"}),i&&(0,C.jsx)(E,{onClose:function(){c(i===!i)}})]})}}}]);
//# sourceMappingURL=384.3201c663.chunk.js.map