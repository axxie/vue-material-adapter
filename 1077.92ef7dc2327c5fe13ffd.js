(self.webpackChunkvue_material_adapter=self.webpackChunkvue_material_adapter||[]).push([[1077],{2332:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var d=t(5166),i={class:"my-demo"},l={class:"mcw-demo--container"},a=(0,d.Uk)("make indeterminate"),u=(0,d.Uk)("toggle disabled"),o={class:"mcw-demo--container"},m=(0,d.Wm)("div",null,"Array selection",-1),c={data:function(){return{checked:!1,indeterminate_:!1,disabled:!1,ids:[]}},computed:{indeterminate:{get:function(){return this.indeterminate_},set:function(e){this.indeterminate_=e}}},methods:{onIndeterminate:function(){this.indeterminate=!0},onIds:function(e){console.dir(e),this.ids=e}},render:function(e,n,t,c,r,s){var f=(0,d.up)("mcw-checkbox"),k=(0,d.up)("mcw-button");return(0,d.wg)(),(0,d.j4)("div",i,[(0,d.Wm)("div",l,[(0,d.Wm)(f,{modelValue:r.checked,"onUpdate:modelValue":n[1]||(n[1]=function(e){return r.checked=e}),indeterminate:s.indeterminate,"onUpdate:indeterminate":n[2]||(n[2]=function(e){return s.indeterminate=e}),disabled:r.disabled,label:r.checked?"Checked":"Unchecked"},null,8,["modelValue","indeterminate","disabled","label"]),(0,d.Wm)("div",null,[(0,d.Wm)(k,{outlined:"",onClick:s.onIndeterminate},{default:(0,d.w5)((function(){return[a]})),_:1},8,["onClick"]),(0,d.Wm)(k,{outlined:"",onClick:n[3]||(n[3]=function(e){return r.disabled=!r.disabled})},{default:(0,d.w5)((function(){return[u]})),_:1})])]),(0,d.Wm)("div",o,[m,(0,d.Wm)(f,{value:"abc",label:"one","model-value":r.ids,"onUpdate:modelValue":s.onIds},null,8,["model-value","onUpdate:modelValue"]),(0,d.Wm)(f,{value:"xyz",label:"two","model-value":r.ids,"onUpdate:modelValue":s.onIds},null,8,["model-value","onUpdate:modelValue"])]),(0,d.Wm)("div",null,"Selected IDs: "+(0,d.zw)(r.ids),1)])}}}}]);
//# sourceMappingURL=1077.92ef7dc2327c5fe13ffd.js.map