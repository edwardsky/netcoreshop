var validlang = ["ru", "en"];
function log(Yo) { console.log(Yo); }
function lng(key) { return window.lang[key]; }
function tn(text) { return document.createTextNode(text); }
function ce(tag) { return document.createElement(tag); }
function fa(to, icon) { let alrt = ce("i"); Attr(alrt, "class", "fab " + icon); Attr(alrt, "aria-hidden", "true"); Append(to, alrt); }
function span(to, clss, text) { let alrt = ce("span"); Attr(alrt, "class", span); Append(alrt, tn(text)); Append(to, alrt); }
function Append(to, elem) { to.appendChild(elem); }
function Attr(elem, name, value) { elem.setAttribute(name, value); }
function void0() { return "javascript:void(0)"; }

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

window.homemenu = [

    { key: "last", value: "" },
    { key: "server", value: "server" },
    { key: "shop", value: "shop/" },
    { key: "top", value: "top/" },
    { key: "login", value: "widgetLogin", left: true },
    { key: "search", value: "widgetSearch", left: false },
    { key: "lang", value: "widgetLanguage", left: false },
    { key: "logo", value: "widgetLogo", left: true },
];

window.coinmenu = [
    { key: "logo", value: "widgetLogo" },
    //{ key: "last", value: "" },
    //   { key: "markets", value: "markets/" },   
    //{ key: "top", value: "top/" },
    //{ key: "coin", value: "coin" }


];

function init() {

    // localStorage.setItem("lang", "en");



    var nlng = navigator.language || navigator.userLanguage;
    if (nlng.length > 2) { var sl = nlng.split("-"); nlng = sl[0]; }
    var savedlng = localStorage.getItem("lang");
    window.parcedlng = savedlng !== null ? savedlng : nlng;

    var notfoundpage = false;

    // todo load
    if (window.location.pathname.length === 1) {
        window.location = "/" + parcedlng + "/";
    }

    if (window.location.pathname.length >= 4) {

        var spliten = window.location.pathname.split("/");

        if (spliten.length === 3 && spliten[2] === "") {
            window.parcedlng = spliten[1];
            var page = getParameterByName('page');
            var paget = "";
            if (page === null) { page = 1; } else {
                paget = " " + window.lang.pg + page;
            }
            // homepage by lang
            // console.log("Lasten tx list on lang " + spliten[1] + " !");
            document.title = window.lang.title + " - " + window.lang.last + paget;

            //TODO render Last tx list   
            window.view = "homepage";
            window.pageurl = "" + window.location.search;
        }

        // "" "ru" "top"
        if (spliten.length >= 3 && spliten[2] !== "") {
            //  console.log(spliten[2] + " on lang " + spliten[1] + " !");

            window.parcedlng = spliten[1];

            switch (spliten[2]) {
                case "txex":
                    document.title = window.lang.title + " - " + window.lang.last;

                    //TODO render tx info
                    window.view = "txex";
                    window.txh = spliten[3];
                    window.pageurl = "txex/" + spliten[3] + window.location.search;

                    break;
                case "tx":
                    document.title = window.lang.tx + " - " + spliten[3];

                    //TODO render tx info
                    window.view = "tx";
                    window.txh = spliten[3];
                    window.pageurl = "tx/" + spliten[3] + window.location.search;

                    break;

                case "top":
                    document.title = window.lang.title + " - " + window.lang.top;
                    window.view = "top";
                    window.pageurl = "top/" + window.location.search;
                    break;


                case "topex":
                    document.title = window.lang.title + " - " + window.lang.top;
                    window.view = "topex";
                    window.pageurl = "topex/" + window.location.search;
                    break;


                case "accounts":
                    document.title = window.lang.title + " - " + window.lang.holder + " " + spliten[3];
                    window.view = "accounts";
                    window.holder = spliten[3];
                    window.pageurl = "accounts/" + spliten[3] + window.location.search;
                    break;

                case "coin":
                    document.title = window.lang.title + " - " + window.lang.coin;
                    window.view = "coin";
                    window.pageurl = "coin";
                    break;


                default:
                    document.title = window.lang.title + " - " + window.lang.notfound;
                    notfoundpage = true;
                    window.view = undefined;
                    break;
            }
        }

    }



    // clean all preloaded scripts
    //document.body.innerHTML = "";
    var scfa = document.createElement('script');
    scfa.setAttribute('src', 'https://kit.fontawesome.com/9062fa741c.js');
    scfa.setAttribute('crossorigin', 'anonymous');
    document.body.insertBefore(scfa, document.body.childNodes[0]);

    var scjquery = document.createElement('script');
    scjquery.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js');
    document.body.insertBefore(scjquery, document.body.childNodes[0]);


    var scmom = document.createElement('script');
    scmom.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js');
    document.body.appendChild(scmom);

    var scch = document.createElement('script');
    //scmom.setAttribute('integrity', 'sha256-AdQN98MVZs44Eq2yTwtoKufhnU+uZ7v2kXnD5vqzZVo=');
    scch.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js');
    //scmom.setAttribute('crossorigin', 'anonymous');
    document.body.appendChild(scch);

    var scpop = document.createElement('script');
    scpop.setAttribute('src', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js');
    document.body.insertBefore(scpop, document.body.childNodes[7]);

    //#region Render topmenu







    var ul = document.createElement('ul');
    ul.setAttribute('id', 'ulMenu');
    ul.setAttribute('class', 'navbar-nav');


    var navtop = document.createElement('nav');
    Attr(navtop, 'id', 'topmenu');
    Attr(navtop, 'class', 'navbar navbar-expand-lg navbar-dark bg-dark');
    document.body.insertBefore(navtop, document.body.childNodes[0]);

    

    var rtop = document.createElement('div');
    Attr(rtop, 'class', 'container');
    navtop.appendChild(rtop);

    var btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'navbar-toggler');
    btn.setAttribute('data-toggle', 'collapse');
    btn.setAttribute('data-target', '#ntop');
    btn.setAttribute('aria-controls', 'ntop');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Toggle');

    var btns = document.createElement('span');
    btns.setAttribute('class', 'navbar-toggler-icon');
    btn.appendChild(btns);
    rtop.appendChild(btn);

    var topcont = document.createElement('div');
    topcont.setAttribute('id', 'ntop');
    topcont.setAttribute('class', 'collapse navbar-collapse justify-content-end');
    rtop.appendChild(topcont);



    var content = document.createElement('div');
    content.setAttribute('id', 'content');
    content.setAttribute('class', 'container');

    document.body.insertBefore(content, document.body.childNodes[2]);


    var ult = document.createElement('ul');
    ult.setAttribute('id', 'ulMenuTop');
    ult.setAttribute('class', 'navbar-nav navbar-dark bg-dark');


    for (var t = 0; t < window.homemenu.length; t++) {
        let dr = window.homemenu[t];

        if (dr["value"] === "widgetLogo") {
            let mi = document.createElement('a');
            mi.setAttribute('class', 'navbar-brand');
            mi.setAttribute('id', 'mnuLogoTop');
            mi.setAttribute('href', "/" + window.parcedlng + "/");
            let logo = document.createElement('img');
            logo.setAttribute('src', '/logo.svg');
            logo.setAttribute('class', 'logo2');
            mi.appendChild(logo);


            //mi.appendChild(tn(lng("title")));
            //mi.appendChild(document.createElement("br"));



            rtop.insertBefore(mi, rtop.childNodes[0]);

        } else if (dr["value"] === "widgetSearch") {

            //  log("todo render");
            var frm = document.createElement('form');
            frm.setAttribute('class', 'form-inline my-2 my-lg-0');
            frm.setAttribute('style', 'margin-right: 10px');
            frm.setAttribute('onsubmit', 'return false;');
            frm.setAttribute('id', 'frmSearch');
            var inp = document.createElement('input');
            inp.setAttribute('class', 'form-control mr-sm-2');

            inp.setAttribute('id', 'txtSearch');
            inp.setAttribute('type', 'search');
            inp.setAttribute('placeholder', window.lang.search);
            frm.appendChild(inp);
            topcont.appendChild(frm);

        } else if (dr["value"] === "widgetCurrency") {

            let cur = localStorage.getItem('cur');
            if (cur === null) cur = "USD";

            let li = ce('li');
            Attr(li, 'class', 'nav-item dropdown');


            let csdat = window.lang.currencies[cur.replace(".", "")].split(":");

            let a = ce('a');
            Attr(a, 'class', 'nav-link dropdown-toggle');
            Attr(a, 'role', 'button');
            Attr(a, 'data-toggle', 'dropdown');
            Attr(a, 'aria-haspopup', 'true');
            Attr(a, 'aria-expanded', 'false');
            Attr(a, 'id', 'navbarCurs');
            Attr(a, 'href', "#");

            let sigc = ce('span');
            Attr(sigc, 'class', 'sig sigc');
            Attr(sigc, 'id', 'navbarCursSym');
            Append(sigc, tn(csdat[1]));
            window.symb = csdat[1];

            Append(a, sigc);
            Append(a, tn(cur.replace(".", "")));
            Append(li, a);
            let lst = ce('div'); Attr(lst, 'id', "listCurrs"); Attr(lst, 'class', 'dropdown-menu usdmen dropdown-menu-right'); Attr(lst, 'aria-labelledby', 'navbarLangs'); Append(li, lst);
            let curs = ["USD", "EUR", "RUB",
                "ILS", "PHP", "GBP", "JPY",
                "THB", "CHF", "TRY", "CNY",
                "CAD", "AUD", "KRW"];

            let ccurs = ["BTC.", "ETH.", "BNB.", "LTC.", "BCH."];


            let fiat = ce('span'); Attr(fiat, 'class', 'dropdown-item-text bold mb-2 bb1'); Append(fiat, tn(lang["fiat"])); Append(lst, fiat);
            for (var c = 0; c < curs.length; c++) {
                let cc = curs[c];
                let cr = window.lang.currencies[cc];
                let cls = "dropdown-item";
                let cd = cr.split(":");
                let txt = cd[0];
                if (cur === cc) cls = "dropdown-item active";

                let href = "javascript:setCurrency('" + cc + "')";
                let alng = ce('a');
                Attr(alng, 'class', cls);
                Attr(alng, 'data-cur', cc);
                Attr(alng, 'href', href);

                let sig = ce('span'); Attr(sig, 'class', 'sig sigcd ' + cc); Append(sig, tn(cd[1])); Append(alng, sig);

                Append(alng, tn(txt)); //add icon css
                let sISO = ce('span'); Attr(sISO, 'class', 'mr-1 ml-1'); Append(sISO, tn("(" + cc + ")")); Append(alng, sISO);
                Append(lst, alng);
            }
            let ccs = ce('span'); Attr(ccs, 'class', 'dropdown-item-text bold mt-2 mb-2 bb1'); Append(ccs, tn(lang["cryptocur"])); Append(lst, ccs);

            for (var r = 0; r < ccurs.length; r++) {
                let cc = ccurs[r];
                let cr = window.lang.currencies[cc.replace(".", "")];
                let cls = "dropdown-item";
                let cd = cr.split(":");
                let txt = cd[0].replace(".", "");
                if (cur === cc) cls = "dropdown-item active";

                let href = "javascript:setCurrency('" + cc + "')";
                let alng = ce('a');
                Attr(alng, 'class', cls);
                Attr(alng, 'data-cur', cc);
                Attr(alng, 'href', href);

                let sig = ce('span'); Attr(sig, 'class', 'sig sigcd ' + cc.replace(".", "")); Append(sig, tn(cd[1])); Append(alng, sig);

                Append(alng, tn(txt)); //add icon css
                let sISO = ce('span'); Attr(sISO, 'class', 'mr-1 ml-1'); Append(sISO, tn("(" + cc.replace(".", "") + ")")); Append(alng, sISO);
                Append(lst, alng);
            }

            Append(ult, li);

        }
        else if (dr["value"] === "widgetLanguage") {




            let li = ce('li');
            Attr(li, 'class', 'nav-item dropdown');

            //let mnu_selected = window.lang[window.parcedlng].substring(0, 2);
            let mnu_selected = window.parcedlng.toUpperCase();
            ////let mnu_mnuhref = "" + window.pageurl;


            let a = ce('a');
            Attr(a, 'class', 'nav-link dropdown-toggle');
            Attr(a, 'role', 'button');
            Attr(a, 'data-toggle', 'dropdown');
            Attr(a, 'aria-haspopup', 'true');
            Attr(a, 'aria-expanded', 'false');
            Attr(a, 'id', 'navbarLangs');
            Attr(a, 'href', "#");

            let ic = ce('span');
            if (window.parcedlng !== "en") Attr(ic, 'class', 'flag-icon flag-icon-' + window.parcedlng);
            else Attr(ic, 'class', 'flag-icon flag-icon-us');
            Append(a, ic); //add icon css
            Append(a, tn(" " + mnu_selected)); //add icon css
            //Append(a, tn(window.parcedlng)); //add icon css
            Append(li, a);
            let lst = ce('div'); Attr(lst, 'class', 'dropdown-menu dropdown-menu-right'); Attr(lst, 'aria-labelledby', 'navbarLangs'); Append(li, lst);

            let langs = validlang;

            for (var m = 0; m < langs.length; m++) {

                let l = langs[m];
                let cls = "dropdown-item";
                let txt = " " + window.lang[l];
                if (window.parcedlng === l) cls = "dropdown-item active";

                let href = "/" + l + "/" + window.pageurl;
                let alng = ce('a');
                Attr(alng, 'class', cls);
                Attr(alng, 'href', href);
                if (l === "en") l = "us";
                let f = ce('span'); Attr(f, 'class', 'flag-icon flag-icon-' + l);
                Append(alng, f); //add icon css
                Append(alng, tn(txt)); //add icon css
                Append(lst, alng);
            }

            Append(ult, li);


        } else {
            let add = true;
            let aact = "";
            let mnutext = "";
            let mnuhref = "/" + window.parcedlng + "/" + dr["value"];


            mnutext = window.lang[dr["key"]];
            if (window.view === dr["key"]) aact = " active";
            if (dr["key"] === "last") {
                mnutext = window.lang.last;
                if (window.view === "homepage" || window.view === "txex") aact = " active";
            }

            // TODO Add new lang HERE

            var mili = document.createElement('li');
            mili.setAttribute('class', 'nav-item ');


            var mia = document.createElement('a');
            mia.setAttribute('class', 'nav-link' + aact);
            mia.setAttribute('id', 'mnuT' + t);
            mia.setAttribute('href', mnuhref);
            mia.appendChild(tn(mnutext));
            //let spc = ce("span"); Append(spc, tn(window.counts[dr["key"]])); Append(mia, spc);
            mili.appendChild(mia);
            if (add) ult.appendChild(mili);
        }

    }
    topcont.appendChild(ult);
    //#endregion

    window.onload = bootstraped;

}


function colorHash(hash) {
    return [
        "#" + hash.substring(4, 10),
        "#" + hash.substring(10, 16),
        "#" + hash.substring(16, 22),
        "#" + hash.substring(22, 28),
        "#" + hash.substring(28, 34),
        "#" + hash.substring(34, 40),
        "#" + hash.substring(40, 46),
        "#" + hash.substring(46, 52),
        "#" + hash.substring(52, 58),
        "#" + hash.substring(58, 64)
    ];
}
function colorHashAcc(hash) {

    return [
        "#" + hash.substring(2, 8),
        "#" + hash.substring(8, 14),
        "#" + hash.substring(14, 20),
        "#" + hash.substring(20, 26),
        "#" + hash.substring(26, 32),
        "#" + hash.substring(32, 38)
    ];
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function copyText(text, el) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
            if (document.getElementById("copiedAlert") === null) {
                let copied = ce("div");
                Attr(copied, "id", "copiedAlert");

                let pos = $(el).offset();
                Attr(copied, "style", "left: " + pos.left + "px; top: " + (50 + pos.top) + "px;");
                //fa(copied, "fa-clipboard mr-2");
                Append(copied, tn(window.lang["copied"]));
                document.body.appendChild(copied);
                window.setTimeout('copied()', 800);
            }
        }


    }

}

function copied() {

    $('#copiedAlert').fadeOut({
        duration: 800,
        easing: "linear",
        complete: function () {
            $('#copiedAlert').remove();
        }
    });

}

function aAcc(acc, full, copy) {

    var a = document.createElement('a');
    a.setAttribute('class', 'thash');
    a.setAttribute('data-toggle', 'tooltip');
    a.setAttribute('title', acc);

    let wal = window.wallets[acc.toLowerCase()];

    if (window.holder === undefined) {
        a.setAttribute('href', "/" + window.parcedlng + "/accounts/" + acc);

    } else {
        if (copy) {
            a.setAttribute('onclick', "copyText('" + acc + "', this);");
            a.setAttribute('href', void0());
            a.setAttribute('title', window.lang.copy);
        }
        else a.setAttribute('href', "/" + window.parcedlng + "/accounts/" + acc);
    }

    var d = acc.substring(0, 4);


    if (wal !== undefined) {
        let l = document.createElement('img');
        l.src = wal.logo;
        Attr(l, "style", "display:inline-block; margin:-2px 4px 0px 0px;  height: 16px;")
        if (wal.haslogo && full === false) {
            a.setAttribute('class', 'thash bold');
            a.appendChild(l);
        }
        d = wal.name;
    }
    if (full === true) d = acc;
    var tnd = document.createTextNode(d);
    a.appendChild(tnd);

    var cha = colorHashAcc(acc);
    for (var c = 0; c < cha.length; c++) {
        var cc = document.createElement('span');
        var next = c + 1;
        if (cha[next] === undefined) next = 0;
        cc.setAttribute('style', 'background:linear-gradient(to bottom,' + cha[c] + ',' + cha[next] + ');');
        cc.className = "spbox";
        if (full === false && wal === undefined) a.appendChild(cc);
    }
    //var apd = acc.substring(38, 42);
    //var tn = document.createTextNode(apd);
    //a.appendChild(tn);
    return a;
}
function aHash(hash) {
    var atx = document.createElement('a');
    atx.setAttribute('class', 'thash');
    if (window.txh === undefined) {
        atx.setAttribute('href', "/" + window.parcedlng + "/tx/" + hash);
        atx.setAttribute('title', hash);
    } else {
        atx.setAttribute('onclick', "copyText('" + hash + "', this);");
        atx.setAttribute('href', void0());
        atx.setAttribute('title', window.lang.copy);
    }
    var d = hash.substring(0, 4);
    var tnd = document.createTextNode(d);
    atx.appendChild(tnd);
    atx.setAttribute('data-toggle', 'tooltip');

    var ch = colorHash(hash);
    for (var c = 0; c < ch.length; c++) {
        var cc = document.createElement('span');
        var next = c + 1;
        if (ch[next] === undefined) next = 0;
        cc.setAttribute('style', 'background:linear-gradient(to bottom,' + ch[c] + ',' + ch[next] + ");");
        cc.className = "spbox";
        atx.appendChild(cc);
    }
    var apd = hash.substring(64, 66);
    var tn = document.createTextNode(apd);
    atx.appendChild(tn);
    return atx;
}
function Pager(e) {

    var page = getParameterByName('page');
    var show = getParameterByName('show');
    if (page === null) page = 1;
    if (show === null) show = 11;
    var pageUrlClear = "/" + window.parcedlng + "/" + window.pageurl.split("?")[0];
    var pageFirst = pageUrlClear;
    var pageLast = pageUrlClear + "?show=" + show + "&page=" + e.data.pages;
    var curpage = e.data.page;
    var previ = e.data.page - 1;
    var nexi = e.data.page + 1;
    var pagePrev = pageUrlClear + "?show=" + show + "&page=" + previ;
    var pageNext = pageUrlClear + "?show=" + show + "&page=" + nexi;
    if (previ === 0) pagePrev = "";
    if (nexi === e.data.pages + 1) pageNext = "";


    var npg = document.createElement("nav");
    npg.setAttribute('aria-label', 'Page navigation');

    var ulpager = document.createElement("ul");
    ulpager.setAttribute('class', 'pagination');
    npg.appendChild(ulpager);


    if (page > 2) {
        var lif = document.createElement("li");
        lif.setAttribute('class', 'page-item');
        var af = document.createElement('a');
        af.setAttribute("class", 'page-link');
        af.setAttribute("href", pageFirst);
        af.appendChild(document.createTextNode("1"));
        lif.appendChild(af);
        ulpager.appendChild(lif);
        var lll = document.createElement("li");
        lll.setAttribute('class', 'page-item sep');
        lll.appendChild(document.createTextNode("..."));
        ulpager.appendChild(lll);
    }
    if (pagePrev !== "") {
        var liPrev = document.createElement("li");
        liPrev.setAttribute('class', 'page-item');
        var aprv = document.createElement('a');
        aprv.setAttribute("class", 'page-link');
        aprv.setAttribute("href", pagePrev);
        aprv.appendChild(document.createTextNode(previ));
        liPrev.appendChild(aprv);
        ulpager.appendChild(liPrev);
    }


    var lic = document.createElement("li");
    lic.setAttribute('class', 'page-item');
    var ac = document.createElement('span');

    ac.setAttribute('class', 'page-link active');
    ac.setAttribute('aria-current', 'page');
    ac.appendChild(document.createTextNode(page));
    lic.appendChild(ac);
    ulpager.appendChild(lic);

    if (pageNext !== "") {

        var lin = document.createElement("li");
        lin.setAttribute('class', 'page-item');
        var an = document.createElement('a');
        an.setAttribute("href", pageNext);
        an.setAttribute("class", "page-link");
        an.appendChild(document.createTextNode(nexi));
        lin.appendChild(an);
        ulpager.appendChild(lin);
    }

    if (page < e.data.pages - 1) {

        var llll = document.createElement("li");
        llll.setAttribute('class', 'page-item sep');
        llll.appendChild(document.createTextNode("..."));
        ulpager.appendChild(llll);

        var lil = document.createElement("li");
        lil.setAttribute('class', 'page-item');
        var al = document.createElement('a');
        al.setAttribute("class", 'page-link');
        al.setAttribute("href", pageLast);
        al.appendChild(document.createTextNode(e.data.pages));
        lil.appendChild(al);
        ulpager.appendChild(lil);
    }



    return npg;

}

function bootstraped() {

    $(document).mousemove(function (e) {
        window.lastmove = new Date().valueOf();

    }).mouseover();

    if (window.wallets === null) {
        $.getJSON("/wallets.json", function (data) {
            window.wallets = data;
        });
    }

    var scboot = document.createElement('script');
    scboot.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js');
    document.body.insertBefore(scboot, document.body.childNodes[8]);



    $(document).ready(function () {

        moment.locale(window.parcedlng);
        var content = document.getElementById("content");

        // gasDraw(window.coin);

        var pgr = undefined;



        if (window.view === "homepage") {

            var page = getParameterByName('page');
            var show = getParameterByName('show');
            if (page === null) page = 1;
            if (show === null) show = 11;


            var h2 = document.createElement("H2");
            h2.setAttribute('class', 'PageHeader');

            $.get("/lang/home/" + window.parcedlng + ".html", function (e) {
                $('#content').html(e);
            });



         


        }

        //if (window.view === "coin") {
        //    var h2coin = document.createElement("H2");
        //    h2coin.setAttribute('class', 'PageHeader');
        //    var htcoin = document.createTextNode(window.lang.coinheader);
        //    h2coin.appendChild(htcoin);
        //    //content.appendChild(h2coin);
        //    var offset = -1 * new Date().getTimezoneOffset();

        //    $.get("/api/coin/?tz=" + offset, function (e) {
        //        window.coin = e;

        //        var dvcoin = document.createElement("div");
        //        dvcoin.setAttribute('class', 'container');
        //        content.appendChild(dvcoin);

        //        var dvrow = document.createElement("div");
        //        dvrow.setAttribute('class', 'row');
        //        dvcoin.appendChild(dvrow);


        //        var dvSpec = document.createElement("div");
        //        dvSpec.setAttribute('class', 'col');

        //        var hSpec = document.createElement("H4");
        //        hSpec.setAttribute('class', 'PageHeader caps');
        //        hSpec.appendChild(document.createTextNode(window.lang.spec));
        //        dvSpec.appendChild(hSpec);
        //        dvrow.appendChild(dvSpec);

        //        //name desc
        //        var tabs = document.createElement("TABLE");
        //        tabs.setAttribute('class', 'table');
        //        var trspec = document.createElement('tr');
        //        var thn = document.createElement('th');
        //        thn.setAttribute('class', 'caps');
        //        thn.appendChild(document.createTextNode(window.lang.name));
        //        trspec.appendChild(thn);
        //        var thdes = document.createElement('th');
        //        thdes.setAttribute('class', 'caps');
        //        thdes.appendChild(document.createTextNode(window.lang.desc));
        //        trspec.appendChild(thdes);
        //        tabs.appendChild(trspec);

        //        //Token Name	MainCoin
        //        var tr3 = document.createElement('tr');
        //        var td3n = document.createElement('td');
        //        td3n.appendChild(document.createTextNode(window.lang.tn));
        //        tr3.appendChild(td3n);
        //        var td3v = document.createElement('td');
        //        //td3v.appendChild(document.createTextNode(e.data[1].ethplorer_getTokenInfo.name));
        //        td3v.appendChild(document.createTextNode('MainCoin'));
        //        tr3.appendChild(td3v);
        //        tabs.appendChild(tr3);

        //        //Token Symbol	MNC data[1].ethplorer_getTokenInfo.symbol
        //        var tr6 = document.createElement('tr');
        //        var td6n = document.createElement('td');
        //        td6n.appendChild(document.createTextNode(window.lang.tsym));
        //        tr6.appendChild(td6n);
        //        var td6v = document.createElement('td');
        //        //td6v.appendChild(document.createTextNode(e.data[1].ethplorer_getTokenInfo.symbol));
        //        td6v.appendChild(document.createTextNode("MNC"));
        //        tr6.appendChild(td6v);
        //        tabs.appendChild(tr6);

        //        //Token Type	Token implements ERC20 and Burnable interfaces
        //        var tr4 = document.createElement('tr');
        //        var td4n = document.createElement('td');
        //        td4n.appendChild(document.createTextNode(window.lang.tt));
        //        tr4.appendChild(td4n);
        //        var td4v = document.createElement('td');
        //        td4v.appendChild(document.createTextNode(window.lang.ttv));
        //        tr4.appendChild(td4v);
        //        tabs.appendChild(tr4);


        //        //Smart - contract	0x9f0f1be08591ab7d990faf910b38ed5d60e4d5bf  
        //        var tr7 = document.createElement('tr');
        //        var td7n = document.createElement('td');
        //        td7n.appendChild(document.createTextNode(window.lang.smrt));
        //        tr7.appendChild(td7n);
        //        var td7v = document.createElement('td');
        //        td7v.appendChild(aAcc('0x9f0f1Be08591AB7d990faf910B38ed5D60e4D5Bf', false, false));
        //        tr7.appendChild(td7v);
        //        tabs.appendChild(tr7);

        //        //Underlying Blockchain	Ethereum network 
        //        var tr5 = document.createElement('tr');
        //        var td5n = document.createElement('td');
        //        td5n.appendChild(document.createTextNode(window.lang.under));
        //        tr5.appendChild(td5n);
        //        var td5v = document.createElement('td');
        //        td5v.appendChild(document.createTextNode(window.lang.ethn));
        //        tr5.appendChild(td5v);
        //        tabs.appendChild(tr5);

        //        //Website	https://maincoin.money/
        //        var tr2 = document.createElement('tr');
        //        var td2n = document.createElement('td');
        //        td2n.appendChild(document.createTextNode(window.lang.web));
        //        tr2.appendChild(td2n);
        //        var td2v = document.createElement('td');
        //        var asite = document.createElement('a');
        //        asite.setAttribute("href", window.lang.site);
        //        asite.setAttribute("target", "_blank");
        //        //asite.setAttribute("class", "s");
        //        asite.appendChild(document.createTextNode(window.lang.site));
        //        td2v.appendChild(asite);
        //        tr2.appendChild(td2v);
        //        tabs.appendChild(tr2);

        //        var tr10 = document.createElement('tr');
        //        var td10n = document.createElement('td');
        //        td10n.appendChild(document.createTextNode(window.lang.txs));
        //        tr10.appendChild(td10n);
        //        var td10v = document.createElement('td');
        //        var numtx = " " + numeral("'" + e.data.total + "'").format('0,0');
        //        td10v.appendChild(document.createTextNode(numtx));
        //        tr10.appendChild(td10v);
        //        tabs.appendChild(tr10);

        //        //Holders count	16298 
        //        var tr9 = document.createElement('tr');
        //        var td9n = document.createElement('td');
        //        td9n.appendChild(document.createTextNode(window.lang.hlderscount));
        //        tr9.appendChild(td9n);
        //        var td9v = document.createElement('td');
        //        var numh = numeral("'" + e.data.holders + "'");
        //        td9v.appendChild(document.createTextNode(numh.format('0,0')));
        //        tr9.appendChild(td9v);
        //        tabs.appendChild(tr9);

        //        //Total supply	380, 020, 246 MNC are issued initially and limited forever. 



        //        dvSpec.appendChild(tabs);


        //        var dvchart = document.createElement("div");
        //        dvchart.setAttribute('class', 'col col-sm-5');
        //        var hchart = document.createElement("H4");
        //        hchart.setAttribute('class', 'PageHeader caps');
        //        var numw = " " + numeral("'" + e.data.week + "'").format('0,0');
        //        hchart.appendChild(document.createTextNode(window.lang.chartheader + numw));
        //        dvchart.appendChild(hchart);

        //        var dvcht = document.createElement("canvas");
        //        dvcht.setAttribute('id', 'ctx');
        //        dvcht.setAttribute('height', '340px');
        //        dvchart.appendChild(dvcht);


        //        var d2 = moment().subtract(1, 'days').format('dd');

        //        var d3 = moment().subtract(2, 'days').format('dd');
        //        var d4 = moment().subtract(3, 'days').format('dd');
        //        var d5 = moment().subtract(4, 'days').format('dd');
        //        var d6 = moment().subtract(5, 'days').format('dd');
        //        var d7 = moment().subtract(6, 'days').format('dd');


        //        var barChartData = {
        //            labels: [d7, d6, d5, d4, d3, d2, window.lang.today],
        //            datasets: [{
        //                label: window.lang.txs,
        //                backgroundColor: "#F0B90B",
        //                borderColor: "#F0B90B",
        //                borderWidth: 1,
        //                data: [
        //                    e.data.chart[0],
        //                    e.data.chart[1],
        //                    e.data.chart[2],
        //                    e.data.chart[3],
        //                    e.data.chart[4],
        //                    e.data.chart[5],
        //                    e.data.chart[6]
        //                ]
        //            }]
        //        };


        //        var LineChart = new Chart(dvcht, {
        //            type: 'bar',
        //            data: barChartData,
        //            options: {
        //                responsive: true,
        //                legend: {
        //                    position: 'bottom'
        //                },
        //                animation: {
        //                    duration: 0
        //                }
        //            }
        //        });

        //        window.coinchart = LineChart;

        //        dvrow.appendChild(dvchart);

        //        $('#main').css({ "background": "none" });
        //    });

        //    // TODO render pulse chart


        //}

        //if (window.view === "accounts") {
        //    var pg = getParameterByName('page');
        //    var sh = getParameterByName('show');
        //    if (pg === null) pg = 1;
        //    if (sh === null) sh = 11;
        //    var adr = "/api/last/" + pg + "?show=" + sh + "&acc=" + window.holder;

        //    $.get(adr, function (e) {


        //        var h2acc = document.createElement("H2");
        //        h2acc.setAttribute('class', 'PageHeader bold');


        //        var icon = blockies.create({ // All options are optional
        //            seed: window.holder.toLowerCase(), // seed used to generate icon data, default: random
        //            //color: '#dfe', // to manually specify the icon color, default: random
        //            //bgcolor: '#aaa', // choose a different background color, default: random
        //            size: 8, // width/height of the icon in blocks, default: 8
        //            scale: 16 // width/height of each block in pixels, default: 4
        //            // spotcolor: '#000' // each pixel has a 13% chance of being of a third color, 
        //            // default: random. Set to -1 to disable it. These "spots" create structures
        //            // that look like eyes, mouths and noses. 
        //        });

        //        var img = document.createElement("div");
        //        img.setAttribute('style', 'background-image: url(' + icon.toDataURL() + ');');
        //        img.setAttribute('class', 'AccIcon');
        //        img.setAttribute('data-toggle', 'tooltip');
        //        img.setAttribute('title', window.lang.blockie);
        //        h2acc.insertBefore(img, h2acc.childNodes[0]);

        //        var htacc = document.createTextNode(window.lang.holder);
        //        h2acc.appendChild(htacc);

        //        if (e.data.acc === undefined) {

        //            let p = ce("p"); Append(p, tn("'" + window.holder + "' " + window.lang.notfound));

        //            content.appendChild(h2acc);
        //            content.appendChild(p);
        //            $('#main').css({ "background": "none" });
        //            return;
        //        }




        //        let full = true;
        //        //if (window.innerWidth < 600) full = false;
        //        h2acc.appendChild(aAcc(e.data.acc, full, true));

        //        let exch = document.createElement('a');
        //        Append(h2acc, ce("br"));

        //        let wal = window.wallets[e.data.acc.toLowerCase()];
        //        if (wal !== undefined) {
        //            var d = wal.name;
        //            let l = ce('img'); l.src = wal.logo;
        //            Attr(l, "style", "float: left; margin-right:5px; margin-top:3px; height: 16px; display: inline-block;");
        //            Attr(exch, "class", "exch");
        //            Attr(exch, "target", "_blank");
        //            Attr(exch, "href", wal.site);


        //            Append(exch, l);
        //            let le = ce('img'); le.src = "/wallets/ext.svg"; Attr(le, "width", "11"); Attr(le, "style", "margin-top:-6px;margin-left:3px");
        //            let se = ce('div'); Attr(se, "style", "display:inline-block; line-height: 18px; overflow: hidden; margin-top: 2px;"); Append(se, tn(d));
        //            Append(exch, se);
        //            Append(exch, le);
        //            content.appendChild(h2acc);
        //            content.appendChild(exch);
        //        } else {

        //            Append(exch, tn(d));
        //            content.appendChild(h2acc);
        //        }


        //        $('[data-toggle="tooltip"]').tooltip();
        //        //console.log(e);

        //        if (e.data.totalcount === 0) {

        //            var dvInfoNf = document.createElement("div");
        //            dvInfoNf.setAttribute('class', 'container acchead');
        //            dvInfoNf.appendChild(document.createTextNode(window.lang.notfound));
        //            content.appendChild(dvInfoNf);
        //            $('#main').css({ "background": "none" });
        //        } else {

        //            var dvInfo = document.createElement("div");
        //            dvInfo.setAttribute('class', 'container acchead');
        //            content.appendChild(dvInfo);

        //            var dvIdr = document.createElement("div");
        //            dvIdr.setAttribute('class', 'row accblock pt-2');

        //            dvInfo.appendChild(dvIdr);

        //            //var dvIA = document.createElement("div");
        //            //dvIA.setAttribute('class', 'col');
        //            //var hA = document.createElement("H4");
        //            //hA.setAttribute('class', 'PageSubHeader');
        //            //hA.appendChild(document.createTextNode(window.lang.addr));
        //            //dvIA.appendChild(hA);
        //            //dvIA.appendChild(document.createTextNode(window.holder));

        //            //dvIdr.appendChild(dvIA);
        //            var dvIbt = document.createElement("div");
        //            dvIbt.setAttribute('class', 'col-lg');
        //            dvIbt.setAttribute('style', '');
        //            var hbt = document.createElement("H5");
        //            hbt.setAttribute('class', '');

        //            hbt.appendChild(document.createTextNode(window.lang.balance_token));
        //            dvIbt.appendChild(hbt);

        //            var numa = numfix(numeral("'" + e.data.balance_mnc + "'").format('0,0.000000000000000000'), ".")


        //            if (numa === "0" && e.data.balance_mnc > 0) {
        //                numa = mz(e.data.balance_mnc);
        //            }
        //            dvIbt.appendChild(document.createTextNode(numa));
        //            dvIdr.appendChild(dvIbt);

        //            var dvIbe = document.createElement("div");
        //            dvIbe.setAttribute('class', 'col-lg');
        //            var hbe = document.createElement("H5");
        //            hbe.setAttribute('class', '');
        //            hbe.appendChild(document.createTextNode(window.lang.balance_eth));
        //            dvIbe.appendChild(hbe);



        //            dvIbe.appendChild(document.createTextNode(numfix(numeral("'" + e.data.balance_eth + "'").format('0,0.000000000000000000'), ".")));

        //            dvIdr.appendChild(dvIbe);

        //            var dvIfe = document.createElement("div");
        //            dvIfe.setAttribute('class', 'col-lg');
        //            var hfe = document.createElement("H5");
        //            hfe.setAttribute('class', '');
        //            hfe.appendChild(document.createTextNode(window.lang.sum_fee));
        //            dvIfe.appendChild(hfe);
        //            dvIfe.appendChild(document.createTextNode(numfix(numeral("'" + e.data.sum_fee + "'").format('0,0.000000000000000000'), ".")));

        //            dvIdr.appendChild(dvIfe);

        //            //var dvItx = document.createElement("div");
        //            //dvItx.setAttribute('class', 'col');
        //            //var hC = document.createElement("H5");
        //            //hC.setAttribute('class', 'PageSubHeader');
        //            //hC.appendChild(document.createTextNode(window.lang.txs));
        //            //dvItx.appendChild(hC);
        //            //dvItx.appendChild(document.createTextNode(e.data.totalcount));

        //            //dvIdr.appendChild(dvItx);

        //            var dvIsi = document.createElement("div");
        //            dvIsi.setAttribute('class', 'col-lg');
        //            var hSi = document.createElement("H5");
        //            hSi.setAttribute('class', '');
        //            hSi.appendChild(document.createTextNode(window.lang.sum_in));
        //            dvIsi.appendChild(hSi);

        //            dvIsi.setAttribute('title', numfix(numeral("'" + e.data.sum_in + "'").format('0,0.000000000000000000'), ".") + " MNC");
        //            dvIsi.appendChild(document.createTextNode(numfix(numeral("'" + e.data.sum_in + "'").format('0,0.00000000'), ".")));

        //            dvIdr.appendChild(dvIsi);

        //            var dvIso = document.createElement("div");
        //            dvIso.setAttribute('class', 'col-lg');
        //            var hSo = document.createElement("H5");
        //            hSo.setAttribute('class', '');
        //            hSo.appendChild(document.createTextNode(window.lang.sum_out));
        //            dvIso.appendChild(hSo);
        //            dvIso.setAttribute('title', numfix(numeral("'" + e.data.sum_out + "'").format('0,0.000000000000000000'), ".") + " MNC");
        //            dvIso.setAttribute('data-toggle', "tooltip");
        //            dvIso.appendChild(document.createTextNode(numfix(numeral("'" + e.data.sum_out + "'").format('0,0.00000000'), ".")));

        //            dvIdr.appendChild(dvIso);


        //            var table = document.createElement("TABLE");
        //            table.setAttribute('class', 'table');
        //            var trh = document.createElement('tr');
        //            var thh = document.createElement('th');
        //            thh.appendChild(document.createTextNode(window.lang.hash));
        //            trh.appendChild(thh);

        //            var tha = document.createElement('th');
        //            tha.appendChild(document.createTextNode(window.lang.age));
        //            tha.setAttribute('class', 'hidemobile');
        //            trh.appendChild(tha);

        //            var ths = document.createElement('th');
        //            ths.appendChild(document.createTextNode(window.lang.sender));
        //            ths.setAttribute('class', 'hidemobile');
        //            trh.appendChild(ths);

        //            var thar = document.createElement('th');
        //            thar.appendChild(document.createTextNode(""));
        //            trh.appendChild(thar);

        //            var thr = document.createElement('th');
        //            thr.appendChild(document.createTextNode(window.lang.recipient));
        //            thr.setAttribute('class', 'hidemobile');
        //            trh.appendChild(thr);

        //            var thq = document.createElement('th');
        //            thq.appendChild(document.createTextNode(window.lang.amount + " MNC"));
        //            trh.appendChild(thq);

        //            table.appendChild(trh);

        //            for (var i = 0; i < e.data.list.length; i++) {

        //                var dr = e.data.list[i];
        //                var tr = document.createElement('tr');

        //                var tdh = document.createElement('td');
        //                tdh.appendChild(aHash(dr["txhash"]));
        //                tr.appendChild(tdh);

        //                var tdAge = document.createElement('td');
        //                var txtime = dr["txtime"] * 1000;

        //                var inout = window.lang.in;
        //                var inoutcss = "in";


        //                var age = moment(txtime);
        //                var tna = document.createTextNode(age.fromNow(true));
        //                tdAge.appendChild(tna);
        //                tdAge.setAttribute('data-toggle', 'tooltip');
        //                tdAge.setAttribute('title', age.format('LLL'));
        //                tdAge.setAttribute('class', 'hidemobile');
        //                tr.appendChild(tdAge);

        //                var tdFrom = document.createElement('td');
        //                var from = document.createTextNode(window.lang.holder);
        //                let walfrom = window.wallets[dr["txfrom"].toLowerCase()];
        //                if (dr["txfrom"] !== window.holder || walfrom !== undefined) from = aAcc(dr["txfrom"], false, false);

        //                tdFrom.appendChild(from);
        //                tdFrom.setAttribute('class', 'hidemobile');
        //                tr.appendChild(tdFrom);

        //                var tdarr = document.createElement('td');
        //                var sparr = document.createElement('span');
        //                if (dr["txto"] !== window.holder) {
        //                    inout = window.lang.out;
        //                    inoutcss = "out";
        //                }
        //                sparr.setAttribute('class', 'sparr ' + inoutcss);
        //                sparr.appendChild(document.createTextNode(inout));
        //                tdarr.appendChild(sparr);
        //                tr.appendChild(tdarr);

        //                var tdTo = document.createElement('td');
        //                var to = document.createTextNode(window.lang.holder);
        //                let walto = window.wallets[dr["txto"].toLowerCase()];
        //                if (dr["txto"] !== window.holder || walto !== undefined) to = aAcc(dr["txto"], false, false);
        //                tdTo.setAttribute('class', 'hidemobile');
        //                tdTo.appendChild(to);
        //                tr.appendChild(tdTo);

        //                var tdTotal = document.createElement('td');
        //                let deci = dr["txvs"].split(".");
        //                if (deci.length === 2) deci = "." + deci[1];
        //                else deci = "";
        //                var tnt = document.createTextNode(numfix(numeral("'" + dr["txvalue"] + "'").format('0,0'), ".") + deci);
        //                tdTotal.appendChild(tnt);
        //                tr.appendChild(tdTotal);



        //                table.appendChild(tr);
        //            }

        //            var h2lst = document.createElement("H5");
        //            h2lst.setAttribute('class', '');
        //            h2lst.appendChild(document.createTextNode(window.lang.txs + " " + numeral("'" + e.data.totalcount + "'").format('0,0')));
        //            content.appendChild(h2lst);

        //            content.appendChild(table);

        //        }

        //        if (e.data.pages > 1)
        //            content.appendChild(Pager(e));


        //        $('#main').css({ "background": "none" });

        //    });

        //}

        //if (window.view === "top" || window.view === "topex") {


        //    var hpg = getParameterByName('page');
        //    var hsh = getParameterByName('show');
        //    if (hpg === null) hpg = 1;
        //    if (hsh === null) hsh = 11;

        //    var hadr = "/api/holders/?view=" + window.view + "&page=" + hpg + "&show=" + hsh;




        //    $.get(hadr, function (e) {

        //        var tabh = document.createElement("TABLE");
        //        tabh.setAttribute('class', 'table');
        //        var trhl = document.createElement('tr');


        //        var thhd = document.createElement('th');
        //        thhd.appendChild(document.createTextNode(window.lang.holder));
        //        trhl.appendChild(thhd);

        //        var thbh = document.createElement('th');
        //        thbh.appendChild(document.createTextNode(window.lang.balance_token));
        //        trhl.appendChild(thbh);

        //        var thra = document.createElement('th');
        //        thra.setAttribute('class', 'hidemobile');
        //        thra.appendChild(document.createTextNode(window.lang.balance_eth));
        //        trhl.appendChild(thra);

        //        let thp = document.createElement('th');
        //        thp.setAttribute('class', 'hidemobile');
        //        thp.appendChild(document.createTextNode(window.lang.balance_per));
        //        trhl.appendChild(thp);

        //        tabh.appendChild(trhl);

        //        let ts = coin.data.apis.avtomain.circulating_supply;

        //        for (var h = 0; h < e.data.list.length; h++) {

        //            var drh = e.data.list[h];
        //            var t = document.createElement('tr');

        //            var tdhl = document.createElement('td');
        //            from = aAcc(drh["pubkey"], false, false);
        //            tdhl.appendChild(document.createTextNode(drh["rnum"] + " "));
        //            tdhl.appendChild(from);
        //            t.appendChild(tdhl);

        //            var tdbt = document.createElement('td');

        //            let dbt = drh["bts"].split(".");
        //            if (dbt.length === 2) dbt = "." + dbt[1];
        //            else dbt = "";
        //            var tnbt = document.createTextNode(numfix(numeral("'" + drh["bts"] + "'").format('0,0'), ".") + dbt);
        //            tdbt.appendChild(tnbt);

        //            let currmnc = ce("span"); Attr(currmnc, "class", "currmnc"); Attr(currmnc, "data-value", drh["bts"]);
        //            if (window.price !== undefined) {

        //                let mnc = drh["bts"];
        //                let fiat = numeral(mnc * window.price).format('0,0.00');

        //                let sy = ce("b"); Append(sy, tn(symb));
        //                Append(currmnc, tn("(")); Append(currmnc, sy); Append(currmnc, tn(" " + fiat + ")"));
        //            }

        //            tdbt.appendChild(currmnc);


        //            t.appendChild(tdbt);

        //            var tdbb = document.createElement('td');
        //            tdbb.setAttribute('class', 'hidemobile');
        //            let dbb = drh["bbs"].split(".");
        //            if (dbb.length === 2) dbb = "." + dbb[1];
        //            else dbb = "";
        //            var tnbb = document.createTextNode(numfix(numeral("'" + drh["bbs"] + "'").format('0,0'), ".") + dbb);


        //            tdbb.appendChild(tnbb);

        //            let curreth = ce("span"); Attr(curreth, "class", "curreth"); Attr(curreth, "data-value", drh["bbs"]);
        //            if (window.price !== undefined) {
        //                let cur = localStorage.getItem('cur');
        //                if (cur === null) cur = "USD";

        //                let usdVal = parseFloat(drh["bbs"]) * parseFloat(coin.data.apis.etherscan_eth.result.ethusd);

        //                let priceUsd = 1;
        //                let calcPrice = 1;

        //                if (cur.endsWith(".")) {
        //                    priceUsd = window.coin.data.apis.p2pb2b[cur.replace(".", "")];
        //                    calcPrice = usdVal / priceUsd;
        //                } else {
        //                    priceUsd = window.coin.data.apis.usd.rates[cur.replace(".", "")];
        //                    calcPrice = priceUsd * usdVal;
        //                }

        //                let fiat = numeral(calcPrice).format('0,0.00');

        //                let sy = ce("b"); Append(sy, tn(symb));


        //                Append(curreth, tn("(")); Append(curreth, sy); Append(curreth, tn(" " + fiat + " )"));
        //            }
        //            tdbb.appendChild(curreth);

        //            t.appendChild(tdbb);

        //            // mnc - per
        //            // ts - 100 
        //            // per = mnc*100/ts

        //            let perc = numeral("'" + drh["balancetoken"] + "'").value() * 100 / ts;
        //            let percv = numeral("'" + drh["balancetoken"] + "'").value() * 100 / coin.data.topholder;

        //            let tdper = document.createElement('td');
        //            Attr(tdper, 'class', 'hidemobile');
        //            tdper.appendChild(tn(numeral("'" + perc + "'").format('0,0.0000') + "%")); //Append(tdper, ce("br"));
        //            let bar = ce("div"); let barw = ce("div"); Attr(bar, "class", "percentc"); Attr(barw, "style", "width: " + percv + "%"); Attr(barw, "class", "percentbar"); Append(bar, barw); Append(tdper, bar);
        //            t.appendChild(tdper);

        //            //TTTT
        //            tabh.appendChild(t);
        //        }

        //        var h2top = document.createElement("H2");
        //        h2top.setAttribute('class', 'PageHeader');
        //        h2top.appendChild(document.createTextNode(window.lang.top + " " + numeral("'" + e.data.totalcount + "'").format('0,0')));
        //        content.appendChild(h2top);

        //        content.appendChild(tabh);
        //        if (e.data.pages > 0)
        //            content.appendChild(Pager(e));


        //        let tte = document.createElement("div"); tte.setAttribute('class', 'btn-group mt-3'); Append(h2top, ce("br"));
        //        Append(h2top, tte);

        //        let btall = document.createElement("a"); btall.setAttribute('href', '/' + parcedlng + "/top/");
        //        if (window.view === "top") btall.setAttribute('class', 'btn btn-primary btn-sm');
        //        else btall.setAttribute('class', 'btn btn-outline-primary btn-sm');

        //        Append(btall, tn(window.lang.topall)); Append(tte, btall);
        //        let btex = document.createElement("a"); btex.setAttribute('href', '/' + parcedlng + "/topex/");
        //        if (window.view === "topex") btex.setAttribute('class', 'btn btn-primary btn-sm');
        //        else btex.setAttribute('class', 'btn btn-outline-primary btn-sm');
        //        Append(btex, tn(window.lang.topex)); Append(tte, btex);
        //        if (window.view === "topex") {

        //            let exs = numeral("'" + coin.data.exsum + "'").format('0,0.0000').replace(".0000", "");

        //            let exsum = ce("div"); Attr(exsum, "style", "margin-top: 28px; float: right; font-size: 12pt;");

        //            let mnc = ce("span"); Append(mnc, tn(" MNC")); Attr(mnc, "style", "font-size: 12px;")
        //            Append(exsum, tn(window.lang.itogo + ": ")); Append(exsum, tn(exs)); Append(exsum, mnc);
        //            Append(h2top, exsum);

        //        }


        //        $('#main').css({ "background": "none" });


        //    });

        //}

        //if (window.view === "tx") {

        //    var h2th = document.createElement("H2");
        //    h2th.setAttribute('class', 'PageHeader');
        //    var htth = document.createTextNode(window.lang.tx);
        //    h2th.appendChild(htth);
        //    h2th.appendChild(aHash(window.txh));
        //    content.appendChild(h2th);




        //    $.get("/api/tx/" + window.txh, function (h) {

        //        if (h.data.length === 0) {

        //            var dvInfoh = document.createElement("p");
        //            //dvInfoh.setAttribute('class', 'container');
        //            dvInfoh.appendChild(document.createTextNode(window.lang.notfound));
        //            content.appendChild(dvInfoh);



        //        } else {

        //            var dvtc = document.createElement("div");
        //            dvtc.setAttribute('class', 'container');
        //            content.appendChild(dvtc);

        //            var dvTdr = document.createElement("div");
        //            dvTdr.setAttribute('class', 'row HT');
        //            dvtc.appendChild(dvTdr);


        //            var dvTf = document.createElement("div");
        //            dvTf.setAttribute('class', 'col');
        //            var hTf = document.createElement("H4");
        //            hTf.setAttribute('class', 'PageSubHeader');
        //            hTf.appendChild(document.createTextNode(window.lang.sender));
        //            hTf.appendChild(aAcc(h.data[0].txfrom, false, false));
        //            dvTf.appendChild(hTf);
        //            dvTf.appendChild(document.createTextNode(h.data[0].txfrom));
        //            dvTdr.appendChild(dvTf);

        //            var dvTv = document.createElement("div");
        //            dvTv.setAttribute('class', 'col bigarror justify-content-center');
        //            var numv = numfix(numeral("'" + h.data[0].txvalue + "'").format('0,0.000000'), ".");

        //            let deci = h.data[0].txvs.split(".");
        //            if (deci.length === 2) deci = "." + deci[1];
        //            else deci = "";
        //            var tnt = numfix(numeral("'" + h.data[0].txvs + "'").format('0,0'), ".") + deci;

        //            dvTv.setAttribute('title', tnt + " MNC");


        //            dvTv.appendChild(document.createTextNode(numv + " MNC"));
        //            dvTdr.appendChild(dvTv);

        //            var dvTto = document.createElement("div");
        //            dvTto.setAttribute('class', 'col text-right');
        //            var hTto = document.createElement("H4");
        //            hTto.setAttribute('class', 'PageSubHeader justify-content-end text-right');
        //            hTto.appendChild(document.createTextNode(window.lang.recipient));
        //            hTto.appendChild(aAcc(h.data[0].txto, false, false));
        //            dvTto.appendChild(hTto);
        //            dvTto.appendChild(document.createTextNode(h.data[0].txto));
        //            dvTdr.appendChild(dvTto);


        //            var dvTdrd = document.createElement("div");
        //            dvTdrd.setAttribute('class', 'row');
        //            dvtc.appendChild(dvTdrd);
        //            var txtime = h.data[0].txtime * 1000;
        //            var ag = moment(txtime);
        //            var ta = document.createTextNode(ag.format('LLL'));

        //            var dvTtime = document.createElement("div");
        //            dvTtime.setAttribute('class', 'col');
        //            var hTtime = document.createElement("H4");
        //            hTtime.setAttribute('class', 'PageSubHeader');
        //            hTtime.appendChild(document.createTextNode(window.lang.time));
        //            dvTtime.appendChild(hTtime);
        //            dvTtime.appendChild(ta);
        //            dvTtime.appendChild(document.createElement("br"));
        //            // dvTtime.appendChild(document.createTextNode(ag.fromNow()));
        //            dvTdrd.appendChild(dvTtime);

        //            var dvTn = document.createElement("div");
        //            dvTn.setAttribute('class', 'col text-center');
        //            var hTn = document.createElement("H4");
        //            hTn.setAttribute('class', 'PageSubHeader text-center');
        //            hTn.appendChild(document.createTextNode("Nonce"));
        //            dvTn.appendChild(hTn);
        //            dvTn.appendChild(document.createTextNode(h.data[0].nonce));
        //            dvTdrd.appendChild(dvTn);

        //            var dvTfee = document.createElement("div");
        //            dvTfee.setAttribute('class', 'col text-center');
        //            var hTfee = document.createElement("H4");
        //            hTfee.setAttribute('class', 'PageSubHeader text-center');
        //            var numfee = numeral("'" + h.data[0].txfee + "'").format('0,0.000000000').replace(".000000000", "");
        //            hTfee.appendChild(document.createTextNode(window.lang.fee));
        //            dvTfee.appendChild(hTfee);
        //            dvTfee.appendChild(document.createTextNode(numfee));
        //            dvTdrd.appendChild(dvTfee);

        //            var dvTgp = document.createElement("div");
        //            dvTgp.setAttribute('class', 'col justify-content-end text-right');
        //            var hTgp = document.createElement("H4");
        //            hTgp.setAttribute('class', 'PageSubHeader justify-content-end text-right');
        //            hTgp.appendChild(document.createTextNode(window.lang.gp));
        //            dvTgp.appendChild(hTgp);
        //            dvTgp.appendChild(document.createTextNode(h.data[0].gasprice + "Gwei"));
        //            dvTdrd.appendChild(dvTgp);

        //            //var dvTb = document.createElement("div");
        //            //dvTb.setAttribute('class', 'col justify-content-end text-right');
        //            //var hTb = document.createElement("H4");
        //            //hTb.setAttribute('class', 'PageSubHeader');
        //            //hTb.appendChild(document.createTextNode(window.lang.block));
        //            //dvTb.appendChild(hTb);
        //            //dvTb.appendChild(document.createTextNode(h.data[0].block));
        //            //dvTdrd.appendChild(dvTb);

        //            var dvThash = document.createElement("div");
        //            dvThash.setAttribute('class', 'col');
        //            dvThash.setAttribute('style', 'padding-left: 0px !important;');
        //            var hTh = document.createElement("H4");
        //            hTh.setAttribute('class', 'PageSubHeader2');
        //            hTh.appendChild(document.createTextNode(window.lang.hash));
        //            content.appendChild(hTh);
        //            dvThash.appendChild(document.createTextNode(h.data[0].txhash));
        //            content.appendChild(dvThash);

        //            $('#main').css({ "background": "none" });

        //        }
        //        window.setTimeout("$('[data-toggle=\"tooltip\"]').tooltip()", 1000);

        //    });



        //}



        var footer = document.createElement("footer");
        footer.setAttribute('class', 'footer');
        var froot = document.createElement('div');
        froot.setAttribute('class', '');
        froot.setAttribute('id', 'footerdiv');
        footer.appendChild(froot);

        document.body.appendChild(footer);


        let banner = ce("section");
        Attr(banner, "id", "NetCoreShop");
        Attr(banner, "style", "padding: 1.2em; background: linear-gradient(207deg, #232526, #414345);text-align: center");
        let ncsa = ce("a"); Attr(ncsa, "href", "https://github.com/edwardsky/netcoreshop");Attr(ncsa, "target", "_blank");
        let ncsl = ce("img");
        Attr(ncsl, "src", "/netcoreshopbadge.svg");
        Attr(ncsl, "height", "20");
        Attr(ncsl, "border", "0");
        Append(ncsa, ncsl);
        Append(banner, tn("Made on "));
        Append(banner, ncsa);
        Append(document.body, banner);


        $("#footerdiv").load(window.lang.cc);

        $("#txtSearch").click(function (e) {
            $("#txtSearch").css('width', '100%');
            $("#frmSearch").css('width', '100%');
            $("#frmSearch").css('margin-right', '');
            $(this).attr("placeholder", window.lang.enterserchedtext);
            $("#ulMenu").hide();
        });
        $("#txtSearch").focus(function (e) {
            $("#txtSearch").css('width', '100%');
            $(this).attr("placeholder", window.lang.enterserchedtext);
            $("#frmSearch").css('width', '100%');
            $("#frmSearch").css('margin-right', '');
            $("#ulMenuTop").hide();
        });
        $("#txtSearch").focusout(function (e) {
            $(this).attr("placeholder", window.lang.search);
            $("#txtSearch").css('width', '');
            $("#frmSearch").css('width', '');
            $("#frmSearch").css('margin-right', '10px');
            $("#ulMenuTop").show();
        });
        $("#txtSearch").bind('input', function () {
            var txt = $(this).val();
            var findedAddr = false;
            var findedTx = false;
            if (txt.length === 66) {
                var res = txt.match(/^(0x)?[0-9a-f]{64}$/i);
                if (!(res === null)) findedTx = true;
            }
            if (txt.length === 42) {
                var result = txt.match(/^(0x)?[0-9a-f]{40}$/i);
                if (!(result === null)) findedAddr = true;
            }
            if (findedAddr) window.location = "/" + window.parcedlng + "/accounts/" + txt;
            if (findedTx) window.location = "/" + window.parcedlng + "/tx/" + txt;
            if (!findedTx && !findedAddr) {
                $(this).css("border", "solid 1px red");
            }
            if (txt === "") $(this).css("border", "");
        });

       // updateCoinData();

    });
}

function updateCoinData() {
    let cur = localStorage.getItem('cur');
    if (cur === null) cur = "USD";
    var offset = -1 * new Date().getTimezoneOffset();

    let nowdate = new Date().valueOf();
    let stop = window.lastmove + 50000;

    //let gas = document.getElementById("gasWGT");
    //if (gas !== null)  Attr(gas, "style", "background-image: url(\"" + window.gasload + "\");");

    if (stop > nowdate) {



        //update all
        $.get("/api/coin/?tz=" + offset, function (e) {
            window.coin = e;

        });

        gasDraw(window.coin);

        UpdatePrice(cur);
        calcCoin();
        if (window.view === "coin") updateChart();
    }


    //setTimeout("updateCoinData()", 3000);
}

function gasDraw(e) {

    //TODO online

    // let bgcolors = ["#52c234, #061700", "#dce35b, #45b649", "#f09819, #edde5d", "#ed213a, #93291e"];
    //let gas = document.getElementById("gasWGT");
    //let gwei = parseFloat(e.data.apis.etherscan_gas.result.FastGasPrice);

    //// if (gwei < coin.data.apis.gas_eth.rpc) gwei = Math.round(((coin.data.apis.gas_eth.rpc + coin.data.apis.gas_eth.fast) / 2 * 1.11) * 100) / 100;

    //// gwei = Math.round(Math.random() * 1400) / 10;

    //if (gas === null) {
    //    gas = ce("a");
    //    Attr(gas, "id", "gasWGT");
    //    Attr(gas, "href", "https://etherscan.io/gastracker");
    //    Attr(gas, "target", "_blank");
    //    Attr(gas, "Title", "Fast Gas Price");

    //    document.body.appendChild(gas);
    //    let gasFast = document.getElementById("gasWGTprice");
    //    if (gasFast === null) {
    //        gasFast = ce("div");
    //        Attr(gasFast, "id", "gasWGTprice");
    //        Append(gas, gasFast);
    //    }



    //    let gasSpan = document.getElementById("gasWGTspan");
    //    if (gasSpan === null) {
    //        gasSpan = ce("span");
    //        Attr(gasSpan, "id", "gasWGTspan");
    //        Append(gasSpan, tn("Gwei"));
    //        Append(gas, gasSpan);
    //    }

    //}
    //gasFast = document.getElementById("gasWGTprice");

    ////Attr(gas, "style", "background-image:none;");
    ////if (gwei > 30 && gwei <= 50) Attr(gas, "style", "background:radial-gradient(farthest-side ellipse at top left, " + bgcolors[1] + ")");
    ////if (gwei > 50 && gwei <= 100) Attr(gas, "style", "background:radial-gradient(farthest-side ellipse at top left, " + bgcolors[2] + ")");
    ////if (gwei > 100) Attr(gas, "style", "background:radial-gradient(farthest-side ellipse at top left, " + bgcolors[3] + ")");
    //if (!isNaN(gwei)) gasFast.innerHTML = gwei;


}


function updateChart() {
    if (window.coinchart !== undefined) {
        var d2 = moment().subtract(1, 'days').format('dd');

        var d3 = moment().subtract(2, 'days').format('dd');
        var d4 = moment().subtract(3, 'days').format('dd');
        var d5 = moment().subtract(4, 'days').format('dd');
        var d6 = moment().subtract(5, 'days').format('dd');
        var d7 = moment().subtract(6, 'days').format('dd');


        var barChartData = {
            labels: [d7, d6, d5, d4, d3, d2, window.lang.today],
            datasets: [{
                label: window.lang.txs,
                backgroundColor: "#F0B90B",
                borderColor: "#F0B90B",
                borderWidth: 1,
                data: [
                    coin.data.chart[0],
                    coin.data.chart[1],
                    coin.data.chart[2],
                    coin.data.chart[3],
                    coin.data.chart[4],
                    coin.data.chart[5],
                    coin.data.chart[6]
                ]
            }]
        };

        window.coinchart.data = barChartData;
        window.coinchart.update(0);
    }
}

function mz(num) {
    var res = "";
    var nums = num.toString().replace("e", "").replace(".", "").split("-");
    var e = parseInt(nums[1]);
    for (var i = 0; i < e - 1; i++) {
        res = res + 0;
    }
    res = "0." + res + nums[0];
    return res;
}
function detectmob() {
    if (window.innerWidth <= 800 && window.innerHeight <= 600) {
        return true;
    } else {
        return false;
    }
}

(function () {
    // The random number is a js implementation of the Xorshift PRNG
    var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

    function seedrand(seed) {
        for (var l = 0; l < randseed.length; l++) {
            randseed[l] = 0;
        }
        for (var i = 0; i < seed.length; i++) {
            randseed[i % 4] = ((randseed[i % 4] << 5) - randseed[i % 4]) + seed.charCodeAt(i);
        }
    }

    function rand() {
        // based on Java's String.hashCode(), expanded to 4 32bit values
        var t = randseed[0] ^ (randseed[0] << 11);

        randseed[0] = randseed[1];
        randseed[1] = randseed[2];
        randseed[2] = randseed[3];
        randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));

        return (randseed[3] >>> 0) / ((1 << 31) >>> 0);
    }

    function createColor() {
        //saturation is the whole color spectrum
        var h = Math.floor(rand() * 360);
        //saturation goes from 40 to 100, it avoids greyish colors
        var s = ((rand() * 60) + 40) + '%';
        //lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
        var l = ((rand() + rand() + rand() + rand()) * 25) + '%';

        var color = 'hsl(' + h + ',' + s + ',' + l + ')';
        return color;
    }

    function createImageData(size) {
        var width = size; // Only support square icons for now
        var height = size;

        var dataWidth = Math.ceil(width / 2);
        var mirrorWidth = width - dataWidth;

        var data = [];
        for (var y = 0; y < height; y++) {
            var row = [];
            for (var x = 0; x < dataWidth; x++) {
                // this makes foreground and background color to have a 43% (1/2.3) probability
                // spot color has 13% chance
                row[x] = Math.floor(rand() * 2.3);
            }
            var r = row.slice(0, mirrorWidth);
            r.reverse();
            row = row.concat(r);

            for (var i = 0; i < row.length; i++) {
                data.push(row[i]);
            }
        }

        return data;
    }

    function buildOpts(opts) {
        var newOpts = {};

        newOpts.seed = opts.seed || Math.floor((Math.random() * Math.pow(10, 16))).toString(16);

        seedrand(newOpts.seed);

        newOpts.size = opts.size || 8;
        newOpts.scale = opts.scale || 4;
        newOpts.color = opts.color || createColor();
        newOpts.bgcolor = opts.bgcolor || createColor();
        newOpts.spotcolor = opts.spotcolor || createColor();

        return newOpts;
    }

    function renderIcon(opts, canvas) {
        opts = buildOpts(opts || {});
        var imageData = createImageData(opts.size);
        var width = Math.sqrt(imageData.length);

        canvas.width = canvas.height = opts.size * opts.scale;

        var cc = canvas.getContext('2d');
        cc.fillStyle = opts.bgcolor;
        cc.fillRect(0, 0, canvas.width, canvas.height);
        cc.fillStyle = opts.color;

        for (var i = 0; i < imageData.length; i++) {

            // if data is 0, leave the background
            if (imageData[i]) {
                var row = Math.floor(i / width);
                var col = i % width;

                // if data is 2, choose spot color, if 1 choose foreground
                cc.fillStyle = (imageData[i] === 1) ? opts.color : opts.spotcolor;

                cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
            }
        }
        return canvas;
    }

    function createIcon(opts) {
        var canvas = document.createElement('canvas');

        renderIcon(opts, canvas);

        return canvas;
    }

    var api = {
        create: createIcon,
        render: renderIcon
    };

    if (typeof module !== "undefined") {
        module.exports = api;
    }
    if (typeof window !== "undefined") {
        window.blockies = api;
    }

})();

init();

