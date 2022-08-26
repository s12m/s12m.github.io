"use strict";(self.webpackChunks12m_github_io=self.webpackChunks12m_github_io||[]).push([[573],{6855:function(e,t,n){var a=n(7294);var r=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"}))}));t.Z=r},7059:function(e,t,n){n.d(t,{L:function(){return f},M:function(){return E},P:function(){return y},S:function(){return A},_:function(){return o},a:function(){return c},b:function(){return s},g:function(){return d},h:function(){return l}});var a=n(7294),r=(n(2369),n(5697)),i=n.n(r);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(n=i[a])>=0||(r[n]=e[n]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function s(e,t,n,a,r){return void 0===r&&(r={}),c({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:c({},r,{opacity:t?1:0})})}function d(e,t,n,a,r,i,o,l){var s={};i&&(s.backgroundColor=i,"fixed"===n?(s.width=a,s.height=r,s.backgroundColor=i,s.position="relative"):("constrained"===n||"fullWidth"===n)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),o&&(s.objectFit=o),l&&(s.objectPosition=l);var d=c({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:t?0:1,transition:"opacity 500ms linear"},s)});return d}var u,m=["children"],p=function(e){var t=e.layout,n=e.width,r=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,n=o(e,m);return a.createElement(a.Fragment,null,a.createElement(p,c({},n)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,n=e.srcSet,r=e.loading,i=e.alt,l=void 0===i?"":i,s=e.shouldLoad,d=o(e,g);return a.createElement("img",c({},d,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,alt:l}))},v=function(e){var t=e.fallback,n=e.sources,r=void 0===n?[]:n,i=e.shouldLoad,l=void 0===i||i,s=o(e,h),d=s.sizes||(null==t?void 0:t.sizes),u=a.createElement(b,c({},s,t,{sizes:d,shouldLoad:l}));return r.length?a.createElement("picture",null,r.map((function(e){var t=e.media,n=e.srcSet,r=e.type;return a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,sizes:d})})),u):u};b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var w=["fallback"],y=function(e){var t=e.fallback,n=o(e,w);return t?a.createElement(v,c({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",c({},n))};y.displayName="Placeholder",y.propTypes={fallback:r.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(v,c({},e)),a.createElement("noscript",null,a.createElement(v,c({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var x,L,k=function(e,t,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),c=3;c<a;c++)r[c-3]=arguments[c];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:i().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],N=new Set,j=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,s=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,f=e.onLoad,g=e.onError,h=o(e,S),b=i.width,v=i.height,w=i.layout,y=function(e,t,n){var a={},r="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}(b,v,w),E=y.style,k=y.className,O=o(y,C),j=(0,a.useRef)(),T=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var _=function(e,t,n){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,b,v);return(0,a.useEffect)((function(){x||(x=Promise.all([n.e(774),n.e(680)]).then(n.bind(n,8680)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,a=j.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void N.add(T)):L&&N.has(T)?void 0:(x.then((function(n){var a=n.renderImageToString,r=n.swapPlaceholderImage;j.current&&(j.current.innerHTML=a(c({isLoading:!0,isLoaded:N.has(T),image:i},h)),N.has(T)||(e=requestAnimationFrame((function(){j.current&&(t=r(j.current,T,N,s,p,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){N.has(T)&&L&&(j.current.innerHTML=L(c({isLoading:N.has(T),isLoaded:N.has(T),image:i},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,a.createElement)(r,c({},O,{style:c({},E,s,{backgroundColor:d}),className:k+(u?" "+u:""),ref:j,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},T=(0,a.memo)((function(e){return e.image?(0,a.createElement)(j,e):null}));T.propTypes=O,T.displayName="GatsbyImage";var _,P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],I=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:k,width:I,height:I,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(_=T,function(e){var t=e.src,n=e.__imageData,r=e.__error,i=o(e,P);return r&&console.warn(r),n?a.createElement(_,c({image:n},i)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=M},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,a=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,a=n,n=!0,r++):n&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),a=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},106:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children;return a.createElement("div",{className:"container mx-auto max-w-6xl px-4 xl:px-0"},t)}},298:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);var r=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}))})),i=function(e){var t=e.children,n=e.href;return a.createElement("a",{href:n,target:"_blank",className:"underline hover:underline"},t,a.createElement(r,{className:"inline ml-1",width:16}))}},2173:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children;return a.createElement("a",{href:"mailto:contact@smartalgorithm.co.jp",className:"btn justify-start bg-s12m-red border-s12m-red text-s12m-gray"},t)}},4232:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(7294),r=n(1597),i=n(7059),c=n(6855);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=n(181);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);c=!0);}catch(l){o=!0,r=l}finally{try{c||null==n.return||n.return()}finally{if(o)throw r}}return i}}(e,t)||(0,l.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e){var t=e.color,n=void 0===t?"currentColor":t,r=e.direction,i=void 0===r?"left":r,c=e.distance,o=void 0===c?"md":c,l=e.duration,d=void 0===l?.4:l,u=e.easing,m=void 0===u?"cubic-bezier(0, 0, 0, 1)":u,p=e.hideOutline,f=void 0===p||p,g=e.label,h=e.lines,b=void 0===h?3:h,v=e.onToggle,w=e.render,y=e.rounded,E=void 0!==y&&y,x=e.size,L=void 0===x?32:x,k=e.toggle,O=e.toggled,S=s((0,a.useState)(!1),2),C=S[0],N=S[1],j=Math.max(12,Math.min(48,L)),T=Math.round((48-j)/2),_=j/12,P=Math.round(_),I=j/(b*(("lg"===o?.25:"sm"===o?.75:.5)+(3===b?1:1.25))),z=Math.round(I),M=P*b+z*(b-1),A=Math.round((48-M)/2),R=parseFloat((j/(3===b?"lg"===o?4.0425:"sm"===o?5.1625:4.6325:"lg"===o?6.7875:"sm"===o?8.4875:7.6675)-(_-P+(I-z))/(3===b?1:2)/(4/3)).toFixed(2)),q=Math.max(0,d),Z={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(q,"s ").concat(m),userSelect:"none",width:"".concat(48,"px")},W={background:n,height:"".concat(P,"px"),left:"".concat(T,"px"),position:"absolute"};f&&(Z.outline="none"),E&&(W.borderRadius="9em");var H=k||N,F=void 0!==O?O:C;return w({barHeight:P,barStyles:W,burgerStyles:Z,easing:m,handler:function(){H(!F),"function"==typeof v&&v(!F)},isLeft:"left"===i,isToggled:F,label:g,margin:z,move:R,time:q,topOffset:A,width:j})};function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}var f=function(e){return a.createElement(d,p({},e,{render:function(e){return a.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:m(m({},e.burgerStyles),{},{transform:"".concat(e.isToggled?"rotate(".concat(90*(e.isLeft?-1:1),"deg)"):"none")}),tabIndex:0},a.createElement("div",{style:m(m({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?-1:1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(e.move,"px)"):"none")})}),a.createElement("div",{style:m(m({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"scaleX(0)":"none")})}),a.createElement("div",{style:m(m({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?1:-1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(-1*e.move,"px)"):"none")})}))}}))},g=n(2173),h=n(298),b=function(){return a.createElement("ul",{className:"menu p-4 overflow-y-auto w-4/5 md:w-2/5 bg-base-100 text-base-content"},a.createElement("li",null,a.createElement(r.Link,{to:"/news/"},"お知らせ")),a.createElement("li",null,a.createElement(r.Link,{to:"/about/"},"会社案内")),a.createElement("li",null,a.createElement("a",{href:"#"},"お客様インタビュー",a.createElement(c.Z,{width:16}))),a.createElement("li",{className:"ml-4"},a.createElement(r.Link,{to:"/interviews/vook/"},"株式会社Vook様")),a.createElement("li",{className:"ml-4"},a.createElement(r.Link,{to:"/interviews/buildit/"},"株式会社ビルディット様")),a.createElement("li",{className:"ml-4"},a.createElement(r.Link,{to:"/interviews/codeorjp/"},"NPO法人みんなのコード様")),a.createElement("li",null,a.createElement(g.Z,null,"お問い合わせ")))},v=function(){return a.createElement("header",{className:"navbar fixed p-4 z-10"},a.createElement("div",{className:"container mx-auto max-w-6xl justify-between"},a.createElement(r.Link,{to:"/",className:"bg-base-100/80 rounded-box shadow-md px-4 py-2"},a.createElement(i.S,{placeholder:"none",src:"../images/logo/landscape.png",alt:"",height:64,__imageData:n(4488)})),a.createElement("div",{className:"bg-base-100/80 rounded-box shadow-md p-4"},a.createElement("label",{htmlFor:"my-drawer",className:"lg:hidden"},a.createElement(f,{toggled:!1,label:"menu"})),a.createElement("ul",{className:"hidden lg:flex menu menu-horizontal p-0"},a.createElement("li",null,a.createElement(r.Link,{to:"/news/"},"お知らせ")),a.createElement("li",null,a.createElement(r.Link,{to:"/about/"},"会社案内")),a.createElement("li",null,a.createElement("a",{href:"#"},"お客様インタビュー",a.createElement(c.Z,{width:16})),a.createElement("ul",{className:"bg-base-100 shadow-md rounded-box"},a.createElement("li",null,a.createElement(r.Link,{to:"/interviews/vook/"},"株式会社Vook様")),a.createElement("li",null,a.createElement(r.Link,{to:"/interviews/buildit/"},"株式会社ビルディット様")),a.createElement("li",null,a.createElement(r.Link,{to:"/interviews/codeorjp/"},"NPO法人みんなのコード様")))),a.createElement("li",null,a.createElement(g.Z,null,"お問い合わせ"))))))},w=function(){return a.createElement("footer",{className:"footer footer-center p-10 bg-base-200"},a.createElement("div",null,a.createElement(i.S,{placeholder:"none",src:"../images/logo/cube.png",alt:"株式会社スマートアルゴリズム",width:48,height:48,__imageData:n(7567)}),a.createElement("p",null,"© 2022 Smart Algorithm Co., Ltd."),a.createElement("p",null,"本サイトのソースコードを ",a.createElement(h.Z,{href:"https://github.com/s12m/s12m.github.io"},"GitHubで公開")," しています")))},y=function(e){var t=e.children;return a.createElement("div",{className:"drawer drawer-end"},a.createElement("input",{id:"my-drawer",type:"checkbox",className:"drawer-toggle"}),a.createElement("div",{className:"drawer-content"},a.createElement(v,null),a.createElement("main",null,t),a.createElement(w,null)),a.createElement("div",{className:"drawer-side"},a.createElement("label",{htmlFor:"my-drawer",className:"drawer-overlay"}),a.createElement(b,null)))}},2502:function(e,t,n){var a=n(7294),r="https://smartalgorithm.co.jp";t.Z=function(e){var t,n=e.pathname,i=e.title,c=e.description,o=e.image,l=e.children;return null!==(t=c)&&void 0!==t||(c="問題の本質を見抜き、ITの原理原則を理解した上で最適な解のために使いこなせる技術者こそ、ビジネス課題の根本的かつ迅速な解決に必要です。"),a.createElement(a.Fragment,null,a.createElement("title",null,i),a.createElement("meta",{name:"description",content:c}),a.createElement("meta",{name:"og:title",content:i}),a.createElement("meta",{name:"og:type",content:"website"}),a.createElement("meta",{name:"og:url",content:""+r+n}),o&&a.createElement("meta",{name:"og:image",content:""+r+o}),a.createElement("meta",{name:"og:description",content:c}),l)}},4488:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/e9201/landscape.png","srcSet":"/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/78ac0/landscape.png 37w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/d9a64/landscape.png 75w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/e9201/landscape.png 149w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/e4291/landscape.png 298w","sizes":"(min-width: 149px) 149px, 100vw"},"sources":[{"srcSet":"/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/c6fd7/landscape.webp 37w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/13934/landscape.webp 75w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/0b635/landscape.webp 149w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/290ae/landscape.webp 298w","type":"image/webp","sizes":"(min-width: 149px) 149px, 100vw"}]},"width":149,"height":64}')},7567:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/32fc14bcc2c9c13cfbab37a27c0028f5/fcdb9/cube.png","srcSet":"/static/32fc14bcc2c9c13cfbab37a27c0028f5/29278/cube.png 12w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/2391d/cube.png 24w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/fcdb9/cube.png 48w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/e3fe2/cube.png 96w","sizes":"(min-width: 48px) 48px, 100vw"},"sources":[{"srcSet":"/static/32fc14bcc2c9c13cfbab37a27c0028f5/30aa9/cube.webp 12w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/4e704/cube.webp 24w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/e78b1/cube.webp 48w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/8ef24/cube.webp 96w","type":"image/webp","sizes":"(min-width: 48px) 48px, 100vw"}]},"width":48,"height":48}')}}]);
//# sourceMappingURL=ee19ddf3be56f4e2fd0079e0174ed6ae79c02111-08c8b89ab7e0ebe3f804.js.map