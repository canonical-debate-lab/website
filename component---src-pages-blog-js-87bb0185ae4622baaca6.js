(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(58);var n=a(0),r=a.n(n),o=a(154),i=a.n(o),c=a(182),l=a(160),s=a(167);t.default=function(e){var t=e.data,a=e.location,n=i()(t,"remark.posts");return r.a.createElement(s.a,{location:a},r.a.createElement(l.a,{site:i()(t,"site.meta")}),n.map(function(e,t){var a=e.post;return r.a.createElement(c.a,{data:a,options:{isIndex:!0},key:t})}))};var m="233697092"},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(181),i=a.n(o),c=a(154),l=a.n(c);t.a=function(e){var t=e.site,a=e.title,n=l()(t,"title");return a=a?a+" | "+n:n,r.a.createElement(i.a,{title:a,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+l()(t,"twitter")},{property:"og:title",content:a},{property:"og:type",content:"website"},{property:"og:description",content:l()(t,"description")},{property:"og:url",content:l()(t,"siteUrl")+"/profile"},{property:"og:image",content:l()(t,"siteUrl")+"/img/profile.jpg"}]})}},179:function(e,t,a){},182:function(e,t,a){"use strict";a(81),a(31),a(57);var n=a(42),r=a(154),o=a.n(r),i=a(0),c=a.n(i),l=a(190),s=a.n(l),m=a(177),p=a.n(m),d=a(7),u=a.n(d),y=function(e){function t(){return e.apply(this,arguments)||this}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.clientId&&(window.adsbygoogle=window.adsbygoogle||[]).push({})},a.render=function(){var e=this.props,t=e.clientId,a=e.slotId,n=e.format;return t?c.a.createElement("div",{className:"ad"},c.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":t,"data-ad-slot":a,"data-ad-format":n})):""},t}(c.a.Component),f=(a(178),a(179),t.a=function(e){var t=e.data,a=e.options,r=t.frontmatter,i=r.category,l=r.tags,s=r.description,m=r.title,d=r.path,u=r.date,y=r.image,v=a.isIndex,h=a.adsense,w=o()(t,"html"),k=v&&!!w.match("\x3c!--more--\x3e"),x=o()(y,"childImageSharp.fixed");return c.a.createElement("div",{className:"article",key:d},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"info"},c.a.createElement(n.Link,{style:{boxShadow:"none"},to:d},c.a.createElement("h1",null,m),c.a.createElement("time",{dateTime:u},u)),E({items:[i],primary:!0}),E({items:l})),c.a.createElement("div",{className:"content"},c.a.createElement("p",null,s),x?c.a.createElement(p.a,{fixed:x,style:{display:"block",margin:"0 auto"}}):""),c.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:k?g(w):w}}),k?b({path:d,label:"MORE",primary:!0}):"",f(v,h)))},function(e,t){return e?"":c.a.createElement(y,{clientId:t,slotId:"",format:"auto"})}),g=function(e){return(e=e.replace(/<blockquote>/g,'<blockquote class="blockquote">')).match("\x3c!--more--\x3e")&&void 0!==(e=e.split("\x3c!--more--\x3e"))[0]?e[0]:e},b=function(e){var t=e.path,a=e.label,r=e.primary;return c.a.createElement(n.Link,{className:"readmore",to:t},c.a.createElement("span",{className:"btn btn-outline-primary btn-block "+(r?"btn-outline-primary":"btn-outline-secondary")},a))},E=function(e){var t=e.items,a=e.primary;return s()(t,function(e,t){return c.a.createElement("span",{className:"badge "+(a?"badge-primary":"badge-secondary"),key:t},e)})}}}]);
//# sourceMappingURL=component---src-pages-blog-js-87bb0185ae4622baaca6.js.map