(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"jeden",image:"https://drive.google.com/uc?export=view&id=1W75NlvXNBUSNpzQNsQd_a5yh6y4GAnNI",clicked:"false"},{id:2,name:"dwa",image:"https://drive.google.com/uc?export=view&id=1c8nxcJZhaTe5sTjPEv6bCVYgfrBWZ6vK",clicked:"false"},{id:3,name:"trzy",image:"https://drive.google.com/uc?export=view&id=11as0Xv6SNzTPQzJljllA8DB0NX4-IM9l",clicked:"false"},{id:4,name:"cztery",image:"https://drive.google.com/uc?export=view&id=1jqA0FOYmPTvhD_ZDzxz7eroEl8U2dLHq",clicked:"false"},{id:5,name:"piec",image:"https://drive.google.com/uc?export=view&id=1WymCeFxKfPH3sMEs0DgDDpXn6AWTH1Xv",clicked:"false"},{id:6,name:"szesc",image:"https://drive.google.com/uc?export=view&id=1NNaoAbNSXlsttFfqjuYvWNnrLWM29Yt9",clicked:"false"},{id:7,name:"siedem",image:"https://drive.google.com/uc?export=view&id=1ME4H1bR7cr9G35_pKypZH6eqHf3DSeho",clicked:"false"},{id:8,name:"osiem",image:"https://drive.google.com/uc?export=view&id=1GZDXSZTqjF_3kyJ1IwAq6g96JyfxZWI0",clicked:"false"},{id:9,name:"dziewiec",image:"https://drive.google.com/uc?export=view&id=1RULmRpift-2hZwaGN4UIJLZzjk4oYEPC",clicked:"false"},{id:10,name:"dziesiec",image:"https://drive.google.com/uc?export=view&id=1oYvCWF32TOzXz8Ig8aHQXtryo9Wrw8n8",clicked:"false"},{id:11,name:"jedenancie",image:"https://drive.google.com/uc?export=view&id=1J74VrejXkPfkCnedkw_Lj_9tD0twk_21",clicked:"false"},{id:12,name:"dw",image:"https://drive.google.com/uc?export=view&id=1sUAbnF9jWDXg68FpZMB3gPRzc5FkLdZc",clicked:"false"}]},,,,,,,,function(e,t,i){e.exports=i(20)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),c=i.n(a),n=i(3),r=i.n(n),o=(i(15),i(4)),s=i(5),l=i(7),d=i(6),p=i(8);i(16);var m=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"puppy-container",onClick:function(){return e.puppyClicked(e.id)}},c.a.createElement("img",{alt:e.name,src:e.image})))};i(17);var u=function(e){return c.a.createElement("div",{className:"scoreCard"},c.a.createElement("h2",{className:"score"},"Current: ",e.current," -- High: ",e.high),c.a.createElement("h3",{className:"message"},e.message))};i(18);var g=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};i(19);var h=function(e){return c.a.createElement("h1",{className:"title"},e.children)},v=i(1),f=function(e){function t(){var e,i;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(i=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).shuffle=function(){for(var e=i.state.puppies,t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[a],e[a]=c}i.setState({puppies:e})},i.resetClicked=function(){var e=i.state.puppies.map(function(e){return e.clicked=!1,e});i.setState({puppies:e})},i.gameOver=function(e){i.resetClicked(),i.shuffle();var t={current:0,high:e?i.state.puppies.length:i.state.score.high,message:e?"winner, winner, chicken dinner, click any puppy to start new game":"sorry, you already clicked that one, click any puppy to start new game"};i.setState({score:t})},i.updateScore=function(){var e=i.state.score.current+1,t=e>i.state.score.high,a={current:e,high:t?e:i.state.score.high,message:t?"new high score - keep going":"Good, click another one"};i.setState({score:a}),e===i.state.puppies.length&&i.gameOver(!0)},i.puppyClicked=function(e){var t=i.state.puppies.find(function(t){return t.id===e});if(!0===t.clicked){i.gameOver(!1)}else t.clicked=!0,i.setState({puppies:v}),i.updateScore();i.shuffle()},i.state={puppies:v,score:{current:0,high:0,message:"Welcome!"}},i}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(h,null,"Play All Day"),c.a.createElement(u,{current:this.state.score.current,high:this.state.score.high,message:this.state.score.message}),this.state.puppies.map(function(t){return c.a.createElement(m,{puppyClicked:e.puppyClicked,id:t.id,key:t.id,image:t.image,clicked:t.clicked})}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.db13b472.chunk.js.map