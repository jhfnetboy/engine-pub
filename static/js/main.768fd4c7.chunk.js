(this.webpackJsonpengine=this.webpackJsonpengine||[]).push([[0],{14:function(e,t,r){},17:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),a=r(6),s=r.n(a),i=(r(14),r(2)),o=(r(4),r(7),r(5)),u=r.n(o),l=r(8),b=(r(9),r(0)),d=['`\u5f53\u4f60\u7ed3\u675f\u4e86\u4e00\u5929\u75b2\u60eb\u7684\u5de5\u4f5c\u56de\u5230\u72ec\u5c45\u7684\u5bb6\u4e2d\uff0c`<br/>`\u6253\u5f00\u5bb6\u95e8\u5374\u610f\u5916\u5730\u53d1\u73b0\u81ea\u5df1\u7684\u7231\u72ac *DogName `<br/>`\u6ca1\u6709\u50cf\u5f80\u5e38\u4e00\u6837\u6643\u7740\u5c3e\u5df4\u51fa\u73b0\u5728\u95e8\u53e3\u8fce\u63a5\u4f60\u3002`<br/>`\u53ea\u89c1\u5730\u4e0a\u7559\u4e86\u4e00\u5f20\u8d28\u5730\u5f88\u53e4\u602a\u7684\u4fbf\u7b7e\uff1a`<br/>\u5f88\u62b1\u6b49\u6ca1\u529e\u6cd5\u63d0\u524d\u544a\u77e5\uff0c<br/>\u4f46\u54c8\u8fea\u65af\u5927\u4eba\u8981\u6c42\u6211\u5c3d\u5feb\u5c06*DogName\u5e26\u56de\u51a5\u754c\u3002<br/>\u5982\u60a8\u5bf9\u6b64\u6709\u4efb\u4f55\u610f\u89c1\uff0c\u6b22\u8fce\u60a8\u62dc\u8bbf\u4ee5\u4e0b\u5730\u5740\u4e0e\u54c8\u8fea\u65af\u5927\u4eba\u5f53\u9762\u6c9f\u901a\u2026\u2026 <br/>\u2014\u2014\u5854\u7eb3\u6258\u65af <br/><font color="gray">\u6309\u7a7a\u683c\u7ee7\u7eed\u6e38\u620f \u6309q\u9000\u51fa\u6e38\u620f</font>^2000'],f=function(){var e=n.a.useRef(null),t=n.a.useRef(null),r=Object(c.useState)(),a=Object(i.a)(r,2),s=(a[0],a[1]),o=Object(c.useState)(),f=Object(i.a)(o,2),p=(f[0],f[1]),h={STR:j(3,6),DEX:j(3,6),CON:j(3,6),INT:j(3,6),CHA:j(3,6),LUK:j(3,6)};function j(e,t){var r=t+e*Math.floor(3*Math.random());if(r>3&&r<=18)return r;j(e,t)}var _=Object(c.useState)(h),m=Object(i.a)(_,2),y=(m[0],m[1],Object(c.useState)(d)),x=Object(i.a)(y,2);x[0],x[1];n.a.useEffect((function(){var r={strings:d,typeSpeed:30,backSpeed:0,cursorChar:"_",fadeOut:!0,shuffle:!0};return t.current=new u.a(e.current,r),window.addEventListener("keydown",g),function(){t.current.destroy()}}),[]);function O(r){var c={strings:r,typeSpeed:30,backSpeed:0,cursorChar:"_",fadeOut:!0,shuffle:!0};return t.current=new u.a(e.current,c),t.current}var g=function(e){s(e.key),"q"===e.key.toString()?(t.current.destroy(),t.current=O(["\u4f60\u6309\u4e0b\u4e86Q","\u9000\u51fa\u6e38\u620f^1500"]),t.current.reset()):(console.log("continue game"),32==e.keyCode&&t.current.destroy(),function(e){l.forEach((function(r){switch(p(r),console.log(r.id),t.current.destroy(),t.current=O(function(e){var t=[];return t.push(e.start_text),t.push(e.pre_text),console.log(t),t}(r)),t.current.reset(),e.key.toString()){case"a":console.log(r.id);break;case"b":console.log("i am b touched");break;case"c":console.log("i am c touched");break;default:console.log("")}}))}(e))};return Object(b.jsxs)("div",{className:"wrap",children:[Object(b.jsx)("h1",{children:"What the hell?"}),Object(b.jsx)("div",{className:"type-wrap",children:Object(b.jsx)("span",{style:{whiteSpace:"pre"},ref:e})})]})},p={start:!1,layer:0,contribution:0,progress:"-",boss:!1},h={STR:j(3,6),DEX:j(3,6),CON:j(3,6),INT:j(3,6),CHA:j(3,6),LUK:j(3,6)};function j(e,t){var r=t+e*Math.floor(6*Math.random());if(r>3&&r<=18)return r;j(e,t)}var _=function(){var e=Object(c.useState)(p),t=Object(i.a)(e,2),r=t[0],n=(t[1],Object(c.useState)(h)),a=Object(i.a)(n,2),s=a[0],o=a[1];return localStorage.setItem("myWalker",JSON.stringify(h)),localStorage.setItem("gameProgress",JSON.stringify(p)),Object(c.useEffect)((function(){localStorage.setItem("myWalker",JSON.stringify(h)),localStorage.setItem("gameProgress",JSON.stringify(p))}),[s,r]),[o,function(){try{var e=localStorage.getItem("myWalker");return JSON.parse(e)}catch(t){throw console.log("Error: ",t),t}},function(e){try{localStorage.setItem("gameProgress",JSON.stringify(p)),console.log("gameProgress to save: ",p)}catch(t){throw console.log("Error: ",t),t}},function(){try{var e=localStorage.getItem("gameProgress");return console.log("gameProgress to load: ",e),e}catch(t){throw console.log("Error: ",t),t}}]};r(17);var m=function(){var e=_(),t=Object(i.a)(e,4),r=(t[0],t[1]),c=t[2],n=t[3],a=r(),s=n();return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("span",{children:Object(b.jsx)("table",{border:"1",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"STR"}),Object(b.jsx)("td",{children:"DEX"}),Object(b.jsx)("td",{children:"CON"}),Object(b.jsx)("td",{children:"INT"}),Object(b.jsx)("td",{children:"CHA"}),Object(b.jsx)("td",{children:"LUC"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:a.STR}),Object(b.jsx)("td",{children:a.DEX}),Object(b.jsx)("td",{children:a.CON}),Object(b.jsx)("td",{children:a.INT}),Object(b.jsx)("td",{children:a.CHA}),Object(b.jsx)("td",{children:a.LUK})]})]})})}),Object(b.jsx)("span",{id:"react-root",className:"text-white ml-40 mr-40 text-xl font-bold border-8 border-white",children:Object(b.jsx)(f,{})}),Object(b.jsx)("span",{children:Object(b.jsx)("table",{border:"1",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Start"}),Object(b.jsx)("td",{children:"Layer"}),Object(b.jsx)("td",{children:"Contribution"}),Object(b.jsx)("td",{children:"BOSS"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:s.start}),Object(b.jsx)("td",{children:s.layer}),Object(b.jsx)("td",{children:s.contribution}),Object(b.jsx)("td",{children:s.boss})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Progress"}),Object(b.jsx)("td",{colSpan:3,children:s.progress})]})]})})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return c()},children:"Start"}),Object(b.jsx)("button",{onClick:function(){return c()},children:"Stop"})]})]})})},y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),y()},8:function(e){e.exports=JSON.parse('[{"id":1,"type":"must","repeat":false,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"\'`\u5f53\u4f60\u7ed3\u675f\u4e86\u4e00\u5929\u75b2\u60eb\u7684\u5de5\u4f5c\u56de\u5230\u72ec\u5c45\u7684\u5bb6\u4e2d\uff0c`<br/>`\u6253\u5f00\u5bb6\u95e8\u5374\u610f\u5916\u5730\u53d1\u73b0\u81ea\u5df1\u7684\u7231\u72ac *DogName `<br/>`\u6ca1\u6709\u50cf\u5f80\u5e38\u4e00\u6837\u6643\u7740\u5c3e\u5df4\u51fa\u73b0\u5728\u95e8\u53e3\u8fce\u63a5\u4f60\u3002`<br/>`\u53ea\u89c1\u5730\u4e0a\u7559\u4e86\u4e00\u5f20\u8d28\u5730\u5f88\u53e4\u602a\u7684\u4fbf\u7b7e\uff1a`<br/>\u5f88\u62b1\u6b49\u6ca1\u529e\u6cd5\u63d0\u524d\u544a\u77e5\uff0c<br/>\u4f46\u54c8\u8fea\u65af\u5927\u4eba\u8981\u6c42\u6211\u5c3d\u5feb\u5c06*DogName\u5e26\u56de\u51a5\u754c\u3002<br/>\u5982\u60a8\u5bf9\u6b64\u6709\u4efb\u4f55\u610f\u89c1\uff0c\u6b22\u8fce\u60a8\u62dc\u8bbf\u4ee5\u4e0b\u5730\u5740\u4e0e\u54c8\u8fea\u65af\u5927\u4eba\u5f53\u9762\u6c9f\u901a\u2026\u2026 <br/>\u2014\u2014\u5854\u7eb3\u6258\u65af^2000\'","pre_text":"","list":[{"key":"a","content":"a. \u6211\u6709\u4e00\u79cd\u4e0d\u7965\u7684\u9884\u611f\uff0c\u4e0d\u7136\u5c31\u7b97\u4e86\uff1f","result":"quitGame"},{"key":"b","content":"b. \u6211\u6709\u8ba1\u5212\u4e86\u3002\u8d76\u7d27\u51c6\u5907\u4e00\u4e0b\u5c31\u524d\u5f80\u51a5\u754c\u3002","result":"getEquipment"},{"key":"c","content":"\u4ec0\u4e48\u9b3c\uff1f\u7acb\u523b\u51fa\u53d1\uff01","result":"playGame"}]},{"id":2,"type":"must","repeat":false,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"\'`\u4ee4\u4eba\u610f\u5916\u7684\u662f\u4fbf\u7b7e\u4e0a\u7684\u5730\u5740\u5e76\u4e0d\u96be\u627e\uff0c<br/>\u770b\u4e0a\u53bb\u4f3c\u4e4e\u662f\u4e2a\u5df2\u7ecf\u5e9f\u5f03\u8bb8\u4e45\u7684\u5730\u4e0b\u5efa\u7b51\u3002`,<br/>`\u4f60\u8d70\u4e86\u8fdb\u53bb\uff0c\u5149\u7ebf\u975e\u5e38\u5fae\u5f31\uff0c\u51e0\u4e4e\u770b\u4e0d\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c<br/>\u53ea\u80fd\u542c\u89c1\u8fdc\u5904\u6709\u6e4d\u6025\u7684\u6c34\u6d41\u58f0\u3002`^2000\'","pre_text":"\u5899\u89d2\u6446\u7740\u4e00\u4e2a\u9676\u7f50\uff0c\u770b\u4e0a\u53bb\u6709\u4e9b\u4e0d\u5bfb\u5e38\u3002^2000","list":[{"key":"a","content":"a. \u8e22\u7206\u5b83\uff01","check":[{"function":"check(\'STR\',\'1D6\',12)","success":"","fail":{"text":"\u4f60\u626d\u4f24\u4e86\u811a\u8dbe\u3002","effect":{"attr":"HP","num":"-1"}}},{"function":"check(\'LUK\',\'1D6\',100)","success":"\u6709\u4e00\u4e2a\u95ea\u95ea\u53d1\u5149\u7684\u73a9\u610f\u513f\u6389\u4e86\u51fa\u6765\uff0c\u4f60\u6361\u8d77\u6765\u53d1\u73b0\u662f\u4e00\u679a\u770b\u4e0d\u51fa\u5e74\u4ee3\u7684\u91d1\u5e01","fail":"","craft":{"craft_id":2,"name":"\u91d1\u5e01","description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05"}}]},{"key":"b","content":"b. \u8fd8\u662f\u6293\u7d27\u8d76\u8def\u5427\u3002","result":"playGame"}]},{"id":3,"type":"must","repeat":true,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"\'`\u4ee4\u4eba\u610f\u5916\u7684\u662f\u4fbf\u7b7e\u4e0a\u7684\u5730\u5740\u5e76\u4e0d\u96be\u627e\uff0c<br/>\u770b\u4e0a\u53bb\u4f3c\u4e4e\u662f\u4e2a\u5df2\u7ecf\u5e9f\u5f03\u8bb8\u4e45\u7684\u5730\u4e0b\u5efa\u7b51\u3002`,<br/>`\u4f60\u8d70\u4e86\u8fdb\u53bb\uff0c\u5149\u7ebf\u975e\u5e38\u5fae\u5f31\uff0c\u51e0\u4e4e\u770b\u4e0d\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c<br/>\u53ea\u80fd\u542c\u89c1\u8fdc\u5904\u6709\u6e4d\u6025\u7684\u6c34\u6d41\u58f0\u3002`^2000\'","pre_text":"\u5899\u89d2\u6446\u7740\u4e00\u4e2a\u9676\u7f50\uff0c\u770b\u4e0a\u53bb\u6709\u4e9b\u4e0d\u5bfb\u5e38\u3002^2000","list":[{"key":"a","content":"a. \u8e22\u7206\u5b83\uff01","check":[{"function":"check(\'STR\',\'1D6\',12)","success":"","fail":{"text":"\u4f60\u626d\u4f24\u4e86\u811a\u8dbe\u3002","effect":{"attr":"HP","num":"-1"}}},{"function":"check(\'LUK\',\'1D6\',100)","success":"\u6709\u4e00\u4e2a\u95ea\u95ea\u53d1\u5149\u7684\u73a9\u610f\u513f\u6389\u4e86\u51fa\u6765\uff0c\u4f60\u6361\u8d77\u6765\u53d1\u73b0\u662f\u4e00\u679a\u770b\u4e0d\u51fa\u5e74\u4ee3\u7684\u91d1\u5e01","fail":"","craft":{"craft_id":2,"name":"\u91d1\u5e01","description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05"}}]},{"key":"b","content":"b. \u8fd8\u662f\u6293\u7d27\u8d76\u8def\u5427\u3002","result":"playGame"}]},{"id":4,"type":"must","repeat":true,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"\'`\u4ee4\u4eba\u610f\u5916\u7684\u662f\u4fbf\u7b7e\u4e0a\u7684\u5730\u5740\u5e76\u4e0d\u96be\u627e\uff0c<br/>\u770b\u4e0a\u53bb\u4f3c\u4e4e\u662f\u4e2a\u5df2\u7ecf\u5e9f\u5f03\u8bb8\u4e45\u7684\u5730\u4e0b\u5efa\u7b51\u3002`,<br/>`\u4f60\u8d70\u4e86\u8fdb\u53bb\uff0c\u5149\u7ebf\u975e\u5e38\u5fae\u5f31\uff0c\u51e0\u4e4e\u770b\u4e0d\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c<br/>\u53ea\u80fd\u542c\u89c1\u8fdc\u5904\u6709\u6e4d\u6025\u7684\u6c34\u6d41\u58f0\u3002`^2000\'","pre_text":"\u5899\u89d2\u6446\u7740\u4e00\u4e2a\u9676\u7f50\uff0c\u770b\u4e0a\u53bb\u6709\u4e9b\u4e0d\u5bfb\u5e38\u3002^2000","list":[{"key":"a","content":"a. \u8e22\u7206\u5b83\uff01","check":[{"function":"check(\'STR\',\'1D6\',12)","success":"","fail":{"text":"\u4f60\u626d\u4f24\u4e86\u811a\u8dbe\u3002","effect":{"attr":"HP","num":"-1"}}},{"function":"check(\'LUK\',\'1D6\',100)","success":"\u6709\u4e00\u4e2a\u95ea\u95ea\u53d1\u5149\u7684\u73a9\u610f\u513f\u6389\u4e86\u51fa\u6765\uff0c\u4f60\u6361\u8d77\u6765\u53d1\u73b0\u662f\u4e00\u679a\u770b\u4e0d\u51fa\u5e74\u4ee3\u7684\u91d1\u5e01","fail":"","craft":{"craft_id":2,"name":"\u91d1\u5e01","description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05"}}]},{"key":"b","content":"b. \u8fd8\u662f\u6293\u7d27\u8d76\u8def\u5427\u3002","result":"playGame"}]},{"id":5,"type":"must","repeat":true,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"\'`\u4ee4\u4eba\u610f\u5916\u7684\u662f\u4fbf\u7b7e\u4e0a\u7684\u5730\u5740\u5e76\u4e0d\u96be\u627e\uff0c<br/>\u770b\u4e0a\u53bb\u4f3c\u4e4e\u662f\u4e2a\u5df2\u7ecf\u5e9f\u5f03\u8bb8\u4e45\u7684\u5730\u4e0b\u5efa\u7b51\u3002`,<br/>`\u4f60\u8d70\u4e86\u8fdb\u53bb\uff0c\u5149\u7ebf\u975e\u5e38\u5fae\u5f31\uff0c\u51e0\u4e4e\u770b\u4e0d\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c<br/>\u53ea\u80fd\u542c\u89c1\u8fdc\u5904\u6709\u6e4d\u6025\u7684\u6c34\u6d41\u58f0\u3002`^2000\'","pre_text":"\u5899\u89d2\u6446\u7740\u4e00\u4e2a\u9676\u7f50\uff0c\u770b\u4e0a\u53bb\u6709\u4e9b\u4e0d\u5bfb\u5e38\u3002^2000","list":[{"key":"a","content":"a. \u8e22\u7206\u5b83\uff01","check":[{"function":"check(\'STR\',\'1D6\',12)","success":"","fail":{"text":"\u4f60\u626d\u4f24\u4e86\u811a\u8dbe\u3002","effect":{"attr":"HP","num":"-1"}}},{"function":"check(\'LUK\',\'1D6\',100)","success":"\u6709\u4e00\u4e2a\u95ea\u95ea\u53d1\u5149\u7684\u73a9\u610f\u513f\u6389\u4e86\u51fa\u6765\uff0c\u4f60\u6361\u8d77\u6765\u53d1\u73b0\u662f\u4e00\u679a\u770b\u4e0d\u51fa\u5e74\u4ee3\u7684\u91d1\u5e01","fail":"","craft":{"craft_id":2,"name":"\u91d1\u5e01","description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05"}}]},{"key":"b","content":"b. \u8fd8\u662f\u6293\u7d27\u8d76\u8def\u5427\u3002","result":"playGame"}]},{"id":6,"type":"must","repeat":true,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"\'`\u4ee4\u4eba\u610f\u5916\u7684\u662f\u4fbf\u7b7e\u4e0a\u7684\u5730\u5740\u5e76\u4e0d\u96be\u627e\uff0c<br/>\u770b\u4e0a\u53bb\u4f3c\u4e4e\u662f\u4e2a\u5df2\u7ecf\u5e9f\u5f03\u8bb8\u4e45\u7684\u5730\u4e0b\u5efa\u7b51\u3002`,<br/>`\u4f60\u8d70\u4e86\u8fdb\u53bb\uff0c\u5149\u7ebf\u975e\u5e38\u5fae\u5f31\uff0c\u51e0\u4e4e\u770b\u4e0d\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c<br/>\u53ea\u80fd\u542c\u89c1\u8fdc\u5904\u6709\u6e4d\u6025\u7684\u6c34\u6d41\u58f0\u3002`^2000\'","pre_text":"\u5899\u89d2\u6446\u7740\u4e00\u4e2a\u9676\u7f50\uff0c\u770b\u4e0a\u53bb\u6709\u4e9b\u4e0d\u5bfb\u5e38\u3002^2000","list":[{"key":"a","content":"a. \u8e22\u7206\u5b83\uff01","check":[{"function":"check(\'STR\',\'1D6\',12)","success":"","fail":{"text":"\u4f60\u626d\u4f24\u4e86\u811a\u8dbe\u3002","effect":{"attr":"HP","num":"-1"}}},{"function":"check(\'LUK\',\'1D6\',100)","success":"\u6709\u4e00\u4e2a\u95ea\u95ea\u53d1\u5149\u7684\u73a9\u610f\u513f\u6389\u4e86\u51fa\u6765\uff0c\u4f60\u6361\u8d77\u6765\u53d1\u73b0\u662f\u4e00\u679a\u770b\u4e0d\u51fa\u5e74\u4ee3\u7684\u91d1\u5e01","fail":"","craft":{"craft_id":2,"name":"\u91d1\u5e01","description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05"}}]},{"key":"b","content":"b. \u8fd8\u662f\u6293\u7d27\u8d76\u8def\u5427\u3002","result":"playGame"}]},{"id":7,"type":"must","repeat":true,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"\'`\u4ee4\u4eba\u610f\u5916\u7684\u662f\u4fbf\u7b7e\u4e0a\u7684\u5730\u5740\u5e76\u4e0d\u96be\u627e\uff0c<br/>\u770b\u4e0a\u53bb\u4f3c\u4e4e\u662f\u4e2a\u5df2\u7ecf\u5e9f\u5f03\u8bb8\u4e45\u7684\u5730\u4e0b\u5efa\u7b51\u3002`,<br/>`\u4f60\u8d70\u4e86\u8fdb\u53bb\uff0c\u5149\u7ebf\u975e\u5e38\u5fae\u5f31\uff0c\u51e0\u4e4e\u770b\u4e0d\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c<br/>\u53ea\u80fd\u542c\u89c1\u8fdc\u5904\u6709\u6e4d\u6025\u7684\u6c34\u6d41\u58f0\u3002`^2000\'","pre_text":"\u5899\u89d2\u6446\u7740\u4e00\u4e2a\u9676\u7f50\uff0c\u770b\u4e0a\u53bb\u6709\u4e9b\u4e0d\u5bfb\u5e38\u3002^2000","list":[{"key":"a","content":"a. \u8e22\u7206\u5b83\uff01","check":[{"function":"check(\'STR\',\'1D6\',12)","success":"","fail":{"text":"\u4f60\u626d\u4f24\u4e86\u811a\u8dbe\u3002","effect":{"attr":"HP","num":"-1"}}},{"function":"check(\'LUK\',\'1D6\',100)","success":"\u6709\u4e00\u4e2a\u95ea\u95ea\u53d1\u5149\u7684\u73a9\u610f\u513f\u6389\u4e86\u51fa\u6765\uff0c\u4f60\u6361\u8d77\u6765\u53d1\u73b0\u662f\u4e00\u679a\u770b\u4e0d\u51fa\u5e74\u4ee3\u7684\u91d1\u5e01","fail":"","craft":{"craft_id":2,"name":"\u91d1\u5e01","description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05"}}]},{"key":"b","content":"b. \u8fd8\u662f\u6293\u7d27\u8d76\u8def\u5427\u3002","result":"playGame"}]},{"id":8,"type":"must","repeat":true,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"\'`\u4ee4\u4eba\u610f\u5916\u7684\u662f\u4fbf\u7b7e\u4e0a\u7684\u5730\u5740\u5e76\u4e0d\u96be\u627e\uff0c<br/>\u770b\u4e0a\u53bb\u4f3c\u4e4e\u662f\u4e2a\u5df2\u7ecf\u5e9f\u5f03\u8bb8\u4e45\u7684\u5730\u4e0b\u5efa\u7b51\u3002`,<br/>`\u4f60\u8d70\u4e86\u8fdb\u53bb\uff0c\u5149\u7ebf\u975e\u5e38\u5fae\u5f31\uff0c\u51e0\u4e4e\u770b\u4e0d\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c<br/>\u53ea\u80fd\u542c\u89c1\u8fdc\u5904\u6709\u6e4d\u6025\u7684\u6c34\u6d41\u58f0\u3002`^2000\'","pre_text":"\u5899\u89d2\u6446\u7740\u4e00\u4e2a\u9676\u7f50\uff0c\u770b\u4e0a\u53bb\u6709\u4e9b\u4e0d\u5bfb\u5e38\u3002^2000","list":[{"key":"a","content":"a. \u8e22\u7206\u5b83\uff01","check":[{"function":"check(\'STR\',\'1D6\',12)","success":"","fail":{"text":"\u4f60\u626d\u4f24\u4e86\u811a\u8dbe\u3002","effect":{"attr":"HP","num":"-1"}}},{"function":"check(\'LUK\',\'1D6\',100)","success":"\u6709\u4e00\u4e2a\u95ea\u95ea\u53d1\u5149\u7684\u73a9\u610f\u513f\u6389\u4e86\u51fa\u6765\uff0c\u4f60\u6361\u8d77\u6765\u53d1\u73b0\u662f\u4e00\u679a\u770b\u4e0d\u51fa\u5e74\u4ee3\u7684\u91d1\u5e01","fail":"","craft":{"craft_id":2,"name":"\u91d1\u5e01","description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05"}}]},{"key":"b","content":"b. \u8fd8\u662f\u6293\u7d27\u8d76\u8def\u5427\u3002","result":"playGame"}]},{"id":9,"type":"must","repeat":true,"pre_attribute_require":{},"layer_chance":{},"happen_rate":"must","pre_event_require":[],"pre_craft_reuqire":[],"start_text":"`\u4ee4\u4eba\u610f\u5916\u7684\u662f\u4fbf\u7b7e\u4e0a\u7684\u5730\u5740\u5e76\u4e0d\u96be\u627e\uff0c<br/>\u770b\u4e0a\u53bb\u4f3c\u4e4e\u662f\u4e2a\u5df2\u7ecf\u5e9f\u5f03\u8bb8\u4e45\u7684\u5730\u4e0b\u5efa\u7b51\u3002`,<br/>`\u4f60\u8d70\u4e86\u8fdb\u53bb\uff0c\u5149\u7ebf\u975e\u5e38\u5fae\u5f31\uff0c\u51e0\u4e4e\u770b\u4e0d\u5230\u4ec0\u4e48\u4e1c\u897f\uff0c<br/>\u53ea\u80fd\u542c\u89c1\u8fdc\u5904\u6709\u6e4d\u6025\u7684\u6c34\u6d41\u58f0\u3002`^3000","pre_text":"\u5899\u89d2\u6446\u7740\u4e00\u4e2a\u9676\u7f50\uff0c\u770b\u4e0a\u53bb\u6709\u4e9b\u4e0d\u5bfb\u5e38\u3002^2000","list":[{"key":"a","content":"a. \u8e22\u7206\u5b83\uff01","check":[{"function":"check(\'STR\',\'1D6\',12)","success":"","fail":{"text":"\u4f60\u626d\u4f24\u4e86\u811a\u8dbe\u3002","effect":{"attr":"HP","num":"-1"}}},{"function":"check(\'LUK\',\'1D6\',100)","success":"\u6709\u4e00\u4e2a\u95ea\u95ea\u53d1\u5149\u7684\u73a9\u610f\u513f\u6389\u4e86\u51fa\u6765\uff0c\u4f60\u6361\u8d77\u6765\u53d1\u73b0\u662f\u4e00\u679a\u770b\u4e0d\u51fa\u5e74\u4ee3\u7684\u91d1\u5e01","fail":"","craft":{"craft_id":2,"name":"\u91d1\u5e01","description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05"}}]},{"key":"b","content":"b. \u8fd8\u662f\u6293\u7d27\u8d76\u8def\u5427\u3002","result":"playGame"}]}]')},9:function(e){e.exports=JSON.parse('[{"id":1,"name":"\u9e45\u5375\u77f3","effct":{},"description":"\u5e73\u5e73\u65e0\u5947\uff0c\u5728\u6cb3\u8fb9\u7ecf\u5e38\u80fd\u6361\u5230","limit":null,"rarity":1},{"id":2,"name":"\u91d1\u5e01","effct":{},"description":"\u539f\u6709\u7684\u82b1\u7eb9\u548c\u954c\u523b\u7684\u6587\u5b57\u90fd\u65e9\u5df2\u88ab\u78e8\u635f\u5f97\u6a21\u7cca\u4e0d\u6e05","limit":null,"rarity":1},{"id":3,"name":"\u704c\u94c5\u9ab0\u5b50","effct":{},"description":"\u4f60\u80fd\u5f88\u8f7b\u6613\u5730\u63b7\u51fa\u4f60\u60f3\u8981\u7684\u6570\u5b57","limit":null,"rarity":1},{"id":4,"name":"\u91d1\u679d","effct":{},"description":"\u8fd9\u6839\u679d\u6761\u901a\u8fc7\u7279\u5b9a\u89d2\u5ea6\u80fd\u770b\u5230\u95ea\u7740\u5fae\u5149\uff0c\u900f\u9732\u51fa\u795e\u79d8\u7684\u6c14\u606f","limit":null,"rarity":1},{"id":5,"name":"\u9508\u5251","effct":{"strenth":"1"},"description":"\u751f\u9508\u5f88\u4e25\u91cd\uff0c\u52c9\u5f3a\u8fd8\u7ef4\u6301\u7740\u5251\u7684\u5f62\u72b6","limit":null,"rarity":1},{"id":6,"name":"\u5e03\u7532","effct":{"damage":"-1"},"description":"\u518d\u7834\u4e00\u70b9\u5c31\u53ea\u80fd\u7b97\u662f\u5e03\u7247\u4e86","limit":null,"rarity":1},{"id":7,"name":"\u8718\u86db\u4e1d","effct":{"town-scroll":"no lost equipment for death"},"description":"\u975e\u5e38\u6709\u97e7\u6027\uff0c\u600e\u4e48\u626f\u90fd\u626f\u4e0d\u65ad","limit":null,"rarity":1}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.768fd4c7.chunk.js.map