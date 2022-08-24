"use strict";(self.webpackChunks12m_github_io=self.webpackChunks12m_github_io||[]).push([[573],{6855:function(e,t,a){var n=a(7294);var r=n.forwardRef((function(e,t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"}))}));t.Z=r},7059:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return E},P:function(){return y},S:function(){return M},_:function(){return o},a:function(){return c},b:function(){return s},g:function(){return d},h:function(){return l}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function s(e,t,a,n,r){return void 0===r&&(r={}),c({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:c({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,i,o,l){var s={};i&&(s.backgroundColor=i,"fixed"===a?(s.width=n,s.height=r,s.backgroundColor=i,s.position="relative"):("constrained"===a||"fullWidth"===a)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),o&&(s.objectFit=o),l&&(s.objectPosition=l);var d=c({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:c({opacity:t?0:1,transition:"opacity 500ms linear"},s)});return d}var u,m=["children"],p=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=o(e,m);return n.createElement(n.Fragment,null,n.createElement(p,c({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,l=void 0===i?"":i,s=e.shouldLoad,d=o(e,g);return n.createElement("img",c({},d,{decoding:"async",loading:r,src:s?t:void 0,"data-src":s?void 0:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,alt:l}))},v=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,s=o(e,h),d=s.sizes||(null==t?void 0:t.sizes),u=n.createElement(b,c({},s,t,{sizes:d,shouldLoad:l}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};b.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var w=["fallback"],y=function(e){var t=e.fallback,a=o(e,w);return t?n.createElement(v,c({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",c({},a))};y.displayName="Placeholder",y.propTypes={fallback:r.string,sources:null==(u=v.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return n.createElement(n.Fragment,null,n.createElement(v,c({},e)),n.createElement("noscript",null,n.createElement(v,c({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var x,L,k=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),c=3;c<n;c++)r[c-3]=arguments[c];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:i().object.isRequired,alt:k},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],N=new Set,j=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,s=e.style,d=e.backgroundColor,u=e.className,m=e.class,p=e.onStartLoad,f=e.onLoad,g=e.onError,h=o(e,S),b=i.width,v=i.height,w=i.layout,y=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(b,v,w),E=y.style,k=y.className,O=o(y,C),j=(0,n.useRef)(),T=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(u=m);var P=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,b,v);return(0,n.useEffect)((function(){x||(x=Promise.all([a.e(774),a.e(680)]).then(a.bind(a,8680)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=j.current.querySelector("[data-gatsby-image-ssr]");return n&&l()?(n.complete?(null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void N.add(T)):L&&N.has(T)?void 0:(x.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;j.current&&(j.current.innerHTML=n(c({isLoading:!0,isLoaded:N.has(T),image:i},h)),N.has(T)||(e=requestAnimationFrame((function(){j.current&&(t=r(j.current,T,N,s,p,f,g))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){N.has(T)&&L&&(j.current.innerHTML=L(c({isLoading:N.has(T),isLoaded:N.has(T),image:i},h)),null==p||p({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,n.createElement)(r,c({},O,{style:c({},E,s,{backgroundColor:d}),className:k+(u?" "+u:""),ref:j,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},T=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));T.propTypes=O,T.displayName="GatsbyImage";var P,_=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],I=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),A={src:i().string.isRequired,alt:k,width:I,height:I,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(P=T,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=o(e,_);return r&&console.warn(r),a?n.createElement(P,c({image:a},i)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=A},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},106:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children;return n.createElement("div",{className:"container mx-auto max-w-6xl px-4 xl:px-0"},t)}},2173:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children;return n.createElement("a",{href:"mailto:contact@smartalgorithm.co.jp",className:"btn justify-start bg-s12m-red border-s12m-red text-s12m-gray"},t)}},4232:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(1597),i=a(7059),c=a(6855);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=a(181);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(l){o=!0,r=l}finally{try{c||null==a.return||a.return()}finally{if(o)throw r}}return i}}(e,t)||(0,l.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(e){var t=e.color,a=void 0===t?"currentColor":t,r=e.direction,i=void 0===r?"left":r,c=e.distance,o=void 0===c?"md":c,l=e.duration,d=void 0===l?.4:l,u=e.easing,m=void 0===u?"cubic-bezier(0, 0, 0, 1)":u,p=e.hideOutline,f=void 0===p||p,g=e.label,h=e.lines,b=void 0===h?3:h,v=e.onToggle,w=e.render,y=e.rounded,E=void 0!==y&&y,x=e.size,L=void 0===x?32:x,k=e.toggle,O=e.toggled,S=s((0,n.useState)(!1),2),C=S[0],N=S[1],j=Math.max(12,Math.min(48,L)),T=Math.round((48-j)/2),P=j/12,_=Math.round(P),I=j/(b*(("lg"===o?.25:"sm"===o?.75:.5)+(3===b?1:1.25))),z=Math.round(I),A=_*b+z*(b-1),M=Math.round((48-A)/2),q=parseFloat((j/(3===b?"lg"===o?4.0425:"sm"===o?5.1625:4.6325:"lg"===o?6.7875:"sm"===o?8.4875:7.6675)-(P-_+(I-z))/(3===b?1:2)/(4/3)).toFixed(2)),R=Math.max(0,d),W={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(R,"s ").concat(m),userSelect:"none",width:"".concat(48,"px")},Z={background:a,height:"".concat(_,"px"),left:"".concat(T,"px"),position:"absolute"};f&&(W.outline="none"),E&&(Z.borderRadius="9em");var F=k||N,D=void 0!==O?O:C;return w({barHeight:_,barStyles:Z,burgerStyles:W,easing:m,handler:function(){F(!D),"function"==typeof v&&v(!D)},isLeft:"left"===i,isToggled:D,label:g,margin:z,move:q,time:R,topOffset:M,width:j})};function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}var f=function(e){return n.createElement(d,p({},e,{render:function(e){return n.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:m(m({},e.burgerStyles),{},{transform:"".concat(e.isToggled?"rotate(".concat(90*(e.isLeft?-1:1),"deg)"):"none")}),tabIndex:0},n.createElement("div",{style:m(m({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?-1:1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(e.move,"px)"):"none")})}),n.createElement("div",{style:m(m({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"scaleX(0)":"none")})}),n.createElement("div",{style:m(m({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?1:-1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(-1*e.move,"px)"):"none")})}))}}))},g=a(2173),h=function(){return n.createElement("ul",{className:"menu p-4 overflow-y-auto w-4/5 md:w-2/5 bg-base-100 text-base-content"},n.createElement("li",null,n.createElement(r.Link,{to:"/news/"},"お知らせ")),n.createElement("li",null,n.createElement(r.Link,{to:"/about/"},"会社案内")),n.createElement("li",null,n.createElement("a",{href:"#"},"お客様インタビュー",n.createElement(c.Z,{width:16}))),n.createElement("li",{className:"ml-4"},n.createElement(r.Link,{to:"/interviews/vook/"},"株式会社Vook様")),n.createElement("li",{className:"ml-4"},n.createElement(r.Link,{to:"/interviews/buildit/"},"株式会社ビルディット様")),n.createElement("li",{className:"ml-4"},n.createElement(r.Link,{to:"/interviews/codeorjp/"},"NPO法人みんなのコード様")),n.createElement("li",null,n.createElement(g.Z,null,"お問い合わせ")))},b=function(){return n.createElement("header",{className:"navbar fixed p-4 z-10"},n.createElement("div",{className:"container mx-auto max-w-6xl justify-between"},n.createElement(r.Link,{to:"/",className:"bg-base-100/80 rounded-box shadow-md px-4 py-2"},n.createElement(i.S,{placeholder:"none",src:"../images/logo/landscape.png",alt:"",height:64,__imageData:a(4488)})),n.createElement("div",{className:"bg-base-100/80 rounded-box shadow-md p-4"},n.createElement("label",{htmlFor:"my-drawer",className:"lg:hidden"},n.createElement(f,{toggled:!1,label:"menu"})),n.createElement("ul",{className:"hidden lg:flex menu menu-horizontal p-0"},n.createElement("li",null,n.createElement(r.Link,{to:"/news/"},"お知らせ")),n.createElement("li",null,n.createElement(r.Link,{to:"/about/"},"会社案内")),n.createElement("li",null,n.createElement("a",{href:"#"},"お客様インタビュー",n.createElement(c.Z,{width:16})),n.createElement("ul",{className:"bg-base-100 shadow-md rounded-box"},n.createElement("li",null,n.createElement(r.Link,{to:"/interviews/vook/"},"株式会社Vook様")),n.createElement("li",null,n.createElement(r.Link,{to:"/interviews/buildit/"},"株式会社ビルディット様")),n.createElement("li",null,n.createElement(r.Link,{to:"/interviews/codeorjp/"},"NPO法人みんなのコード様")))),n.createElement("li",null,n.createElement("a",{href:"mailto:contact@smartalgorithm.co.jp",className:"bg-s12m-red text-s12m-gray font-bold"},"お問い合わせ"))))))},v=function(){return n.createElement("footer",{className:"footer footer-center p-10 bg-base-200"},n.createElement("div",null,n.createElement(i.S,{placeholder:"none",src:"../images/logo/cube.png",alt:"株式会社スマートアルゴリズム",width:48,height:48,__imageData:a(7567)}),n.createElement("p",null,"© 2022 Smart Algorithm Co., Ltd.")))},w=function(e){var t=e.children;return n.createElement("div",{className:"drawer drawer-end"},n.createElement("input",{id:"my-drawer",type:"checkbox",className:"drawer-toggle"}),n.createElement("div",{className:"drawer-content"},n.createElement(b,null),n.createElement("main",null,t),n.createElement(v,null)),n.createElement("div",{className:"drawer-side"},n.createElement("label",{htmlFor:"my-drawer",className:"drawer-overlay"}),n.createElement(h,null)))}},2502:function(e,t,a){var n=a(7294),r="https://smartalgorithm.co.jp";t.Z=function(e){var t,a=e.pathname,i=e.title,c=e.description,o=e.image,l=e.children;return null!==(t=c)&&void 0!==t||(c="問題の本質を見抜き、ITの原理原則を理解した上で最適な解のために使いこなせる技術者こそ、ビジネス課題の根本的かつ迅速な解決に必要です。"),n.createElement(n.Fragment,null,n.createElement("title",null,i),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{name:"og:title",content:i}),n.createElement("meta",{name:"og:type",content:"website"}),n.createElement("meta",{name:"og:url",content:""+r+a}),o&&n.createElement("meta",{name:"og:image",content:""+r+o}),n.createElement("meta",{name:"og:description",content:c}),l)}},4488:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/e9201/landscape.png","srcSet":"/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/78ac0/landscape.png 37w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/d9a64/landscape.png 75w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/e9201/landscape.png 149w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/e4291/landscape.png 298w","sizes":"(min-width: 149px) 149px, 100vw"},"sources":[{"srcSet":"/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/c6fd7/landscape.webp 37w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/13934/landscape.webp 75w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/0b635/landscape.webp 149w,\\n/static/89a52f0e4c830e9e76e95c3eb7fd1ecc/290ae/landscape.webp 298w","type":"image/webp","sizes":"(min-width: 149px) 149px, 100vw"}]},"width":149,"height":64}')},7567:function(e){e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/32fc14bcc2c9c13cfbab37a27c0028f5/fcdb9/cube.png","srcSet":"/static/32fc14bcc2c9c13cfbab37a27c0028f5/29278/cube.png 12w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/2391d/cube.png 24w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/fcdb9/cube.png 48w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/e3fe2/cube.png 96w","sizes":"(min-width: 48px) 48px, 100vw"},"sources":[{"srcSet":"/static/32fc14bcc2c9c13cfbab37a27c0028f5/30aa9/cube.webp 12w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/4e704/cube.webp 24w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/e78b1/cube.webp 48w,\\n/static/32fc14bcc2c9c13cfbab37a27c0028f5/8ef24/cube.webp 96w","type":"image/webp","sizes":"(min-width: 48px) 48px, 100vw"}]},"width":48,"height":48}')}}]);
//# sourceMappingURL=ee19ddf3be56f4e2fd0079e0174ed6ae79c02111-3d020904644fb3ddfb0e.js.map