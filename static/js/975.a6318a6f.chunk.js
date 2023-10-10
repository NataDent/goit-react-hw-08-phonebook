"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[975],{4975:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var o=r(5705),t=r(824),a=r(9589),i=r(1917),l=r(9657),c=r(930),u=r(6336),s=r(2437),d=r(7653),m=r(8007),f=r(9434),h=r(3634),b=r(6916),x=function(n){return n.contacts.items},p=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},v=(0,b.P1)([x,function(n){return n.filter.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),g=r(184),C=m.Ry().shape({name:m.Z_().min(2,"Too short!").required("Required"),number:m.Z_().min(9,"Too Short!").max(10,"Too long!").required("The field cannot be empty").matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/,"Number must be in the format XXX-XX-XX")}),y=function(){var n=(0,f.v9)(x),e=(0,f.I0)();return(0,g.jsxs)(t.xu,{maxW:"50%",mx:"auto",children:[(0,g.jsx)(a.X,{fontSize:"3xl",color:"brand.600",textAlign:"center",mb:5,children:"Create A Contact"}),(0,g.jsx)(o.J9,{initialValues:{name:"",number:""},validationSchema:C,onSubmit:function(r,o){var t=n.find((function(n){return n.name===r.name})),a=n.find((function(n){return n.number===r.number}));t?alert("Such name  already exists"):a?alert("Such number already exists"):(e((0,h.uK)(r)),o.resetForm())},children:function(n){var e=n.handleSubmit,r=n.errors;return(0,g.jsx)("form",{onSubmit:e,children:(0,g.jsxs)(i.g,{autoComplete:"true",spacing:5,m:"auto",align:"flex-start",children:[(0,g.jsxs)(l.NI,{children:[(0,g.jsx)(c.l,{htmlFor:"name",color:"brand.900",children:"Name"}),(0,g.jsx)(o.gN,{as:u.I,id:"name",name:"name",placeholder:"Name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,g.jsx)(s.J1,{children:r.name})]}),(0,g.jsxs)(l.NI,{children:[(0,g.jsx)(c.l,{htmlFor:"phone",color:"brand.900",children:"Phone number"}),(0,g.jsx)(o.gN,{as:u.I,id:"number",name:"number",placeholder:"Phone: 123-45-67",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,g.jsx)(s.J1,{children:r.number})]}),(0,g.jsx)(d.z,{type:"submit",variant:"solid",bgColor:"brand.100",_hover:{bgColor:"brand.700",color:"#fff"},mx:"auto",color:"brand.900",children:"Add contact"})]})})}})]})},S=r(6661),_=r(2715),z=r(3771),I=r(1087),k=function(){var n=(0,f.I0)(),e=(0,f.v9)(v);return(0,g.jsxs)(S.QI,{display:"flex",flexDirection:"column",mt:5,px:10,children:[(0,g.jsx)(a.X,{fontSize:"3xl",color:"brand.600",textAlign:"center",mb:5,children:"Your Contacts"}),e.map((function(e){var r=e.id,o=e.name,t=e.number;return(0,g.jsxs)(S.HC,{display:"flex",justifyContent:"space-between",p:1,listStyle:"none",children:[(0,g.jsxs)(_.x,{fontSize:18,fontWeight:"bold",color:"brand.900",children:[o,": ",t]}),(0,g.jsxs)(z.h,{gap:"4",children:[(0,g.jsx)(d.z,{as:I.OL,variant:"solid",bgColor:"brand.100",color:"brand.900",_hover:{bgColor:"brand.700",color:"#fff"},type:"button",onClick:function(){return function(e){return n((0,h.Tk)(e))}(r)},children:"Edit"}),(0,g.jsx)(d.z,{variant:"solid",bgColor:"brand.100",color:"brand.900",_hover:{bgColor:"brand.700",color:"#fff"},type:"button",onClick:function(){return function(e){return n((0,h.GK)(e))}(r)},children:"Delete"})]})]},r)}))]})},X=r(4808),N=r(8410),w=function(){var n=(0,f.I0)();return(0,g.jsx)(N.W,{p:5,maxW:"50%",m:"auto",children:(0,g.jsx)(u.I,{placeholder:"Find contacts by name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600",type:"text",name:"find",onChange:function(e){return n((0,X.Tv)(e.target.value))}})})},F=r(2791),T=function(){var n=(0,f.v9)(x),e=(0,f.v9)(p),r=(0,f.v9)(j),o=(0,f.I0)();return(0,F.useEffect)((function(){o((0,h.yF)())}),[o]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{}),(0,g.jsx)(w,{}),e&&!r&&(0,g.jsx)("p",{fontSize:20,children:"Request in progress..."}),n?(0,g.jsx)(k,{}):(0,g.jsx)("p",{fontSize:20,children:"No contacts"})]})}}}]);
//# sourceMappingURL=975.a6318a6f.chunk.js.map