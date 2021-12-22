(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{119:function(t,e,r){},121:function(t,e,r){},122:function(t,e,r){},123:function(t,e,r){},124:function(t,e,r){},139:function(t,e,r){"use strict";r.r(e);var n,c=r(2),a=r.n(c),i=r(40),o=r.n(i),s=(r(93),r(5)),u=r(6),d=r(8),l=r(7),j=(r(94),r(20)),h=r(14),b=(r(95),r(16)),p=r(34),O=r(152),v=Object(O.a)(n||(n=Object(p.a)(["\n  query getCurrencies {\n    currencies\n  }\n"])));var f=r(38),y=r(151),m=r(149),x=r(150),g=new m.a({uri:"http://localhost:4000/",cache:new x.a}),C=r(0);function A(t,e){return function(r){Object(d.a)(c,r);var n=Object(l.a)(c);function c(){return Object(s.a)(this,c),n.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){var r=this;return Object(C.jsx)(y.a,{query:e,client:g,children:function(e){var n=e.loading,c=e.data,a=e.error;return n?null:a?Object(C.jsx)("p",{children:"error"}):c?Object(C.jsx)("div",{children:Object(C.jsx)(t,Object(f.a)(Object(f.a)({},r.props),{},{data:c}))}):void 0}})}}]),c}(c.PureComponent)}var N=r(42),w=r.n(N),k=document.getElementById("modal"),S=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(t){var n;return Object(s.a)(this,r),(n=e.call(this,t)).el=document.createElement("div"),n}return Object(u.a)(r,[{key:"componentDidMount",value:function(){k.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){k.removeChild(this.el)}},{key:"render",value:function(){return Object(i.createPortal)(this.props.children,this.el)}}]),r}(c.PureComponent),P=(r(119),A(function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).updateCurrency=function(e){t.props.changeCurrency(e.target.dataset.value),t.props.handleShowCurrencies()},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props.handleShowCurrencies,r=this.props.data.currencies;return Object(C.jsx)(S,{children:Object(C.jsx)(w.a,{onOutsideClick:e,children:Object(C.jsx)("ul",{className:"show-currencies",children:r.map((function(e){return Object(C.jsx)("li",{onClick:function(e){return t.updateCurrency(e)},"data-value":e,className:e,children:e},e)}))})})})}}]),r}(c.PureComponent),v)),I=Object(b.b)(null,(function(t){return{changeCurrency:function(e){return t(function(t){return{type:"CHANGE_CURRENCY",payload:t}}(e))}}}))(P),T=r(68);function E(t,e){var r=Object(T.a)(t),n=null;return t.forEach((function(t,r){t.id===e.id&&(n=r+1)})),n?r[n-1].product.qty+=1:r.push(e),r.quantity=M(r),{type:"ADD_ITEM",payload:r}}var M=function(t){var e=0;return t.forEach((function(t){var r=t.product;return e+=r.qty})),e},q=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={active:0},t.nextImage=function(){t.setState({active:t.state.active+1})},t.prevImage=function(){t.setState({active:t.state.active-1})},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this.state.active,e=this.props.gallery;return Object(C.jsxs)("div",{className:"cart-item-carousel",children:[e.length>1&&Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)("button",{disabled:0===t,onClick:this.prevImage,children:"<"}),Object(C.jsx)("button",{disabled:t===e.length-1,onClick:this.nextImage,children:">"})]}),Object(C.jsx)("img",{src:e[t],alt:"active-img"})]})}}]),r}(c.PureComponent),D=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.prodQty,r=t.updateQty,n=t.id,c=t.cart;return Object(C.jsxs)("div",{className:"cart-item-quantity",children:[Object(C.jsx)("button",{onClick:function(){return r("PLUS",n,c)},children:"+"}),Object(C.jsx)("p",{children:e}),Object(C.jsx)("button",{disabled:0===e,onClick:function(){return r("MINUS",n,c)},children:"-"})]})}}]),r}(c.PureComponent),R=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.prodQty,r=t.updateQty,n=t.removeItem,c=t.id,a=t.cart,i=t.gallery;return Object(C.jsxs)("div",{className:"cart-item-qtyimg",children:[Object(C.jsx)(D,{prodQty:e,updateQty:r,id:c,cart:a}),Object(C.jsx)(q,{gallery:i}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:function(){return n(a,c)},className:"remove",children:"X"})})]})}}]),r}(c.Component),F=Object(b.b)(null,(function(t){return{updateQty:function(e,r,n){return t(function(t,e,r){var n=Object(T.a)(r),c=null;return r.forEach((function(t,r){t.id===e&&(c=r)})),"PLUS"===t?n[c].product.qty+=1:"MINUS"===t&&(n[c].product.qty-=1),n.quantity=M(n),{type:"UPDATE_QTY",payload:n}}(e,r,n))},removeItem:function(e,r){return t(function(t,e){var r=t.filter((function(t){return t.id!==e}));return r.quantity=M(r),{type:"REMOVE_ITEM",payload:r}}(e,r))}}}))(R),U=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).renderSwatch=function(t){return console.log(t.displayValue),Object(C.jsx)("p",{className:t.displayValue},t.id)},t.renderAttributes=function(e){return"swatch"===e.type?(console.log(e.type),t.renderSwatch(e)):Object(C.jsxs)("p",{children:[e.id,": ",e.value]},e.id)},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props,r=e.brand,n=e.prodName,c=e.currency,a=e.attributes,i=e.itemPrice;return Object(C.jsxs)("div",{className:"cart-item-description",children:[Object(C.jsx)("h3",{children:r}),Object(C.jsx)("h3",{children:n}),Object(C.jsx)("h4",{className:c,children:i}),a.map((function(e){return t.renderAttributes(e)}))]})}}]),r}(c.Component),B=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).getItemPrice=function(e){var r=e.prices,n=t.props.currency;return r.filter((function(t){return t.currency===n}))[0].amount},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.currency,r=t.cart,n=t.id,c=t.product,a=this.getItemPrice(c);return Object(C.jsxs)("div",{className:"cart-item",children:[Object(C.jsx)(U,{itemPrice:a,prodName:c.name,productDescription:c.description,currency:e,attributes:c.attributes,brand:c.brand}),Object(C.jsx)(F,{cart:r,prodQty:c.qty,gallery:c.gallery,id:n})]})}}]),r}(c.PureComponent),V=Object(b.b)((function(t){return{currency:t.currency}}))(B),Y=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).renderButtons=function(e){var r=t.props.showCart;return e?Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)(j.b,{to:"/cart",onClick:r,children:"view bag"}),Object(C.jsx)(j.b,{to:"/checkout",children:"checkout"})]}):Object(C.jsx)(j.b,{to:"/checkout",children:"checkout"})},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.currency,r=t.isOverlay,n=t.totalAmount;return Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsxs)("div",{className:"cart-overlay-total",children:[Object(C.jsx)("h3",{children:"Total"}),Object(C.jsx)("h3",{className:e,children:n})]}),Object(C.jsx)("div",{className:"cart-overlay-actions",children:this.renderButtons(r)})]})}}]),r}(c.PureComponent),G=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).getTotalAmount=function(){var e=t.props,r=e.currency,n=e.cart,c=0;return n.forEach((function(t){var e=t.product,n=e.prices.filter((function(t){return t.currency===r}));c+=n[0].amount*e.qty})),c.toFixed(2)},t.renderNoItems=function(){return Object(C.jsx)("h2",{children:"No items in the bag"})},t.renderItems=function(){var e=t.props,r=e.currency,n=e.showCart,c=e.cart,i=e.isOverlay,o=t.getTotalAmount();return c.length||t.renderNoItems(),Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsxs)("h2",{children:["My Bag, ",c.quantity," item/s"]}),c.map((function(t,e){var r=t.product,n=t.id;return Object(C.jsx)(V,{product:r,id:n,cart:c},"".concat(r,"-").concat(e))})),Object(C.jsx)(Y,{totalAmount:o,showCart:n,isOverlay:i,currency:r})]})},t}return Object(u.a)(r,[{key:"render",value:function(){return Object(C.jsx)("div",{children:this.renderItems()})}}]),r}(c.Component),K=Object(b.b)((function(t){return{cart:t.cart,currency:t.currency}}))(G),W=(r(78),function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props.showCart;return Object(C.jsx)(S,{children:Object(C.jsx)("div",{className:"overlay",children:Object(C.jsx)(w.a,{onOutsideClick:t,children:Object(C.jsx)("div",{className:"cart-overlay",children:Object(C.jsx)(K,{isOverlay:!0,showCart:t})})})})})}}]),r}(c.PureComponent));function Q(t){return{type:"SHOW_OVERLAY",payload:t}}var X,L,z,H=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={showCurrencies:!1,showModal:!1,quantity:0},t.handleShowCurrencies=function(){t.setState({showCurrencies:!t.state.showCurrencies})},t.handleShowCart=function(){var e=t.props,r=e.overlay,n=e.changeOverlay;t.setState({showModal:!t.state.showModal}),n(!r)},t.renderCartQuantity=function(){var e=t.props.cart,r=e.length,n=e.quantity;if(r)return Object(C.jsx)("div",{className:"cart-overlay-qty",children:n})},t.renderCurrencies=function(){var e=t.state.showCurrencies;if(e)return Object(C.jsx)(I,{handleShowCurrencies:t.handleShowCurrencies,show:e})},t.renderCartOverlay=function(){if(t.state.showModal)return Object(C.jsx)(W,{showCart:t.handleShowCart})},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props.currency,r=this.state.showCurrencies;return Object(C.jsxs)("ul",{className:"navActions",children:[Object(C.jsx)("li",{onClick:function(){return t.handleShowCurrencies()},className:"".concat(e," "),children:Object(C.jsx)("div",{className:"dropdown ".concat(r?"dropdown-active":"")})}),Object(C.jsx)("div",{className:"nav-toggler",children:this.renderCurrencies()}),Object(C.jsx)("li",{className:"cart-logo",onClick:this.handleShowCart,children:this.renderCartQuantity()}),Object(C.jsx)("div",{className:"cart-toggler",children:this.renderCartOverlay()})]})}}]),r}(c.PureComponent),J=Object(b.b)((function(t){return{cart:t.cart,currency:t.currency,overlay:t.overlay}}),(function(t){return{changeOverlay:function(e){return t(Q(e))}}}))(H),Z=Object(O.a)(X||(X=Object(p.a)(["\n  query getCategories {\n    categories {\n      name\n    }\n  }\n"]))),_=A(function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props.data.categories,e=this.props,r=e.active,n=e.handleShowCategories;return Object(C.jsx)("ul",{className:"navItems ".concat(r),children:t.map((function(t){return Object(C.jsx)("li",{children:Object(C.jsx)(j.c,{onClick:function(){return n(!1)},activeClassName:"active",to:"/products/category-".concat(t.name),children:t.name})},t.name)}))})}}]),r}(c.PureComponent),Z),$=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={showCategories:!1},t.handleShowCategories=function(e){t.setState({showCategories:e})},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.state.showCategories;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"burger ".concat(e?"burger-active":""),onClick:function(){return t.handleShowCategories(!e)},children:[Object(C.jsx)("div",{className:"line-1"}),Object(C.jsx)("div",{className:"line-2"}),Object(C.jsx)("div",{className:"line-3"})]}),Object(C.jsx)(_,{handleShowCategories:this.handleShowCategories,active:" ".concat(e?"navbar-active":"")})]})}}]),r}(c.PureComponent),tt=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(C.jsxs)("nav",{children:[Object(C.jsx)($,{}),Object(C.jsx)(j.b,{to:"/products/category-all",children:Object(C.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVWSURBVHgB7Vg7bFxFFL13ds06sZ3dFRgsF+yDCoEEpkChytKABDQmOIIGBDVIVKEBCUcCpQ0FokNxjYhosEiD3PFxYTo+RWKkCAUb8DqOvU7iN5f53fk871vvEqXbsex5783vzLn3njtjgFEZlVEZuuBRHWbW3srGoPYR3IsiqLMjb5/rPH2x069bX5BnNj6Z2+zeaP+z171APQaSr8MTFDr6FqL0oysPT0y9cqw2sXZp9sM/oKRUoU8Zq4rvZqcaTfVrgSGCVIsxQOCFCVKAVASlP6DdTKGvaroEJNfV46NlOAT0L834RS8s0JKPCUBXO3AUtxE5TClAojAWJTX7gSgF+frW+SwBGAFNgZFn1JiW0gFUABRYdpshUvulxvzVxQYMC1KALAwKq1q2IIDzQCgAYkbD7vw31A7j+9kmUavWy7GUNRyIxiGMDIIXdd+1A+Ahs3JUUgSYfBAxm/ytcuugOTRIWcVkZ3ZyCAsycF4ULEAkH1aeSWYvNj0yfjeves/KsJRGN0p8hIQaL6UnJADWC8oAlJlzgUGFCLb9Y3eBSCHs5xzk8OYmoQYRBYBRgHDEQuKXwT/TCLbMT4jxMM4vEubtF+HlEiRlk2IwPG8CFiDWRN/mx1gpf25iDr6YfR/aqvZ74EAKu/kfTCK2zAxeLpxvGVGGnowgJzAK/tg+/hQsTJ2CcxtLcOZE2wCGSDPRu0QlGxokSGwk5ubF1U9WfSiVIg809NEDtYkZ4K7ch8W/FNB6G7KxGWYCPAUkh9dJRDUoNrVjZlrU4Y3J5wMwCOaXKphCRAPs5l14989PYfOgA2cfeM3U71y7AOu3r0Oio1IrGGVlWEqjm3JoWEaiyFRFMzJdqadCHW2CwbNesi7qcV5/qBBgxu44PJNqkSzOxSTtbGYxsKZ0HWMyPZA4PT5RywyLLD9FF0HtVpKGAzm/tdiIWeGAYPZW93+HU+NP+m+xBnJlg8zW7ck5+Gn3l0TIOTn42AQYDuT4fq3Bk0FkNqZs+eaP8NLkyUPmTrKJyzAPVhswrX5X936N+jnLQJArPeb0lY9bA4PEKrXMHmWQHoqC6G9lutXub/Bm/YXEF5O8bGoJCyqaV3bWTBDZSXi7qU+rcypV9vaaA4Okgxy9VyW+Bl4DlzqXla+1YEFpXxzRzMxxUYO373/R+PDKzs/JPHrzyUnIDaaK6GnykugWGRg5ScGBY8pEvPrR+qdBfjb7Hny5vQKbd+xVpXXfDLx84ln4Zvt7WN7+IWGb3IM3t3MLNadihVoDgyRUeVtyagnAfLs7XNxULC1tXYblG8pHp07CM8ceM8yt37oOZ699rp67KThKA4YDS7+pGUkgDM4k5ipvY0hxDNSbxlXsgxt3tuDiv9/6KMdIJ4snIjaMSa+Roxv/ktAcGKS6yLRARu9UeEi0TkOVkX9FQVEACIU0yunTtwsY3NzqCNlACj5j16VIhaKFdUILDGMh63gcsdSQPY2o49nR9/5SkChtsrdrG1TOr82lySI2BKq/+omlxQ1w6RRNRW4jHjlishnemk6MgFkvPL0lCHXehti6Biirn/Ind6WJkjp502HKNpkDBHjWiGKA8Rxlh4zeYm7zKMWXJ3ta8WerIMnh8EoyXCkwsHo4rdtF2D8c47YMHt1qdMb7NXxITZ61uVV50t/cgg6C1I0Y6Z8FFF/g0F13/EYgMOn8qT4Qk/qSbs7fxKzZgEHne8RBxGwRC7On3mce8m2JSSFizoBDuxfzfPrKB60ipp7R9erVxXnhqDf//ckp9JPF3jnkORxZZB4GiopI3rlUBHa+evz81zAqozIqd1/+A2GBNCrq0DP1AAAAAElFTkSuQmCC",className:"App-logo",alt:"logo"})}),Object(C.jsx)(J,{})]})}}]),r}(c.PureComponent),et=Object(h.g)(tt),rt=(r(121),Object(O.a)(L||(L=Object(p.a)(["\n  query getProductsByCategory($category: CategoryInput!) {\n    category(input: $category) {\n      products {\n        name\n        brand\n        id\n        inStock\n        gallery\n        description\n        category\n        attributes {\n          id\n          name\n          type\n          items {\n            displayValue\n            value\n            id\n          }\n        }\n        prices {\n          currency\n          amount\n        }\n      }\n    }\n  }\n"])))),nt=(r(122),function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={stock:t.props.product.inStock},t.renderOutOfStock=function(t){if(!t)return Object(C.jsx)("h1",{children:"OUT OF STOCK"})},t.renderPrice=function(){var e=t.props.product.prices,r=t.props.currency,n=e.filter((function(t){return t.currency===r}))[0].amount;return Object(C.jsx)("p",{className:"".concat(r," product-price"),children:n})},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this.state.stock,e=this.props.product;return Object(C.jsx)(j.b,{to:"/products/".concat(e.category,"/").concat(e.id),children:Object(C.jsxs)("div",{className:"product-card ".concat(t?"":"no-stock"),children:[this.renderOutOfStock(t),Object(C.jsx)("img",{src:e.gallery[0],alt:"main-img"}),Object(C.jsxs)("div",{children:[Object(C.jsx)("p",{className:"product-name",children:e.name}),Object(C.jsx)("p",{className:"product-brand",children:e.brand}),this.renderPrice()]})]})})}}]),r}(c.PureComponent)),ct=Object(b.b)((function(t){return{currency:t.currency}}))(nt),at=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={selected:0},t.handleSelect=function(e){t.props.addAttribute(e),t.setState({selected:e.target.id})},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props,r=e.attribute,n=e.index,c=this.state.selected,a="swatch"===r.type;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("h4",{children:[r.id,":"]}),Object(C.jsx)("form",{children:r.items.map((function(e){return Object(C.jsx)("input",{"data-order":n,onClick:function(e){return t.handleSelect(e)},type:"button",className:"".concat(a?"".concat(e.id):""," ").concat(c===e.id?"selected":""),name:r.id,id:e.id,"data-type":r.type,value:e.value,required:!0},e.id)}))})]})}}]),r}(c.PureComponent),it=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.currency,r=t.price,n=t.addToCart,c=t.product,i=t.showModal;return Object(C.jsxs)(a.a.Fragment,{children:[Object(C.jsx)("h4",{children:"Price:"}),Object(C.jsx)("h3",{className:e,children:r}),Object(C.jsxs)("div",{className:"action-buttons",children:[Object(C.jsx)("button",{onClick:function(t){return n(t,c)},children:"Add To Cart"}),Object(C.jsx)("button",{onClick:i,children:"Cancel"})]}),Object(C.jsx)("p",{children:"Please select all attributes"})]})}}]),r}(c.Component),ot=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={attributes:[],allAttributesSelected:!1},t.addAttribute=function(e){e.preventDefault();var r=t.state.attributes.filter((function(t){return t.id!==e.target.name}));r.push({index:e.target.dataset.order,id:e.target.name,value:e.target.value,type:e.target.dataset.type}),r.sort((function(t,e){return t.index-e.index})),t.setState({attributes:r})},t.getPrice=function(){var e=t.props.modalProduct.product.prices,r=t.props.currency;return e.filter((function(t){return t.currency===r}))[0].amount},t.handleAddToCart=function(e,r){var n=t.state.attributes,c=Object(f.a)({},r);e.preventDefault();var a=t.props.cart;if(n.length!==r.attributes.length)t.setState({allAttributesSelected:!0});else{c.attributes=n,c.qty=1;var i=t.newItemAttributesToString(c.attributes);t.props.addItem(a,{product:c,id:c.id+i+c.qty}),t.props.showModal()}},t.newItemAttributesToString=function(t){var e=[];return t.forEach((function(t){e.push(t.value)})),e.toString()},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props.modalProduct.product,r=this.props,n=r.currency,c=r.showModal,a=this.getPrice();return Object(C.jsx)(S,{children:Object(C.jsx)("div",{className:"overlay",children:Object(C.jsx)(w.a,{onOutsideClick:c,children:Object(C.jsxs)("div",{className:"attributes-container add-modal",children:[e.attributes.map((function(e,r){return Object(C.jsx)(at,{index:r,addAttribute:t.addAttribute,attribute:e},e.id)})),Object(C.jsx)(it,{currency:n,price:a,showModal:c,addToCart:this.handleAddToCart,product:e})]})})})})}}]),r}(c.Component),st=Object(b.b)((function(t){return{cart:t.cart,currency:t.currency}}),(function(t){return{changeOverlay:function(e){return t(Q(e))},addItem:function(e,r){return t(E(e,r))}}}))(ot),ut=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).renderModal=function(e){if(e){var r=t.props,n=r.modalProduct,c=r.addToCart;return Object(C.jsx)(st,{showModal:c,modalProduct:n})}},t.renderAddCart=function(e,r){var n=t.props.addToCart;if(e)return Object(C.jsx)("div",{onClick:function(){return n({product:r})},className:"add-cart"},r.id)},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props,r=e.showAddToCart,n=e.products;return Object(C.jsxs)("div",{className:"products-container",children:[n.map((function(e){return Object(C.jsxs)("div",{className:"product-card-container",children:[t.renderAddCart(e.inStock,e),Object(C.jsx)(ct,{product:e},e.name)]},e.id)})),this.renderModal(r)]})}}]),r}(c.PureComponent),dt=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={category:"all"===t.props.match.params.category?"":t.props.match.params.category,showAddToCart:!1,categoryName:"all",modalProduct:[]},t.handleAddToCart=function(e){var r=t.props,n=r.changeOverlay,c=r.overlay,a=t.state.showAddToCart;t.setState({showAddToCart:!a,modalProduct:e}),n(!c)},t.renderItems=function(e,r,n){if(r){var c=r.category.products,a=t.state,i=a.showAddToCart,o=a.modalProduct;return Object(C.jsx)(ut,{products:c,addToCart:t.handleAddToCart,showAddToCart:i,modalProduct:o})}t.renderNoItems(e,n)},t.renderNoItems=function(t,e){return t?Object(C.jsx)(ut,{}):e?Object(C.jsx)("p",{children:"error"}):void 0},t}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(){var t=this.props.match.params.category;this.state.category!==t&&("all"===t?this.setState({category:"",categoryName:"all"}):this.setState({category:t,categoryName:t}))}},{key:"render",value:function(){var t=this,e=this.state,r=e.category,n=e.categoryName;return Object(C.jsx)(y.a,{client:g,query:rt,variables:{category:{title:"".concat(r)}},children:function(e){var r=e.loading,c=e.data,a=e.error;return Object(C.jsxs)("div",{className:"category-page-container",children:[Object(C.jsxs)("h2",{children:["Category - ",n]}),t.renderItems(r,c,a)]})}})}}]),r}(c.PureComponent),lt=Object(h.g)(dt),jt=Object(b.b)((function(t){return{overlay:t.overlay}}),(function(t){return{changeOverlay:function(e){return t(Q(e))}}}))(lt),ht=(r(123),function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this;return Object(C.jsx)(S,{children:Object(C.jsx)("div",{className:"attribute-modal-overlay overlay",children:Object(C.jsxs)("div",{className:"modal-container",children:[Object(C.jsx)("h1",{children:"All attributes must be selected"}),Object(C.jsx)("button",{onClick:function(){return t.props.toggleModal(!1)},children:"Close"})]})})})}}]),r}(c.PureComponent)),bt=Object(O.a)(z||(z=Object(p.a)(["\n  query getProductById($id: String!) {\n    product(id: $id) {\n      name\n      id\n      brand\n      inStock\n      gallery\n      description\n      category\n      attributes {\n        id\n        name\n        type\n        items {\n          displayValue\n          value\n          id\n        }\n      }\n      prices {\n        currency\n        amount\n      }\n    }\n  }\n"]))),pt=function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center",children:Object(C.jsx)("div",{className:"spinner-border",role:"status",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},Ot=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={active:0},t.handleActive=function(e){t.setState({active:e.target.dataset.index})},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props.product.gallery,r=this.state.active;return Object(C.jsx)("div",{children:Object(C.jsxs)("div",{className:"imgs-container",children:[Object(C.jsx)("div",{className:"carousel",children:e.map((function(e,r){return Object(C.jsx)("img",{onClick:function(e){return t.handleActive(e)},"data-index":r,src:e,alt:"img-".concat(r)},e)}))}),Object(C.jsx)("img",{className:"active-img",src:e[r],alt:"img-".concat(r)})]})})}}]),r}(c.PureComponent),vt=(r(124),function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).state={attributes:[]},t.addAttribute=function(e){e.preventDefault();var r=e.target,n=r.dataset,c=r.name,a=r.value,i=r.id,o=t.state.attributes.filter((function(t){return t.id!==e.target.name}));o.push({index:n.order,id:c,value:a,type:n.type,displayValue:i}),o.sort((function(t,e){return t.index-e.index})),t.setState({attributes:o})},t.getPrice=function(){var e=t.props.product.prices,r=t.props.currency;return e.filter((function(t){return t.currency===r}))[0].amount},t.handleAddToCart=function(e,r){var n=t.state.attributes,c=Object(f.a)({},r);e.preventDefault();var a=t.props.cart;if(n.length!==r.attributes.length)t.props.toggleModal(!0);else{c.attributes=n,c.qty=1;var i=t.newItemAttributesToString(c.attributes);t.props.addItem(a,{product:c,id:c.id+i+c.qty})}},t.newItemAttributesToString=function(t){var e=[];return t.forEach((function(t){e.push(t.value)})),e.toString()},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props,r=e.currency,n=e.product,c=this.getPrice(),a=n.inStock?"Add To Cart":"No Stock";return Object(C.jsxs)("div",{className:"attributes-container",children:[n.attributes.map((function(e,r){return Object(C.jsx)(at,{index:r,addAttribute:t.addAttribute,attribute:e},e.id)})),Object(C.jsx)("h4",{children:"Price:"}),Object(C.jsx)("h3",{className:r,children:c}),Object(C.jsx)("button",{disabled:!n.inStock,onClick:function(e){return t.handleAddToCart(e,n)},children:a})]})}}]),r}(c.PureComponent)),ft=Object(b.b)((function(t){return{cart:t.cart,currency:t.currency}}),(function(t){return{addItem:function(e,r){return t(E(e,r))}}}))(vt),yt=r(85),mt=r(86),xt=r.n(mt),gt=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(s.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).purifyDescription=function(t){var e=xt.a.sanitize(t);return Object(yt.a)(e)},t}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props,e=t.product,r=t.toggleModal,n=this.props.product,c=n.brand,a=n.name,i=this.purifyDescription(e.description);return Object(C.jsxs)("div",{className:"product-description",children:[Object(C.jsx)("h2",{children:c}),Object(C.jsx)("h3",{children:a}),Object(C.jsx)(ft,{toggleModal:r,product:e,handleAddToCart:this.handleAddToCart}),i]})}}]),r}(c.PureComponent),Ct=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(t){var n;return Object(s.a)(this,r),(n=e.call(this,t)).toggleModal=function(t){n.setState({showModal:t})},n.renderItems=function(t,e,r){var c=n.state.showModal;if(e){var a=e.product;return Object(C.jsxs)("div",{className:"product-page-container",children:[Object(C.jsx)(Ot,{product:a}),Object(C.jsx)(gt,{product:a}),c?Object(C.jsx)(ht,{toggleModal:n.toggleModal}):null]})}n.renderNoItems(t,r)},n.renderNoItems=function(t,e){return e?Object(C.jsx)("p",{children:"error"}):t?Object(C.jsx)(pt,{}):void 0},n.state={prodId:n.props.match.params.id,showModal:!1,showAddToCart:!1},n}return Object(u.a)(r,[{key:"render",value:function(){var t=this,e=this.props.match.params.id;return Object(C.jsx)(y.a,{client:g,query:bt,variables:{id:"".concat(e)},children:function(e){var r=e.loading,n=e.data,c=e.error;return Object(C.jsx)(a.a.Fragment,{children:t.renderItems(r,n,c)})}})}}]),r}(c.PureComponent),At=Object(h.g)(Ct),Nt=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"cart",children:[Object(C.jsx)("h2",{children:"CART"}),Object(C.jsx)(K,{isOverlay:!1})]})}}]),r}(c.PureComponent),wt=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"notfound",children:[Object(C.jsx)("h1",{children:"Not Found"}),Object(C.jsxs)("h2",{children:["Return to ",Object(C.jsx)(j.b,{to:"/",children:"Home"})]})]})}}]),r}(c.PureComponent),kt=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(){return Object(s.a)(this,r),e.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var t=this.props.overlay;return Object(C.jsxs)(j.a,{children:[Object(C.jsx)("header",{children:Object(C.jsx)(et,{})}),Object(C.jsx)("div",{className:"content ".concat(t?"overlay-active":""),children:Object(C.jsxs)(h.d,{children:[Object(C.jsx)(h.b,{path:"/products/category-:category",children:Object(C.jsx)(jt,{})}),Object(C.jsx)(h.b,{path:"/products/:category/:id",children:Object(C.jsx)(At,{})}),Object(C.jsx)(h.b,{path:"/cart",children:Object(C.jsx)(Nt,{})}),Object(C.jsx)(h.b,{path:"/not-found",children:Object(C.jsx)(wt,{})}),Object(C.jsx)(h.a,{from:"/",to:"/products/category-all"}),Object(C.jsx)(h.a,{to:"/not-found"})]})})]})}}]),r}(c.Component),St=Object(b.b)((function(t){return{overlay:t.overlay}}))(kt),Pt=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,154)).then((function(e){var r=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),c(t),a(t),i(t)}))},It=r(41);var Tt=Object(It.b)({currency:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"USD",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_CURRENCY":return e.payload;default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_ITEM":case"REMOVE_ITEM":case"UPDATE_QTY":return e.payload;default:return t}},overlay:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SHOW_OVERLAY":return e.payload;default:return t}}}),Et=Object(It.c)(Tt,"object"===typeof window&&"undefined"!==typeof window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t});o.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(b.a,{store:Et,children:Object(C.jsx)(St,{})})}),document.getElementById("root")),Pt()},78:function(t,e,r){},93:function(t,e,r){},94:function(t,e,r){},95:function(t,e,r){}},[[139,1,2]]]);
//# sourceMappingURL=main.7c056526.chunk.js.map