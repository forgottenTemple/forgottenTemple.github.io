import{f as P,cR as x,r as p,n as h,cS as y,N as b,p as Q,o as j,j as C,a4 as S,a3 as k}from"./index.6def9867.js";var A=P({name:"QPopupProxy",props:{...x,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(o,{slots:g,emit:c,attrs:v}){const{proxy:u}=C(),{$q:l}=u,a=p(!1),t=p(null),i=h(()=>parseInt(o.breakpoint,10)),{canShow:f}=y({showing:a});function s(){return l.screen.width<i.value||l.screen.height<i.value?"dialog":"menu"}const n=p(s()),d=h(()=>n.value==="menu"?{maxHeight:"99vh"}:{});b(()=>s(),e=>{a.value!==!0&&(n.value=e)});function m(e){a.value=!0,c("show",e)}function w(e){a.value=!1,n.value=s(),c("hide",e)}return Object.assign(u,{show(e){f(e)===!0&&t.value.show(e)},hide(e){t.value.hide(e)},toggle(e){t.value.toggle(e)}}),Q(u,"currentComponent",()=>({type:n.value,ref:t.value})),()=>{const e={ref:t,...d.value,...v,onShow:m,onHide:w};let r;return n.value==="dialog"?r=S:(r=k,Object.assign(e,{target:o.target,contextMenu:o.contextMenu,noParentEvent:!0,separateClosePopup:!0})),j(r,e,g.default)}}});export{A as Q};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVBvcHVwUHJveHkuMzYwN2QwMzAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcG9wdXAtcHJveHkvUVBvcHVwUHJveHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFEaWFsb2cgZnJvbSAnLi4vZGlhbG9nL1FEaWFsb2cuanMnXG5pbXBvcnQgUU1lbnUgZnJvbSAnLi4vbWVudS9RTWVudS5qcydcblxuaW1wb3J0IHVzZUFuY2hvciwgeyB1c2VBbmNob3JQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWFuY2hvci91c2UtYW5jaG9yLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBpbmplY3RQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5pbmplY3Qtb2JqLXByb3AvaW5qZWN0LW9iai1wcm9wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBvcHVwUHJveHknLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlQW5jaG9yUHJvcHMsXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA0NTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Nob3cnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IHBvcHVwUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLmJyZWFrcG9pbnQsIDEwKSlcblxuICAgIGNvbnN0IHsgY2FuU2hvdyB9ID0gdXNlQW5jaG9yKHsgc2hvd2luZyB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSAoKSB7XG4gICAgICByZXR1cm4gJHEuc2NyZWVuLndpZHRoIDwgYnJlYWtwb2ludC52YWx1ZSB8fCAkcS5zY3JlZW4uaGVpZ2h0IDwgYnJlYWtwb2ludC52YWx1ZVxuICAgICAgICA/ICdkaWFsb2cnXG4gICAgICAgIDogJ21lbnUnXG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHJlZihnZXRUeXBlKCkpXG5cbiAgICBjb25zdCBwb3B1cFByb3BzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZS52YWx1ZSA9PT0gJ21lbnUnID8geyBtYXhIZWlnaHQ6ICc5OXZoJyB9IDoge30pXG4gICAgKVxuXG4gICAgd2F0Y2goKCkgPT4gZ2V0VHlwZSgpLCB2YWwgPT4ge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgdHlwZS52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvblNob3cgKGV2dCkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlIChldnQpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgdHlwZS52YWx1ZSA9IGdldFR5cGUoKVxuICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzaG93IChldnQpIHsgY2FuU2hvdyhldnQpID09PSB0cnVlICYmIHBvcHVwUmVmLnZhbHVlLnNob3coZXZ0KSB9LFxuICAgICAgaGlkZSAoZXZ0KSB7IHBvcHVwUmVmLnZhbHVlLmhpZGUoZXZ0KSB9LFxuICAgICAgdG9nZ2xlIChldnQpIHsgcG9wdXBSZWYudmFsdWUudG9nZ2xlKGV2dCkgfVxuICAgIH0pXG5cbiAgICBpbmplY3RQcm9wKHByb3h5LCAnY3VycmVudENvbXBvbmVudCcsICgpID0+ICh7XG4gICAgICB0eXBlOiB0eXBlLnZhbHVlLFxuICAgICAgcmVmOiBwb3B1cFJlZi52YWx1ZVxuICAgIH0pKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogcG9wdXBSZWYsXG4gICAgICAgIC4uLnBvcHVwUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmF0dHJzLFxuICAgICAgICBvblNob3csXG4gICAgICAgIG9uSGlkZVxuICAgICAgfVxuXG4gICAgICBsZXQgY29tcG9uZW50XG5cbiAgICAgIGlmICh0eXBlLnZhbHVlID09PSAnZGlhbG9nJykge1xuICAgICAgICBjb21wb25lbnQgPSBRRGlhbG9nXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50ID0gUU1lbnVcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICAgICAgY29udGV4dE1lbnU6IHByb3BzLmNvbnRleHRNZW51LFxuICAgICAgICAgIG5vUGFyZW50RXZlbnQ6IHRydWUsXG4gICAgICAgICAgc2VwYXJhdGVDbG9zZVBvcHVwOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKGNvbXBvbmVudCwgZGF0YSwgc2xvdHMuZGVmYXVsdClcbiAgICB9XG4gIH1cbn0pXG4iXSwibmFtZXMiOlsiUVBvcHVwUHJveHkiLCJjcmVhdGVDb21wb25lbnQiLCJ1c2VBbmNob3JQcm9wcyIsInByb3BzIiwic2xvdHMiLCJlbWl0IiwiYXR0cnMiLCJwcm94eSIsImdldEN1cnJlbnRJbnN0YW5jZSIsIiRxIiwic2hvd2luZyIsInJlZiIsInBvcHVwUmVmIiwiYnJlYWtwb2ludCIsImNvbXB1dGVkIiwiY2FuU2hvdyIsInVzZUFuY2hvciIsImdldFR5cGUiLCJ0eXBlIiwicG9wdXBQcm9wcyIsIndhdGNoIiwidmFsIiwib25TaG93IiwiZXZ0Iiwib25IaWRlIiwiaW5qZWN0UHJvcCIsImRhdGEiLCJjb21wb25lbnQiLCJRRGlhbG9nIiwiUU1lbnUiLCJoIl0sIm1hcHBpbmdzIjoia0hBVUEsSUFBQUEsRUFBZUMsRUFBZ0IsQ0FDN0IsS0FBTSxjQUVOLE1BQU8sQ0FDTCxHQUFHQyxFQUVILFdBQVksQ0FDVixLQUFNLENBQUUsT0FBUSxNQUFRLEVBQ3hCLFFBQVMsR0FDVixDQUNGLEVBRUQsTUFBTyxDQUFFLE9BQVEsTUFBUSxFQUV6QixNQUFPQyxFQUFPLENBQUUsTUFBQUMsRUFBTyxLQUFBQyxFQUFNLE1BQUFDLENBQUssRUFBSSxDQUNwQyxLQUFNLENBQUUsTUFBQUMsQ0FBTyxFQUFHQyxFQUFvQixFQUNoQyxDQUFFLEdBQUFDLENBQUUsRUFBS0YsRUFFVEcsRUFBVUMsRUFBSSxFQUFLLEVBQ25CQyxFQUFXRCxFQUFJLElBQUksRUFDbkJFLEVBQWFDLEVBQVMsSUFBTSxTQUFTWCxFQUFNLFdBQVksRUFBRSxDQUFDLEVBRTFELENBQUUsUUFBQVksQ0FBUyxFQUFHQyxFQUFVLENBQUUsUUFBQU4sQ0FBTyxDQUFFLEVBRXpDLFNBQVNPLEdBQVcsQ0FDbEIsT0FBT1IsRUFBRyxPQUFPLE1BQVFJLEVBQVcsT0FBU0osRUFBRyxPQUFPLE9BQVNJLEVBQVcsTUFDdkUsU0FDQSxNQUNMLENBRUQsTUFBTUssRUFBT1AsRUFBSU0sR0FBUyxFQUVwQkUsRUFBYUwsRUFBUyxJQUMxQkksRUFBSyxRQUFVLE9BQVMsQ0FBRSxVQUFXLE1BQVEsRUFBRyxFQUNqRCxFQUVERSxFQUFNLElBQU1ILEVBQVMsRUFBRUksR0FBTyxDQUN4QlgsRUFBUSxRQUFVLEtBQ3BCUSxFQUFLLE1BQVFHLEVBRXJCLENBQUssRUFFRCxTQUFTQyxFQUFRQyxFQUFLLENBQ3BCYixFQUFRLE1BQVEsR0FDaEJMLEVBQUssT0FBUWtCLENBQUcsQ0FDakIsQ0FFRCxTQUFTQyxFQUFRRCxFQUFLLENBQ3BCYixFQUFRLE1BQVEsR0FDaEJRLEVBQUssTUFBUUQsRUFBUyxFQUN0QlosRUFBSyxPQUFRa0IsQ0FBRyxDQUNqQixDQUdELGNBQU8sT0FBT2hCLEVBQU8sQ0FDbkIsS0FBTWdCLEVBQUssQ0FBRVIsRUFBUVEsQ0FBRyxJQUFNLElBQVFYLEVBQVMsTUFBTSxLQUFLVyxDQUFHLENBQUcsRUFDaEUsS0FBTUEsRUFBSyxDQUFFWCxFQUFTLE1BQU0sS0FBS1csQ0FBRyxDQUFHLEVBQ3ZDLE9BQVFBLEVBQUssQ0FBRVgsRUFBUyxNQUFNLE9BQU9XLENBQUcsQ0FBRyxDQUNqRCxDQUFLLEVBRURFLEVBQVdsQixFQUFPLG1CQUFvQixLQUFPLENBQzNDLEtBQU1XLEVBQUssTUFDWCxJQUFLTixFQUFTLEtBQ3BCLEVBQU0sRUFFSyxJQUFNLENBQ1gsTUFBTWMsRUFBTyxDQUNYLElBQUtkLEVBQ0wsR0FBR08sRUFBVyxNQUNkLEdBQUdiLEVBQ0gsT0FBQWdCLEVBQ0EsT0FBQUUsQ0FDRCxFQUVELElBQUlHLEVBRUosT0FBSVQsRUFBSyxRQUFVLFNBQ2pCUyxFQUFZQyxHQUdaRCxFQUFZRSxFQUNaLE9BQU8sT0FBT0gsRUFBTSxDQUNsQixPQUFRdkIsRUFBTSxPQUNkLFlBQWFBLEVBQU0sWUFDbkIsY0FBZSxHQUNmLG1CQUFvQixFQUM5QixDQUFTLEdBR0kyQixFQUFFSCxFQUFXRCxFQUFNdEIsRUFBTSxPQUFPLENBQ3hDLENBQ0YsQ0FDSCxDQUFDIn0=