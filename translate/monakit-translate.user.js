// ==UserScript==
// @name         MonaKit 翻译家
// @name:zh      MonaKit 翻译家
// @name:en      Monakit Translate
// @namespace    https://github.com/scris/monakit.git
// @homepageURL  https://ds.scris.top/
// @version      1.0
// @description  [中国可用] 谷歌不稳定，有道不准确，怎么办？这个脚本调用彩云小译官方 api 翻译网页全文
// @description:zh  [中国可用] 谷歌不稳定，有道不准确，怎么办？这个脚本调用彩云小译官方 api 翻译网页全文
// @description:en  A translation plugin based on ColorfulClouds Translate api to translate webpages between Chinese and English
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAyLTE3VDE4OjU5OjExKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMi0xN1QxOTowMDoxNiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMi0xN1QxOTowMDoxNiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplMmU2MjE1MS1kMWZjLTQ0MzYtODE2MC1lY2IyZTEyMGNkNjAiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxYTY4YzJlNS01NGZjLTc0NDYtOWFmNy1lY2FmMDUyM2VlMmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowYmU5NTYxNC04NzBmLTQyODAtYTc0Yi04NWNjYWQ0YzlkYzciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjBiZTk1NjE0LTg3MGYtNDI4MC1hNzRiLTg1Y2NhZDRjOWRjNyIgc3RFdnQ6d2hlbj0iMjAyMS0wMi0xN1QxODo1OToxMSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMmU2MjE1MS1kMWZjLTQ0MzYtODE2MC1lY2IyZTEyMGNkNjAiIHN0RXZ0OndoZW49IjIwMjEtMDItMTdUMTk6MDA6MTYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5l43gXAAADrUlEQVRo3u2aS0hUURjHjVq3rbZto3XbahktQ2pACIIQIgqRItq1alU7N9GmnSFChPTSxGrUdHyOr/ExOk9H563mY2bufN07eIYz537nNXr1Jn3wg7nnHOX8PJd7zv2PDQDQcBJoOHEiTtVAdxJMupz6/Y6L+IfTgHDmnxEJBrIgw9UikeUNkNFv3mY0rhJJRP6AjMGeJIorRHw/UyDjd6+YYxWZHc/cNAERw30pJY5NJLSYAxHBuRyorBThyEVioU2QMepNaXNkIt6vSZAx1p+uG8dFxgfTcBB8vxJK4xwVWZzNgojJobSQxqbmKrKxjomEg3ng4felpdASBNF4x0Ti4S3AmB5JK4GJiMazkzrd+v2cCZicqlvE3KAasU1rZiyjBCZh0fPFz/0ZayLnX4yACG2R6VHzr8RgbW5zE2qQibPXdBvL5dcLyiiLrCzkgCXgzyhDJs1e022Ea2/XhFw3udOxhyIViZqnU5aF6YwSP3pnqpMmbZO+WI0Mab/Vvi2EJ8CTsYkkouZJlUH2KCaQyWJtdF/ThwIXFQFMxiaCHSGCc1klyGTpzyz3Phe56ErQMjaR+akMsCzPZ5XgTb6jo6f6ubm3hFKvBFcktJQHFuwBwMKToPsfeg0U3gStwtrYdlQkHjI3P4bQYl4KK8D2twwZKCIJesLbRagpZnzYJrIf29QQXtqQQgR4/U/GyigykUefCsAWZ3ytCBbfRIIbQuiVwPqf+csoovueV4LxtSJYbBNd3hRCJHj9mITKbaUqgYpg8U1sZUsIEcH6zj73ougI1CWCxTjxEB/6tsL6L76csqGzAqTGVw2RSKdNBAsHVsPbXIgEr/9KW9iGTEL2uFXaR7BYJxHZ4UJEsL4b77IoPBHr2qOwb6htiEi8sxbdrQtP554NlScVe/0xUNIXwSKe9diuFuQgd7erACyqTyrV1TDxoCJY1JOM7ynBviPc/1YElsPcO4SnXywGSq0WZNzG3toe9JWARVek7mM8FgelE0UhvNfPx4MG0KicZHnl0X2xYsuKgDJrJS6iQKB1xAAa1WO56i2mJdLelgSL7LpRgf5sIRJ5OlEGmoNIYEd37eyXyBBySaOCLKLROSRie4rFQMSQroZ2Gk9E8qlyBZnIfshWRVVEJ3So+/sRU6TyiFZNAOmQ7YKJzmo4KqJbl14FgOagq3FsIlZdfZMAgs77uetErNIN31wrQko3hGto6R5ypQgp3b984/sdd4rwhA7ti57//6/lEv4CBst5IIq4hyUAAAAASUVORK5CYII=
// @author       Tianze Ds Qiu <https://ds.scris.top/>
// @match        *://*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

// 实现思路受 GitHub@yandd 的脚本启发
// Inspired by GitHub@yandd
// 代码几乎不可读，因为基于彩云相关 js 文件
// The code wasn't very readable, because it was build upon a bookmarklet-linked js file

!(function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = {
      exports: {},
      id: r,
      loaded: !1,
    });
    return e[r].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports;
  }
  var n = {};
  (t.m = e), (t.c = n), (t.p = ""), t(0);
})([
  function (e, t, n) {
    !(function () {
      function e() {
        document.URL.indexOf("slack.com") >= 0 ||
          (location.origin + location.pathname != ce &&
            (t(), (ce = location.origin + location.pathname)));
      }

      function t() {
        var e = m(),
          t = b.TRS_URL + "/v1/page/auth";
        e.open("POST", t, !0),
          e.setRequestHeader("X-Authorization", "token " + P),
          (e.timeout = 1e4),
          e.setRequestHeader("content-type", "application/json"),
          (e.onerror = function (e) {
            throw (
              (A.open({
                  content: F,
                  skin: "msg",
                  time: 5,
                }),
                new Error("PageAuth Error", e))
            );
          }),
          (e.onload = function (e) {
            var t = JSON.parse(this.responseText),
              n = t.auth_type;
            0 == t.rc ?
              n >= 0 &&
              ("android" == pe ?
                window.js.showSpendCMoney(B, "") :
                "ios" == pe ?
                window.webkit.messageHandlers.showSpendCMoney.postMessage({
                  title1: B,
                  title2: "",
                }) :
                A.open({
                  className: R,
                  content: B,
                  skin: "msg",
                  time: 2.3,
                }),
                (ie = t.page_id),
                (function () {
                  function e(n) {
                    if (
                      !(
                        "SCRIPT" == n.nodeName ||
                        "LINK" == n.nodeName ||
                        "STYLE" == n.nodeName ||
                        "CODE" == n.nodeName ||
                        "NOSCRIPT" == n.nodeName ||
                        "CITE" == n.nodeName ||
                        (n.classList &&
                          (n.classList.contains(R) ||
                            n.classList.contains(k) ||
                            n.classList.contains(N) ||
                            n.classList.contains("qq_face") ||
                            n.classList.contains("msg_input_wrapper") ||
                            n.classList.contains("prettyprint") ||
                            n.classList.contains("PROGRAMLISTING")))
                      )
                    )
                      for (
                        var r = n.childNodes, o = 0, i = r.length; o < i; o++
                      ) {
                        var a = r[o];
                        a &&
                          ((a.classList &&
                              (a.classList.contains(R) ||
                                a.classList.contains(k))) ||
                            (a.classList &&
                              (a.classList.contains("js_message_plain") ||
                                a.classList.contains("message_body")) ?
                              S(r[o]).children("." + k).length > 0 ||
                              (t(a), x.push(a)) :
                              "PRE" != a.nodeName &&
                              ("P" != a.nodeName ?
                                !(a.nodeName.indexOf("H") >= 0) ||
                                ("H1" != a.nodeName &&
                                  "H2" != a.nodeName &&
                                  "H3" != a.nodeName &&
                                  "H4" != a.nodeName &&
                                  "H5" != a.nodeName &&
                                  "H6" != a.nodeName) ||
                                (a.firstElementChild &&
                                  ("SPAN" == a.firstElementChild.nodeName ||
                                    "SPAN" == a.lastElementChild.nodeName ||
                                    "A" == a.firstElementChild.nodeName ||
                                    "A" == a.lastElementChild.nodeName)) ||
                                (a.parentElement &&
                                  "A" == a.parentElement.nodeName) ?
                                a.nodeType === Node.TEXT_NODE && l(a) ?
                                (I.push(a), f(a.parentElement, R)) :
                                a.nodeType === Node.ELEMENT_NODE && e(a) :
                                (T.push(a), f(a, R)) :
                                (v.push(a), f(a, R)))));
                      }
                  }

                  function t(e) {
                    var t = document.createElement("font");
                    f(t, k), e.appendChild(t);
                  }

                  function n() {
                    for (
                      var e = [],
                        t = [],
                        n = [],
                        r = [],
                        i = [],
                        a = [],
                        s = 0,
                        u = T.length; s < u; s++
                    )
                      h(T[s]) && ((e = e.concat(T.splice(s, 1))), s--);
                    for (var s = 0, u = v.length; s < u; s++)
                      h(v[s]) && ((t = t.concat(v.splice(s, 1))), s--);
                    x.length > 0 &&
                      o((n = n.concat(x.splice(0, x.length))), "pre");
                    for (var s = 0, u = M.length; s < u; s++)
                      h(M[s]) && ((r = r.concat(M.splice(s, 1))), s--);
                    for (var s = 0, u = B.length; s < u; s++)
                      h(B[s]) && ((i = i.concat(B.splice(s, 1))), s--);
                    for (var s = 0, u = I.length; s < u; s++)
                      g(I[s]) && ((a = a.concat(I.splice(s, 1))), s--);
                    var l = e.length + t.length + r.length + i.length,
                      d = T.length + v.length + M.length + B.length,
                      p = (l / (l + d).toFixed(2)) * 100;
                    isNaN(p) && (p = 0),
                      o(e, "h"),
                      o(t, "p"),
                      o(r, "a"),
                      o(i, "span"),
                      o(a, "text"),
                      c(p);
                  }

                  function o(e, t) {
                    for (
                      var n = [],
                        r = [],
                        o = [],
                        i = [],
                        a = [],
                        u = [],
                        c = [],
                        l = [],
                        d = [],
                        p = 0,
                        f = e.length; p < f; p++
                    ) {
                      var h = e[p],
                        g = "";
                      try {
                        g =
                          "text" == t ?
                          h.nodeValue :
                          h.innerText ||
                          h.innerHTML.replace(/& lt;.+?>/gim, "");
                      } catch (e) {
                        continue;
                      }
                      if ((g = g.trim())) {
                        var m = C.detectLang(g),
                          y = g.length;
                        if ("jp" == m)
                          y > 30 ? c.push(h) : y > 8 ? l.push(h) : d.push(h);
                        else if ("zh" == m)
                          y > 30 ? a.push(h) : y > 8 ? i.push(h) : u.push(h);
                        else {
                          var v = g.split(" ").length;
                          v > 30 ? o.push(h) : v > 6 ? r.push(h) : n.push(h);
                        }
                      }
                    }
                    n.sort(function (e, n) {
                        var r = e.innerText,
                          o = n.innerText;
                        return (
                          "text" == t && ((r = e.nodeValue), (o = n.nodeValue)),
                          r.trim().split(" ").length - o.trim().split(" ").length
                        );
                      }),
                      s(n, t, 50, "en2zh"),
                      s(r, t, 10, "en2zh"),
                      s(o, t, 3, "en2zh"),
                      s(u, t, 50, "zh2en"),
                      s(i, t, 10, "zh2en"),
                      s(a, t, 3, "zh2en"),
                      s(d, t, 50, "ja2zh"),
                      s(l, t, 20, "ja2zh"),
                      s(c, t, 3, "ja2zh");
                  }

                  function s(e, t, n, r) {
                    var o = 25;
                    for (n && (o = n); e.length > 0;) {
                      var i = e.splice(0, o);
                      u(i, t, r);
                    }
                  }

                  function u(e, t, n) {
                    function o() {
                      setTimeout(function () {
                        u(e, t, n);
                      }, 15e3);
                    }
                    for (var i = [], a = 0, s = e.length; a < s; a++) {
                      var c = e[a].innerText;
                      "text" == t && (c = e[a].nodeValue), i.push(d(c));
                    }
                    if (!(i.length <= 0)) {
                      var l = "en2zh",
                        h = b.TRS_URL + "/v1/page/translator";
                      "ja2zh" == n
                        ?
                        ((l = "ja2zh"),
                          (h = b.TRS_URL + "/v1/page/translator")) :
                        "zh2en" == n &&
                        ((l = "zh2en"),
                          (h = b.TRS_URL + "/v1/page/translator"));
                      var g = m();
                      g.open("POST", h, !0),
                        g.setRequestHeader("content-type", "application/json"),
                        g.setRequestHeader("X-Authorization", "token " + P),
                        (g.timeout = 27e3),
                        (g.ontimeout = function (r) {
                          A.open({
                              content: H,
                              class: k,
                              skin: "msg",
                              time: 2,
                            }),
                            u(e, t, n);
                        }),
                        (g.onerror = function (e) {
                          throw (o(), new Error("Translate Error", e));
                        }),
                        (g.onload = function (o) {
                          var a = JSON.parse(g.responseText);
                          if (a && 0 == a.rc) {
                            var s = a.target;
                            if (i.length != s.length)
                              throw new Error("sources targets length error");
                            for (var u = 0, c = e.length; u < c; u++) {
                              var l = e[u],
                                h = "";
                              if (
                                s[u] &&
                                s[u].target &&
                                ((h = s[u].target.trim()),
                                  i[u].trim().toLowerCase() !== h.toLowerCase())
                              ) {
                                var m = 0;
                                s[u].sentence_id && (m = s[u].sentence_id);
                                var y = s[u].count || 0,
                                  v = null;
                                if ("p" == t) {
                                  if (
                                    (((v = l.cloneNode(!0)).innerText = h),
                                      se &&
                                      h.length > 4 &&
                                      (v.contentEditable = !0),
                                      f(v, k),
                                      (v.sentence_id = m),
                                      (v.source_text = d(l.innerText)),
                                      y > 1)
                                  ) {
                                    var x = document.createElement("span");
                                    (x.className = O),
                                    (x.innerText = "(" + y + ")"),
                                    v.appendChild(x);
                                  }
                                  l.parentNode.insertBefore(v, l.nextSibling);
                                } else if ("pre" == t) {
                                  if (
                                    "" !=
                                    (v = S(l).children("." + k)[0]).innerText
                                  )
                                    continue;
                                  (h = p(h)).length > 4 &&
                                    se &&
                                    (v.contentEditable = !0),
                                    (v.sentence_id = m),
                                    (v.source_text = d(l.innerText)),
                                    (v.innerText = " " + h);
                                } else if ("h" == t) {
                                  if (
                                    ((h = p(h)),
                                      ((v = l.cloneNode(!0)).innerText = h),
                                      se && (v.contentEditable = !0),
                                      (v.sentence_id = m),
                                      (v.source_text = d(l.innerText)),
                                      f(v, k),
                                      y > 1)
                                  ) {
                                    var x = document.createElement("span");
                                    (x.className = O),
                                    (x.innerText = "(" + y + ")"),
                                    v.appendChild(x);
                                  }
                                  l.parentNode.insertBefore(v, l.nextSibling);
                                } else {
                                  if (
                                    ((h = p(h)),
                                      i[u].trim().toLowerCase() ===
                                      h.toLowerCase())
                                  )
                                    continue;
                                  if (
                                    (f((v = document.createElement("font")), k),
                                      se &&
                                      h.length > 4 &&
                                      "A" != l.parentNode.nodeName &&
                                      (v.contentEditable = !0),
                                      (v.sentence_id = m),
                                      (v.source_text = d(l.nodeValue)),
                                      (l.source = l.nodeValue),
                                      y > 1)
                                  ) {
                                    var x = document.createElement("span");
                                    (x.className = O),
                                    (x.innerText = "(" + y + ")"),
                                    v.appendChild(x);
                                  }
                                  (v.innerText = " " + h),
                                  l.parentNode.insertBefore(v, l.nextSibling);
                                }
                                "ja2zh" == n && f(v, "colored"), f(l, L);
                              }
                            }
                            "s" == de
                              ?
                              S("." + k + ":not('.cyxy-no-trs')").hide() :
                              "t" == de && r();
                          }
                        });
                      var h = C.parseURL(document.URL),
                        y = null,
                        v = null,
                        x = null,
                        w = null;
                      h.params.dict_name && (y = h.params.dict_name),
                        h.params.user_id && (v = h.params.user_id),
                        h.params.cached && (x = h.params.cached),
                        h.params.use_common_dict && (w = !0),
                        g.send(
                          JSON.stringify({
                            source: i,
                            trans_type: l,
                            request_id: se || oe || re || "web-translate",
                            url: document.URL,
                            page_id: ie,
                            replaced: !0,
                            cached: x || b.CACHED,
                            os_type: "web",
                            user_id: v || se,
                            use_common_dict: w || !1,
                            dict_name: y || "default_all2all",
                          })
                        );
                    }
                  }
                  var y = document.querySelectorAll("." + R);
                  if (!(y && y.length > 10)) {
                    var v = [],
                      x = [],
                      T = [],
                      M = [],
                      B = [],
                      D = (Date.now(), null),
                      I = [];
                    setInterval(function () {
                        e(document.body), n();
                      }, le),
                      c(20),
                      e(document.body),
                      c(40),
                      n(),
                      c(80),
                      (window.onscroll = function (t) {
                        null !== D && clearTimeout(D),
                          (D = setTimeout(function () {
                            e(document.body),
                              n(),
                              S(window).scrollTop() + S(window).height() >=
                              S(document).height() &&
                              (S(".cyxy-footer").show(),
                                setTimeout(function () {
                                  S(".cyxy-footer").hide();
                                }, 7500));
                          }, 200));
                      }),
                      setTimeout(function () {}, 500),
                      S("body")
                      .on(
                        "click",
                        "." + k + "[contenteditable]",
                        function () {
                          (E = S(this)).data("source_text") ||
                            E.data("source_text", this.source_text),
                            S(this)
                            .find("." + O)
                            .remove();
                          var e = this.sentence_id;
                          if ((a(), !se)) {
                            if ("share" == pe)
                              return (
                                xe ||
                                ((xe = !0),
                                  A.open({
                                    className: R,
                                    content: "想修改译文成为共同译者吗？<br>快来下载「彩云小译」吧！",
                                    btn: ["立即下载", "取消"],
                                    yes: function (e) {
                                      A.close(e),
                                        window.open(DOWNLOAD_URL, "_blank");
                                    },
                                    end: function () {
                                      setTimeout(function () {
                                        xe = !1;
                                      }, 500);
                                    },
                                  })),
                                S(this)
                              );
                            if ("android" == pe) return S(this);
                            if ("ios" == pe) return S(this);
                            w.testCookie(function (e) {
                              return e ?
                                ((se = e._id),
                                  void(ae = {
                                    username: e.name || "***",
                                    _id: e._id,
                                    avatar_url: e.avatar || b.DEFAULT_AVATAR_URL,
                                  })) :
                                S(this);
                            });
                          }
                          e
                            ?
                            w.fetchPageSentenceTargetList(
                              e,
                              se,
                              ie,
                              function (e) {
                                if (0 == e.rc) {
                                  var t,
                                    n = e.sentence;
                                  if (n && n.length > 0) {
                                    E.data("index", 0),
                                      S("#cyxy-popup-left-slide").hide(),
                                      E.data("targetList", n);
                                    for (
                                      var r = 0, o = n.length; r < o; r++
                                    )
                                      n[r] &&
                                      (n[r].user &&
                                        se == n[r].user.id &&
                                        (E.data("user_s_id", n[r].id),
                                          E.data("user_index", r)),
                                        n[r].invalid &&
                                        (n.splice(r, 1), r--));
                                    n.length > 1 &&
                                      S("#cyxy-popup-right-slide").show();
                                  }
                                  (t = n[0]),
                                  E.data("targetInfo") &&
                                    E.data("targetInfo").user.id !=
                                    t.user.id &&
                                    ((t = E.data("targetInfo")),
                                      E.data("index", -1)),
                                    S("#cyxy-popup-avatar").attr(
                                      "src",
                                      t.user.avatar_url
                                    ),
                                    S("#cyxy-popup-name").text(
                                      t.user.username
                                    ),
                                    S("#cyxy-popup-time").text(
                                      C.getDateDiff(t.updated_at)
                                    ),
                                    S("#cyxy-popup-favour-num").text(
                                      t.rate.LIKE || 0
                                    ),
                                    S("#cyxy-popup-favour-img").attr(
                                      "src",
                                      b.FAVOR_IMG_URL
                                    ),
                                    S("#cyxy-popup-oppose-num").text(
                                      t.rate.UNLIKE || 0
                                    );
                                }
                              }
                            ) :
                            (E.data("targetList", []),
                              S("#cyxy-popup-left-slide").hide(),
                              S("#cyxy-popup-right-slide").hide(),
                              S("#cyxy-popup-avatar").attr(
                                "src",
                                b.XIAOYI_DEFAULT_URL
                              ),
                              S("#cyxy-popup-name").text(Q),
                              S("#cyxy-popup-time").text(Z),
                              S("#cyxy-popup-favour-num").text("0"),
                              S("#cyxy-popup-favour-img").attr(
                                "src",
                                b.FAVOR_IMG_URL
                              ),
                              S(this).data("xiaoyiText", S(this).text()));
                          for (
                            var t = this,
                              n = t.offsetTop + t.offsetHeight + 5,
                              r = t.offsetLeft; t.offsetParent;

                          )
                            (t = t.offsetParent),
                            (n += t.offsetTop),
                            (r += t.offsetLeft);
                          return (
                            r > window.innerWidth / 3 &&
                            (r = 0.25 * window.innerWidth),
                            S(".cyxy-target-popup").css({
                              top: n,
                              left: r,
                            }),
                            S(".cyxy-target-popup").show(),
                            S(this).data("before", S(this).text()),
                            S(this)
                          );
                        }
                      )
                      .on(
                        "paste input",
                        "." + k + "[contenteditable]",
                        function () {
                          return (
                            S(this).data("before") !== S(this).text() &&
                            (E.data("status", "edit"),
                              S("#cyxy-popup-avatar").attr(
                                "src",
                                ae.avatar_url
                              ),
                              S("#cyxy-popup-name").text(ae.username),
                              S("#cyxy-popup-time").text(te),
                              S("#cyxy-popup-favour-num").text(ee),
                              S("#cyxy-popup-favour-img").attr(
                                "src",
                                b.CHECKED_IMG_URL
                              ),
                              S("#cyxy-popup-favour").addClass("commit"),
                              S("#cyxy-popup-oppose-num").text("0")),
                            S(this)
                          );
                        }
                      )
                      .on(
                        "blur focusout",
                        "." + k + "[contenteditable]",
                        function () {
                          return i(), S(this);
                        }
                      );
                  }
                })(),
                setTimeout(function () {
                  var e, t;
                  (e = m()),
                  (t = b.TRS_URL + "/v1/page/" + ie + "/author"),
                  e.open("POST", t, !0),
                    e.setRequestHeader("X-Authorization", "token " + P),
                    (e.timeout = 5e3),
                    e.setRequestHeader("content-type", "application/json"),
                    (e.onload = function (e) {
                      var t = JSON.parse(this.responseText);
                      if (0 == t.rc) {
                        var n = t.user_list,
                          r = n.length,
                          o = "",
                          i = "",
                          a = "";
                        n.forEach(function (e, t) {
                            e.username &&
                              "彩云小译" != e.username &&
                              ((i = "和"),
                                (a = "共同"),
                                (o = o + e.username + "、"));
                          }),
                          (o = o.substr(0, o.length - 1)),
                          r > 5 && (o += "等"),
                          S("#cyxy-footer-translator").text(i + o + a);
                        var s = (S(".cyxy-footer-p").text(), 9e3);
                        "和" == i && S(".cyxy-footer").show(),
                          "share" == pe &&
                          (S(".cyxy-footer").show(),
                            S(".cyxy-footer").click(function () {
                              location.href = b.DOWNLOAD_URL;
                            }),
                            (s = 3e4)),
                          setTimeout(function () {
                            S(".cyxy-footer").css({
                                opacity: 0.88,
                              }),
                              S(".cyxy-footer").hide();
                          }, s);
                      }
                    }),
                    (e.onerror = function (e) {
                      throw new Error("fetchPageTranslator Error", e);
                    }),
                    e.send(
                      JSON.stringify({
                        user_id: se,
                      })
                    );
                }, 4e3),
                "android" == pe ?
                window.js.cancelLoading() :
                "ios" == pe &&
                window.webkit.messageHandlers.removeLoadingView.postMessage(),
                6 === n &&
                (function () {
                  var e =
                    "file:" == window.location.protocol ?
                    "http:" :
                    window.location.protocol,
                    t = '<div class="cy_free_box" >';
                  (t +=
                    '<div class="cy_free_content"><img id="cy_free_content" src="' +
                    e +
                    '//www.caiyunapp.com/images/free-trs-box1.png" /></div>'),
                  (t += '<div class="cy_free_button">'),
                  (t +=
                    '<img  id="cy_free_button" src="' +
                    e +
                    '//www.caiyunapp.com/images/free-trs-button1.png" />'),
                  (t +=
                    '<img  id="cy_free_del" src="' +
                    e +
                    '//www.caiyunapp.com/images/free-trs-del-button.png" />'),
                  (t += "</div>"),
                  (t += "</div>"),
                  A.open({
                      content: t,
                      skin: "cy_free_content",
                    }),
                    S("#cy_free_content,#cy_free_button").click(function () {
                      var e, t;
                      (e = m()),
                      (t = b.TRS_URL + "/v1/coupon/generate"),
                      e.open("POST", t, !0),
                        e.setRequestHeader("X-Authorization", "token " + P),
                        (e.timeout = 1e4),
                        e.setRequestHeader(
                          "content-type",
                          "application/json"
                        ),
                        (e.onerror = function (e) {
                          y({});
                        }),
                        (e.onload = function (e) {
                          var t = JSON.parse(this.responseText),
                            n = {};
                          0 == t.rc &&
                            t.coupon &&
                            (n = {
                              coupon_code: t.coupon.coupon_code,
                              device_id: t.coupon.device_id,
                            }),
                            y(n);
                        }),
                        e.send(
                          JSON.stringify({
                            browser_id: re,
                          })
                        );
                    }),
                    S("#cy_free_del").click(function () {
                      A.closeAll();
                    });
                })()) :
              -1 == n ?
              "android" == pe ?
              window.js.showLoginDialog(_, "") :
              "ios" == pe ?
              window.webkit.messageHandlers.showLoginDialog.postMessage({
                title: _,
              }) :
              A.open({
                content: _,
                btn: ["登录", "取消"],
                yes: function (e) {
                  A.close(e), window.open(b.LOGIN_URL, "_blank");
                },
              }) :
              -101 == n &&
              ("android" == pe ?
                window.js.showOpeningVIPDialog(j) :
                "ios" == pe ?
                window.webkit.messageHandlers.showOpeningVIPDialog.postMessage({
                  title: j,
                }) :
                A.open({
                  content: j,
                  btn: ["成为VIP", "取消"],
                  yes: function (e) {
                    w.alipayForOneMonthRedeem(se, function (e) {
                        0 == e.rc && e.alipay.notify_url ?
                          window.open(e.alipay.notify_url, "_blank") :
                          A.open({
                            content: q,
                            skin: "msg",
                            time: 3,
                          });
                      }),
                      A.close(e);
                  },
                })),
              w.postAction({
                  appName: "xiaoyi",
                  packgeName: "xiaoyi_trsjs",
                  userId: se,
                  action: "open_url",
                  ostype: "web",
                  vip: ue,
                  userAgent: ne,
                  extra: {
                    type: "trsjs_click",
                    url: document.URL,
                  },
                },
                function (e) {}
              );
          }),
          e.send(
            JSON.stringify({
              user_id: se,
              browser_id: re,
              device_id: oe,
              url: document.URL,
              title: document.title,
              os_type: "web",
            })
          );
      }

      function r() {
        S("." + k + M)
          .prev()
          .hide();
        for (
          var e = document.getElementsByClassName(k), t = 0; t < e.length; t++
        ) {
          var n = e[t].previousSibling;
          n && 3 == n.nodeType && (n.nodeValue = "");
        }
      }

      function o() {
        S("." + k)
          .prev()
          .show();
        for (
          var e = document.getElementsByClassName(k), t = 0; t < e.length; t++
        ) {
          var n = e[t].previousSibling;
          n && 3 == n.nodeType && n.source && (n.nodeValue = n.source);
        }
      }

      function i() {
        null !== ye && clearTimeout(ye),
          (ye = setTimeout(function () {
            S(".cyxy-target-popup").hide();
          }, 3e3));
      }

      function a() {
        null !== ye && clearTimeout(ye);
      }

      function s(e, t, n, r, o) {
        if (!ve) {
          var i = m(),
            a = b.TRS_URL + "/v1/page/" + ie + "/sentence",
            s = se;
          o && (s = o),
            (ve = !0),
            i.open("POST", a, !0),
            i.setRequestHeader("X-Authorization", "token " + P),
            (i.timeout = 5e3),
            i.setRequestHeader("content-type", "application/json"),
            (i.onload = function (e) {
              ve = !1;
              var t = JSON.parse(this.responseText);
              r(t);
            }),
            (i.onerror = function (e) {
              throw (
                ((ve = !1),
                  A.open({
                    content: W,
                    skin: "msg",
                    time: 3,
                  }),
                  new Error("commitPageSentence Error", e))
              );
            }),
            i.send(
              JSON.stringify({
                user_id: s,
                page_id: ie,
                source: e,
                target: t,
                trans_type: "en2zh",
                action: n || "",
              })
            );
        }
      }

      function u(e, t, n, r) {
        if (!ve) {
          var o = m();
          (ve = !0), (t = t.toUpperCase());
          var a = b.TRS_URL + "/v1/page/" + ie + "/sentence/" + e + "/comment";
          o.open("POST", a, !0),
            o.setRequestHeader("X-Authorization", "token " + P),
            (o.timeout = 3e3),
            o.setRequestHeader("content-type", "application/json"),
            (o.onload = function (e) {
              ve = !1;
              var t = JSON.parse(this.responseText);
              if (0 == t.rc) {
                var r = t.point.point_effect > 0 ? z : J;
                A.open({
                    content: r,
                    skin: "msg",
                    time: 2,
                  }),
                  n();
              } else
                -1 == t.rc ?
                A.open({
                  content: Y,
                  skin: "msg",
                  time: 2,
                }) :
                A.open({
                  content: W,
                  skin: "msg",
                  time: 3,
                });
            }),
            (o.onerror = function (e) {
              throw (
                ((ve = !1),
                  A.open({
                    content: W,
                    skin: "msg",
                    time: 3,
                  }),
                  new Error("commentPageSentence Error", e))
              );
            }),
            i(),
            o.send(
              JSON.stringify({
                user_id: se,
                sentence_id: e,
                trans_type: "en2zh",
                action: t,
              })
            );
        }
      }

      function c(e) {
        "android" == pe && window.js.changeProgress(e);
      }

      function l(e) {
        if (e.nodeValue) {
          var t = e.nodeValue.trim();
          return (
            t.length > 1 &&
            e.nodeValue.length < 2048 &&
            isNaN(t) &&
            !(function (e) {
              return !!e.match(
                /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi
              );
            })(t)
          );
        }
        return !1;
      }

      function d(e) {
        return e
          .trim()
          .replace("\n", "")
          .replace("<br>", "")
          .replace("&nbsp;", "");
      }

      function p(e) {
        var t = e[e.length - 1];
        return (
          ("." != t && "。" != t && "！" != t) ||
          (e = e.substr(0, e.length - 1).trim()),
          e
        );
      }

      function f(e, t) {
        var n = e.className || "";
        if ("string" != typeof n || -1 === n.indexOf(t)) {
          var r = n + ("" != n ? " " : "") + t;
          e.className = r;
        }
      }

      function h(e) {
        if (!e) return !1;
        const t =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        return (
          (e.getBoundingClientRect() && e.getBoundingClientRect().top) <=
          t + 200
        );
      }

      function g(e) {
        if (e && e.parentElement) return h(e.parentElement);
      }

      function m() {
        for (
          var e = [
              function () {
                return new XMLHttpRequest();
              },
              function () {
                return new ActiveXObject("Msxml2.XMLHTTP");
              },
              function () {
                return new ActiveXObject("Msxml3.XMLHTTP");
              },
              function () {
                return new ActiveXObject("Microsoft.XMLHTTP");
              },
            ],
            t = !1,
            n = 0; n < e.length; n++
        ) {
          try {
            t = e[n]();
          } catch (e) {
            continue;
          }
          break;
        }
        return t;
      }

      function y(e) {
        var t = "",
          n = "",
          r = "";
        e.coupon_code &&
          e.device_id &&
          ((t = "?coupon_code=" + e.coupon_code + "&device_id=" + e.device_id),
            (n = e.coupon_code),
            (r = e.coupon_code)),
          "android" == pe ?
          window.js.showLoginDialog(_, r) :
          "ios" == pe ?
          window.webkit.messageHandlers.showLoginDialog.postMessage({
            title: _,
            coupon_code: n,
          }) :
          (window.location.href = b.LOGIN_URL + t);
      }
      var v = document.querySelectorAll(".cyxy-target-popup");
      if (!(v && v.length > 0)) {
        var x = n(1),
          A = (n(2), n(6)),
          w = n(7),
          b = n(8),
          T = n(9),
          C = n(10),
          S = n(11);
        if (!0 !== b.disable) {
          var E,
            R = "cyxy-trs-source",
            L = "cyxy-trs-source-ted",
            k = "cyxy-trs-target",
            N = "cyxy-no-trs",
            O = "cyxy-target-count",
            M = ":not('.cyxy-no-trs')",
            P = b.token,
            B = "加载中",
            D = "",
            I = " 彩云朵！现有：",
            U = "修改成功，现有彩云朵：",
            _ =
            "限免次数已不足，成为小译注册用户，畅享更多阅读次数！现在注册还送彩云朵哟~",
            j =
            "诶呦喂~彩云朵不足！修订译文或点击赞、分享赚取彩云朵，或购买VIP畅享无限阅读次数",
            H = "翻译请求超时，可能是服务器太繁忙了，小译正在重试...",
            F = "抱歉，网页认证有误，请刷新重试",
            q = "抱歉，网络请求有误，请刷新重试",
            G = "抱歉，本地数据获取异常，请刷新重试",
            K = "抱歉，获取用户信息失败，请刷新重试",
            X = "修改译文成功",
            V = "译文未修改",
            W = "提交有误",
            z = "感谢点赞，+5 彩云朵！",
            J = "感谢点赞!",
            Y = "已经赞过啦",
            Q = "彩云小译",
            Z = "刚刚",
            ee = "提交",
            te = "现在",
            ne = navigator.userAgent,
            re = "",
            oe = "",
            ie = 0,
            ae = {},
            se = "",
            ue = "0",
            ce = location.origin + location.pathname,
            le = 2300,
            de = "b";
          (location.host.indexOf("youtube.com") >= 0 ||
            location.host.indexOf("wx.qq.com") >= 0 ||
            location.host.indexOf("slack.com") >= 0) &&
          (le = 1e3);
          for (
            var pe = (function () {
                var e = "web";
                return (
                  [
                    "interpreter.caiyunai.com",
                    "cdn.caiyunapp.com",
                    "interpreter-staging.caiyunai.com",
                  ].indexOf(location.host) >= 0 ?
                  ((e = "share"),
                    S("a").on("click", function (e) {
                      this.href &&
                        "#" != this.getAttribute("href")[0] &&
                        (e.preventDefault(),
                          window.open(
                            b.LNADING_URL +
                            "?targetUrl=" +
                            encodeURIComponent(this.href)
                          ));
                    })) :
                  (e =
                    ne.indexOf("Android") > 0 &&
                    window.js &&
                    "function" == typeof window.js.getUserData ?
                    "android" :
                    /(iPhone|iPad|iPod)/i.test(ne) &&
                    (me = window.cyUserData ?
                      window.cyUserData :
                      S("#cy-ios-user").text()) ?
                    "ios" :
                    "web"),
                  e
                );
              })(),
              fe = !1,
              he = (function () {
                var e = window.location.href,
                  t = window.location.protocol + "//";
                return e.slice(e.indexOf(t) + t.length);
              })(),
              ge = 0; ge < T.no_urlArr.length; ge++
          )
            if (he == T.no_urlArr[ge]) {
              fe = !0;
              break;
            }
          if (fe) return;
          !(function () {
            try {
              var n = document.querySelectorAll(".cyxy-target-popup");
              if (n && n.length > 0) return;
              (function () {
                function e() {
                  var e = parseInt(S("#cyxy-popup-favour-num").text()) + 1;
                  S("#cyxy-popup-favour-num").text(e),
                    E.data("comment", "like");
                  var t = E.data("targetInfo");
                  t && ((t.rate.LIKE = e), E.data("targetInfo", t));
                  var n = E.data("targetList"),
                    r = E.data("index");
                  n &&
                    n.length > 0 &&
                    r >= 0 &&
                    ((n[r].rate.lIKE = e), E.data("targetList", n));
                }

                function t() {
                  S("#cyxy-popup-oppose-num").text(
                      parseInt(S("#cyxy-popup-oppose-num").text()) + 1
                    ),
                    E.data("comment", "unlike");
                }
                var n = document.createElement("div");
                (n.className = "cyxy-target-popup " + R),
                (n.innerHTML =
                  '<div style="margin: auto"><img id="cyxy-popup-left-slide" src="https://caiyunapp.com/imgs/webtrs/left-slide.png"> <div id="cyxy-popup-userinfo"><img id="cyxy-popup-avatar" src="https://caiyunapp.com/imgs/xiaoyilogo.jpg" /> <div id="cyxy-popup-name-time"> <span id="cyxy-popup-name">彩云小译</span> <span id="cyxy-popup-time">刚刚</span></div></div><div id="cyxy-popup-favour"><img id="cyxy-popup-favour-img" src="https://caiyunapp.com/images/favour.png"><span id="cyxy-popup-favour-num">0</span></div><img id="cyxy-popup-right-slide" src="https://caiyunapp.com/imgs/webtrs/right-slide.png"></div>'),
                document.body.appendChild(n),
                  S(".cyxy-target-popup").hide(),
                  S("#cyxy-popup-left-slide").hide(),
                  S("#cyxy-popup-right-slide").hide(),
                  S(".cyxy-target-popup").click(function () {}),
                  S(document).mouseup(function (e) {
                    var t = S(".cyxy-target-popup");
                    t.is(e.target) ||
                      0 !== t.has(e.target).length ||
                      S("#cyxy-popup-favour").hasClass("commit") ||
                      t.hide();
                  }),
                  S("#cyxy-popup-left-slide").click(function () {
                    a();
                    var e = E.data("targetList"),
                      t = E.data("index");
                    if (!isNaN(t)) {
                      --t <= 0 && ((t = 0), S("#cyxy-popup-left-slide").hide()),
                        S("#cyxy-popup-right-slide").show();
                      var n = e[t];
                      E.data("targetInfo", n),
                        (E[0].sentence_id = n.id),
                        E.data("comment", ""),
                        E.text(n.content),
                        S("#cyxy-popup-favour-img").attr(
                          "src",
                          b.FAVOR_IMG_URL
                        ),
                        S("#cyxy-popup-avatar").attr("src", n.user.avatar_url),
                        S("#cyxy-popup-name").text(n.user.username),
                        S("#cyxy-popup-time").text(C.getDateDiff(n.updated_at)),
                        S("#cyxy-popup-favour-num").text(n.rate.LIKE || 0),
                        S("#cyxy-popup-oppose-num").text(n.rate.UNLIKE || 0),
                        E.data("index", t);
                    }
                  }),
                  S("#cyxy-popup-right-slide").click(function () {
                    a();
                    var e = E.data("targetList"),
                      t = E.data("index");
                    if (!isNaN(t)) {
                      ++t >= e.length - 1 &&
                        S("#cyxy-popup-right-slide").hide(),
                        t > 0 && S("#cyxy-popup-left-slide").show();
                      var n = e[t];
                      E.text(n.content),
                        E.data("targetInfo", n),
                        (E[0].sentence_id = n.id),
                        E.data("comment", ""),
                        S("#cyxy-popup-favour-img").attr(
                          "src",
                          b.FAVOR_IMG_URL
                        ),
                        S("#cyxy-popup-avatar").attr("src", n.user.avatar_url),
                        S("#cyxy-popup-name").text(n.user.username),
                        S("#cyxy-popup-time").text(C.getDateDiff(n.updated_at)),
                        S("#cyxy-popup-favour-num").text(n.rate.LIKE || 0),
                        S("#cyxy-popup-oppose-num").text(n.rate.UNLIKE || 0),
                        E.data("index", t);
                    }
                  }),
                  S("#cyxy-popup-favour").click(function () {
                    if (S("#cyxy-popup-favour").hasClass("commit"))
                      !(function (e) {
                        se &&
                          (E.data("before") !== E.text() ?
                            E.data("user_s_id") ?
                            (function (e, t, n, r) {
                              if (!ve) {
                                var o = m(),
                                  i =
                                  b.TRS_URL +
                                  "/v1/page/" +
                                  ie +
                                  "/sentence/" +
                                  t;
                                (ve = !0),
                                o.open("POST", i, !0),
                                  o.setRequestHeader(
                                    "X-Authorization",
                                    "token " + P
                                  ),
                                  (o.timeout = 5e3),
                                  o.setRequestHeader(
                                    "content-type",
                                    "application/json"
                                  ),
                                  (o.onload = function (e) {
                                    ve = !1;
                                    var t = JSON.parse(this.responseText);
                                    r(t);
                                  }),
                                  (o.onerror = function (e) {
                                    throw (
                                      ((ve = !1),
                                        A.open({
                                          content: W,
                                          skin: "msg",
                                          time: 3,
                                        }),
                                        r(),
                                        new Error(
                                          "commentPageSentence Error",
                                          e
                                        ))
                                    );
                                  }),
                                  o.send(
                                    JSON.stringify({
                                      source: e,
                                      target: n,
                                      user_id: se,
                                      sentence_id: t,
                                      trans_type: "en2zh",
                                    })
                                  );
                              }
                            })(
                              E.data("source_text"),
                              E.data("user_s_id"),
                              E.text(),
                              function (e) {
                                if (
                                  (S("#cyxy-popup-favour").removeClass(
                                      "commit"
                                    ),
                                    e && 0 == e.rc)
                                ) {
                                  S("#cyxy-popup-favour-img").attr(
                                    "src",
                                    b.FAVOR_IMG_URL
                                  );
                                  var t = E.data("targetList"),
                                    n = E.data("user_index"),
                                    r = 0;
                                  E.data("targetInfo") &&
                                    (r = E.data("targetInfo").rate.LIKE),
                                    t &&
                                    t.length > 0 &&
                                    n >= 0 &&
                                    ((t[n].content = E.text()),
                                      (t[n].rate.lIKE = r),
                                      E.data("targetList", t)),
                                    S("#cyxy-popup-favour-num").text(
                                      r || 0
                                    ),
                                    E.data("targetInfo", {
                                      id: e.sentence_id,
                                      content: E.text(),
                                      updated_at: Date.now(),
                                      user: {
                                        id: se,
                                        avatar_url: ae.avatar_url,
                                        username: ae.username,
                                      },
                                      rate: {
                                        LIKE: r,
                                        UNLIKE: 0,
                                      },
                                    }),
                                    E.data("before", E.text()),
                                    A.open({
                                      content: X,
                                      skin: "msg",
                                      time: 2,
                                    });
                                } else
                                  A.open({
                                    content: W,
                                    skin: "msg",
                                    time: 3,
                                  });
                              }
                            ) :
                            s(
                              E.data("source_text"),
                              E.text(),
                              "",
                              function (e) {
                                if (
                                  (S("#cyxy-popup-favour").removeClass(
                                      "commit"
                                    ),
                                    e && 0 == e.rc)
                                ) {
                                  (E[0].sentence_id = e.sentence_id),
                                  S("#cyxy-popup-favour-img").attr(
                                      "src",
                                      b.FAVOR_IMG_URL
                                    ),
                                    S("#cyxy-popup-favour-num").text(
                                      S("cyxy-popup-favour-num").text() || 0
                                    ),
                                    E.data("before", E.text());
                                  var t = {
                                    id: e.sentence_id,
                                    content: E.text(),
                                    updated_at: Date.now(),
                                    user: {
                                      id: se,
                                      avatar_url: ae.avatar_url,
                                      username: ae.username,
                                    },
                                    rate: {
                                      LIKE: S(
                                        "cyxy-popup-favour-num"
                                      ).text(),
                                      UNLIKE: 0,
                                    },
                                  };
                                  E.data("targetInfo", t);
                                  var n = E.data("targetList");
                                  if (
                                    (n &&
                                      n.length > 0 &&
                                      E.data("targetList", n.concat(t)),
                                      (function () {
                                        var e = S(
                                            "#cyxy-footer-translator"
                                          ).text(),
                                          t = "",
                                          n = "",
                                          r = "、";
                                        e.indexOf(ae.username) < 0 &&
                                          (e ||
                                            ((r = ""),
                                              (t = "和"),
                                              (n = "共同")),
                                            S("#cyxy-footer-translator").text(
                                              t + ae.username + r + e + n
                                            ));
                                      })(),
                                      "android" == pe)
                                  ) {
                                    var r =
                                      e.point.point_effect > 0 ?
                                      "+" + e.point.point_effect + I :
                                      U;
                                    window.js.showEditSuccess(
                                      D,
                                      r + e.point.total_point
                                    );
                                  } else if ("ios" == pe) {
                                    var r =
                                      e.point.point_effect > 0 ?
                                      "+" + e.point.point_effect + I :
                                      U;
                                    window.webkit.messageHandlers.showEditSuccess.postMessage({
                                      title1: D,
                                      title2: r + e.point.total_point,
                                    });
                                  } else {
                                    var r =
                                      e.point.point_effect > 0 ?
                                      "+" + e.point.point_effect + I :
                                      U;
                                    A.open({
                                      content: D + r + e.point.total_point,
                                      skin: "msg",
                                      time: 3,
                                    });
                                  }
                                } else
                                  A.open({
                                    content: W,
                                    skin: "msg",
                                    time: 3,
                                  });
                              }
                            ) :
                            1 == e &&
                            (S("#cyxy-popup-favour-img").attr(
                                "src",
                                b.FAVOR_IMG_URL
                              ),
                              S("#cyxy-popup-favour-num").text(
                                S("cyxy-popup-favour-num").text() || 0
                              ),
                              A.open({
                                content: V,
                                skin: "msg",
                                time: 2,
                              }))),
                          setTimeout(function () {
                            S("#cyxy-popup-favour").removeClass("commit");
                          }, 2e3);
                      })(1);
                    else {
                      var t = E[0].sentence_id;
                      t
                        ?
                        u(t, "POINT_LIKE_SENTENCE", e) :
                        s(
                          E.data("source_text"),
                          E.data("xiaoyiText"),
                          "",
                          function (n) {
                            n &&
                              0 == n.rc &&
                              ((t = n.sentence_id),
                                (E[0].sentence_id = t),
                                u(t, "POINT_LIKE_SENTENCE", e));
                          },
                          b.XIAOYI_USERID
                        );
                    }
                  }),
                  S("#cyxy-popup-oppose").click(function () {
                    var e = E.data("comment"),
                      n = E.data("sentence_id");
                    e
                      ?
                      "like" == e ?
                      u(n, "POINT_CANCEL_LIKE_SENTENCE", function () {
                        S("#cyxy-popup-favour-num").text(
                            parseInt(S("#cyxy-popup-favour-num").text()) - 1
                          ),
                          S("#cyxy-popup-favour-img").css("height", "18px"),
                          E.data("comment", "cancel");
                      }) :
                      "unlike" == e ?
                      u(n, "POINT_CANCEL_LIKE_SENTENCE", function () {
                        S("#cyxy-popup-oppose-num").text(
                            parseInt(S("#cyxy-popup-oppose-num").text()) - 1
                          ),
                          E.data("comment", "cancel"),
                          S("#cyxy-popup-oppose-img").css("height", "18px");
                      }) :
                      "cancel" == e && u(n, "POINT_UNLIKE_SENTENCE", t) :
                      n ?
                      u(n, "POINT_UNLIKE_SENTENCE", t) :
                      s(
                        E.data("source_text"),
                        E.data("before"),
                        "",
                        function (e) {
                          e &&
                            0 == e.rc &&
                            ((n = e.sentence_id),
                              (E[0].sentence_id = n),
                              u(n, "POINT_UNLIKE_SENTENCE", t));
                        },
                        b.XIAOYI_USERID
                      );
                  });
              })(),
              C.preload([
                  b.XIAOYI_DEFAULT_URL,
                  b.FAVOR_IMG_URL,
                  b.CHECKED_IMG_URL,
                  b.LEFT_SLIDE_URL,
                  b.RIGHT_SLIDE_URL,
                ]),
                (function () {
                  if ("share" == pe)
                    new x().get(function (e, n) {
                      (re = e), t();
                    });
                  else if ("android" == pe)
                    try {
                      var e = JSON.parse(window.js.getUserData());
                      (oe = e.device_id),
                      e.user &&
                        ((ae = {
                            username: e.user.username || "",
                            _id: e.user._id || "",
                            avatar_url: e.user.avatar_url || b.DEFAULT_AVATAR_URL,
                          }),
                          (se = e.user._id || "")),
                        t();
                    } catch (e) {
                      A.open({
                        content: G + e,
                        skin: "msg",
                        time: 5,
                      });
                    }
                  else if ("ios" == pe)
                    try {
                      var e = JSON.parse(decodeURIComponent(me));
                      (oe = e.device_id || ""),
                      e.lang || "zh",
                        e.user &&
                        ((ae = {
                            username: e.user.username || "",
                            _id: e.user._id || "",
                            avatar_url: e.user.avatar_url || b.DEFAULT_AVATAR_URL,
                          }),
                          (se = e.user._id || "")),
                        t();
                    } catch (e) {
                      A.open({
                        content: G + e,
                        skin: "msg",
                        time: 5,
                      });
                    }
                  else
                    w.testCookie(function (e) {
                      e
                        ?
                        (function (e, t) {
                          var n = m(),
                            r = b.TRS_URL + "/v1/user/" + e;
                          n.open("POST", r, !0),
                            n.setRequestHeader(
                              "X-Authorization",
                              "token " + P
                            ),
                            (n.timeout = 1e4),
                            n.setRequestHeader(
                              "content-type",
                              "application/json"
                            ),
                            (n.onload = function (e) {
                              var n = JSON.parse(this.responseText);
                              0 == n.rc ?
                                (t(n.user),
                                  n.user.avatar_url &&
                                  S(
                                    ".cyxy-personal .cyxy-favorite-btn"
                                  ).attr("src", n.user.avatar_url)) :
                                A.open({
                                  content: K,
                                  skin: "msg",
                                  time: 3,
                                });
                            }),
                            n.send(
                              JSON.stringify({
                                user_id: se,
                                page_id: ie,
                                url: document.URL,
                              })
                            );
                        })((se = e._id), function (e) {
                          (ae = e),
                          e &&
                            !e.avatar_url &&
                            (ae.avatar_url = b.DEFAULT_AVATAR_URL),
                            ae.biz.is_xy_vip && (ue = "1"),
                            t();
                        }) :
                        new x().get(function (e, n) {
                          (re = e), t();
                        });
                    });
                })(),
                (function () {
                  /*var e = document.createElement("div");
              e.className = "cyxy-personal " + R,
                e.innerHTML = '<a href = "https://fanyi.caiyunapp.com/user/center/" target="_blank"><img class="cyxy-favorite-btn" src = "https://www.caiyunapp.com/imgs/webtrs/default.png" /></a>',
                document.body.appendChild(e);*/
                  var t = document.createElement("div");
                  t.className = "cyxy-function " + R;
                  var n = "https://www.caiyunapp.com/";
                  var type = 0;
                  (t.innerHTML =
                    '<img class="cyxy-favorite-btn"  src="' +
                    n +
                    'imgs/webtrs/fanyi-btn-hover.png" />'),
                  document.body.appendChild(t),
                    ($favorite = S(".cyxy-function >img")),
                    //
                    setTimeout(function () {
                      ((de = "s"),
                        S(".cyxy-function >img").attr("src", n + "imgs/webtrs/mode-s.png"),
                        S(".cyxy-trs-target").hide(),
                        S(".cyxy-trs-source").show(),
                        S(".cyxy-target-popup").hide(),
                        type = 0);
                    }, 1000),
                    //
                    S(".cyxy-function").click(function () {
                      //mode-s 原，mode-t 译
                      type == 0 ?
                        ((de = "s"),
                          $favorite.attr("src", n + "imgs/webtrs/mode-t.png"),
                          r(), S("." + k).show(), type = 1) :
                        type == 1 ?
                        ((de = "t"),
                          $favorite.attr("src", n + "imgs/webtrs/mode-s.png"),
                          S("." + k + M).hide(), o(), type = 2) :
                        "t" == de &&
                        ((de = "b"),
                          $favorite.attr(
                            "src",
                            n + "imgs/webtrs/fanyi-btn-hover.png"
                          ),
                          o(), S("." + k).show(), type = 0);
                      /*(origin)"b" == de
                        ?
                        ((de = "s"),
                          $favorite.attr("src", n + "imgs/webtrs/mode-s.png"),
                          S("." + k + M).hide(),
                          o()) :
                        "s" == de ?
                        ((de = "t"),
                          $favorite.attr("src", n + "imgs/webtrs/mode-t.png"),
                          r(),
                          S("." + k).show()) :
                        "t" == de &&
                        ((de = "b"),
                          $favorite.attr(
                            "src",
                            n + "imgs/webtrs/fanyi-btn-hover.png"
                          ),
                          o(),
                          S("." + k).show());*/
                    });
                  /*var i = document.createElement("div");
              i.className = "cyxy-favorite",
                i.innerHTML = '<img class="cyxy-favorite-btn" id="cyxyFavoriteBtn" src="https://caiyunapp.com/imgs/webtrs/favorite-btn.png" />',
                document.body.appendChild(i);
              var a = !1;
              S(".cyxy-favorite").click(function () {
                a || w.postFavorite(document.URL, se, function (e) {
                  0 == e.rc ? (A.open({
                    type: 4,
                    content: "<div class='collection-success'>收藏成功<a href='http://fanyi.caiyunapp.com/user/center/#/mine/favorite' target='_blank'><span class='collection-icon'></span></a></div>",
                    time: 8,
                    skin: "msg"
                  }), $("#cyxyFavoriteBtn").attr("src", "https://caiyunapp.com/imgs/webtrs/favorite-on-btn.png"), a = !0) : A.open({
                    content: "收藏失败",
                    skin: "msg",
                    time: 3
                  })
                })
              })*/
                })(),
                (function () {
                  /*if (!(location.host.indexOf("bing.com") >= 0 || location.host.indexOf("wx.qq.com") >= 0 || location.host.indexOf("slack.com") >= 0)) {
                var e = document.createElement("div");
                e.className = "cyxy-footer " + R,
                  e.innerHTML = "<div class='cyxy-footer-p'>本网页由彩云小译<font id='cyxy-footer-translator'></font>翻译<div/>",
                  "share" == pe && (e.innerHTML = "<div class='cyxy-footer-p'>原网页由彩云小译<font id='cyxy-footer-translator'></font>翻译<div/>"),
                  document.body.appendChild(e)
              }*/
                })(),
                (function () {
                  var e = document.createElement("iframe");
                  (e.src =
                    ("https:" == document.location.protocol ?
                      "https://" :
                      "http://") +
                    "caiyunapp.com/xiaoyi/web_translate_data_stat.html"),
                  e.setAttribute("style", "display: none;"),
                    document.body.appendChild(e);
                })(),
                setTimeout(function () {
                  e(),
                    setInterval(function () {
                      e();
                    }, 3e3);
                }, 9e3);
            } catch (n) {}
          })();
          var me,
            ye = null,
            ve = !1,
            xe = !1,
            Ae = new Date();
          (window.cyPageMark = function () {
            var e = C.wordStatistics(document.body),
              t = Math.round((new Date().getTime() - Ae.getTime()) / 1e3),
              n = t / ((1.6 * e.en_words + e.zh_chars) / 9);
            n >= 1 && (n = 1),
              w.pageMark({
                  time: t,
                  chars: Math.round(e.chars * n),
                  en_words: Math.round(e.en_words * n),
                  zh_chars: Math.round(e.zh_chars * n),
                },
                se,
                ie,
                function (e) {}
              );
          }),
          (window.onbeforeunload = function () {
            cyPageMark();
          });
        }
      }
    })();
  },
  function (e, t) {
    !(function (t, n, r) {
      "use strict";
      "function" == typeof window.define && window.define.amd ?
        window.define(r) :
        void 0 !== e && e.exports ?
        (e.exports = r()) :
        n.exports ?
        (n.exports = r()) :
        (n.Fingerprint2 = r());
    })(0, this, function () {
      "use strict";
      var e = function (t) {
        return this instanceof e ?
          ((this.options = this.extend(t, {
              swfContainerId: "fingerprintjs2",
              swfPath: "flash/compiled/FontList.swf",
              detectScreenOrientation: !0,
              sortPluginsFor: [/palemoon/i],
              userDefinedFonts: [],
              excludeDoNotTrack: !0,
              excludePixelRatio: !0,
            })),
            (this.nativeForEach = Array.prototype.forEach),
            void(this.nativeMap = Array.prototype.map)) :
          new e(t);
      };
      return (
        (e.prototype = {
          extend: function (e, t) {
            if (null == e) return t;
            for (var n in e) null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
            return t;
          },
          get: function (e) {
            var t = this,
              n = {
                data: [],
                addPreprocessedComponent: function (e) {
                  var r = e.value;
                  "function" == typeof t.options.preprocessor &&
                    (r = t.options.preprocessor(e.key, r)),
                    n.data.push({
                      key: e.key,
                      value: r,
                    });
                },
              };
            (n = this.userAgentKey(n)),
            (n = this.languageKey(n)),
            (n = this.colorDepthKey(n)),
            (n = this.deviceMemoryKey(n)),
            (n = this.pixelRatioKey(n)),
            (n = this.hardwareConcurrencyKey(n)),
            (n = this.screenResolutionKey(n)),
            (n = this.availableScreenResolutionKey(n)),
            (n = this.timezoneOffsetKey(n)),
            (n = this.sessionStorageKey(n)),
            (n = this.localStorageKey(n)),
            (n = this.indexedDbKey(n)),
            (n = this.addBehaviorKey(n)),
            (n = this.openDatabaseKey(n)),
            (n = this.cpuClassKey(n)),
            (n = this.platformKey(n)),
            (n = this.doNotTrackKey(n)),
            (n = this.pluginsKey(n)),
            (n = this.canvasKey(n)),
            (n = this.webglKey(n)),
            (n = this.webglVendorAndRendererKey(n)),
            (n = this.adBlockKey(n)),
            (n = this.hasLiedLanguagesKey(n)),
            (n = this.hasLiedResolutionKey(n)),
            (n = this.hasLiedOsKey(n)),
            (n = this.hasLiedBrowserKey(n)),
            (n = this.touchSupportKey(n)),
            (n = this.customEntropyFunction(n)),
            this.fontsKey(n, function (n) {
              t.audioKey(n, function (n) {
                var r = [];
                t.each(n.data, function (e) {
                  var t = e.value;
                  t && "function" == typeof t.join ?
                    r.push(t.join(";")) :
                    r.push(t);
                });
                var o = t.x64hash128(r.join("~~~"), 31);
                return e(o, n.data);
              });
            });
          },
          audioKey: function (e, t) {
            if (this.options.excludeAudioFP) return t(e);
            var n =
              window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (null == n)
              return (
                e.addPreprocessedComponent({
                  key: "audio_fp",
                  value: null,
                }),
                t(e)
              );
            var r = new n(1, 44100, 44100),
              o = r.createOscillator();
            (o.type = "triangle"),
            o.frequency.setValueAtTime(1e4, r.currentTime);
            var i = r.createDynamicsCompressor();
            this.each(
                [
                  ["threshold", -50],
                  ["knee", 40],
                  ["ratio", 12],
                  ["reduction", -20],
                  ["attack", 0],
                  ["release", 0.25],
                ],
                function (e) {
                  void 0 !== i[e[0]] &&
                    "function" == typeof i[e[0]].setValueAtTime &&
                    i[e[0]].setValueAtTime(e[1], r.currentTime);
                }
              ),
              (r.oncomplete = function (n) {
                var r = n.renderedBuffer
                  .getChannelData(0)
                  .slice(4500, 5e3)
                  .reduce(function (e, t) {
                    return e + Math.abs(t);
                  }, 0)
                  .toString();
                return (
                  o.disconnect(),
                  i.disconnect(),
                  e.addPreprocessedComponent({
                    key: "audio_fp",
                    value: r,
                  }),
                  t(e)
                );
              }),
              o.connect(i),
              i.connect(r.destination),
              o.start(0),
              r.startRendering();
          },
          customEntropyFunction: function (e) {
            return (
              "function" == typeof this.options.customFunction &&
              e.addPreprocessedComponent({
                key: "custom",
                value: this.options.customFunction(),
              }),
              e
            );
          },
          userAgentKey: function (e) {
            return (
              this.options.excludeUserAgent ||
              e.addPreprocessedComponent({
                key: "user_agent",
                value: this.getUserAgent(),
              }),
              e
            );
          },
          getUserAgent: function () {
            return navigator.userAgent;
          },
          languageKey: function (e) {
            return (
              this.options.excludeLanguage ||
              e.addPreprocessedComponent({
                key: "language",
                value: navigator.language ||
                  navigator.userLanguage ||
                  navigator.browserLanguage ||
                  navigator.systemLanguage ||
                  "",
              }),
              e
            );
          },
          colorDepthKey: function (e) {
            return (
              this.options.excludeColorDepth ||
              e.addPreprocessedComponent({
                key: "color_depth",
                value: window.screen.colorDepth || -1,
              }),
              e
            );
          },
          deviceMemoryKey: function (e) {
            return (
              this.options.excludeDeviceMemory ||
              e.addPreprocessedComponent({
                key: "device_memory",
                value: this.getDeviceMemory(),
              }),
              e
            );
          },
          getDeviceMemory: function () {
            return navigator.deviceMemory || -1;
          },
          pixelRatioKey: function (e) {
            return (
              this.options.excludePixelRatio ||
              e.addPreprocessedComponent({
                key: "pixel_ratio",
                value: this.getPixelRatio(),
              }),
              e
            );
          },
          getPixelRatio: function () {
            return window.devicePixelRatio || "";
          },
          screenResolutionKey: function (e) {
            return this.options.excludeScreenResolution ?
              e :
              this.getScreenResolution(e);
          },
          getScreenResolution: function (e) {
            var t;
            return (
              (t =
                this.options.detectScreenOrientation &&
                window.screen.height > window.screen.width ? [window.screen.height, window.screen.width] : [window.screen.width, window.screen.height]),
              e.addPreprocessedComponent({
                key: "resolution",
                value: t,
              }),
              e
            );
          },
          availableScreenResolutionKey: function (e) {
            return this.options.excludeAvailableScreenResolution ?
              e :
              this.getAvailableScreenResolution(e);
          },
          getAvailableScreenResolution: function (e) {
            var t;
            return (
              window.screen.availWidth &&
              window.screen.availHeight &&
              (t = this.options.detectScreenOrientation ?
                window.screen.availHeight > window.screen.availWidth ? [window.screen.availHeight, window.screen.availWidth] : [window.screen.availWidth, window.screen.availHeight] : [window.screen.availHeight, window.screen.availWidth]),
              void 0 !== t &&
              e.addPreprocessedComponent({
                key: "available_resolution",
                value: t,
              }),
              e
            );
          },
          timezoneOffsetKey: function (e) {
            return (
              this.options.excludeTimezoneOffset ||
              e.addPreprocessedComponent({
                key: "timezone_offset",
                value: new Date().getTimezoneOffset(),
              }),
              e
            );
          },
          sessionStorageKey: function (e) {
            return (
              !this.options.excludeSessionStorage &&
              this.hasSessionStorage() &&
              e.addPreprocessedComponent({
                key: "session_storage",
                value: 1,
              }),
              e
            );
          },
          localStorageKey: function (e) {
            return (
              !this.options.excludeSessionStorage &&
              this.hasLocalStorage() &&
              e.addPreprocessedComponent({
                key: "local_storage",
                value: 1,
              }),
              e
            );
          },
          indexedDbKey: function (e) {
            return (
              !this.options.excludeIndexedDB &&
              this.hasIndexedDB() &&
              e.addPreprocessedComponent({
                key: "indexed_db",
                value: 1,
              }),
              e
            );
          },
          addBehaviorKey: function (e) {
            return (
              !this.options.excludeAddBehavior &&
              document.body &&
              document.body.addBehavior &&
              e.addPreprocessedComponent({
                key: "add_behavior",
                value: 1,
              }),
              e
            );
          },
          openDatabaseKey: function (e) {
            return (
              !this.options.excludeOpenDatabase &&
              window.openDatabase &&
              e.addPreprocessedComponent({
                key: "open_database",
                value: 1,
              }),
              e
            );
          },
          cpuClassKey: function (e) {
            return (
              this.options.excludeCpuClass ||
              e.addPreprocessedComponent({
                key: "cpu_class",
                value: this.getNavigatorCpuClass(),
              }),
              e
            );
          },
          platformKey: function (e) {
            return (
              this.options.excludePlatform ||
              e.addPreprocessedComponent({
                key: "navigator_platform",
                value: this.getNavigatorPlatform(),
              }),
              e
            );
          },
          doNotTrackKey: function (e) {
            return (
              this.options.excludeDoNotTrack ||
              e.addPreprocessedComponent({
                key: "do_not_track",
                value: this.getDoNotTrack(),
              }),
              e
            );
          },
          canvasKey: function (e) {
            return (
              !this.options.excludeCanvas &&
              this.isCanvasSupported() &&
              e.addPreprocessedComponent({
                key: "canvas",
                value: this.getCanvasFp(),
              }),
              e
            );
          },
          webglKey: function (e) {
            return (
              !this.options.excludeWebGL &&
              this.isWebGlSupported() &&
              e.addPreprocessedComponent({
                key: "webgl",
                value: this.getWebglFp(),
              }),
              e
            );
          },
          webglVendorAndRendererKey: function (e) {
            return (
              !this.options.excludeWebGLVendorAndRenderer &&
              this.isWebGlSupported() &&
              e.addPreprocessedComponent({
                key: "webgl_vendor",
                value: this.getWebglVendorAndRenderer(),
              }),
              e
            );
          },
          adBlockKey: function (e) {
            return (
              this.options.excludeAdBlock ||
              e.addPreprocessedComponent({
                key: "adblock",
                value: this.getAdBlock(),
              }),
              e
            );
          },
          hasLiedLanguagesKey: function (e) {
            return (
              this.options.excludeHasLiedLanguages ||
              e.addPreprocessedComponent({
                key: "has_lied_languages",
                value: this.getHasLiedLanguages(),
              }),
              e
            );
          },
          hasLiedResolutionKey: function (e) {
            return (
              this.options.excludeHasLiedResolution ||
              e.addPreprocessedComponent({
                key: "has_lied_resolution",
                value: this.getHasLiedResolution(),
              }),
              e
            );
          },
          hasLiedOsKey: function (e) {
            return (
              this.options.excludeHasLiedOs ||
              e.addPreprocessedComponent({
                key: "has_lied_os",
                value: this.getHasLiedOs(),
              }),
              e
            );
          },
          hasLiedBrowserKey: function (e) {
            return (
              this.options.excludeHasLiedBrowser ||
              e.addPreprocessedComponent({
                key: "has_lied_browser",
                value: this.getHasLiedBrowser(),
              }),
              e
            );
          },
          fontsKey: function (e, t) {
            return this.options.excludeJsFonts ?
              this.flashFontsKey(e, t) :
              this.jsFontsKey(e, t);
          },
          flashFontsKey: function (e, t) {
            return this.options.excludeFlashFonts ?
              t(e) :
              this.hasSwfObjectLoaded() && this.hasMinFlashInstalled() ?
              void 0 === this.options.swfPath ?
              t(e) :
              void this.loadSwfAndDetectFonts(function (n) {
                e.addPreprocessedComponent({
                    key: "swf_fonts",
                    value: n.join(";"),
                  }),
                  t(e);
              }) :
              t(e);
          },
          jsFontsKey: function (e, t) {
            var n = this;
            return setTimeout(function () {
              var r = ["monospace", "sans-serif", "serif"],
                o = [
                  "Andale Mono",
                  "Arial",
                  "Arial Black",
                  "Arial Hebrew",
                  "Arial MT",
                  "Arial Narrow",
                  "Arial Rounded MT Bold",
                  "Arial Unicode MS",
                  "Bitstream Vera Sans Mono",
                  "Book Antiqua",
                  "Bookman Old Style",
                  "Calibri",
                  "Cambria",
                  "Cambria Math",
                  "Century",
                  "Century Gothic",
                  "Century Schoolbook",
                  "Comic Sans",
                  "Comic Sans MS",
                  "Consolas",
                  "Courier",
                  "Courier New",
                  "Geneva",
                  "Georgia",
                  "Helvetica",
                  "Helvetica Neue",
                  "Impact",
                  "Lucida Bright",
                  "Lucida Calligraphy",
                  "Lucida Console",
                  "Lucida Fax",
                  "LUCIDA GRANDE",
                  "Lucida Handwriting",
                  "Lucida Sans",
                  "Lucida Sans Typewriter",
                  "Lucida Sans Unicode",
                  "Microsoft Sans Serif",
                  "Monaco",
                  "Monotype Corsiva",
                  "MS Gothic",
                  "MS Outlook",
                  "MS PGothic",
                  "MS Reference Sans Serif",
                  "MS Sans Serif",
                  "MS Serif",
                  "MYRIAD",
                  "MYRIAD PRO",
                  "Palatino",
                  "Palatino Linotype",
                  "Segoe Print",
                  "Segoe Script",
                  "Segoe UI",
                  "Segoe UI Light",
                  "Segoe UI Semibold",
                  "Segoe UI Symbol",
                  "Tahoma",
                  "Times",
                  "Times New Roman",
                  "Times New Roman PS",
                  "Trebuchet MS",
                  "Verdana",
                  "Wingdings",
                  "Wingdings 2",
                  "Wingdings 3",
                ];
              n.options.extendedJsFonts &&
                (o = o.concat([
                  "Abadi MT Condensed Light",
                  "Academy Engraved LET",
                  "ADOBE CASLON PRO",
                  "Adobe Garamond",
                  "ADOBE GARAMOND PRO",
                  "Agency FB",
                  "Aharoni",
                  "Albertus Extra Bold",
                  "Albertus Medium",
                  "Algerian",
                  "Amazone BT",
                  "American Typewriter",
                  "American Typewriter Condensed",
                  "AmerType Md BT",
                  "Andalus",
                  "Angsana New",
                  "AngsanaUPC",
                  "Antique Olive",
                  "Aparajita",
                  "Apple Chancery",
                  "Apple Color Emoji",
                  "Apple SD Gothic Neo",
                  "Arabic Typesetting",
                  "ARCHER",
                  "ARNO PRO",
                  "Arrus BT",
                  "Aurora Cn BT",
                  "AvantGarde Bk BT",
                  "AvantGarde Md BT",
                  "AVENIR",
                  "Ayuthaya",
                  "Bandy",
                  "Bangla Sangam MN",
                  "Bank Gothic",
                  "BankGothic Md BT",
                  "Baskerville",
                  "Baskerville Old Face",
                  "Batang",
                  "BatangChe",
                  "Bauer Bodoni",
                  "Bauhaus 93",
                  "Bazooka",
                  "Bell MT",
                  "Bembo",
                  "Benguiat Bk BT",
                  "Berlin Sans FB",
                  "Berlin Sans FB Demi",
                  "Bernard MT Condensed",
                  "BernhardFashion BT",
                  "BernhardMod BT",
                  "Big Caslon",
                  "BinnerD",
                  "Blackadder ITC",
                  "BlairMdITC TT",
                  "Bodoni 72",
                  "Bodoni 72 Oldstyle",
                  "Bodoni 72 Smallcaps",
                  "Bodoni MT",
                  "Bodoni MT Black",
                  "Bodoni MT Condensed",
                  "Bodoni MT Poster Compressed",
                  "Bookshelf Symbol 7",
                  "Boulder",
                  "Bradley Hand",
                  "Bradley Hand ITC",
                  "Bremen Bd BT",
                  "Britannic Bold",
                  "Broadway",
                  "Browallia New",
                  "BrowalliaUPC",
                  "Brush Script MT",
                  "Californian FB",
                  "Calisto MT",
                  "Calligrapher",
                  "Candara",
                  "CaslonOpnface BT",
                  "Castellar",
                  "Centaur",
                  "Cezanne",
                  "CG Omega",
                  "CG Times",
                  "Chalkboard",
                  "Chalkboard SE",
                  "Chalkduster",
                  "Charlesworth",
                  "Charter Bd BT",
                  "Charter BT",
                  "Chaucer",
                  "ChelthmITC Bk BT",
                  "Chiller",
                  "Clarendon",
                  "Clarendon Condensed",
                  "CloisterBlack BT",
                  "Cochin",
                  "Colonna MT",
                  "Constantia",
                  "Cooper Black",
                  "Copperplate",
                  "Copperplate Gothic",
                  "Copperplate Gothic Bold",
                  "Copperplate Gothic Light",
                  "CopperplGoth Bd BT",
                  "Corbel",
                  "Cordia New",
                  "CordiaUPC",
                  "Cornerstone",
                  "Coronet",
                  "Cuckoo",
                  "Curlz MT",
                  "DaunPenh",
                  "Dauphin",
                  "David",
                  "DB LCD Temp",
                  "DELICIOUS",
                  "Denmark",
                  "DFKai-SB",
                  "Didot",
                  "DilleniaUPC",
                  "DIN",
                  "DokChampa",
                  "Dotum",
                  "DotumChe",
                  "Ebrima",
                  "Edwardian Script ITC",
                  "Elephant",
                  "English 111 Vivace BT",
                  "Engravers MT",
                  "EngraversGothic BT",
                  "Eras Bold ITC",
                  "Eras Demi ITC",
                  "Eras Light ITC",
                  "Eras Medium ITC",
                  "EucrosiaUPC",
                  "Euphemia",
                  "Euphemia UCAS",
                  "EUROSTILE",
                  "Exotc350 Bd BT",
                  "FangSong",
                  "Felix Titling",
                  "Fixedsys",
                  "FONTIN",
                  "Footlight MT Light",
                  "Forte",
                  "FrankRuehl",
                  "Fransiscan",
                  "Freefrm721 Blk BT",
                  "FreesiaUPC",
                  "Freestyle Script",
                  "French Script MT",
                  "FrnkGothITC Bk BT",
                  "Fruitger",
                  "FRUTIGER",
                  "Futura",
                  "Futura Bk BT",
                  "Futura Lt BT",
                  "Futura Md BT",
                  "Futura ZBlk BT",
                  "FuturaBlack BT",
                  "Gabriola",
                  "Galliard BT",
                  "Gautami",
                  "Geeza Pro",
                  "Geometr231 BT",
                  "Geometr231 Hv BT",
                  "Geometr231 Lt BT",
                  "GeoSlab 703 Lt BT",
                  "GeoSlab 703 XBd BT",
                  "Gigi",
                  "Gill Sans",
                  "Gill Sans MT",
                  "Gill Sans MT Condensed",
                  "Gill Sans MT Ext Condensed Bold",
                  "Gill Sans Ultra Bold",
                  "Gill Sans Ultra Bold Condensed",
                  "Gisha",
                  "Gloucester MT Extra Condensed",
                  "GOTHAM",
                  "GOTHAM BOLD",
                  "Goudy Old Style",
                  "Goudy Stout",
                  "GoudyHandtooled BT",
                  "GoudyOLSt BT",
                  "Gujarati Sangam MN",
                  "Gulim",
                  "GulimChe",
                  "Gungsuh",
                  "GungsuhChe",
                  "Gurmukhi MN",
                  "Haettenschweiler",
                  "Harlow Solid Italic",
                  "Harrington",
                  "Heather",
                  "Heiti SC",
                  "Heiti TC",
                  "HELV",
                  "Herald",
                  "High Tower Text",
                  "Hiragino Kaku Gothic ProN",
                  "Hiragino Mincho ProN",
                  "Hoefler Text",
                  "Humanst 521 Cn BT",
                  "Humanst521 BT",
                  "Humanst521 Lt BT",
                  "Imprint MT Shadow",
                  "Incised901 Bd BT",
                  "Incised901 BT",
                  "Incised901 Lt BT",
                  "INCONSOLATA",
                  "Informal Roman",
                  "Informal011 BT",
                  "INTERSTATE",
                  "IrisUPC",
                  "Iskoola Pota",
                  "JasmineUPC",
                  "Jazz LET",
                  "Jenson",
                  "Jester",
                  "Jokerman",
                  "Juice ITC",
                  "Kabel Bk BT",
                  "Kabel Ult BT",
                  "Kailasa",
                  "KaiTi",
                  "Kalinga",
                  "Kannada Sangam MN",
                  "Kartika",
                  "Kaufmann Bd BT",
                  "Kaufmann BT",
                  "Khmer UI",
                  "KodchiangUPC",
                  "Kokila",
                  "Korinna BT",
                  "Kristen ITC",
                  "Krungthep",
                  "Kunstler Script",
                  "Lao UI",
                  "Latha",
                  "Leelawadee",
                  "Letter Gothic",
                  "Levenim MT",
                  "LilyUPC",
                  "Lithograph",
                  "Lithograph Light",
                  "Long Island",
                  "Lydian BT",
                  "Magneto",
                  "Maiandra GD",
                  "Malayalam Sangam MN",
                  "Malgun Gothic",
                  "Mangal",
                  "Marigold",
                  "Marion",
                  "Marker Felt",
                  "Market",
                  "Marlett",
                  "Matisse ITC",
                  "Matura MT Script Capitals",
                  "Meiryo",
                  "Meiryo UI",
                  "Microsoft Himalaya",
                  "Microsoft JhengHei",
                  "Microsoft New Tai Lue",
                  "Microsoft PhagsPa",
                  "Microsoft Tai Le",
                  "Microsoft Uighur",
                  "Microsoft YaHei",
                  "Microsoft Yi Baiti",
                  "MingLiU",
                  "MingLiU_HKSCS",
                  "MingLiU_HKSCS-ExtB",
                  "MingLiU-ExtB",
                  "Minion",
                  "Minion Pro",
                  "Miriam",
                  "Miriam Fixed",
                  "Mistral",
                  "Modern",
                  "Modern No. 20",
                  "Mona Lisa Solid ITC TT",
                  "Mongolian Baiti",
                  "MONO",
                  "MoolBoran",
                  "Mrs Eaves",
                  "MS LineDraw",
                  "MS Mincho",
                  "MS PMincho",
                  "MS Reference Specialty",
                  "MS UI Gothic",
                  "MT Extra",
                  "MUSEO",
                  "MV Boli",
                  "Nadeem",
                  "Narkisim",
                  "NEVIS",
                  "News Gothic",
                  "News GothicMT",
                  "NewsGoth BT",
                  "Niagara Engraved",
                  "Niagara Solid",
                  "Noteworthy",
                  "NSimSun",
                  "Nyala",
                  "OCR A Extended",
                  "Old Century",
                  "Old English Text MT",
                  "Onyx",
                  "Onyx BT",
                  "OPTIMA",
                  "Oriya Sangam MN",
                  "OSAKA",
                  "OzHandicraft BT",
                  "Palace Script MT",
                  "Papyrus",
                  "Parchment",
                  "Party LET",
                  "Pegasus",
                  "Perpetua",
                  "Perpetua Titling MT",
                  "PetitaBold",
                  "Pickwick",
                  "Plantagenet Cherokee",
                  "Playbill",
                  "PMingLiU",
                  "PMingLiU-ExtB",
                  "Poor Richard",
                  "Poster",
                  "PosterBodoni BT",
                  "PRINCETOWN LET",
                  "Pristina",
                  "PTBarnum BT",
                  "Pythagoras",
                  "Raavi",
                  "Rage Italic",
                  "Ravie",
                  "Ribbon131 Bd BT",
                  "Rockwell",
                  "Rockwell Condensed",
                  "Rockwell Extra Bold",
                  "Rod",
                  "Roman",
                  "Sakkal Majalla",
                  "Santa Fe LET",
                  "Savoye LET",
                  "Sceptre",
                  "Script",
                  "Script MT Bold",
                  "SCRIPTINA",
                  "Serifa",
                  "Serifa BT",
                  "Serifa Th BT",
                  "ShelleyVolante BT",
                  "Sherwood",
                  "Shonar Bangla",
                  "Showcard Gothic",
                  "Shruti",
                  "Signboard",
                  "SILKSCREEN",
                  "SimHei",
                  "Simplified Arabic",
                  "Simplified Arabic Fixed",
                  "SimSun",
                  "SimSun-ExtB",
                  "Sinhala Sangam MN",
                  "Sketch Rockwell",
                  "Skia",
                  "Small Fonts",
                  "Snap ITC",
                  "Snell Roundhand",
                  "Socket",
                  "Souvenir Lt BT",
                  "Staccato222 BT",
                  "Steamer",
                  "Stencil",
                  "Storybook",
                  "Styllo",
                  "Subway",
                  "Swis721 BlkEx BT",
                  "Swiss911 XCm BT",
                  "Sylfaen",
                  "Synchro LET",
                  "System",
                  "Tamil Sangam MN",
                  "Technical",
                  "Teletype",
                  "Telugu Sangam MN",
                  "Tempus Sans ITC",
                  "Terminal",
                  "Thonburi",
                  "Traditional Arabic",
                  "Trajan",
                  "TRAJAN PRO",
                  "Tristan",
                  "Tubular",
                  "Tunga",
                  "Tw Cen MT",
                  "Tw Cen MT Condensed",
                  "Tw Cen MT Condensed Extra Bold",
                  "TypoUpright BT",
                  "Unicorn",
                  "Univers",
                  "Univers CE 55 Medium",
                  "Univers Condensed",
                  "Utsaah",
                  "Vagabond",
                  "Vani",
                  "Vijaya",
                  "Viner Hand ITC",
                  "VisualUI",
                  "Vivaldi",
                  "Vladimir Script",
                  "Vrinda",
                  "Westminster",
                  "WHITNEY",
                  "Wide Latin",
                  "ZapfEllipt BT",
                  "ZapfHumnst BT",
                  "ZapfHumnst Dm BT",
                  "Zapfino",
                  "Zurich BlkEx BT",
                  "Zurich Ex BT",
                  "ZWAdobeF",
                ])),
                (o = (o = o.concat(n.options.userDefinedFonts)).filter(
                  function (e, t) {
                    return o.indexOf(e) === t;
                  }
                ));
              var i = document.getElementsByTagName("body")[0],
                a = document.createElement("div"),
                s = document.createElement("div"),
                u = {},
                c = {},
                l = function () {
                  var e = document.createElement("span");
                  return (
                    (e.style.position = "absolute"),
                    (e.style.left = "-9999px"),
                    (e.style.fontSize = "72px"),
                    (e.style.fontStyle = "normal"),
                    (e.style.fontWeight = "normal"),
                    (e.style.letterSpacing = "normal"),
                    (e.style.lineBreak = "auto"),
                    (e.style.lineHeight = "normal"),
                    (e.style.textTransform = "none"),
                    (e.style.textAlign = "left"),
                    (e.style.textDecoration = "none"),
                    (e.style.textShadow = "none"),
                    (e.style.whiteSpace = "normal"),
                    (e.style.wordBreak = "normal"),
                    (e.style.wordSpacing = "normal"),
                    (e.innerHTML = "mmmmmmmmmmlli"),
                    e
                  );
                },
                d = function (e) {
                  for (var t = !1, n = 0; n < r.length; n++)
                    if (
                      (t =
                        e[n].offsetWidth !== u[r[n]] ||
                        e[n].offsetHeight !== c[r[n]])
                    )
                      return t;
                  return t;
                },
                p = (function () {
                  for (var e = [], t = 0, n = r.length; t < n; t++) {
                    var o = l();
                    (o.style.fontFamily = r[t]), a.appendChild(o), e.push(o);
                  }
                  return e;
                })();
              i.appendChild(a);
              for (var f = 0, h = r.length; f < h; f++)
                (u[r[f]] = p[f].offsetWidth), (c[r[f]] = p[f].offsetHeight);
              var g = (function () {
                for (var e, t, n, i = {}, a = 0, u = o.length; a < u; a++) {
                  for (var c = [], d = 0, p = r.length; d < p; d++) {
                    var f =
                      ((e = o[a]),
                        (t = r[d]),
                        (n = void 0),
                        ((n = l()).style.fontFamily = "'" + e + "'," + t),
                        n);
                    s.appendChild(f), c.push(f);
                  }
                  i[o[a]] = c;
                }
                return i;
              })();
              i.appendChild(s);
              for (var m = [], y = 0, v = o.length; y < v; y++)
                d(g[o[y]]) && m.push(o[y]);
              i.removeChild(s),
                i.removeChild(a),
                e.addPreprocessedComponent({
                  key: "js_fonts",
                  value: m,
                }),
                t(e);
            }, 1);
          },
          pluginsKey: function (e) {
            return (
              this.options.excludePlugins ||
              (this.isIE() ?
                this.options.excludeIEPlugins ||
                e.addPreprocessedComponent({
                  key: "ie_plugins",
                  value: this.getIEPlugins(),
                }) :
                e.addPreprocessedComponent({
                  key: "regular_plugins",
                  value: this.getRegularPlugins(),
                })),
              e
            );
          },
          getRegularPlugins: function () {
            var e = [];
            if (navigator.plugins)
              for (var t = 0, n = navigator.plugins.length; t < n; t++)
                navigator.plugins[t] && e.push(navigator.plugins[t]);
            return (
              this.pluginsShouldBeSorted() &&
              (e = e.sort(function (e, t) {
                return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
              })),
              this.map(
                e,
                function (e) {
                  var t = this.map(e, function (e) {
                    return [e.type, e.suffixes].join("~");
                  }).join(",");
                  return [e.name, e.description, t].join("::");
                },
                this
              )
            );
          },
          getIEPlugins: function () {
            var e = [];
            return (
              ((Object.getOwnPropertyDescriptor &&
                  Object.getOwnPropertyDescriptor(window, "ActiveXObject")) ||
                "ActiveXObject" in window) &&
              (e = this.map(
                [
                  "AcroPDF.PDF",
                  "Adodb.Stream",
                  "AgControl.AgControl",
                  "DevalVRXCtrl.DevalVRXCtrl.1",
                  "MacromediaFlashPaper.MacromediaFlashPaper",
                  "Msxml2.DOMDocument",
                  "Msxml2.XMLHTTP",
                  "PDF.PdfCtrl",
                  "QuickTime.QuickTime",
                  "QuickTimeCheckObject.QuickTimeCheck.1",
                  "RealPlayer",
                  "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                  "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                  "Scripting.Dictionary",
                  "SWCtl.SWCtl",
                  "Shell.UIHelper",
                  "ShockwaveFlash.ShockwaveFlash",
                  "Skype.Detection",
                  "TDCCtl.TDCCtl",
                  "WMPlayer.OCX",
                  "rmocx.RealPlayer G2 Control",
                  "rmocx.RealPlayer G2 Control.1",
                ],
                function (e) {
                  try {
                    return new window.ActiveXObject(e), e;
                  } catch (e) {
                    return null;
                  }
                }
              )),
              navigator.plugins && (e = e.concat(this.getRegularPlugins())),
              e
            );
          },
          pluginsShouldBeSorted: function () {
            for (
              var e = !1, t = 0, n = this.options.sortPluginsFor.length; t < n; t++
            ) {
              var r = this.options.sortPluginsFor[t];
              if (navigator.userAgent.match(r)) {
                e = !0;
                break;
              }
            }
            return e;
          },
          touchSupportKey: function (e) {
            return (
              this.options.excludeTouchSupport ||
              e.addPreprocessedComponent({
                key: "touch_support",
                value: this.getTouchSupport(),
              }),
              e
            );
          },
          hardwareConcurrencyKey: function (e) {
            return (
              this.options.excludeHardwareConcurrency ||
              e.addPreprocessedComponent({
                key: "hardware_concurrency",
                value: this.getHardwareConcurrency(),
              }),
              e
            );
          },
          hasSessionStorage: function () {
            try {
              return !!window.sessionStorage;
            } catch (e) {
              return !0;
            }
          },
          hasLocalStorage: function () {
            try {
              return !!window.localStorage;
            } catch (e) {
              return !0;
            }
          },
          hasIndexedDB: function () {
            try {
              return !!window.indexedDB;
            } catch (e) {
              return !0;
            }
          },
          getHardwareConcurrency: function () {
            return navigator.hardwareConcurrency ?
              navigator.hardwareConcurrency :
              "unknown";
          },
          getNavigatorCpuClass: function () {
            return navigator.cpuClass ? navigator.cpuClass : "unknown";
          },
          getNavigatorPlatform: function () {
            return navigator.platform ? navigator.platform : "unknown";
          },
          getDoNotTrack: function () {
            return navigator.doNotTrack ?
              navigator.doNotTrack :
              navigator.msDoNotTrack ?
              navigator.msDoNotTrack :
              window.doNotTrack ?
              window.doNotTrack :
              "unknown";
          },
          getTouchSupport: function () {
            var e = 0,
              t = !1;
            void 0 !== navigator.maxTouchPoints ?
              (e = navigator.maxTouchPoints) :
              void 0 !== navigator.msMaxTouchPoints &&
              (e = navigator.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), (t = !0);
            } catch (e) {}
            return [e, t, "ontouchstart" in window];
          },
          getCanvasFp: function () {
            var e = [],
              t = document.createElement("canvas");
            (t.width = 2e3), (t.height = 200), (t.style.display = "inline");
            var n = t.getContext("2d");
            return (
              n.rect(0, 0, 10, 10),
              n.rect(2, 2, 6, 6),
              e.push(
                "canvas winding:" +
                (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
              ),
              (n.textBaseline = "alphabetic"),
              (n.fillStyle = "#f60"),
              n.fillRect(125, 1, 62, 20),
              (n.fillStyle = "#069"),
              this.options.dontUseFakeFontInCanvas ?
              (n.font = "11pt Arial") :
              (n.font = "11pt no-real-font-123"),
              n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
              (n.fillStyle = "rgba(102, 204, 0, 0.2)"),
              (n.font = "18pt Arial"),
              n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
              (n.globalCompositeOperation = "multiply"),
              (n.fillStyle = "rgb(255,0,255)"),
              n.beginPath(),
              n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
              n.closePath(),
              n.fill(),
              (n.fillStyle = "rgb(0,255,255)"),
              n.beginPath(),
              n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
              n.closePath(),
              n.fill(),
              (n.fillStyle = "rgb(255,255,0)"),
              n.beginPath(),
              n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
              n.closePath(),
              n.fill(),
              (n.fillStyle = "rgb(255,0,255)"),
              n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
              n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
              n.fill("evenodd"),
              t.toDataURL && e.push("canvas fp:" + t.toDataURL()),
              e.join("~")
            );
          },
          getWebglFp: function () {
            var e,
              t = function (t) {
                return (
                  e.clearColor(0, 0, 0, 1),
                  e.enable(e.DEPTH_TEST),
                  e.depthFunc(e.LEQUAL),
                  e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                  "[" + t[0] + ", " + t[1] + "]"
                );
              };
            if (!(e = this.getWebglCanvas())) return null;
            var n = [],
              r = e.createBuffer();
            e.bindBuffer(e.ARRAY_BUFFER, r);
            var o = new Float32Array([
              -0.2,
              -0.9,
              0,
              0.4,
              -0.26,
              0,
              0,
              0.732134444,
              0,
            ]);
            e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW),
              (r.itemSize = 3),
              (r.numItems = 3);
            var i = e.createProgram(),
              a = e.createShader(e.VERTEX_SHADER);
            e.shaderSource(
                a,
                "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
              ),
              e.compileShader(a);
            var s = e.createShader(e.FRAGMENT_SHADER);
            e.shaderSource(
                s,
                "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
              ),
              e.compileShader(s),
              e.attachShader(i, a),
              e.attachShader(i, s),
              e.linkProgram(i),
              e.useProgram(i),
              (i.vertexPosAttrib = e.getAttribLocation(i, "attrVertex")),
              (i.offsetUniform = e.getUniformLocation(i, "uniformOffset")),
              e.enableVertexAttribArray(i.vertexPosArray),
              e.vertexAttribPointer(
                i.vertexPosAttrib,
                r.itemSize,
                e.FLOAT,
                !1,
                0,
                0
              ),
              e.uniform2f(i.offsetUniform, 1, 1),
              e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems);
            try {
              n.push(e.canvas.toDataURL());
            } catch (e) {}
            n.push(
                "extensions:" + (e.getSupportedExtensions() || []).join(";")
              ),
              n.push(
                "webgl aliased line width range:" +
                t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))
              ),
              n.push(
                "webgl aliased point size range:" +
                t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))
              ),
              n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
              n.push(
                "webgl antialiasing:" +
                (e.getContextAttributes().antialias ? "yes" : "no")
              ),
              n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
              n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
              n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
              n.push(
                "webgl max anisotropy:" +
                (function (e) {
                  var t =
                    e.getExtension("EXT_texture_filter_anisotropic") ||
                    e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                    e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                  if (t) {
                    var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    return 0 === n && (n = 2), n;
                  }
                  return null;
                })(e)
              ),
              n.push(
                "webgl max combined texture image units:" +
                e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
              ),
              n.push(
                "webgl max cube map texture size:" +
                e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
              ),
              n.push(
                "webgl max fragment uniform vectors:" +
                e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
              ),
              n.push(
                "webgl max render buffer size:" +
                e.getParameter(e.MAX_RENDERBUFFER_SIZE)
              ),
              n.push(
                "webgl max texture image units:" +
                e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
              ),
              n.push(
                "webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)
              ),
              n.push(
                "webgl max varying vectors:" +
                e.getParameter(e.MAX_VARYING_VECTORS)
              ),
              n.push(
                "webgl max vertex attribs:" +
                e.getParameter(e.MAX_VERTEX_ATTRIBS)
              ),
              n.push(
                "webgl max vertex texture image units:" +
                e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
              ),
              n.push(
                "webgl max vertex uniform vectors:" +
                e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
              ),
              n.push(
                "webgl max viewport dims:" +
                t(e.getParameter(e.MAX_VIEWPORT_DIMS))
              ),
              n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
              n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
              n.push(
                "webgl shading language version:" +
                e.getParameter(e.SHADING_LANGUAGE_VERSION)
              ),
              n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
              n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
              n.push("webgl version:" + e.getParameter(e.VERSION));
            try {
              var u = e.getExtension("WEBGL_debug_renderer_info");
              u &&
                (n.push(
                    "webgl unmasked vendor:" +
                    e.getParameter(u.UNMASKED_VENDOR_WEBGL)
                  ),
                  n.push(
                    "webgl unmasked renderer:" +
                    e.getParameter(u.UNMASKED_RENDERER_WEBGL)
                  ));
            } catch (e) {}
            if (!e.getShaderPrecisionFormat) return n.join("~");
            var c = this;
            return (
              c.each(["FLOAT", "INT"], function (t) {
                c.each(["VERTEX", "FRAGMENT"], function (r) {
                  c.each(["HIGH", "MEDIUM", "LOW"], function (o) {
                    c.each(["precision", "rangeMin", "rangeMax"], function (i) {
                      var a = e.getShaderPrecisionFormat(
                        e[r + "_SHADER"],
                        e[o + "_" + t]
                      )[i];
                      "precision" !== i && (i = "precision " + i);
                      var s = [
                        "webgl ",
                        r.toLowerCase(),
                        " shader ",
                        o.toLowerCase(),
                        " ",
                        t.toLowerCase(),
                        " ",
                        i,
                        ":",
                        a,
                      ];
                      n.push(s.join(""));
                    });
                  });
                });
              }),
              n.join("~")
            );
          },
          getWebglVendorAndRenderer: function () {
            try {
              var e = this.getWebglCanvas(),
                t = e.getExtension("WEBGL_debug_renderer_info");
              return (
                e.getParameter(t.UNMASKED_VENDOR_WEBGL) +
                "~" +
                e.getParameter(t.UNMASKED_RENDERER_WEBGL)
              );
            } catch (e) {
              return null;
            }
          },
          getAdBlock: function () {
            var e = document.createElement("div");
            e.innerHTML = "&nbsp;";
            var t = !(e.className = "adsbox");
            try {
              document.body.appendChild(e),
                (t =
                  0 ===
                  document.getElementsByClassName("adsbox")[0].offsetHeight),
                document.body.removeChild(e);
            } catch (e) {
              t = !1;
            }
            return t;
          },
          getHasLiedLanguages: function () {
            if (void 0 !== navigator.languages)
              try {
                if (
                  navigator.languages[0].substr(0, 2) !==
                  navigator.language.substr(0, 2)
                )
                  return !0;
              } catch (e) {
                return !0;
              }
            return !1;
          },
          getHasLiedResolution: function () {
            return (
              window.screen.width < window.screen.availWidth ||
              window.screen.height < window.screen.availHeight
            );
          },
          getHasLiedOs: function () {
            var e,
              t = navigator.userAgent.toLowerCase(),
              n = navigator.oscpu,
              r = navigator.platform.toLowerCase();
            if (
              ((e =
                  0 <= t.indexOf("windows phone") ?
                  "Windows Phone" :
                  0 <= t.indexOf("win") ?
                  "Windows" :
                  0 <= t.indexOf("android") ?
                  "Android" :
                  0 <= t.indexOf("linux") ?
                  "Linux" :
                  0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") ?
                  "iOS" :
                  0 <= t.indexOf("mac") ?
                  "Mac" :
                  "Other"),
                ("ontouchstart" in window ||
                  0 < navigator.maxTouchPoints ||
                  0 < navigator.msMaxTouchPoints) &&
                "Windows Phone" !== e &&
                "Android" !== e &&
                "iOS" !== e &&
                "Other" !== e)
            )
              return !0;
            if (void 0 !== n) {
              if (
                0 <= (n = n.toLowerCase()).indexOf("win") &&
                "Windows" !== e &&
                "Windows Phone" !== e
              )
                return !0;
              if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e)
                return !0;
              if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e)
                return !0;
              if (
                (-1 === n.indexOf("win") &&
                  -1 === n.indexOf("linux") &&
                  -1 === n.indexOf("mac")) !=
                ("Other" === e)
              )
                return !0;
            }
            return (
              (0 <= r.indexOf("win") &&
                "Windows" !== e &&
                "Windows Phone" !== e) ||
              ((0 <= r.indexOf("linux") ||
                  0 <= r.indexOf("android") ||
                  0 <= r.indexOf("pike")) &&
                "Linux" !== e &&
                "Android" !== e) ||
              ((0 <= r.indexOf("mac") ||
                  0 <= r.indexOf("ipad") ||
                  0 <= r.indexOf("ipod") ||
                  0 <= r.indexOf("iphone")) &&
                "Mac" !== e &&
                "iOS" !== e) ||
              (-1 === r.indexOf("win") &&
                -1 === r.indexOf("linux") &&
                -1 === r.indexOf("mac")) !=
              ("Other" === e) ||
              (void 0 === navigator.plugins &&
                "Windows" !== e &&
                "Windows Phone" !== e)
            );
          },
          getHasLiedBrowser: function () {
            var e,
              t = navigator.userAgent.toLowerCase(),
              n = navigator.productSub;
            if (
              ("Chrome" ==
                (e =
                  0 <= t.indexOf("firefox") ?
                  "Firefox" :
                  0 <= t.indexOf("opera") || 0 <= t.indexOf("opr") ?
                  "Opera" :
                  0 <= t.indexOf("chrome") ?
                  "Chrome" :
                  0 <= t.indexOf("safari") ?
                  "Safari" :
                  0 <= t.indexOf("trident") ?
                  "Internet Explorer" :
                  "Other") ||
                "Safari" === e ||
                "Opera" === e) &&
              "20030107" !== n
            )
              return !0;
            var r,
              o = eval.toString().length;
            if (37 === o && "Safari" !== e && "Firefox" !== e && "Other" !== e)
              return !0;
            if (39 === o && "Internet Explorer" !== e && "Other" !== e)
              return !0;
            if (33 === o && "Chrome" !== e && "Opera" !== e && "Other" !== e)
              return !0;
            try {
              throw "a";
            } catch (e) {
              try {
                e.toSource(), (r = !0);
              } catch (e) {
                r = !1;
              }
            }
            return !(!r || "Firefox" === e || "Other" === e);
          },
          isCanvasSupported: function () {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"));
          },
          isWebGlSupported: function () {
            if (!this.isCanvasSupported()) return !1;
            var e = this.getWebglCanvas();
            return !!window.WebGLRenderingContext && !!e;
          },
          isIE: function () {
            return (
              "Microsoft Internet Explorer" === navigator.appName ||
              !(
                "Netscape" !== navigator.appName ||
                !/Trident/.test(navigator.userAgent)
              )
            );
          },
          hasSwfObjectLoaded: function () {
            return void 0 !== window.swfobject;
          },
          hasMinFlashInstalled: function () {
            return window.swfobject.hasFlashPlayerVersion("9.0.0");
          },
          addFlashDivNode: function () {
            var e = document.createElement("div");
            e.setAttribute("id", this.options.swfContainerId),
              document.body.appendChild(e);
          },
          loadSwfAndDetectFonts: function (e) {
            var t = "___fp_swf_loaded";
            window[t] = function (t) {
              e(t);
            };
            var n = this.options.swfContainerId;
            this.addFlashDivNode();
            var r = {
              onReady: t,
            };
            window.swfobject.embedSWF(
              this.options.swfPath,
              n,
              "1",
              "1",
              "9.0.0",
              !1,
              r, {
                allowScriptAccess: "always",
                menu: "false",
              }, {}
            );
          },
          getWebglCanvas: function () {
            var e = document.createElement("canvas"),
              t = null;
            try {
              t = e.getContext("webgl") || e.getContext("experimental-webgl");
            } catch (e) {}
            return t || (t = null), t;
          },
          each: function (e, t, n) {
            if (null !== e)
              if (this.nativeForEach && e.forEach === this.nativeForEach)
                e.forEach(t, n);
              else if (e.length === +e.length) {
              for (var r = 0, o = e.length; r < o; r++)
                if (t.call(n, e[r], r, e) === {}) return;
            } else
              for (var i in e)
                if (e.hasOwnProperty(i) && t.call(n, e[i], i, e) === {})
                  return;
          },
          map: function (e, t, n) {
            var r = [];
            return null == e ?
              r :
              this.nativeMap && e.map === this.nativeMap ?
              e.map(t, n) :
              (this.each(e, function (e, o, i) {
                  r[r.length] = t.call(n, e, o, i);
                }),
                r);
          },
          x64Add: function (e, t) {
            (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
            var n = [0, 0, 0, 0];
            return (
              (n[3] += e[3] + t[3]),
              (n[2] += n[3] >>> 16),
              (n[3] &= 65535),
              (n[2] += e[2] + t[2]),
              (n[1] += n[2] >>> 16),
              (n[2] &= 65535),
              (n[1] += e[1] + t[1]),
              (n[0] += n[1] >>> 16),
              (n[1] &= 65535),
              (n[0] += e[0] + t[0]),
              (n[0] &= 65535),
              [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
            );
          },
          x64Multiply: function (e, t) {
            (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
            (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
            var n = [0, 0, 0, 0];
            return (
              (n[3] += e[3] * t[3]),
              (n[2] += n[3] >>> 16),
              (n[3] &= 65535),
              (n[2] += e[2] * t[3]),
              (n[1] += n[2] >>> 16),
              (n[2] &= 65535),
              (n[2] += e[3] * t[2]),
              (n[1] += n[2] >>> 16),
              (n[2] &= 65535),
              (n[1] += e[1] * t[3]),
              (n[0] += n[1] >>> 16),
              (n[1] &= 65535),
              (n[1] += e[2] * t[2]),
              (n[0] += n[1] >>> 16),
              (n[1] &= 65535),
              (n[1] += e[3] * t[1]),
              (n[0] += n[1] >>> 16),
              (n[1] &= 65535),
              (n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
              (n[0] &= 65535),
              [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
            );
          },
          x64Rotl: function (e, t) {
            return 32 == (t %= 64) ? [e[1], e[0]] :
              t < 32 ? [
                (e[0] << t) | (e[1] >>> (32 - t)),
                (e[1] << t) | (e[0] >>> (32 - t)),
              ] :
              ((t -= 32),
                [
                  (e[1] << t) | (e[0] >>> (32 - t)),
                  (e[0] << t) | (e[1] >>> (32 - t)),
                ]);
          },
          x64LeftShift: function (e, t) {
            return 0 == (t %= 64) ?
              e :
              t < 32 ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t] : [e[1] << (t - 32), 0];
          },
          x64Xor: function (e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]];
          },
          x64Fmix: function (e) {
            return (
              (e = this.x64Xor(e, [0, e[0] >>> 1])),
              (e = this.x64Multiply(e, [4283543511, 3981806797])),
              (e = this.x64Xor(e, [0, e[0] >>> 1])),
              (e = this.x64Multiply(e, [3301882366, 444984403])),
              this.x64Xor(e, [0, e[0] >>> 1])
            );
          },
          x64hash128: function (e, t) {
            t = t || 0;
            for (
              var n = (e = e || "").length % 16,
                r = e.length - n,
                o = [0, t],
                i = [0, t],
                a = [0, 0],
                s = [0, 0],
                u = [2277735313, 289559509],
                c = [1291169091, 658871167],
                l = 0; l < r; l += 16
            )
              (a = [
                (255 & e.charCodeAt(l + 4)) |
                ((255 & e.charCodeAt(l + 5)) << 8) |
                ((255 & e.charCodeAt(l + 6)) << 16) |
                ((255 & e.charCodeAt(l + 7)) << 24),
                (255 & e.charCodeAt(l)) |
                ((255 & e.charCodeAt(l + 1)) << 8) |
                ((255 & e.charCodeAt(l + 2)) << 16) |
                ((255 & e.charCodeAt(l + 3)) << 24),
              ]),
              (s = [
                (255 & e.charCodeAt(l + 12)) |
                ((255 & e.charCodeAt(l + 13)) << 8) |
                ((255 & e.charCodeAt(l + 14)) << 16) |
                ((255 & e.charCodeAt(l + 15)) << 24),
                (255 & e.charCodeAt(l + 8)) |
                ((255 & e.charCodeAt(l + 9)) << 8) |
                ((255 & e.charCodeAt(l + 10)) << 16) |
                ((255 & e.charCodeAt(l + 11)) << 24),
              ]),
              (a = this.x64Multiply(a, u)),
              (a = this.x64Rotl(a, 31)),
              (a = this.x64Multiply(a, c)),
              (o = this.x64Xor(o, a)),
              (o = this.x64Rotl(o, 27)),
              (o = this.x64Add(o, i)),
              (o = this.x64Add(this.x64Multiply(o, [0, 5]), [0, 1390208809])),
              (s = this.x64Multiply(s, c)),
              (s = this.x64Rotl(s, 33)),
              (s = this.x64Multiply(s, u)),
              (i = this.x64Xor(i, s)),
              (i = this.x64Rotl(i, 31)),
              (i = this.x64Add(i, o)),
              (i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 944331445]));
            switch (((a = [0, 0]), (s = [0, 0]), n)) {
              case 15:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 14)], 48)
                );
              case 14:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 13)], 40)
                );
              case 13:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 12)], 32)
                );
              case 12:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 11)], 24)
                );
              case 11:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 10)], 16)
                );
              case 10:
                s = this.x64Xor(
                  s,
                  this.x64LeftShift([0, e.charCodeAt(l + 9)], 8)
                );
              case 9:
                (s = this.x64Xor(s, [0, e.charCodeAt(l + 8)])),
                (s = this.x64Multiply(s, c)),
                (s = this.x64Rotl(s, 33)),
                (s = this.x64Multiply(s, u)),
                (i = this.x64Xor(i, s));
              case 8:
                a = this.x64Xor(
                  a,
                  this.x64LeftShift([0, e.charCodeAt(l + 7)], 56)
                );
              case 7:
                a = this.x64Xor(
                  a,
                  this.x64LeftShift([0, e.charCodeAt(l + 6)], 48)
                );
              case 6:
                a = this.x64Xor(
                  a,
                  this.x64LeftShift([0, e.charCodeAt(l + 5)], 40)
                );
              case 5:
                a = this.x64Xor(
                  a,
                  this.x64LeftShift([0, e.charCodeAt(l + 4)], 32)
                );
              case 4:
                a = this.x64Xor(
                  a,
                  this.x64LeftShift([0, e.charCodeAt(l + 3)], 24)
                );
              case 3:
                a = this.x64Xor(
                  a,
                  this.x64LeftShift([0, e.charCodeAt(l + 2)], 16)
                );
              case 2:
                a = this.x64Xor(
                  a,
                  this.x64LeftShift([0, e.charCodeAt(l + 1)], 8)
                );
              case 1:
                (a = this.x64Xor(a, [0, e.charCodeAt(l)])),
                (a = this.x64Multiply(a, u)),
                (a = this.x64Rotl(a, 31)),
                (a = this.x64Multiply(a, c)),
                (o = this.x64Xor(o, a));
            }
            return (
              (o = this.x64Xor(o, [0, e.length])),
              (i = this.x64Xor(i, [0, e.length])),
              (o = this.x64Add(o, i)),
              (i = this.x64Add(i, o)),
              (o = this.x64Fmix(o)),
              (i = this.x64Fmix(i)),
              (o = this.x64Add(o, i)),
              (i = this.x64Add(i, o)),
              ("00000000" + (o[0] >>> 0).toString(16)).slice(-8) +
              ("00000000" + (o[1] >>> 0).toString(16)).slice(-8) +
              ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) +
              ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
            );
          },
        }),
        (e.VERSION = "1.8.0"),
        e
      );
    });
  },
  function (e, t, n) {
    var r = n(3);
    "string" == typeof r && (r = [
        [e.id, r, ""]
      ]),
      n(5)(r, {}),
      r.locals && (e.exports = r.locals);
  },
  function (e, t, n) {
    (e.exports = n(4)()).push([
      e.id,
      '[contenteditable=true]:active,[contenteditable=true]:focus{outline:thin solid #00b977;background-color:rgba(0,185,119,.2)}.cyxy-trs-target.colored{background-color:rgba(0,185,119,.05)}.cyxy-target-popup{padding:1.3rem 12px;position:absolute;display:inline-flex;flex-direction:row;vertical-align:middle;z-index:199099;top:1px;left:1px;background:#fff;opacity:.98;height:auto;width:auto;border:1px solid #e6e6e6;box-shadow:0 0 8px 0 rgba(0,0,0,.13);border-radius:5px}@media (max-width:468px){.cyxy-target-popup{left:10%}}#cyxy-popup-left-slide{margin-right:14px}#cyxy-popup-left-slide,#cyxy-popup-right-slide{height:22px;display:inline;vertical-align:middle;cursor:pointer}#cyxy-popup-right-slide{margin-left:0}#cyxy-popup-userinfo{display:inline}.cyxy-target-count{display:inline;vertical-align:middle;font-size:10px}#cyxy-popup-avatar{display:inline;height:32px;vertical-align:middle;border-radius:16px}#cyxy-popup-name-time{display:inline-flex;flex-direction:column;vertical-align:middle;text-align:left;margin:1px 0 1px 6px}#cyxy-popup-name{font-size:14px;color:#333;height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:88px;max-width:88px}#cyxy-popup-time{font-size:12px;margin-top:4px;color:#999}.cyxy-footer{display:none;position:fixed;bottom:0;padding:0;left:0;right:0;margin:auto;opacity:.9;border:1px solid #e6e6e6;box-shadow:0 0 8px 0 rgba(0,0,0,.13);border-radius:2px;z-index:201712;text-align:center}.cyxy-footer-p{padding:12px 0;margin:0;font-size:12px;color:#333;background:#fff;text-align:center;line-height:1.6;font-weight:200}#cyxy-popup-favour{margin-left:46px}#cyxy-popup-fancy,#cyxy-popup-favour{text-align:center;display:inline;margin-right:20px;cursor:pointer}#cyxy-popup-fancy{margin-left:0}#cyxy-popup-oppose{text-align:center;display:inline;cursor:pointer}#cyxy-popup-fancy-img,#cyxy-popup-favour-img{display:inline;height:20px;vertical-align:middle}#cyxy-popup-oppose-img{display:inline;height:18px;vertical-align:middle}#cyxy-popup-favour-num,#cyxy-popup-oppose-num{font-size:14px;margin-left:4px;color:#999}@media (max-width:320px){#cyxy-popup-favour{margin-right:.8rem;margin-left:1.5rem}#cyxy-popup-left-slide{margin-right:.8rem}#cyxy-popup-right-slide{margin-left:1rem}}.layui-m-layer{position:relative;z-index:19891014}.layui-m-layer *{box-sizing:content-box}.layui-m-layermain,.layui-m-layershade{position:fixed;left:0;top:0;width:100%;height:100%}.layui-m-layershade{background-color:rgba(0,0,0,.7);pointer-events:auto}.layui-m-layermain{display:table;font-family:Helvetica,arial,sans-serif;pointer-events:none}.layui-m-layermain .layui-m-layersection{display:table-cell;vertical-align:middle;text-align:center}.layui-m-layerchild{position:relative;display:inline-block;text-align:left;background-color:#fff;font-size:14px;border-radius:5px;box-shadow:0 0 8px rgba(0,0,0,.1);pointer-events:auto;-webkit-overflow-scrolling:touch;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:.2s;animation-duration:.2s}@-webkit-keyframes layui-m-anim-scale{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes layui-m-anim-scale{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.layui-m-anim-scale{animation-name:layui-m-anim-scale;-webkit-animation-name:layui-m-anim-scale}@-webkit-keyframes layui-m-anim-up{0%{opacity:0;-webkit-transform:translateY(800px);transform:translateY(800px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes layui-m-anim-up{0%{opacity:0;-webkit-transform:translateY(800px);transform:translateY(800px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.layui-m-anim-up{-webkit-animation-name:layui-m-anim-up;animation-name:layui-m-anim-up}.layui-m-layer0 .layui-m-layerchild{width:90%;max-width:640px}.layui-m-layer1 .layui-m-layerchild{border:none;border-radius:0}.layui-m-layer2 .layui-m-layerchild{width:auto;max-width:260px;min-width:40px;border:none;background:0 0;box-shadow:none;color:#fff}.layui-m-layerchild h3{padding:0 10px;height:60px;line-height:60px;font-size:16px;font-weight:400;border-radius:5px 5px 0 0;text-align:center}.layui-m-layerbtn span,.layui-m-layerchild h3{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.layui-m-layercont{padding:50px 30px;line-height:22px;text-align:center}.layui-m-layer1 .layui-m-layercont{padding:0;text-align:left}.layui-m-layer2 .layui-m-layercont{text-align:center;padding:0;line-height:0}.layui-m-layer2 .layui-m-layercont i{width:25px;height:25px;margin-left:8px;display:inline-block;background-color:#fff;border-radius:100%;-webkit-animation:layui-m-anim-loading 1.4s infinite ease-in-out;animation:layui-m-anim-loading 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.layui-m-layerbtn,.layui-m-layerbtn span{position:relative;text-align:center;border-radius:0 0 5px 5px}.layui-m-layer2 .layui-m-layercont p{margin-top:20px}@-webkit-keyframes layui-m-anim-loading{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}@keyframes layui-m-anim-loading{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}.layui-m-layer2 .layui-m-layercont i:first-child{margin-left:0;-webkit-animation-delay:-.32s;animation-delay:-.32s}.layui-m-layer2 .layui-m-layercont i.layui-m-layerload{-webkit-animation-delay:-.16s;animation-delay:-.16s}.layui-m-layer2 .layui-m-layercont>div{line-height:22px;padding-top:7px;margin-bottom:20px;font-size:14px}.layui-m-layerbtn{display:box;display:-moz-box;display:-webkit-box;width:100%;height:50px;line-height:50px;font-size:0;border-top:1px solid #d0d0d0;background-color:#f2f2f2}.layui-m-layerbtn span{display:block;box-flex:1;-webkit-box-flex:1;font-size:14px;cursor:pointer}.layui-m-layerbtn span[yes]{color:#40affe}.layui-m-layerbtn span[no]{border-right:1px solid #d0d0d0;border-radius:0 0 0 5px}.layui-m-layerbtn span:active{background-color:#f6f6f6}.layui-m-layerend{position:absolute;right:7px;top:10px;width:30px;height:30px;border:0;font-weight:400;background:0 0;cursor:pointer;-webkit-appearance:none;font-size:30px}.layui-m-layerend:after,.layui-m-layerend:before{position:absolute;left:5px;top:15px;content:"";width:18px;height:1px;background-color:#999;transform:rotate(45deg);-webkit-transform:rotate(45deg);border-radius:3px}.layui-m-layerend:after{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}body .layui-m-layer .layui-m-layer-footer{position:fixed;width:95%;max-width:100%;margin:0 auto;left:0;right:0;bottom:10px;background:0 0}.layui-m-layer-footer .layui-m-layercont{padding:20px;border-radius:5px 5px 0 0;background-color:hsla(0,0%,100%,.8)}.layui-m-layer-footer .layui-m-layerbtn{display:block;height:auto;background:0 0;border-top:none}.layui-m-layer-footer .layui-m-layerbtn span{background-color:hsla(0,0%,100%,.8)}.layui-m-layer-footer .layui-m-layerbtn span[no]{color:#fd482c;border-top:1px solid #c2c2c2;border-radius:0 0 5px 5px}.layui-m-layer-footer .layui-m-layerbtn span[yes]{margin-top:10px;border-radius:5px}body .layui-m-layer .layui-m-layer-msg{width:auto;max-width:90%;margin:0 auto;bottom:-150px;background-color:rgba(0,0,0,.7);color:#fff}.layui-m-layer-msg .layui-m-layercont{padding:10px 20px}.cyxy-function{bottom:140px}.cyxy-function,.cyxy-personal{position:fixed;right:20px;z-index:109999;cursor:pointer}.cyxy-personal{bottom:190px}.cyxy-personal .cyxy-favorite-btn{border:2px solid #5ebb8d;box-sizing:border-box}.cyxy-switch{position:relative;display:inline-block;width:54px;height:28px}.cyxy-switch input{display:none}.slider{cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc}.slider,.slider:before{position:absolute;transition:.4s}.slider:before{content:"";height:20px;width:20px;left:4px;bottom:4px;background-color:#fff}input:checked+.slider{background-color:#00b976}input:focus+.slider{box-shadow:0 0 1px #00b976}input:checked+.slider:before{-webkit-transform:translateX(26px);transform:translateX(26px)}.cyxy-favorite{position:fixed;bottom:90px;right:20px;z-index:109999;cursor:pointer}.cyxy-favorite-btn{height:36px;width:36px;border-radius:50%;overflow:hidden}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}.collection-success,.collection-success:hover{color:#fff}.layui-m-layercont .cyxy-trs-target{display:none}.collection-icon{width:12px;height:13px;background:url("http://staging.caiyunapp.com/imgs/layar-target.png") no-repeat;display:inline-block;background-size:cover;background-position:50%}.collection-success>a{margin-left:12px;vertical-align:middle}.cy_free_box{position:relative}.cy_free_box img{width:100%;cursor:pointer;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.cy_free_button img{width:40%;margin:0 10px}.cy_free_del{position:absolute;width:6%;height:6%;right:0;top:0;cursor:pointer;z-index:10}.layui-m-layer-cy_free_content{background:inherit!important}',
      "",
    ]);
  },
  function (e, t) {
    e.exports = function () {
      var e = [];
      return (
        (e.toString = function () {
          for (var e = [], t = 0; t < this.length; t++) {
            var n = this[t];
            n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
          }
          return e.join("");
        }),
        (e.i = function (t, n) {
          "string" == typeof t && (t = [
            [null, t, ""]
          ]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            "number" == typeof i && (r[i] = !0);
          }
          for (o = 0; o < t.length; o++) {
            var a = t[o];
            ("number" == typeof a[0] && r[a[0]]) ||
            (n && !a[2] ?
              (a[2] = n) :
              n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
              e.push(a));
          }
        }),
        e
      );
    };
  },
  function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = d[r.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++) o.parts.push(c(r.parts[i], t));
        } else {
          var a = [];
          for (i = 0; i < r.parts.length; i++) a.push(c(r.parts[i], t));
          d[r.id] = {
            id: r.id,
            refs: 1,
            parts: a,
          };
        }
      }
    }

    function o(e) {
      for (var t = [], n = {}, r = 0; r < e.length; r++) {
        var o = e[r],
          i = o[0],
          a = {
            css: o[1],
            media: o[2],
            sourceMap: o[3],
          };
        n[i] ?
          n[i].parts.push(a) :
          t.push(
            (n[i] = {
              id: i,
              parts: [a],
            })
          );
      }
      return t;
    }

    function i(e, t) {
      var n = h(),
        r = y[y.length - 1];
      if ("top" === e.insertAt)
        r ?
        r.nextSibling ?
        n.insertBefore(t, r.nextSibling) :
        n.appendChild(t) :
        n.insertBefore(t, n.firstChild),
        y.push(t);
      else {
        if ("bottom" !== e.insertAt)
          throw new Error(
            "Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."
          );
        n.appendChild(t);
      }
    }

    function a(e) {
      e.parentNode.removeChild(e);
      var t = y.indexOf(e);
      t >= 0 && y.splice(t, 1);
    }

    function s(e) {
      var t = document.createElement("style");
      return (t.type = "text/css"), i(e, t), t;
    }

    function u(e) {
      var t = document.createElement("link");
      return (t.rel = "stylesheet"), i(e, t), t;
    }

    function c(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = m++;
        (n = g || (g = s(t))),
        (r = l.bind(null, n, i, !1)),
        (o = l.bind(null, n, i, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa ?
        ((n = u(t)),
          (r = function (e, t) {
            var n = t.css,
              r = t.sourceMap;
            r &&
              (n +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                " */");
            var o = new Blob([n], {
                type: "text/css",
              }),
              i = e.href;
            (e.href = URL.createObjectURL(o)), i && URL.revokeObjectURL(i);
          }.bind(null, n)),
          (o = function () {
            a(n), n.href && URL.revokeObjectURL(n.href);
          })) :
        ((n = s(t)),
          (r = function (e, t) {
            var n = t.css,
              r = t.media;
            if ((r && e.setAttribute("media", r), e.styleSheet))
              e.styleSheet.cssText = n;
            else {
              for (; e.firstChild;) e.removeChild(e.firstChild);
              e.appendChild(document.createTextNode(n));
            }
          }.bind(null, n)),
          (o = function () {
            a(n);
          }));
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }

    function l(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = v(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    var d = {},
      p = function (e) {
        var t;
        return function () {
          return void 0 === t && (t = e.apply(this, arguments)), t;
        };
      },
      f = p(function () {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
      }),
      h = p(function () {
        return document.head || document.getElementsByTagName("head")[0];
      }),
      g = null,
      m = 0,
      y = [];
    e.exports = function (e, t) {
      void 0 === (t = t || {}).singleton && (t.singleton = f()),
        void 0 === t.insertAt && (t.insertAt = "bottom");
      var n = o(e);
      return (
        r(n, t),
        function (e) {
          for (var i = [], a = 0; a < n.length; a++) {
            var s = n[a];
            (u = d[s.id]).refs--, i.push(u);
          }
          e && r(o(e), t);
          for (a = 0; a < i.length; a++) {
            var u;
            if (0 === (u = i[a]).refs) {
              for (var c = 0; c < u.parts.length; c++) u.parts[c]();
              delete d[u.id];
            }
          }
        }
      );
    };
    var v = (function () {
      var e = [];
      return function (t, n) {
        return (e[t] = n), e.filter(Boolean).join("\n");
      };
    })();
  },
  function (e, t, n) {
    var r;
    !(function (o) {
      "use strict";
      var i = document,
        a = "getElementsByClassName",
        s = function (e) {
          return i.querySelectorAll(e);
        },
        u = {
          type: 0,
          shade: !0,
          shadeClose: !0,
          fixed: !0,
          anim: "scale",
        },
        c = {
          extend: function (e) {
            var t = JSON.parse(JSON.stringify(u));
            for (var n in e) t[n] = e[n];
            return t;
          },
          timer: {},
          end: {},
          touch: function (e, t) {
            e.addEventListener(
              "click",
              function (e) {
                t.call(this, e);
              },
              !1
            );
          },
        },
        l = 0,
        d = ["layui-m-layer"],
        p = function (e) {
          (this.config = c.extend(e)), this.view();
        };
      (p.prototype.view = function () {
        var e = this,
          t = e.config,
          n = i.createElement("div");
        (e.id = n.id = d[0] + l),
        n.setAttribute("class", d[0] + " " + d[0] + (t.type || 0)),
          n.setAttribute("index", l);
        var r = (function () {
            var e = "object" == typeof t.title;
            return t.title ?
              '<h3 style="' +
              (e ? t.title[1] : "") +
              '">' +
              (e ? t.title[0] : t.title) +
              "</h3>" :
              "";
          })(),
          o = (function () {
            "string" == typeof t.btn && (t.btn = [t.btn]);
            var e,
              n = (t.btn || []).length;
            return 0 !== n && t.btn ?
              ((e = '<span yes type="1">' + t.btn[0] + "</span>"),
                2 === n &&
                (e = '<span no type="0">' + t.btn[1] + "</span>" + e),
                '<div class="layui-m-layerbtn">' + e + "</div>") :
              "";
          })();
        if (
          (t.fixed ||
            ((t.top = t.hasOwnProperty("top") ? t.top : 100),
              (t.style = t.style || ""),
              (t.style += " top:" + (i.body.scrollTop + t.top) + "px")),
            2 === t.type &&
            (t.content =
              '<i></i><i class="layui-m-layerload"></i><i></i><p>' +
              (t.content || "") +
              "</p>"),
            t.skin && (t.anim = "up"),
            "msg" === t.skin && (t.shade = !1),
            (n.innerHTML =
              (t.shade ?
                "<div " +
                ("string" == typeof t.shade ? 'style="' + t.shade + '"' : "") +
                ' class="layui-m-layershade"></div>' :
                "") +
              '<div class="layui-m-layermain" ' +
              (t.fixed ? "" : 'style="position:static;"') +
              '><div class="layui-m-layersection"><div class="layui-m-layerchild ' +
              (t.skin ? "layui-m-layer-" + t.skin + " " : "") +
              (t.className ? t.className : "") +
              " " +
              (t.anim ? "layui-m-anim-" + t.anim : "") +
              '" ' +
              (t.style ? 'style="' + t.style + '"' : "") +
              ">" +
              r +
              '<div class="layui-m-layercont">' +
              t.content +
              "</div>" +
              o +
              "</div></div></div>"),
            !t.type || 2 === t.type)
        ) {
          var u = i[a](d[0] + t.type);
          u.length >= 1 && layer.close(u[0].getAttribute("index"));
        }
        document.body.appendChild(n);
        var c = (e.elem = s("#" + e.id)[0]);
        t.success && t.success(c), (e.index = l++), e.action(t, c);
      }),
      (p.prototype.action = function (e, t) {
        var n = this;
        e.time &&
          (c.timer[n.index] = setTimeout(function () {
            layer.close(n.index);
          }, 1e3 * e.time));
        var r = function () {
          0 == this.getAttribute("type") ?
            (e.no && e.no(), layer.close(n.index)) :
            e.yes ?
            e.yes(n.index) :
            layer.close(n.index);
        };
        if (e.btn)
          for (
            var o = t[a]("layui-m-layerbtn")[0].children, i = o.length, s = 0; i > s; s++
          )
            c.touch(o[s], r);
        if (e.shade && e.shadeClose) {
          var u = t[a]("layui-m-layershade")[0];
          c.touch(u, function () {
            layer.close(n.index, e.end);
          });
        }
        e.end && (c.end[n.index] = e.end);
      }),
      (o.layer = {
        v: "2.0",
        index: l,
        open: function (e) {
          return new p(e || {}).index;
        },
        close: function (e) {
          var t = s("#" + d[0] + e)[0];
          t &&
            ((t.innerHTML = ""),
              i.body.removeChild(t),
              clearTimeout(c.timer[e]),
              delete c.timer[e],
              "function" == typeof c.end[e] && c.end[e](),
              delete c.end[e]);
        },
        closeAll: function () {
          for (var e = i[a](d[0]), t = 0, n = e.length; n > t; t++)
            layer.close(0 | e[0].getAttribute("index"));
        },
      }),
      void 0 ===
        (r = function () {
          return layer;
        }.call(t, n, t, e)) || (e.exports = r);
    })(window);
  },
  function (e, t, n) {
    function r() {
      for (
        var e = [
            function () {
              return new XMLHttpRequest();
            },
            function () {
              return new ActiveXObject("Msxml2.XMLHTTP");
            },
            function () {
              return new ActiveXObject("Msxml3.XMLHTTP");
            },
            function () {
              return new ActiveXObject("Microsoft.XMLHTTP");
            },
          ],
          t = !1,
          n = 0; n < e.length; n++
      ) {
        try {
          t = e[n]();
        } catch (e) {
          continue;
        }
        break;
      }
      return (
        (t.onerror = function (e) {
          throw (
            (i.open({
                content: o.NETWORK_ERROR_MSG,
                skin: "msg",
                time: 3,
              }),
              new Error("XHR.onerror", e))
          );
        }),
        t
      );
    }
    var o = n(8),
      i = n(6);
    (e.exports.testCookie = function (e) {
      var t = r(),
        n = o.BIZ_URL + "/test_cookies";
      t.open("GET", n, !0),
        (t.withCredentials = !0),
        t.setRequestHeader("content-type", "application/json"),
        (t.timeout = 1e4),
        (t.onerror = function (e) {
          i.open({
            content: o.PAGE_COOKIE_ERROR_MSG,
            skin: "msg",
            time: 6,
          });
        }),
        (t.onload = function (t) {
          var n = JSON.parse(this.responseText);
          "ok" == n.status && n.cookies && n.cookies.cy_user ?
            e(JSON.parse(decodeURIComponent(n.cookies.cy_user))) :
            e();
        }),
        t.send();
    }),
    (e.exports.alipayForOneMonthRedeem = function (e, t) {
      var n = r(),
        i = o.TRS_URL + "/v1/user/redeem";
      n.open("POST", i, !0),
        n.setRequestHeader("X-Authorization", "token " + o.token),
        (n.timeout = 5e3),
        n.setRequestHeader("content-type", "application/json"),
        (n.onload = function (e) {
          var n = JSON.parse(this.responseText);
          t(n);
        }),
        n.send(
          JSON.stringify({
            user_id: e,
            product_id: 16,
            os_type: "web",
            version: "1.0.3",
            timestamp: 0,
            pay_channel: "alipay",
          })
        );
    }),
    (t.fetchPageSentenceTargetList = function (e, t, n, i) {
      var a = r(),
        s = o.TRS_URL + "/v1/page/sentence";
      a.open("POST", s, !0),
        a.setRequestHeader("X-Authorization", "token " + o.token),
        (a.timeout = 5e3),
        a.setRequestHeader("content-type", "application/json"),
        (a.onload = function (e) {
          var t = JSON.parse(this.responseText);
          i(t);
        }),
        a.send(
          JSON.stringify({
            user_id: t,
            page_id: n,
            sentence_id: e,
            trans_type: "en2zh",
          })
        );
    }),
    (t.updatePageSentence = function (e, t, n, a) {
      if (!xhrLoading) {
        var s = r(),
          u = o.TRS_URL + "/v1/page/" + pageId + "/sentence/" + t;
        (xhrLoading = !0),
        s.open("POST", u, !0),
          s.setRequestHeader("X-Authorization", "token " + o.token),
          (s.timeout = 5e3),
          s.setRequestHeader("content-type", "application/json"),
          (s.onload = function (e) {
            xhrLoading = !1;
            var t = JSON.parse(this.responseText);
            a(t);
          }),
          (s.onerror = function (e) {
            throw (
              ((xhrLoading = !1),
                i.open({
                  content: UPDATE_TARGET_ERROR,
                  skin: "msg",
                  time: 3,
                }),
                a(),
                new Error("commentPageSentence Error", e))
            );
          }),
          s.send(
            JSON.stringify({
              source: e,
              target: n,
              user_id: userId,
              sentence_id: t,
              trans_type: "en2zh",
            })
          );
      }
    }),
    (t.commitPageSentence = function (e, t, n, a, s) {
      if (!xhrLoading) {
        var u = r(),
          c = o.TRS_URL + "/v1/page/" + pageId + "/sentence",
          l = userId;
        s && (l = s),
          (xhrLoading = !0),
          u.open("POST", c, !0),
          u.setRequestHeader("X-Authorization", "token " + o.token),
          (u.timeout = 5e3),
          u.setRequestHeader("content-type", "application/json"),
          (u.onload = function (e) {
            xhrLoading = !1;
            var t = JSON.parse(this.responseText);
            a(t);
          }),
          (u.onerror = function (e) {
            throw (
              ((xhrLoading = !1),
                i.open({
                  content: UPDATE_TARGET_ERROR,
                  skin: "msg",
                  time: 3,
                }),
                new Error("commitPageSentence Error", e))
            );
          }),
          u.send(
            JSON.stringify({
              user_id: l,
              page_id: pageId,
              source: e,
              target: t,
              trans_type: "en2zh",
              action: n || "",
            })
          );
      }
    }),
    (t.commitPageSentence = function (e, t, n, a, s) {
      if (!xhrLoading) {
        var u = r(),
          c = o.TRS_URL + "/v1/page/" + pageId + "/sentence",
          l = userId;
        s && (l = s),
          (xhrLoading = !0),
          u.open("POST", c, !0),
          u.setRequestHeader("X-Authorization", "token " + o.token),
          (u.timeout = 5e3),
          u.setRequestHeader("content-type", "application/json"),
          (u.onload = function (e) {
            xhrLoading = !1;
            var t = JSON.parse(this.responseText);
            a(t);
          }),
          (u.onerror = function (e) {
            throw (
              ((xhrLoading = !1),
                i.open({
                  content: UPDATE_TARGET_ERROR,
                  skin: "msg",
                  time: 3,
                }),
                new Error("commitPageSentence Error", e))
            );
          }),
          u.send(
            JSON.stringify({
              user_id: l,
              page_id: pageId,
              source: e,
              target: t,
              trans_type: "en2zh",
              action: n || "",
            })
          );
      }
    }),
    (t.commentPageSentence = function (e, t, n) {
      if (!xhrLoading) {
        var a = r();
        (xhrLoading = !0), (t = t.toUpperCase());
        var s =
          o.TRS_URL + "/v1/page/" + pageId + "/sentence/" + e + "/comment";
        a.open("POST", s, !0),
          a.setRequestHeader("X-Authorization", "token " + o.token),
          (a.timeout = 3e3),
          a.setRequestHeader("content-type", "application/json"),
          (a.onload = function (e) {
            xhrLoading = !1;
            var t = JSON.parse(this.responseText);
            n(t);
          }),
          (a.onerror = function (e) {
            throw (
              ((xhrLoading = !1),
                i.open({
                  content: UPDATE_TARGET_ERROR,
                  skin: "msg",
                  time: 3,
                }),
                new Error("commentPageSentence Error", e))
            );
          }),
          setTimeoutHidePopupview(),
          a.send(
            JSON.stringify({
              user_id: userId,
              sentence_id: e,
              trans_type: "en2zh",
              action: t,
            })
          );
      }
    }),
    (t.pageAuth = function (e, t, n, a) {
      var s = r(),
        u = o.TRS_URL + "/v1/page/auth";
      s.open("POST", u, !0),
        s.setRequestHeader("X-Authorization", "token " + o.token),
        (s.timeout = 3e3),
        s.setRequestHeader("content-type", "application/json"),
        (s.onerror = function (e) {
          throw (
            (i.open({
                content: o.PAGE_AUTH_ERROR_MSG,
                skin: "msg",
                time: 3,
              }),
              new Error("PageAuth Error", e))
          );
        }),
        (s.onload = function (e) {
          var t = JSON.parse(this.responseText);
          a(t);
        }),
        s.send(
          JSON.stringify({
            user_id: e,
            browser_id: t,
            device_id: n,
            url: document.URL,
            title: document.title,
          })
        );
    }),
    (t.postFavorite = function (e, t, n) {
      var a = r(),
        s = o.TRS_URL + "/v1/page/favorite";
      a.open("POST", s, !0),
        a.setRequestHeader("X-Authorization", "token j1np9nb4h8jad0mi2odk"),
        (a.timeout = 3e4),
        a.setRequestHeader("content-type", "application/json"),
        (a.onerror = function (e) {
          throw (
            (i.open({
                content: o.PAGE_AUTH_ERROR_MSG,
                skin: "msg",
                time: 3,
              }),
              new Error("PageAuth Error", e))
          );
        }),
        (a.onload = function (e) {
          var t = JSON.parse(this.responseText);
          n(t);
        }),
        a.send(
          JSON.stringify({
            url: e,
            user_id: t,
            article: !0,
          })
        );
    }),
    (t.fetchPageTranslator = function (e, t, n) {
      var i = r(),
        a = o.TRS_URL + "/v1/page/" + e + "/author";
      i.open("POST", a, !0),
        i.setRequestHeader("X-Authorization", "token " + o.token),
        (i.timeout = 5e3),
        i.setRequestHeader("content-type", "application/json"),
        (i.onload = function (e) {
          var t = JSON.parse(this.responseText);
          n(t);
        }),
        (i.onerror = function (e) {
          throw new Error("fetchPageTranslator Error", e);
        }),
        i.send(
          JSON.stringify({
            user_id: t,
          })
        );
    }),
    (t.pageMark = function (e, t, n, i) {
      var a = r(),
        s = o.TRS_URL + "/v1/page/mark";
      a.open("POST", s, !0),
        a.setRequestHeader("X-Authorization", "token " + o.token),
        (a.timeout = 3e4),
        a.setRequestHeader("content-type", "application/json"),
        (a.onload = function (e) {
          var t = JSON.parse(this.responseText);
          i(t);
        }),
        a.send(
          JSON.stringify({
            user_id: t,
            page_id: n,
            reading_chars: e.chars,
            reading_en_words: e.en_words,
            reading_zh_chars: e.zh_chars,
            reading_time: e.time,
          })
        );
    }),
    (t.postAction = function (e, t) {
      var n = r();
      n.open("POST", "https://ad.caiyunapp.com/v1/action", !0),
        n.setRequestHeader("X-Authorization", "token " + o.token),
        (n.timeout = 3e4),
        n.setRequestHeader("content-type", "application/json"),
        (n.onload = function (e) {
          var n = JSON.parse(this.responseText);
          t(n);
        }),
        n.send(JSON.stringify(e));
    }),
    (t.getFreeCode = function (e) {
      if (!xhrLoading) {
        var t = r(),
          n = o.TRS_URL + "v1/coupon/generate";
        (xhrLoading = !0),
        t.open("POST", n, !0),
          t.setRequestHeader("X-Authorization", "token " + o.token),
          (t.timeout = 5e3),
          t.setRequestHeader("content-type", "application/json"),
          (t.onload = function (e) {
            xhrLoading = !1;
            var t = JSON.parse(this.responseText);
            callback(t);
          }),
          (t.onerror = function (e) {
            throw (
              ((xhrLoading = !1),
                i.open({
                  content: UPDATE_TARGET_ERROR,
                  skin: "msg",
                  time: 3,
                }),
                callback(),
                new Error("commentPageSentence Error", e))
            );
          }),
          t.send(
            JSON.stringify({
              browser_id: e,
            })
          );
      }
    });
  },
  function (e, t) {
    var n = "prd",
      r = "",
      o = "",
      i = "",
      a = "https://caiyunapp.com/user/login/",
      s = !0,
      u = "t4d0s9zds4fw272poa11",
      c = !1;
    (r = "https://api.interpreter.caiyunai.com"),
    (o = "https://biz.caiyunapp.com"),
    (a = "https://www.caiyunapp.com/user/login/"),
    (i = "5a096eec830f7876a48aac47"),
    (s = !0),
    "object" == typeof CAIYUN &&
      (CAIYUN.key && (u = CAIYUN.key),
        CAIYUN.disable && (c = CAIYUN.disable)),
      (e.exports = {
        ENV: n,
        VERSION: "1.1.0",
        token: u,
        disable: c,
        TRS_URL: r,
        BIZ_URL: o,
        LOGIN_URL: a,
        XIAOYI_USERID: i,
        CACHED: s,
        DOWNLOAD_URL: "http://a.app.qq.com/o/simple.jsp?pkgname=com.caiyuninterpreter.activity",
        LNADING_URL: "http://caiyunapp.com/xiaoyi/landing.html",
        NETWORK_ERROR_MSG: "抱歉，网络请求有误，请刷新重试 ",
        PAGE_AUTH_ERROR_MSG: "抱歉，网页认证有误，请刷新重试 ",
        PAGE_COOKIE_ERROR_MSG: "抱歉，Cookie数据获取异常，请刷新重试 ",
        DATA_ERROR_MSG: "抱歉，数据有误，请重试 ",
        DEFAULT_AVATAR_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACghJREFUeAHdW31wVNUVP/ft5sMNG5KQYAxBSKIhhI8qEGMHGgSDteIfzrTamYwCopI6nWGwpRPa6WhsrZIOWAv9EKIItZNp1c4wbanVVJRE6Tj5sEw+SGIgUbIJ5INkN9lN9vP1nLe7z7fZj+y+d7dA78zm3Xvfvb97znnn3nvuuScM4pyODbVmuVzuMhDEFaIHluFwhcDETABmZCIYaXiRwST+ncTMKBZ7mADd4GEder2uYecta0aoTbwSiwdw7WDLWtHjqRBFcQtjsBKfqsZhjGFXaMdnPROEuqdy1rbwplcVYaGIeH2ky+iyW3aBKO7E98Wh2nCo6wTGjumTUo8+kVWEWqM9aRbAG+OfpTmmHHuQlN34S9dOUlQI49jqUOK8xFceT79zIqoeYRqpFgCp9WuDTTtQRWswnxUGP67VODVGcIpVPZlTcpymi5rBVAngyJXmAub0nEDG16sZlHcfZP4TMUHYXnnzuguxYscsgCMDnz4MIryGA6XGOlic21uAwZOVuaVvxzKOEG1jUvmjA00Hkfm3sM/1xjyxkUq0EY1Ea7R8RdXwiNicAAOe47hXV0QLfG3bsTrIFXZUsnXOueiYUwDEPDO5T+Ji98BcYNfTe1wc/yEu0j00lxAiTgFJlfDL32jM04eQaJZojzwdIgqg1tR84MZR+1D6J1Z4eQj1zlsXdgr4Vnta8G78xOCRcLtDSAHQPg8Odytyfj2u9mo+iAUSdWtC2Qn62Wg072tNTSfQrOLKvNPhgK6OTvii/wsYGb4C1ikruN0uwEMOGAwGyMzKgsVLboXC5cvBaJQOibNJ01JO9Rlu35htMQYJwGve8rfwzpz+EN77+ymw2+0RGSGBFBUXw+b7tsCy5UUR28byEj/seuIN+7yh7BcwBehg47Q6e7AxF9t+dGQUOtvawDQwAJYJM371Kejv61OOHzG/YtUqqHh8OzeNoLNDQkpCofIAFSCAI5c+rUaKnotIVZQvifkzH5yGc62tMDFOhzd1KS09DZ54+nuwJC9PHUBwr+crF5dW+6vlbZDO81i52/9C65MJDIZMJk3MEw0T4xNw+MDL8CWuHZzSbh+vEpwsAMmZwek8b7o0AAd/8RL0dHVxodmBC2jtb36rWZg+YtJ9vAYKwOfJ0UywzWqDVw8dhqlJLg4bmR6z2Qx/+sObcllTxuu1kiAkDSAfHpa4uLHq330XzBOanDRheets74Du81y0qtjHM0gCIAdm2FFjeEGqeraxMYYesTelhZVH8vPsFQB6b3mAft7VDdO2aR5QYTHOt7cDCVprwq1e4lkgvz25rrUCUv/enp4gmAzjfEhJvkmuf/axp6Fs9Tq5HGvG7XZD34WLsXYLak88E+8CXVqQ+RvUQkXFyPBwUK9jP3oBfr/nWfRme4coWpwH79fUwjvP/QpW5t0e1D6aiuHLl6NpFrEN8Uy8C3RjE7FlDC/J0lOmO29bDveXbIBHNt4Pr+/9OSQnJsG5i14tefDue6D5d2/ByZ8dhq13bwS9LsgqV0IF5G02W0BZdQF51/uuq1RjKDt6PHiEUqRHyx+USxWbt0Jp0Sr4678/kusoQwKin8U2BY1tLdDe1wv9V0xgtk7BjMOOgtFJU+jk2dMwPTMj9RXQyOKRiHcSeyEPMMIgs1WZNt1RqixCQc6t8My3twXU+QuphnmwtXSj9PPX+Z9T0zb480f/9BdhQSaXowrhFQrei0oZW1NmydKlcv8EvR5ovvNIvYNfgsfjkaFuK+T0zfCSFrdBxu3wXV66QSYy/5bFIODRlkcas3xlWJWv/TpkpvG6gWNGwX9FzYPQ8oKvSQsaYWWnL+ABKWF40MNJiRbKF3fugXxDhlTW+od45/OJfJQkC3r45a4fgtGQgr95WumT+xtvMkj5Z76zDVbnFwKNwysJaAFwO7WMO6ehAFX/L9W/hpwF3BYqyM7Igu/e8y14ftv3Jb5pHB6JeGfo/e3DK6WlPAAXJqbAQwu9ZgUtWrzWACVtNrcD6obOgQeJ1pwY9Au+sBTNWAQw7LBCt3VEwooH8wR8dgJ3BB7MExiG5NAaEGzA00uVqXG8XxKCB60MnmnG7YTG8T64OH2VJ2yPIAUkcYSkr3MGCSVt4JlaLINw3qddvHCJd4GisXgBKnG4qakP1M1ZoyRY5F2gULTZlwVKRtTmzU6v3a62/+x+ZjdfPOKZeBcoDg/tjPbZA2ot906PaYWQ+0/j/L9s57ZbS7jEM/EuGUIojXp5NE6ZISR4cMbCBe2zyUFe675Mj59nrwAwCFF+wzHTgIuh3ePShDhkt0DH1BVNGKE6U+Al1UsC8EVgdoZqqKXO4rZD/djn4FK5gF112rB/L/evjzx1+qNOJQFITGIEphZmw/UdxKlwaqQLaB+PJZlmzPC34fMwo1GDQo6p4FUWAIWfYmP1l3ghR/JWXnFMxWQXjDlscGq0G+yiOwKq6lfjPl4lAFkAvtjbQ6ph5+gYi10wiVMnjumQMs5YFgANSLG3uDp6jfk4UnCtoIk34lE5foAA6N4cvddVygb/T3niTRkbQLwFuVfJX44hMo34XK+VeafHDW3Wy9BsNoEV1fqxnDWwKaMAilMWwnx9cgC82TUDXWjr09b55lArhblByfxcuMOYw8UBgl//k6cWlQSFyAQJgKjSEiTlRso7kekmZPo/aMCEswNS9ImQokuUhGDFM77V5QgQiL+gF3SwKiUb7krLlZ4JWFaRwgZJhRQADRBLmBwtcN3WUWi2XIJWPLWR0yIeKQldYaQRpBnFKTeDznfbNOdYsYbJ+QG9gceeH/jLyif5Yy7YRqHJYoIW/E2iCv8vE2nPGuMiKEHNuN2QiRZdmG/J2MHK3Lv2hqMtTC9vc1oPUAh/VEaLDuOeTvO0yTwAEy4+vrlwxEVbT+vJutRcKMvIh+xEpTOW1e3KLXkU539Y/1lEARAB/mBpu9v9wDvDbdBwlVyIYfGipTlu7crS8+Dh7NWQJOiiCpaeUwB+IdR8fPr4RdtYRdwo5wicb1hQV7VhM59weZkuukKv33cAP37INUFud60zDF6GLfv34n18VGoalQYE8PT+Pt+/zIhcQ2kDxlBVYNK/zMB9+9+OpXvsAiD0D35aAG7XCbRWNBtLsRAbti0aOaDTb4d7X4j/P03JRNCU+NdPdoBHrMFdgt81kDxANBk8twisCspfPB6tys9GVacBSpQPq9PAMbMHqzDKVOR1bascIUSeSf84CYnJr8Cm6q+ujkO0nKtKuwD8I3xcYwTb+C4s7sSpwSXm0A8tPxkjr9UxMKQfhQ1VXLyk/AQgU4mZ9/atxcAL2jIpFG0l7hzqxmGSwUEe63q8xqqDb+5vwTzXpI6wWEho+HEWunbKUCtWIDvLUBSFyEwmPo1Y9gZn0A21iD8mjuKzB99145zugCTWAGUvxdU/8V+bqL57tgJjtwAAAABJRU5ErkJggg==",
        XIAOYI_DEFAULT_URL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACvAK8DAREAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAMGBQcIAgQB/8QAOxAAAQMDAQMIBQwDAQAAAAAAAAECAwQFEQYHEjETITZBUXJzoVJhgZGxFCImJzIzNEJTYnHBFiM30f/EABsBAQACAwEBAAAAAAAAAAAAAAABAgMEBQYH/8QAMhEBAAEDAgQFAQYHAQAAAAAAAAECAxEEBQYhMXESMjQ1gUEUM0JRkaETIiNhscHR4f/aAAwDAQACEQMRAD8A6pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzK7djcqcUQK1TiMqrWTyIquSRyO45RTG4ly5VnOX5TX2oplbyq8rH154lolNvXV2/NzhZ6OqirIGzQPRzF7Or1FnYtXabtPipnkmDIAAAAAAAAAAAAAAAAAAAB4n+5fjn5lClfllS7lPHE1eUkYzvORDE8/eqiOssHU3Gm3U3ZEev7SzSrvU46pNnV7e7UtVb1zyMzVe1FXg5OPkTDJsurn7TVZ+k8/0bPLPWAAAAAAAAAAAAAAAHiWaOFu9K9rG9rlwnmFaqopjMzhgrlrLT9uz8pulPvJ1MXfXyDSu7npbXmrj/Kp3Pa/ZoMpRU1VVO6lwjW+fOThzbvEWnp5URMqndNsd2lylBRU1MnUr1WRf6Jw513iO9V93TEfuqlVrrUdzqY2VF0nbG56ZZH81CccmjXumpvTiqvkzMr3vVVe5zl7XLkxKVzM9WRp/umfwgZI6Pt2dr9Po+7J8BDJs/uEfLdhZ7sAAAAAAAAAAIK6sp6CndPWTMhibxc9cIOjFevW7NPjuTiFPuG0uw0uUhdPUuT9NmE964K+KHEvcSaO35ZmrsrNx2tTLltBbmM7HSvz5IMuVe4qqnlao/VVrltD1FWZxWJTtXqhbukuZd3/WXfxY7KvXXOurHK6qrKiZV9ORVJaFepu3ZzXVMsc4ljiUTiV4ROJXh+0v4uHvoTPRlo6r4/iphblTIwfdM/gMkdH27Ol+n8fdk+Ahk2b3GPlu4s94AAAAAAAAAAGitqV5nuGop6RXqlNSLybWZ5ld1qYqpzL5vxDrq7+qqtZ/lp5KSohwIRuLQtCN5ZeETiV4QuJXhE4leETyV4eqX8XD30E9GWjqvUnWYW3UyEC/6mfwhLLHR9mzlfrBj7snwEL7L7jHy3gWe+AAAAAAAAABQOdNc9Lbr47jDPV8n3f1t3uwDiYaEI3FoWhG4laETiy8IXEskPVNR1NY9WUlPLM5OdUjYrse4lmt2q7nKiMvnqYZIJVjnjfHInFr2qip7FJhaqmqicVRh5o0zWwInFXognovR1bPkoIY2Yciud1rkwunVbiIR7nJo1qcMcxKkxh9GzdfrCi7snwELbL7jHy3kWe/AAAAAAAAABQOddc9Lbr46mGer5Pu/rbvdX3EufDw4mFoW7TOz+5X6hSsSSOmp3fYWRMq/wBaJ2Fod/b9iv6y3/FziPowOqdO12nK5Kava1Ucm8yRn2Xp6iWprtBd0NzwXP1YFxLUh0RsmoaOm0bRTUrWcrOivlenFXZVML7g+i7Hat0aSmqjrPVVtvlDRpb6CsRrG1iyrHlOZXtxz57cf2TDQ4jtW/BTc/E0vSLishVOKPQtLylE82ypbgxzF30VHdeOswujVeiY5vKScojXcMoSr4sxl9GzZfrDj7snwEL7J7jHy3oWfQAAAAAAAAAAUDnbXHS26+O4wz1l8n3j1t3ur7hDnwjUstDoLZ/fKCu03RsjmijmgjSOSNXIitVC8Ppuz62ze0tMRMRMRiYULbVeqOuqKKipJGSyU+86RzVyjc45s+wOFxLrLV2qm1ROZjq1a4l5eGc03rC76cY+O3Tt5F65WKRu83PanYS6mi3O/o48NueX5MdqTUFx1DVpUXSdZHNTDGomGtT1ITCmq1t3V1eK7OWHY7k5WP8ARVFJYKZwt0VxpqliKyVqOVOdqrhUMU0zDZmqJhl4FzCxU4YQMsTyh9uzT/ocfdk+Ahl2P3GPlvUs+ggAAAAAAAAAoHO2uOll18dTBPV8m3j113uwDiYc+EaloWh5yrVy1VRfUuCWSmqY6IXloWhE4leELiV4RuJXhC4leETiV4T0tyq6NyLBM5E9FVygxEstNUtibG6x1driJ724k5ORXY4cDHNOJb+yUTGvir84l0GHvgAAAAAAAAAUDnfXHSy6+Opgnq+Tbx6673YBwhz4RqWhaEbiy0I3ll4ROJXhE4leETiV4QuJXhG4lkh9NrtFfd6lsFtpZaiRy4RGN5vavAnLZsae5enw24y6C2V6C/xanfV16tkuc7d1d3nbG30U7V9ZjmcvY7Xtv2SPHX5p/ZsEh2AAAAAAAAAAUDnjW/Sy6+OpgnrL5NvHrrvdgHCHOhG4tC0I3FoXhG4laEe6rlw1FVexEySy0xM9GRoNNXm4qnyO21MqL17mE8yct2zoNRe8lEysdv2U6gqsLUJT0rF9N+8qexCcutZ4e1VfmxCz27YzSNwtyuU0vakLUannkZdSzw3RH3leey023ZrpihwqW9J3p+aZ6u8uAy6drZ9Lb/DnutVFQ0tDFydFTwwR+jGxGp5EOjRbotxiiMPoC4AAAAAAAAAAFA541v0suvjqa9Xml8l3j113uwDiYc+GTs2nbpen4t9I+RvXIvM1PaWjn0dDR7bqNXP9KnP9/oudu2UVUiI64V8cSdbIm7y+8vFMvRWOFbk87teOyz2/ZjYabCztnqnJ+o/Ce5ME4dizw3o7fmiau/8A4s1BYLTQIiUlvpo1T8yRpn3kuta0Wns+SiI+GTRETgG1gAAAAAAAAAAAAAAAAFA551smdWXTx1NerzS+S7x6673W/QmgGzsZX3yNdxfnR0682U7Xf+F6aPrL0Wy8PRXEX9VHL6R/1tOCGKnibFBG2ONqYRrUwiGV7aiimiPDTGISBYAAAAAAAAAAAAAAAAAAAABR7Xo9suqa+73NiOas6ugiXgv7lMcUc8y8zptkirW3NXfj68o/2vCJjgZHpgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
        LEFT_SLIDE_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAAXNSR0IArs4c6QAACQRJREFUeAHtXFtsFFUY/mfb0gttpbS0WECB2kAtFYOAkdhoEdBgTUGkERMIvvggxAdi0pqYWBMfSmI04WKiJiLwQIIPoiIqVksiEZSCCDTQ1HKTVi6FQru90XbH/zszZ3Zmu93ttju7s4UvgbnunPN9PWfO7ftHoUihtiqV+noWkUqFpKiziBT+R7l8nEakpvJ+Cv/r4vNuUqiD91v4fAOpSgMf11NC0u9UUuXm87ZDsTWFnyuKiFzl5PEsJkVZSKoaP+L0FKWff/8nuVy/Enn20tLNp0f8rCA/DL8ov1VmULfyOmd8LZeCx4OkP/LLCp1kwXdTsrqDiqvbRv6gwb8Mnyg/VWWT0rOJ/5pvcjJcJaxQuA4UpU2mBelTKT8li/LHZ9LDSRMpPX4cjY9LpJS4BOoa6KPOgV5q779Ll3puUWPnTWrsaqVj7VfodMdV1li1PlQ76uBS+AmpSR/R81XX/d0Q6rnRi9K4JZEutlSyGBWc52RzBpJc8VQ6qYBWZBfS0xnTaWK85bL51qD7t/q76XDbRdp3vZ723zhLPZ5+628U6mZxNtP03GrKf6vXejG0o9GJUlP5Ag2o2zjJPHOyBanZtGHaU7Qyew6lxY0zXwrLfsfAXfr6+hna/u8ROuseVDiaKE7ZSEuqfxxpYiMTBaXjQsuHXDo2mhOem/YgVcx4ll7Mms2VxX6gMn3feo42XzhEf3f8Z01QUbbRjNy3R1JqQs97TeVMLh1fcQ7myVxkcLWoyltC66fMj4gYMl259XC93dl8nKqaaqiNq5kJJ7jUrOZSc950LuhuaKLUVC4gj3qA85Aln7w8axZtL1hBmQnoZkQXN/u6aMPZfXSgtcGbEYVayaUsZ2GOeU8G3osLfNl09WDlMq4uP7AgE+TZTdOLaevsMtFyyHPR3KIFW5VTRHfVATpy+7LMCv5ar9Ha4jrafbhJngy0HV5JgSCk7mdBEvCwRG5VtheUUXnOY4GeHdVre6+d4lLzDfXKVkqhPu4tl9Ky6oPBMhZcFK3K1LIg4/GwyYlptKdoDT2RPiXYs6N+/Xh7M605vYeu9mLUwFCok6tSSbCqFFiUX97No4G+o/IdAkFq579BUxLTtURi4P8rvXdocd3nZmHwjnky0MvXNSQvNLv9fXulIKgyKCGxJAi4TU18QOQb+RdAI4HWE/yGwNCioB9ianbxDomFKuOPJ/KN/JswT/SzTCfMu/5bH/RUPeoWeSNaGfRQYxmFqTnUa22VFtL64j9o1+F/fHkNLim1VUl6113ci37IezOX+P4uJo/BA3wMYIjipxoNFqW/p4J/JMYy6KmiYxb4bWwk4fgd8AAf8NKRJwaz8kjfWkXB8B+jXR3oujuhpyrzE44t+ICXAfAFbxOsooj5EG34j8EdxjJjEeAFfgKY7gBvE7yiYMZMmyASlzHaHSvVxsRX7IIX+BkAb/DX4RVFTCFqM2aYD8HwPxrAoO7I7Uu2Jw1+4KkjTZtC1Y68oqjqOnnHxmmLolJKIMhLf+2kspO76FBbSKN9mfVhb1FarN0MnlPWoYkiZt3VuTiX7EoQ04fyhkhtpSBn3FfFVOOaU3uota/T1uQxMwi+AphkFzrwdLh2xlUuUy+dNNuWKUT5fH9bsyC4jknuj2eVUlaCGIP6+0lYzmGqFHy90HTQRMG6jI4ynmSOJPwJ8umjK+nVyaLg2p4VC19dBxdh5Q4LVQz8hTDrHilEWxDwBF/wFoAOrIdLW8rUVu6wLjOaZQjtycP73wmCIKfgC94CWMHkpV0XTw0Y9QULVZGAUwSRXC28WQ+XttitXcbKnd1wmiDga+HNi//8olWM1y+WMu2EEwURolh4KxCF9EEAibVdu0RxqiDgizVtE3LxTjEWw7HYbQecLAj4WnizHvxO8YqSyqv/4YbTBQFfC2/Wg0uKasy4JPNiUjgRC4KAr4U364F3SpcUAv6QcOLonctU775mPPKh5Am0NDPfOHbKjg/vLrQ+bpk5GGbCCQzP0WWXPcZL3W1iFIwS5CRYeStuvFP05TMSDqJwZxZjGLMwGAVjesBJwsA5ZYD1QPVhF6IGWKrsgNOF8eHdwqKwLVMHPGZ2wcnCWHmrDdz6sE9VisKmOzvhVGFgNjTAeuCdUi9PwIVoN5wojIU36+ESTmYYdxmwZcKFaDecJAz4grcAdGBnt0tYu+FkZsCnCltmJOAUYcDX8OdCB7a6o/XhmVpYuzV8wz7VSMEJwsCXa0DXQRMFXncd37FxFz7VSCGawoAnjMpeaDpoosD8L7zuJJYXYNyNJIYS5nZ/j63ZAE/DuQ3+ehCEXlKQNpv/dcDJ7NcFL2+wYesrzCMpmTx6tWcqA9kHP/D0wsvfKwqiIUjr8sPaDSdzpCGFWZUzh74ofIXiFW/2wp0X8DNZ2DtENIieiDdVhIcgGkIHrN2RLi1IGsLsKFxtqyDgBX4GwNsUHuMVBXcgPATREAx43b9srsPumAN4GV5+8AVvE6yiIF4G4SE64HV30mhW5ms0W/ABLwPg6xMnZBUFd8YnQRRh14b5H173aFQjI9Nh3AEP8DEFNTSJ+CCfNAaLUlLVI+Jl9Bth/n//vElZnwfE0iF4WIIZEBfkJ2Aqzi8p2CjXFWNlTKwxw/yfx00kbJexCnj132k0xUUhHmhp9VZ/fAaXFHkXAoiITshDmP/hdY9FIN/IvwknRICU6YR5d2hRUKziE8q5NRKTDYiGgPm/ubfd/HvH7yO/yLcpmqNVBEb5qTaSzNCi4I7nPmgSAUSIfmAgGqKk7rOYKTEoIcivTxQHAqICesd0YwYoB8A9Fu/j/0Xrqw8iqtayj12hl/nSuAHVQ9/y6BJe92cyZvJp5wDNLloZvFSRTwFR0pWy4QRA4f7Q+NwjMYShiQIZERiFOCBT2Eu0o01ROtB1j060KUQB7sclazr4/T9ABDsMygjnv3ci2M0KIT4I4TB+vnUA4y58qrBlhutbB5hD3n/jHHV7fMwA8lsHGLthqDIKhP5OGSqxUXwVA/4Q2CG62fXgHhNfxfAV6f73U3wV8Tm+/6UdH0F8DwN9kwkWMziqFIVnwXieOMrfZPofMjBeBNBEmuYAAAAASUVORK5CYII=",
        RIGHT_SLIDE_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAAXNSR0IArs4c6QAACPJJREFUeAHtXFtsFFUY/mfb0jtaKAULKFAbqKViEDASGy0CGqwpoFQxgeCLD0J8ICatiYlr4kNJjCZcTMREBB5I8EFQRMVqSSSCUhCBBppabtLKpVBotzfa7vh/Zy57Zrvdpdudnd3Cl8Bcd+Z8X8/9fP8oFC3UuDOot3s+qVRIijqdSOF/lMvHmURqBu+n8b9OPu8hhdp5v5nP15Oq1PNxHSWl/E4lbg+ftx2KrW/4uaKIyFVOXu8CUpR5pKqJYb9PUfr493+Sy/UrkXc3LdpwKuxnhfhh5EX5rTKLupQ3OeGrOBc8EeL94V9W6AQLvpNS1W1UXNUa/oMG/jJyovzkziGlez3/Nd/m13CRsELhMlCUOYHmjp5E+WnZlJ8+lh5JGUOjE0dRekIypSUkUWd/L3X091Bb3x262H2TGjpuUENnCx1tu0yn2q+wxqr1odpRO+fCz0hN+YRecF8LdMNQzw1flIaNyXShuZLFqOA0p8oJSHElUum4AlqaU0jPZE2hMYmWy/KtIfdv9nXRodYLtOdaHe27foa6vX3W3yjUxeJsoCm5VZT/To/14tCOhidKdeWL1K9u5lfmya8tyMihtZOfpmU5MykzYZR8KSL77f136Jtrp2nLv4fpjGdA5mikBGUdLaz6MdyXhScKcsf55o85d6yTXzwr8yGqmPocvZQ9gwuL/UBh+r7lLG04f5D+bv/P+kJF2UxTc98NJ9cMPe3VldM4d3zNKZhtpCKLi4U7byGtmTgnKmIY7zW2Xi6325uOkbuxmlq5mEk4zrlmBeeac9K5kLtDE6W6ci551f2chmzjyUuyp9OWgqU0NgndDGdxo7eT1p7ZQ/tb6n0JUaiFXMoSFuao72TwvYTgl6WrByoXc3H5gQV50Di7fkoxbZpRJloO45yTW7Rgr4wvojtqPx2+dclICv5ab9Cq4lraeajROBlse3c5BYKQuo8FScLDkrlV2VJQRuXjHw/2bEev7b56knPNXuoxWimFerm3XEqLqw6ESlhoUbQiU8OCpONhE5IzaVfRSnpy9MRQz3b8+rG2Jlp5ahdd6cGogaFQBxelklBFKbgov7yfR/29R4w6BILUzHmLJiaP1l4SB/9f7rlNC2q/kIVBHfNUsMrXNSgvNLt9vbsNQVBkkEPiSRBwm5T8gEg30i+ARgKtJ/gNgsFFQT9EanZRh8RDkQnEE+lG+iXMFv0s6YS8G7j1QU/Vq240bkQrgx5qPKMwYzz1WFulebSm+A/acegff14Dc0qNO0Xvuot70Q/5YNpC/9/F5TF4gI8JDFECFKOBovR1V/CPxFgGPVV0zILXxuYrYn4HPMAHvHTkicGscaRvraJg+I/Rrg503WOhp2qkJxJb8AEvE+AL3hKsooj5EG34j8EdxjIjEeAFfgKY7gBvCT5RMGOmTRCJyxjtjpRiI/EVu+AFfibAG/x1+EQRU4jajBnmQzD8txuHb10kDOKcAPiBp45MbQpVO/KJoqqrjTvWTZ5vey452HqOyk7soJf/2u6IMMgt1m4Gzynr0EQRs+7qLJxLdSWJ6UPjBju2Lb0dtPLkLjGleNpzxTFhMDMIvgKYZBc68HS4dsZVbpAvHTfDlilE4/nYZiel06fTSzk3arWWU8JgqhR8fdB00ETBuoyOMp5kjgZenzCLPn9smePCWPjqOrgIK3dYqGLgL4dZ92ghFoQBXyPHCh1YD5e2lKmt3GFdZjjLEOGI6bQw4AveAljB5KVdF08NmOUFC1VOwGlhLLxZD5e22K1JgZU7p+CkMBbevPjPFa1iVr9YynQSTglj5a1AFNIHASTWdp0UBe92QhisaUvIRZ1iLoZjsTsWEG1hLLxZD65TfKJk8Op/rCCawlh4sx6cU1RzxiWVF5NiCdESxsKb9UCdYg5T4Q+JNSwam08Pp5qLklTnuUpHbl+KaDL9eHei9fEYb4BhJpaAaQWMoi92aUYl9DwxNIj0tIaVt+JBnaIvn5FwEMWKKIYgGCwCEGRr4XLROkU6jXBOmWA9UHzYhagBlqpYQCBBkENes2nt2o93M4vCtkwd8Jg5jcEEQaVrF6y81XpufdinqgOmOyfhhCDga+HNeqBOqTOEgAvRKTglCPhaeLMeLuFkhnGXAVsmXIjRhpOCgC94C0AHdna7hLUbTmYGfKqwZUYTTgoCnuBr+nOhA1vd0frwTC2s3Rr2sk81WnBaEPCEL9eEroMmCrzuOr5j4y58qnYjFgQBTxiVfdB00ESB+V943UksO8C4aydg60RPVe6YoR9iZ7MbiA94ms5t8NeDIPScgp+w+V8HnMwBXfDGDcPcZvJo/NE0bULL6LpHWxDwA08ffPx9oiAagrQuP6zdcDLbhUTFRV8Wvsr2zpliLBNtQcAL/CQLe7uIBtEJ+0RBeAiiIXTA2m1nboEw2wpXRL3IgB54gZ8J8JbCY3yi4A6EhyAaggGv+1dNtdgdcQAv08sPvuAtwSoK4mUQHqIDXne0EiMJ4ANeJsDXL07IKgruTEyBKMKujVYCXnc7i5GZuCjsgAf4SEENjSI+yO/dA0UpcXeLeBn9Rpj/PzwnKev3gHg6BA9LMAPiggIETCUEJAUb5epirIyJNWaY//O4CYXtMl4Br/57DVJcFOKBFlVtCsRnYE4x7kIAEdFx4xDmf3jd4xFIN9Iv4bgIkJJOyLuDi4JslZhUzq2RmGRBNATM/009bfLvY34f6UW6pWiOFhEYFaDYGGQGFwV3PP9RowggQvQDA9EQJbVb4ybHIIcgvX5RHAiIChopdncGyHss3idwRYtsIQMRVavYx67Qcj49ql/10rc8uoTX/dmsaXw6doBmF60MKlWkU0DkdKXsbgKgcP/Q+NwjMYRDEwUyIjAKcUBS2IvT0abIHei6OxNtClGA+3HJmg4B/w8SwQ6DMsL5750IdlkhxAchHCbAtw5g3IVPFbbMSH3rAHPI+66fpS6vnxnA+NYBxm4YqgwDQ69TBnvZML6KAX8I7BBd7HrwjIivYviLdP/7Kf6K+B3f/9KOnyD+h8G+yQSLGRxVisKzYDxP7PA3mf4HejdeBFqgWdYAAAAASUVORK5CYII=",
        CHECKED_IMG_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOtSURBVHhe7ZpraxNBFIbX++UHiXe03kVU1IqKYFVURIoWzZlUKREpUkSsiqiIN1RE6gUp2sxskfrJT/4Yr2i1Ws+ZOWvT5HSlmKTJ7DzwEsK+7M55c3ayl4kCgUAgEAgEAoHa0dc6I+ovzOdvGYaC0PAw0upttgNxQdyLjBplxdG7jnm8NUMUCtOx+LslQbCgGPUVZrMrA4xG0/C0uF0ZxF89Z6fnUBBG3SorvkQwHOncVnZ7jA0CbsghkDCIImxjt8fYUwOuySGgtPqB2s5uj3FzxBUxBJKGn9gVO9jtOUb1VgQwppEozrey03M0XBICSDSCc8ROdnqOhgtCAIlG8NTYxU7PMdAjBJBoBIPaw07PMaq7rPhSYUeovez0HK3OlRVfKgqijZ2eo6FQVnyJ4Bdu389OzzHQJYeA0uo36gA7PSdWp8UQSBSEgYPs9BytlBgCyXYEHGKn52g4JYZAch1xhJ2eY1RHRQCJXEccZafnaDghhkCyHaGOsdNztGrnguUgaHvVKaot+Ass4G+NAf3iaUHE6jg7q0ic34iTzzAe4EPDBEKT4URBkOjUqToxrMOdfx87CAYSw0LeOjXQ32NaEDSZVh2jWvAX+Fp2IBdIMb+IXfWFrhxTO0KdZGeV0fBaPCDJnTKL2Vkf6F6C7imk8Tjl2FkD6PWahjfCQVnwsW6BGNiHx6S7TGEcKLryrDkUiIFBcQBWGIjpXMLu2kDPG9KCMNDJzjrgOsTIA7H6FA2qpeyuLnF+N+4/pSPgDDvrCL2A1UqLA3KqfiD0cDa9I7rYOQUMFebiAIrywFAaPkfF3DJ2/x/0uD41CHWWnVNIPQKhN1n0RkvaP4ke5TUMA+1zcEAD4kBJWn3Bz+Xsnhz0bpOudqX9OnWzs4GgNQsGXgmDZdmLtckFEuc2pwah1Xl2NiAUiIZ+ceBWGEhRrWB3Ojq3Kb0joIedDYzrkJdyASQMROdWslvGwIbUIOhNWNPgOuSFWIiVPWVa2D0enV+P28ZuBCsEF9nZRLgOeSYXRMJA4twqdjtMfi2G+E32o+glcdPy/vAsnOSeioVZ0RySX229GtZwxwg+q17ra2qGCjOx0D6hOBbNIXgJnRaEhst2QYkX0HpKA0/EQv8puOpPEAlugeljueAJRGusvAsiwXaIelRRtCi47m8QCS6QB5XFl0irm/4HkWBPGXVfDIIWpGYmiATXIePXZtMS5cwFkTBusTrcyW4QCS6QNvsZCAQCgUAgkHmi6A/+bsV/gdPAhwAAAABJRU5ErkJggg==",
        FAVOR_IMG_URL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAvCAYAAACc5fiSAAAAAXNSR0IArs4c6QAABv9JREFUaAXdWVlsVFUY/u7MdJkulEJbSgu0FBUQWYzihgvEhCDV6IPLAyFKiYkbPqgxRl98cnvQJ+OLgoqJBhMTDeiDEtQYowgSCi5o2aQUSkEDTmu3mev3nzNn7txhtnvnTkz8kztn+89/vnvu///n/89YCJDs99GGUayjyDbYCMHC9yw/t3owFOAySpQVlEB7Cx5EAq9TXkWGzBhf4AXU4RXrXsQzxnw3AwFO0MsIei9RhPIgeRs96LEsfoMAKBKADBD0GsrRoGcuAaZfwibxnTsKnO5lNSHLPIAt2M3yDWmUSvl2qHjZFhammFsXA3Uz+LQCHdcDC9YC3OYkPW3vQiCbFQxwG1MMMoQrU1VVaZgNTOvSfTY6cRQr3Az+WsEAt9CUWj4TuAxMJXiHbnKq/mvBALeht7SylmqRRWSN815U/av8w3VmZlnFGSymZm9DlO5upuKtdjTGNbdmmqPnFua6xnw2SgaOYcznLmrrq56aHYYVBqrq9ZiN5uxM3npLB25jaWpJ2dlcZKfc90QuFi/9QQB3dLY2TZczUWhfTpXBeOaQn3ZJwKnfYQK5Uy0cojrU5NGCxKTB998Dp34/Rv2eoxA1dgDhzDAliXVyDJBHU7+plFL63nF7M67lUf+yWlxOxjZHYy4CNHbB6bJx2Gn4r/kCzqCqlTv9EZetUku3LQPy6fdoGnDgiH+4zkztxpx2wZq9h2Hrfuwioz66G2YxHunOfvAYaQP7gD++0y2L3ynlYAxDqkzQZiY4PsIesYVxtg/w+YQh2pvpkaV34G+p6O4htZT45sV3A5Hq1MpZKwc+BIbPZh3y0LkT9VjLmF4Zd9ZIzd7KkzCBTr55TUpwglGdjbvY1qBDnHrZmsKgz/W5QVdGGQDnMOLUYsmKHQfGhk3vrYjheTaelQ4XcBrcLQT3Gt/pShnMS/NW5tdrM/n0QVPji65mpDjPaRdTG2HWd/Bjxvw8t2w8wnPsOVEZBVz54xhepZxNfPKrT5hTOm9ksnBpMcsCsrCQBFpeQat5PBumdwFDh6TVwGRkLssjesdjeIZv87iMKKolcz2TgQg/azpV1QGNnYXVI31OmPofj9GP85PLp5e4xSsZryRpXx3OyXTLfgdLmML+wK5KyOnXtQpoKnI3iwHQ9wVw9nfNKR6ohclSroMqU16CL/rXMbPbMtprbdSxUYSgn1SgpXvOdcGCFpmtVzD3pIFKkHW+Xz/S750kcX3UTJMDaKVqyG7PWGT6gynH/gZ+3aFBly5xhNZ33IgRF9emGlEJ9n3on5GUrTz6NXVbuV0g2kAD5RoTErOorD/bDHefHFTy8uO0D6bfxCo3BLdLQ4xTG6j45SBJosHzJ7RESTAW30P/7WMNkdO7DRg9L7JW25+iylqLMVGV8pDslEkeGvhR/YAWZDJvilYKtip4mdehuuWnLFTF/DOU3BcxyrjPxCdBVZP5msawiBccJB/fLimiUCHG3sBQXdyZ+OH9H7DdTjvy8JEla7pwknrOc0DIwg7ragZhpPIBF+ldN1M/B2mQ/9DAuLg+/WTEDw0SuMsd+hFS3JyKWoa8t3Gn8kcRRQibYJLYbW3AacNb3h2XVQZ6HSOdQlVpmlecoYo3OcuD68KASKmgB32C5TppCJUfeOyUXkluuRZ2ezsrmhYA+96jqjGvsN13jh4sRa/v+dccQBXV3kDLQmLgMk8TDwOHyg9cIk2hYQZ1Q7+wIsdhMUS+M+Qf+dMw/2gqUpZfVeSiX+spcPhL4Ng33MkiMiBJHOLUc0OWyhdMSwEnhyi/FGWgRsb97UyoTjJhFhIw6YB0b+5ficFtvMg/wLanM4mqKLNVn0Ti33JQM2PwiwI4cZG5HheIUbrCza4eNiKcu5Nv1KP+pxnYC8y6JpOn9PbgQap2clMkPu+4IcuLpC0jrvD4t8DgT2ISUbrChzn6VBoHgYd5GxXHfWSoRT+ByynXsgioZIIvn1RCykm6IynHk2WcoakEP1EaumQ19TMpM88hExvSa8pxXwi0cIps4TvzM4ErY77omixi3Y/fmN1vIrv+HINklqdYkpeVC/2Wy4Hm+bQW50YjJSJSqasSe0yOkoc+vRAJn4kubTDYcZPyKlT8LQRfz6GX1Kdx8xRuSRAlN1UndutkWi5Ao41652S2RIqGDn1GdVxOJdW3d6bbVU4QdP8epysE6o2bXN+X4JsJfB2/+nKWNSwZGdF4bcjxN8B/Mk+xb4AKNsS+WsZpK9i/gfU1LMt1JvShBUutO9S1HJfR5AJuOr2W9ru8ap7ERs7byJdo9zo/J7/F24cKrLfWQ12qpPMFAtwIpEpa2Mp/1SZBy8JstqJmLFmKV25nfzM9hZzl9AQ4w+c4H+cgCfHuxMIe5jpfWaso7f9E/wKMr8drdgi7SwAAAABJRU5ErkJggg==",
      });
  },
  function (e, t) {
    e.exports = {
      no_urlArr: [
        "blog.caiyunapp.com/whats-new-on-2018-09-11/",
        "blog.caiyunapp.com/cun-shang-chun-shu-dang-wo-xie-xiao-shuo-de-shi-hou-wo-hui-qu-yi-xie-qi-guai-de-mi-mi-de-di-fang-2/",
      ],
    };
  },
  function (e, t) {
    (t.levenshteinDistance = function (e, t) {
      if (0 == e.length) return t.length;
      if (0 == t.length) return e.length;
      var n,
        r,
        o = [];
      for (n = 0; n <= t.length; n++) o[n] = [n];
      for (r = 0; r <= e.length; r++) o[0][r] = r;
      for (n = 1; n <= t.length; n++)
        for (r = 1; r <= e.length; r++)
          t.charAt(n - 1) == e.charAt(r - 1) ?
          (o[n][r] = o[n - 1][r - 1]) :
          (o[n][r] = Math.min(
            o[n - 1][r - 1] + 1,
            Math.min(o[n][r - 1] + 1, o[n - 1][r] + 1)
          ));
      return o[t.length][e.length];
    }),
    (t.getDateDiff = function (e) {
      "string" == typeof e && (e = new Date(e).getTime());
      var t = 864e5,
        n = new Date().getTime() - 1e3 * e,
        r = "刚刚";
      if (n < 0) return r;
      var o = n / 2592e6,
        i = n / (7 * t),
        a = n / t,
        s = n / 36e5,
        u = n / 6e4;
      return o >= 1 ?
        parseInt(o) + "月前" :
        i >= 1 ?
        parseInt(i) + "周前" :
        a >= 1 ?
        parseInt(a) + "天前" :
        s >= 1 ?
        parseInt(s) + "小时前" :
        u >= 1 ?
        parseInt(u) + "分钟前" :
        "刚刚";
    }),
    (t.isURL = function (e) {
      return !!e.match(
        /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi
      );
    }),
    (t.detectLang = function (e) {
      if ("string" != typeof e) return "en";
      var t = "en",
        n = (e.match(/[\u4e00-\u9fa5]/g) || []).length / e.length;
      return (
        (
          e.match(
            /[\u3020-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\u31F0-\u31FF]/g
          ) || []
        ).length /
        e.length >
        0.03 ?
        (t = "jp") :
        n >= 0.1 && (t = "zh"),
        t
      );
    }),
    (t.preload = function (e) {
      for (var t = 0, n = e; t < n; t++) new Image().src = e[t];
    }),
    (t.uuid = function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          var t = (16 * Math.random()) | 0;
          return ("x" == e ? t : (3 & t) | 8).toString(16);
        }
      );
    }),
    (t.wordStatistics = function (e) {
      for (
        var t = e.innerText.replace(/\r\n/g, "\n"),
          n = t.replace(/\n/g, ""),
          r = t.match(/[\u4e00-\u9fa5]/g) || [],
          o = t.match(/\b\w+\b/g) || [],
          i = t.match(/\b\d+\b/g) || [],
          a =
          (n.match(
              /[|\~|\`|\!|\@|\#|\jq|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g
            ),
            0); a < n.length; a++
      ) {
        n.charAt(a).match(/[^\x00-\xff]/) && 0;
      }
      ((n.match(/[A-Za-z]/g) || []).length, n.match(/[0-9]/g) || []).length;
      var s = t.split("\n");
      for (a = 0; a < s.length; a++) s[a].length > 0 && 0;
      return {
        chars: n.length,
        en_words: o.length - i.length,
        zh_chars: r.length,
      };
    }),
    (t.parseURL = function (e) {
      var t = document.createElement("a");
      return (
        (t.href = e), {
          source: e,
          protocol: t.protocol.replace(":", ""),
          host: t.hostname,
          port: t.port,
          query: t.search,
          params: (function () {
            for (
              var e,
                n = {},
                r = t.search.replace(/^\?/, "").split("&"),
                o = r.length,
                i = 0; i < o; i++
            )
              r[i] && (n[(e = r[i].split("="))[0]] = e[1]);
            return n;
          })(),
          file: (t.pathname.match(/\/([^\/?#]+)jq/i) || [, ""])[1],
          hash: t.hash.replace("#", ""),
          path: t.pathname.replace(/^([^\/])/, "/jq1"),
          relative: (t.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
          segments: t.pathname.replace(/^\//, "").split("/"),
        }
      );
    });
  },
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */
    !(function (t, n) {
      "use strict";
      "object" == typeof e && "object" == typeof e.exports ?
        (e.exports = t.document ?
          n(t, !0) :
          function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return n(e);
          }) :
        n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";

      function i(e, t, n) {
        var r,
          o,
          i = (n = n || me).createElement("script");
        if (((i.text = e), t))
          for (r in ye)
            (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
            i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i);
      }

      function a(e) {
        return null == e ?
          e + "" :
          "object" == typeof e || "function" == typeof e ?
          ue[ce.call(e)] || "object" :
          typeof e;
      }

      function s(e) {
        var t = !!e && "length" in e && e.length,
          n = a(e);
        return (
          !he(e) &&
          !ge(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }

      function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }

      function c(e, t, n) {
        return he(t) ?
          ve.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n;
          }) :
          t.nodeType ?
          ve.grep(e, function (e) {
            return (e === t) !== n;
          }) :
          "string" != typeof t ?
          ve.grep(e, function (e) {
            return se.call(t, e) > -1 !== n;
          }) :
          ve.filter(t, e, n);
      }

      function l(e, t) {
        for (;
          (e = e[t]) && 1 !== e.nodeType;);
        return e;
      }

      function d(e) {
        return e;
      }

      function p(e) {
        throw e;
      }

      function f(e, t, n, r) {
        var o;
        try {
          e && he((o = e.promise)) ?
            o.call(e).done(t).fail(n) :
            e && he((o = e.then)) ?
            o.call(e, t, n) :
            t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }

      function h() {
        me.removeEventListener("DOMContentLoaded", h),
          n.removeEventListener("load", h),
          ve.ready();
      }

      function g(e, t) {
        return t.toUpperCase();
      }

      function m(e) {
        return e.replace(Me, "ms-").replace(Pe, g);
      }

      function y() {
        this.expando = ve.expando + y.uid++;
      }

      function v(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(_e, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e ?
                      null :
                      e === +e + "" ?
                      +e :
                      Ue.test(e) ?
                      JSON.parse(e) :
                      e))
                );
              })(n);
            } catch (e) {}
            Ie.set(e, t, n);
          } else n = void 0;
        return n;
      }

      function x(e, t, n, r) {
        var o,
          i,
          a = 20,
          s = r ?
          function () {
            return r.cur();
          } :
          function () {
            return ve.css(e, t, "");
          },
          u = s(),
          c = (n && n[3]) || (ve.cssNumber[t] ? "" : "px"),
          l =
          e.nodeType &&
          (ve.cssNumber[t] || ("px" !== c && +u)) &&
          He.exec(ve.css(e, t));
        if (l && l[3] !== c) {
          for (u /= 2, c = c || l[3], l = +u || 1; a--;)
            ve.style(e, t, l + c),
            (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
            (l /= i);
          (l *= 2), ve.style(e, t, l + c), (n = n || []);
        }
        return (
          n &&
          ((l = +l || +u || 0),
            (o = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = c), (r.start = l), (r.end = o))),
          o
        );
      }

      function A(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = Ve[r];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(r))),
            (o = ve.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            (Ve[r] = o),
            o)
        );
      }

      function w(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
          (r = e[i]).style &&
          ((n = r.style.display),
            t ?
            ("none" === n &&
              ((o[i] = De.get(r, "display") || null),
                o[i] || (r.style.display = "")),
              "" === r.style.display && Xe(r) && (o[i] = A(r))) :
            "none" !== n && ((o[i] = "none"), De.set(r, "display", n)));
        for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
        return e;
      }

      function b(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName ?
            e.getElementsByTagName(t || "*") :
            void 0 !== e.querySelectorAll ?
            e.querySelectorAll(t || "*") : []),
          void 0 === t || (t && u(e, t)) ? ve.merge([e], n) : n
        );
      }

      function T(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"));
      }

      function C(e, t, n, r, o) {
        for (
          var i,
            s,
            u,
            c,
            l,
            d,
            p = t.createDocumentFragment(),
            f = [],
            h = 0,
            g = e.length; h < g; h++
        )
          if ((i = e[h]) || 0 === i)
            if ("object" === a(i)) ve.merge(f, i.nodeType ? [i] : i);
            else if (Qe.test(i)) {
          for (
            s = s || p.appendChild(t.createElement("div")),
            u = (ze.exec(i) || ["", ""])[1].toLowerCase(),
            c = Ye[u] || Ye._default,
            s.innerHTML = c[1] + ve.htmlPrefilter(i) + c[2],
            d = c[0]; d--;

          )
            s = s.lastChild;
          ve.merge(f, s.childNodes), ((s = p.firstChild).textContent = "");
        } else f.push(t.createTextNode(i));
        for (p.textContent = "", h = 0;
          (i = f[h++]);)
          if (r && ve.inArray(i, r) > -1) o && o.push(i);
          else if (
          ((l = Ge(i)), (s = b(p.appendChild(i), "script")), l && T(s), n)
        )
          for (d = 0;
            (i = s[d++]);) Je.test(i.type || "") && n.push(i);
        return p;
      }

      function S() {
        return !0;
      }

      function E() {
        return !1;
      }

      function R(e, t) {
        return (
          (e ===
            (function () {
              try {
                return me.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }

      function L(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            L(e, s, n, r, t[s], i);
          return e;
        }
        if (
          (null == r && null == o ?
            ((o = n), (r = n = void 0)) :
            null == o &&
            ("string" == typeof n ?
              ((o = r), (r = void 0)) :
              ((o = r), (r = n), (n = void 0))),
            !1 === o)
        )
          o = E;
        else if (!o) return e;
        return (
          1 === i &&
          ((a = o),
            ((o = function (e) {
              return ve().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = ve.guid++))),
          e.each(function () {
            ve.event.add(this, t, o, r, n);
          })
        );
      }

      function k(e, t, n) {
        return n ?
          (De.set(e, t, !1),
            void ve.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  o,
                  i = De.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i.length)
                    (ve.event.special[t] || {}).delegateType &&
                    e.stopPropagation();
                  else if (
                    ((i = oe.call(arguments)),
                      De.set(this, t, i),
                      (r = n(this, t)),
                      this[t](),
                      i !== (o = De.get(this, t)) || r ?
                      De.set(this, t, !1) :
                      (o = {}),
                      i !== o)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), o.value
                    );
                } else
                  i.length &&
                  (De.set(this, t, {
                      value: ve.event.trigger(
                        ve.extend(i[0], ve.Event.prototype),
                        i.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            })) :
          void(void 0 === De.get(e, t) && ve.event.add(e, t, S));
      }

      function N(e, t) {
        return (
          (u(e, "table") &&
            u(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            ve(e).children("tbody")[0]) ||
          e
        );
      }

      function O(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }

      function M(e) {
        return (
          "true/" === (e.type || "").slice(0, 5) ?
          (e.type = e.type.slice(5)) :
          e.removeAttribute("type"),
          e
        );
      }

      function P(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
          if (De.hasData(e) && (s = De.get(e).events))
            for (o in (De.remove(t, "handle events"), s))
              for (n = 0, r = s[o].length; n < r; n++)
                ve.event.add(t, o, s[o][n]);
          Ie.hasData(e) &&
            ((i = Ie.access(e)), (a = ve.extend({}, i)), Ie.set(t, a));
        }
      }

      function B(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && We.test(e.type) ?
          (t.checked = e.checked) :
          ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
      }

      function D(e, t, n, r) {
        t = ie(t);
        var o,
          a,
          s,
          u,
          c,
          l,
          d = 0,
          p = e.length,
          f = p - 1,
          h = t[0],
          g = he(h);
        if (
          g ||
          (p > 1 && "string" == typeof h && !fe.checkClone && nt.test(h))
        )
          return e.each(function (o) {
            var i = e.eq(o);
            g && (t[0] = h.call(this, o, i.html())), D(i, t, n, r);
          });
        if (
          p &&
          ((a = (o = C(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === o.childNodes.length && (o = a),
            a || r)
        ) {
          for (u = (s = ve.map(b(o, "script"), O)).length; d < p; d++)
            (c = o),
            d !== f &&
            ((c = ve.clone(c, !0, !0)), u && ve.merge(s, b(c, "script"))),
            n.call(e[d], c, d);
          if (u)
            for (
              l = s[s.length - 1].ownerDocument, ve.map(s, M), d = 0; d < u; d++
            )
              (c = s[d]),
              Je.test(c.type || "") &&
              !De.access(c, "globalEval") &&
              ve.contains(l, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase() ?
                ve._evalUrl &&
                !c.noModule &&
                ve._evalUrl(
                  c.src, {
                    nonce: c.nonce || c.getAttribute("nonce"),
                  },
                  l
                ) :
                i(c.textContent.replace(rt, ""), c, l));
        }
        return e;
      }

      function I(e, t, n) {
        for (var r, o = t ? ve.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
          n || 1 !== r.nodeType || ve.cleanData(b(r)),
          r.parentNode &&
          (n && Ge(r) && T(b(r, "script")), r.parentNode.removeChild(r));
        return e;
      }

      function U(e, t, n) {
        var r,
          o,
          i,
          a,
          s = e.style;
        return (
          (n = n || it(e)) &&
          ("" !== (a = n.getPropertyValue(t) || n[t]) ||
            Ge(e) ||
            (a = ve.style(e, t)),
            !fe.pixelBoxStyles() &&
            ot.test(a) &&
            st.test(t) &&
            ((r = s.width),
              (o = s.minWidth),
              (i = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = o),
              (s.maxWidth = i))),
          void 0 !== a ? a + "" : a
        );
      }

      function _(e, t) {
        return {
          get: function () {
            return e() ?
              void delete this.get :
              (this.get = t).apply(this, arguments);
          },
        };
      }

      function j(e) {
        var t = ve.cssProps[e] || lt[e];
        return (
          t ||
          (e in ct ?
            e :
            (lt[e] =
              (function (e) {
                for (
                  var t = e[0].toUpperCase() + e.slice(1), n = ut.length; n--;

                )
                  if ((e = ut[n] + t) in ct) return e;
              })(e) || e))
        );
      }

      function H(e, t, n) {
        var r = He.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }

      function F(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += ve.css(e, n + Fe[a], !0, o)),
          r ?
          ("content" === n && (u -= ve.css(e, "padding" + Fe[a], !0, o)),
            "margin" !== n &&
            (u -= ve.css(e, "border" + Fe[a] + "Width", !0, o))) :
          ((u += ve.css(e, "padding" + Fe[a], !0, o)),
            "padding" !== n ?
            (u += ve.css(e, "border" + Fe[a] + "Width", !0, o)) :
            (s += ve.css(e, "border" + Fe[a] + "Width", !0, o)));
        return (
          !r &&
          i >= 0 &&
          (u +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                i -
                u -
                s -
                0.5
              )
            ) || 0),
          u
        );
      }

      function q(e, t, n) {
        var r = it(e),
          o =
          (!fe.boxSizingReliable() || n) &&
          "border-box" === ve.css(e, "boxSizing", !1, r),
          i = o,
          a = U(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ot.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!fe.boxSizingReliable() && o) ||
            (!fe.reliableTrDimensions() && u(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === ve.css(e, "display", !1, r))) &&
          e.getClientRects().length &&
          ((o = "border-box" === ve.css(e, "boxSizing", !1, r)),
            (i = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
          F(e, t, n || (o ? "border" : "content"), i, r, a) +
          "px"
        );
      }

      function G(e, t, n, r, o) {
        return new G.prototype.init(e, t, n, r, o);
      }

      function K() {
        mt &&
          (!1 === me.hidden && n.requestAnimationFrame ?
            n.requestAnimationFrame(K) :
            n.setTimeout(K, ve.fx.interval),
            ve.fx.tick());
      }

      function X() {
        return (
          n.setTimeout(function () {
            gt = void 0;
          }),
          (gt = Date.now())
        );
      }

      function V(e, t) {
        var n,
          r = 0,
          o = {
            height: e,
          };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          o["margin" + (n = Fe[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }

      function W(e, t, n) {
        for (
          var r,
            o = (z.tweeners[t] || []).concat(z.tweeners["*"]),
            i = 0,
            a = o.length; i < a; i++
        )
          if ((r = o[i].call(n, t, e))) return r;
      }

      function z(e, t, n) {
        var r,
          o,
          i = 0,
          a = z.prefilters.length,
          s = ve.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (o) return !1;
            for (
              var t = gt || X(),
                n = Math.max(0, c.startTime + c.duration - t),
                r = 1 - (n / c.duration || 0),
                i = 0,
                a = c.tweens.length; i < a; i++
            )
              c.tweens[i].run(r);
            return (
              s.notifyWith(e, [c, r, n]),
              r < 1 && a ?
              n :
              (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
            );
          },
          c = s.promise({
            elem: e,
            props: ve.extend({}, t),
            opts: ve.extend(
              !0, {
                specialEasing: {},
                easing: ve.easing._default,
              },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: gt || X(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = ve.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < r; n++) c.tweens[n].run(1);
              return (
                t ?
                (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) :
                s.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          l = c.props;
        for (
          (function (e, t) {
            var n, r, o, i, a;
            for (n in e)
              if (
                ((o = t[(r = m(n))]),
                  (i = e[n]),
                  Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                  n !== r && ((e[r] = i), delete e[n]),
                  (a = ve.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((i = a.expand(i)), delete e[r], i))
                  (n in e) || ((e[n] = i[n]), (t[n] = o));
              else t[r] = o;
          })(l, c.opts.specialEasing); i < a; i++
        )
          if ((r = z.prefilters[i].call(c, e, l, c.opts)))
            return (
              he(r.stop) &&
              (ve._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          ve.map(l, W, c),
          he(c.opts.start) && c.opts.start.call(e, c),
          c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
          ve.fx.timer(
            ve.extend(u, {
              elem: e,
              anim: c,
              queue: c.opts.queue,
            })
          ),
          c
        );
      }

      function J(e) {
        return (e.match(Le) || []).join(" ");
      }

      function Y(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }

      function Q(e) {
        return Array.isArray(e) ?
          e :
          ("string" == typeof e && e.match(Le)) || [];
      }

      function Z(e, t, n, r) {
        var o;
        if (Array.isArray(t))
          ve.each(t, function (t, o) {
            n || kt.test(e) ?
              r(e, o) :
              Z(
                e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                o,
                n,
                r
              );
          });
        else if (n || "object" !== a(t)) r(e, t);
        else
          for (o in t) Z(e + "[" + o + "]", t[o], n, r);
      }

      function $(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            o = 0,
            i = t.toLowerCase().match(Le) || [];
          if (he(n))
            for (;
              (r = i[o++]);)
              "+" === r[0] ?
              ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) :
              (e[r] = e[r] || []).push(n);
        };
      }

      function ee(e, t, n, r) {
        function o(s) {
          var u;
          return (
            (i[s] = !0),
            ve.each(e[s] || [], function (e, s) {
              var c = s(t, n, r);
              return "string" != typeof c || a || i[c] ?
                a ?
                !(u = c) :
                void 0 :
                (t.dataTypes.unshift(c), o(c), !1);
            }),
            u
          );
        }
        var i = {},
          a = e === Ht;
        return o(t.dataTypes[0]) || (!i["*"] && o("*"));
      }

      function te(e, t) {
        var n,
          r,
          o = ve.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ve.extend(!0, e, r), e;
      }
      var ne = [],
        re = Object.getPrototypeOf,
        oe = ne.slice,
        ie = ne.flat ?
        function (e) {
          return ne.flat.call(e);
        } :
        function (e) {
          return ne.concat.apply([], e);
        },
        ae = ne.push,
        se = ne.indexOf,
        ue = {},
        ce = ue.toString,
        le = ue.hasOwnProperty,
        de = le.toString,
        pe = de.call(Object),
        fe = {},
        he = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        ge = function (e) {
          return null != e && e === e.window;
        },
        me = n.document,
        ye = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0,
        },
        ve = function (e, t) {
          return new ve.fn.init(e, t);
        };
      (ve.fn = ve.prototype = {
        jquery: "3.5.1",
        constructor: ve,
        length: 0,
        toArray: function () {
          return oe.call(this);
        },
        get: function (e) {
          return null == e ?
            oe.call(this) :
            e < 0 ?
            this[e + this.length] :
            this[e];
        },
        pushStack: function (e) {
          var t = ve.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return ve.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            ve.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(oe.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            ve.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            ve.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice,
      }),
      (ve.extend = ve.fn.extend = function () {
        var e,
          t,
          n,
          r,
          o,
          i,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
          "object" == typeof a || he(a) || (a = {}),
          s === u && ((a = this), s--); s < u; s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
              "__proto__" !== t &&
              a !== r &&
              (c && r && (ve.isPlainObject(r) || (o = Array.isArray(r))) ?
                ((n = a[t]),
                  (i =
                    o && !Array.isArray(n) ? [] :
                    o || ve.isPlainObject(n) ?
                    n : {}),
                  (o = !1),
                  (a[t] = ve.extend(c, i, r))) :
                void 0 !== r && (a[t] = r));
        return a;
      }),
      ve.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return !(
              !e ||
              "[object Object]" !== ce.call(e) ||
              ((t = re(e)) &&
                ((n = le.call(t, "constructor") && t.constructor),
                  "function" != typeof n || de.call(n) !== pe))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            i(
              e, {
                nonce: t && t.nonce,
              },
              n
            );
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (s(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
              for (r in e)
                if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
              (s(Object(e)) ?
                ve.merge(n, "string" == typeof e ? [e] : e) :
                ae.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : se.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
              e[o++] = t[r];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
              !t(e[o], o) !== a && r.push(e[o]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              o,
              i = 0,
              a = [];
            if (s(e))
              for (r = e.length; i < r; i++)
                null != (o = t(e[i], i, n)) && a.push(o);
            else
              for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
            return ie(a);
          },
          guid: 1,
          support: fe,
        }),
        "function" == typeof Symbol &&
        (ve.fn[Symbol.iterator] = ne[Symbol.iterator]),
        ve.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            ue["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var xe =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          function t(e, t, n, r) {
            var o,
              i,
              a,
              s,
              u,
              c,
              l,
              p = t && t.ownerDocument,
              h = t ? t.nodeType : 9;
            if (
              ((n = n || []),
                "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
            )
              return n;
            if (!r && (M(t), (t = t || P), D)) {
              if (11 !== h && (u = xe.exec(e)))
                if ((o = u[1])) {
                  if (9 === h) {
                    if (!(a = t.getElementById(o))) return n;
                    if (a.id === o) return n.push(a), n;
                  } else if (
                    p &&
                    (a = p.getElementById(o)) &&
                    j(t, a) &&
                    a.id === o
                  )
                    return n.push(a), n;
                } else {
                  if (u[2]) return $.apply(n, t.getElementsByTagName(e)), n;
                  if (
                    (o = u[3]) &&
                    b.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return $.apply(n, t.getElementsByClassName(o)), n;
                }
              if (
                b.qsa &&
                !W[e + " "] &&
                (!I || !I.test(e)) &&
                (1 !== h || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((l = e), (p = t), 1 === h && (de.test(e) || le.test(e)))) {
                  for (
                    ((p = (Ae.test(e) && d(t.parentNode)) || t) === t &&
                      b.scope) ||
                    ((s = t.getAttribute("id")) ?
                      (s = s.replace(Te, Ce)) :
                      t.setAttribute("id", (s = H))),
                    i = (c = E(e)).length; i--;

                  )
                    c[i] = (s ? "#" + s : ":scope") + " " + f(c[i]);
                  l = c.join(",");
                }
                try {
                  return $.apply(n, p.querySelectorAll(l)), n;
                } catch (t) {
                  W(e, !0);
                } finally {
                  s === H && t.removeAttribute("id");
                }
              }
            }
            return L(e.replace(ue, "$1"), t, n, r);
          }

          function n() {
            var e = [];
            return function t(n, r) {
              return (
                e.push(n + " ") > T.cacheLength && delete t[e.shift()],
                (t[n + " "] = r)
              );
            };
          }

          function r(e) {
            return (e[H] = !0), e;
          }

          function o(e) {
            var t = P.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }

          function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)
              T.attrHandle[n[r]] = t;
          }

          function a(e, t) {
            var n = t && e,
              r =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
              for (;
                (n = n.nextSibling);)
                if (n === t) return -1;
            return e ? 1 : -1;
          }

          function s(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }

          function u(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }

          function c(e) {
            return function (t) {
              return "form" in t ?
                t.parentNode && !1 === t.disabled ?
                "label" in t ?
                "label" in t.parentNode ?
                t.parentNode.disabled === e :
                t.disabled === e :
                t.isDisabled === e || (t.isDisabled !== !e && Ee(t) === e) :
                t.disabled === e :
                "label" in t && t.disabled === e;
            };
          }

          function l(e) {
            return r(function (t) {
              return (
                (t = +t),
                r(function (n, r) {
                  for (var o, i = e([], n.length, t), a = i.length; a--;)
                    n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }

          function d(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }

          function p() {}

          function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }

          function h(e, t, n) {
            var r = t.dir,
              o = t.next,
              i = o || r,
              a = n && "parentNode" === i,
              s = G++;
            return t.first ?
              function (t, n, o) {
                for (;
                  (t = t[r]);)
                  if (1 === t.nodeType || a) return e(t, n, o);
                return !1;
              } :
              function (t, n, u) {
                var c,
                  l,
                  d,
                  p = [q, s];
                if (u) {
                  for (;
                    (t = t[r]);)
                    if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                } else
                  for (;
                    (t = t[r]);)
                    if (1 === t.nodeType || a)
                      if (
                        ((l =
                            (d = t[H] || (t[H] = {}))[t.uniqueID] ||
                            (d[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                      )
                        t = t[r] || t;
                      else {
                        if ((c = l[i]) && c[0] === q && c[1] === s)
                          return (p[2] = c[2]);
                        if (((l[i] = p), (p[2] = e(t, n, u)))) return !0;
                      }
                return !1;
              };
          }

          function g(e) {
            return e.length > 1 ?
              function (t, n, r) {
                for (var o = e.length; o--;)
                  if (!e[o](t, n, r)) return !1;
                return !0;
              } :
              e[0];
          }

          function m(e, n, r) {
            for (var o = 0, i = n.length; o < i; o++) t(e, n[o], r);
            return r;
          }

          function y(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, c = null != t; s < u; s++)
              (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)));
            return a;
          }

          function v(e, t, n, o, i, a) {
            return (
              o && !o[H] && (o = v(o)),
              i && !i[H] && (i = v(i, a)),
              r(function (r, a, s, u) {
                var c,
                  l,
                  d,
                  p = [],
                  f = [],
                  h = a.length,
                  g = r || m(t || "*", s.nodeType ? [s] : s, []),
                  v = !e || (!r && t) ? g : y(g, p, e, s, u),
                  x = n ? (i || (r ? e : h || o) ? [] : a) : v;
                if ((n && n(v, x, s, u), o))
                  for (c = y(x, f), o(c, [], s, u), l = c.length; l--;)
                    (d = c[l]) && (x[f[l]] = !(v[f[l]] = d));
                if (r) {
                  if (i || e) {
                    if (i) {
                      for (c = [], l = x.length; l--;)
                        (d = x[l]) && c.push((v[l] = d));
                      i(null, (x = []), c, u);
                    }
                    for (l = x.length; l--;)
                      (d = x[l]) &&
                      (c = i ? te(r, d) : p[l]) > -1 &&
                      (r[c] = !(a[c] = d));
                  }
                } else(x = y(x === a ? x.splice(h, x.length) : x)), i ? i(null, a, x, u) : $.apply(a, x);
              })
            );
          }

          function x(e) {
            for (
              var t,
                n,
                r,
                o = e.length,
                i = T.relative[e[0].type],
                a = i || T.relative[" "],
                s = i ? 1 : 0,
                u = h(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                c = h(
                  function (e) {
                    return te(t, e) > -1;
                  },
                  a,
                  !0
                ),
                l = [
                  function (e, n, r) {
                    var o =
                      (!i && (r || n !== k)) ||
                      ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                    return (t = null), o;
                  },
                ]; s < o; s++
            )
              if ((n = T.relative[e[s].type])) l = [h(g(l), n)];
              else {
                if ((n = T.filter[e[s].type].apply(null, e[s].matches))[H]) {
                  for (r = ++s; r < o && !T.relative[e[r].type]; r++);
                  return v(
                    s > 1 && g(l),
                    s > 1 &&
                    f(
                      e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : "",
                      })
                    ).replace(ue, "$1"),
                    n,
                    s < r && x(e.slice(s, r)),
                    r < o && x((e = e.slice(r))),
                    r < o && f(e)
                  );
                }
                l.push(n);
              }
            return g(l);
          }

          function A(e, n) {
            var o = n.length > 0,
              i = e.length > 0,
              a = function (r, a, s, u, c) {
                var l,
                  d,
                  p,
                  f = 0,
                  h = "0",
                  g = r && [],
                  m = [],
                  v = k,
                  x = r || (i && T.find.TAG("*", c)),
                  A = (q += null == v ? 1 : Math.random() || 0.1),
                  w = x.length;
                for (
                  c && (k = a == P || a || c); h !== w && null != (l = x[h]); h++
                ) {
                  if (i && l) {
                    for (
                      d = 0, a || l.ownerDocument == P || (M(l), (s = !D));
                      (p = e[d++]);

                    )
                      if (p(l, a || P, s)) {
                        u.push(l);
                        break;
                      }
                    c && (q = A);
                  }
                  o && ((l = !p && l) && f--, r && g.push(l));
                }
                if (((f += h), o && h !== f)) {
                  for (d = 0;
                    (p = n[d++]);) p(g, m, a, s);
                  if (r) {
                    if (f > 0)
                      for (; h--;) g[h] || m[h] || (m[h] = Q.call(u));
                    m = y(m);
                  }
                  $.apply(u, m),
                    c &&
                    !r &&
                    m.length > 0 &&
                    f + n.length > 1 &&
                    t.uniqueSort(u);
                }
                return c && ((q = A), (k = v)), g;
              };
            return o ? r(a) : a;
          }
          var w,
            b,
            T,
            C,
            S,
            E,
            R,
            L,
            k,
            N,
            O,
            M,
            P,
            B,
            D,
            I,
            U,
            _,
            j,
            H = "sizzle" + 1 * new Date(),
            F = e.document,
            q = 0,
            G = 0,
            K = n(),
            X = n(),
            V = n(),
            W = n(),
            z = function (e, t) {
              return e === t && (O = !0), 0;
            },
            J = {}.hasOwnProperty,
            Y = [],
            Q = Y.pop,
            Z = Y.push,
            $ = Y.push,
            ee = Y.slice,
            te = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            ne =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            oe =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            re +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            ie =
            "\\[" +
            re +
            "*(" +
            oe +
            ")(?:" +
            re +
            "*([*^$|!~]?=)" +
            re +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            oe +
            "))|)" +
            re +
            "*\\]",
            ae =
            ":(" +
            oe +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            ie +
            ")*)|.*)\\)|)",
            se = new RegExp(re + "+", "g"),
            ue = new RegExp(
              "^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$",
              "g"
            ),
            ce = new RegExp("^" + re + "*," + re + "*"),
            le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            de = new RegExp(re + "|>"),
            pe = new RegExp(ae),
            fe = new RegExp("^" + oe + "$"),
            he = {
              ID: new RegExp("^#(" + oe + ")"),
              CLASS: new RegExp("^\\.(" + oe + ")"),
              TAG: new RegExp("^(" + oe + "|[*])"),
              ATTR: new RegExp("^" + ie),
              PSEUDO: new RegExp("^" + ae),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                re +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                re +
                "*(?:([+-]|)" +
                re +
                "*(\\d+)|))" +
                re +
                "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + ne + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                re +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                re +
                "*((?:-\\d)?\\d*)" +
                re +
                "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            ge = /HTML$/i,
            me = /^(?:input|select|textarea|button)$/i,
            ye = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            xe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Ae = /[+~]/,
            we = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            be = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0 ?
                  String.fromCharCode(n + 65536) :
                  String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            Te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function (e, t) {
              return t ?
                "\0" === e ?
                "�" :
                e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " " :
                "\\" + e;
            },
            Se = function () {
              M();
            },
            Ee = h(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              }, {
                dir: "parentNode",
                next: "legend",
              }
            );
          try {
            $.apply((Y = ee.call(F.childNodes)), F.childNodes),
              Y[F.childNodes.length].nodeType;
          } catch (e) {
            $ = {
              apply: Y.length ?
                function (e, t) {
                  Z.apply(e, ee.call(t));
                } : function (e, t) {
                  for (var n = e.length, r = 0;
                    (e[n++] = t[r++]););
                  e.length = n - 1;
                },
            };
          }
          for (w in ((b = t.support = {}),
              (S = t.isXML = function (e) {
                var t = e.namespaceURI,
                  n = (e.ownerDocument || e).documentElement;
                return !ge.test(t || (n && n.nodeName) || "HTML");
              }),
              (M = t.setDocument = function (e) {
                var t,
                  n,
                  r = e ? e.ownerDocument || e : F;
                return r != P && 9 === r.nodeType && r.documentElement ?
                  ((B = (P = r).documentElement),
                    (D = !S(P)),
                    F != P &&
                    (n = P.defaultView) &&
                    n.top !== n &&
                    (n.addEventListener ?
                      n.addEventListener("unload", Se, !1) :
                      n.attachEvent && n.attachEvent("onunload", Se)),
                    (b.scope = o(function (e) {
                      return (
                        B.appendChild(e).appendChild(P.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (b.attributes = o(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (b.getElementsByTagName = o(function (e) {
                      return (
                        e.appendChild(P.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (b.getElementsByClassName = ve.test(P.getElementsByClassName)),
                    (b.getById = o(function (e) {
                      return (
                        (B.appendChild(e).id = H),
                        !P.getElementsByName || !P.getElementsByName(H).length
                      );
                    })),
                    b.getById ?
                    ((T.filter.ID = function (e) {
                        var t = e.replace(we, be);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (T.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && D) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      })) :
                    ((T.filter.ID = function (e) {
                        var t = e.replace(we, be);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (T.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && D) {
                          var n,
                            r,
                            o,
                            i = t.getElementById(e);
                          if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                              return [i];
                            for (
                              o = t.getElementsByName(e), r = 0;
                              (i = o[r++]);

                            )
                              if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i];
                          }
                          return [];
                        }
                      })),
                    (T.find.TAG = b.getElementsByTagName ?
                      function (e, t) {
                        return void 0 !== t.getElementsByTagName ?
                          t.getElementsByTagName(e) :
                          b.qsa ?
                          t.querySelectorAll(e) :
                          void 0;
                      } :
                      function (e, t) {
                        var n,
                          r = [],
                          o = 0,
                          i = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (;
                            (n = i[o++]);) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return i;
                      }),
                    (T.find.CLASS =
                      b.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && D)
                          return t.getElementsByClassName(e);
                      }),
                    (U = []),
                    (I = []),
                    (b.qsa = ve.test(P.querySelectorAll)) &&
                    (o(function (e) {
                        var t;
                        (B.appendChild(e).innerHTML =
                          "<a id='" +
                          H +
                          "'></a><select id='" +
                          H +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          I.push("[*^$]=" + re + "*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                          I.push("\\[" + re + "*(?:value|" + ne + ")"),
                          e.querySelectorAll("[id~=" + H + "-]").length ||
                          I.push("~="),
                          (t = P.createElement("input")).setAttribute("name", ""),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                          I.push(
                            "\\[" + re + "*name" + re + "*=" + re + "*(?:''|\"\")"
                          ),
                          e.querySelectorAll(":checked").length ||
                          I.push(":checked"),
                          e.querySelectorAll("a#" + H + "+*").length ||
                          I.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          I.push("[\\r\\n\\f]");
                      }),
                      o(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = P.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                          I.push("name" + re + "*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                          I.push(":enabled", ":disabled"),
                          (B.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                          I.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          I.push(",.*:");
                      })),
                    (b.matchesSelector = ve.test(
                      (_ =
                        B.matches ||
                        B.webkitMatchesSelector ||
                        B.mozMatchesSelector ||
                        B.oMatchesSelector ||
                        B.msMatchesSelector)
                    )) &&
                    o(function (e) {
                      (b.disconnectedMatch = _.call(e, "*")),
                      _.call(e, "[s!='']:x"),
                        U.push("!=", ae);
                    }),
                    (I = I.length && new RegExp(I.join("|"))),
                    (U = U.length && new RegExp(U.join("|"))),
                    (t = ve.test(B.compareDocumentPosition)),
                    (j =
                      t || ve.test(B.contains) ?
                      function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains ?
                              n.contains(r) :
                              e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                          )
                        );
                      } :
                      function (e, t) {
                        if (t)
                          for (;
                            (t = t.parentNode);)
                            if (t === e) return !0;
                        return !1;
                      }),
                    (z = t ?
                      function (e, t) {
                        if (e === t) return (O = !0), 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return (
                          n ||
                          (1 &
                            (n =
                              (e.ownerDocument || e) == (t.ownerDocument || t) ?
                              e.compareDocumentPosition(t) :
                              1) ||
                            (!b.sortDetached && t.compareDocumentPosition(e) === n) ?
                            e == P || (e.ownerDocument == F && j(F, e)) ?
                            -1 :
                            t == P || (t.ownerDocument == F && j(F, t)) ?
                            1 :
                            N ?
                            te(N, e) - te(N, t) :
                            0 :
                            4 & n ?
                            -1 :
                            1)
                        );
                      } :
                      function (e, t) {
                        if (e === t) return (O = !0), 0;
                        var n,
                          r = 0,
                          o = e.parentNode,
                          i = t.parentNode,
                          s = [e],
                          u = [t];
                        if (!o || !i)
                          return e == P ?
                            -1 :
                            t == P ?
                            1 :
                            o ?
                            -1 :
                            i ?
                            1 :
                            N ?
                            te(N, e) - te(N, t) :
                            0;
                        if (o === i) return a(e, t);
                        for (n = e;
                          (n = n.parentNode);) s.unshift(n);
                        for (n = t;
                          (n = n.parentNode);) u.unshift(n);
                        for (; s[r] === u[r];) r++;
                        return r ?
                          a(s[r], u[r]) :
                          s[r] == F ?
                          -1 :
                          u[r] == F ?
                          1 :
                          0;
                      }),
                    P) :
                  P;
              }),
              (t.matches = function (e, n) {
                return t(e, null, null, n);
              }),
              (t.matchesSelector = function (e, n) {
                if (
                  (M(e),
                    b.matchesSelector &&
                    D &&
                    !W[n + " "] &&
                    (!U || !U.test(n)) &&
                    (!I || !I.test(n)))
                )
                  try {
                    var r = _.call(e, n);
                    if (
                      r ||
                      b.disconnectedMatch ||
                      (e.document && 11 !== e.document.nodeType)
                    )
                      return r;
                  } catch (e) {
                    W(n, !0);
                  }
                return t(n, P, null, [e]).length > 0;
              }),
              (t.contains = function (e, t) {
                return (e.ownerDocument || e) != P && M(e), j(e, t);
              }),
              (t.attr = function (e, t) {
                (e.ownerDocument || e) != P && M(e);
                var n = T.attrHandle[t.toLowerCase()],
                  r =
                  n && J.call(T.attrHandle, t.toLowerCase()) ?
                  n(e, t, !D) :
                  void 0;
                return void 0 !== r ?
                  r :
                  b.attributes || !D ?
                  e.getAttribute(t) :
                  (r = e.getAttributeNode(t)) && r.specified ?
                  r.value :
                  null;
              }),
              (t.escape = function (e) {
                return (e + "").replace(Te, Ce);
              }),
              (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
              }),
              (t.uniqueSort = function (e) {
                var t,
                  n = [],
                  r = 0,
                  o = 0;
                if (
                  ((O = !b.detectDuplicates),
                    (N = !b.sortStable && e.slice(0)),
                    e.sort(z),
                    O)
                ) {
                  for (;
                    (t = e[o++]);) t === e[o] && (r = n.push(o));
                  for (; r--;) e.splice(n[r], 1);
                }
                return (N = null), e;
              }),
              (C = t.getText = function (e) {
                var t,
                  n = "",
                  r = 0,
                  o = e.nodeType;
                if (o) {
                  if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                  } else if (3 === o || 4 === o) return e.nodeValue;
                } else
                  for (;
                    (t = e[r++]);) n += C(t);
                return n;
              }),
              ((T = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: he,
                attrHandle: {},
                find: {},
                relative: {
                  ">": {
                    dir: "parentNode",
                    first: !0,
                  },
                  " ": {
                    dir: "parentNode",
                  },
                  "+": {
                    dir: "previousSibling",
                    first: !0,
                  },
                  "~": {
                    dir: "previousSibling",
                  },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(we, be)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(we, be)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3) ?
                      (e[3] || t.error(e[0]),
                        (e[4] = +(e[4] ?
                          e[5] + (e[6] || 1) :
                          2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3]))) :
                      e[3] && t.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ?
                      null :
                      (e[3] ?
                        (e[2] = e[4] || e[5] || "") :
                        n &&
                        pe.test(n) &&
                        (t = E(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(we, be).toLowerCase();
                    return "*" === e ?
                      function () {
                        return !0;
                      } :
                      function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                  },
                  CLASS: function (e) {
                    var t = K[e + " "];
                    return (
                      t ||
                      ((t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) &&
                        K(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, n, r) {
                    return function (o) {
                      var i = t.attr(o, e);
                      return null == i ?
                        "!=" === n :
                        !n ||
                        ((i += ""),
                          "=" === n ?
                          i === r :
                          "!=" === n ?
                          i !== r :
                          "^=" === n ?
                          r && 0 === i.indexOf(r) :
                          "*=" === n ?
                          r && i.indexOf(r) > -1 :
                          "$=" === n ?
                          r && i.slice(-r.length) === r :
                          "~=" === n ?
                          (" " + i.replace(se, " ") + " ").indexOf(r) > -1 :
                          "|=" === n &&
                          (i === r || i.slice(0, r.length + 1) === r + "-"));
                    };
                  },
                  CHILD: function (e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3),
                      a = "last" !== e.slice(-4),
                      s = "of-type" === t;
                    return 1 === r && 0 === o ?
                      function (e) {
                        return !!e.parentNode;
                      } :
                      function (t, n, u) {
                        var c,
                          l,
                          d,
                          p,
                          f,
                          h,
                          g = i !== a ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          y = s && t.nodeName.toLowerCase(),
                          v = !u && !s,
                          x = !1;
                        if (m) {
                          if (i) {
                            for (; g;) {
                              for (p = t;
                                (p = p[g]);)
                                if (
                                  s ?
                                  p.nodeName.toLowerCase() === y :
                                  1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (((h = [a ? m.firstChild : m.lastChild]), a && v)) {
                            for (
                              x =
                              (f =
                                (c =
                                  (l =
                                    (d = (p = m)[H] || (p[H] = {}))[
                                      p.uniqueID
                                    ] || (d[p.uniqueID] = {}))[e] || [])[0] ===
                                q && c[1]) && c[2],
                              p = f && m.childNodes[f];
                              (p = (++f && p && p[g]) || (x = f = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++x && p === t) {
                                l[e] = [q, f, x];
                                break;
                              }
                          } else if (
                            (v &&
                              (x = f =
                                (c =
                                  (l =
                                    (d = (p = t)[H] || (p[H] = {}))[p.uniqueID] ||
                                    (d[p.uniqueID] = {}))[e] || [])[0] === q &&
                                c[1]),
                              !1 === x)
                          )
                            for (;
                              (p =
                                (++f && p && p[g]) || (x = f = 0) || h.pop()) &&
                              ((s ?
                                  p.nodeName.toLowerCase() !== y :
                                  1 !== p.nodeType) ||
                                !++x ||
                                (v &&
                                  ((l =
                                    (d = p[H] || (p[H] = {}))[p.uniqueID] ||
                                    (d[p.uniqueID] = {}))[e] = [q, x]),
                                  p !== t));

                            );
                          return (x -= o) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                  },
                  PSEUDO: function (e, n) {
                    var o,
                      i =
                      T.pseudos[e] ||
                      T.setFilters[e.toLowerCase()] ||
                      t.error("unsupported pseudo: " + e);
                    return i[H] ?
                      i(n) :
                      i.length > 1 ?
                      ((o = [e, e, "", n]),
                        T.setFilters.hasOwnProperty(e.toLowerCase()) ?
                        r(function (e, t) {
                          for (var r, o = i(e, n), a = o.length; a--;)
                            e[(r = te(e, o[a]))] = !(t[r] = o[a]);
                        }) :
                        function (e) {
                          return i(e, 0, o);
                        }) :
                      i;
                  },
                },
                pseudos: {
                  not: r(function (e) {
                    var t = [],
                      n = [],
                      o = R(e.replace(ue, "$1"));
                    return o[H] ?
                      r(function (e, t, n, r) {
                        for (var i, a = o(e, null, r, []), s = e.length; s--;)
                          (i = a[s]) && (e[s] = !(t[s] = i));
                      }) :
                      function (e, r, i) {
                        return (
                          (t[0] = e), o(t, null, i, n), (t[0] = null), !n.pop()
                        );
                      };
                  }),
                  has: r(function (e) {
                    return function (n) {
                      return t(e, n).length > 0;
                    };
                  }),
                  contains: r(function (e) {
                    return (
                      (e = e.replace(we, be)),
                      function (t) {
                        return (t.textContent || C(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: r(function (e) {
                    return (
                      fe.test(e || "") || t.error("unsupported lang: " + e),
                      (e = e.replace(we, be).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = D ?
                              t.lang :
                              t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === B;
                  },
                  focus: function (e) {
                    return (
                      e === P.activeElement &&
                      (!P.hasFocus || P.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: c(!1),
                  disabled: c(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !T.pseudos.empty(e);
                  },
                  header: function (e) {
                    return ye.test(e.nodeName);
                  },
                  input: function (e) {
                    return me.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: l(function () {
                    return [0];
                  }),
                  last: l(function (e, t) {
                    return [t - 1];
                  }),
                  eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;)
                      e.push(r);
                    return e;
                  }),
                  gt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e;
                  }),
                },
              }).pseudos.nth = T.pseudos.eq), {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0,
              }))
            T.pseudos[w] = s(w);
          for (w in {
              submit: !0,
              reset: !0,
            })
            T.pseudos[w] = u(w);
          return (
            (p.prototype = T.filters = T.pseudos),
            (T.setFilters = new p()),
            (E = t.tokenize = function (e, n) {
              var r,
                o,
                i,
                a,
                s,
                u,
                c,
                l = X[e + " "];
              if (l) return n ? 0 : l.slice(0);
              for (s = e, u = [], c = T.preFilter; s;) {
                for (a in ((r && !(o = ce.exec(s))) ||
                    (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                    (r = !1),
                    (o = le.exec(s)) &&
                    ((r = o.shift()),
                      i.push({
                        value: r,
                        type: o[0].replace(ue, " "),
                      }),
                      (s = s.slice(r.length))),
                    T.filter))
                  !(o = he[a].exec(s)) ||
                  (c[a] && !(o = c[a](o))) ||
                  ((r = o.shift()),
                    i.push({
                      value: r,
                      type: a,
                      matches: o,
                    }),
                    (s = s.slice(r.length)));
                if (!r) break;
              }
              return n ? s.length : s ? t.error(e) : X(e, u).slice(0);
            }),
            (R = t.compile = function (e, t) {
              var n,
                r = [],
                o = [],
                i = V[e + " "];
              if (!i) {
                for (t || (t = E(e)), n = t.length; n--;)
                  (i = x(t[n]))[H] ? r.push(i) : o.push(i);
                (i = V(e, A(o, r))).selector = e;
              }
              return i;
            }),
            (L = t.select = function (e, t, n, r) {
              var o,
                i,
                a,
                s,
                u,
                c = "function" == typeof e && e,
                l = !r && E((e = c.selector || e));
              if (((n = n || []), 1 === l.length)) {
                if (
                  (i = l[0] = l[0].slice(0)).length > 2 &&
                  "ID" === (a = i[0]).type &&
                  9 === t.nodeType &&
                  D &&
                  T.relative[i[1].type]
                ) {
                  if (
                    !(t = (T.find.ID(a.matches[0].replace(we, be), t) || [])[0])
                  )
                    return n;
                  c && (t = t.parentNode),
                    (e = e.slice(i.shift().value.length));
                }
                for (
                  o = he.needsContext.test(e) ? 0 : i.length; o-- && ((a = i[o]), !T.relative[(s = a.type)]);

                )
                  if (
                    (u = T.find[s]) &&
                    (r = u(
                      a.matches[0].replace(we, be),
                      (Ae.test(i[0].type) && d(t.parentNode)) || t
                    ))
                  ) {
                    if ((i.splice(o, 1), !(e = r.length && f(i))))
                      return $.apply(n, r), n;
                    break;
                  }
              }
              return (
                (c || R(e, l))(
                  r,
                  t,
                  !D,
                  n,
                  !t || (Ae.test(e) && d(t.parentNode)) || t
                ),
                n
              );
            }),
            (b.sortStable = H.split("").sort(z).join("") === H),
            (b.detectDuplicates = !!O),
            M(),
            (b.sortDetached = o(function (e) {
              return 1 & e.compareDocumentPosition(P.createElement("fieldset"));
            })),
            o(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
            i("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (b.attributes &&
              o(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
            i("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
            o(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
            i(ne, function (e, t, n) {
              var r;
              if (!n)
                return !0 === e[t] ?
                  t.toLowerCase() :
                  (r = e.getAttributeNode(t)) && r.specified ?
                  r.value :
                  null;
            }),
            t
          );
        })(n);
      (ve.find = xe),
      (ve.expr = xe.selectors),
      (ve.expr[":"] = ve.expr.pseudos),
      (ve.uniqueSort = ve.unique = xe.uniqueSort),
      (ve.text = xe.getText),
      (ve.isXMLDoc = xe.isXML),
      (ve.contains = xe.contains),
      (ve.escapeSelector = xe.escape);
      var Ae = function (e, t, n) {
          for (var r = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
              if (o && ve(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        we = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        be = ve.expr.match.needsContext,
        Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      (ve.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType ?
          ve.find.matchesSelector(r, e) ? [r] : [] :
          ve.find.matches(
            e,
            ve.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
        );
      }),
      ve.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            o = this;
          if ("string" != typeof e)
            return this.pushStack(
              ve(e).filter(function () {
                for (t = 0; t < r; t++)
                  if (ve.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) ve.find(e, o[t], n);
          return r > 1 ? ve.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(c(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(c(this, e || [], !0));
        },
        is: function (e) {
          return !!c(
            this,
            "string" == typeof e && be.test(e) ? ve(e) : e || [],
            !1
          ).length;
        },
      });
      var Ce,
        Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((ve.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || Ce), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] :
              Se.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery ?
              (t || n).find(e) :
              this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof ve ? t[0] : t),
                ve.merge(
                  this,
                  ve.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : me,
                    !0
                  )
                ),
                Te.test(r[1]) && ve.isPlainObject(t))
            )
              for (r in t) he(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (o = me.getElementById(r[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType ?
          ((this[0] = e), (this.length = 1), this) :
          he(e) ?
          void 0 !== n.ready ?
          n.ready(e) :
          e(ve) :
          ve.makeArray(e, this);
      }).prototype = ve.fn),
      (Ce = ve(me));
      var Ee = /^(?:parents|prev(?:Until|All))/,
        Re = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0,
        };
      ve.fn.extend({
          has: function (e) {
            var t = ve(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++)
                if (ve.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              o = this.length,
              i = [],
              a = "string" != typeof e && ve(e);
            if (!be.test(e))
              for (; r < o; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a ?
                      a.index(n) > -1 :
                      1 === n.nodeType && ve.find.matchesSelector(n, e))
                  ) {
                    i.push(n);
                    break;
                  }
            return this.pushStack(i.length > 1 ? ve.uniqueSort(i) : i);
          },
          index: function (e) {
            return e ?
              "string" == typeof e ?
              se.call(ve(e), this[0]) :
              se.call(this, e.jquery ? e[0] : e) :
              this[0] && this[0].parentNode ?
              this.first().prevAll().length :
              -1;
          },
          add: function (e, t) {
            return this.pushStack(ve.uniqueSort(ve.merge(this.get(), ve(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
        ve.each({
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return Ae(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return Ae(e, "parentNode", n);
            },
            next: function (e) {
              return l(e, "nextSibling");
            },
            prev: function (e) {
              return l(e, "previousSibling");
            },
            nextAll: function (e) {
              return Ae(e, "nextSibling");
            },
            prevAll: function (e) {
              return Ae(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return Ae(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return Ae(e, "previousSibling", n);
            },
            siblings: function (e) {
              return we((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return we(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && re(e.contentDocument) ?
                e.contentDocument :
                (u(e, "template") && (e = e.content || e),
                  ve.merge([], e.childNodes));
            },
          },
          function (e, t) {
            ve.fn[e] = function (n, r) {
              var o = ve.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (o = ve.filter(r, o)),
                this.length > 1 &&
                (Re[e] || ve.uniqueSort(o), Ee.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var Le = /[^\x20\t\r\n\f]+/g;
      (ve.Callbacks = function (e) {
        e =
          "string" == typeof e ?
          (function (e) {
            var t = {};
            return (
              ve.each(e.match(Le) || [], function (e, n) {
                t[n] = !0;
              }),
              t
            );
          })(e) :
          ve.extend({}, e);
        var t,
          n,
          r,
          o,
          i = [],
          s = [],
          u = -1,
          c = function () {
            for (o = o || e.once, r = t = !0; s.length; u = -1)
              for (n = s.shift(); ++u < i.length;)
                !1 === i[u].apply(n[0], n[1]) &&
                e.stopOnFalse &&
                ((u = i.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
          },
          l = {
            add: function () {
              return (
                i &&
                (n && !t && ((u = i.length - 1), s.push(n)),
                  (function t(n) {
                    ve.each(n, function (n, r) {
                      he(r) ?
                        (e.unique && l.has(r)) || i.push(r) :
                        r && r.length && "string" !== a(r) && t(r);
                    });
                  })(arguments),
                  n && !t && c()),
                this
              );
            },
            remove: function () {
              return (
                ve.each(arguments, function (e, t) {
                  for (var n;
                    (n = ve.inArray(t, i, n)) > -1;)
                    i.splice(n, 1), n <= u && u--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? ve.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (o = s = []), (i = n = ""), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (o = s = []), n || t || (i = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o ||
                ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || c()),
                this
              );
            },
            fire: function () {
              return l.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return l;
      }),
      ve.extend({
        Deferred: function (e) {
          var t = [
              [
                "notify",
                "progress",
                ve.Callbacks("memory"),
                ve.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                ve.Callbacks("once memory"),
                ve.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                ve.Callbacks("once memory"),
                ve.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            r = "pending",
            o = {
              state: function () {
                return r;
              },
              always: function () {
                return i.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return o.then(null, e);
              },
              pipe: function () {
                var e = arguments;
                return ve
                  .Deferred(function (n) {
                    ve.each(t, function (t, r) {
                        var o = he(e[r[4]]) && e[r[4]];
                        i[r[1]](function () {
                          var e = o && o.apply(this, arguments);
                          e && he(e.promise) ?
                            e
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject) :
                            n[r[0] + "With"](this, o ? [e] : arguments);
                        });
                      }),
                      (e = null);
                  })
                  .promise();
              },
              then: function (e, r, o) {
                function i(e, t, r, o) {
                  return function () {
                    var s = this,
                      u = arguments,
                      c = function () {
                        var n, c;
                        if (!(e < a)) {
                          if ((n = r.apply(s, u)) === t.promise())
                            throw new TypeError("Thenable self-resolution");
                          (c =
                            n &&
                            ("object" == typeof n ||
                              "function" == typeof n) &&
                            n.then),
                          he(c) ?
                            o ?
                            c.call(n, i(a, t, d, o), i(a, t, p, o)) :
                            (a++,
                              c.call(
                                n,
                                i(a, t, d, o),
                                i(a, t, p, o),
                                i(a, t, d, t.notifyWith)
                              )) :
                            (r !== d && ((s = void 0), (u = [n])),
                              (o || t.resolveWith)(s, u));
                        }
                      },
                      l = o ?
                      c :
                      function () {
                        try {
                          c();
                        } catch (n) {
                          ve.Deferred.exceptionHook &&
                            ve.Deferred.exceptionHook(n, l.stackTrace),
                            e + 1 >= a &&
                            (r !== p && ((s = void 0), (u = [n])),
                              t.rejectWith(s, u));
                        }
                      };
                    e
                      ?
                      l() :
                      (ve.Deferred.getStackHook &&
                        (l.stackTrace = ve.Deferred.getStackHook()),
                        n.setTimeout(l));
                  };
                }
                var a = 0;
                return ve
                  .Deferred(function (n) {
                    t[0][3].add(i(0, n, he(o) ? o : d, n.notifyWith)),
                      t[1][3].add(i(0, n, he(e) ? e : d)),
                      t[2][3].add(i(0, n, he(r) ? r : p));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? ve.extend(e, o) : o;
              },
            },
            i = {};
          return (
            ve.each(t, function (e, n) {
              var a = n[2],
                s = n[5];
              (o[n[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  t[3 - e][2].disable,
                  t[3 - e][3].disable,
                  t[0][2].lock,
                  t[0][3].lock
                ),
                a.add(n[3].fire),
                (i[n[0]] = function () {
                  return (
                    i[n[0] + "With"](this === i ? void 0 : this, arguments),
                    this
                  );
                }),
                (i[n[0] + "With"] = a.fireWith);
            }),
            o.promise(i),
            e && e.call(i, i),
            i
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            r = Array(n),
            o = oe.call(arguments),
            i = ve.Deferred(),
            a = function (e) {
              return function (n) {
                (r[e] = this),
                (o[e] = arguments.length > 1 ? oe.call(arguments) : n),
                --t || i.resolveWith(r, o);
              };
            };
          if (
            t <= 1 &&
            (f(e, i.done(a(n)).resolve, i.reject, !t),
              "pending" === i.state() || he(o[n] && o[n].then))
          )
            return i.then();
          for (; n--;) f(o[n], a(n), i.reject);
          return i.promise();
        },
      });
      var ke = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (ve.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          ke.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
      (ve.readyException = function (e) {
        n.setTimeout(function () {
          throw e;
        });
      });
      var Ne = ve.Deferred();
      (ve.fn.ready = function (e) {
        return (
          Ne.then(e).catch(function (e) {
            ve.readyException(e);
          }),
          this
        );
      }),
      ve.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --ve.readyWait : ve.isReady) ||
            ((ve.isReady = !0),
              (!0 !== e && --ve.readyWait > 0) || Ne.resolveWith(me, [ve]));
          },
        }),
        (ve.ready.then = Ne.then),
        "complete" === me.readyState ||
        ("loading" !== me.readyState && !me.documentElement.doScroll) ?
        n.setTimeout(ve.ready) :
        (me.addEventListener("DOMContentLoaded", h),
          n.addEventListener("load", h));
      var Oe = function (e, t, n, r, o, i, s) {
          var u = 0,
            c = e.length,
            l = null == n;
          if ("object" === a(n))
            for (u in ((o = !0), n)) Oe(e, t, u, n[u], !0, i, s);
          else if (
            void 0 !== r &&
            ((o = !0),
              he(r) || (s = !0),
              l &&
              (s ?
                (t.call(e, r), (t = null)) :
                ((l = t),
                  (t = function (e, t, n) {
                    return l.call(ve(e), n);
                  }))),
              t)
          )
            for (; u < c; u++) t(e[u], n, s ? r : r.call(e[u], u, t(e[u], n)));
          return o ? e : l ? t.call(e) : c ? t(e[0], n) : i;
        },
        Me = /^-ms-/,
        Pe = /-([a-z])/g,
        Be = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
      (y.uid = 1),
      (y.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
            ((t = {}),
              Be(e) &&
              (e.nodeType ?
                (e[this.expando] = t) :
                Object.defineProperty(e, this.expando, {
                  value: t,
                  configurable: !0,
                }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            o = this.cache(e);
          if ("string" == typeof t) o[m(t)] = n;
          else
            for (r in t) o[m(r)] = t[r];
          return o;
        },
        get: function (e, t) {
          return void 0 === t ?
            this.cache(e) :
            e[this.expando] && e[this.expando][m(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n) ?
            this.get(e, t) :
            (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              Array.isArray(t) ?
                (t = t.map(m)) :
                (t = (t = m(t)) in r ? [t] : t.match(Le) || []),
                (n = t.length);
              for (; n--;) delete r[t[n]];
            }
            (void 0 === t || ve.isEmptyObject(r)) &&
            (e.nodeType ?
              (e[this.expando] = void 0) :
              delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !ve.isEmptyObject(t);
        },
      });
      var De = new y(),
        Ie = new y(),
        Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /[A-Z]/g;
      ve.extend({
          hasData: function (e) {
            return Ie.hasData(e) || De.hasData(e);
          },
          data: function (e, t, n) {
            return Ie.access(e, t, n);
          },
          removeData: function (e, t) {
            Ie.remove(e, t);
          },
          _data: function (e, t, n) {
            return De.access(e, t, n);
          },
          _removeData: function (e, t) {
            De.remove(e, t);
          },
        }),
        ve.fn.extend({
          data: function (e, t) {
            var n,
              r,
              o,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = Ie.get(i)),
                  1 === i.nodeType && !De.get(i, "hasDataAttrs"))
              ) {
                for (n = a.length; n--;)
                  a[n] &&
                  0 === (r = a[n].name).indexOf("data-") &&
                  ((r = m(r.slice(5))), v(i, r, o[r]));
                De.set(i, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e ?
              this.each(function () {
                Ie.set(this, e);
              }) :
              Oe(
                this,
                function (t) {
                  var n;
                  if (i && void 0 === t) {
                    if (void 0 !== (n = Ie.get(i, e))) return n;
                    if (void 0 !== (n = v(i, e))) return n;
                  } else
                    this.each(function () {
                      Ie.set(this, e, t);
                    });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
          },
          removeData: function (e) {
            return this.each(function () {
              Ie.remove(this, e);
            });
          },
        }),
        ve.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = De.get(e, t)),
                n &&
                (!r || Array.isArray(n) ?
                  (r = De.access(e, t, ve.makeArray(n))) :
                  r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = ve.queue(e, t),
              r = n.length,
              o = n.shift(),
              i = ve._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), r--),
              o &&
              ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                o.call(
                  e,
                  function () {
                    ve.dequeue(e, t);
                  },
                  i
                )),
              !r && i && i.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              De.get(e, n) ||
              De.access(e, n, {
                empty: ve.Callbacks("once memory").add(function () {
                  De.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        ve.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n ?
              ve.queue(this[0], e) :
              void 0 === t ?
              this :
              this.each(function () {
                var n = ve.queue(this, e, t);
                ve._queueHooks(this, e),
                  "fx" === e &&
                  "inprogress" !== n[0] &&
                  ve.dequeue(this, e);
              })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              ve.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              o = ve.Deferred(),
              i = this,
              a = this.length,
              s = function () {
                --r || o.resolveWith(i, [i]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--;

            )
              (n = De.get(i[a], e + "queueHooks")) &&
              n.empty &&
              (r++, n.empty.add(s));
            return s(), o.promise(t);
          },
        });
      var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        He = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Fe = ["Top", "Right", "Bottom", "Left"],
        qe = me.documentElement,
        Ge = function (e) {
          return ve.contains(e.ownerDocument, e);
        },
        Ke = {
          composed: !0,
        };
      qe.getRootNode &&
        (Ge = function (e) {
          return (
            ve.contains(e.ownerDocument, e) ||
            e.getRootNode(Ke) === e.ownerDocument
          );
        });
      var Xe = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && Ge(e) && "none" === ve.css(e, "display"))
          );
        },
        Ve = {};
      ve.fn.extend({
        show: function () {
          return w(this, !0);
        },
        hide: function () {
          return w(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e ?
            e ?
            this.show() :
            this.hide() :
            this.each(function () {
              Xe(this) ? ve(this).show() : ve(this).hide();
            });
        },
      });
      var We = /^(?:checkbox|radio)$/i,
        ze = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Je = /^$|^module$|\/(?:java|ecma)script/i;
      !(function () {
        var e = me
          .createDocumentFragment()
          .appendChild(me.createElement("div")),
          t = me.createElement("input");
        t.setAttribute("type", "radio"),
          t.setAttribute("checked", "checked"),
          t.setAttribute("name", "t"),
          e.appendChild(t),
          (fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (e.innerHTML = "<textarea>x</textarea>"),
          (fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
          (e.innerHTML = "<option></option>"),
          (fe.option = !!e.lastChild);
      })();
      var Ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
      (Ye.th = Ye.td),
      fe.option ||
        (Ye.optgroup = Ye.option = [
          1,
          "<select multiple='multiple'>",
          "</select>",
        ]);
      var Qe = /<|&#?\w+;/,
        Ze = /^key/,
        $e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
      (ve.event = {
        global: {},
        add: function (e, t, n, r, o) {
          var i,
            a,
            s,
            u,
            c,
            l,
            d,
            p,
            f,
            h,
            g,
            m = De.get(e);
          if (Be(e))
            for (
              n.handler && ((n = (i = n).handler), (o = i.selector)),
              o && ve.find.matchesSelector(qe, o),
              n.guid || (n.guid = ve.guid++),
              (u = m.events) || (u = m.events = Object.create(null)),
              (a = m.handle) ||
              (a = m.handle = function (t) {
                return void 0 !== ve && ve.event.triggered !== t.type ?
                  ve.event.dispatch.apply(e, arguments) :
                  void 0;
              }),
              c = (t = (t || "").match(Le) || [""]).length; c--;

            )
              (f = g = (s = et.exec(t[c]) || [])[1]),
              (h = (s[2] || "").split(".").sort()),
              f &&
              ((d = ve.event.special[f] || {}),
                (f = (o ? d.delegateType : d.bindType) || f),
                (d = ve.event.special[f] || {}),
                (l = ve.extend({
                    type: f,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ve.expr.match.needsContext.test(o),
                    namespace: h.join("."),
                  },
                  i
                )),
                (p = u[f]) ||
                (((p = u[f] = []).delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(f, a))),
                d.add &&
                (d.add.call(e, l),
                  l.handler.guid || (l.handler.guid = n.guid)),
                o ? p.splice(p.delegateCount++, 0, l) : p.push(l),
                (ve.event.global[f] = !0));
        },
        remove: function (e, t, n, r, o) {
          var i,
            a,
            s,
            u,
            c,
            l,
            d,
            p,
            f,
            h,
            g,
            m = De.hasData(e) && De.get(e);
          if (m && (u = m.events)) {
            for (c = (t = (t || "").match(Le) || [""]).length; c--;)
              if (
                ((f = g = (s = et.exec(t[c]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  f)
              ) {
                for (
                  d = ve.event.special[f] || {},
                  p = u[(f = (r ? d.delegateType : d.bindType) || f)] || [],
                  s =
                  s[2] &&
                  new RegExp(
                    "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                  ),
                  a = i = p.length; i--;

                )
                  (l = p[i]),
                  (!o && g !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (s && !s.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (p.splice(i, 1),
                    l.selector && p.delegateCount--,
                    d.remove && d.remove.call(e, l));
                a &&
                  !p.length &&
                  ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) ||
                    ve.removeEvent(e, f, m.handle),
                    delete u[f]);
              } else
                for (f in u) ve.event.remove(e, f + t[c], n, r, !0);
            ve.isEmptyObject(u) && De.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s = new Array(arguments.length),
            u = ve.event.fix(e),
            c = (De.get(this, "events") || Object.create(null))[u.type] || [],
            l = ve.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((u.delegateTarget = this),
              !l.preDispatch || !1 !== l.preDispatch.call(this, u))
          ) {
            for (
              a = ve.event.handlers.call(this, u, c), t = 0;
              (o = a[t++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = o.elem, n = 0;
                (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== i.namespace &&
                  !u.rnamespace.test(i.namespace)) ||
                ((u.handleObj = i),
                  (u.data = i.data),
                  void 0 !==
                  (r = (
                    (ve.event.special[i.origType] || {}).handle || i.handler
                  ).apply(o.elem, s)) &&
                  !1 === (u.result = r) &&
                  (u.preventDefault(), u.stopPropagation()));
            return l.postDispatch && l.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s = [],
            u = t.delegateCount,
            c = e.target;
          if (u && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (i = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(o = (r = t[n]).selector + " ")] &&
                  (a[o] = r.needsContext ?
                    ve(o, this).index(c) > -1 :
                    ve.find(o, this, null, [c]).length),
                  a[o] && i.push(r);
                i.length &&
                  s.push({
                    elem: c,
                    handlers: i,
                  });
              }
          return (
            (c = this),
            u < t.length &&
            s.push({
              elem: c,
              handlers: t.slice(u),
            }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(ve.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: he(t) ?
              function () {
                if (this.originalEvent) return t(this.originalEvent);
              } : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[ve.expando] ? e : new ve.Event(e);
        },
        special: {
          load: {
            noBubble: !0,
          },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                We.test(t.type) && t.click && u(t, "input") && k(t, "click", S),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                We.test(t.type) && t.click && u(t, "input") && k(t, "click"), !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (We.test(t.type) &&
                  t.click &&
                  u(t, "input") &&
                  De.get(t, "click")) ||
                u(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
      (ve.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (ve.Event = function (e, t) {
        return this instanceof ve.Event ?
          (e && e.type ?
            ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue) ?
                S :
                E),
              (this.target =
                e.target && 3 === e.target.nodeType ?
                e.target.parentNode :
                e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget)) :
            (this.type = e),
            t && ve.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            void(this[ve.expando] = !0)) :
          new ve.Event(e, t);
      }),
      (ve.Event.prototype = {
        constructor: ve.Event,
        isDefaultPrevented: E,
        isPropagationStopped: E,
        isImmediatePropagationStopped: E,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = S),
          e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = S),
          e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = S),
          e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      ve.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Ze.test(e.type) ?
                null != e.charCode ?
                e.charCode :
                e.keyCode :
                !e.which && void 0 !== t && $e.test(e.type) ?
                1 & t ?
                1 :
                2 & t ?
                3 :
                4 & t ?
                2 :
                0 :
                e.which;
            },
          },
          ve.event.addProp
        ),
        ve.each({
            focus: "focusin",
            blur: "focusout",
          },
          function (e, t) {
            ve.event.special[e] = {
              setup: function () {
                return k(this, e, R), !1;
              },
              trigger: function () {
                return k(this, e), !0;
              },
              delegateType: t,
            };
          }
        ),
        ve.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            ve.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (r && (r === this || ve.contains(this, r))) ||
                  ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        ve.fn.extend({
          on: function (e, t, n, r) {
            return L(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return L(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                ve(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = E),
              this.each(function () {
                ve.event.remove(this, e, n, t);
              })
            );
          },
        });
      var tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      ve.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.cloneNode(!0),
              u = Ge(e);
            if (
              !(
                fe.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                ve.isXMLDoc(e)
              )
            )
              for (a = b(s), r = 0, o = (i = b(e)).length; r < o; r++)
                B(i[r], a[r]);
            if (t)
              if (n)
                for (
                  i = i || b(e), a = a || b(s), r = 0, o = i.length; r < o; r++
                )
                  P(i[r], a[r]);
              else P(e, s);
            return (
              (a = b(s, "script")).length > 0 && T(a, !u && b(e, "script")), s
            );
          },
          cleanData: function (e) {
            for (
              var t, n, r, o = ve.event.special, i = 0; void 0 !== (n = e[i]); i++
            )
              if (Be(n)) {
                if ((t = n[De.expando])) {
                  if (t.events)
                    for (r in t.events)
                      o[r] ?
                      ve.event.remove(n, r) :
                      ve.removeEvent(n, r, t.handle);
                  n[De.expando] = void 0;
                }
                n[Ie.expando] && (n[Ie.expando] = void 0);
              }
          },
        }),
        ve.fn.extend({
          detach: function (e) {
            return I(this, e, !0);
          },
          remove: function (e) {
            return I(this, e);
          },
          text: function (e) {
            return Oe(
              this,
              function (e) {
                return void 0 === e ?
                  ve.text(this) :
                  this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                    (this.textContent = e);
                  });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return D(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
              N(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return D(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = N(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return D(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return D(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
              (ve.cleanData(b(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return ve.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return Oe(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !tt.test(e) &&
                  !Ye[(ze.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = ve.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                      (ve.cleanData(b(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return D(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                ve.inArray(this, e) < 0 &&
                  (ve.cleanData(b(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        ve.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            ve.fn[e] = function (e) {
              for (
                var n, r = [], o = ve(e), i = o.length - 1, a = 0; a <= i; a++
              )
                (n = a === i ? this : this.clone(!0)),
                ve(o[a])[t](n),
                ae.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var ot = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
        it = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        at = function (e, t, n) {
          var r,
            o,
            i = {};
          for (o in t)(i[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
          return r;
        },
        st = new RegExp(Fe.join("|"), "i");
      !(function () {
        function e() {
          if (l) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (l.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            qe.appendChild(c).appendChild(l);
            var e = n.getComputedStyle(l);
            (r = "1%" !== e.top),
            (u = 12 === t(e.marginLeft)),
            (l.style.right = "60%"),
            (a = 36 === t(e.right)),
            (o = 36 === t(e.width)),
            (l.style.position = "absolute"),
            (i = 12 === t(l.offsetWidth / 3)),
            qe.removeChild(c),
              (l = null);
          }
        }

        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          o,
          i,
          a,
          s,
          u,
          c = me.createElement("div"),
          l = me.createElement("div");
        l.style &&
          ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (fe.clearCloneStyle = "content-box" === l.style.backgroundClip),
            ve.extend(fe, {
              boxSizingReliable: function () {
                return e(), o;
              },
              pixelBoxStyles: function () {
                return e(), a;
              },
              pixelPosition: function () {
                return e(), r;
              },
              reliableMarginLeft: function () {
                return e(), u;
              },
              scrollboxSize: function () {
                return e(), i;
              },
              reliableTrDimensions: function () {
                var e, t, r, o;
                return (
                  null == s &&
                  ((e = me.createElement("table")),
                    (t = me.createElement("tr")),
                    (r = me.createElement("div")),
                    (e.style.cssText = "position:absolute;left:-11111px"),
                    (t.style.height = "1px"),
                    (r.style.height = "9px"),
                    qe.appendChild(e).appendChild(t).appendChild(r),
                    (o = n.getComputedStyle(t)),
                    (s = parseInt(o.height) > 3),
                    qe.removeChild(e)),
                  s
                );
              },
            }));
      })();
      var ut = ["Webkit", "Moz", "ms"],
        ct = me.createElement("div").style,
        lt = {},
        dt = /^(none|table(?!-c[ea]).+)/,
        pt = /^--/,
        ft = {
          position: "absolute",
          visibility: "hidden",
          display: "block",
        },
        ht = {
          letterSpacing: "0",
          fontWeight: "400",
        };
      ve.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = U(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                i,
                a,
                s = m(t),
                u = pt.test(t),
                c = e.style;
              return (
                u || (t = j(s)),
                (a = ve.cssHooks[t] || ve.cssHooks[s]),
                void 0 === n ?
                a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ?
                o :
                c[t] :
                ("string" === (i = typeof n) &&
                  (o = He.exec(n)) &&
                  o[1] &&
                  ((n = x(e, t, o)), (i = "number")),
                  void(
                    null != n &&
                    n == n &&
                    ("number" !== i ||
                      u ||
                      (n += (o && o[3]) || (ve.cssNumber[s] ? "" : "px")),
                      fe.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                      (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? c.setProperty(t, n) : (c[t] = n)))
                  ))
              );
            }
          },
          css: function (e, t, n, r) {
            var o,
              i,
              a,
              s = m(t);
            return (
              pt.test(t) || (t = j(s)),
              (a = ve.cssHooks[t] || ve.cssHooks[s]) &&
              "get" in a &&
              (o = a.get(e, !0, n)),
              void 0 === o && (o = U(e, t, r)),
              "normal" === o && t in ht && (o = ht[t]),
              "" === n || n ?
              ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o) :
              o
            );
          },
        }),
        ve.each(["height", "width"], function (e, t) {
          ve.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !dt.test(ve.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width) ?
                  q(e, t, r) :
                  at(e, ft, function () {
                    return q(e, t, r);
                  });
            },
            set: function (e, n, r) {
              var o,
                i = it(e),
                a = !fe.scrollboxSize() && "absolute" === i.position,
                s = (a || r) && "border-box" === ve.css(e, "boxSizing", !1, i),
                u = r ? F(e, t, r, s, i) : 0;
              return (
                s &&
                a &&
                (u -= Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(i[t]) -
                  F(e, t, "border", !1, i) -
                  0.5
                )),
                u &&
                (o = He.exec(n)) &&
                "px" !== (o[3] || "px") &&
                ((e.style[t] = n), (n = ve.css(e, t))),
                H(0, n, u)
              );
            },
          };
        }),
        (ve.cssHooks.marginLeft = _(fe.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(U(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                at(
                  e, {
                    marginLeft: 0,
                  },
                  function () {
                    return e.getBoundingClientRect().left;
                  }
                )) + "px"
            );
        })),
        ve.each({
            margin: "",
            padding: "",
            border: "Width",
          },
          function (e, t) {
            (ve.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var r = 0,
                    o = {},
                    i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++
                )
                  o[e + Fe[r] + t] = i[r] || i[r - 2] || i[0];
                return o;
              },
            }),
            "margin" !== e && (ve.cssHooks[e + t].set = H);
          }
        ),
        ve.fn.extend({
          css: function (e, t) {
            return Oe(
              this,
              function (e, t, n) {
                var r,
                  o,
                  i = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = it(e), o = t.length; a < o; a++)
                    i[t[a]] = ve.css(e, t[a], !1, r);
                  return i;
                }
                return void 0 !== n ? ve.style(e, t, n) : ve.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (ve.Tween = G),
        (G.prototype = {
          constructor: G,
          init: function (e, t, n, r, o, i) {
            (this.elem = e),
            (this.prop = n),
            (this.easing = o || ve.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = i || (ve.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = G.propHooks[this.prop];
            return e && e.get ? e.get(this) : G.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = G.propHooks[this.prop];
            return (
              this.options.duration ?
              (this.pos = t = ve.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              )) :
              (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
              this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : G.propHooks._default.set(this),
              this
            );
          },
        }),
        (G.prototype.init.prototype = G.prototype),
        (G.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ?
                e.elem[e.prop] :
                (t = ve.css(e.elem, e.prop, "")) && "auto" !== t ?
                t :
                0;
            },
            set: function (e) {
              ve.fx.step[e.prop] ?
                ve.fx.step[e.prop](e) :
                1 !== e.elem.nodeType ||
                (!ve.cssHooks[e.prop] && null == e.elem.style[j(e.prop)]) ?
                (e.elem[e.prop] = e.now) :
                ve.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (G.propHooks.scrollTop = G.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (ve.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (ve.fx = G.prototype.init),
        (ve.fx.step = {});
      var gt,
        mt,
        yt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
      (ve.Animation = ve.extend(z, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return x(n.elem, e, He.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          he(e) ? ((t = e), (e = ["*"])) : (e = e.match(Le));
          for (var n, r = 0, o = e.length; r < o; r++)
            (n = e[r]),
            (z.tweeners[n] = z.tweeners[n] || []),
            z.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u,
              c,
              l,
              d = "width" in t || "height" in t,
              p = this,
              f = {},
              h = e.style,
              g = e.nodeType && Xe(e),
              m = De.get(e, "fxshow");
            for (r in (n.queue ||
                (null == (a = ve._queueHooks(e, "fx")).unqueued &&
                  ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, ve.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
              if (((o = t[r]), yt.test(o))) {
                if (
                  (delete t[r],
                    (i = i || "toggle" === o),
                    o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !m || void 0 === m[r]) continue;
                  g = !0;
                }
                f[r] = (m && m[r]) || ve.style(e, r);
              }
            if ((u = !ve.isEmptyObject(t)) || !ve.isEmptyObject(f))
              for (r in (d &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = m && m.display) && (c = De.get(e, "display")),
                    "none" === (l = ve.css(e, "display")) &&
                    (c ?
                      (l = c) :
                      (w([e], !0),
                        (c = e.style.display || c),
                        (l = ve.css(e, "display")),
                        w([e]))),
                    ("inline" === l || ("inline-block" === l && null != c)) &&
                    "none" === ve.css(e, "float") &&
                    (u ||
                      (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                        ((l = h.display), (c = "none" === l ? "" : l))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                  ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  f))
                u ||
                (m ?
                  "hidden" in m && (g = m.hidden) :
                  (m = De.access(e, "fxshow", {
                    display: c,
                  })),
                  i && (m.hidden = !g),
                  g && w([e], !0),
                  p.done(function () {
                    for (r in (g || w([e]), De.remove(e, "fxshow"), f))
                      ve.style(e, r, f[r]);
                  })),
                (u = W(g ? m[r] : 0, r, p)),
                r in m ||
                ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? z.prefilters.unshift(e) : z.prefilters.push(e);
        },
      })),
      (ve.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e ?
          ve.extend({}, e) : {
            complete: n || (!n && t) || (he(e) && e),
            duration: e,
            easing: (n && t) || (t && !he(t) && t),
          };
        return (
          ve.fx.off ?
          (r.duration = 0) :
          "number" != typeof r.duration &&
          (r.duration in ve.fx.speeds ?
            (r.duration = ve.fx.speeds[r.duration]) :
            (r.duration = ve.fx.speeds._default)),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            he(r.old) && r.old.call(this),
              r.queue && ve.dequeue(this, r.queue);
          }),
          r
        );
      }),
      ve.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(Xe).css("opacity", 0).show().end().animate({
                opacity: t,
              },
              e,
              n,
              r
            );
          },
          animate: function (e, t, n, r) {
            var o = ve.isEmptyObject(e),
              i = ve.speed(t, n, r),
              a = function () {
                var t = z(this, ve.extend({}, e), i);
                (o || De.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  i = ve.timers,
                  a = De.get(this);
                if (o) a[o] && a[o].stop && r(a[o]);
                else
                  for (o in a) a[o] && a[o].stop && vt.test(o) && r(a[o]);
                for (o = i.length; o--;)
                  i[o].elem !== this ||
                  (null != e && i[o].queue !== e) ||
                  (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                (!t && n) || ve.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = De.get(this),
                  r = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  i = ve.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                  ve.queue(this, e, []),
                  o && o.stop && o.stop.call(this, !0),
                  t = i.length; t--;

                )
                  i[t].elem === this &&
                  i[t].queue === e &&
                  (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        ve.each(["toggle", "show", "hide"], function (e, t) {
          var n = ve.fn[t];
          ve.fn[t] = function (e, r, o) {
            return null == e || "boolean" == typeof e ?
              n.apply(this, arguments) :
              this.animate(V(t, !0), e, r, o);
          };
        }),
        ve.each({
            slideDown: V("show"),
            slideUp: V("hide"),
            slideToggle: V("toggle"),
            fadeIn: {
              opacity: "show",
            },
            fadeOut: {
              opacity: "hide",
            },
            fadeToggle: {
              opacity: "toggle",
            },
          },
          function (e, t) {
            ve.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (ve.timers = []),
        (ve.fx.tick = function () {
          var e,
            t = 0,
            n = ve.timers;
          for (gt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || ve.fx.stop(), (gt = void 0);
        }),
        (ve.fx.timer = function (e) {
          ve.timers.push(e), ve.fx.start();
        }),
        (ve.fx.interval = 13),
        (ve.fx.start = function () {
          mt || ((mt = !0), K());
        }),
        (ve.fx.stop = function () {
          mt = null;
        }),
        (ve.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400,
        }),
        (ve.fn.delay = function (e, t) {
          return (
            (e = (ve.fx && ve.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var o = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = me.createElement("input"),
            t = me
            .createElement("select")
            .appendChild(me.createElement("option"));
          (e.type = "checkbox"),
          (fe.checkOn = "" !== e.value),
          (fe.optSelected = t.selected),
          ((e = me.createElement("input")).value = "t"),
          (e.type = "radio"),
          (fe.radioValue = "t" === e.value);
        })();
      var xt,
        At = ve.expr.attrHandle;
      ve.fn.extend({
          attr: function (e, t) {
            return Oe(this, ve.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              ve.removeAttr(this, e);
            });
          },
        }),
        ve.extend({
          attr: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === e.getAttribute ?
                ve.prop(e, t, n) :
                ((1 === i && ve.isXMLDoc(e)) ||
                  (o =
                    ve.attrHooks[t.toLowerCase()] ||
                    (ve.expr.match.bool.test(t) ? xt : void 0)),
                  void 0 !== n ?
                  null === n ?
                  void ve.removeAttr(e, t) :
                  o && "set" in o && void 0 !== (r = o.set(e, n, t)) ?
                  r :
                  (e.setAttribute(t, n + ""), n) :
                  o && "get" in o && null !== (r = o.get(e, t)) ?
                  r :
                  null == (r = ve.find.attr(e, t)) ?
                  void 0 :
                  r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!fe.radioValue && "radio" === t && u(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              o = t && t.match(Le);
            if (o && 1 === e.nodeType)
              for (;
                (n = o[r++]);) e.removeAttribute(n);
          },
        }),
        (xt = {
          set: function (e, t, n) {
            return !1 === t ? ve.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        ve.each(ve.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = At[t] || ve.find.attr;
          At[t] = function (e, t, r) {
            var o,
              i,
              a = t.toLowerCase();
            return (
              r ||
              ((i = At[a]),
                (At[a] = o),
                (o = null != n(e, t, r) ? a : null),
                (At[a] = i)),
              o
            );
          };
        });
      var wt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
      ve.fn.extend({
          prop: function (e, t) {
            return Oe(this, ve.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[ve.propFix[e] || e];
            });
          },
        }),
        ve.extend({
          prop: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && ve.isXMLDoc(e)) ||
                ((t = ve.propFix[t] || t), (o = ve.propHooks[t])),
                void 0 !== n ?
                o && "set" in o && void 0 !== (r = o.set(e, n, t)) ?
                r :
                (e[t] = n) :
                o && "get" in o && null !== (r = o.get(e, t)) ?
                r :
                e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = ve.find.attr(e, "tabindex");
                return t ?
                  parseInt(t, 10) :
                  wt.test(e.nodeName) || (bt.test(e.nodeName) && e.href) ?
                  0 :
                  -1;
              },
            },
          },
          propFix: {
            for: "htmlFor",
            class: "className",
          },
        }),
        fe.optSelected ||
        (ve.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t &&
              (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
        ve.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            ve.propFix[this.toLowerCase()] = this;
          }
        ),
        ve.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u = 0;
            if (he(e))
              return this.each(function (t) {
                ve(this).addClass(e.call(this, t, Y(this)));
              });
            if ((t = Q(e)).length)
              for (;
                (n = this[u++]);)
                if (((o = Y(n)), (r = 1 === n.nodeType && " " + J(o) + " "))) {
                  for (a = 0;
                    (i = t[a++]);)
                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                  o !== (s = J(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u = 0;
            if (he(e))
              return this.each(function (t) {
                ve(this).removeClass(e.call(this, t, Y(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = Q(e)).length)
              for (;
                (n = this[u++]);)
                if (((o = Y(n)), (r = 1 === n.nodeType && " " + J(o) + " "))) {
                  for (a = 0;
                    (i = t[a++]);)
                    for (; r.indexOf(" " + i + " ") > -1;)
                      r = r.replace(" " + i + " ", " ");
                  o !== (s = J(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ?
              t ?
              this.addClass(e) :
              this.removeClass(e) :
              he(e) ?
              this.each(function (n) {
                ve(this).toggleClass(e.call(this, n, Y(this), t), t);
              }) :
              this.each(function () {
                var t, o, i, a;
                if (r)
                  for (o = 0, i = ve(this), a = Q(e);
                    (t = a[o++]);)
                    i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                  (void 0 !== e && "boolean" !== n) ||
                  ((t = Y(this)) && De.set(this, "__className__", t),
                    this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ?
                      "" :
                      De.get(this, "__className__") || ""
                    ));
              });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " ";
              (n = this[r++]);)
              if (1 === n.nodeType && (" " + J(Y(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Tt = /\r/g;
      ve.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              o = this[0];
            return arguments.length ?
              ((r = he(e)),
                this.each(function (n) {
                  var o;
                  1 === this.nodeType &&
                    (null == (o = r ? e.call(this, n, ve(this).val()) : e) ?
                      (o = "") :
                      "number" == typeof o ?
                      (o += "") :
                      Array.isArray(o) &&
                      (o = ve.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                      ((t =
                          ve.valHooks[this.type] ||
                          ve.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                      (this.value = o));
                })) :
              o ?
              (t =
                ve.valHooks[o.type] || ve.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(o, "value")) ?
              n :
              "string" == typeof (n = o.value) ?
              n.replace(Tt, "") :
              null == n ?
              "" :
              n :
              void 0;
          },
        }),
        ve.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = ve.find.attr(e, "value");
                return null != t ? t : J(ve.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  o = e.options,
                  i = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  c = a ? i + 1 : o.length;
                for (r = i < 0 ? c : a ? i : 0; r < c; r++)
                  if (
                    ((n = o[r]).selected || r === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !u(n.parentNode, "optgroup"))
                  ) {
                    if (((t = ve(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, r, o = e.options, i = ve.makeArray(t), a = o.length; a--;

                )
                  ((r = o[a]).selected =
                    ve.inArray(ve.valHooks.option.get(r), i) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), i;
              },
            },
          },
        }),
        ve.each(["radio", "checkbox"], function () {
          (ve.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = ve.inArray(ve(e).val(), t) > -1);
            },
          }),
          fe.checkOn ||
            (ve.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
        }),
        (fe.focusin = "onfocusin" in n);
      var Ct = /^(?:focusinfocus|focusoutblur)$/,
        St = function (e) {
          e.stopPropagation();
        };
      ve.extend(ve.event, {
          trigger: function (e, t, r, o) {
            var i,
              a,
              s,
              u,
              c,
              l,
              d,
              p,
              f = [r || me],
              h = le.call(e, "type") ? e.type : e,
              g = le.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((a = p = s = r = r || me),
                3 !== r.nodeType &&
                8 !== r.nodeType &&
                !Ct.test(h + ve.event.triggered) &&
                (h.indexOf(".") > -1 &&
                  ((h = (g = h.split(".")).shift()), g.sort()),
                  (c = h.indexOf(":") < 0 && "on" + h),
                  ((e = e[ve.expando] ?
                      e :
                      new ve.Event(h, "object" == typeof e && e)).isTrigger = o ?
                    2 :
                    3),
                  (e.namespace = g.join(".")),
                  (e.rnamespace = e.namespace ?
                    new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                    null),
                  (e.result = void 0),
                  e.target || (e.target = r),
                  (t = null == t ? [e] : ve.makeArray(t, [e])),
                  (d = ve.event.special[h] || {}),
                  o || !d.trigger || !1 !== d.trigger.apply(r, t)))
            ) {
              if (!o && !d.noBubble && !ge(r)) {
                for (
                  u = d.delegateType || h, Ct.test(u + h) || (a = a.parentNode); a; a = a.parentNode
                )
                  f.push(a), (s = a);
                s === (r.ownerDocument || me) &&
                  f.push(s.defaultView || s.parentWindow || n);
              }
              for (i = 0;
                (a = f[i++]) && !e.isPropagationStopped();)
                (p = a),
                (e.type = i > 1 ? u : d.bindType || h),
                (l =
                  (De.get(a, "events") || Object.create(null))[e.type] &&
                  De.get(a, "handle")) && l.apply(a, t),
                (l = c && a[c]) &&
                l.apply &&
                Be(a) &&
                ((e.result = l.apply(a, t)),
                  !1 === e.result && e.preventDefault());
              return (
                (e.type = h),
                o ||
                e.isDefaultPrevented() ||
                (d._default && !1 !== d._default.apply(f.pop(), t)) ||
                !Be(r) ||
                (c &&
                  he(r[h]) &&
                  !ge(r) &&
                  ((s = r[c]) && (r[c] = null),
                    (ve.event.triggered = h),
                    e.isPropagationStopped() && p.addEventListener(h, St),
                    r[h](),
                    e.isPropagationStopped() && p.removeEventListener(h, St),
                    (ve.event.triggered = void 0),
                    s && (r[c] = s))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = ve.extend(new ve.Event(), n, {
              type: e,
              isSimulated: !0,
            });
            ve.event.trigger(r, null, t);
          },
        }),
        ve.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              ve.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ve.event.trigger(e, t, n, !0);
          },
        }),
        fe.focusin ||
        ve.each({
            focus: "focusin",
            blur: "focusout",
          },
          function (e, t) {
            var n = function (e) {
              ve.event.simulate(t, e.target, ve.event.fix(e));
            };
            ve.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  o = De.access(r, t);
                o || r.addEventListener(e, n, !0),
                  De.access(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  o = De.access(r, t) - 1;
                o
                  ?
                  De.access(r, t, o) :
                  (r.removeEventListener(e, n, !0), De.remove(r, t));
              },
            };
          }
        );
      var Et = n.location,
        Rt = {
          guid: Date.now(),
        },
        Lt = /\?/;
      ve.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
          ve.error("Invalid XML: " + e),
          t
        );
      };
      var kt = /\[\]$/,
        Nt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;
      (ve.param = function (e, t) {
        var n,
          r = [],
          o = function (e, t) {
            var n = he(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !ve.isPlainObject(e)))
          ve.each(e, function () {
            o(this.name, this.value);
          });
        else
          for (n in e) Z(n, e[n], t, o);
        return r.join("&");
      }),
      ve.fn.extend({
        serialize: function () {
          return ve.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
              var e = ve.prop(this, "elements");
              return e ? ve.makeArray(e) : this;
            })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !ve(this).is(":disabled") &&
                Mt.test(this.nodeName) &&
                !Ot.test(e) &&
                (this.checked || !We.test(e))
              );
            })
            .map(function (e, t) {
              var n = ve(this).val();
              return null == n ?
                null :
                Array.isArray(n) ?
                ve.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(Nt, "\r\n"),
                  };
                }) : {
                  name: t.name,
                  value: n.replace(Nt, "\r\n"),
                };
            })
            .get();
        },
      });
      var Pt = /%20/g,
        Bt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ut = /^(?:GET|HEAD)$/,
        _t = /^\/\//,
        jt = {},
        Ht = {},
        Ft = "*/".concat("*"),
        qt = me.createElement("a");
      (qt.href = Et.href),
      ve.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Et.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ft,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/,
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": ve.parseXML,
            },
            flatOptions: {
              url: !0,
              context: !0,
            },
          },
          ajaxSetup: function (e, t) {
            return t ? te(te(e, ve.ajaxSettings), t) : te(ve.ajaxSettings, e);
          },
          ajaxPrefilter: $(jt),
          ajaxTransport: $(Ht),
          ajax: function (e, t) {
            function r(e, t, r, s) {
              var c,
                p,
                f,
                A,
                w,
                b = t;
              l ||
                ((l = !0),
                  u && n.clearTimeout(u),
                  (o = void 0),
                  (a = s || ""),
                  (T.readyState = e > 0 ? 4 : 0),
                  (c = (e >= 200 && e < 300) || 304 === e),
                  r &&
                  (A = (function (e, t, n) {
                    for (
                      var r, o, i, a, s = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                      void 0 === r &&
                      (r =
                        e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (o in s)
                        if (s[o] && s[o].test(r)) {
                          u.unshift(o);
                          break;
                        }
                    if (u[0] in n) i = u[0];
                    else {
                      for (o in n) {
                        if (!u[0] || e.converters[o + " " + u[0]]) {
                          i = o;
                          break;
                        }
                        a || (a = o);
                      }
                      i = i || a;
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i];
                  })(h, T, r)),
                  !c &&
                  ve.inArray("script", h.dataTypes) > -1 &&
                  (h.converters["text script"] = function () {}),
                  (A = (function (e, t, n, r) {
                    var o,
                      i,
                      a,
                      s,
                      u,
                      c = {},
                      l = e.dataTypes.slice();
                    if (l[1])
                      for (a in e.converters)
                        c[a.toLowerCase()] = e.converters[a];
                    for (i = l.shift(); i;)
                      if (
                        (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = l.shift()))
                      )
                        if ("*" === i) i = u;
                        else if ("*" !== u && u !== i) {
                      if (!(a = c[u + " " + i] || c["* " + i]))
                        for (o in c)
                          if (
                            (s = o.split(" "))[1] === i &&
                            (a = c[u + " " + s[0]] || c["* " + s[0]])
                          ) {
                            !0 === a ?
                              (a = c[o]) :
                              !0 !== c[o] && ((i = s[0]), l.unshift(s[1]));
                            break;
                          }
                      if (!0 !== a)
                        if (a && e.throws) t = a(t);
                        else
                          try {
                            t = a(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: a ?
                                e : "No conversion from " + u + " to " + i,
                            };
                          }
                    }
                    return {
                      state: "success",
                      data: t,
                    };
                  })(h, A, T, c)),
                  c ?
                  (h.ifModified &&
                    ((w = T.getResponseHeader("Last-Modified")) &&
                      (ve.lastModified[i] = w),
                      (w = T.getResponseHeader("etag")) && (ve.etag[i] = w)),
                    204 === e || "HEAD" === h.type ?
                    (b = "nocontent") :
                    304 === e ?
                    (b = "notmodified") :
                    ((b = A.state), (p = A.data), (c = !(f = A.error)))) :
                  ((f = b), (!e && b) || ((b = "error"), e < 0 && (e = 0))),
                  (T.status = e),
                  (T.statusText = (t || b) + ""),
                  c ? y.resolveWith(g, [p, b, T]) : y.rejectWith(g, [T, b, f]),
                  T.statusCode(x),
                  (x = void 0),
                  d &&
                  m.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : f]),
                  v.fireWith(g, [T, b]),
                  d &&
                  (m.trigger("ajaxComplete", [T, h]),
                    --ve.active || ve.event.trigger("ajaxStop")));
            }
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var o,
              i,
              a,
              s,
              u,
              c,
              l,
              d,
              p,
              f,
              h = ve.ajaxSetup({}, t),
              g = h.context || h,
              m = h.context && (g.nodeType || g.jquery) ? ve(g) : ve.event,
              y = ve.Deferred(),
              v = ve.Callbacks("once memory"),
              x = h.statusCode || {},
              A = {},
              w = {},
              b = "canceled",
              T = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!s)
                      for (s = {};
                        (t = It.exec(a));)
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return l ? a : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == l &&
                    ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (A[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == l && (h.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) T.always(e[T.status]);
                    else
                      for (t in e) x[t] = [x[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || b;
                  return o && o.abort(t), r(0, t), this;
                },
              };
            if (
              (y.promise(T),
                (h.url = ((e || h.url || Et.href) + "").replace(
                  _t,
                  Et.protocol + "//"
                )),
                (h.type = t.method || t.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(Le) || [
                  "",
                ]),
                null == h.crossDomain)
            ) {
              c = me.createElement("a");
              try {
                (c.href = h.url),
                (c.href = c.href),
                (h.crossDomain =
                  qt.protocol + "//" + qt.host != c.protocol + "//" + c.host);
              } catch (e) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = ve.param(h.data, h.traditional)),
                ee(jt, h, t, T),
                l)
            )
              return T;
            for (p in ((d = ve.event && h.global) &&
                0 == ve.active++ &&
                ve.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Ut.test(h.type)),
                (i = h.url.replace(Bt, "")),
                h.hasContent ?
                h.data &&
                h.processData &&
                0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                (h.data = h.data.replace(Pt, "+")) :
                ((f = h.url.slice(i.length)),
                  h.data &&
                  (h.processData || "string" == typeof h.data) &&
                  ((i += (Lt.test(i) ? "&" : "?") + h.data), delete h.data),
                  !1 === h.cache &&
                  ((i = i.replace(Dt, "$1")),
                    (f = (Lt.test(i) ? "&" : "?") + "_=" + Rt.guid++ + f)),
                  (h.url = i + f)),
                h.ifModified &&
                (ve.lastModified[i] &&
                  T.setRequestHeader("If-Modified-Since", ve.lastModified[i]),
                  ve.etag[i] && T.setRequestHeader("If-None-Match", ve.etag[i])),
                ((h.data && h.hasContent && !1 !== h.contentType) ||
                  t.contentType) &&
                T.setRequestHeader("Content-Type", h.contentType),
                T.setRequestHeader(
                  "Accept",
                  h.dataTypes[0] && h.accepts[h.dataTypes[0]] ?
                  h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") :
                  h.accepts["*"]
                ),
                h.headers))
              T.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, T, h) || l))
              return T.abort();
            if (
              ((b = "abort"),
                v.add(h.complete),
                T.done(h.success),
                T.fail(h.error),
                (o = ee(Ht, h, t, T)))
            ) {
              if (((T.readyState = 1), d && m.trigger("ajaxSend", [T, h]), l))
                return T;
              h.async &&
                h.timeout > 0 &&
                (u = n.setTimeout(function () {
                  T.abort("timeout");
                }, h.timeout));
              try {
                (l = !1), o.send(A, r);
              } catch (e) {
                if (l) throw e;
                r(-1, e);
              }
            } else r(-1, "No Transport");
            return T;
          },
          getJSON: function (e, t, n) {
            return ve.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return ve.get(e, void 0, t, "script");
          },
        }),
        ve.each(["get", "post"], function (e, t) {
          ve[t] = function (e, n, r, o) {
            return (
              he(n) && ((o = o || r), (r = n), (n = void 0)),
              ve.ajax(
                ve.extend({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: r,
                  },
                  ve.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        ve.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
            (e.contentType = e.headers[t] || "");
        }),
        (ve._evalUrl = function (e, t, n) {
          return ve.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
              "text script": function () {},
            },
            dataFilter: function (e) {
              ve.globalEval(e, t, n);
            },
          });
        }),
        ve.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
              (he(e) && (e = e.call(this[0])),
                (t = ve(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                .map(function () {
                  for (var e = this; e.firstElementChild;)
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return he(e) ?
              this.each(function (t) {
                ve(this).wrapInner(e.call(this, t));
              }) :
              this.each(function () {
                var t = ve(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
          },
          wrap: function (e) {
            var t = he(e);
            return this.each(function (n) {
              ve(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
              .not("body")
              .each(function () {
                ve(this).replaceWith(this.childNodes);
              }),
              this
            );
          },
        }),
        (ve.expr.pseudos.hidden = function (e) {
          return !ve.expr.pseudos.visible(e);
        }),
        (ve.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (ve.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Gt = {
          0: 200,
          1223: 204,
        },
        Kt = ve.ajaxSettings.xhr();
      (fe.cors = !!Kt && "withCredentials" in Kt),
      (fe.ajax = Kt = !!Kt),
      ve.ajaxTransport(function (e) {
          var t, r;
          if (fe.cors || (Kt && !e.crossDomain))
            return {
              send: function (o, i) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                    s.overrideMimeType &&
                    s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                    o["X-Requested-With"] ||
                    (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                  s.setRequestHeader(a, o[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                        "abort" === e ?
                        s.abort() :
                        "error" === e ?
                        "number" != typeof s.status ?
                        i(0, "error") :
                        i(s.status, s.statusText) :
                        i(
                          Gt[s.status] || s.status,
                          s.statusText,
                          "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText ? {
                            binary: s.response,
                          } : {
                            text: s.responseText,
                          },
                          s.getAllResponseHeaders()
                        ));
                  };
                }),
                (s.onload = t()),
                (r = s.onerror = s.ontimeout = t("error")),
                void 0 !== s.onabort ?
                  (s.onabort = r) :
                  (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      n.setTimeout(function () {
                        t && r();
                      });
                  }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        ve.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        ve.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: {
            script: /\b(?:java|ecma)script\b/,
          },
          converters: {
            "text script": function (e) {
              return ve.globalEval(e), e;
            },
          },
        }),
        ve.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        ve.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, o) {
                (t = ve("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({
                    charset: e.scriptCharset,
                    src: e.url,
                  })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                me.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
      ve.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Xt.pop() || ve.expando + "_" + Rt.guid++;
            return (this[e] = !0), e;
          },
        }),
        ve.ajaxPrefilter("json jsonp", function (e, t, r) {
          var o,
            i,
            a,
            s = !1 !== e.jsonp &&
            (Vt.test(e.url) ?
              "url" :
              "string" == typeof e.data &&
              0 ===
              (e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Vt.test(e.data) &&
              "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback = he(e.jsonpCallback) ?
                e.jsonpCallback() :
                e.jsonpCallback),
              s ?
              (e[s] = e[s].replace(Vt, "$1" + o)) :
              !1 !== e.jsonp &&
              (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return a || ve.error(o + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (i = n[o]),
              (n[o] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === i ? ve(n).removeProp(o) : (n[o] = i),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(o)),
                  a && he(i) && i(a[0]),
                  (a = i = void 0);
              }),
              "script"
            );
        }),
        (fe.createHTMLDocument = (function () {
          var e = me.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            2 === e.childNodes.length
          );
        })()),
        (ve.parseHTML = function (e, t, n) {
          return "string" != typeof e ? [] :
            ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
              (fe.createHTMLDocument ?
                (((r = (t = me.implementation.createHTMLDocument(
                    ""
                  )).createElement("base")).href = me.location.href),
                  t.head.appendChild(r)) :
                (t = me)),
              (o = Te.exec(e)),
              (i = !n && []),
              o ? [t.createElement(o[1])] :
              ((o = C([e], t, i)),
                i && i.length && ve(i).remove(),
                ve.merge([], o.childNodes)));
          var r, o, i;
        }),
        (ve.fn.load = function (e, t, n) {
          var r,
            o,
            i,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = J(e.slice(s))), (e = e.slice(0, s))),
            he(t) ?
            ((n = t), (t = void 0)) :
            t && "object" == typeof t && (o = "POST"),
            a.length > 0 &&
            ve
            .ajax({
              url: e,
              type: o || "GET",
              dataType: "html",
              data: t,
            })
            .done(function (e) {
              (i = arguments),
              a.html(r ? ve("<div>").append(ve.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
              function (e, t) {
                a.each(function () {
                  n.apply(this, i || [e.responseText, t, e]);
                });
              }
            ),
            this
          );
        }),
        (ve.expr.pseudos.animated = function (e) {
          return ve.grep(ve.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (ve.offset = {
          setOffset: function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u,
              c = ve.css(e, "position"),
              l = ve(e),
              d = {};
            "static" === c && (e.style.position = "relative"),
              (s = l.offset()),
              (i = ve.css(e, "top")),
              (u = ve.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (i + u).indexOf("auto") > -1 ?
              ((a = (r = l.position()).top), (o = r.left)) :
              ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
              he(t) && (t = t.call(e, n, ve.extend({}, s))),
              null != t.top && (d.top = t.top - s.top + a),
              null != t.left && (d.left = t.left - s.left + o),
              "using" in t ?
              t.using.call(e, d) :
              ("number" == typeof d.top && (d.top += "px"),
                "number" == typeof d.left && (d.left += "px"),
                l.css(d));
          },
        }),
        ve.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e ?
                this :
                this.each(function (t) {
                  ve.offset.setOffset(this, e, t);
                });
            var t,
              n,
              r = this[0];
            return r ?
              r.getClientRects().length ?
              ((t = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView), {
                  top: t.top + n.pageYOffset,
                  left: t.left + n.pageXOffset,
                }) : {
                top: 0,
                left: 0,
              } :
              void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                o = {
                  top: 0,
                  left: 0,
                };
              if ("fixed" === ve.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement; e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === ve.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((o = ve(e).offset()).top += ve.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (o.left += ve.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - ve.css(r, "marginTop", !0),
                left: t.left - o.left - ve.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent; e && "static" === ve.css(e, "position");

              )
                e = e.offsetParent;
              return e || qe;
            });
          },
        }),
        ve.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset",
          },
          function (e, t) {
            var n = "pageYOffset" === t;
            ve.fn[e] = function (r) {
              return Oe(
                this,
                function (e, r, o) {
                  var i;
                  return (
                    ge(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === o ?
                    i ?
                    i[t] :
                    e[r] :
                    void(i ?
                      i.scrollTo(
                        n ? i.pageXOffset : o,
                        n ? o : i.pageYOffset
                      ) :
                      (e[r] = o))
                  );
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        ve.each(["top", "left"], function (e, t) {
          ve.cssHooks[t] = _(fe.pixelPosition, function (e, n) {
            if (n)
              return (n = U(e, t)), ot.test(n) ? ve(e).position()[t] + "px" : n;
          });
        }),
        ve.each({
            Height: "height",
            Width: "width",
          },
          function (e, t) {
            ve.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e,
              },
              function (n, r) {
                ve.fn[r] = function (o, i) {
                  var a = arguments.length && (n || "boolean" != typeof o),
                    s = n || (!0 === o || !0 === i ? "margin" : "border");
                  return Oe(
                    this,
                    function (t, n, o) {
                      var i;
                      return ge(t) ?
                        0 === r.indexOf("outer") ?
                        t["inner" + e] :
                        t.document.documentElement["client" + e] :
                        9 === t.nodeType ?
                        ((i = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            i["scroll" + e],
                            t.body["offset" + e],
                            i["offset" + e],
                            i["client" + e]
                          )) :
                        void 0 === o ?
                        ve.css(t, n, s) :
                        ve.style(t, n, o, s);
                    },
                    t,
                    a ? o : void 0,
                    a
                  );
                };
              }
            );
          }
        ),
        ve.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            ve.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        ve.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length ?
              this.off(e, "**") :
              this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        ve.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            ve.fn[t] = function (e, n) {
              return arguments.length > 0 ?
                this.on(t, null, e, n) :
                this.trigger(t);
            };
          }
        );
      var Wt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (ve.proxy = function (e, t) {
        var n, r, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), he(e)))
          return (
            (r = oe.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, r.concat(oe.call(arguments)));
            }).guid = e.guid = e.guid || ve.guid++),
            o
          );
      }),
      (ve.holdReady = function (e) {
        e ? ve.readyWait++ : ve.ready(!0);
      }),
      (ve.isArray = Array.isArray),
      (ve.parseJSON = JSON.parse),
      (ve.nodeName = u),
      (ve.isFunction = he),
      (ve.isWindow = ge),
      (ve.camelCase = m),
      (ve.type = a),
      (ve.now = Date.now),
      (ve.isNumeric = function (e) {
        var t = ve.type(e);
        return (
          ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        );
      }),
      (ve.trim = function (e) {
        return null == e ? "" : (e + "").replace(Wt, "");
      }),
      void 0 ===
        (r = function () {
          return ve;
        }.apply(t, [])) || (e.exports = r);
      var zt = n.jQuery,
        Jt = n.$;
      return (
        (ve.noConflict = function (e) {
          return (
            n.$ === ve && (n.$ = Jt),
            e && n.jQuery === ve && (n.jQuery = zt),
            ve
          );
        }),
        void 0 === o && (n.jQuery = n.$ = ve),
        ve
      );
    });
  },
]);