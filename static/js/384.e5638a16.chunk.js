"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[384],{3384:function(n,e,r){r.r(e),r.d(e,{default:function(){return J}});var o=r(5705),t=r(824),a=r(9589),l=r(1917),i=r(9657),c=r(930),s=r(6336),d=r(7653),u=r(8007),m=r(9434),h=r(3634),b=r(6916),f=function(n){return n.contacts.items},x=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},p=(0,b.P1)([f,function(n){return n.filter.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=r(184),C=u.Ry().shape({name:u.Z_().min(2,"Too short!").required("Required"),number:u.Z_().min(9,"Too Short!").max(10,"Too long!").required("The field cannot be empty").matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/,"Number must be in the format XXX-XX-XX")}),g=function(){var n=(0,m.v9)(f),e=(0,m.I0)();return(0,v.jsxs)(t.xu,{maxW:"50%",mx:"auto",p:5,children:[(0,v.jsx)(a.X,{fontSize:"3xl",color:"brand.600",textAlign:"center",mb:5,children:"Create A Contact"}),(0,v.jsx)(o.J9,{initialValues:{name:"",number:""},validationSchema:C,onSubmit:function(r,o){var t=n.find((function(n){return n.name===r.name})),a=n.find((function(n){return n.number===r.number}));t?alert("Such name  already exists"):a?alert("Such number already exists"):(e((0,h.uK)(r)),o.resetForm())},children:function(){return(0,v.jsx)(o.l0,{children:(0,v.jsxs)(l.g,{autoComplete:"true",spacing:5,m:"auto",align:"flex-start",children:[(0,v.jsxs)(i.NI,{children:[(0,v.jsx)(c.l,{htmlFor:"name",color:"brand.900",children:"Name"}),(0,v.jsx)(o.gN,{as:s.I,id:"name",name:"name",placeholder:"Name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,v.jsx)(o.Bc,{component:"div",name:"name"})]}),(0,v.jsxs)(i.NI,{children:[(0,v.jsx)(c.l,{htmlFor:"phone",color:"brand.900",children:"Phone number"}),(0,v.jsx)(o.gN,{as:s.I,id:"number",name:"number",placeholder:"Phone: 123-45-67",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,v.jsx)(o.Bc,{component:"div",name:"name"})]}),(0,v.jsx)(d.z,{type:"submit",variant:"solid",bgColor:"brand.100",_hover:{bgColor:"brand.700",color:"#fff"},mx:"auto",color:"brand.900",children:"Add contact"})]})})}})]})},y=r(1022),_=r(6661),X=r(2715),z=r(6762),I=r(1413),N=r(990),S=r(8874),k=r(4605),F=r(5473),T=r(634),q=r(6241),B=r(7685),R=r(3771),w=r(2791),Z=r(4164),P=document.querySelector("#modal-root"),O=u.Ry().shape({name:u.Z_().min(2,"Too short!").required("Required"),number:u.Z_().min(9,"Too Short!").max(10,"Too long!").required("The field cannot be empty").matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/,"Number must be in the format XXX-XX-XX")}),W=function(n){var e=n.isOpen,r=n.name,t=n.number,a=n.onClose,u=n.id,b=(0,m.I0)(),f=w.useRef(null),x=w.useRef(null);return(0,Z.createPortal)((0,v.jsxs)(N.u_,{initialFocusRef:f,finalFocusRef:x,isOpen:e,onClose:a,children:[(0,v.jsx)(S.Z,{}),(0,v.jsxs)(k.h,{children:[(0,v.jsx)(F.x,{children:"Update your contact"}),(0,v.jsx)(T.o,{}),(0,v.jsx)(q.f,{pb:6,children:(0,v.jsx)(o.J9,{initialValues:{name:r,number:t},validationSchema:O,onSubmit:function(n,e){b((0,h.Tk)((0,I.Z)((0,I.Z)({},n),{},{id:u})).then((function(){a()}))),e.resetForm()},children:function(){return(0,v.jsx)(o.l0,{children:(0,v.jsxs)(l.g,{autoComplete:"true",spacing:5,m:"auto",align:"flex-start",children:[(0,v.jsxs)(i.NI,{children:[(0,v.jsx)(c.l,{htmlFor:"name",color:"brand.900",children:"Name"}),(0,v.jsx)(o.gN,{as:s.I,id:"name",name:"name",placeholder:"Name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,v.jsx)(o.Bc,{component:"div",name:"name"})]}),(0,v.jsxs)(i.NI,{children:[(0,v.jsx)(c.l,{htmlFor:"phone",color:"brand.900",children:"Phone number"}),(0,v.jsx)(o.gN,{as:s.I,id:"number",name:"number",placeholder:"Phone: 123-45-67",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,v.jsx)(o.Bc,{component:"div",name:"name"})]})]})})}})}),(0,v.jsx)(B.m,{children:(0,v.jsxs)(R.h,{display:"flex",children:[(0,v.jsx)(d.z,{onClose:function(){a()},type:"submit",variant:"solid",bgColor:"brand.100",_hover:{bgColor:"brand.700",color:"#fff"},mx:"auto",color:"brand.900",mr:3,children:"Save"}),(0,v.jsx)(d.z,{onClick:function(){a()},variant:"solid",bgColor:"brand.100",_hover:{bgColor:"brand.700",color:"#fff"},mx:"auto",color:"brand.900",mr:3,children:"Cancel"})]})})]})]}),P)},A=function(){var n=(0,y.q)(),e=n.isOpen,r=n.onOpen,o=n.onClose,t=(0,m.I0)(),l=(0,m.v9)(p);return(0,v.jsxs)(_.QI,{display:"flex",flexDirection:"column",mt:5,px:5,maxW:"50%",mx:"auto",children:[(0,v.jsx)(a.X,{fontSize:"3xl",color:"brand.600",textAlign:"center",mb:5,children:"Your Contacts"}),l.map((function(n){var a=n.id,l=n.name,i=n.number;return(0,v.jsxs)(_.HC,{display:"flex",justifyContent:"space-between",p:1,onClick:r,children:[(0,v.jsxs)(X.x,{fontSize:18,fontWeight:"bold",color:"brand.900",children:[l,": ",i]}),(0,v.jsxs)(z.U,{gap:1,children:[(0,v.jsx)(d.z,{variant:"solid",bgColor:"brand.100",color:"brand.900",_hover:{bgColor:"brand.700",color:"#fff"},type:"button",onClick:e,children:"Edit"}),(0,v.jsx)(d.z,{variant:"solid",bgColor:"brand.100",color:"brand.900",_hover:{bgColor:"brand.700",color:"#fff"},type:"button",onClick:function(){return function(n){return t((0,h.GK)(n))}(a)},children:"Delete"})]}),e&&(0,v.jsx)(W,{isOpen:e,name:l,number:i,onClose:o,id:a})]},a)}))]})},L=r(4808),D=r(8410),E=function(){var n=(0,m.I0)();return(0,v.jsx)(D.W,{p:5,maxW:"50%",m:"auto",children:(0,v.jsx)(s.I,{placeholder:"Find contacts by name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600",type:"text",name:"find",onChange:function(e){return n((0,L.Tv)(e.target.value))}})})},J=function(){var n=(0,m.v9)(f),e=(0,m.v9)(x),r=(0,m.v9)(j),o=(0,m.I0)();return(0,w.useEffect)((function(){o((0,h.yF)())}),[o]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{}),(0,v.jsx)(E,{}),e&&!r&&(0,v.jsx)("b",{fontSize:20,color:"brand.900",children:"Request in progress..."}),n?(0,v.jsx)(A,{}):(0,v.jsx)("b",{fontSize:20,color:"brand.900",children:"No contacts"})]})}}}]);
//# sourceMappingURL=384.e5638a16.chunk.js.map