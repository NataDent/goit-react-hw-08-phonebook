"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[758],{6758:function(r,e,n){n.r(e),n.d(e,{default:function(){return w}});var o=n(5705),a=n(824),t=n(9589),i=n(1917),l=n(9657),s=n(930),u=n(6336),c=n(1413),m=n(9439),d=n(9640),f=n(9886),h=n(5597),x=n(6516),b=n(2996),v=n(5113),p=n(6992),j=n(184),g=(0,f.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),_=(0,m.Z)(g,2),N=_[0],k=_[1],C=(0,h.G)((function(r,e){var n=(0,x.jC)("FormError",r),o=(0,b.Lr)(r),a=(0,l.NJ)();return(null==a?void 0:a.isInvalid)?(0,j.jsx)(N,{value:n,children:(0,j.jsx)(v.m.div,(0,c.Z)((0,c.Z)({},null==a?void 0:a.getErrorMessageProps(o,e)),{},{className:(0,p.cx)("chakra-form__error-message",r.className),__css:(0,c.Z)({display:"flex",alignItems:"center"},n.text)}))}):null}));C.displayName="FormErrorMessage",(0,h.G)((function(r,e){var n=k(),o=(0,l.NJ)();if(!(null==o?void 0:o.isInvalid))return null;var a=(0,p.cx)("chakra-form__error-icon",r.className);return(0,j.jsx)(d.J,(0,c.Z)((0,c.Z)({ref:e,"aria-hidden":!0},r),{},{__css:n.icon,className:a,children:(0,j.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon";var y=n(7653),I=n(8007),S=n(9434),Z=n(2946),F=n(3634),T=I.Ry().shape({name:I.Z_().min(2,"Too short!").required("Required"),number:I.Z_().min(9,"Too Short!").max(10,"Too long!").required("The field cannot be empty").matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/,"Number must be in the format XXX-XX-XX")}),E=function(){var r=(0,S.v9)(Z.Af),e=(0,S.I0)();return(0,j.jsxs)(a.xu,{maxW:"50%",mx:"auto",children:[(0,j.jsx)(t.X,{fontSize:"3xl",color:"brand.600",textAlign:"center",mb:5,children:"Update The Contact"}),(0,j.jsx)(o.J9,{initialValues:{name:F.Tk.name,number:F.Tk.number},validationSchema:T,onSubmit:function(n,o){var a=r.find((function(r){return r.name===n.name})),t=r.find((function(r){return r.number===n.number}));a?alert("Such name  already exists"):t?alert("Such number already exists"):(e((0,F.Tk)(n)),o.resetForm())},children:function(r){var e=r.handleSubmit,n=r.errors;return(0,j.jsx)("form",{onSubmit:e,children:(0,j.jsxs)(i.g,{autoComplete:"true",spacing:5,m:"auto",align:"flex-start",children:[(0,j.jsxs)(l.NI,{children:[(0,j.jsx)(s.l,{htmlFor:"name",color:"brand.900",children:"Name"}),(0,j.jsx)(o.gN,{as:u.I,id:"name",name:"name",placeholder:"Name:",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,j.jsx)(C,{children:n.name})]}),(0,j.jsxs)(l.NI,{children:[(0,j.jsx)(s.l,{htmlFor:"phone",color:"brand.900",children:"Phone number"}),(0,j.jsx)(o.gN,{as:u.I,id:"number",name:"number",placeholder:"Phone: 123-45-67",_placeholder:{color:"brand.300"},size:"lg",variant:"outline",focusBorderColor:"brand.600"}),(0,j.jsx)(C,{children:n.number})]}),(0,j.jsx)(y.z,{type:"submit",variant:"solid",bgColor:"brand.100",_hover:{bgColor:"brand.700",color:"#fff"},mx:"auto",color:"brand.900",children:"Update"})]})})}})]})},X=n(2791),w=function(){var r=(0,S.I0)();return(0,X.useEffect)((function(e){r((0,F.Tk)(e))}),[r]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(E,{})})}},2946:function(r,e,n){n.d(e,{Af:function(){return a},DI:function(){return l},xU:function(){return t},zh:function(){return i}});var o=n(6916),a=function(r){return r.contacts.items},t=function(r){return r.contacts.isLoading},i=function(r){return r.contacts.error},l=(0,o.P1)([a,function(r){return r.filter.filter}],(function(r,e){return r.filter((function(r){return r.name.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=758.10977f28.chunk.js.map