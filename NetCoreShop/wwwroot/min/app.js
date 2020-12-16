var validlang=["ru","en"];function log(t){console.log(t)}function lng(t){return window.lang[t]}function tn(t){return document.createTextNode(t)}function ce(t){return document.createElement(t)}function fa(t,e){let n=ce("i");Attr(n,"class","fab "+e),Attr(n,"aria-hidden","true"),Append(t,n)}function span(t,e,n){let a=ce("span");Attr(a,"class",span),Append(a,tn(n)),Append(t,a)}function Append(t,e){t.appendChild(e)}function Attr(t,e,n){t.setAttribute(e,n)}function void0(){return"javascript:void(0)"}function init(){var t=navigator.language||navigator.userLanguage;if(t.length>2){var e=t.split("-");t=e[0]}var n=localStorage.getItem("lang");window.parcedlng=null!==n?n:t;if(1===window.location.pathname.length&&(window.location="/"+parcedlng+"/"),window.location.pathname.length>=4){var a=window.location.pathname.split("/");if(3===a.length&&""===a[2]){window.parcedlng=a[1];var r=getParameterByName("page"),o="";null===r?r=1:o=" "+window.lang.pg+r,document.title=window.lang.title+" - "+window.lang.last+o,window.view="homepage",window.pageurl=""+window.location.search}if(a.length>=3&&""!==a[2])switch(window.parcedlng=a[1],a[2]){case"txex":document.title=window.lang.title+" - "+window.lang.last,window.view="txex",window.txh=a[3],window.pageurl="txex/"+a[3]+window.location.search;break;case"tx":document.title=window.lang.tx+" - "+a[3],window.view="tx",window.txh=a[3],window.pageurl="tx/"+a[3]+window.location.search;break;case"top":document.title=window.lang.title+" - "+window.lang.top,window.view="top",window.pageurl="top/"+window.location.search;break;case"topex":document.title=window.lang.title+" - "+window.lang.top,window.view="topex",window.pageurl="topex/"+window.location.search;break;case"accounts":document.title=window.lang.title+" - "+window.lang.holder+" "+a[3],window.view="accounts",window.holder=a[3],window.pageurl="accounts/"+a[3]+window.location.search;break;case"coin":document.title=window.lang.title+" - "+window.lang.coin,window.view="coin",window.pageurl="coin";break;default:document.title=window.lang.title+" - "+window.lang.notfound,!0,window.view=void 0}}var i=document.createElement("script");i.setAttribute("src","https://kit.fontawesome.com/9062fa741c.js"),i.setAttribute("crossorigin","anonymous"),document.body.insertBefore(i,document.body.childNodes[0]);var d=document.createElement("script");d.setAttribute("src","https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"),document.body.insertBefore(d,document.body.childNodes[0]);var l=document.createElement("script");l.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"),document.body.appendChild(l);var c=document.createElement("script");c.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"),document.body.appendChild(c);var s=document.createElement("script");s.setAttribute("src","https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"),document.body.insertBefore(s,document.body.childNodes[7]);var p=document.createElement("ul");p.setAttribute("id","ulMenu"),p.setAttribute("class","navbar-nav");var u=document.createElement("nav");Attr(u,"id","topmenu"),Attr(u,"class","navbar navbar-expand-lg navbar-dark bg-dark"),document.body.insertBefore(u,document.body.childNodes[0]);var w=document.createElement("div");Attr(w,"class","container"),u.appendChild(w);var m=document.createElement("button");m.setAttribute("type","button"),m.setAttribute("class","navbar-toggler"),m.setAttribute("data-toggle","collapse"),m.setAttribute("data-target","#ntop"),m.setAttribute("aria-controls","ntop"),m.setAttribute("aria-expanded","true"),m.setAttribute("aria-label","Toggle");var g=document.createElement("span");g.setAttribute("class","navbar-toggler-icon"),m.appendChild(g),w.appendChild(m);var h=document.createElement("div");h.setAttribute("id","ntop"),h.setAttribute("class","collapse navbar-collapse justify-content-end"),w.appendChild(h);var b=document.createElement("div");b.setAttribute("id","content"),b.setAttribute("class","container"),document.body.insertBefore(b,document.body.childNodes[2]);var v=document.createElement("ul");v.setAttribute("id","ulMenuTop"),v.setAttribute("class","navbar-nav navbar-dark bg-dark");for(var A=0;A<window.homemenu.length;A++){let t=window.homemenu[A];if("widgetLogo"===t.value){let t=document.createElement("a");t.setAttribute("class","navbar-brand"),t.setAttribute("id","mnuLogoTop"),t.setAttribute("href","/"+window.parcedlng+"/");let e=document.createElement("img");e.setAttribute("src","/logo.svg"),e.setAttribute("class","logo2"),t.appendChild(e),w.insertBefore(t,w.childNodes[0])}else if("widgetSearch"===t.value){var f=document.createElement("form");f.setAttribute("class","form-inline my-2 my-lg-0"),f.setAttribute("style","margin-right: 10px"),f.setAttribute("onsubmit","return false;"),f.setAttribute("id","frmSearch");var y=document.createElement("input");y.setAttribute("class","form-control mr-sm-2"),y.setAttribute("id","txtSearch"),y.setAttribute("type","search"),y.setAttribute("placeholder",window.lang.search),f.appendChild(y),h.appendChild(f)}else if("widgetCurrency"===t.value){let t=localStorage.getItem("cur");null===t&&(t="USD");let e=ce("li");Attr(e,"class","nav-item dropdown");let n=window.lang.currencies[t.replace(".","")].split(":"),a=ce("a");Attr(a,"class","nav-link dropdown-toggle"),Attr(a,"role","button"),Attr(a,"data-toggle","dropdown"),Attr(a,"aria-haspopup","true"),Attr(a,"aria-expanded","false"),Attr(a,"id","navbarCurs"),Attr(a,"href","#");let r=ce("span");Attr(r,"class","sig sigc"),Attr(r,"id","navbarCursSym"),Append(r,tn(n[1])),window.symb=n[1],Append(a,r),Append(a,tn(t.replace(".",""))),Append(e,a);let o=ce("div");Attr(o,"id","listCurrs"),Attr(o,"class","dropdown-menu usdmen dropdown-menu-right"),Attr(o,"aria-labelledby","navbarLangs"),Append(e,o);let i=["USD","EUR","RUB","ILS","PHP","GBP","JPY","THB","CHF","TRY","CNY","CAD","AUD","KRW"],d=["BTC.","ETH.","BNB.","LTC.","BCH."],l=ce("span");Attr(l,"class","dropdown-item-text bold mb-2 bb1"),Append(l,tn(lang.fiat)),Append(o,l);for(var x=0;x<i.length;x++){let e=i[x],n="dropdown-item",a=window.lang.currencies[e].split(":"),r=a[0];t===e&&(n="dropdown-item active");let d="javascript:setCurrency('"+e+"')",l=ce("a");Attr(l,"class",n),Attr(l,"data-cur",e),Attr(l,"href",d);let c=ce("span");Attr(c,"class","sig sigcd "+e),Append(c,tn(a[1])),Append(l,c),Append(l,tn(r));let s=ce("span");Attr(s,"class","mr-1 ml-1"),Append(s,tn("("+e+")")),Append(l,s),Append(o,l)}let c=ce("span");Attr(c,"class","dropdown-item-text bold mt-2 mb-2 bb1"),Append(c,tn(lang.cryptocur)),Append(o,c);for(var C=0;C<d.length;C++){let e=d[C],n="dropdown-item",a=window.lang.currencies[e.replace(".","")].split(":"),r=a[0].replace(".","");t===e&&(n="dropdown-item active");let i="javascript:setCurrency('"+e+"')",l=ce("a");Attr(l,"class",n),Attr(l,"data-cur",e),Attr(l,"href",i);let c=ce("span");Attr(c,"class","sig sigcd "+e.replace(".","")),Append(c,tn(a[1])),Append(l,c),Append(l,tn(r));let s=ce("span");Attr(s,"class","mr-1 ml-1"),Append(s,tn("("+e.replace(".","")+")")),Append(l,s),Append(o,l)}Append(v,e)}else if("widgetLanguage"===t.value){let t=ce("li");Attr(t,"class","nav-item dropdown");let e=window.parcedlng.toUpperCase(),n=ce("a");Attr(n,"class","nav-link dropdown-toggle"),Attr(n,"role","button"),Attr(n,"data-toggle","dropdown"),Attr(n,"aria-haspopup","true"),Attr(n,"aria-expanded","false"),Attr(n,"id","navbarLangs"),Attr(n,"href","#");let a=ce("span");"en"!==window.parcedlng?Attr(a,"class","flag-icon flag-icon-"+window.parcedlng):Attr(a,"class","flag-icon flag-icon-us"),Append(n,a),Append(n,tn(" "+e)),Append(t,n);let r=ce("div");Attr(r,"class","dropdown-menu dropdown-menu-right"),Attr(r,"aria-labelledby","navbarLangs"),Append(t,r);let o=validlang;for(var E=0;E<o.length;E++){let t=o[E],e="dropdown-item",n=" "+window.lang[t];window.parcedlng===t&&(e="dropdown-item active");let a="/"+t+"/"+window.pageurl,i=ce("a");Attr(i,"class",e),Attr(i,"href",a),"en"===t&&(t="us");let d=ce("span");Attr(d,"class","flag-icon flag-icon-"+t),Append(i,d),Append(i,tn(n)),Append(r,i)}Append(v,t)}else{let e=!0,n="",a="",r="/"+window.parcedlng+"/"+t.value;a=window.lang[t.key],window.view===t.key&&(n=" active"),"last"===t.key&&(a=window.lang.last,"homepage"!==window.view&&"txex"!==window.view||(n=" active"));var k=document.createElement("li");k.setAttribute("class","nav-item ");var $=document.createElement("a");$.setAttribute("class","nav-link"+n),$.setAttribute("id","mnuT"+A),$.setAttribute("href",r),$.appendChild(tn(a)),k.appendChild($),e&&v.appendChild(k)}}h.appendChild(v),window.onload=bootstraped}function colorHash(t){return["#"+t.substring(4,10),"#"+t.substring(10,16),"#"+t.substring(16,22),"#"+t.substring(22,28),"#"+t.substring(28,34),"#"+t.substring(34,40),"#"+t.substring(40,46),"#"+t.substring(46,52),"#"+t.substring(52,58),"#"+t.substring(58,64)]}function colorHashAcc(t){return["#"+t.substring(2,8),"#"+t.substring(8,14),"#"+t.substring(14,20),"#"+t.substring(20,26),"#"+t.substring(26,32),"#"+t.substring(32,38)]}function getParameterByName(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}function copyText(t,e){if(window.clipboardData&&window.clipboardData.setData)return clipboardData.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var n=document.createElement("textarea");n.textContent=t,n.style.position="fixed",document.body.appendChild(n),n.select();try{return document.execCommand("copy")}catch(t){return console.warn("Copy to clipboard failed.",t),!1}finally{if(document.body.removeChild(n),null===document.getElementById("copiedAlert")){let t=ce("div");Attr(t,"id","copiedAlert");let n=$(e).offset();Attr(t,"style","left: "+n.left+"px; top: "+(50+n.top)+"px;"),Append(t,tn(window.lang.copied)),document.body.appendChild(t),window.setTimeout("copied()",800)}}}}function copied(){$("#copiedAlert").fadeOut({duration:800,easing:"linear",complete:function(){$("#copiedAlert").remove()}})}function aAcc(t,e,n){var a=document.createElement("a");a.setAttribute("class","thash"),a.setAttribute("data-toggle","tooltip"),a.setAttribute("title",t);let r=window.wallets[t.toLowerCase()];void 0===window.holder?a.setAttribute("href","/"+window.parcedlng+"/accounts/"+t):n?(a.setAttribute("onclick","copyText('"+t+"', this);"),a.setAttribute("href",void0()),a.setAttribute("title",window.lang.copy)):a.setAttribute("href","/"+window.parcedlng+"/accounts/"+t);var o=t.substring(0,4);if(void 0!==r){let t=document.createElement("img");t.src=r.logo,Attr(t,"style","display:inline-block; margin:-2px 4px 0px 0px;  height: 16px;"),r.haslogo&&!1===e&&(a.setAttribute("class","thash bold"),a.appendChild(t)),o=r.name}!0===e&&(o=t);var i=document.createTextNode(o);a.appendChild(i);for(var d=colorHashAcc(t),l=0;l<d.length;l++){var c=document.createElement("span"),s=l+1;void 0===d[s]&&(s=0),c.setAttribute("style","background:linear-gradient(to bottom,"+d[l]+","+d[s]+");"),c.className="spbox",!1===e&&void 0===r&&a.appendChild(c)}return a}function aHash(t){var e=document.createElement("a");e.setAttribute("class","thash"),void 0===window.txh?(e.setAttribute("href","/"+window.parcedlng+"/tx/"+t),e.setAttribute("title",t)):(e.setAttribute("onclick","copyText('"+t+"', this);"),e.setAttribute("href",void0()),e.setAttribute("title",window.lang.copy));var n=t.substring(0,4),a=document.createTextNode(n);e.appendChild(a),e.setAttribute("data-toggle","tooltip");for(var r=colorHash(t),o=0;o<r.length;o++){var i=document.createElement("span"),d=o+1;void 0===r[d]&&(d=0),i.setAttribute("style","background:linear-gradient(to bottom,"+r[o]+","+r[d]+");"),i.className="spbox",e.appendChild(i)}var l=t.substring(64,66),c=document.createTextNode(l);return e.appendChild(c),e}function Pager(t){var e=getParameterByName("page"),n=getParameterByName("show");null===e&&(e=1),null===n&&(n=11);var a="/"+window.parcedlng+"/"+window.pageurl.split("?")[0],r=a,o=a+"?show="+n+"&page="+t.data.pages,i=(t.data.page,t.data.page-1),d=t.data.page+1,l=a+"?show="+n+"&page="+i,c=a+"?show="+n+"&page="+d;0===i&&(l=""),d===t.data.pages+1&&(c="");var s=document.createElement("nav");s.setAttribute("aria-label","Page navigation");var p=document.createElement("ul");if(p.setAttribute("class","pagination"),s.appendChild(p),e>2){var u=document.createElement("li");u.setAttribute("class","page-item");var w=document.createElement("a");w.setAttribute("class","page-link"),w.setAttribute("href",r),w.appendChild(document.createTextNode("1")),u.appendChild(w),p.appendChild(u);var m=document.createElement("li");m.setAttribute("class","page-item sep"),m.appendChild(document.createTextNode("...")),p.appendChild(m)}if(""!==l){var g=document.createElement("li");g.setAttribute("class","page-item");var h=document.createElement("a");h.setAttribute("class","page-link"),h.setAttribute("href",l),h.appendChild(document.createTextNode(i)),g.appendChild(h),p.appendChild(g)}var b=document.createElement("li");b.setAttribute("class","page-item");var v=document.createElement("span");if(v.setAttribute("class","page-link active"),v.setAttribute("aria-current","page"),v.appendChild(document.createTextNode(e)),b.appendChild(v),p.appendChild(b),""!==c){var A=document.createElement("li");A.setAttribute("class","page-item");var f=document.createElement("a");f.setAttribute("href",c),f.setAttribute("class","page-link"),f.appendChild(document.createTextNode(d)),A.appendChild(f),p.appendChild(A)}if(e<t.data.pages-1){var y=document.createElement("li");y.setAttribute("class","page-item sep"),y.appendChild(document.createTextNode("...")),p.appendChild(y);var x=document.createElement("li");x.setAttribute("class","page-item");var C=document.createElement("a");C.setAttribute("class","page-link"),C.setAttribute("href",o),C.appendChild(document.createTextNode(t.data.pages)),x.appendChild(C),p.appendChild(x)}return s}function bootstraped(){$(document).mousemove(function(t){window.lastmove=(new Date).valueOf()}).mouseover(),null===window.wallets&&$.getJSON("/wallets.json",function(t){window.wallets=t});var t=document.createElement("script");t.setAttribute("src","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"),document.body.insertBefore(t,document.body.childNodes[8]),$(document).ready(function(){moment.locale(window.parcedlng);document.getElementById("content");if("homepage"===window.view){var t=getParameterByName("page"),e=getParameterByName("show");null===t&&(t=1),null===e&&(e=11),document.createElement("H2").setAttribute("class","PageHeader"),$.get("/lang/home/"+window.parcedlng+".html",function(t){$("#content").html(t)})}var n=document.createElement("footer");n.setAttribute("class","footer");var a=document.createElement("div");a.setAttribute("class",""),a.setAttribute("id","footerdiv"),n.appendChild(a),document.body.appendChild(n),$("#footerdiv").load(window.lang.cc),$("#txtSearch").click(function(t){$("#txtSearch").css("width","100%"),$("#frmSearch").css("width","100%"),$("#frmSearch").css("margin-right",""),$(this).attr("placeholder",window.lang.enterserchedtext),$("#ulMenu").hide()}),$("#txtSearch").focus(function(t){$("#txtSearch").css("width","100%"),$(this).attr("placeholder",window.lang.enterserchedtext),$("#frmSearch").css("width","100%"),$("#frmSearch").css("margin-right",""),$("#ulMenuTop").hide()}),$("#txtSearch").focusout(function(t){$(this).attr("placeholder",window.lang.search),$("#txtSearch").css("width",""),$("#frmSearch").css("width",""),$("#frmSearch").css("margin-right","10px"),$("#ulMenuTop").show()}),$("#txtSearch").bind("input",function(){var t=$(this).val(),e=!1,n=!1;66===t.length&&(null!==t.match(/^(0x)?[0-9a-f]{64}$/i)&&(n=!0));42===t.length&&(null!==t.match(/^(0x)?[0-9a-f]{40}$/i)&&(e=!0));e&&(window.location="/"+window.parcedlng+"/accounts/"+t),n&&(window.location="/"+window.parcedlng+"/tx/"+t),n||e||$(this).css("border","solid 1px red"),""===t&&$(this).css("border","")})})}function updateCoinData(){let t=localStorage.getItem("cur");null===t&&(t="USD");var e=-1*(new Date).getTimezoneOffset();let n=(new Date).valueOf();window.lastmove+5e4>n&&($.get("/api/coin/?tz="+e,function(t){window.coin=t}),gasDraw(window.coin),UpdatePrice(t),calcCoin(),"coin"===window.view&&updateChart())}function gasDraw(t){}function updateChart(){if(void 0!==window.coinchart){var t=moment().subtract(1,"days").format("dd"),e=moment().subtract(2,"days").format("dd"),n=moment().subtract(3,"days").format("dd"),a=moment().subtract(4,"days").format("dd"),r=moment().subtract(5,"days").format("dd"),o={labels:[moment().subtract(6,"days").format("dd"),r,a,n,e,t,window.lang.today],datasets:[{label:window.lang.txs,backgroundColor:"#F0B90B",borderColor:"#F0B90B",borderWidth:1,data:[coin.data.chart[0],coin.data.chart[1],coin.data.chart[2],coin.data.chart[3],coin.data.chart[4],coin.data.chart[5],coin.data.chart[6]]}]};window.coinchart.data=o,window.coinchart.update(0)}}function mz(t){for(var e="",n=t.toString().replace("e","").replace(".","").split("-"),a=parseInt(n[1]),r=0;r<a-1;r++)e+=0;return e="0."+e+n[0]}function detectmob(){return window.innerWidth<=800&&window.innerHeight<=600}String.prototype.replaceAll=function(t,e){return this.replace(new RegExp(t,"g"),e)},window.homemenu=[{key:"last",value:""},{key:"server",value:"server"},{key:"shop",value:"shop/"},{key:"top",value:"top/"},{key:"login",value:"widgetLogin",left:!0},{key:"search",value:"widgetSearch",left:!1},{key:"lang",value:"widgetLanguage",left:!1},{key:"logo",value:"widgetLogo",left:!0}],window.coinmenu=[{key:"logo",value:"widgetLogo"}],function(){var t=new Array(4);function e(){var e=t[0]^t[0]<<11;return t[0]=t[1],t[1]=t[2],t[2]=t[3],t[3]=t[3]^t[3]>>19^e^e>>8,(t[3]>>>0)/(1<<31>>>0)}function n(){return"hsl("+Math.floor(360*e())+","+(60*e()+40+"%")+","+(25*(e()+e()+e()+e())+"%")+")"}function a(e){var a={};return a.seed=e.seed||Math.floor(Math.random()*Math.pow(10,16)).toString(16),function(e){for(var n=0;n<t.length;n++)t[n]=0;for(var a=0;a<e.length;a++)t[a%4]=(t[a%4]<<5)-t[a%4]+e.charCodeAt(a)}(a.seed),a.size=e.size||8,a.scale=e.scale||4,a.color=e.color||n(),a.bgcolor=e.bgcolor||n(),a.spotcolor=e.spotcolor||n(),a}function r(t,n){var r=function(t){for(var n=t,a=t,r=Math.ceil(n/2),o=n-r,i=[],d=0;d<a;d++){for(var l=[],c=0;c<r;c++)l[c]=Math.floor(2.3*e());var s=l.slice(0,o);s.reverse(),l=l.concat(s);for(var p=0;p<l.length;p++)i.push(l[p])}return i}((t=a(t||{})).size),o=Math.sqrt(r.length);n.width=n.height=t.size*t.scale;var i=n.getContext("2d");i.fillStyle=t.bgcolor,i.fillRect(0,0,n.width,n.height),i.fillStyle=t.color;for(var d=0;d<r.length;d++)if(r[d]){var l=Math.floor(d/o),c=d%o;i.fillStyle=1===r[d]?t.color:t.spotcolor,i.fillRect(c*t.scale,l*t.scale,t.scale,t.scale)}return n}var o={create:function(t){var e=document.createElement("canvas");return r(t,e),e},render:r};"undefined"!=typeof module&&(module.exports=o),"undefined"!=typeof window&&(window.blockies=o)}(),init();