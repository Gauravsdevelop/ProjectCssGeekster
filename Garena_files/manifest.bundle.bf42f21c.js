!(function () {
  "use strict";
  var e,
    n,
    t,
    r,
    o = {},
    i = {};
  function u(e) {
    var n = i[e];
    if (void 0 !== n) return n.exports;
    var t = (i[e] = { exports: {} });
    return o[e](t, t.exports, u), t.exports;
  }
  (u.m = o),
    (e = []),
    (u.O = function (n, t, r, o) {
      if (!t) {
        var i = 1 / 0;
        for (l = 0; l < e.length; l++) {
          (t = e[l][0]), (r = e[l][1]), (o = e[l][2]);
          for (var a = !0, f = 0; f < t.length; f++)
            (!1 & o || i >= o) &&
            Object.keys(u.O).every(function (e) {
              return u.O[e](t[f]);
            })
              ? t.splice(f--, 1)
              : ((a = !1), o < i && (i = o));
          if (a) {
            e.splice(l--, 1);
            var c = r();
            void 0 !== c && (n = c);
          }
        }
        return n;
      }
      o = o || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > o; l--) e[l] = e[l - 1];
      e[l] = [t, r, o];
    }),
    (u.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return u.d(n, { a: n }), n;
    }),
    (u.d = function (e, n) {
      for (var t in n)
        u.o(n, t) &&
          !u.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    }),
    (u.f = {}),
    (u.e = function (e) {
      return Promise.all(
        Object.keys(u.f).reduce(function (n, t) {
          return u.f[t](e, n), n;
        }, [])
      );
    }),
    (u.u = function (e) {
      return (
        "js/" +
        { 268: "Home", 462: "GPC", 677: "Support", 931: "async", 955: "Faq" }[
          e
        ] +
        ".chunk." +
        {
          268: "a098825d",
          462: "dd786ee5",
          677: "90f9c5fe",
          931: "c5ced1c1",
          955: "53b09dd8",
        }[e] +
        ".js"
      );
    }),
    (u.miniCssF = function (e) {
      return (
        "css/" +
        { 268: "Home", 462: "GPC", 677: "Support", 931: "async", 955: "Faq" }[
          e
        ] +
        "." +
        {
          268: "75d43eaee5ec3f92647b",
          462: "e5d0a4433b1a1fca2915",
          677: "46fcd55f95fb6bb8ad60",
          931: "a2b23e4870545d62607e",
          955: "cb0424ab41354b542815",
        }[e] +
        ".css"
      );
    }),
    (u.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (u.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (n = {}),
    (u.l = function (e, t, r, o) {
      if (n[e]) n[e].push(t);
      else {
        var i, a;
        if (void 0 !== r)
          for (
            var f = document.getElementsByTagName("script"), c = 0;
            c < f.length;
            c++
          ) {
            var l = f[c];
            if (l.getAttribute("src") == e) {
              i = l;
              break;
            }
          }
        i ||
          ((a = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          u.nc && i.setAttribute("nonce", u.nc),
          (i.src = e)),
          (n[e] = [t]);
        var d = function (t, r) {
            (i.onerror = i.onload = null), clearTimeout(s);
            var o = n[e];
            if (
              (delete n[e],
              i.parentNode && i.parentNode.removeChild(i),
              o &&
                o.forEach(function (e) {
                  return e(r);
                }),
              t)
            )
              return t(r);
          },
          s = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = d.bind(null, i.onerror)),
          (i.onload = d.bind(null, i.onload)),
          a && document.head.appendChild(i);
      }
    }),
    (u.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (u.p = "//contentgarena-a.akamaihd.net/garena-official/sg/"),
    (t = function (e) {
      return new Promise(function (n, t) {
        var r = u.miniCssF(e),
          o = u.p + r;
        if (
          (function (e, n) {
            for (
              var t = document.getElementsByTagName("link"), r = 0;
              r < t.length;
              r++
            ) {
              var o =
                (u = t[r]).getAttribute("data-href") || u.getAttribute("href");
              if ("stylesheet" === u.rel && (o === e || o === n)) return u;
            }
            var i = document.getElementsByTagName("style");
            for (r = 0; r < i.length; r++) {
              var u;
              if ((o = (u = i[r]).getAttribute("data-href")) === e || o === n)
                return u;
            }
          })(r, o)
        )
          return n();
        !(function (e, n, t, r, o) {
          var i = document.createElement("link");
          (i.rel = "stylesheet"),
            (i.type = "text/css"),
            (i.onerror = i.onload =
              function (t) {
                if (((i.onerror = i.onload = null), "load" === t.type)) r();
                else {
                  var u = t && ("load" === t.type ? "missing" : t.type),
                    a = (t && t.target && t.target.href) || n,
                    f = new Error(
                      "Loading CSS chunk " + e + " failed.\n(" + a + ")"
                    );
                  (f.code = "CSS_CHUNK_LOAD_FAILED"),
                    (f.type = u),
                    (f.request = a),
                    i.parentNode.removeChild(i),
                    o(f);
                }
              }),
            (i.href = n),
            t
              ? t.parentNode.insertBefore(i, t.nextSibling)
              : document.head.appendChild(i);
        })(e, o, null, n, t);
      });
    }),
    (r = { 700: 0 }),
    (u.f.miniCss = function (e, n) {
      r[e]
        ? n.push(r[e])
        : 0 !== r[e] &&
          { 268: 1, 462: 1, 677: 1, 931: 1, 955: 1 }[e] &&
          n.push(
            (r[e] = t(e).then(
              function () {
                r[e] = 0;
              },
              function (n) {
                throw (delete r[e], n);
              }
            ))
          );
    }),
    (function () {
      var e = { 700: 0 };
      (u.f.j = function (n, t) {
        var r = u.o(e, n) ? e[n] : void 0;
        if (0 !== r)
          if (r) t.push(r[2]);
          else if (700 != n) {
            var o = new Promise(function (t, o) {
              r = e[n] = [t, o];
            });
            t.push((r[2] = o));
            var i = u.p + u.u(n),
              a = new Error();
            u.l(
              i,
              function (t) {
                if (u.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0), r)) {
                  var o = t && ("load" === t.type ? "missing" : t.type),
                    i = t && t.target && t.target.src;
                  (a.message =
                    "Loading chunk " + n + " failed.\n(" + o + ": " + i + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = o),
                    (a.request = i),
                    r[1](a);
                }
              },
              "chunk-" + n,
              n
            );
          } else e[n] = 0;
      }),
        (u.O.j = function (n) {
          return 0 === e[n];
        });
      var n = function (n, t) {
          var r,
            o,
            i = t[0],
            a = t[1],
            f = t[2],
            c = 0;
          if (
            i.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (r in a) u.o(a, r) && (u.m[r] = a[r]);
            if (f) var l = f(u);
          }
          for (n && n(t); c < i.length; c++)
            (o = i[c]), u.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return u.O(l);
        },
        t = (self.webpackChunk = self.webpackChunk || []);
      t.forEach(n.bind(null, 0)), (t.push = n.bind(null, t.push.bind(t)));
    })();
})();
