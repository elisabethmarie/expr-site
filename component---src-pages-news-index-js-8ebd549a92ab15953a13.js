(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"NewsPageQuery",function(){return i});var n=a(0),r=a.n(n),o=a(143),s=a(149);t.default=function(e){var t=e.data,a=e.location;return r.a.createElement(s.a,{location:a},r.a.createElement(o.a,{showChevron:"yes",showImage:"no",showCategories:"yes",showSearch:"yes",posts:t.allMarkdownRemark.edges}))};var i="3507428153"},143:function(e,t,a){"use strict";a.d(t,"a",function(){return d});a(49),a(48),a(144),a(145),a(75);var n=a(7),r=a.n(n),o=a(0),s=a.n(o),i=a(142),c=a(141),l=a.n(c),m=a(148),h=a.n(m),d=((new Date).getMonth(),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={search:"",currentFilter:"all",allPosts:t.props.posts.concat(),exam_details:[],questions:[],blockchain:[],refactoring:[],cryptography:[]},t.handleFilterClick=function(e){t.setState({currentFilter:e.target.dataset.filter})},t.handleSearch=function(e){var a=e.target.value,n=t.props.posts.filter(function(e){if(e.node.frontmatter.title.toLowerCase().includes(a.toLowerCase())||e.node.excerpt.toLowerCase().includes(a.toLowerCase()))return e});t.setState({search:a,allPosts:n,currentFilter:"all"})},t}r()(t,e);var a=t.prototype;return a.filter=function(e){var t=[],a=[],n=[],r=[],o=[];e.map(function(e){switch(e.node.frontmatter.tags){case"exam-details":t.push(e);break;case"questions":a.push(e);break;case"blockchain":n.push(e);break;case"cryptography":o.push(e);break;case"refactoring":r.push(e)}}),this.setState({exam_details:t,questions:a,blockchain:n,refactoring:r,cryptography:o})},a.componentWillMount=function(){this.filter(this.props.posts)},a.componentDidMount=function(){var e=this;document.addEventListener("keydown",function(t){"Escape"===t.code&&e.setState({search:""},function(){return e.handleSearch(t)})},!1)},a.render=function(){var e=this,t=this.state,a=t.allPosts,n=t.currentFilter;return s.a.createElement("div",null,"yes"===this.props.showCategories&&s.a.createElement("div",{className:"category-container"},s.a.createElement("button",{className:"category all "+("all"===n&&"active"),"data-filter":"all",onClick:this.handleFilterClick},"All posts"),this.state.exam_details.length>0&&s.a.createElement("button",{className:"category exam-details "+("exam-details"===n&&"active"),"data-filter":"exam-details",onClick:this.handleFilterClick},"Exam details"),this.state.questions.length>0&&s.a.createElement("button",{className:"category questions "+("questions"===n&&"active"),"data-filter":"questions",onClick:this.handleFilterClick},"Questions"),this.state.blockchain.length>0&&s.a.createElement("button",{className:"category blockchain "+("blockchain"===n&&"active"),"data-filter":"blockchain",onClick:this.handleFilterClick},"Blockchain"),this.state.cryptography.length>0&&s.a.createElement("button",{className:"category cryptography "+("cryptography"===n&&"active"),"data-filter":"cryptography",onClick:this.handleFilterClick},"Cryptography"),this.state.refactoring.length>0&&s.a.createElement("button",{className:"category refactoring "+("refactoring"===n&&"active"),"data-filter":"refactoring",onClick:this.handleFilterClick},"Refactoring")),"yes"===this.props.showSearch&&s.a.createElement("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},s.a.createElement("input",{type:"text",onChange:this.handleSearch,value:this.state.search,placeholder:"Search...",style:{width:"100%",maxWidth:"300px"}})),s.a.createElement("hr",null),s.a.createElement("ul",{className:"list-none m-t-1"},"all"===n&&a?a.map(function(t){return s.a.createElement("li",{key:t.node.id,className:"post-preview"},s.a.createElement(l.a,{key:t.node.id,to:t.node.frontmatter.path+"/"},s.a.createElement("h4",null,t.node.frontmatter.title),s.a.createElement("div",{className:"post-preview-content"},"yes"===e.props.showImage&&s.a.createElement("div",{className:"post-preview-image"},s.a.createElement("img",{src:Object(i.withPrefix)("/default-ogimage.png"),alt:t.node.frontmatter.title})),s.a.createElement("p",{className:"yes"===e.props.showImage?"post-preview-excerpt":""},t.node.excerpt)),s.a.createElement("div",{className:"post-preview-note"},s.a.createElement("div",null,s.a.createElement("strong",null,t.node.timeToRead," min")," read by"," ",t.node.frontmatter.author," on"," ",s.a.createElement("strong",null,t.node.frontmatter.date)," in"," ",s.a.createElement("strong",{className:"post-preview-tags category "+t.node.frontmatter.tags},t.node.frontmatter.tags)),"yes"===e.props.showChevron&&s.a.createElement("img",{src:h.a,style:{height:"24px",justifySelf:"flex-end"},alt:"Arrow"}))))}):this.state[n].map(function(t){return s.a.createElement("li",{key:t.node.id,className:"post-preview"},s.a.createElement(l.a,{key:t.node.id,to:t.node.frontmatter.path+"/"},s.a.createElement("h4",null,t.node.frontmatter.title),s.a.createElement("div",{className:"post-preview-content"},"yes"===e.props.showImage&&s.a.createElement("div",{className:"post-preview-image"},s.a.createElement("img",{src:Object(i.withPrefix)("/default-ogimage.png"),alt:t.node.frontmatter.title})),s.a.createElement("p",{className:"yes"===e.props.showImage?"post-preview-excerpt":""},t.node.excerpt)),s.a.createElement("div",{className:"post-preview-note"},s.a.createElement("div",null,s.a.createElement("strong",null,t.node.timeToRead," min")," read by"," ",t.node.frontmatter.author," on"," ",s.a.createElement("strong",null,t.node.frontmatter.date)," in"," ",s.a.createElement("strong",{className:"post-preview-tags category "+t.node.frontmatter.tags},t.node.frontmatter.tags)),"yes"===e.props.showChevron&&s.a.createElement("img",{src:h.a,style:{height:"24px",justifySelf:"flex-end"},alt:"Arrow"}))))})))},t}(o.Component))},144:function(e,t,a){"use strict";var n=a(6),r=a(50)(!0);n(n.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(51)("includes")},145:function(e,t,a){"use strict";var n=a(6),r=a(146);n(n.P+n.F*a(147)("includes"),"String",{includes:function(e){return!!~r(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},146:function(e,t,a){var n=a(76),r=a(26);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},147:function(e,t,a){var n=a(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}},148:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDYiIGhlaWdodD0iMzA2Ij48cGF0aCBkPSJNOTQuMzUgMGwtMzUuNyAzNS43TDE3NS45NSAxNTMgNTguNjUgMjcwLjNsMzUuNyAzNS43IDE1My0xNTN6Ii8+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-news-index-js-8ebd549a92ab15953a13.js.map