import{f as A,E as _,aj as z,G as K,n as l,r as G,N as U,o as m,A as W,j as H,ak as J,al as D,am as R,a0 as X,Q as Y}from"./index.6def9867.js";function S(e,h){return[!0,!1].includes(e)?e:h}var p=A({name:"QPagination",props:{..._,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||z.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:h}){const{proxy:k}=H(),{$q:s}=k,w=K(e,s),u=l(()=>parseInt(e.min,10)),n=l(()=>parseInt(e.max,10)),B=l(()=>parseInt(e.maxPages,10)),C=l(()=>d.value+" / "+n.value),E=l(()=>S(e.boundaryLinks,e.input)),c=l(()=>S(e.boundaryNumbers,!e.input)),M=l(()=>S(e.directionLinks,e.input)),x=l(()=>S(e.ellipses,!e.input)),f=G(null),d=l({get:()=>e.modelValue,set:t=>{if(t=parseInt(t,10),e.disable||isNaN(t))return;const a=J(t,u.value,n.value);e.modelValue!==a&&h("update:modelValue",a)}});U(()=>`${u.value}|${n.value}`,()=>{d.value=e.modelValue});const $=l(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),P=l(()=>e.gutter in D?`${D[e.gutter]}px`:e.gutter||null),j=l(()=>P.value!==null?`--q-pagination-gutter-parent:-${P.value};--q-pagination-gutter-child:${P.value}`:null),y=l(()=>{const t=[e.iconFirst||s.iconSet.pagination.first,e.iconPrev||s.iconSet.pagination.prev,e.iconNext||s.iconSet.pagination.next,e.iconLast||s.iconSet.pagination.last];return s.lang.rtl===!0?t.reverse():t}),q=l(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),V=l(()=>R(e,"flat")),L=l(()=>({[V.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),T=l(()=>{const t={[V.value]:!1};return e.activeDesign!==""&&(t[e.activeDesign]=!0),t}),I=l(()=>({...T.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),v=l(()=>{let t=Math.max(B.value,1+(x.value?2:0)+(c.value?2:0));const a={pgFrom:u.value,pgTo:n.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(n.value).length)}em`}};return B.value&&t<n.value-u.value+1&&(t=1+Math.floor(t/2)*2,a.pgFrom=Math.max(u.value,Math.min(n.value-t+1,e.modelValue-Math.floor(t/2))),a.pgTo=Math.min(n.value,a.pgFrom+t-1),c.value&&(a.boundaryStart=!0,a.pgFrom++),x.value&&a.pgFrom>u.value+(c.value?1:0)&&(a.ellipsesStart=!0,a.pgFrom++),c.value&&(a.boundaryEnd=!0,a.pgTo--),x.value&&a.pgTo<n.value-(c.value?1:0)&&(a.ellipsesEnd=!0,a.pgTo--)),a});function F(t){d.value=t}function O(t){d.value=d.value+t}const Q=l(()=>{function t(){d.value=f.value,f.value=null}return{"onUpdate:modelValue":a=>{f.value=a},onKeyup:a=>{X(a,13)===!0&&t()},onBlur:t}});function o(t,a,g){const r={"aria-label":a,"aria-current":"false",...L.value,...t};return g===!0&&Object.assign(r,{"aria-current":"true",...I.value}),a!==void 0&&(e.toFn!==void 0?r.to=e.toFn(a):r.onClick=()=>{F(a)}),m(Y,r)}return Object.assign(k,{set:F,setByOffset:O}),()=>{const t=[],a=[];let g;if(E.value===!0&&(t.push(o({key:"bls",disable:e.disable||e.modelValue<=u.value,icon:y.value[0]},u.value)),a.unshift(o({key:"ble",disable:e.disable||e.modelValue>=n.value,icon:y.value[3]},n.value))),M.value===!0&&(t.push(o({key:"bdp",disable:e.disable||e.modelValue<=u.value,icon:y.value[1]},e.modelValue-1)),a.unshift(o({key:"bdn",disable:e.disable||e.modelValue>=n.value,icon:y.value[2]},e.modelValue+1))),e.input!==!0){g=[];const{pgFrom:r,pgTo:N,marginalStyle:b}=v.value;if(v.value.boundaryStart===!0){const i=u.value===e.modelValue;t.push(o({key:"bns",style:b,disable:e.disable,label:u.value},u.value,i))}if(v.value.boundaryEnd===!0){const i=n.value===e.modelValue;a.unshift(o({key:"bne",style:b,disable:e.disable,label:n.value},n.value,i))}v.value.ellipsesStart===!0&&t.push(o({key:"bes",style:b,disable:e.disable,label:"\u2026",ripple:!1},r-1)),v.value.ellipsesEnd===!0&&a.unshift(o({key:"bee",style:b,disable:e.disable,label:"\u2026",ripple:!1},N+1));for(let i=r;i<=N;i++)g.push(o({key:`bpg${i}`,style:b,disable:e.disable,label:i},i,i===e.modelValue))}return m("div",{class:$.value,...q.value},[m("div",{class:"q-pagination__content row no-wrap items-center",style:j.value},[...t,e.input===!0?m(W,{class:"inline",style:{width:`${C.value.length/1.5}em`},type:"number",dense:!0,value:f.value,disable:e.disable,dark:w.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:C.value,min:u.value,max:n.value,...Q.value}):m("div",{class:"q-pagination__middle row justify-center"},g),...a])])}}});export{p as Q};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVBhZ2luYXRpb24uMjc4ZThjOGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9RUGFnaW5hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIHdhdGNoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcbmltcG9ydCBRSW5wdXQgZnJvbSAnLi4vaW5wdXQvUUlucHV0LmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1kYXJrL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgYnRuRGVzaWduT3B0aW9ucywgYnRuUGFkZGluZywgZ2V0QnRuRGVzaWduIH0gZnJvbSAnLi4vYnRuL3VzZS1idG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5rZXlib2FyZC9rZXktY29tcG9zaXRpb24uanMnXG5cbmZ1bmN0aW9uIGdldEJvb2wgKHZhbCwgb3RoZXJ3aXNlKSB7XG4gIHJldHVybiBbIHRydWUsIGZhbHNlIF0uaW5jbHVkZXModmFsKVxuICAgID8gdmFsXG4gICAgOiBvdGhlcndpc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdpbmF0aW9uJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtaW46IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIGRlZmF1bHQ6IDFcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1heFBhZ2VzOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IChcbiAgICAgICAgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHYsIDEwKSA6IHYpID49IDBcbiAgICAgIClcbiAgICB9LFxuXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBpbnB1dENsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgc2l6ZTogU3RyaW5nLFxuXG4gICAgZGlzYWJsZTogQm9vbGVhbixcblxuICAgIGlucHV0OiBCb29sZWFuLFxuXG4gICAgaWNvblByZXY6IFN0cmluZyxcbiAgICBpY29uTmV4dDogU3RyaW5nLFxuICAgIGljb25GaXJzdDogU3RyaW5nLFxuICAgIGljb25MYXN0OiBTdHJpbmcsXG5cbiAgICB0b0ZuOiBGdW5jdGlvbixcblxuICAgIGJvdW5kYXJ5TGlua3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBib3VuZGFyeU51bWJlcnM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBkaXJlY3Rpb25MaW5rczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGVsbGlwc2VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHJvdW5kOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBwdXNoOiBCb29sZWFuLFxuICAgIGdsb3NzeTogQm9vbGVhbixcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeSdcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgYWN0aXZlRGVzaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIHZhbHVlczogdiA9PiB2ID09PSAnJyB8fCBidG5EZXNpZ25PcHRpb25zLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZVRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgZ3V0dGVyOiBTdHJpbmcsXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzNweCAycHgnXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgICBjb25zdCBtaW5Qcm9wID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMubWluLCAxMCkpXG4gICAgY29uc3QgbWF4UHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heCwgMTApKVxuICAgIGNvbnN0IG1heFBhZ2VzUHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heFBhZ2VzLCAxMCkpXG5cbiAgICBjb25zdCBpbnB1dFBsYWNlaG9sZGVyID0gY29tcHV0ZWQoKCkgPT4gbW9kZWwudmFsdWUgKyAnIC8gJyArIG1heFByb3AudmFsdWUpXG4gICAgY29uc3QgYm91bmRhcnlMaW5rc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCb29sKHByb3BzLmJvdW5kYXJ5TGlua3MsIHByb3BzLmlucHV0KSlcbiAgICBjb25zdCBib3VuZGFyeU51bWJlcnNQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5ib3VuZGFyeU51bWJlcnMsICFwcm9wcy5pbnB1dCkpXG4gICAgY29uc3QgZGlyZWN0aW9uTGlua3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5kaXJlY3Rpb25MaW5rcywgcHJvcHMuaW5wdXQpKVxuICAgIGNvbnN0IGVsbGlwc2VzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuZWxsaXBzZXMsICFwcm9wcy5pbnB1dCkpXG5cbiAgICBjb25zdCBuZXdQYWdlID0gcmVmKG51bGwpXG4gICAgY29uc3QgbW9kZWwgPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IHByb3BzLm1vZGVsVmFsdWUsXG4gICAgICBzZXQ6IHZhbCA9PiB7XG4gICAgICAgIHZhbCA9IHBhcnNlSW50KHZhbCwgMTApXG4gICAgICAgIGlmIChwcm9wcy5kaXNhYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGJldHdlZW4odmFsLCBtaW5Qcm9wLnZhbHVlLCBtYXhQcm9wLnZhbHVlKVxuICAgICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IGAkeyBtaW5Qcm9wLnZhbHVlIH18JHsgbWF4UHJvcC52YWx1ZSB9YCwgKCkgPT4ge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtcGFnaW5hdGlvbiByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBndXR0ZXJQcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZ3V0dGVyIGluIGJ0blBhZGRpbmdcbiAgICAgICAgPyBgJHsgYnRuUGFkZGluZ1sgcHJvcHMuZ3V0dGVyIF0gfXB4YFxuICAgICAgICA6IHByb3BzLmd1dHRlciB8fCBudWxsXG4gICAgKSlcbiAgICBjb25zdCBndXR0ZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGd1dHRlclByb3AudmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBgLS1xLXBhZ2luYXRpb24tZ3V0dGVyLXBhcmVudDotJHsgZ3V0dGVyUHJvcC52YWx1ZSB9Oy0tcS1wYWdpbmF0aW9uLWd1dHRlci1jaGlsZDokeyBndXR0ZXJQcm9wLnZhbHVlIH1gXG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCBpY29ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMuaWNvbkZpcnN0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5maXJzdCxcbiAgICAgICAgcHJvcHMuaWNvblByZXYgfHwgJHEuaWNvblNldC5wYWdpbmF0aW9uLnByZXYsXG4gICAgICAgIHByb3BzLmljb25OZXh0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5uZXh0LFxuICAgICAgICBwcm9wcy5pY29uTGFzdCB8fCAkcS5pY29uU2V0LnBhZ2luYXRpb24ubGFzdFxuICAgICAgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gaWNvLnJldmVyc2UoKSA6IGljb1xuICAgIH0pXG5cbiAgICBjb25zdCBhdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgcm9sZTogJ25hdmlnYXRpb24nXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5EZXNpZ25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduKHByb3BzLCAnZmxhdCcpKVxuICAgIGNvbnN0IGJ0blByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIFsgYnRuRGVzaWduUHJvcC52YWx1ZSBdOiB0cnVlLFxuXG4gICAgICByb3VuZDogcHJvcHMucm91bmQsXG4gICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuXG4gICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxuXG4gICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICB0ZXh0Q29sb3I6IHByb3BzLnRleHRDb2xvcixcblxuICAgICAgc2l6ZTogcHJvcHMuc2l6ZSxcbiAgICAgIHJpcHBsZTogcHJvcHMucmlwcGxlICE9PSBudWxsXG4gICAgICAgID8gcHJvcHMucmlwcGxlXG4gICAgICAgIDogdHJ1ZVxuICAgIH0pKVxuXG4gICAgY29uc3QgYnRuQWN0aXZlRGVzaWduUHJvcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIHdlIGFsc28gcmVzZXQgbm9uLWFjdGl2ZSBkZXNpZ25cbiAgICAgIGNvbnN0IGFjYyA9IHsgWyBidG5EZXNpZ25Qcm9wLnZhbHVlIF06IGZhbHNlIH1cbiAgICAgIGlmIChwcm9wcy5hY3RpdmVEZXNpZ24gIT09ICcnKSB7XG4gICAgICAgIGFjY1sgcHJvcHMuYWN0aXZlRGVzaWduIF0gPSB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcbiAgICBjb25zdCBhY3RpdmVCdG5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5idG5BY3RpdmVEZXNpZ25Qcm9wLnZhbHVlLFxuICAgICAgY29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yIHx8IHByb3BzLmNvbG9yLFxuICAgICAgdGV4dENvbG9yOiBwcm9wcy5hY3RpdmVUZXh0Q29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5Db25maWcgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgbWF4UGFnZXMgPSBNYXRoLm1heChcbiAgICAgICAgbWF4UGFnZXNQcm9wLnZhbHVlLFxuICAgICAgICAxICsgKGVsbGlwc2VzUHJvcC52YWx1ZSA/IDIgOiAwKSArIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlID8gMiA6IDApXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgcGdGcm9tOiBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICBwZ1RvOiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICBlbGxpcHNlc1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgZWxsaXBzZXNFbmQ6IGZhbHNlLFxuICAgICAgICBib3VuZGFyeVN0YXJ0OiBmYWxzZSxcbiAgICAgICAgYm91bmRhcnlFbmQ6IGZhbHNlLFxuICAgICAgICBtYXJnaW5hbFN0eWxlOiB7XG4gICAgICAgICAgbWluV2lkdGg6IGAkeyBNYXRoLm1heCgyLCBTdHJpbmcobWF4UHJvcC52YWx1ZSkubGVuZ3RoKSB9ZW1gXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heFBhZ2VzUHJvcC52YWx1ZSAmJiBtYXhQYWdlcyA8IChtYXhQcm9wLnZhbHVlIC0gbWluUHJvcC52YWx1ZSArIDEpKSB7XG4gICAgICAgIG1heFBhZ2VzID0gMSArIE1hdGguZmxvb3IobWF4UGFnZXMgLyAyKSAqIDJcbiAgICAgICAgYWNjLnBnRnJvbSA9IE1hdGgubWF4KG1pblByb3AudmFsdWUsIE1hdGgubWluKG1heFByb3AudmFsdWUgLSBtYXhQYWdlcyArIDEsIHByb3BzLm1vZGVsVmFsdWUgLSBNYXRoLmZsb29yKG1heFBhZ2VzIC8gMikpKVxuICAgICAgICBhY2MucGdUbyA9IE1hdGgubWluKG1heFByb3AudmFsdWUsIGFjYy5wZ0Zyb20gKyBtYXhQYWdlcyAtIDEpXG5cbiAgICAgICAgaWYgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUpIHtcbiAgICAgICAgICBhY2MuYm91bmRhcnlTdGFydCA9IHRydWVcbiAgICAgICAgICBhY2MucGdGcm9tKytcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGxpcHNlc1Byb3AudmFsdWUgJiYgYWNjLnBnRnJvbSA+IChtaW5Qcm9wLnZhbHVlICsgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUgPyAxIDogMCkpKSB7XG4gICAgICAgICAgYWNjLmVsbGlwc2VzU3RhcnQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnRnJvbSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSkge1xuICAgICAgICAgIGFjYy5ib3VuZGFyeUVuZCA9IHRydWVcbiAgICAgICAgICBhY2MucGdUby0tXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxsaXBzZXNQcm9wLnZhbHVlICYmIGFjYy5wZ1RvIDwgKG1heFByb3AudmFsdWUgLSAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSA/IDEgOiAwKSkpIHtcbiAgICAgICAgICBhY2MuZWxsaXBzZXNFbmQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnVG8tLVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0ICh2YWx1ZSkge1xuICAgICAgbW9kZWwudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEJ5T2Zmc2V0IChvZmZzZXQpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gbW9kZWwudmFsdWUgKyBvZmZzZXRcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dEV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICgpIHtcbiAgICAgICAgbW9kZWwudmFsdWUgPSBuZXdQYWdlLnZhbHVlXG4gICAgICAgIG5ld1BhZ2UudmFsdWUgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsID0+IHsgbmV3UGFnZS52YWx1ZSA9IHZhbCB9LFxuICAgICAgICBvbktleXVwOiBlID0+IHsgaXNLZXlDb2RlKGUsIDEzKSA9PT0gdHJ1ZSAmJiB1cGRhdGVNb2RlbCgpIH0sXG4gICAgICAgIG9uQmx1cjogdXBkYXRlTW9kZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0QnRuIChjZmcsIHBhZ2UsIGFjdGl2ZSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwYWdlLFxuICAgICAgICAnYXJpYS1jdXJyZW50JzogJ2ZhbHNlJyxcbiAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmNmZ1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICdhcmlhLWN1cnJlbnQnOiAndHJ1ZScsXG4gICAgICAgICAgLi4uYWN0aXZlQnRuUHJvcHMudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAocHJvcHMudG9GbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGF0YS50byA9IHByb3BzLnRvRm4ocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSAoKSA9PiB7IHNldChwYWdlKSB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0biwgZGF0YSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHNldCwgc2V0QnlPZmZzZXQgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50U3RhcnQgPSBbXVxuICAgICAgY29uc3QgY29udGVudEVuZCA9IFtdXG4gICAgICBsZXQgY29udGVudE1pZGRsZVxuXG4gICAgICBpZiAoYm91bmRhcnlMaW5rc1Byb3AudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JscycsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPD0gbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAwIF1cbiAgICAgICAgICB9LCBtaW5Qcm9wLnZhbHVlKVxuICAgICAgICApXG5cbiAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdibGUnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlID49IG1heFByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMyBdXG4gICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uTGlua3NQcm9wLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdiZHAnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlIDw9IG1pblByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMSBdXG4gICAgICAgICAgfSwgcHJvcHMubW9kZWxWYWx1ZSAtIDEpXG4gICAgICAgIClcblxuICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JkbicsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPj0gbWF4UHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAyIF1cbiAgICAgICAgICB9LCBwcm9wcy5tb2RlbFZhbHVlICsgMSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaW5wdXQgIT09IHRydWUpIHsgLy8gaGFzIGJ1dHRvbnMgaW5zdGVhZCBvZiBpbnB1dGJveFxuICAgICAgICBjb250ZW50TWlkZGxlID0gW11cbiAgICAgICAgY29uc3QgeyBwZ0Zyb20sIHBnVG8sIG1hcmdpbmFsU3R5bGU6IHN0eWxlIH0gPSBidG5Db25maWcudmFsdWVcblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmJvdW5kYXJ5U3RhcnQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBtaW5Qcm9wLnZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdibnMnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IG1pblByb3AudmFsdWVcbiAgICAgICAgICAgIH0sIG1pblByb3AudmFsdWUsIGFjdGl2ZSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmJvdW5kYXJ5RW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gbWF4UHJvcC52YWx1ZSA9PT0gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICAgIGNvbnRlbnRFbmQudW5zaGlmdChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogJ2JuZScsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogbWF4UHJvcC52YWx1ZVxuICAgICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSwgYWN0aXZlKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuZWxsaXBzZXNTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYmVzJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiAn4oCmJyxcbiAgICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwgcGdGcm9tIC0gMSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmVsbGlwc2VzRW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYmVlJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiAn4oCmJyxcbiAgICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwgcGdUbyArIDEpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBnRnJvbTsgaSA8PSBwZ1RvOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50TWlkZGxlLnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6IGBicGckeyBpIH1gLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlcbiAgICAgICAgICAgIH0sIGksIGkgPT09IHByb3BzLm1vZGVsVmFsdWUpXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAuLi5hdHRycy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXBhZ2luYXRpb25fX2NvbnRlbnQgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJyxcbiAgICAgICAgICBzdHlsZTogZ3V0dGVyU3R5bGUudmFsdWVcbiAgICAgICAgfSwgW1xuICAgICAgICAgIC4uLmNvbnRlbnRTdGFydCxcblxuICAgICAgICAgIHByb3BzLmlucHV0ID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoUUlucHV0LCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGAkeyBpbnB1dFBsYWNlaG9sZGVyLnZhbHVlLmxlbmd0aCAvIDEuNSB9ZW1gIH0sXG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IG5ld1BhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzczogcHJvcHMuaW5wdXRDbGFzcyxcbiAgICAgICAgICAgICAgaW5wdXRTdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0UGxhY2Vob2xkZXIudmFsdWUsXG4gICAgICAgICAgICAgIG1pbjogbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgbWF4OiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAuLi5pbnB1dEV2ZW50cy52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtcGFnaW5hdGlvbl9fbWlkZGxlIHJvdyBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgIH0sIGNvbnRlbnRNaWRkbGUpLFxuXG4gICAgICAgICAgLi4uY29udGVudEVuZFxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiZ2V0Qm9vbCIsInZhbCIsIm90aGVyd2lzZSIsIlFQYWdpbmF0aW9uIiwiY3JlYXRlQ29tcG9uZW50IiwidXNlRGFya1Byb3BzIiwidiIsImJ0bkRlc2lnbk9wdGlvbnMiLCJwcm9wcyIsImVtaXQiLCJwcm94eSIsImdldEN1cnJlbnRJbnN0YW5jZSIsIiRxIiwiaXNEYXJrIiwidXNlRGFyayIsIm1pblByb3AiLCJjb21wdXRlZCIsIm1heFByb3AiLCJtYXhQYWdlc1Byb3AiLCJpbnB1dFBsYWNlaG9sZGVyIiwibW9kZWwiLCJib3VuZGFyeUxpbmtzUHJvcCIsImJvdW5kYXJ5TnVtYmVyc1Byb3AiLCJkaXJlY3Rpb25MaW5rc1Byb3AiLCJlbGxpcHNlc1Byb3AiLCJuZXdQYWdlIiwicmVmIiwidmFsdWUiLCJiZXR3ZWVuIiwid2F0Y2giLCJjbGFzc2VzIiwiZ3V0dGVyUHJvcCIsImJ0blBhZGRpbmciLCJndXR0ZXJTdHlsZSIsImljb25zIiwiaWNvIiwiYXR0cnMiLCJidG5EZXNpZ25Qcm9wIiwiZ2V0QnRuRGVzaWduIiwiYnRuUHJvcHMiLCJidG5BY3RpdmVEZXNpZ25Qcm9wIiwiYWNjIiwiYWN0aXZlQnRuUHJvcHMiLCJidG5Db25maWciLCJtYXhQYWdlcyIsInNldCIsInNldEJ5T2Zmc2V0Iiwib2Zmc2V0IiwiaW5wdXRFdmVudHMiLCJ1cGRhdGVNb2RlbCIsImUiLCJpc0tleUNvZGUiLCJnZXRCdG4iLCJjZmciLCJwYWdlIiwiYWN0aXZlIiwiZGF0YSIsImgiLCJRQnRuIiwiY29udGVudFN0YXJ0IiwiY29udGVudEVuZCIsImNvbnRlbnRNaWRkbGUiLCJwZ0Zyb20iLCJwZ1RvIiwic3R5bGUiLCJRSW5wdXQiXSwibWFwcGluZ3MiOiIrSUFZQSxTQUFTQSxFQUFTQyxFQUFLQyxFQUFXLENBQ2hDLE1BQU8sQ0FBRSxHQUFNLElBQVEsU0FBU0QsQ0FBRyxFQUMvQkEsRUFDQUMsQ0FDTixDQUVBLElBQUFDLEVBQWVDLEVBQWdCLENBQzdCLEtBQU0sY0FFTixNQUFPLENBQ0wsR0FBR0MsRUFFSCxXQUFZLENBQ1YsS0FBTSxPQUNOLFNBQVUsRUFDWCxFQUNELElBQUssQ0FDSCxLQUFNLENBQUUsT0FBUSxNQUFRLEVBQ3hCLFFBQVMsQ0FDVixFQUNELElBQUssQ0FDSCxLQUFNLENBQUUsT0FBUSxNQUFRLEVBQ3hCLFNBQVUsRUFDWCxFQUNELFNBQVUsQ0FDUixLQUFNLENBQUUsT0FBUSxNQUFRLEVBQ3hCLFFBQVMsRUFDVCxVQUFXQyxJQUNSLE9BQU9BLEdBQU0sU0FBVyxTQUFTQSxFQUFHLEVBQUUsRUFBSUEsSUFBTSxDQUVwRCxFQUVELFdBQVksQ0FB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