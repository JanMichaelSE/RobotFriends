(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(13),n(1)),s=n(2),i=n(4),u=n(3),h=n(5),m=function(e){var t=e.id,n=e.name,o=e.email;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"RobotFoto",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,o))))},d=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(m,{key:t[n].id,id:t[n].id,name:t[n].name,email:t[n].email})})))},b=function(e){var t=e.searchChange;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa2 b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})))},f=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children))},p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Sorry, server broke"):this.props.children}}]),t}(a.Component),E=(n(14),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearch=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?r.a.createElement("h1",{className:"tc f1"},"Loading Components"):r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearch}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{robots:o})))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.f6e03dcc.chunk.js.map