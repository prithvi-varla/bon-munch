(this["webpackJsonpbon-munch"]=this["webpackJsonpbon-munch"]||[]).push([[13],{275:function(e,t,a){"use strict";var n=a(5),r=a(10),s=a(0),l=a.n(s),c=a(1),o=a.n(c),i=a(7),d=a.n(i),u=a(2),p={tag:u.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var t=e.className,a=e.cssModule,s=e.color,c=e.body,o=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.m)(d()(t,"card",!!o&&"text-white",!!c&&"card-body",!!s&&(i?"border":"bg")+"-"+s),a);return l.a.createElement(p,Object(n.a)({},b,{className:f,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},276:function(e,t,a){"use strict";var n=a(5),r=a(6),s=a(11),l=a(0),c=a.n(l),o=a(10),i=a(22),d=a(1),u=a.n(d),p=a(7),m=a.n(p),b=a(2),f=a(48),g={children:u.a.node,className:u.a.string,closeClassName:u.a.string,closeAriaLabel:u.a.string,cssModule:u.a.object,color:u.a.string,fade:u.a.bool,isOpen:u.a.bool,toggle:u.a.func,tag:b.q,transition:u.a.shape(f.a.propTypes),innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},v={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(i.a)({},f.a.defaultProps,{unmountOnExit:!0})};function h(e){var t=e.className,a=e.closeClassName,r=e.closeAriaLabel,s=e.cssModule,l=e.tag,d=e.color,u=e.isOpen,p=e.toggle,g=e.children,v=e.transition,h=e.fade,E=e.innerRef,N=Object(o.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(b.m)(m()(t,"alert","alert-"+d,{"alert-dismissible":p}),s),O=Object(b.m)(m()("close",a),s),j=Object(i.a)({},f.a.defaultProps,{},v,{baseClass:h?v.baseClass:"",timeout:h?v.timeout:0});return c.a.createElement(f.a,Object(n.a)({},N,j,{tag:l,className:y,in:u,role:"alert",innerRef:E}),p?c.a.createElement("button",{type:"button",className:O,"aria-label":r,onClick:p},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}h.propTypes=g,h.defaultProps=v;var E=h,N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!0},a.toggle=a.toggle.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return c.a.createElement(E,Object(n.a)({isOpen:this.state.isOpen,toggle:this.toggle},this.props))},t}(l.Component);t.a=N},278:function(e,t,a){"use strict";var n=a(5),r=a(10),s=a(0),l=a.n(s),c=a(1),o=a.n(c),i=a(7),d=a.n(i),u=a(2),p={tag:u.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,c=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(d()(t,"card-body"),a);return l.a.createElement(c,Object(n.a)({},o,{className:i,ref:s}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},280:function(e,t,a){"use strict";var n=a(5),r=a(10),s=a(0),l=a.n(s),c=a(1),o=a.n(c),i=a(7),d=a.n(i),u=a(2),p={color:o.a.string,pill:o.a.bool,tag:u.q,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),children:o.a.node,className:o.a.string,cssModule:o.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.color,c=e.innerRef,o=e.pill,i=e.tag,p=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),m=Object(u.m)(d()(t,"badge","badge-"+s,!!o&&"badge-pill"),a);return p.href&&"span"===i&&(i="a"),l.a.createElement(i,Object(n.a)({},p,{className:m,ref:c}))};m.propTypes=p,m.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=m},281:function(e,t,a){"use strict";var n=a(5),r=a(10),s=a(0),l=a.n(s),c=a(1),o=a.n(c),i=a(7),d=a.n(i),u=a(2),p={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:u.q,responsiveTag:u.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},m=function(e){var t=e.className,a=e.cssModule,s=e.size,c=e.bordered,o=e.borderless,i=e.striped,p=e.dark,m=e.hover,b=e.responsive,f=e.tag,g=e.responsiveTag,v=e.innerRef,h=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),E=Object(u.m)(d()(t,"table",!!s&&"table-"+s,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!p&&"table-dark",!!m&&"table-hover"),a),N=l.a.createElement(f,Object(n.a)({},h,{ref:v,className:E}));if(b){var y=Object(u.m)(!0===b?"table-responsive":"table-responsive-"+b,a);return l.a.createElement(g,{className:y},N)}return N};m.propTypes=p,m.defaultProps={tag:"table",responsiveTag:"div"},t.a=m},314:function(e,t,a){"use strict";var n=a(5),r=a(10),s=a(6),l=a(11),c=a(0),o=a.n(c),i=a(1),d=a.n(i),u=a(7),p=a.n(u),m=a(44),b=a(2),f={children:d.a.node,active:d.a.bool,disabled:d.a.bool,divider:d.a.bool,tag:b.q,header:d.a.bool,onClick:d.a.func,className:d.a.string,cssModule:d.a.object,toggle:d.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(b.n)(this.props,["toggle"]),s=a.className,l=a.cssModule,c=a.divider,i=a.tag,d=a.header,u=a.active,m=Object(r.a)(a,["className","cssModule","divider","tag","header","active"]),f=Object(b.m)(p()(s,{disabled:m.disabled,"dropdown-item":!c&&!d,active:u,"dropdown-header":d,"dropdown-divider":c}),l);return"button"===i&&(d?i="h6":c?i="div":m.href&&(i="a")),o.a.createElement(i,Object(n.a)({type:"button"===i&&(m.onClick||this.props.toggle)?"button":void 0},m,{tabIndex:e,role:t,className:f,onClick:this.onClick}))},t}(o.a.Component);g.propTypes=f,g.defaultProps={tag:"button",toggle:!0},g.contextType=m.a,t.a=g},437:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(15),s=a(17),l=a(18),c=a(19),o=a(0),i=a.n(o),d=a(29),u=a(14),p=a(37),m=a(36),b=a(92),f=a.n(b),g=a(276),v=a(280),h=a(268),E=a(269),N=a(260),y=a(314),O=a(263),j=a(264),x=a(265),k=a(275),C=a(121),I=a(266),T=a(278),P=a(281),w=a(88),M=a(87),R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={activeReviewPage:null,activeOrdersPage:null,activeGalleryPage:null,action:null,isOpen:!1,timer:null},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.fetchAllProducts(),this.props.fetchAllCategories("ALL_CATEGORIES");var t=setTimeout((function(){e.setState({isOpen:!1})}),3e3);this.setState({timer:t}),this.state.isOpen=!0}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"deleteButton",value:function(e){this.props.deleteProduct(e.currentTarget.id);Object.assign({},{id:e.currentTarget.id})}},{key:"editExistingProduct",value:function(e){this.props.history.push("/Products/NewEntry",{productId:e.currentTarget.id})}},{key:"addNewProduct",value:function(e){this.props.history.push("/Products/NewEntry")}},{key:"render",value:function(){var e,t=this,a=this.props.location.state;if(void 0==this.props.productInfo.data)return i.a.createElement("div",null,i.a.createElement(M.a,{title:"Product"}),i.a.createElement(w.a,null));void 0!=a&&(e=i.a.createElement(g.a,{color:"success",isOpen:this.state.isOpen},"Product information is successfully saved."));var n={header:"",body:""},r=void 0!=this.props.productInfo.data?this.props.productInfo.data:[];return n.header=["#","","Product Name","Category","Sub Category","Price","Actions"].map((function(e,t){return i.a.createElement("th",{key:"thead-".concat(t),className:"text-center"},e)})),r.length>0&&void 0!=this.props.categoryInfo.data?n.body=r.map((function(e,a){var n,r;if(null!=e.categoryId){var s=t.props.categoryInfo.data.find((function(t){return t.categoryId==e.categoryId}));if(null!=s){var l=s.parentCategoryId;if(null!=l){var c=t.props.categoryInfo.data.find((function(e){return e.categoryId==l}));n=null!=c?c.categoryName:null;var o=t.props.categoryInfo.data.find((function(t){return t.categoryId==e.categoryId}));r=null!=o?o.categoryName:null}else{var u=t.props.categoryInfo.data.find((function(t){return t.categoryId==e.categoryId}));n=null!=u?u.categoryName:null}}}return i.a.createElement("tr",{key:"thead-".concat(a)},i.a.createElement("td",{className:"text-center"},a+1),i.a.createElement("td",{className:"text-center"},i.a.createElement("div",{className:"d-block d-44 rounded-sm overflow-hidden"},i.a.createElement("img",{src:f.a,className:"img-fluid",alt:"..."}))),i.a.createElement("td",null,i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement("div",null,i.a.createElement("a",{onClick:function(e){return e.preventDefault()},className:"font-weight-bold text-black",title:"..."},e.name),i.a.createElement("span",{className:"text-black-50 d-block"},e.description)))),i.a.createElement("td",{className:"text-center"},i.a.createElement(v.a,{color:"info",className:"h-auto py-0 px-3"},n)),i.a.createElement("td",{className:"text-center"},i.a.createElement(v.a,{color:"success",className:"h-auto py-0 px-3"},r)),i.a.createElement("td",{className:"text-center"},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:"&dollar;"}}),e.price),i.a.createElement("td",{className:"text-center"},i.a.createElement(h.a,null,i.a.createElement(E.a,{caret:!0,color:"primary",className:"px-2 py-0 caret"},"Actions"),i.a.createElement(N.a,{right:!0,className:"dropdown-menu-xl overflow-hidden p-0"},i.a.createElement(y.a,{id:e.productId,onClick:t.editExistingProduct.bind(t)},i.a.createElement("span",null,"View details")),i.a.createElement(y.a,{divider:!0}),i.a.createElement(y.a,{id:e.productId,onClick:t.deleteButton.bind(t),className:"text-danger mx-3"},i.a.createElement("div",{className:"nav-link-icon"},i.a.createElement(d.a,{icon:["fas","times"]})),i.a.createElement("span",null,"Delete")))),i.a.createElement(h.a,null,i.a.createElement(N.a,{right:!0,className:"dropdown-menu-xl overflow-hidden p-0"},i.a.createElement(O.a,{pills:!0,className:"nav-primary flex-column pt-2 pb-3"},i.a.createElement(j.a,{className:"px-3"},i.a.createElement(x.a,{onClick:function(e){return e.preventDefault()},active:!0},i.a.createElement("span",null,"View details"))),i.a.createElement("li",{className:"dropdown-divider"}),i.a.createElement(j.a,null,i.a.createElement(x.a,{id:e.productId,onClick:t.deleteButton.bind(t),className:"text-danger mx-3"},i.a.createElement("div",{className:"nav-link-icon"},i.a.createElement(d.a,{icon:["fas","times"]})),i.a.createElement("span",null,"Delete"))))))))})):n.body=i.a.createElement("tr",null,i.a.createElement("td",{colSpan:n.header.length},"No Data")),i.a.createElement(o.Fragment,null,i.a.createElement(M.a,{title:"Products"}),e,i.a.createElement(k.a,{className:"card-box mb-5"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"card-header--title"},i.a.createElement("small",null,"Products"),i.a.createElement("b",null,"This table contains products for all categories")),i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement(C.a,{size:"sm",color:"primary",id:"AddEntryTooltip20",onClick:this.addNewProduct.bind(this)},i.a.createElement("span",{className:"btn-wrapper--icon"},i.a.createElement(d.a,{icon:["fas","plus"],className:"opacity-8 font-size-xs"}))),i.a.createElement(I.a,{target:"AddEntryTooltip20"},"Add new product"))),i.a.createElement(T.a,{className:"p-0"},i.a.createElement("div",{className:"table-responsive"},"  ",i.a.createElement(P.a,{hover:!0,striped:!0,className:"text-nowrap mb-0"},i.a.createElement("thead",{className:"thead-light"},i.a.createElement("tr",null,n.header)),i.a.createElement("tbody",null,n.body))),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"p-3 d-flex justify-content-center"}))))}}]),t}(i.a.Component);t.default=Object(u.connect)((function(e){return{productInfo:e.Product,categoryInfo:e.Categories}}),(function(e){return{deleteProduct:function(t){return e(Object(p.j)(t))},fetchAllProducts:function(){return e(Object(p.h)())},fetchAllCategories:function(t){return e(Object(m.i)(t))}}}))(R)}}]);
//# sourceMappingURL=13.d45dd85d.chunk.js.map