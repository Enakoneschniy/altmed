function modalInit() {
    ! function() {
        function t() {
            $(function() {
                var t = [{
                    value: "lorem ipsum",
                    label: "lorem ipsum",
                    desc: "Статьи"
                }, {
                    value: "lorem-ipsun",
                    label: "lorem-ipsun",
                    desc: "Акции"
                }, {
                    value: "lorem-ips",
                    label: "lorem-ips",
                    desc: "Новости "
                }];
                $("#search").autocomplete({
                    minLength: 0,
                    source: t,
                    focus: function(t, e) {
                        return $("#search").val(e.item.label), !1
                    },
                    select: function(t, e) {
                        return $("#search").val(e.item.label), $("#search-id").val(e.item.value), $("#search-description").html(e.item.desc), !1
                    }
                }).data("ui-autocomplete")._renderItem = function(t, e) {
                    return $("<li>").append("<div class='link-wrap'><div>" + e.label + "</div><div class='desc-wrap'>" + e.desc + "</div></div>").appendTo(t)
                }
            })
        }
        $("#modal").on("show.bs.modal", function(e) {
            var i = $(e.relatedTarget);
            $(this).find(".modal-dialog").load(i.attr("data-link"), function() {
                t(), 1 == $(".modal-dialog .modal-content--search").length ? $(".modal-content--search").parents(".modal-dialog").addClass("modal-dialog--search") : 1 !== $(".modal-dialog .modal-content--search").length && $(".modal-content").parents(".modal-dialog").removeClass("modal-dialog--search")
            })
        })
    }()
}

function mySideNav() {
    function t() {
        var t = $(".side-nav"),
            e = $("body").width() - t.width(),
            i = t.width() + e / 2 + "px";
        $(".main-menu--side .close").css("left", i)
    }

    function e() {
        var t = $(".open-nav");
        t.sideNav(), t.on("click", function(t) {
            t.preventDefault(), $("body").removeClass("nav-hide"), $("body").addClass("nav-openned")
        })
    }

    function i() {
        $(".close-nav").on("click", function(t) {
            t.preventDefault(), $("#sidenav-overlay").trigger("click")
        })
    }

    function n() {
        $(".side-nav").mCustomScrollbar({
            theme: "dark"
        })
    }
    t(), e(), i(), n()
}

function sideNavCloseCenter() {
    var t = $(".side-nav"),
        e = $("body").width() - t.width(),
        i = t.width() + e / 2 + "px";
    $(".main-menu--side .close").css("left", i)
}

function tabsCarousel() {
    var t = $(".tabs-control-wrap"),
        e = t.find(".tabs-control"),
        i = (t.find(".tabs-control.slick-current"), $(".tabs-arrow-wrap")),
        n = i.find(".tabs-prev"),
        s = i.find(".tabs-next"),
        o = e.eq(0),
        a = e.eq(-1);
    e.length < 3 && o.hasClass("slick-current") && n.addClass("diss"), n.on("click", function(i) {
        function r(t) {
            var e = $("#tabs-container");
            t && t.length && (e.addClass("loading"), e.fadeOut("fast"), e.load(t.attr("data-link"), function(t, i) {
                "success" == i && (styler(), radioToggle()), e.removeClass("loading"), e.fadeIn("fast")
            }))
        }

        function r(t) {
            var e = $("#tabs-container");
            t && t.length && (e.addClass("loading"), e.fadeOut("fast"), e.load(t.attr("data-link"), function(t, i) {
                "success" == i && (styler(), radioToggle(), tabsOpen()), e.removeClass("loading"), e.fadeIn("fast")
            }))
        }
        i.preventDefault(), e.length < 3 ? (a.removeClass("slick-current"), o.addClass("slick-current"), s.removeClass("diss"), n.addClass("diss"), r($(".slick-current"))) : e.length > 2 && (t.slick("slickPrev"), r($(".slick-current")))
    }), s.on("click", function(i) {
        function r(t) {
            var e = $("#tabs-container");
            t && t.length && (e.addClass("loading"), e.fadeOut("fast"), e.load(t.attr("data-link"), function(t, i) {
                "success" == i && (styler(), radioToggle(), tabsOpen()), e.removeClass("loading"), e.fadeIn("fast")
            }))
        }

        function r(t) {
            var e = $("#tabs-container");
            t && t.length && (e.addClass("loading"), e.fadeOut("fast"), e.load(t.attr("data-link"), function(t, i) {
                "success" == i && (styler(), radioToggle(), tabsOpen()), e.removeClass("loading"), e.fadeIn("fast")
            }))
        }
        i.preventDefault(), e.length < 3 ? (o.removeClass("slick-current"), a.addClass("slick-current"), n.removeClass("diss"), s.addClass("diss"), r($(".slick-current"))) : e.length > 2 && (t.slick("slickNext"), r($(".slick-current")))
    })
}

function styler() {
    $(".md-select").styler(), $(".file-loader").styler(), $(".file-loader .jq-file__browse").text("Не более 5 мб"), $(".specialization-select .jq-selectbox__select-text").text("Специализация"), $(".types-diagnostic-select .jq-selectbox__select-text").text("Диагностика"), $(".types-vactination-select .jq-selectbox__select-text").text("Вакцинация"), $(".types-video-select .jq-selectbox__select-text").text("Наши видео"), $(".types-photo-select .jq-selectbox__select-text").text("Наши фото"), $(".types-complex-select .jq-selectbox__select-text").text("Комплексные программы"), $(".types-sales-select .jq-selectbox__select-text").text("Наши акции"), $(".types-vacancy-select .jq-selectbox__select-text").text("Все"), $(".types-articles-select .jq-selectbox__select-text").text("Все"), $(".vacancy-form-select .jq-selectbox__select-text").text("Все"), $(".feedback-form-select .jq-selectbox__select-text").text("Тип вопроса"), $(".day-select .jq-selectbox__select-text").text("Выберите дату")
}

function selectScroll() {
    $(".jq-selectbox__dropdown ul").mCustomScrollbar({
        theme: "dark",
        live: !0
    })
}

function radioToggle() {
    $(".md-radio-label").on("click", function() {
        $(this).parent().find(".md-radio-label").removeClass("checked"), $(this).addClass("checked")
    })
}

function mainContactLoad() {
    $("body").find("#ajax-map-content").load("ajax/tabs/main-contact.html")
}

function tabsOpen() {
    $('[data-toggle="tabajax"]:not(".disabled")').click(function(t) {
        var e = $(this),
            i = e.attr("href"),
            n = e.attr("data-target");
        return $.get(i, function(t) {
            $(n).html(t)
        }), e.tab("show"), !1
    })
}

function tabsOpen() {
    $('[data-toggle="tabajax"]:not(".disabled")').click(function(t) {
        var e = $(this),
            i = e.attr("href"),
            n = e.attr("data-target");
        return $.get(i, function(t) {
            $(n).html(t)
        }), e.tab("show"), !1
    })
}
if (! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = t.length,
                i = J.type(t);
            return "function" !== i && !J.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function n(t, e, i) {
            if (J.isFunction(e)) return J.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return J.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (rt.test(e)) return J.filter(e, t, i);
                e = J.filter(e, t)
            }
            return J.grep(t, function(t) {
                return Y.call(e, t) >= 0 !== i
            })
        }

        function s(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = ft[t] = {};
            return J.each(t.match(pt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function a() {
            G.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), J.ready()
        }

        function r() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = J.expando + Math.random()
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(_t, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : bt.test(i) ? J.parseJSON(i) : i)
                    } catch (s) {}
                    yt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function c() {
            return !0
        }

        function u() {
            return !1
        }

        function h() {
            try {
                return G.activeElement
            } catch (t) {}
        }

        function d(t, e) {
            return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function p(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function f(t) {
            var e = $t.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function m(t, e) {
            for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
        }

        function g(t, e) {
            var i, n, s, o, a, r, l, c;
            if (1 === e.nodeType) {
                if (vt.hasData(t) && (o = vt.access(t), a = vt.set(e, o), c = o.events)) {
                    delete a.handle, a.events = {};
                    for (s in c)
                        for (i = 0, n = c[s].length; n > i; i++) J.event.add(e, s, c[s][i])
                }
                yt.hasData(t) && (r = yt.access(t), l = J.extend({}, r), yt.set(e, l))
            }
        }

        function v(t, e) {
            var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], i) : i
        }

        function y(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Ct.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }

        function b(e, i) {
            var n, s = J(i.createElement(e)).appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : J.css(s[0], "display");
            return s.detach(), o
        }

        function _(t) {
            var e = G,
                i = Lt[t];
            return i || (i = b(t, e), "none" !== i && i || (jt = (jt || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = jt[0].contentDocument, e.write(), e.close(), i = b(t, e), jt.detach()), Lt[t] = i), i
        }

        function w(t, e, i) {
            var n, s, o, a, r = t.style;
            return i = i || Rt(t), i && (a = i.getPropertyValue(e) || i[e]), i && ("" !== a || J.contains(t.ownerDocument, t) || (a = J.style(t, e)), Ft.test(a) && qt.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function x(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function k(t, e) {
            if (e in t) return e;
            for (var i = e[0].toUpperCase() + e.slice(1), n = e, s = Qt.length; s--;)
                if (e = Qt[s] + i, e in t) return e;
            return n
        }

        function C(t, e, i) {
            var n = Vt.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function T(t, e, i, n, s) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += J.css(t, i + xt[o], !0, s)), n ? ("content" === i && (a -= J.css(t, "padding" + xt[o], !0, s)), "margin" !== i && (a -= J.css(t, "border" + xt[o] + "Width", !0, s))) : (a += J.css(t, "padding" + xt[o], !0, s), "padding" !== i && (a += J.css(t, "border" + xt[o] + "Width", !0, s)));
            return a
        }

        function S(t, e, i) {
            var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = Rt(t),
                a = "border-box" === J.css(t, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = w(t, e, o), (0 > s || null == s) && (s = t.style[e]), Ft.test(s)) return s;
                n = a && (K.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
            }
            return s + T(t, e, i || (a ? "border" : "content"), n, o) + "px"
        }

        function D(t, e) {
            for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++) n = t[a], n.style && (o[a] = vt.get(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && kt(n) && (o[a] = vt.access(n, "olddisplay", _(n.nodeName)))) : (s = kt(n), "none" === i && s || vt.set(n, "olddisplay", s ? i : J.css(n, "display"))));
            for (a = 0; r > a; a++) n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function P(t, e, i, n, s) {
            return new P.prototype.init(t, e, i, n, s)
        }

        function I() {
            return setTimeout(function() {
                Kt = void 0
            }), Kt = J.now()
        }

        function O(t, e) {
            var i, n = 0,
                s = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = xt[n], s["margin" + i] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s
        }

        function M(t, e, i) {
            for (var n, s = (ie[e] || []).concat(ie["*"]), o = 0, a = s.length; a > o; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function A(t, e, i) {
            var n, s, o, a, r, l, c, u, h = this,
                d = {},
                p = t.style,
                f = t.nodeType && kt(t),
                m = vt.get(t, "fxshow");
            i.queue || (r = J._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
                r.unqueued || l()
            }), r.unqueued++, h.always(function() {
                h.always(function() {
                    r.unqueued--, J.queue(t, "fx").length || r.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = J.css(t, "display"), u = "none" === c ? vt.get(t, "olddisplay") || _(t.nodeName) : c, "inline" === u && "none" === J.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (s = e[n], Zt.exec(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    d[n] = m && m[n] || J.style(t, n)
                } else c = void 0;
            if (J.isEmptyObject(d)) "inline" === ("none" === c ? _(t.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = vt.access(t, "fxshow", {}), o && (m.hidden = !f), f ? J(t).show() : h.done(function() {
                    J(t).hide()
                }), h.done(function() {
                    var e;
                    vt.remove(t, "fxshow");
                    for (e in d) J.style(t, e, d[e])
                });
                for (n in d) a = M(f ? m[n] : 0, n, h), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function E(t, e) {
            var i, n, s, o, a;
            for (i in t)
                if (n = J.camelCase(i), s = e[n], o = t[i], J.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = J.cssHooks[n], a && "expand" in a) {
                    o = a.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = s)
                } else e[n] = s
        }

        function N(t, e, i) {
            var n, s, o = 0,
                a = ee.length,
                r = J.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var e = Kt || I(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                    return r.notifyWith(t, [c, o, i]), 1 > o && l ? i : (r.resolveWith(t, [c]), !1)
                },
                c = r.promise({
                    elem: t,
                    props: J.extend({}, e),
                    opts: J.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Kt || I(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = J.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? r.resolveWith(t, [c, e]) : r.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (E(u, c.opts.specialEasing); a > o; o++)
                if (n = ee[o].call(c, t, u, c.opts)) return n;
            return J.map(u, M, c), J.isFunction(c.opts.start) && c.opts.start.call(t, c), J.fx.timer(J.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function H(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase().match(pt) || [];
                if (J.isFunction(i))
                    for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function $(t, e, i, n) {
            function s(r) {
                var l;
                return o[r] = !0, J.each(t[r] || [], function(t, r) {
                    var c = r(e, i, n);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                }), l
            }
            var o = {},
                a = t === we;
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function z(t, e) {
            var i, n, s = J.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && J.extend(!0, t, n), t
        }

        function W(t, e, i) {
            for (var n, s, o, a, r = t.contents, l = t.dataTypes;
                 "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (s in r)
                    if (r[s] && r[s].test(n)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in i) o = l[0];
            else {
                for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        o = s;
                        break
                    }
                    a || (a = s)
                }
                o = o || a
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }

        function j(t, e, i, n) {
            var s, o, a, r, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
            for (o = u.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                        if (a = c[l + " " + o] || c["* " + o], !a)
                            for (s in c)
                                if (r = s.split(" "), r[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                                    a === !0 ? a = c[s] : c[s] !== !0 && (o = r[0], u.unshift(r[1]));
                                    break
                                }
                        if (a !== !0)
                            if (a && t["throws"]) e = a(e);
                            else try {
                                e = a(e)
                            } catch (h) {
                                return {
                                    state: "parsererror",
                                    error: a ? h : "No conversion from " + l + " to " + o
                                }
                            }
                    }
            return {
                state: "success",
                data: e
            }
        }

        function L(t, e, i, n) {
            var s;
            if (J.isArray(e)) J.each(e, function(e, s) {
                i || Te.test(t) ? n(t, s) : L(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
            });
            else if (i || "object" !== J.type(e)) n(t, e);
            else
                for (s in e) L(t + "[" + s + "]", e[s], i, n)
        }

        function q(t) {
            return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var F = [],
            R = F.slice,
            B = F.concat,
            V = F.push,
            Y = F.indexOf,
            X = {},
            U = X.toString,
            Q = X.hasOwnProperty,
            K = {},
            G = t.document,
            Z = "2.1.1",
            J = function(t, e) {
                return new J.fn.init(t, e)
            },
            tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            et = /^-ms-/,
            it = /-([\da-z])/gi,
            nt = function(t, e) {
                return e.toUpperCase()
            };
        J.fn = J.prototype = {
            jquery: Z,
            constructor: J,
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : R.call(this)
            },
            pushStack: function(t) {
                var e = J.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return J.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(J.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: V,
            sort: F.sort,
            splice: F.splice
        }, J.extend = J.fn.extend = function() {
            var t, e, i, n, s, o, a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || J.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)
                if (null != (t = arguments[r]))
                    for (e in t) i = a[e], n = t[e], a !== n && (c && n && (J.isPlainObject(n) || (s = J.isArray(n))) ? (s ? (s = !1, o = i && J.isArray(i) ? i : []) : o = i && J.isPlainObject(i) ? i : {}, a[e] = J.extend(c, o, n)) : void 0 !== n && (a[e] = n));
            return a
        }, J.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === J.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !J.isArray(t) && t - parseFloat(t) >= 0
            },
            isPlainObject: function(t) {
                return "object" === J.type(t) && !t.nodeType && !J.isWindow(t) && !(t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[U.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(et, "ms-").replace(it, nt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var s, o = 0,
                    a = t.length,
                    r = i(t);
                if (n) {
                    if (r)
                        for (; a > o && (s = e.apply(t[o], n), s !== !1); o++);
                    else
                        for (o in t)
                            if (s = e.apply(t[o], n), s === !1) break
                } else if (r)
                    for (; a > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.call(t[o], o, t[o]), s === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : V.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : Y.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
                return t.length = s, t
            },
            grep: function(t, e, i) {
                for (var n, s = [], o = 0, a = t.length, r = !i; a > o; o++) n = !e(t[o], o), n !== r && s.push(t[o]);
                return s
            },
            map: function(t, e, n) {
                var s, o = 0,
                    a = t.length,
                    r = i(t),
                    l = [];
                if (r)
                    for (; a > o; o++) s = e(t[o], o, n), null != s && l.push(s);
                else
                    for (o in t) s = e(t[o], o, n), null != s && l.push(s);
                return B.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, s;
                return "string" == typeof e && (i = t[e], e = t, t = i), J.isFunction(t) ? (n = R.call(arguments, 2), s = function() {
                    return t.apply(e || this, n.concat(R.call(arguments)))
                }, s.guid = t.guid = t.guid || J.guid++, s) : void 0
            },
            now: Date.now,
            support: K
        }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            X["[object " + e + "]"] = e.toLowerCase()
        });
        var st = function(t) {
            function e(t, e, i, n) {
                var s, o, a, r, l, c, h, p, f, m;
                if ((e ? e.ownerDocument || e : L) !== A && M(e), e = e || A, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (r = e.nodeType) && 9 !== r) return [];
                if (N && !n) {
                    if (s = yt.exec(t))
                        if (a = s[1]) {
                            if (9 === r) {
                                if (o = e.getElementById(a), !o || !o.parentNode) return i;
                                if (o.id === a) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && W(e, o) && o.id === a) return i.push(o), i
                        } else {
                            if (s[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                            if ((a = s[3]) && w.getElementsByClassName && e.getElementsByClassName) return J.apply(i, e.getElementsByClassName(a)), i
                        }
                    if (w.qsa && (!H || !H.test(t))) {
                        if (p = h = j, f = e, m = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                            for (c = T(t), (h = e.getAttribute("id")) ? p = h.replace(_t, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + d(c[l]);
                            f = bt.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return J.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return D(t.replace(lt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[j] = !0, t
            }

            function s(t) {
                var e = A.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
            }

            function a(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function r(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function u(t) {
                return t && typeof t.getElementsByTagName !== X && t
            }

            function h() {}

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    o = F++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o)
                } : function(e, i, a) {
                    var r, l, c = [q, o];
                    if (a) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, a)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) {
                                if (l = e[j] || (e[j] = {}), (r = l[n]) && r[0] === q && r[1] === o) return c[2] = r[2];
                                if (l[n] = c, c[2] = t(e, i, a)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
                return n
            }

            function g(t, e, i, n, s) {
                for (var o, a = [], r = 0, l = t.length, c = null != e; l > r; r++)(o = t[r]) && (!i || i(o, n, s)) && (a.push(o), c && e.push(r));
                return a
            }

            function v(t, e, i, s, o, a) {
                return s && !s[j] && (s = v(s)), o && !o[j] && (o = v(o, a)), n(function(n, a, r, l) {
                    var c, u, h, d = [],
                        p = [],
                        f = a.length,
                        v = n || m(e || "*", r.nodeType ? [r] : r, []),
                        y = !t || !n && e ? v : g(v, d, t, r, l),
                        b = i ? o || (n ? t : f || s) ? [] : a : y;
                    if (i && i(y, b, r, l), s)
                        for (c = g(b, p), s(c, [], r, l), u = c.length; u--;)(h = c[u]) && (b[p[u]] = !(y[p[u]] = h));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(h = b[u]) && c.push(y[u] = h);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(h = b[u]) && (c = o ? et.call(n, h) : d[u]) > -1 && (n[c] = !(a[c] = h))
                        }
                    } else b = g(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b)
                })
            }

            function y(t) {
                for (var e, i, n, s = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], r = o ? 1 : 0, l = p(function(t) {
                    return t === e
                }, a, !0), c = p(function(t) {
                    return et.call(e, t) > -1
                }, a, !0), u = [function(t, i, n) {
                    return !o && (n || i !== P) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n))
                }]; s > r; r++)
                    if (i = x.relative[t[r].type]) u = [p(f(u), i)];
                    else {
                        if (i = x.filter[t[r].type].apply(null, t[r].matches), i[j]) {
                            for (n = ++r; s > n && !x.relative[t[n].type]; n++);
                            return v(r > 1 && f(u), r > 1 && d(t.slice(0, r - 1).concat({
                                    value: " " === t[r - 2].type ? "*" : ""
                                })).replace(lt, "$1"), i, n > r && y(t.slice(r, n)), s > n && y(t = t.slice(n)), s > n && d(t))
                        }
                        u.push(i)
                    }
                return f(u)
            }

            function b(t, i) {
                var s = i.length > 0,
                    o = t.length > 0,
                    a = function(n, a, r, l, c) {
                        var u, h, d, p = 0,
                            f = "0",
                            m = n && [],
                            v = [],
                            y = P,
                            b = n || o && x.find.TAG("*", c),
                            _ = q += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && (P = a !== A && a); f !== w && null != (u = b[f]); f++) {
                            if (o && u) {
                                for (h = 0; d = t[h++];)
                                    if (d(u, a, r)) {
                                        l.push(u);
                                        break
                                    }
                                c && (q = _)
                            }
                            s && ((u = !d && u) && p--, n && m.push(u))
                        }
                        if (p += f, s && f !== p) {
                            for (h = 0; d = i[h++];) d(m, v, a, r);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = G.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && (q = _, P = y), m
                    };
                return s ? n(a) : a
            }
            var _, w, x, k, C, T, S, D, P, I, O, M, A, E, N, H, $, z, W, j = "sizzle" + -new Date,
                L = t.document,
                q = 0,
                F = 0,
                R = i(),
                B = i(),
                V = i(),
                Y = function(t, e) {
                    return t === e && (O = !0), 0
                },
                X = "undefined",
                U = 1 << 31,
                Q = {}.hasOwnProperty,
                K = [],
                G = K.pop,
                Z = K.push,
                J = K.push,
                tt = K.slice,
                et = K.indexOf || function(t) {
                        for (var e = 0, i = this.length; i > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = st.replace("w", "w#"),
                at = "\\[" + nt + "*(" + st + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                rt = ":(" + st + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ht = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(rt),
                pt = new RegExp("^" + ot + "$"),
                ft = {
                    ID: new RegExp("^#(" + st + ")"),
                    CLASS: new RegExp("^\\.(" + st + ")"),
                    TAG: new RegExp("^(" + st.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + at),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + it + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                _t = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                xt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                };
            try {
                J.apply(K = tt.call(L.childNodes), L.childNodes), K[L.childNodes.length].nodeType
            } catch (kt) {
                J = {
                    apply: K.length ? function(t, e) {
                        Z.apply(t, tt.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, M = e.setDocument = function(t) {
                var e, i = t ? t.ownerDocument || t : L,
                    n = i.defaultView;
                return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, E = i.documentElement, N = !C(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                    M()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                    M()
                })), w.attributes = s(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = s(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(i.getElementsByClassName) && s(function(t) {
                        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                    }), w.getById = s(function(t) {
                    return E.appendChild(t).id = j, !i.getElementsByName || !i.getElementsByName(j).length
                }), w.getById ? (x.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && N) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        var i = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                        return typeof e.getElementsByClassName !== X && N ? e.getElementsByClassName(t) : void 0
                    }, $ = [], H = [], (w.qsa = vt.test(i.querySelectorAll)) && (s(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + it + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
                }), s(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
                })), (w.matchesSelector = vt.test(z = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && s(function(t) {
                    w.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), $.push("!=", rt)
                }), H = H.length && new RegExp(H.join("|")), $ = $.length && new RegExp($.join("|")), e = vt.test(E.compareDocumentPosition), W = e || vt.test(E.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, Y = e ? function(t, e) {
                    if (t === e) return O = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === L && W(L, t) ? -1 : e === i || e.ownerDocument === L && W(L, e) ? 1 : I ? et.call(I, t) - et.call(I, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return O = !0, 0;
                    var n, s = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!o || !r) return t === i ? -1 : e === i ? 1 : o ? -1 : r ? 1 : I ? et.call(I, t) - et.call(I, e) : 0;
                    if (o === r) return a(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (; l[s] === c[s];) s++;
                    return s ? a(l[s], c[s]) : l[s] === L ? -1 : c[s] === L ? 1 : 0
                }, i) : A
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== A && M(t), i = i.replace(ht, "='$1']"), !(!w.matchesSelector || !N || $ && $.test(i) || H && H.test(i))) try {
                    var n = z.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (s) {}
                return e(i, A, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== A && M(t), W(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== A && M(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && Q.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
                return void 0 !== n ? n : w.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (O = !w.detectDuplicates, I = !w.sortStable && t.slice(0), t.sort(Y), O) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return I = null, t
            }, k = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += k(e);
                return i
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && dt.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = R[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && R(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(t, i, n) {
                        return function(s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            r = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, u, h, d, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = r && e.nodeName.toLowerCase(),
                                y = !l && !r;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (r ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (u = g[j] || (g[j] = {}), c = u[t] || [], p = c[0] === q && c[1], d = c[0] === q && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (d = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++d && h === e) {
                                            u[t] = [q, p, d];
                                            break
                                        }
                                } else if (y && (c = (e[j] || (e[j] = {}))[t]) && c[0] === q) d = c[1];
                                else
                                    for (;
                                        (h = ++p && h && h[m] || (d = p = 0) || f.pop()) && ((r ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[j] || (h[j] = {}))[t] = [q, d]), h !== e)););
                                return d -= s, d === n || d % n === 0 && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[j] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, s = o(t, i), a = s.length; a--;) n = et.call(t, s[a]), t[n] = !(e[n] = s[a])
                        }) : function(t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            s = S(t.replace(lt, "$1"));
                        return s[j] ? n(function(t, e, i, n) {
                            for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, s(e, null, o, i), !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                    }),
                    lang: n(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === E
                    },
                    focus: function(t) {
                        return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[_] = r(_);
            for (_ in {
                submit: !0,
                reset: !0
            }) x.pseudos[_] = l(_);
            return h.prototype = x.filters = x.pseudos, x.setFilters = new h, T = e.tokenize = function(t, i) {
                var n, s, o, a, r, l, c, u = B[t + " "];
                if (u) return i ? 0 : u.slice(0);
                for (r = t, l = [], c = x.preFilter; r;) {
                    (!n || (s = ct.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = ut.exec(r)) && (n = s.shift(), o.push({
                        value: n,
                        type: s[0].replace(lt, " ")
                    }), r = r.slice(n.length));
                    for (a in x.filter) !(s = ft[a].exec(r)) || c[a] && !(s = c[a](s)) || (n = s.shift(), o.push({
                        value: n,
                        type: a,
                        matches: s
                    }), r = r.slice(n.length));
                    if (!n) break
                }
                return i ? r.length : r ? e.error(t) : B(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var i, n = [],
                    s = [],
                    o = V[t + " "];
                if (!o) {
                    for (e || (e = T(t)), i = e.length; i--;) o = y(e[i]), o[j] ? n.push(o) : s.push(o);
                    o = V(t, b(s, n)), o.selector = t
                }
                return o
            }, D = e.select = function(t, e, i, n) {
                var s, o, a, r, l, c = "function" == typeof t && t,
                    h = !n && T(t = c.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && N && x.relative[o[1].type]) {
                        if (e = (x.find.ID(a.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (s = ft.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !x.relative[r = a.type]);)
                        if ((l = x.find[r]) && (n = l(a.matches[0].replace(wt, xt), bt.test(o[0].type) && u(e.parentNode) || e))) {
                            if (o.splice(s, 1), t = n.length && d(o), !t) return J.apply(i, n), i;
                            break
                        }
                }
                return (c || S(t, h))(n, e, !N, i, bt.test(t) && u(e.parentNode) || e), i
            }, w.sortStable = j.split("").sort(Y).join("") === j, w.detectDuplicates = !!O, M(), w.sortDetached = s(function(t) {
                return 1 & t.compareDocumentPosition(A.createElement("div"))
            }), s(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && s(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), s(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(it, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        J.find = st, J.expr = st.selectors, J.expr[":"] = J.expr.pseudos, J.unique = st.uniqueSort, J.text = st.getText, J.isXMLDoc = st.isXML, J.contains = st.contains;
        var ot = J.expr.match.needsContext,
            at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            rt = /^.[^:#\[\.,]*$/;
        J.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? J.find.matchesSelector(n, t) ? [n] : [] : J.find.matches(t, J.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, J.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    s = this;
                if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (J.contains(s[e], this)) return !0
                }));
                for (e = 0; i > e; e++) J.find(t, s[e], n);
                return n = this.pushStack(i > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && ot.test(t) ? J(t) : t || [], !1).length
            }
        });
        var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ut = J.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), at.test(i[1]) && J.isPlainObject(e))
                            for (i in e) J.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return n = G.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = G, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
            };
        ut.prototype = J.fn, lt = J(G);
        var ht = /^(?:parents|prev(?:Until|All))/,
            dt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        J.extend({
            dir: function(t, e, i) {
                for (var n = [], s = void 0 !== i;
                     (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (s && J(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), J.fn.extend({
            has: function(t) {
                var e = J(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (J.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, s = this.length, o = [], a = ot.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; s > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? J.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? Y.call(J(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), J.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return J.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return J.dir(t, "parentNode", i)
            },
            next: function(t) {
                return s(t, "nextSibling")
            },
            prev: function(t) {
                return s(t, "previousSibling")
            },
            nextAll: function(t) {
                return J.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return J.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return J.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return J.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return J.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return J.sibling(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || J.merge([], t.childNodes)
            }
        }, function(t, e) {
            J.fn[t] = function(i, n) {
                var s = J.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = J.filter(n, s)), this.length > 1 && (dt[t] || J.unique(s), ht.test(t) && s.reverse()), this.pushStack(s)
            }
        });
        var pt = /\S+/g,
            ft = {};
        J.Callbacks = function(t) {
            t = "string" == typeof t ? ft[t] || o(t) : J.extend({}, t);
            var e, i, n, s, a, r, l = [],
                c = !t.once && [],
                u = function(o) {
                    for (e = t.memory && o, i = !0, r = s || 0, s = 0, a = l.length, n = !0; l && a > r; r++)
                        if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    n = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(e) {
                                J.each(e, function(e, i) {
                                    var n = J.type(i);
                                    "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments), n ? a = l.length : e && (s = i, u(e))
                        }
                        return this
                    },
                    remove: function() {
                        return l && J.each(arguments, function(t, e) {
                            for (var i;
                                 (i = J.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (a >= i && a--, r >= i && r--)
                        }), this
                    },
                    has: function(t) {
                        return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], a = 0, this
                    },
                    disable: function() {
                        return l = c = e = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, e || h.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !l || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : u(e)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return h
        }, J.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", J.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return J.Deferred(function(i) {
                                J.each(e, function(e, o) {
                                    var a = J.isFunction(t[e]) && t[e];
                                    s[o[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && J.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? J.extend(t, n) : n
                        }
                    },
                    s = {};
                return n.pipe = n.then, J.each(e, function(t, o) {
                    var a = o[2],
                        r = o[3];
                    n[o[1]] = a.add, r && a.add(function() {
                        i = r
                    }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                        return s[o[0] + "With"](this === s ? n : this, arguments), this
                    }, s[o[0] + "With"] = a.fireWith
                }), n.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var e, i, n, s = 0,
                    o = R.call(arguments),
                    a = o.length,
                    r = 1 !== a || t && J.isFunction(t.promise) ? a : 0,
                    l = 1 === r ? t : J.Deferred(),
                    c = function(t, i, n) {
                        return function(s) {
                            i[t] = this, n[t] = arguments.length > 1 ? R.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) o[s] && J.isFunction(o[s].promise) ? o[s].promise().done(c(s, n, o)).fail(l.reject).progress(c(s, i, e)) : --r;
                return r || l.resolveWith(n, o), l.promise()
            }
        });
        var mt;
        J.fn.ready = function(t) {
            return J.ready.promise().done(t), this
        }, J.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? J.readyWait++ : J.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (mt.resolveWith(G, [J]), J.fn.triggerHandler && (J(G).triggerHandler("ready"), J(G).off("ready"))))
            }
        }), J.ready.promise = function(e) {
            return mt || (mt = J.Deferred(), "complete" === G.readyState ? setTimeout(J.ready) : (G.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), mt.promise(e)
        }, J.ready.promise();
        var gt = J.access = function(t, e, i, n, s, o, a) {
            var r = 0,
                l = t.length,
                c = null == i;
            if ("object" === J.type(i)) {
                s = !0;
                for (r in i) J.access(t, e, r, i[r], !0, o, a)
            } else if (void 0 !== n && (s = !0, J.isFunction(n) || (a = !0), c && (a ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(J(t), i)
                })), e))
                for (; l > r; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        };
        J.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, r.uid = 1, r.accepts = J.acceptData, r.prototype = {
            key: function(t) {
                if (!r.accepts(t)) return 0;
                var e = {},
                    i = t[this.expando];
                if (!i) {
                    i = r.uid++;
                    try {
                        e[this.expando] = {
                            value: i
                        }, Object.defineProperties(t, e)
                    } catch (n) {
                        e[this.expando] = i, J.extend(t, e)
                    }
                }
                return this.cache[i] || (this.cache[i] = {}), i
            },
            set: function(t, e, i) {
                var n, s = this.key(t),
                    o = this.cache[s];
                if ("string" == typeof e) o[e] = i;
                else if (J.isEmptyObject(o)) J.extend(this.cache[s], e);
                else
                    for (n in e) o[n] = e[n];
                return o
            },
            get: function(t, e) {
                var i = this.cache[this.key(t)];
                return void 0 === e ? i : i[e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, J.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, s, o = this.key(t),
                    a = this.cache[o];
                if (void 0 === e) this.cache[o] = {};
                else {
                    J.isArray(e) ? n = e.concat(e.map(J.camelCase)) : (s = J.camelCase(e), e in a ? n = [e, s] : (n = s, n = n in a ? [n] : n.match(pt) || [])), i = n.length;
                    for (; i--;) delete a[n[i]]
                }
            },
            hasData: function(t) {
                return !J.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var vt = new r,
            yt = new r,
            bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            _t = /([A-Z])/g;
        J.extend({
            hasData: function(t) {
                return yt.hasData(t) || vt.hasData(t)
            },
            data: function(t, e, i) {
                return yt.access(t, e, i)
            },
            removeData: function(t, e) {
                yt.remove(t, e)
            },
            _data: function(t, e, i) {
                return vt.access(t, e, i)
            },
            _removeData: function(t, e) {
                vt.remove(t, e)
            }
        }), J.fn.extend({
            data: function(t, e) {
                var i, n, s, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                        for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = J.camelCase(n.slice(5)), l(o, n, s[n])));
                        vt.set(o, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    yt.set(this, t)
                }) : gt(this, function(e) {
                    var i, n = J.camelCase(t);
                    if (o && void 0 === e) {
                        if (i = yt.get(o, t), void 0 !== i) return i;
                        if (i = yt.get(o, n), void 0 !== i) return i;
                        if (i = l(o, n, void 0), void 0 !== i) return i
                    } else this.each(function() {
                        var i = yt.get(this, n);
                        yt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && yt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    yt.remove(this, t)
                })
            }
        }), J.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || J.isArray(i) ? n = vt.access(t, e, J.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = J.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = J._queueHooks(t, e),
                    a = function() {
                        J.dequeue(t, e)
                    };
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return vt.get(t, i) || vt.access(t, i, {
                        empty: J.Callbacks("once memory").add(function() {
                            vt.remove(t, [e + "queue", i])
                        })
                    })
            }
        }), J.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = J.queue(this, t, e);
                    J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    J.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    s = J.Deferred(),
                    o = this,
                    a = this.length,
                    r = function() {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = vt.get(o[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
                return r(), s.promise(e)
            }
        });
        var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xt = ["Top", "Right", "Bottom", "Left"],
            kt = function(t, e) {
                return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
            },
            Ct = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = G.createDocumentFragment(),
                e = t.appendChild(G.createElement("div")),
                i = G.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Tt = "undefined";
        K.focusinBubbles = "onfocusin" in t;
        var St = /^key/,
            Dt = /^(?:mouse|pointer|contextmenu)|click/,
            Pt = /^(?:focusinfocus|focusoutblur)$/,
            It = /^([^.]*)(?:\.(.+)|)$/;
        J.event = {
            global: {},
            add: function(t, e, i, n, s) {
                var o, a, r, l, c, u, h, d, p, f, m, g = vt.get(t);
                if (g)
                    for (i.handler && (o = i, i = o.handler, s = o.selector), i.guid || (i.guid = J.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                        return typeof J !== Tt && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(pt) || [""], c = e.length; c--;) r = It.exec(e[c]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (h = J.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = J.event.special[p] || {}, u = J.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && J.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, a) !== !1 || t.addEventListener && t.addEventListener(p, a, !1)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), J.event.global[p] = !0)
            },
            remove: function(t, e, i, n, s) {
                var o, a, r, l, c, u, h, d, p, f, m, g = vt.hasData(t) && vt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(pt) || [""], c = e.length; c--;)
                        if (r = It.exec(e[c]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                            for (h = J.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, d = l[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) u = d[o], !s && m !== u.origType || i && i.guid !== u.guid || r && !r.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                            a && !d.length && (h.teardown && h.teardown.call(t, f, g.handle) !== !1 || J.removeEvent(t, p, g.handle), delete l[p])
                        } else
                            for (p in l) J.event.remove(t, p + e[c], i, n, !0);
                    J.isEmptyObject(l) && (delete g.handle, vt.remove(t, "events"))
                }
            },
            trigger: function(e, i, n, s) {
                var o, a, r, l, c, u, h, d = [n || G],
                    p = Q.call(e, "type") ? e.type : e,
                    f = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = r = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !Pt.test(p + J.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[J.expando] ? e : new J.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : J.makeArray(i, [e]), h = J.event.special[p] || {}, s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                    if (!s && !h.noBubble && !J.isWindow(n)) {
                        for (l = h.delegateType || p, Pt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), r = a;
                        r === (n.ownerDocument || G) && d.push(r.defaultView || r.parentWindow || t)
                    }
                    for (o = 0;
                         (a = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || p, u = (vt.get(a, "events") || {})[e.type] && vt.get(a, "handle"), u && u.apply(a, i), u = c && a[c], u && u.apply && J.acceptData(a) && (e.result = u.apply(a, i), e.result === !1 && e.preventDefault());
                    return e.type = p, s || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), i) !== !1 || !J.acceptData(n) || c && J.isFunction(n[p]) && !J.isWindow(n) && (r = n[c], r && (n[c] = null), J.event.triggered = p, n[p](), J.event.triggered = void 0, r && (n[c] = r)), e.result
                }
            },
            dispatch: function(t) {
                t = J.event.fix(t);
                var e, i, n, s, o, a = [],
                    r = R.call(arguments),
                    l = (vt.get(this, "events") || {})[t.type] || [],
                    c = J.event.special[t.type] || {};
                if (r[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = J.event.handlers.call(this, t, l), e = 0;
                         (s = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, i = 0;
                             (o = s.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, n = ((J.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, r), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, s, o, a = [],
                    r = e.delegateCount,
                    l = t.target;
                if (r && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== t.type) {
                            for (n = [], i = 0; r > i; i++) o = e[i], s = o.selector + " ", void 0 === n[s] && (n[s] = o.needsContext ? J(s, this).index(l) >= 0 : J.find(s, this, null, [l]).length), n[s] && n.push(o);
                            n.length && a.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return r < e.length && a.push({
                    elem: this,
                    handlers: e.slice(r)
                }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, s, o = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || G, n = i.documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[J.expando]) return t;
                var e, i, n, s = t.type,
                    o = t,
                    a = this.fixHooks[s];
                for (a || (this.fixHooks[s] = a = Dt.test(s) ? this.mouseHooks : St.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new J.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== h() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return J.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, n) {
                var s = J.extend(new J.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? J.event.trigger(s, null, e) : J.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
            }
        }, J.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        }, J.Event = function(t, e) {
            return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
        }, J.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            J.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return (!s || s !== n && !J.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), K.focusinBubbles || J.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                J.event.simulate(e, t.target, J.event.fix(t), !0)
            };
            J.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        s = vt.access(n, e);
                    s || n.addEventListener(t, i, !0), vt.access(n, e, (s || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        s = vt.access(n, e) - 1;
                    s ? vt.access(n, e, s) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
                }
            }
        }), J.fn.extend({
            on: function(t, e, i, n, s) {
                var o, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (a in t) this.on(a, e, i, t[a], s);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = u;
                else if (!n) return this;
                return 1 === s && (o = n, n = function(t) {
                    return J().off(t), o.apply(this, arguments)
                }, n.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                    J.event.add(this, t, n, i, e)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = u), this.each(function() {
                    J.event.remove(this, t, i, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    J.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? J.event.trigger(t, e, i, !0) : void 0
            }
        });
        var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Mt = /<([\w:]+)/,
            At = /<|&#?\w+;/,
            Et = /<(?:script|style|link)/i,
            Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ht = /^$|\/(?:java|ecma)script/i,
            $t = /^true\/(.*)/,
            zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Wt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Wt.optgroup = Wt.option, Wt.tbody = Wt.tfoot = Wt.colgroup = Wt.caption = Wt.thead, Wt.th = Wt.td, J.extend({
            clone: function(t, e, i) {
                var n, s, o, a, r = t.cloneNode(!0),
                    l = J.contains(t.ownerDocument, t);
                if (!(K.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                    for (a = v(r), o = v(t), n = 0, s = o.length; s > n; n++) y(o[n], a[n]);
                if (e)
                    if (i)
                        for (o = o || v(t), a = a || v(r), n = 0, s = o.length; s > n; n++) g(o[n], a[n]);
                    else g(t, r);
                return a = v(r, "script"), a.length > 0 && m(a, !l && v(t, "script")), r
            },
            buildFragment: function(t, e, i, n) {
                for (var s, o, a, r, l, c, u = e.createDocumentFragment(), h = [], d = 0, p = t.length; p > d; d++)
                    if (s = t[d], s || 0 === s)
                        if ("object" === J.type(s)) J.merge(h, s.nodeType ? [s] : s);
                        else if (At.test(s)) {
                            for (o = o || u.appendChild(e.createElement("div")), a = (Mt.exec(s) || ["", ""])[1].toLowerCase(), r = Wt[a] || Wt._default, o.innerHTML = r[1] + s.replace(Ot, "<$1></$2>") + r[2], c = r[0]; c--;) o = o.lastChild;
                            J.merge(h, o.childNodes), o = u.firstChild, o.textContent = ""
                        } else h.push(e.createTextNode(s));
                for (u.textContent = "", d = 0; s = h[d++];)
                    if ((!n || -1 === J.inArray(s, n)) && (l = J.contains(s.ownerDocument, s), o = v(u.appendChild(s), "script"), l && m(o), i))
                        for (c = 0; s = o[c++];) Ht.test(s.type || "") && i.push(s);
                return u
            },
            cleanData: function(t) {
                for (var e, i, n, s, o = J.event.special, a = 0; void 0 !== (i = t[a]); a++) {
                    if (J.acceptData(i) && (s = i[vt.expando], s && (e = vt.cache[s]))) {
                        if (e.events)
                            for (n in e.events) o[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
                        vt.cache[s] && delete vt.cache[s]
                    }
                    delete yt.cache[i[yt.expando]]
                }
            }
        }), J.fn.extend({
            text: function(t) {
                return gt(this, function(t) {
                    return void 0 === t ? J.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var i, n = t ? J.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || J.cleanData(v(i)), i.parentNode && (e && J.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return J.clone(this, t, e)
                })
            },
            html: function(t) {
                return gt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Et.test(t) && !Wt[(Mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Ot, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (s) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = B.apply([], t);
                var i, n, s, o, a, r, l = 0,
                    c = this.length,
                    u = this,
                    h = c - 1,
                    d = t[0],
                    m = J.isFunction(d);
                if (m || c > 1 && "string" == typeof d && !K.checkClone && Nt.test(d)) return this.each(function(i) {
                    var n = u.eq(i);
                    m && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
                });
                if (c && (i = J.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (s = J.map(v(i, "script"), p), o = s.length; c > l; l++) a = i, l !== h && (a = J.clone(a, !0, !0), o && J.merge(s, v(a, "script"))), e.call(this[l], a, l);
                    if (o)
                        for (r = s[s.length - 1].ownerDocument, J.map(s, f), l = 0; o > l; l++) a = s[l], Ht.test(a.type || "") && !vt.access(a, "globalEval") && J.contains(r, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(zt, "")))
                }
                return this
            }
        }), J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            J.fn[t] = function(t) {
                for (var i, n = [], s = J(t), o = s.length - 1, a = 0; o >= a; a++) i = a === o ? this : this.clone(!0), J(s[a])[e](i), V.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var jt, Lt = {},
            qt = /^margin/,
            Ft = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
            Rt = function(t) {
                return t.ownerDocument.defaultView.getComputedStyle(t, null)
            };
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", s.appendChild(o);
                var e = t.getComputedStyle(a, null);
                i = "1%" !== e.top, n = "4px" === e.width, s.removeChild(o)
            }
            var i, n, s = G.documentElement,
                o = G.createElement("div"),
                a = G.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), t.getComputedStyle && J.extend(K, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    var e, i = a.appendChild(G.createElement("div"));
                    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", s.appendChild(o), e = !parseFloat(t.getComputedStyle(i, null).marginRight), s.removeChild(o), e
                }
            }))
        }(), J.swap = function(t, e, i, n) {
            var s, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = a[o];
            return s
        };
        var Bt = /^(none|table(?!-c[ea]).+)/,
            Vt = new RegExp("^(" + wt + ")(.*)$", "i"),
            Yt = new RegExp("^([+-])=(" + wt + ")", "i"),
            Xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ut = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Qt = ["Webkit", "O", "Moz", "ms"];
        J.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = w(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, a, r = J.camelCase(e),
                        l = t.style;
                    return e = J.cssProps[r] || (J.cssProps[r] = k(l, r)), a = J.cssHooks[e] || J.cssHooks[r], void 0 === i ? a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e] : (o = typeof i, "string" === o && (s = Yt.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(J.css(t, e)), o = "number"), void(null != i && i === i && ("number" !== o || J.cssNumber[r] || (i += "px"), K.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                    a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var s, o, a, r = J.camelCase(e);
                return e = J.cssProps[r] || (J.cssProps[r] = k(t.style, r)), a = J.cssHooks[e] || J.cssHooks[r], a && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = w(t, e, n)), "normal" === s && e in Ut && (s = Ut[e]), "" === i || i ? (o = parseFloat(s), i === !0 || J.isNumeric(o) ? o || 0 : s) : s
            }
        }), J.each(["height", "width"], function(t, e) {
            J.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Bt.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Xt, function() {
                        return S(t, e, n)
                    }) : S(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var s = n && Rt(t);
                    return C(t, i, n ? T(t, e, n, "border-box" === J.css(t, "boxSizing", !1, s), s) : 0)
                }
            }
        }), J.cssHooks.marginRight = x(K.reliableMarginRight, function(t, e) {
            return e ? J.swap(t, {
                display: "inline-block"
            }, w, [t, "marginRight"]) : void 0
        }), J.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            J.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + xt[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            }, qt.test(t) || (J.cssHooks[t + e].set = C)
        }), J.fn.extend({
            css: function(t, e) {
                return gt(this, function(t, e, i) {
                    var n, s, o = {},
                        a = 0;
                    if (J.isArray(e)) {
                        for (n = Rt(t), s = e.length; s > a; a++) o[e[a]] = J.css(t, e[a], !1, n);
                        return o
                    }
                    return void 0 !== i ? J.style(t, e, i) : J.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    kt(this) ? J(this).show() : J(this).hide()
                })
            }
        }), J.Tween = P, P.prototype = {
            constructor: P,
            init: function(t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (J.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = P.propHooks[this.prop];
                return t && t.get ? t.get(this) : P.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = P.propHooks[this.prop];
                return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : P.propHooks._default.set(this), this
            }
        }, P.prototype.init.prototype = P.prototype, P.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, J.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, J.fx = P.prototype.init, J.fx.step = {};
        var Kt, Gt, Zt = /^(?:toggle|show|hide)$/,
            Jt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
            te = /queueHooks$/,
            ee = [A],
            ie = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = Jt.exec(e),
                        o = s && s[3] || (J.cssNumber[t] ? "" : "px"),
                        a = (J.cssNumber[t] || "px" !== o && +n) && Jt.exec(J.css(i.elem, t)),
                        r = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], s = s || [], a = +n || 1;
                        do r = r || ".5", a /= r, J.style(i.elem, t, a + o); while (r !== (r = i.cur() / n) && 1 !== r && --l)
                    }
                    return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i
                }]
            };
        J.Animation = J.extend(N, {
            tweener: function(t, e) {
                J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, s = t.length; s > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ee.unshift(t) : ee.push(t)
            }
        }), J.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? J.extend({}, t) : {
                complete: i || !i && e || J.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !J.isFunction(e) && e
            };
            return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
            }, n
        }, J.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(kt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = J.isEmptyObject(t),
                    o = J.speed(e, i, n),
                    a = function() {
                        var e = N(this, J.extend({}, t), o);
                        (s || vt.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = J.timers,
                        a = vt.get(this);
                    if (s) a[s] && a[s].stop && n(a[s]);
                    else
                        for (s in a) a[s] && a[s].stop && te.test(s) && n(a[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                    (e || !i) && J.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = vt.get(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = J.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, J.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function(t, e) {
            var i = J.fn[e];
            J.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(O(e, !0), t, n, s)
            }
        }), J.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            J.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), J.timers = [], J.fx.tick = function() {
            var t, e = 0,
                i = J.timers;
            for (Kt = J.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || J.fx.stop(), Kt = void 0
        }, J.fx.timer = function(t) {
            J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function() {
            Gt || (Gt = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function() {
            clearInterval(Gt), Gt = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function(t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
            function() {
                var t = G.createElement("input"),
                    e = G.createElement("select"),
                    i = e.appendChild(G.createElement("option"));
                t.type = "checkbox", K.checkOn = "" !== t.value, K.optSelected = i.selected, e.disabled = !0, K.optDisabled = !i.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", K.radioValue = "t" === t.value
            }();
        var ne, se, oe = J.expr.attrHandle;
        J.fn.extend({
            attr: function(t, e) {
                return gt(this, J.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    J.removeAttr(this, t)
                })
            }
        }), J.extend({
            attr: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Tt ? J.prop(t, e, i) : (1 === o && J.isXMLDoc(t) || (e = e.toLowerCase(), n = J.attrHooks[e] || (J.expr.match.bool.test(e) ? se : ne)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = J.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void J.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var i, n, s = 0,
                    o = e && e.match(pt);
                if (o && 1 === t.nodeType)
                    for (; i = o[s++];) n = J.propFix[i] || i, J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!K.radioValue && "radio" === e && J.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), se = {
            set: function(t, e, i) {
                return e === !1 ? J.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = oe[e] || J.find.attr;
            oe[e] = function(t, e, n) {
                var s, o;
                return n || (o = oe[e], oe[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, oe[e] = o), s
            }
        });
        var ae = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({
            prop: function(t, e) {
                return gt(this, J.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[J.propFix[t] || t]
                })
            }
        }), J.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, i) {
                var n, s, o, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !J.isXMLDoc(t), o && (e = J.propFix[e] || e, s = J.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || ae.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), K.optSelected || (J.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            J.propFix[this.toLowerCase()] = this
        });
        var re = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function(t) {
                var e, i, n, s, o, a, r = "string" == typeof t && t,
                    l = 0,
                    c = this.length;
                if (J.isFunction(t)) return this.each(function(e) {
                    J(this).addClass(t.call(this, e, this.className))
                });
                if (r)
                    for (e = (t || "").match(pt) || []; c > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(re, " ") : " ")) {
                            for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            a = J.trim(n), i.className !== a && (i.className = a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, s, o, a, r = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    c = this.length;
                if (J.isFunction(t)) return this.each(function(e) {
                    J(this).removeClass(t.call(this, e, this.className))
                });
                if (r)
                    for (e = (t || "").match(pt) || []; c > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(re, " ") : "")) {
                            for (o = 0; s = e[o++];)
                                for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                            a = t ? J.trim(n) : "", i.className !== a && (i.className = a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function(i) {
                    J(this).toggleClass(t.call(this, i, this.className, e), e)
                } : function() {
                    if ("string" === i)
                        for (var e, n = 0, s = J(this), o = t.match(pt) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else(i === Tt || "boolean" === i) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(re, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var le = /\r/g;
        J.fn.extend({
            val: function(t) {
                var e, i, n, s = this[0];
                return arguments.length ? (n = J.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (s = n ? t.call(this, i, J(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : J.isArray(s) && (s = J.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                })) : s ? (e = J.valHooks[s.type] || J.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)) : void 0
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = J.find.attr(t, "value");
                        return null != e ? e : J.trim(J.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : n.length, l = 0 > s ? r : o ? s : 0; r > l; l++)
                            if (i = n[l], !(!i.selected && l !== s || (K.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && J.nodeName(i.parentNode, "optgroup"))) {
                                if (e = J(i).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var i, n, s = t.options, o = J.makeArray(e), a = s.length; a--;) n = s[a], (n.selected = J.inArray(n.value, o) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = {
                set: function(t, e) {
                    return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
                }
            }, K.checkOn || (J.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            J.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), J.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var ce = J.now(),
            ue = /\?/;
        J.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, J.parseXML = function(t) {
            var e, i;
            if (!t || "string" != typeof t) return null;
            try {
                i = new DOMParser, e = i.parseFromString(t, "text/xml")
            } catch (n) {
                e = void 0
            }
            return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e
        };
        var he, de, pe = /#.*$/,
            fe = /([?&])_=[^&]*/,
            me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ge = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ve = /^(?:GET|HEAD)$/,
            ye = /^\/\//,
            be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            _e = {},
            we = {},
            xe = "*/".concat("*");
        try {
            de = location.href
        } catch (ke) {
            de = G.createElement("a"), de.href = "", de = de.href
        }
        he = be.exec(de.toLowerCase()) || [], J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: de,
                type: "GET",
                isLocal: ge.test(he[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": J.parseJSON,
                    "text xml": J.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? z(z(t, J.ajaxSettings), e) : z(J.ajaxSettings, t)
            },
            ajaxPrefilter: H(_e),
            ajaxTransport: H(we),
            ajax: function(t, e) {
                function i(t, e, i, a) {
                    var l, u, v, y, _, x = e;
                    2 !== b && (b = 2, r && clearTimeout(r), n = void 0, o = a || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = W(h, w, i)), y = j(h, y, w, l), l ? (h.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (J.lastModified[s] = _), _ = w.getResponseHeader("etag"), _ && (J.etag[s] = _)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, u = y.data, v = y.error, l = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", l ? f.resolveWith(d, [u, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, h, l ? u : v]), m.fireWith(d, [w, x]), c && (p.trigger("ajaxComplete", [w, h]), --J.active || J.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, s, o, a, r, l, c, u, h = J.ajaxSetup({}, e),
                    d = h.context || h,
                    p = h.context && (d.nodeType || d.jquery) ? J(d) : J.event,
                    f = J.Deferred(),
                    m = J.Callbacks("once memory"),
                    g = h.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    _ = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; e = me.exec(o);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return b || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || _;
                            return n && n.abort(e), i(0, e), this
                        }
                    };
                if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || de) + "").replace(pe, "").replace(ye, he[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = J.trim(h.dataType || "*").toLowerCase().match(pt) || [""], null == h.crossDomain && (l = be.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === he[1] && l[2] === he[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (he[3] || ("http:" === he[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = J.param(h.data, h.traditional)), $(_e, h, e, w), 2 === b) return w;
                c = h.global, c && 0 === J.active++ && J.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ve.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (ue.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = fe.test(s) ? s.replace(fe, "$1_=" + ce++) : s + (ue.test(s) ? "&" : "?") + "_=" + ce++)), h.ifModified && (J.lastModified[s] && w.setRequestHeader("If-Modified-Since", J.lastModified[s]), J.etag[s] && w.setRequestHeader("If-None-Match", J.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + xe + "; q=0.01" : "") : h.accepts["*"]);
                for (u in h.headers) w.setRequestHeader(u, h.headers[u]);
                if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === b)) return w.abort();
                _ = "abort";
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[u](h[u]);
                if (n = $(we, h, e, w)) {
                    w.readyState = 1, c && p.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (r = setTimeout(function() {
                        w.abort("timeout")
                    }, h.timeout));
                    try {
                        b = 1, n.send(v, i)
                    } catch (x) {
                        if (!(2 > b)) throw x;
                        i(-1, x)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, i) {
                return J.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return J.get(t, void 0, e, "script")
            }
        }), J.each(["get", "post"], function(t, e) {
            J[e] = function(t, i, n, s) {
                return J.isFunction(i) && (s = s || n, n = i, i = void 0), J.ajax({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                })
            }
        }), J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            J.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), J._evalUrl = function(t) {
            return J.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, J.fn.extend({
            wrapAll: function(t) {
                var e;
                return J.isFunction(t) ? this.each(function(e) {
                    J(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return this.each(J.isFunction(t) ? function(e) {
                    J(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = J(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = J.isFunction(t);
                return this.each(function(i) {
                    J(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            }
        }), J.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, J.expr.filters.visible = function(t) {
            return !J.expr.filters.hidden(t)
        };
        var Ce = /%20/g,
            Te = /\[\]$/,
            Se = /\r?\n/g,
            De = /^(?:submit|button|image|reset|file)$/i,
            Pe = /^(?:input|select|textarea|keygen)/i;
        J.param = function(t, e) {
            var i, n = [],
                s = function(t, e) {
                    e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
                s(this.name, this.value)
            });
            else
                for (i in t) L(i, t[i], e, s);
            return n.join("&").replace(Ce, "+")
        }, J.fn.extend({
            serialize: function() {
                return J.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = J.prop(this, "elements");
                    return t ? J.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !J(this).is(":disabled") && Pe.test(this.nodeName) && !De.test(t) && (this.checked || !Ct.test(t))
                }).map(function(t, e) {
                    var i = J(this).val();
                    return null == i ? null : J.isArray(i) ? J.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Se, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Se, "\r\n")
                    }
                }).get()
            }
        }), J.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var Ie = 0,
            Oe = {},
            Me = {
                0: 200,
                1223: 204
            },
            Ae = J.ajaxSettings.xhr();
        t.ActiveXObject && J(t).on("unload", function() {
            for (var t in Oe) Oe[t]()
        }), K.cors = !!Ae && "withCredentials" in Ae, K.ajax = Ae = !!Ae, J.ajaxTransport(function(t) {
            var e;
            return K.cors || Ae && !t.crossDomain ? {
                send: function(i, n) {
                    var s, o = t.xhr(),
                        a = ++Ie;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) o.setRequestHeader(s, i[s]);
                    e = function(t) {
                        return function() {
                            e && (delete Oe[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? n(o.status, o.statusText) : n(Me[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = e(), o.onerror = e("error"), e = Oe[a] = e("abort");
                    try {
                        o.send(t.hasContent && t.data || null)
                    } catch (r) {
                        if (e) throw r
                    }
                },
                abort: function() {
                    e && e()
                }
            } : void 0
        }), J.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return J.globalEval(t), t
                }
            }
        }), J.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), J.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, s) {
                        e = J("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                        }), G.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Ee = [],
            Ne = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ee.pop() || J.expando + "_" + ce++;
                return this[t] = !0, t
            }
        }), J.ajaxPrefilter("json jsonp", function(e, i, n) {
            var s, o, a, r = e.jsonp !== !1 && (Ne.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
            return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Ne, "$1" + s) : e.jsonp !== !1 && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
                return a || J.error(s + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
                a = arguments
            }, n.always(function() {
                t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Ee.push(s)), a && J.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), J.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || G;
            var n = at.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = J.buildFragment([t], e, s), s && s.length && J(s).remove(), J.merge([], n.childNodes))
        };
        var He = J.fn.load;
        J.fn.load = function(t, e, i) {
            if ("string" != typeof t && He) return He.apply(this, arguments);
            var n, s, o, a = this,
                r = t.indexOf(" ");
            return r >= 0 && (n = J.trim(t.slice(r)), t = t.slice(0, r)), J.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && J.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                    a.each(i, o || [t.responseText, e, t])
                }), this
        }, J.expr.filters.animated = function(t) {
            return J.grep(J.timers, function(e) {
                return t === e.elem
            }).length
        };
        var $e = t.document.documentElement;
        J.offset = {
            setOffset: function(t, e, i) {
                var n, s, o, a, r, l, c, u = J.css(t, "position"),
                    h = J(t),
                    d = {};
                "static" === u && (t.style.position = "relative"), r = h.offset(), o = J.css(t, "top"), l = J.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (n = h.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (d.top = e.top - r.top + a), null != e.left && (d.left = e.left - r.left + s), "using" in e ? e.using.call(t, d) : h.css(d)
            }
        }, J.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    J.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    s = {
                        top: 0,
                        left: 0
                    },
                    o = n && n.ownerDocument;
                return o ? (e = o.documentElement, J.contains(e, n) ? (typeof n.getBoundingClientRect !== Tt && (s = n.getBoundingClientRect()), i = q(o), {
                    top: s.top + i.pageYOffset - e.clientTop,
                    left: s.left + i.pageXOffset - e.clientLeft
                }) : s) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === J.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (n = t.offset()), n.top += J.css(t[0], "borderTopWidth", !0), n.left += J.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - J.css(i, "marginTop", !0),
                        left: e.left - n.left - J.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || $e; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent;
                    return t || $e
                })
            }
        }), J.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, i) {
            var n = "pageYOffset" === i;
            J.fn[e] = function(s) {
                return gt(this, function(e, s, o) {
                    var a = q(e);
                    return void 0 === o ? a ? a[i] : e[s] : void(a ? a.scrollTo(n ? t.pageXOffset : o, n ? o : t.pageYOffset) : e[s] = o)
                }, e, s, arguments.length, null)
            }
        }), J.each(["top", "left"], function(t, e) {
            J.cssHooks[e] = x(K.pixelPosition, function(t, i) {
                return i ? (i = w(t, e), Ft.test(i) ? J(t).position()[e] + "px" : i) : void 0
            })
        }), J.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            J.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                J.fn[n] = function(n, s) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        a = i || (n === !0 || s === !0 ? "margin" : "border");
                    return gt(this, function(e, i, n) {
                        var s;
                        return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? J.css(e, i, a) : J.style(e, i, n, a)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), J.fn.size = function() {
            return this.length
        }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return J
        });
        var ze = t.jQuery,
            We = t.$;
        return J.noConflict = function(e) {
            return t.$ === J && (t.$ = We), e && t.jQuery === J && (t.jQuery = ze), J
        }, typeof e === Tt && (t.jQuery = t.$ = J), J
    }), + function(t) {
        "use strict";

        function e(e, n) {
            return this.each(function() {
                var s = t(this),
                    o = s.data("bs.modal"),
                    a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
                o || s.data("bs.modal", o = new i(this, a)), "string" == typeof e ? o[e](n) : a.show && o.show(n)
            })
        }
        var i = function(e, i) {
            this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t)
        }, i.prototype.show = function(e) {
            var n = this,
                s = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                    t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var s = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                var o = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                s ? n.$dialog.one("bsTransitionEnd", function() {
                    n.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
            }))
        }, i.prototype.hide = function(e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function() {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function() {
            this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() {
                t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function(e) {
            var n = this,
                s = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var o = t.support.transition && s;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var a = function() {
                    n.removeBackdrop(), e && e()
                };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
            } else e && e()
        }, i.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var n = t(this),
                s = n.attr("href"),
                o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
                a = o.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(s) && s
                }, o.data(), n.data());
            n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
                t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                    n.is(":visible") && n.trigger("focus")
                })
            }), e.call(o, a, this)
        })
    }(jQuery), + function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in e)
                if (void 0 !== t.style[i]) return {
                    end: e[i]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() {
                i = !0
            });
            var s = function() {
                i || t(n).trigger(t.support.transition.end)
            };
            return setTimeout(s, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery), "undefined" == typeof jQuery) {
    var jQuery;
    jQuery = "function" == typeof require ? $ = require("jquery") : $
}
jQuery.easing.jswing = jQuery.easing.swing,
    jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, s) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
        },
        easeInQuad: function(t, e, i, n, s) {
            return n * (e /= s) * e + i
        },
        easeOutQuad: function(t, e, i, n, s) {
            return -n * (e /= s) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, s) {
            return n * (e /= s) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, s) {
            return -n * ((e = e / s - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, s) {
            return n * (e /= s) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, s) {
            return n * ((e = e / s - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, s) {
            return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, s) {
            return n * Math.sin(e / s * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, s) {
            return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
        },
        easeInExpo: function(t, e, i, n, s) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, s) {
            return e == s ? i + n : n * (-Math.pow(2, -10 * e / s) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, s) {
            return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, s) {
            return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, s) {
            return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, s) {
            return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, s) {
            var o = 1.70158,
                a = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (a || (a = .3 * s), r < Math.abs(n)) {
                r = n;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(n / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / a)) + i
        },
        easeOutElastic: function(t, e, i, n, s) {
            var o = 1.70158,
                a = 0,
                r = n;
            if (0 == e) return i;
            if (1 == (e /= s)) return i + n;
            if (a || (a = .3 * s), r < Math.abs(n)) {
                r = n;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(n / r);
            return r * Math.pow(2, -10 * e) * Math.sin((e * s - o) * (2 * Math.PI) / a) + n + i
        },
        easeInOutElastic: function(t, e, i, n, s) {
            var o = 1.70158,
                a = 0,
                r = n;
            if (0 == e) return i;
            if (2 == (e /= s / 2)) return i + n;
            if (a || (a = s * (.3 * 1.5)), r < Math.abs(n)) {
                r = n;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(n / r);
            return e < 1 ? -.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / a)) + i : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / a) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), n * (e /= s) * e * ((o + 1) * e - o) + i
        },
        easeOutBack: function(t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), n * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, s, o) {
            return void 0 == o && (o = 1.70158), (e /= s / 2) < 1 ? n / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
        },
        easeInBounce: function(t, e, i, n, s) {
            return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
        },
        easeOutBounce: function(t, e, i, n, s) {
            return (e /= s) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, s) {
            return e < s / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
        }
    }), jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e + i : n / 4 * ((e -= 2) * e * e + 2) + i
    }
}), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(t) {
    function e(t) {
        var e = t.length,
            n = i.type(t);
        return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }
    if (!t.jQuery) {
        var i = function(t, e) {
            return new i.fn.init(t, e)
        };
        i.isWindow = function(t) {
            return null != t && t == t.window
        }, i.type = function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? s[a.call(t)] || "object" : typeof t
        }, i.isArray = Array.isArray || function(t) {
                return "array" === i.type(t)
            }, i.isPlainObject = function(t) {
            var e;
            if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
            try {
                if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            for (e in t);
            return void 0 === e || o.call(t, e)
        }, i.each = function(t, i, n) {
            var s, o = 0,
                a = t.length,
                r = e(t);
            if (n) {
                if (r)
                    for (; a > o && (s = i.apply(t[o], n), s !== !1); o++);
                else
                    for (o in t)
                        if (s = i.apply(t[o], n), s === !1) break
            } else if (r)
                for (; a > o && (s = i.call(t[o], o, t[o]), s !== !1); o++);
            else
                for (o in t)
                    if (s = i.call(t[o], o, t[o]), s === !1) break; return t
        }, i.data = function(t, e, s) {
            if (void 0 === s) {
                var o = t[i.expando],
                    a = o && n[o];
                if (void 0 === e) return a;
                if (a && e in a) return a[e]
            } else if (void 0 !== e) {
                var o = t[i.expando] || (t[i.expando] = ++i.uuid);
                return n[o] = n[o] || {}, n[o][e] = s, s
            }
        }, i.removeData = function(t, e) {
            var s = t[i.expando],
                o = s && n[s];
            o && i.each(e, function(t, e) {
                delete o[e]
            })
        }, i.extend = function() {
            var t, e, n, s, o, a, r = arguments[0] || {},
                l = 1,
                c = arguments.length,
                u = !1;
            for ("boolean" == typeof r && (u = r, r = arguments[l] || {}, l++), "object" != typeof r && "function" !== i.type(r) && (r = {}), l === c && (r = this, l--); c > l; l++)
                if (null != (o = arguments[l]))
                    for (s in o) t = r[s], n = o[s], r !== n && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, a = t && i.isArray(t) ? t : []) : a = t && i.isPlainObject(t) ? t : {}, r[s] = i.extend(u, a, n)) : void 0 !== n && (r[s] = n));
            return r
        }, i.queue = function(t, n, s) {
            function o(t, i) {
                var n = i || [];
                return null != t && (e(Object(t)) ? ! function(t, e) {
                    for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
                    if (i !== i)
                        for (; void 0 !== e[n];) t[s++] = e[n++];
                    return t.length = s, t
                }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)), n
            }
            if (t) {
                n = (n || "fx") + "queue";
                var a = i.data(t, n);
                return s ? (!a || i.isArray(s) ? a = i.data(t, n, o(s)) : a.push(s), a) : a || []
            }
        }, i.dequeue = function(t, e) {
            i.each(t.nodeType ? [t] : t, function(t, n) {
                e = e || "fx";
                var s = i.queue(n, e),
                    o = s.shift();
                "inprogress" === o && (o = s.shift()), o && ("fx" === e && s.unshift("inprogress"), o.call(n, function() {
                    i.dequeue(n, e)
                }))
            })
        }, i.fn = i.prototype = {
            init: function(t) {
                if (t.nodeType) return this[0] = t, this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function t() {
                    for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                    return t || document
                }
                var e = this[0],
                    t = t.apply(e),
                    n = this.offset(),
                    s = /^(?:body|html)$/i.test(t.nodeName) ? {
                        top: 0,
                        left: 0
                    } : i(t).offset();
                return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (s.top += parseFloat(t.style.borderTopWidth) || 0, s.left += parseFloat(t.style.borderLeftWidth) || 0), {
                    top: n.top - s.top,
                    left: n.left - s.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
        for (var s = {}, o = s.hasOwnProperty, a = s.toString, r = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < r.length; l++) s["[object " + r[l] + "]"] = r[l].toLowerCase();
        i.fn.init.prototype = i.fn, t.Velocity = {
            Utilities: i
        }
    }
}(window), function(t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}(function() {
    return function(t, e, i, n) {
        function s(t) {
            for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                var s = t[e];
                s && n.push(s)
            }
            return n
        }

        function o(t) {
            return m.isWrapped(t) ? t = [].slice.call(t) : m.isNode(t) && (t = [t]), t
        }

        function a(t) {
            var e = d.data(t, "velocity");
            return null === e ? n : e
        }

        function r(t) {
            return function(e) {
                return Math.round(e * t) * (1 / t)
            }
        }

        function l(t, i, n, s) {
            function o(t, e) {
                return 1 - 3 * e + 3 * t
            }

            function a(t, e) {
                return 3 * e - 6 * t
            }

            function r(t) {
                return 3 * t
            }

            function l(t, e, i) {
                return ((o(e, i) * t + a(e, i)) * t + r(e)) * t
            }

            function c(t, e, i) {
                return 3 * o(e, i) * t * t + 2 * a(e, i) * t + r(e)
            }

            function u(e, i) {
                for (var s = 0; m > s; ++s) {
                    var o = c(i, t, n);
                    if (0 === o) return i;
                    var a = l(i, t, n) - e;
                    i -= a / o
                }
                return i
            }

            function h() {
                for (var e = 0; b > e; ++e) k[e] = l(e * _, t, n)
            }

            function d(e, i, s) {
                var o, a, r = 0;
                do a = i + (s - i) / 2, o = l(a, t, n) - e, o > 0 ? s = a : i = a; while (Math.abs(o) > v && ++r < y);
                return a
            }

            function p(e) {
                for (var i = 0, s = 1, o = b - 1; s != o && k[s] <= e; ++s) i += _;
                --s;
                var a = (e - k[s]) / (k[s + 1] - k[s]),
                    r = i + a * _,
                    l = c(r, t, n);
                return l >= g ? u(e, r) : 0 == l ? r : d(e, i, i + _)
            }

            function f() {
                C = !0, (t != i || n != s) && h()
            }
            var m = 4,
                g = .001,
                v = 1e-7,
                y = 10,
                b = 11,
                _ = 1 / (b - 1),
                w = "Float32Array" in e;
            if (4 !== arguments.length) return !1;
            for (var x = 0; 4 > x; ++x)
                if ("number" != typeof arguments[x] || isNaN(arguments[x]) || !isFinite(arguments[x])) return !1;
            t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
            var k = w ? new Float32Array(b) : new Array(b),
                C = !1,
                T = function(e) {
                    return C || f(), t === i && n === s ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), i, s)
                };
            T.getControlPoints = function() {
                return [{
                    x: t,
                    y: i
                }, {
                    x: n,
                    y: s
                }]
            };
            var S = "generateBezier(" + [t, i, n, s] + ")";
            return T.toString = function() {
                return S
            }, T
        }

        function c(t, e) {
            var i = t;
            return m.isString(t) ? b.Easings[t] || (i = !1) : i = m.isArray(t) && 1 === t.length ? r.apply(null, t) : m.isArray(t) && 2 === t.length ? _.apply(null, t.concat([e])) : !(!m.isArray(t) || 4 !== t.length) && l.apply(null, t), i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y), i
        }

        function u(t) {
            if (t) {
                var e = (new Date).getTime(),
                    i = b.State.calls.length;
                i > 1e4 && (b.State.calls = s(b.State.calls));
                for (var o = 0; i > o; o++)
                    if (b.State.calls[o]) {
                        var r = b.State.calls[o],
                            l = r[0],
                            c = r[2],
                            p = r[3],
                            f = !!p,
                            g = null;
                        p || (p = b.State.calls[o][3] = e - 16);
                        for (var v = Math.min((e - p) / c.duration, 1), y = 0, _ = l.length; _ > y; y++) {
                            var x = l[y],
                                C = x.element;
                            if (a(C)) {
                                var T = !1;
                                if (c.display !== n && null !== c.display && "none" !== c.display) {
                                    if ("flex" === c.display) {
                                        var S = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        d.each(S, function(t, e) {
                                            w.setPropertyValue(C, "display", e)
                                        })
                                    }
                                    w.setPropertyValue(C, "display", c.display)
                                }
                                c.visibility !== n && "hidden" !== c.visibility && w.setPropertyValue(C, "visibility", c.visibility);
                                for (var D in x)
                                    if ("element" !== D) {
                                        var P, I = x[D],
                                            O = m.isString(I.easing) ? b.Easings[I.easing] : I.easing;
                                        if (1 === v) P = I.endValue;
                                        else {
                                            var M = I.endValue - I.startValue;
                                            if (P = I.startValue + M * O(v, c, M), !f && P === I.currentValue) continue
                                        }
                                        if (I.currentValue = P, "tween" === D) g = P;
                                        else {
                                            if (w.Hooks.registered[D]) {
                                                var A = w.Hooks.getRoot(D),
                                                    E = a(C).rootPropertyValueCache[A];
                                                E && (I.rootPropertyValue = E)
                                            }
                                            var N = w.setPropertyValue(C, D, I.currentValue + (0 === parseFloat(P) ? "" : I.unitType), I.rootPropertyValue, I.scrollData);
                                            w.Hooks.registered[D] && (a(C).rootPropertyValueCache[A] = w.Normalizations.registered[A] ? w.Normalizations.registered[A]("extract", null, N[1]) : N[1]), "transform" === N[0] && (T = !0)
                                        }
                                    }
                                c.mobileHA && a(C).transformCache.translate3d === n && (a(C).transformCache.translate3d = "(0px, 0px, 0px)", T = !0), T && w.flushTransformCache(C)
                            }
                        }
                        c.display !== n && "none" !== c.display && (b.State.calls[o][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (b.State.calls[o][2].visibility = !1), c.progress && c.progress.call(r[1], r[1], v, Math.max(0, p + c.duration - e), p, g), 1 === v && h(o)
                    }
            }
            b.State.isTicking && k(u)
        }

        function h(t, e) {
            if (!b.State.calls[t]) return !1;
            for (var i = b.State.calls[t][0], s = b.State.calls[t][1], o = b.State.calls[t][2], r = b.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                var h = i[c].element;
                if (e || o.loop || ("none" === o.display && w.setPropertyValue(h, "display", o.display), "hidden" === o.visibility && w.setPropertyValue(h, "visibility", o.visibility)), o.loop !== !0 && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && a(h)) {
                    a(h).isAnimating = !1, a(h).rootPropertyValueCache = {};
                    var p = !1;
                    d.each(w.Lists.transforms3D, function(t, e) {
                        var i = /^scale/.test(e) ? 1 : 0,
                            s = a(h).transformCache[e];
                        a(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(s) && (p = !0, delete a(h).transformCache[e])
                    }), o.mobileHA && (p = !0, delete a(h).transformCache.translate3d), p && w.flushTransformCache(h), w.Values.removeClass(h, "velocity-animating")
                }
                if (!e && o.complete && !o.loop && c === u - 1) try {
                    o.complete.call(s, s)
                } catch (f) {
                    setTimeout(function() {
                        throw f
                    }, 1)
                }
                r && o.loop !== !0 && r(s), a(h) && o.loop === !0 && !e && (d.each(a(h).tweensContainer, function(t, e) {
                    /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                }), b(h, "reverse", {
                    loop: !0,
                    delay: o.delay
                })), o.queue !== !1 && d.dequeue(h, o.queue)
            }
            b.State.calls[t] = !1;
            for (var m = 0, g = b.State.calls.length; g > m; m++)
                if (b.State.calls[m] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
        }
        var d, p = function() {
                if (i.documentMode) return i.documentMode;
                for (var t = 7; t > 4; t--) {
                    var e = i.createElement("div");
                    if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length) return e = null, t
                }
                return n
            }(),
            f = function() {
                var t = 0;
                return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - t)), t = n + i, setTimeout(function() {
                            e(n + i)
                        }, i)
                    }
            }(),
            m = {
                isString: function(t) {
                    return "string" == typeof t
                },
                isArray: Array.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isFunction: function(t) {
                    return "[object Function]" === Object.prototype.toString.call(t)
                },
                isNode: function(t) {
                    return t && t.nodeType
                },
                isNodeList: function(t) {
                    return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                },
                isWrapped: function(t) {
                    return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                },
                isSVG: function(t) {
                    return e.SVGElement && t instanceof e.SVGElement
                },
                isEmptyObject: function(t) {
                    for (var e in t) return !1;
                    return !0
                }
            },
            g = !1;
        if (t.fn && t.fn.jquery ? (d = t, g = !0) : d = e.Velocity.Utilities, 8 >= p && !g) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= p) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400,
            y = "swing",
            b = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: e.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: i.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: d,
                Redirects: {},
                Easings: {},
                Promise: e.Promise,
                defaults: {
                    queue: "",
                    duration: v,
                    easing: y,
                    begin: n,
                    complete: n,
                    progress: n,
                    display: n,
                    visibility: n,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(t) {
                    d.data(t, "velocity", {
                        isSVG: m.isSVG(t),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
        e.pageYOffset !== n ? (b.State.scrollAnchor = e, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var _ = function() {
            function t(t) {
                return -t.tension * t.x - t.friction * t.v
            }

            function e(e, i, n) {
                var s = {
                    x: e.x + n.dx * i,
                    v: e.v + n.dv * i,
                    tension: e.tension,
                    friction: e.friction
                };
                return {
                    dx: s.v,
                    dv: t(s)
                }
            }

            function i(i, n) {
                var s = {
                        dx: i.v,
                        dv: t(i)
                    },
                    o = e(i, .5 * n, s),
                    a = e(i, .5 * n, o),
                    r = e(i, n, a),
                    l = 1 / 6 * (s.dx + 2 * (o.dx + a.dx) + r.dx),
                    c = 1 / 6 * (s.dv + 2 * (o.dv + a.dv) + r.dv);
                return i.x = i.x + l * n, i.v = i.v + c * n, i
            }
            return function n(t, e, s) {
                var o, a, r, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    },
                    c = [0],
                    u = 0,
                    h = 1e-4,
                    d = .016;
                for (t = parseFloat(t) || 500, e = parseFloat(e) || 20, s = s || null, l.tension = t, l.friction = e, o = null !== s, o ? (u = n(t, e), a = u / s * d) : a = d; r = i(r || l, a), c.push(1 + r.x), u += 16, Math.abs(r.x) > h && Math.abs(r.v) > h;);
                return o ? function(t) {
                    return c[t * (c.length - 1) | 0]
                } : u
            }
        }();
        b.Easings = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            spring: function(t) {
                return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
            }
        }, d.each([
            ["ease", [.25, .1, .25, 1]],
            ["ease-in", [.42, 0, 1, 1]],
            ["ease-out", [0, 0, .58, 1]],
            ["ease-in-out", [.42, 0, .58, 1]],
            ["easeInSine", [.47, 0, .745, .715]],
            ["easeOutSine", [.39, .575, .565, 1]],
            ["easeInOutSine", [.445, .05, .55, .95]],
            ["easeInQuad", [.55, .085, .68, .53]],
            ["easeOutQuad", [.25, .46, .45, .94]],
            ["easeInOutQuad", [.455, .03, .515, .955]],
            ["easeInCubic", [.55, .055, .675, .19]],
            ["easeOutCubic", [.215, .61, .355, 1]],
            ["easeInOutCubic", [.645, .045, .355, 1]],
            ["easeInQuart", [.895, .03, .685, .22]],
            ["easeOutQuart", [.165, .84, .44, 1]],
            ["easeInOutQuart", [.77, 0, .175, 1]],
            ["easeInQuint", [.755, .05, .855, .06]],
            ["easeOutQuint", [.23, 1, .32, 1]],
            ["easeInOutQuint", [.86, 0, .07, 1]],
            ["easeInExpo", [.95, .05, .795, .035]],
            ["easeOutExpo", [.19, 1, .22, 1]],
            ["easeInOutExpo", [1, 0, 0, 1]],
            ["easeInCirc", [.6, .04, .98, .335]],
            ["easeOutCirc", [.075, .82, .165, 1]],
            ["easeInOutCirc", [.785, .135, .15, .86]]
        ], function(t, e) {
            b.Easings[e[0]] = l.apply(null, e[1])
        });
        var w = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var t = 0; t < w.Lists.colors.length; t++) {
                        var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                        w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                    }
                    var i, n, s;
                    if (p)
                        for (i in w.Hooks.templates) {
                            n = w.Hooks.templates[i], s = n[0].split(" ");
                            var o = n[1].match(w.RegEx.valueSplit);
                            "Color" === s[0] && (s.push(s.shift()), o.push(o.shift()), w.Hooks.templates[i] = [s.join(" "), o.join(" ")])
                        }
                    for (i in w.Hooks.templates) {
                        n = w.Hooks.templates[i], s = n[0].split(" ");
                        for (var t in s) {
                            var a = i + s[t],
                                r = t;
                            w.Hooks.registered[a] = [i, r]
                        }
                    }
                },
                getRoot: function(t) {
                    var e = w.Hooks.registered[t];
                    return e ? e[0] : t
                },
                cleanRootPropertyValue: function(t, e) {
                    return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e
                },
                extractValue: function(t, e) {
                    var i = w.Hooks.registered[t];
                    if (i) {
                        var n = i[0],
                            s = i[1];
                        return e = w.Hooks.cleanRootPropertyValue(n, e), e.toString().match(w.RegEx.valueSplit)[s]
                    }
                    return e
                },
                injectValue: function(t, e, i) {
                    var n = w.Hooks.registered[t];
                    if (n) {
                        var s, o, a = n[0],
                            r = n[1];
                        return i = w.Hooks.cleanRootPropertyValue(a, i), s = i.toString().match(w.RegEx.valueSplit), s[r] = e, o = s.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function(t, e, i) {
                        switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n;
                                return w.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(w.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : i), n;
                            case "inject":
                                return "rect(" + i + ")"
                        }
                    },
                    blur: function(t, e, i) {
                        switch (t) {
                            case "name":
                                return b.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var s = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = s ? s[1] : 0
                                }
                                return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                        }
                    },
                    opacity: function(t, e, i) {
                        if (8 >= p) switch (t) {
                            case "name":
                                return "filter";
                            case "extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = n ? n[1] / 100 : 1;
                            case "inject":
                                return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                        } else switch (t) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return i;
                            case "inject":
                                return i
                        }
                    }
                },
                register: function() {
                    9 >= p || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                    for (var t = 0; t < w.Lists.transformsBase.length; t++) ! function() {
                        var e = w.Lists.transformsBase[t];
                        w.Normalizations.registered[e] = function(t, i, s) {
                            switch (t) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return a(i) === n || a(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : a(i).transformCache[e].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (e.substr(0, e.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(s);
                                            break;
                                        case "scal":
                                        case "scale":
                                            b.State.isAndroid && a(i).transformCache[e] === n && 1 > s && (s = 1), o = !/(\d)$/i.test(s);
                                            break;
                                        case "skew":
                                            o = !/(deg|\d)$/i.test(s);
                                            break;
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(s)
                                    }
                                    return o || (a(i).transformCache[e] = "(" + s + ")"), a(i).transformCache[e]
                            }
                        }
                    }();
                    for (var t = 0; t < w.Lists.colors.length; t++) ! function() {
                        var e = w.Lists.colors[t];
                        w.Normalizations.registered[e] = function(t, i, s) {
                            switch (t) {
                                case "name":
                                    return e;
                                case "extract":
                                    var o;
                                    if (w.RegEx.wrappedValueAlreadyExtracted.test(s)) o = s;
                                    else {
                                        var a, r = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(s) ? a = r[s] !== n ? r[s] : r.black : w.RegEx.isHex.test(s) ? a = "rgb(" + w.Values.hexToRgb(s).join(" ") + ")" : /^rgba?\(/i.test(s) || (a = r.black), o = (a || s).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= p || 3 !== o.split(" ").length || (o += " 1"), o;
                                case "inject":
                                    return 8 >= p ? 4 === s.split(" ").length && (s = s.split(/\s+/).slice(0, 3).join(" ")) : 3 === s.split(" ").length && (s += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + s.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function(t) {
                    return t.replace(/-(\w)/g, function(t, e) {
                        return e.toUpperCase()
                    })
                },
                SVGAttribute: function(t) {
                    var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || b.State.isAndroid && !b.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                },
                prefixCheck: function(t) {
                    if (b.State.prefixMatches[t]) return [b.State.prefixMatches[t], !0];
                    for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                        var s;
                        if (s = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                return t.toUpperCase()
                            }), m.isString(b.State.prefixElement.style[s])) return b.State.prefixMatches[t] = s, [s, !0]
                    }
                    return [t, !1]
                }
            },
            Values: {
                hexToRgb: function(t) {
                    var e, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return t = t.replace(i, function(t, e, i, n) {
                        return e + e + i + i + n + n
                    }), e = n.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(t) {
                    return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                },
                getUnitType: function(t) {
                    return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                },
                getDisplayType: function(t) {
                    var e = t && t.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                },
                addClass: function(t, e) {
                    t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                },
                removeClass: function(t, e) {
                    t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function(t, i, s, o) {
                function r(t, i) {
                    function s() {
                        c && w.setPropertyValue(t, "display", "none")
                    }
                    var l = 0;
                    if (8 >= p) l = d.css(t, i);
                    else {
                        var c = !1;
                        if (/^(width|height)$/.test(i) && 0 === w.getPropertyValue(t, "display") && (c = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !o) {
                            if ("height" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var u = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                return s(), u
                            }
                            if ("width" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                var h = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                return s(), h
                            }
                        }
                        var f;
                        f = a(t) === n ? e.getComputedStyle(t, null) : a(t).computedStyle ? a(t).computedStyle : a(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), l = 9 === p && "filter" === i ? f.getPropertyValue(i) : f[i], ("" === l || null === l) && (l = t.style[i]), s()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                        var m = r(t, "position");
                        ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = d(t).position()[i] + "px")
                    }
                    return l
                }
                var l;
                if (w.Hooks.registered[i]) {
                    var c = i,
                        u = w.Hooks.getRoot(c);
                    s === n && (s = w.getPropertyValue(t, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (s = w.Normalizations.registered[u]("extract", t, s)), l = w.Hooks.extractValue(c, s)
                } else if (w.Normalizations.registered[i]) {
                    var h, f;
                    h = w.Normalizations.registered[i]("name", t), "transform" !== h && (f = r(t, w.Names.prefixCheck(h)[0]), w.Values.isCSSNullValue(f) && w.Hooks.templates[i] && (f = w.Hooks.templates[i][1])), l = w.Normalizations.registered[i]("extract", t, f)
                }
                if (!/^[\d-]/.test(l))
                    if (a(t) && a(t).isSVG && w.Names.SVGAttribute(i))
                        if (/^(height|width)$/i.test(i)) try {
                            l = t.getBBox()[i]
                        } catch (m) {
                            l = 0
                        } else l = t.getAttribute(i);
                    else l = r(t, w.Names.prefixCheck(i)[0]);
                return w.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + i + ": " + l), l
            },
            setPropertyValue: function(t, i, n, s, o) {
                var r = i;
                if ("scroll" === i) o.container ? o.container["scroll" + o.direction] = n : "Left" === o.direction ? e.scrollTo(n, o.alternateValue) : e.scrollTo(o.alternateValue, n);
                else if (w.Normalizations.registered[i] && "transform" === w.Normalizations.registered[i]("name", t)) w.Normalizations.registered[i]("inject", t, n), r = "transform", n = a(t).transformCache[i];
                else {
                    if (w.Hooks.registered[i]) {
                        var l = i,
                            c = w.Hooks.getRoot(i);
                        s = s || w.getPropertyValue(t, c), n = w.Hooks.injectValue(l, n, s), i = c
                    }
                    if (w.Normalizations.registered[i] && (n = w.Normalizations.registered[i]("inject", t, n), i = w.Normalizations.registered[i]("name", t)), r = w.Names.prefixCheck(i)[0], 8 >= p) try {
                        t.style[r] = n
                    } catch (u) {
                        b.debug && console.log("Browser does not support [" + n + "] for [" + r + "]")
                    } else a(t) && a(t).isSVG && w.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[r] = n;
                    b.debug >= 2 && console.log("Set " + i + " (" + r + "): " + n)
                }
                return [r, n]
            },
            flushTransformCache: function(t) {
                function e(e) {
                    return parseFloat(w.getPropertyValue(t, e))
                }
                var i = "";
                if ((p || b.State.isAndroid && !b.State.isChrome) && a(t).isSVG) {
                    var n = {
                        translate: [e("translateX"), e("translateY")],
                        skewX: [e("skewX")],
                        skewY: [e("skewY")],
                        scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                        rotate: [e("rotateZ"), 0, 0]
                    };
                    d.each(a(t).transformCache, function(t) {
                        /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                    })
                } else {
                    var s, o;
                    d.each(a(t).transformCache, function(e) {
                        return s = a(t).transformCache[e], "transformPerspective" === e ? (o = s, !0) : (9 === p && "rotateZ" === e && (e = "rotate"), void(i += e + s + " "))
                    }), o && (i = "perspective" + o + " " + i)
                }
                w.setPropertyValue(t, "transform", i)
            }
        };
        w.Hooks.register(), w.Normalizations.register(), b.hook = function(t, e, i) {
            var s = n;
            return t = o(t), d.each(t, function(t, o) {
                if (a(o) === n && b.init(o), i === n) s === n && (s = b.CSS.getPropertyValue(o, e));
                else {
                    var r = b.CSS.setPropertyValue(o, e, i);
                    "transform" === r[0] && b.CSS.flushTransformCache(o), s = r
                }
            }), s
        };
        var x = function() {
            function t() {
                return r ? D.promise || null : l
            }

            function s() {
                function t(t) {
                    function h(t, e) {
                        var i = n,
                            s = n,
                            a = n;
                        return m.isArray(t) ? (i = t[0], !m.isArray(t[1]) && /^[\d-]/.test(t[1]) || m.isFunction(t[1]) || w.RegEx.isHex.test(t[1]) ? a = t[1] : (m.isString(t[1]) && !w.RegEx.isHex.test(t[1]) || m.isArray(t[1])) && (s = e ? t[1] : c(t[1], r.duration), t[2] !== n && (a = t[2]))) : i = t, e || (s = s || r.easing), m.isFunction(i) && (i = i.call(o, C, k)), m.isFunction(a) && (a = a.call(o, C, k)), [i || 0, s, a]
                    }

                    function p(t, e) {
                        var i, n;
                        return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                            return i = t, ""
                        }), i || (i = w.Values.getUnitType(t)), [n, i]
                    }

                    function v() {
                        var t = {
                                myParent: o.parentNode || i.body,
                                position: w.getPropertyValue(o, "position"),
                                fontSize: w.getPropertyValue(o, "fontSize")
                            },
                            n = t.position === N.lastPosition && t.myParent === N.lastParent,
                            s = t.fontSize === N.lastFontSize;
                        N.lastParent = t.myParent, N.lastPosition = t.position, N.lastFontSize = t.fontSize;
                        var r = 100,
                            l = {};
                        if (s && n) l.emToPx = N.lastEmToPx, l.percentToPxWidth = N.lastPercentToPxWidth, l.percentToPxHeight = N.lastPercentToPxHeight;
                        else {
                            var c = a(o).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                            b.init(c), t.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                b.CSS.setPropertyValue(c, e, "hidden")
                            }), b.CSS.setPropertyValue(c, "position", t.position), b.CSS.setPropertyValue(c, "fontSize", t.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                b.CSS.setPropertyValue(c, e, r + "%")
                            }), b.CSS.setPropertyValue(c, "paddingLeft", r + "em"), l.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / r, l.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / r, l.emToPx = N.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / r, t.myParent.removeChild(c)
                        }
                        return null === N.remToPx && (N.remToPx = parseFloat(w.getPropertyValue(i.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(e.innerWidth) / 100, N.vhToPx = parseFloat(e.innerHeight) / 100), l.remToPx = N.remToPx, l.vwToPx = N.vwToPx, l.vhToPx = N.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                    }
                    if (r.begin && 0 === C) try {
                        r.begin.call(f, f)
                    } catch (_) {
                        setTimeout(function() {
                            throw _
                        }, 1)
                    }
                    if ("scroll" === P) {
                        var x, T, S, I = /^x$/i.test(r.axis) ? "Left" : "Top",
                            O = parseFloat(r.offset) || 0;
                        r.container ? m.isWrapped(r.container) || m.isNode(r.container) ? (r.container = r.container[0] || r.container, x = r.container["scroll" + I], S = x + d(o).position()[I.toLowerCase()] + O) : r.container = null : (x = b.State.scrollAnchor[b.State["scrollProperty" + I]], T = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === I ? "Top" : "Left")]], S = d(o).offset()[I.toLowerCase()] + O), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: x,
                                currentValue: x,
                                endValue: S,
                                unitType: "",
                                easing: r.easing,
                                scrollData: {
                                    container: r.container,
                                    direction: I,
                                    alternateValue: T
                                }
                            },
                            element: o
                        }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
                    } else if ("reverse" === P) {
                        if (!a(o).tweensContainer) return void d.dequeue(o, r.queue);
                        "none" === a(o).opts.display && (a(o).opts.display = "auto"), "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"), a(o).opts.loop = !1, a(o).opts.begin = null, a(o).opts.complete = null, y.easing || delete r.easing, y.duration || delete r.duration, r = d.extend({}, a(o).opts, r);
                        var M = d.extend(!0, {}, a(o).tweensContainer);
                        for (var A in M)
                            if ("element" !== A) {
                                var E = M[A].startValue;
                                M[A].startValue = M[A].currentValue = M[A].endValue, M[A].endValue = E, m.isEmptyObject(y) || (M[A].easing = r.easing), b.debug && console.log("reverse tweensContainer (" + A + "): " + JSON.stringify(M[A]), o)
                            }
                        l = M
                    } else if ("start" === P) {
                        var M;
                        a(o).tweensContainer && a(o).isAnimating === !0 && (M = a(o).tweensContainer), d.each(g, function(t, e) {
                            if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t)) {
                                var i = h(e, !0),
                                    s = i[0],
                                    o = i[1],
                                    a = i[2];
                                if (w.RegEx.isHex.test(s)) {
                                    for (var r = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(s), c = a ? w.Values.hexToRgb(a) : n, u = 0; u < r.length; u++) {
                                        var d = [l[u]];
                                        o && d.push(o), c !== n && d.push(c[u]), g[t + r[u]] = d
                                    }
                                    delete g[t]
                                }
                            }
                        });
                        for (var $ in g) {
                            var z = h(g[$]),
                                W = z[0],
                                j = z[1],
                                L = z[2];
                            $ = w.Names.camelCase($);
                            var q = w.Hooks.getRoot($),
                                F = !1;
                            if (a(o).isSVG || "tween" === q || w.Names.prefixCheck(q)[1] !== !1 || w.Normalizations.registered[q] !== n) {
                                (r.display !== n && null !== r.display && "none" !== r.display || r.visibility !== n && "hidden" !== r.visibility) && /opacity|filter/.test($) && !L && 0 !== W && (L = 0), r._cacheValues && M && M[$] ? (L === n && (L = M[$].endValue + M[$].unitType), F = a(o).rootPropertyValueCache[q]) : w.Hooks.registered[$] ? L === n ? (F = w.getPropertyValue(o, q), L = w.getPropertyValue(o, $, F)) : F = w.Hooks.templates[q][1] : L === n && (L = w.getPropertyValue(o, $));
                                var R, B, V, Y = !1;
                                if (R = p($, L), L = R[0], V = R[1], R = p($, W), W = R[0].replace(/^([+-\/*])=/, function(t, e) {
                                        return Y = e, ""
                                    }), B = R[1], L = parseFloat(L) || 0, W = parseFloat(W) || 0, "%" === B && (/^(fontSize|lineHeight)$/.test($) ? (W /= 100, B = "em") : /^scale/.test($) ? (W /= 100, B = "") : /(Red|Green|Blue)$/i.test($) && (W = W / 100 * 255, B = "")), /[\/*]/.test(Y)) B = V;
                                else if (V !== B && 0 !== L)
                                    if (0 === W) B = V;
                                    else {
                                        s = s || v();
                                        var X = /margin|padding|left|right|width|text|word|letter/i.test($) || /X$/.test($) || "x" === $ ? "x" : "y";
                                        switch (V) {
                                            case "%":
                                                L *= "x" === X ? s.percentToPxWidth : s.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                L *= s[V + "ToPx"]
                                        }
                                        switch (B) {
                                            case "%":
                                                L *= 1 / ("x" === X ? s.percentToPxWidth : s.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                L *= 1 / s[B + "ToPx"]
                                        }
                                    }
                                switch (Y) {
                                    case "+":
                                        W = L + W;
                                        break;
                                    case "-":
                                        W = L - W;
                                        break;
                                    case "*":
                                        W = L * W;
                                        break;
                                    case "/":
                                        W = L / W
                                }
                                l[$] = {
                                    rootPropertyValue: F,
                                    startValue: L,
                                    currentValue: L,
                                    endValue: W,
                                    unitType: B,
                                    easing: j
                                }, b.debug && console.log("tweensContainer (" + $ + "): " + JSON.stringify(l[$]), o)
                            } else b.debug && console.log("Skipping [" + q + "] due to a lack of browser support.")
                        }
                        l.element = o
                    }
                    l.element && (w.Values.addClass(o, "velocity-animating"), H.push(l), "" === r.queue && (a(o).tweensContainer = l, a(o).opts = r), a(o).isAnimating = !0, C === k - 1 ? (b.State.calls.push([H, f, r, null, D.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, u())) : C++)
                }
                var s, o = this,
                    r = d.extend({}, b.defaults, y),
                    l = {};
                switch (a(o) === n && b.init(o), parseFloat(r.delay) && r.queue !== !1 && d.queue(o, r.queue, function(t) {
                    b.velocityQueueEntryFlag = !0, a(o).delayTimer = {
                        setTimeout: setTimeout(t, parseFloat(r.delay)),
                        next: t
                    }
                }), r.duration.toString().toLowerCase()) {
                    case "fast":
                        r.duration = 200;
                        break;
                    case "normal":
                        r.duration = v;
                        break;
                    case "slow":
                        r.duration = 600;
                        break;
                    default:
                        r.duration = parseFloat(r.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? r.duration = r.delay = 1 : (r.duration *= parseFloat(b.mock) || 1, r.delay *= parseFloat(b.mock) || 1)), r.easing = c(r.easing, r.duration), r.begin && !m.isFunction(r.begin) && (r.begin = null), r.progress && !m.isFunction(r.progress) && (r.progress = null), r.complete && !m.isFunction(r.complete) && (r.complete = null), r.display !== n && null !== r.display && (r.display = r.display.toString().toLowerCase(), "auto" === r.display && (r.display = b.CSS.Values.getDisplayType(o))), r.visibility !== n && null !== r.visibility && (r.visibility = r.visibility.toString().toLowerCase()), r.mobileHA = r.mobileHA && b.State.isMobile && !b.State.isGingerbread, r.queue === !1 ? r.delay ? setTimeout(t, r.delay) : t() : d.queue(o, r.queue, function(e, i) {
                    return i === !0 ? (D.promise && D.resolver(f), !0) : (b.velocityQueueEntryFlag = !0, void t(e))
                }), "" !== r.queue && "fx" !== r.queue || "inprogress" === d.queue(o)[0] || d.dequeue(o)
            }
            var r, l, p, f, g, y, _ = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
            if (m.isWrapped(this) ? (r = !1, p = 0, f = this, l = this) : (r = !0, p = 1, f = _ ? arguments[0].elements || arguments[0].e : arguments[0]), f = o(f)) {
                _ ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[p], y = arguments[p + 1]);
                var k = f.length,
                    C = 0;
                if (!/^(stop|finish)$/i.test(g) && !d.isPlainObject(y)) {
                    var T = p + 1;
                    y = {};
                    for (var S = T; S < arguments.length; S++) m.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? m.isString(arguments[S]) || m.isArray(arguments[S]) ? y.easing = arguments[S] : m.isFunction(arguments[S]) && (y.complete = arguments[S]) : y.duration = arguments[S]
                }
                var D = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                r && b.Promise && (D.promise = new b.Promise(function(t, e) {
                    D.resolver = t, D.rejecter = e
                }));
                var P;
                switch (g) {
                    case "scroll":
                        P = "scroll";
                        break;
                    case "reverse":
                        P = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        d.each(f, function(t, e) {
                            a(e) && a(e).delayTimer && (clearTimeout(a(e).delayTimer.setTimeout), a(e).delayTimer.next && a(e).delayTimer.next(), delete a(e).delayTimer)
                        });
                        var I = [];
                        return d.each(b.State.calls, function(t, e) {
                            e && d.each(e[1], function(i, s) {
                                var o = y === n ? "" : y;
                                return o !== !0 && e[2].queue !== o && (y !== n || e[2].queue !== !1) || void d.each(f, function(i, n) {
                                        n === s && ((y === !0 || m.isString(y)) && (d.each(d.queue(n, m.isString(y) ? y : ""), function(t, e) {
                                            m.isFunction(e) && e(null, !0)
                                        }), d.queue(n, m.isString(y) ? y : "", [])), "stop" === g ? (a(n) && a(n).tweensContainer && o !== !1 && d.each(a(n).tweensContainer, function(t, e) {
                                            e.endValue = e.currentValue
                                        }), I.push(t)) : "finish" === g && (e[2].duration = 1))
                                    })
                            })
                        }), "stop" === g && (d.each(I, function(t, e) {
                            h(e, !0)
                        }), D.promise && D.resolver(f)), t();
                    default:
                        if (!d.isPlainObject(g) || m.isEmptyObject(g)) {
                            if (m.isString(g) && b.Redirects[g]) {
                                var O = d.extend({}, y),
                                    M = O.duration,
                                    A = O.delay || 0;
                                return O.backwards === !0 && (f = d.extend(!0, [], f).reverse()), d.each(f, function(t, e) {
                                    parseFloat(O.stagger) ? O.delay = A + parseFloat(O.stagger) * t : m.isFunction(O.stagger) && (O.delay = A + O.stagger.call(e, t, k)), O.drag && (O.duration = parseFloat(M) || (/^(callout|transition)/.test(g) ? 1e3 : v), O.duration = Math.max(O.duration * (O.backwards ? 1 - t / k : (t + 1) / k), .75 * O.duration, 200)), b.Redirects[g].call(e, e, O || {}, t, k, f, D.promise ? D : n)
                                }), t()
                            }
                            var E = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return D.promise ? D.rejecter(new Error(E)) : console.log(E), t()
                        }
                        P = "start"
                }
                var N = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    H = [];
                d.each(f, function(t, e) {
                    m.isNode(e) && s.call(e)
                });
                var $, O = d.extend({}, b.defaults, y);
                if (O.loop = parseInt(O.loop), $ = 2 * O.loop - 1, O.loop)
                    for (var z = 0; $ > z; z++) {
                        var W = {
                            delay: O.delay,
                            progress: O.progress
                        };
                        z === $ - 1 && (W.display = O.display, W.visibility = O.visibility, W.complete = O.complete), x(f, "reverse", W)
                    }
                return t()
            }
        };
        b = d.extend(x, b), b.animate = x;
        var k = e.requestAnimationFrame || f;
        return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
            i.hidden ? (k = function(t) {
                return setTimeout(function() {
                    t(!0)
                }, 16)
            }, u()) : k = e.requestAnimationFrame || f
        }), t.Velocity = b, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function(t, e) {
            b.Redirects["slide" + e] = function(t, i, s, o, a, r) {
                var l = d.extend({}, i),
                    c = l.begin,
                    u = l.complete,
                    h = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    },
                    p = {};
                l.display === n && (l.display = "Down" === e ? "inline" === b.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                    c && c.call(a, a);
                    for (var i in h) {
                        p[i] = t.style[i];
                        var n = b.CSS.getPropertyValue(t, i);
                        h[i] = "Down" === e ? [n, 0] : [0, n]
                    }
                    p.overflow = t.style.overflow, t.style.overflow = "hidden"
                }, l.complete = function() {
                    for (var e in p) t.style[e] = p[e];
                    u && u.call(a, a), r && r.resolver(a)
                }, b(t, h, l)
            }
        }), d.each(["In", "Out"], function(t, e) {
            b.Redirects["fade" + e] = function(t, i, s, o, a, r) {
                var l = d.extend({}, i),
                    c = {
                        opacity: "In" === e ? 1 : 0
                    },
                    u = l.complete;
                l.complete = s !== o - 1 ? l.begin = null : function() {
                    u && u.call(a, a), r && r.resolver(a)
                }, l.display === n && (l.display = "In" === e ? "auto" : "none"), b(this, c, l)
            }
        }), b
    }(window.jQuery || window.Zepto || window, window, document)
})), ! function(t, e, i, n) {
    "use strict";

    function s(t, e, i) {
        return setTimeout(u(t, i), e)
    }

    function o(t, e, i) {
        return !!Array.isArray(t) && (a(t, i[e], i), !0)
    }

    function a(t, e, i) {
        var s;
        if (t)
            if (t.forEach) t.forEach(e, i);
            else if (t.length !== n)
                for (s = 0; s < t.length;) e.call(i, t[s], s, t), s++;
            else
                for (s in t) t.hasOwnProperty(s) && e.call(i, t[s], s, t)
    }

    function r(t, e, i) {
        for (var s = Object.keys(e), o = 0; o < s.length;)(!i || i && t[s[o]] === n) && (t[s[o]] = e[s[o]]), o++;
        return t
    }

    function l(t, e) {
        return r(t, e, !0)
    }

    function c(t, e, i) {
        var n, s = e.prototype;
        n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && r(n, i)
    }

    function u(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }

    function h(t, e) {
        return typeof t == ut ? t.apply(e ? e[0] || n : n, e) : t
    }

    function d(t, e) {
        return t === n ? e : t
    }

    function p(t, e, i) {
        a(v(e), function(e) {
            t.addEventListener(e, i, !1)
        })
    }

    function f(t, e, i) {
        a(v(e), function(e) {
            t.removeEventListener(e, i, !1)
        })
    }

    function m(t, e) {
        for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
        }
        return !1
    }

    function g(t, e) {
        return t.indexOf(e) > -1
    }

    function v(t) {
        return t.trim().split(/\s+/g)
    }

    function y(t, e, i) {
        if (t.indexOf && !i) return t.indexOf(e);
        for (var n = 0; n < t.length;) {
            if (i && t[n][i] == e || !i && t[n] === e) return n;
            n++
        }
        return -1
    }

    function b(t) {
        return Array.prototype.slice.call(t, 0)
    }

    function _(t, e, i) {
        for (var n = [], s = [], o = 0; o < t.length;) {
            var a = e ? t[o][e] : t[o];
            y(s, a) < 0 && n.push(t[o]), s[o] = a, o++
        }
        return i && (n = e ? n.sort(function(t, i) {
            return t[e] > i[e]
        }) : n.sort()), n
    }

    function w(t, e) {
        for (var i, s, o = e[0].toUpperCase() + e.slice(1), a = 0; a < lt.length;) {
            if (i = lt[a], s = i ? i + o : e, s in t) return s;
            a++
        }
        return n
    }

    function x() {
        return ft++
    }

    function k(t) {
        var e = t.ownerDocument;
        return e.defaultView || e.parentWindow
    }

    function C(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            h(t.options.enable, [t]) && i.handler(e)
        }, this.init()
    }

    function T(t) {
        var e, i = t.options.inputClass;
        return new(e = i ? i : vt ? j : yt ? F : gt ? B : W)(t, S)
    }

    function S(t, e, i) {
        var n = i.pointers.length,
            s = i.changedPointers.length,
            o = e & Ct && 0 === n - s,
            a = e & (St | Dt) && 0 === n - s;
        i.isFirst = !!o, i.isFinal = !!a, o && (t.session = {}), i.eventType = e, D(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
    }

    function D(t, e) {
        var i = t.session,
            n = e.pointers,
            s = n.length;
        i.firstInput || (i.firstInput = O(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = O(e) : 1 === s && (i.firstMultiple = !1);
        var o = i.firstInput,
            a = i.firstMultiple,
            r = a ? a.center : o.center,
            l = e.center = M(n);
        e.timeStamp = pt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = H(r, l), e.distance = N(r, l), P(i, e), e.offsetDirection = E(e.deltaX, e.deltaY), e.scale = a ? z(a.pointers, n) : 1, e.rotation = a ? $(a.pointers, n) : 0, I(i, e);
        var c = t.element;
        m(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
    }

    function P(t, e) {
        var i = e.center,
            n = t.offsetDelta || {},
            s = t.prevDelta || {},
            o = t.prevInput || {};
        (e.eventType === Ct || o.eventType === St) && (s = t.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
        }, n = t.offsetDelta = {
            x: i.x,
            y: i.y
        }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
    }

    function I(t, e) {
        var i, s, o, a, r = t.lastInterval || e,
            l = e.timeStamp - r.timeStamp;
        if (e.eventType != Dt && (l > kt || r.velocity === n)) {
            var c = r.deltaX - e.deltaX,
                u = r.deltaY - e.deltaY,
                h = A(l, c, u);
            s = h.x, o = h.y, i = dt(h.x) > dt(h.y) ? h.x : h.y, a = E(c, u), t.lastInterval = e
        } else i = r.velocity, s = r.velocityX, o = r.velocityY, a = r.direction;
        e.velocity = i, e.velocityX = s, e.velocityY = o, e.direction = a
    }

    function O(t) {
        for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
            clientX: ht(t.pointers[i].clientX),
            clientY: ht(t.pointers[i].clientY)
        }, i++;
        return {
            timeStamp: pt(),
            pointers: e,
            center: M(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }

    function M(t) {
        var e = t.length;
        if (1 === e) return {
            x: ht(t[0].clientX),
            y: ht(t[0].clientY)
        };
        for (var i = 0, n = 0, s = 0; e > s;) i += t[s].clientX, n += t[s].clientY, s++;
        return {
            x: ht(i / e),
            y: ht(n / e)
        }
    }

    function A(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }

    function E(t, e) {
        return t === e ? Pt : dt(t) >= dt(e) ? t > 0 ? It : Ot : e > 0 ? Mt : At
    }

    function N(t, e, i) {
        i || (i = $t);
        var n = e[i[0]] - t[i[0]],
            s = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + s * s)
    }

    function H(t, e, i) {
        i || (i = $t);
        var n = e[i[0]] - t[i[0]],
            s = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(s, n) / Math.PI
    }

    function $(t, e) {
        return H(e[1], e[0], zt) - H(t[1], t[0], zt)
    }

    function z(t, e) {
        return N(e[0], e[1], zt) / N(t[0], t[1], zt)
    }

    function W() {
        this.evEl = jt, this.evWin = Lt, this.allow = !0, this.pressed = !1, C.apply(this, arguments)
    }

    function j() {
        this.evEl = Rt, this.evWin = Bt, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function L() {
        this.evTarget = Yt, this.evWin = Xt, this.started = !1, C.apply(this, arguments)
    }

    function q(t, e) {
        var i = b(t.touches),
            n = b(t.changedTouches);
        return e & (St | Dt) && (i = _(i.concat(n), "identifier", !0)), [i, n]
    }

    function F() {
        this.evTarget = Qt, this.targetIds = {}, C.apply(this, arguments)
    }

    function R(t, e) {
        var i = b(t.touches),
            n = this.targetIds;
        if (e & (Ct | Tt) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
        var s, o, a = b(t.changedTouches),
            r = [],
            l = this.target;
        if (o = i.filter(function(t) {
                return m(t.target, l)
            }), e === Ct)
            for (s = 0; s < o.length;) n[o[s].identifier] = !0, s++;
        for (s = 0; s < a.length;) n[a[s].identifier] && r.push(a[s]), e & (St | Dt) && delete n[a[s].identifier], s++;
        return r.length ? [_(o.concat(r), "identifier", !0), r] : void 0
    }

    function B() {
        C.apply(this, arguments);
        var t = u(this.handler, this);
        this.touch = new F(this.manager, t), this.mouse = new W(this.manager, t)
    }

    function V(t, e) {
        this.manager = t, this.set(e)
    }

    function Y(t) {
        if (g(t, ee)) return ee;
        var e = g(t, ie),
            i = g(t, ne);
        return e && i ? ie + " " + ne : e || i ? e ? ie : ne : g(t, te) ? te : Jt
    }

    function X(t) {
        this.id = x(), this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = d(this.options.enable, !0), this.state = se, this.simultaneous = {}, this.requireFail = []
    }

    function U(t) {
        return t & ce ? "cancel" : t & re ? "end" : t & ae ? "move" : t & oe ? "start" : ""
    }

    function Q(t) {
        return t == At ? "down" : t == Mt ? "up" : t == It ? "left" : t == Ot ? "right" : ""
    }

    function K(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }

    function G() {
        X.apply(this, arguments)
    }

    function Z() {
        G.apply(this, arguments), this.pX = null, this.pY = null
    }

    function J() {
        G.apply(this, arguments)
    }

    function tt() {
        X.apply(this, arguments), this._timer = null, this._input = null
    }

    function et() {
        G.apply(this, arguments)
    }

    function it() {
        G.apply(this, arguments)
    }

    function nt() {
        X.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function st(t, e) {
        return e = e || {}, e.recognizers = d(e.recognizers, st.defaults.preset), new ot(t, e)
    }

    function ot(t, e) {
        e = e || {}, this.options = l(e, st.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = T(this), this.touchAction = new V(this, this.options.touchAction), at(this, !0), a(e.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
    }

    function at(t, e) {
        var i = t.element;
        a(t.options.cssProps, function(t, n) {
            i.style[w(i.style, n)] = e ? t : ""
        })
    }

    function rt(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
    }
    var lt = ["", "webkit", "moz", "MS", "ms", "o"],
        ct = e.createElement("div"),
        ut = "function",
        ht = Math.round,
        dt = Math.abs,
        pt = Date.now,
        ft = 1,
        mt = /mobile|tablet|ip(ad|hone|od)|android/i,
        gt = "ontouchstart" in t,
        vt = w(t, "PointerEvent") !== n,
        yt = gt && mt.test(navigator.userAgent),
        bt = "touch",
        _t = "pen",
        wt = "mouse",
        xt = "kinect",
        kt = 25,
        Ct = 1,
        Tt = 2,
        St = 4,
        Dt = 8,
        Pt = 1,
        It = 2,
        Ot = 4,
        Mt = 8,
        At = 16,
        Et = It | Ot,
        Nt = Mt | At,
        Ht = Et | Nt,
        $t = ["x", "y"],
        zt = ["clientX", "clientY"];
    C.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(k(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(k(this.element), this.evWin, this.domHandler)
        }
    };
    var Wt = {
            mousedown: Ct,
            mousemove: Tt,
            mouseup: St
        },
        jt = "mousedown",
        Lt = "mousemove mouseup";
    c(W, C, {
        handler: function(t) {
            var e = Wt[t.type];
            e & Ct && 0 === t.button && (this.pressed = !0), e & Tt && 1 !== t.which && (e = St), this.pressed && this.allow && (e & St && (this.pressed = !1), this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: wt,
                srcEvent: t
            }))
        }
    });
    var qt = {
            pointerdown: Ct,
            pointermove: Tt,
            pointerup: St,
            pointercancel: Dt,
            pointerout: Dt
        },
        Ft = {
            2: bt,
            3: _t,
            4: wt,
            5: xt
        },
        Rt = "pointerdown",
        Bt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && (Rt = "MSPointerDown", Bt = "MSPointerMove MSPointerUp MSPointerCancel"), c(j, C, {
        handler: function(t) {
            var e = this.store,
                i = !1,
                n = t.type.toLowerCase().replace("ms", ""),
                s = qt[n],
                o = Ft[t.pointerType] || t.pointerType,
                a = o == bt,
                r = y(e, t.pointerId, "pointerId");
            s & Ct && (0 === t.button || a) ? 0 > r && (e.push(t), r = e.length - 1) : s & (St | Dt) && (i = !0), 0 > r || (e[r] = t, this.callback(this.manager, s, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }), i && e.splice(r, 1))
        }
    });
    var Vt = {
            touchstart: Ct,
            touchmove: Tt,
            touchend: St,
            touchcancel: Dt
        },
        Yt = "touchstart",
        Xt = "touchstart touchmove touchend touchcancel";
    c(L, C, {
        handler: function(t) {
            var e = Vt[t.type];
            if (e === Ct && (this.started = !0), this.started) {
                var i = q.call(this, t, e);
                e & (St | Dt) && 0 === i[0].length - i[1].length && (this.started = !1), this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: bt,
                    srcEvent: t
                })
            }
        }
    });
    var Ut = {
            touchstart: Ct,
            touchmove: Tt,
            touchend: St,
            touchcancel: Dt
        },
        Qt = "touchstart touchmove touchend touchcancel";
    c(F, C, {
        handler: function(t) {
            var e = Ut[t.type],
                i = R.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: bt,
                srcEvent: t
            })
        }
    }), c(B, C, {
        handler: function(t, e, i) {
            var n = i.pointerType == bt,
                s = i.pointerType == wt;
            if (n) this.mouse.allow = !1;
            else if (s && !this.mouse.allow) return;
            e & (St | Dt) && (this.mouse.allow = !0), this.callback(t, e, i)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Kt = w(ct.style, "touchAction"),
        Gt = Kt !== n,
        Zt = "compute",
        Jt = "auto",
        te = "manipulation",
        ee = "none",
        ie = "pan-x",
        ne = "pan-y";
    V.prototype = {
        set: function(t) {
            t == Zt && (t = this.compute()), Gt && (this.manager.element.style[Kt] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return a(this.manager.recognizers, function(e) {
                h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }), Y(t.join(" "))
        },
        preventDefaults: function(t) {
            if (!Gt) {
                var e = t.srcEvent,
                    i = t.offsetDirection;
                if (this.manager.session.prevented) return void e.preventDefault();
                var n = this.actions,
                    s = g(n, ee),
                    o = g(n, ne),
                    a = g(n, ie);
                return s || o && i & Et || a && i & Nt ? this.preventSrc(e) : void 0
            }
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
        }
    };
    var se = 1,
        oe = 2,
        ae = 4,
        re = 8,
        le = re,
        ce = 16,
        ue = 32;
    X.prototype = {
        defaults: {},
        set: function(t) {
            return r(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
            if (o(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return t = K(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
            return o(t, "dropRecognizeWith", this) ? this : (t = K(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function(t) {
            if (o(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return t = K(t, this), -1 === y(e, t) && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
            if (o(t, "dropRequireFailure", this)) return this;
            t = K(t, this);
            var e = y(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                i.manager.emit(i.options.event + (e ? U(n) : ""), t)
            }
            var i = this,
                n = this.state;
            re > n && e(!0), e(), n >= re && e(!0)
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void(this.state = ue)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
                if (!(this.requireFail[t].state & (ue | se))) return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = r({}, t);
            return h(this.options.enable, [this, e]) ? (this.state & (le | ce | ue) && (this.state = se), this.state = this.process(e), void(this.state & (oe | ae | re | ce) && this.tryEmit(e))) : (this.reset(), void(this.state = ue))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, c(G, X, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state,
                i = t.eventType,
                n = e & (oe | ae),
                s = this.attrTest(t);
            return n && (i & Dt || !s) ? e | ce : n || s ? i & St ? e | re : e & oe ? e | ae : oe : ue
        }
    }), c(Z, G, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Ht
        },
        getTouchAction: function() {
            var t = this.options.direction,
                e = [];
            return t & Et && e.push(ne), t & Nt && e.push(ie), e
        },
        directionTest: function(t) {
            var e = this.options,
                i = !0,
                n = t.distance,
                s = t.direction,
                o = t.deltaX,
                a = t.deltaY;
            return s & e.direction || (e.direction & Et ? (s = 0 === o ? Pt : 0 > o ? It : Ot, i = o != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === a ? Pt : 0 > a ? Mt : At, i = a != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
        },
        attrTest: function(t) {
            return G.prototype.attrTest.call(this, t) && (this.state & oe || !(this.state & oe) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Q(t.direction);
            e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
        }
    }), c(J, G, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ee]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & oe)
        },
        emit: function(t) {
            if (this._super.emit.call(this, t), 1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + e, t)
            }
        }
    }), c(tt, X, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Jt]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                o = t.deltaTime > e.time;
            if (this._input = t, !n || !i || t.eventType & (St | Dt) && !o) this.reset();
            else if (t.eventType & Ct) this.reset(), this._timer = s(function() {
                this.state = le, this.tryEmit()
            }, e.time, this);
            else if (t.eventType & St) return le;
            return ue
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === le && (t && t.eventType & St ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = pt(), this.manager.emit(this.options.event, this._input)))
        }
    }), c(et, G, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ee]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & oe)
        }
    }), c(it, G, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Et | Nt,
            pointers: 1
        },
        getTouchAction: function() {
            return Z.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (Et | Nt) ? e = t.velocity : i & Et ? e = t.velocityX : i & Nt && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && dt(e) > this.options.velocity && t.eventType & St
        },
        emit: function(t) {
            var e = Q(t.direction);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
    }), c(nt, X, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [te]
        },
        process: function(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                n = t.distance < e.threshold,
                o = t.deltaTime < e.time;
            if (this.reset(), t.eventType & Ct && 0 === this.count) return this.failTimeout();
            if (n && o && i) {
                if (t.eventType != St) return this.failTimeout();
                var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
                    r = !this.pCenter || N(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp, this.pCenter = t.center, r && a ? this.count += 1 : this.count = 1, this._input = t;
                var l = this.count % e.taps;
                if (0 === l) return this.hasRequireFailures() ? (this._timer = s(function() {
                    this.state = le, this.tryEmit()
                }, e.interval, this), oe) : le
            }
            return ue
        },
        failTimeout: function() {
            return this._timer = s(function() {
                this.state = ue
            }, this.options.interval, this), ue
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == le && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), st.VERSION = "2.0.4", st.defaults = {
        domEvents: !1,
        touchAction: Zt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [et, {
                enable: !1
            }],
            [J, {
                enable: !1
            },
                ["rotate"]
            ],
            [it, {
                direction: Et
            }],
            [Z, {
                direction: Et
            },
                ["swipe"]
            ],
            [nt],
            [nt, {
                event: "doubletap",
                taps: 2
            },
                ["tap"]
            ],
            [tt]
        ],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var he = 1,
        de = 2;
    ot.prototype = {
        set: function(t) {
            return r(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
            this.session.stopped = t ? de : he
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers,
                    s = e.curRecognizer;
                (!s || s && s.state & le) && (s = e.curRecognizer = null);
                for (var o = 0; o < n.length;) i = n[o], e.stopped === de || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (oe | ae | re) && (s = e.curRecognizer = i), o++
            }
        },
        get: function(t) {
            if (t instanceof X) return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t) return e[i];
            return null
        },
        add: function(t) {
            if (o(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
            if (o(t, "remove", this)) return this;
            var e = this.recognizers;
            return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
        },
        on: function(t, e) {
            var i = this.handlers;
            return a(v(t), function(t) {
                i[t] = i[t] || [], i[t].push(e)
            }), this
        },
        off: function(t, e) {
            var i = this.handlers;
            return a(v(t), function(t) {
                e ? i[t].splice(y(i[t], e), 1) : delete i[t]
            }), this
        },
        emit: function(t, e) {
            this.options.domEvents && rt(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t, e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                };
                for (var n = 0; n < i.length;) i[n](e), n++
            }
        },
        destroy: function() {
            this.element && at(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, r(st, {
        INPUT_START: Ct,
        INPUT_MOVE: Tt,
        INPUT_END: St,
        INPUT_CANCEL: Dt,
        STATE_POSSIBLE: se,
        STATE_BEGAN: oe,
        STATE_CHANGED: ae,
        STATE_ENDED: re,
        STATE_RECOGNIZED: le,
        STATE_CANCELLED: ce,
        STATE_FAILED: ue,
        DIRECTION_NONE: Pt,
        DIRECTION_LEFT: It,
        DIRECTION_RIGHT: Ot,
        DIRECTION_UP: Mt,
        DIRECTION_DOWN: At,
        DIRECTION_HORIZONTAL: Et,
        DIRECTION_VERTICAL: Nt,
        DIRECTION_ALL: Ht,
        Manager: ot,
        Input: C,
        TouchAction: V,
        TouchInput: F,
        MouseInput: W,
        PointerEventInput: j,
        TouchMouseInput: B,
        SingleTouchInput: L,
        Recognizer: X,
        AttrRecognizer: G,
        Tap: nt,
        Pan: Z,
        Swipe: it,
        Pinch: J,
        Rotate: et,
        Press: tt,
        on: p,
        off: f,
        each: a,
        merge: l,
        extend: r,
        inherit: c,
        bindFn: u,
        prefixed: w
    }), typeof define == ut && define.amd ? define(function() {
        return st
    }) : "undefined" != typeof module && module.exports ? module.exports = st : t[i] = st
}(window, document, "Hammer"),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
    }(function(t, e) {
        function i(i, n) {
            var s = t(i);
            s.data("hammer") || s.data("hammer", new e(s[0], n))
        }
        t.fn.hammer = function(t) {
            return this.each(function() {
                i(this, t)
            })
        }, e.Manager.prototype.emit = function(e) {
            return function(i, n) {
                e.call(this, i, n), t(this.element).trigger({
                    type: i,
                    gesture: n
                })
            }
        }(e.Manager.prototype.emit)
    }),
    function(t) {
        t.Package ? Materialize = {} : t.Materialize = {}
    }(window), Materialize.guid = function() {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(), Materialize.elementOrParentIsFixed = function(t) {
    var e = $(t),
        i = e.add(e.parents()),
        n = !1;
    return i.each(function() {
        if ("fixed" === $(this).css("position")) return n = !0, !1
    }), n
};
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity,
    function(t) {
        t.fn.collapsible = function(e) {
            var i = {
                accordion: void 0
            };
            return e = t.extend(i, e), this.each(function() {
                function i(e) {
                    r = a.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }), r.not(e).removeClass("active").parent().removeClass("active"), r.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    })
                }

                function n(e) {
                    e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    })
                }

                function s(t) {
                    var e = o(t);
                    return e.length > 0
                }

                function o(t) {
                    return t.closest("li > .collapsible-header")
                }
                var a = t(this),
                    r = t(this).find("> li > .collapsible-header"),
                    l = a.data("collapsible");
                a.off("click.collapse", "> li > .collapsible-header"), r.off("click.collapse"), a.on("click.collapse", "> li > .collapsible-header", function(a) {
                    var r = t(this),
                        c = t(a.target);
                    s(c) && (c = o(c)), c.toggleClass("active"), e.accordion || "accordion" === l || void 0 === l ? i(c) : (n(c), r.hasClass("active") && n(r))
                });
                var r = a.find("> li > .collapsible-header");
                e.accordion || "accordion" === l || void 0 === l ? i(r.filter(".active").first()) : r.filter(".active").each(function() {
                    n(t(this))
                })
            })
        }, t(document).ready(function() {
            t(".collapsible").collapsible()
        })
    }(jQuery),
    function(t) {
        t.fn.scrollTo = function(e) {
            return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
        }, t.fn.dropdown = function(e) {
            var i = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function n() {
                    void 0 !== a.data("induration") && (r.inDuration = a.data("inDuration")), void 0 !== a.data("outduration") && (r.outDuration = a.data("outDuration")), void 0 !== a.data("constrainwidth") && (r.constrain_width = a.data("constrainwidth")), void 0 !== a.data("hover") && (r.hover = a.data("hover")), void 0 !== a.data("gutter") && (r.gutter = a.data("gutter")), void 0 !== a.data("beloworigin") && (r.belowOrigin = a.data("beloworigin")), void 0 !== a.data("alignment") && (r.alignment = a.data("alignment"))
                }

                function s(e) {
                    "focus" === e && (l = !0), n(), c.addClass("active"), a.addClass("active"), r.constrain_width === !0 ? c.css("width", a.outerWidth()) : c.css("white-space", "nowrap");
                    var i = window.innerHeight,
                        s = a.innerHeight(),
                        o = a.offset().left,
                        u = a.offset().top - t(window).scrollTop(),
                        h = r.alignment,
                        d = 0,
                        p = 0,
                        f = 0;
                    r.belowOrigin === !0 && (f = s);
                    var m = 0,
                        g = a.parent();
                    if (!g.is("body") && g[0].scrollHeight > g[0].clientHeight && (m = g[0].scrollTop), o + c.innerWidth() > t(window).width() ? h = "right" : o - c.innerWidth() + a.innerWidth() < 0 && (h = "left"), u + c.innerHeight() > i)
                        if (u + s - c.innerHeight() < 0) {
                            var v = i - u - f;
                            c.css("max-height", v)
                        } else f || (f += s), f -= c.innerHeight();
                    if ("left" === h) d = r.gutter, p = a.position().left + d;
                    else if ("right" === h) {
                        var y = a.position().left + a.outerWidth() - c.outerWidth();
                        d = -r.gutter, p = y + d
                    }
                    c.css({
                        position: "absolute",
                        top: a.position().top + f + m,
                        left: p
                    }), c.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: r.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: r.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function o() {
                    l = !1, c.fadeOut(r.outDuration), c.removeClass("active"), a.removeClass("active"), setTimeout(function() {
                        c.css("max-height", "")
                    }, r.outDuration)
                }
                var a = t(this),
                    r = t.extend({}, i, e),
                    l = !1,
                    c = t("#" + a.attr("data-activates"));
                if (n(), a.after(c), r.hover) {
                    var u = !1;
                    a.unbind("click." + a.attr("id")), a.on("mouseenter", function(t) {
                        u === !1 && (s(), u = !0)
                    }), a.on("mouseleave", function(e) {
                        var i = e.toElement || e.relatedTarget;
                        t(i).closest(".dropdown-content").is(c) || (c.stop(!0, !0), o(), u = !1)
                    }), c.on("mouseleave", function(e) {
                        var i = e.toElement || e.relatedTarget;
                        t(i).closest(".dropdown-button").is(a) || (c.stop(!0, !0), o(), u = !1)
                    })
                } else a.unbind("click." + a.attr("id")), a.bind("click." + a.attr("id"), function(e) {
                    l || (a[0] != e.currentTarget || a.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? a.hasClass("active") && (o(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (e.preventDefault(), s("click")), c.hasClass("active") && t(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function(e) {
                        c.is(e.target) || a.is(e.target) || a.find(e.target).length || (o(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
                    }))
                });
                a.on("open", function(t, e) {
                    s(e)
                }), a.on("close", o)
            })
        }, t(document).ready(function() {
            t(".dropdown-button").dropdown()
        })
    }(jQuery),
    function(t) {
        var e = 0,
            i = 0,
            n = function() {
                return i++, "materialize-lean-overlay-" + i
            };
        t.fn.extend({
            openModal: function(i) {
                var s = t("body"),
                    o = s.innerWidth();
                s.css("overflow", "hidden"), s.width(o);
                var a = {
                        opacity: .5,
                        in_duration: 350,
                        out_duration: 250,
                        ready: void 0,
                        complete: void 0,
                        dismissible: !0,
                        starting_top: "4%"
                    },
                    r = t(this);
                r.hasClass("open") || (overlayID = n(), $overlay = t('<div class="lean-overlay"></div>'), lStack = ++e, $overlay.attr("id", overlayID).css("z-index", 1e3 + 2 * lStack), r.data("overlay-id", overlayID).css("z-index", 1e3 + 2 * lStack + 1), r.addClass("open"), t("body").append($overlay), i = t.extend(a, i), i.dismissible && ($overlay.click(function() {
                    r.closeModal(i)
                }), t(document).on("keyup.leanModal" + overlayID, function(t) {
                    27 === t.keyCode && r.closeModal(i)
                })), r.find(".modal-close").on("click.close", function(t) {
                    r.closeModal(i)
                }), $overlay.css({
                    display: "block",
                    opacity: 0
                }), r.css({
                    display: "block",
                    opacity: 0
                }), $overlay.velocity({
                    opacity: i.opacity
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic"
                }), r.data("associated-overlay", $overlay[0]), r.hasClass("bottom-sheet") ? r.velocity({
                    bottom: "0",
                    opacity: 1
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof i.ready && i.ready()
                    }
                }) : (t.Velocity.hook(r, "scaleX", .7), r.css({
                    top: i.starting_top
                }), r.velocity({
                    top: "10%",
                    opacity: 1,
                    scaleX: "1"
                }, {
                    duration: i.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof i.ready && i.ready()
                    }
                })))
            }
        }), t.fn.extend({
            closeModal: function(i) {
                var n = {
                        out_duration: 250,
                        complete: void 0
                    },
                    s = t(this),
                    o = s.data("overlay-id"),
                    a = t("#" + o);
                s.removeClass("open"), i = t.extend(n, i), t("body").css({
                    overflow: "",
                    width: ""
                }), s.find(".modal-close").off("click.close"), t(document).off("keyup.leanModal" + o), a.velocity({
                    opacity: 0
                }, {
                    duration: i.out_duration,
                    queue: !1,
                    ease: "easeOutQuart"
                }), s.hasClass("bottom-sheet") ? s.velocity({
                    bottom: "-100%",
                    opacity: 0
                }, {
                    duration: i.out_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        a.css({
                            display: "none"
                        }), "function" == typeof i.complete && i.complete(), a.remove(), e--
                    }
                }) : s.velocity({
                    top: i.starting_top,
                    opacity: 0,
                    scaleX: .7
                }, {
                    duration: i.out_duration,
                    complete: function() {
                        t(this).css("display", "none"), "function" == typeof i.complete && i.complete(), a.remove(), e--
                    }
                })
            }
        }), t.fn.extend({
            leanModal: function(e) {
                return this.each(function() {
                    var i = {
                            starting_top: "4%"
                        },
                        n = t.extend(i, e);
                    t(this).click(function(e) {
                        n.starting_top = (t(this).offset().top - t(window).scrollTop()) / 1.15;
                        var i = t(this).attr("href") || "#" + t(this).data("target");
                        t(i).openModal(n), e.preventDefault()
                    })
                })
            }
        })
    }(jQuery),
    function(t) {
        t.fn.materialbox = function() {
            return this.each(function() {
                function e() {
                    o = !1;
                    var e = l.parent(".material-placeholder"),
                        n = (window.innerWidth, window.innerHeight, l.data("width")),
                        a = l.data("height");
                    l.velocity("stop", !0), t("#materialbox-overlay").velocity("stop", !0), t(".materialbox-caption").velocity("stop", !0), t("#materialbox-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: r,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            s = !1, t(this).remove()
                        }
                    }), l.velocity({
                        width: n,
                        height: a,
                        left: 0,
                        top: 0
                    }, {
                        duration: r,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), t(".materialbox-caption").velocity({
                        opacity: 0
                    }, {
                        duration: r,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            e.css({
                                height: "",
                                width: "",
                                position: "",
                                top: "",
                                left: ""
                            }), l.css({
                                height: "",
                                top: "",
                                left: "",
                                width: "",
                                "max-width": "",
                                position: "",
                                "z-index": ""
                            }), l.removeClass("active"), o = !0, t(this).remove(), i && i.css("overflow", "")
                        }
                    })
                }
                if (!t(this).hasClass("initialized")) {
                    t(this).addClass("initialized");
                    var i, n, s = !1,
                        o = !0,
                        a = 275,
                        r = 200,
                        l = t(this),
                        c = t("<div></div>").addClass("material-placeholder");
                    l.wrap(c), l.on("click", function() {
                        var r = l.parent(".material-placeholder"),
                            c = window.innerWidth,
                            u = window.innerHeight,
                            h = l.width(),
                            d = l.height();
                        if (o === !1) return e(), !1;
                        if (s && o === !0) return e(), !1;
                        o = !1, l.addClass("active"), s = !0, r.css({
                            width: r[0].getBoundingClientRect().width,
                            height: r[0].getBoundingClientRect().height,
                            position: "relative",
                            top: 0,
                            left: 0
                        }), i = void 0, n = r[0].parentNode;
                        for (; null !== n && !t(n).is(document);) {
                            var p = t(n);
                            "visible" !== p.css("overflow") && (p.css("overflow", "visible"), i = void 0 === i ? p : i.add(p)), n = n.parentNode
                        }
                        l.css({
                            position: "absolute",
                            "z-index": 1e3
                        }).data("width", h).data("height", d);
                        var f = t('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).click(function() {
                            o === !0 && e()
                        });
                        if (l.before(f), f.velocity({
                                opacity: 1
                            }, {
                                duration: a,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), "" !== l.data("caption")) {
                            var m = t('<div class="materialbox-caption"></div>');
                            m.text(l.data("caption")), t("body").append(m), m.css({
                                display: "inline"
                            }), m.velocity({
                                opacity: 1
                            }, {
                                duration: a,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                        var g = 0,
                            v = h / c,
                            y = d / u,
                            b = 0,
                            _ = 0;
                        v > y ? (g = d / h, b = .9 * c, _ = .9 * c * g) : (g = h / d, b = .9 * u * g, _ = .9 * u), l.hasClass("responsive-img") ? l.velocity({
                            "max-width": b,
                            width: h
                        }, {
                            duration: 0,
                            queue: !1,
                            complete: function() {
                                l.css({
                                    left: 0,
                                    top: 0
                                }).velocity({
                                    height: _,
                                    width: b,
                                    left: t(document).scrollLeft() + c / 2 - l.parent(".material-placeholder").offset().left - b / 2,
                                    top: t(document).scrollTop() + u / 2 - l.parent(".material-placeholder").offset().top - _ / 2
                                }, {
                                    duration: a,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        o = !0
                                    }
                                })
                            }
                        }) : l.css("left", 0).css("top", 0).velocity({
                            height: _,
                            width: b,
                            left: t(document).scrollLeft() + c / 2 - l.parent(".material-placeholder").offset().left - b / 2,
                            top: t(document).scrollTop() + u / 2 - l.parent(".material-placeholder").offset().top - _ / 2
                        }, {
                            duration: a,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                o = !0
                            }
                        })
                    }), t(window).scroll(function() {
                        s && e()
                    }), t(document).keyup(function(t) {
                        27 === t.keyCode && o === !0 && s && e()
                    })
                }
            })
        }, t(document).ready(function() {
            t(".materialboxed").materialbox()
        })
    }(jQuery),
    function(t) {
        t.fn.parallax = function() {
            var e = t(window).width();
            return this.each(function(i) {
                function n(i) {
                    var n;
                    n = e < 601 ? s.height() > 0 ? s.height() : s.children("img").height() : s.height() > 0 ? s.height() : 500;
                    var o = s.children("img").first(),
                        a = o.height(),
                        r = a - n,
                        l = s.offset().top + n,
                        c = s.offset().top,
                        u = t(window).scrollTop(),
                        h = window.innerHeight,
                        d = u + h,
                        p = (d - c) / (n + h),
                        f = Math.round(r * p);
                    i && o.css("display", "block"), l > u && c < u + h && o.css("transform", "translate3D(-50%," + f + "px, 0)")
                }
                var s = t(this);
                s.addClass("parallax"), s.children("img").one("load", function() {
                    n(!0)
                }).each(function() {
                    this.complete && t(this).load()
                }), t(window).scroll(function() {
                    e = t(window).width(), n(!1)
                }), t(window).resize(function() {
                    e = t(window).width(), n(!1)
                })
            })
        }
    }(jQuery),
    function(t) {
        var e = {
            init: function() {
                return this.each(function() {
                    var e = t(this);
                    t(window).width();
                    e.width("100%");
                    var i, n, s = e.find("li.tab a"),
                        o = e.width(),
                        a = Math.max(o, e[0].scrollWidth) / s.length,
                        r = 0;
                    i = t(s.filter('[href="' + location.hash + '"]')), 0 === i.length && (i = t(this).find("li.tab a.active").first()), 0 === i.length && (i = t(this).find("li.tab a").first()), i.addClass("active"), r = s.index(i), r < 0 && (r = 0), void 0 !== i[0] && (n = t(i[0].hash)), e.append('<div class="indicator"></div>');
                    var l = e.find(".indicator");
                    e.is(":visible") && (l.css({
                        right: o - (r + 1) * a
                    }), l.css({
                        left: r * a
                    })), t(window).resize(function() {
                        o = e.width(), a = Math.max(o, e[0].scrollWidth) / s.length, r < 0 && (r = 0), 0 !== a && 0 !== o && (l.css({
                            right: o - (r + 1) * a
                        }), l.css({
                            left: r * a
                        }))
                    }), s.not(i).each(function() {
                        t(this.hash).hide()
                    }), e.on("click", "a", function(c) {
                        if (t(this).parent().hasClass("disabled")) return void c.preventDefault();
                        o = e.width(), a = Math.max(o, e[0].scrollWidth) / s.length, i.removeClass("active"), void 0 !== n && n.hide(), i = t(this), n = t(this.hash), s = e.find("li.tab a"), i.addClass("active");
                        var u = r;
                        r = s.index(t(this)), r < 0 && (r = 0), void 0 !== n && n.show(), r - u >= 0 ? (l.velocity({
                            right: o - (r + 1) * a
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), l.velocity({
                            left: r * a
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })) : (l.velocity({
                            left: r * a
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), l.velocity({
                            right: o - (r + 1) * a
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })), c.preventDefault()
                    })
                })
            },
            select_tab: function(t) {
                this.find('a[href="#' + t + '"]').trigger("click")
            }
        };
        t.fn.tabs = function(i) {
            return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
        }, t(document).ready(function() {
            t("ul.tabs").tabs()
        })
    }(jQuery),
    function(t) {
        t.fn.tooltip = function(i) {
            var n = 5,
                s = {
                    delay: 350
                };
            return "remove" === i ? (this.each(function() {
                t("#" + t(this).attr("data-tooltip-id")).remove(), t(this).off("mouseenter.tooltip mouseleave.tooltip")
            }), !1) : (i = t.extend(s, i), this.each(function() {
                var s = Materialize.guid(),
                    o = t(this);
                o.attr("data-tooltip-id", s);
                var a = t("<span></span>").text(o.attr("data-tooltip")),
                    r = t("<div></div>");
                r.addClass("material-tooltip").append(a).appendTo(t("body")).attr("id", s);
                var l = t("<div></div>").addClass("backdrop");
                l.appendTo(r), l.css({
                    top: 0,
                    left: 0
                }), o.off("mouseenter.tooltip mouseleave.tooltip");
                var c, u = !1;
                o.on({
                    "mouseenter.tooltip": function(t) {
                        var s = o.attr("data-delay");
                        s = void 0 === s || "" === s ? i.delay : s, c = setTimeout(function() {
                            u = !0, r.velocity("stop"), l.velocity("stop"), r.css({
                                display: "block",
                                left: "0px",
                                top: "0px"
                            }), r.children("span").text(o.attr("data-tooltip"));
                            var t, i, s, a = o.outerWidth(),
                                c = o.outerHeight(),
                                h = o.attr("data-position"),
                                d = r.outerHeight(),
                                p = r.outerWidth(),
                                f = "0px",
                                m = "0px",
                                g = 8;
                            "top" === h ? (t = o.offset().top - d - n, i = o.offset().left + a / 2 - p / 2, s = e(i, t, p, d), f = "-10px", l.css({
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 90%",
                                marginTop: d,
                                marginLeft: p / 2 - l.width() / 2
                            })) : "left" === h ? (t = o.offset().top + c / 2 - d / 2, i = o.offset().left - p - n, s = e(i, t, p, d), m = "-10px", l.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: d / 2,
                                marginLeft: p
                            })) : "right" === h ? (t = o.offset().top + c / 2 - d / 2, i = o.offset().left + a + n, s = e(i, t, p, d), m = "+10px", l.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: d / 2,
                                marginLeft: "0px"
                            })) : (t = o.offset().top + o.outerHeight() + n, i = o.offset().left + a / 2 - p / 2, s = e(i, t, p, d), f = "+10px", l.css({
                                marginLeft: p / 2 - l.width() / 2
                            })), r.css({
                                top: s.y,
                                left: s.x
                            }), g = p / 8, g < 8 && (g = 8), "right" !== h && "left" !== h || (g = p / 10, g < 6 && (g = 6)), r.velocity({
                                marginTop: f,
                                marginLeft: m
                            }, {
                                duration: 350,
                                queue: !1
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                delay: 50,
                                queue: !1
                            }), l.css({
                                display: "block"
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({
                                scale: g
                            }, {
                                duration: 300,
                                delay: 0,
                                queue: !1,
                                easing: "easeInOutQuad"
                            })
                        }, s)
                    },
                    "mouseleave.tooltip": function() {
                        u = !1, clearTimeout(c), setTimeout(function() {
                            1 != u && (r.velocity({
                                opacity: 0,
                                marginTop: 0,
                                marginLeft: 0
                            }, {
                                duration: 225,
                                queue: !1
                            }), l.velocity({
                                opacity: 0,
                                scale: 1
                            }, {
                                duration: 225,
                                queue: !1,
                                complete: function() {
                                    l.css("display", "none"), r.css("display", "none"), u = !1
                                }
                            }))
                        }, 225)
                    }
                })
            }))
        };
        var e = function(e, i, n, s) {
            var o = e,
                a = i;
            return o < 0 ? o = 4 : o + n > window.innerWidth && (o -= o + n - window.innerWidth), a < 0 ? a = 4 : a + s > window.innerHeight + t(window).scrollTop && (a -= a + s - window.innerHeight), {
                x: o,
                y: a
            }
        };
        t(document).ready(function() {
            t(".tooltipped").tooltip()
        })
    }(jQuery),
    function(t) {
        "use strict";

        function e(t) {
            return null !== t && t === t.window
        }

        function i(t) {
            return e(t) ? t : 9 === t.nodeType && t.defaultView
        }

        function n(t) {
            var e, n, s = {
                    top: 0,
                    left: 0
                },
                o = t && t.ownerDocument;
            return e = o.documentElement, "undefined" != typeof t.getBoundingClientRect && (s = t.getBoundingClientRect()), n = i(o), {
                top: s.top + n.pageYOffset - e.clientTop,
                left: s.left + n.pageXOffset - e.clientLeft
            }
        }

        function s(t) {
            var e = "";
            for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
            return e
        }

        function o(t) {
            if (u.allowEvent(t) === !1) return null;
            for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                if (!(i instanceof SVGElement || i.className.indexOf("waves-effect") === -1)) {
                    e = i;
                    break
                }
                if (i.classList.contains("waves-effect")) {
                    e = i;
                    break
                }
                i = i.parentElement
            }
            return e
        }

        function a(e) {
            var i = o(e);
            null !== i && (c.show(e, i), "ontouchstart" in t && (i.addEventListener("touchend", c.hide, !1), i.addEventListener("touchcancel", c.hide, !1)), i.addEventListener("mouseup", c.hide, !1), i.addEventListener("mouseleave", c.hide, !1))
        }
        var r = r || {},
            l = document.querySelectorAll.bind(document),
            c = {
                duration: 750,
                show: function(t, e) {
                    if (2 === t.button) return !1;
                    var i = e || this,
                        o = document.createElement("div");
                    o.className = "waves-ripple", i.appendChild(o);
                    var a = n(i),
                        r = t.pageY - a.top,
                        l = t.pageX - a.left,
                        u = "scale(" + i.clientWidth / 100 * 10 + ")";
                    "touches" in t && (r = t.touches[0].pageY - a.top, l = t.touches[0].pageX - a.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", u), o.setAttribute("data-x", l), o.setAttribute("data-y", r);
                    var h = {
                        top: r + "px",
                        left: l + "px"
                    };
                    o.className = o.className + " waves-notransition", o.setAttribute("style", s(h)), o.className = o.className.replace("waves-notransition", ""), h["-webkit-transform"] = u, h["-moz-transform"] = u, h["-ms-transform"] = u, h["-o-transform"] = u, h.transform = u, h.opacity = "1", h["-webkit-transition-duration"] = c.duration + "ms", h["-moz-transition-duration"] = c.duration + "ms", h["-o-transition-duration"] = c.duration + "ms", h["transition-duration"] = c.duration + "ms", h["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", h["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", h["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", h["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", s(h))
                },
                hide: function(t) {
                    u.touchup(t);
                    var e = this,
                        i = (1.4 * e.clientWidth, null),
                        n = e.getElementsByClassName("waves-ripple");
                    if (!(n.length > 0)) return !1;
                    i = n[n.length - 1];
                    var o = i.getAttribute("data-x"),
                        a = i.getAttribute("data-y"),
                        r = i.getAttribute("data-scale"),
                        l = Date.now() - Number(i.getAttribute("data-hold")),
                        h = 350 - l;
                    h < 0 && (h = 0), setTimeout(function() {
                        var t = {
                            top: a + "px",
                            left: o + "px",
                            opacity: "0",
                            "-webkit-transition-duration": c.duration + "ms",
                            "-moz-transition-duration": c.duration + "ms",
                            "-o-transition-duration": c.duration + "ms",
                            "transition-duration": c.duration + "ms",
                            "-webkit-transform": r,
                            "-moz-transform": r,
                            "-ms-transform": r,
                            "-o-transform": r,
                            transform: r
                        };
                        i.setAttribute("style", s(t)), setTimeout(function() {
                            try {
                                e.removeChild(i)
                            } catch (t) {
                                return !1
                            }
                        }, c.duration)
                    }, h)
                },
                wrapInput: function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if ("input" === i.tagName.toLowerCase()) {
                            var n = i.parentNode;
                            if ("i" === n.tagName.toLowerCase() && n.className.indexOf("waves-effect") !== -1) continue;
                            var s = document.createElement("i");
                            s.className = i.className + " waves-input-wrapper";
                            var o = i.getAttribute("style");
                            o || (o = ""), s.setAttribute("style", o), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(s, i), s.appendChild(i)
                        }
                    }
                }
            },
            u = {
                touches: 0,
                allowEvent: function(t) {
                    var e = !0;
                    return "touchstart" === t.type ? u.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                        u.touches > 0 && (u.touches -= 1)
                    }, 500) : "mousedown" === t.type && u.touches > 0 && (e = !1), e
                },
                touchup: function(t) {
                    u.allowEvent(t)
                }
            };
        r.displayEffect = function(e) {
            e = e || {}, "duration" in e && (c.duration = e.duration), c.wrapInput(l(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", a, !1), document.body.addEventListener("mousedown", a, !1)
        }, r.attach = function(e) {
            "input" === e.tagName.toLowerCase() && (c.wrapInput([e]), e = e.parentElement), "ontouchstart" in t && e.addEventListener("touchstart", a, !1), e.addEventListener("mousedown", a, !1)
        }, t.Waves = r, document.addEventListener("DOMContentLoaded", function() {
            r.displayEffect()
        }, !1)
    }(window), Materialize.toast = function(t, e, i, n) {
    function s(t) {
        var e = document.createElement("div");
        if (e.classList.add("toast"), i)
            for (var s = i.split(" "), o = 0, a = s.length; o < a; o++) e.classList.add(s[o]);
        ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) ? e.appendChild(t): t instanceof jQuery ? e.appendChild(t[0]) : e.innerHTML = t;
        var r = new Hammer(e, {
            prevent_default: !1
        });
        return r.on("pan", function(t) {
            var i = t.deltaX,
                n = 80;
            e.classList.contains("panning") || e.classList.add("panning");
            var s = 1 - Math.abs(i / n);
            s < 0 && (s = 0), Vel(e, {
                left: i,
                opacity: s
            }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
            })
        }), r.on("panend", function(t) {
            var i = t.deltaX,
                s = 80;
            Math.abs(i) > s ? Vel(e, {
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof n && n(), e.parentNode.removeChild(e)
                }
            }) : (e.classList.remove("panning"), Vel(e, {
                left: 0,
                opacity: 1
            }, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }))
        }), e
    }
    i = i || "";
    var o = document.getElementById("toast-container");
    null === o && (o = document.createElement("div"), o.id = "toast-container", document.body.appendChild(o));
    var a = s(t);
    t && o.appendChild(a), a.style.top = "35px", a.style.opacity = 0, Vel(a, {
        top: "0px",
        opacity: 1
    }, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var r = e,
        l = setInterval(function() {
            null === a.parentNode && window.clearInterval(l), a.classList.contains("panning") || (r -= 20), r <= 0 && (Vel(a, {
                opacity: 0,
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof n && n(), this[0].parentNode.removeChild(this[0])
                }
            }), window.clearInterval(l))
        }, 20)
},
    function(t) {
        var e = {
            init: function(e) {
                var i = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                e = t.extend(i, e), t(this).each(function() {
                    function i(i) {
                        a = !1, r = !1, t("body").css({
                            overflow: "",
                            width: ""
                        }), t("body").addClass("nav-hide").removeClass("nav-openned"), t("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                t(this).remove()
                            }
                        }), "left" === e.edge ? (o.css({
                            width: "",
                            right: "",
                            left: "0"
                        }), s.velocity({
                            translateX: "-100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                i === !0 && (s.removeAttr("style"), s.css("width", e.menuWidth))
                            }
                        })) : (o.css({
                            width: "",
                            right: "0",
                            left: ""
                        }), s.velocity({
                            translateX: "100%"
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                i === !0 && (s.removeAttr("style"), s.css("width", e.menuWidth))
                            }
                        }))
                    }
                    var n = t(this),
                        s = t("#" + n.attr("data-activates"));
                    240 != e.menuWidth && s.css("width", e.menuWidth);
                    var o = t('<div class="drag-target"></div>');
                    t("body").append(o).addClass("nav-hide").removeClass("nav-openned"), "left" == e.edge ? (s.css("transform", "translateX(-100%)"), o.css({
                        left: 0
                    })) : (s.addClass("right-aligned").css("transform", "translateX(100%)"), o.css({
                        right: 0
                    })), s.hasClass("fixed") && window.innerWidth > 992 && s.css("transform", "translateX(0)"), s.hasClass("fixed") && t(window).resize(function() {
                        window.innerWidth > 992 ? 0 != t("#sidenav-overlay").length && r ? i(!0) : s.css("transform", "translateX(0%)") : r === !1 && ("left" === e.edge ? s.css("transform", "translateX(-100%)") : s.css("transform", "translateX(100%)"))
                    }), e.closeOnClick === !0 && s.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        i()
                    });
                    var a = !1,
                        r = !1;
                    o.on("click", function() {
                        i()
                    }), o.hammer({
                        prevent_default: !1
                    }).bind("pan", function(n) {
                        if ("touch" == n.gesture.pointerType) {
                            var o = (n.gesture.direction, n.gesture.center.x),
                                a = (n.gesture.center.y, n.gesture.velocityX, t("body")),
                                l = a.innerWidth();
                            if (a.css("overflow", "hidden"), a.width(l), 0 === t("#sidenav-overlay").length) {
                                var c = t('<div id="sidenav-overlay"></div>');
                                c.css("opacity", 0).click(function() {
                                    i()
                                }), t("body").append(c)
                            }
                            if ("left" === e.edge && (o > e.menuWidth ? o = e.menuWidth : o < 0 && (o = 0)), "left" === e.edge) o < e.menuWidth / 2 ? r = !1 : o >= e.menuWidth / 2 && (r = !0), s.css("transform", "translateX(" + (o - e.menuWidth) + "px)");
                            else {
                                o < window.innerWidth - e.menuWidth / 2 ? r = !0 : o >= window.innerWidth - e.menuWidth / 2 && (r = !1);
                                var u = o - e.menuWidth / 2;
                                u < 0 && (u = 0), s.css("transform", "translateX(" + u + "px)")
                            }
                            var h;
                            "left" === e.edge ? (h = o / e.menuWidth, t("#sidenav-overlay").velocity({
                                opacity: h
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (h = Math.abs((o - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({
                                opacity: h
                            }, {
                                duration: 10,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(i) {
                        if ("touch" == i.gesture.pointerType) {
                            var n = i.gesture.velocityX,
                                l = i.gesture.center.x,
                                c = l - e.menuWidth,
                                u = l - e.menuWidth / 2;
                            c > 0 && (c = 0), u < 0 && (u = 0), a = !1, "left" === e.edge ? r && n <= .3 || n < -.5 ? (0 != c && s.velocity({
                                translateX: [0, c]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), o.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!r || n > .3) && (t("body").css({
                                overflow: "",
                                width: ""
                            }), s.velocity({
                                translateX: [-1 * e.menuWidth - 10, c]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t(this).remove()
                                }
                            }), o.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : r && n >= -.3 || n > .5 ? (s.velocity({
                                translateX: [0, u]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), o.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!r || n < -.3) && (t("body").css({
                                overflow: "",
                                width: ""
                            }), s.velocity({
                                translateX: [e.menuWidth + 10, u]
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), t("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t(this).remove()
                                }
                            }), o.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), n.click(function() {
                        if (r === !0) r = !1, a = !1, i();
                        else {
                            var n = t("body"),
                                l = n.innerWidth();
                            n.css("overflow", "hidden"), n.width(l), t("body").append(o), "left" === e.edge ? (o.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), s.velocity({
                                translateX: [0, -1 * e.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (o.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), s.velocity({
                                translateX: [0, e.menuWidth]
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }));
                            var c = t('<div id="sidenav-overlay"></div>');
                            c.css("opacity", 0).click(function() {
                                r = !1, a = !1, i(), c.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        t(this).remove()
                                    }
                                })
                            }), t("body").append(c), c.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    r = !0, a = !1, console.log("aaaa")
                                }
                            })
                        }
                        return !1
                    })
                })
            },
            show: function() {
                this.trigger("click")
            },
            hide: function() {
                t("#sidenav-overlay").trigger("click")
            }
        };
        t.fn.sideNav = function(i) {
            return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
        }
    }(jQuery),
    function(t) {
        function e(e, i, n, s) {
            var o = t();
            return t.each(a, function(t, a) {
                if (a.height() > 0) {
                    var r = a.offset().top,
                        l = a.offset().left,
                        c = l + a.width(),
                        u = r + a.height(),
                        h = !(l > i || c < s || r > n || u < e);
                    h && o.push(a)
                }
            }), o
        }

        function i() {
            ++c;
            var i = o.scrollTop(),
                n = o.scrollLeft(),
                s = n + o.width(),
                a = i + o.height(),
                l = e(i + u.top + 200, s + u.right, a + u.bottom, n + u.left);
            t.each(l, function(t, e) {
                var i = e.data("scrollSpy:ticks");
                "number" != typeof i && e.triggerHandler("scrollSpy:enter"), e.data("scrollSpy:ticks", c)
            }), t.each(r, function(t, e) {
                var i = e.data("scrollSpy:ticks");
                "number" == typeof i && i !== c && (e.triggerHandler("scrollSpy:exit"), e.data("scrollSpy:ticks", null))
            }), r = l
        }

        function n() {
            o.trigger("scrollSpy:winSize")
        }

        function s(t, e, i) {
            var n, s, o, a = null,
                r = 0;
            i || (i = {});
            var l = function() {
                r = i.leading === !1 ? 0 : h(), a = null, o = t.apply(n, s), n = s = null
            };
            return function() {
                var c = h();
                r || i.leading !== !1 || (r = c);
                var u = e - (c - r);
                return n = this, s = arguments, u <= 0 ? (clearTimeout(a), a = null, r = c, o = t.apply(n, s), n = s = null) : a || i.trailing === !1 || (a = setTimeout(l, u)), o
            }
        }
        var o = t(window),
            a = [],
            r = [],
            l = !1,
            c = 0,
            u = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            h = Date.now || function() {
                    return (new Date).getTime()
                };
        t.scrollSpy = function(e, n) {
            var r = [];
            e = t(e), e.each(function(e, i) {
                a.push(t(i)), t(i).data("scrollSpy:id", e), t('a[href="#' + t(i).attr("id") + '"]').click(function(e) {
                    e.preventDefault();
                    var i = t(this.hash).offset().top + 1;
                    t("html, body").animate({
                        scrollTop: i - 200
                    }, {
                        duration: 400,
                        queue: !1,
                        easing: "easeOutCubic"
                    })
                })
            }), n = n || {
                    throttle: 100
                }, u.top = n.offsetTop || 0, u.right = n.offsetRight || 0, u.bottom = n.offsetBottom || 0, u.left = n.offsetLeft || 0;
            var c = s(i, n.throttle || 100),
                h = function() {
                    t(document).ready(c)
                };
            return l || (o.on("scroll", h), o.on("resize", h), l = !0), setTimeout(h, 0), e.on("scrollSpy:enter", function() {
                r = t.grep(r, function(t) {
                    return 0 != t.height()
                });
                var e = t(this);
                r[0] ? (t('a[href="#' + r[0].attr("id") + '"]').removeClass("active"), e.data("scrollSpy:id") < r[0].data("scrollSpy:id") ? r.unshift(t(this)) : r.push(t(this))) : r.push(t(this)), t('a[href="#' + r[0].attr("id") + '"]').addClass("active")
            }), e.on("scrollSpy:exit", function() {
                if (r = t.grep(r, function(t) {
                        return 0 != t.height()
                    }), r[0]) {
                    t('a[href="#' + r[0].attr("id") + '"]').removeClass("active");
                    var e = t(this);
                    r = t.grep(r, function(t) {
                        return t.attr("id") != e.attr("id")
                    }), r[0] && t('a[href="#' + r[0].attr("id") + '"]').addClass("active")
                }
            }), e
        }, t.winSizeSpy = function(e) {
            return t.winSizeSpy = function() {
                return o
            }, e = e || {
                    throttle: 100
                }, o.on("resize", s(n, e.throttle || 100))
        }, t.fn.scrollSpy = function(e) {
            return t.scrollSpy(t(this), e)
        }
    }(jQuery),
    function(t) {
        var e = {
            init: function(e) {
                var i = {
                    indicators: !0,
                    height: 400,
                    transition: 500,
                    interval: 6e3
                };
                return e = t.extend(i, e), this.each(function() {
                    function i(t, e) {
                        t.hasClass("center-align") ? t.velocity({
                            opacity: 0,
                            translateY: -100
                        }, {
                            duration: e,
                            queue: !1
                        }) : t.hasClass("right-align") ? t.velocity({
                            opacity: 0,
                            translateX: 100
                        }, {
                            duration: e,
                            queue: !1
                        }) : t.hasClass("left-align") && t.velocity({
                            opacity: 0,
                            translateX: -100
                        }, {
                            duration: e,
                            queue: !1
                        })
                    }

                    function n(t) {
                        t >= c.length ? t = 0 : t < 0 && (t = c.length - 1), u = l.find(".active").index(), u != t && (s = c.eq(u), $caption = s.find(".caption"), s.removeClass("active"), s.velocity({
                            opacity: 0
                        }, {
                            duration: e.transition,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                c.not(".active").velocity({
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        }), i($caption, e.transition), e.indicators && o.eq(u).removeClass("active"), c.eq(t).velocity({
                            opacity: 1
                        }, {
                            duration: e.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), c.eq(t).find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: e.transition,
                            delay: e.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), c.eq(t).addClass("active"), e.indicators && o.eq(t).addClass("active"))
                    }
                    var s, o, a, r = t(this),
                        l = r.find("ul.slides").first(),
                        c = l.find("li"),
                        u = l.find(".active").index();
                    u != -1 && (s = c.eq(u)), r.hasClass("fullscreen") || (e.indicators ? r.height(e.height + 40) : r.height(e.height), l.height(e.height)), c.find(".caption").each(function() {
                        i(t(this), 0)
                    }), c.find("img").each(function() {
                        var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        t(this).attr("src") !== e && (t(this).css("background-image", "url(" + t(this).attr("src") + ")"), t(this).attr("src", e))
                    }), e.indicators && (o = t('<ul class="indicators"></ul>'), c.each(function(i) {
                        var s = t('<li class="indicator-item"></li>');
                        s.click(function() {
                            var i = l.parent(),
                                s = i.find(t(this)).index();
                            n(s), clearInterval(a), a = setInterval(function() {
                                u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u)
                            }, e.transition + e.interval)
                        }), o.append(s)
                    }), r.append(o), o = r.find("ul.indicators").find("li.indicator-item")), s ? s.show() : (c.first().addClass("active").velocity({
                        opacity: 1
                    }, {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), u = 0, s = c.eq(u), e.indicators && o.eq(u).addClass("active")), s.find("img").each(function() {
                        s.find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: e.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }), a = setInterval(function() {
                        u = l.find(".active").index(), n(u + 1)
                    }, e.transition + e.interval);
                    var h = !1,
                        d = !1,
                        p = !1;
                    r.hammer({
                        prevent_default: !1
                    }).bind("pan", function(t) {
                        if ("touch" === t.gesture.pointerType) {
                            clearInterval(a);
                            var e = t.gesture.direction,
                                i = t.gesture.deltaX,
                                n = t.gesture.velocityX;
                            $curr_slide = l.find(".active"), $curr_slide.velocity({
                                translateX: i
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), 4 === e && (i > r.innerWidth() / 2 || n < -.65) ? p = !0 : 2 === e && (i < -1 * r.innerWidth() / 2 || n > .65) && (d = !0);
                            var s;
                            d && (s = $curr_slide.next(), 0 === s.length && (s = c.first()), s.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })), p && (s = $curr_slide.prev(), 0 === s.length && (s = c.last()), s.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(t) {
                        "touch" === t.gesture.pointerType && ($curr_slide = l.find(".active"), h = !1, curr_index = l.find(".active").index(), !p && !d || c.length <= 1 ? $curr_slide.velocity({
                            translateX: 0
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }) : d ? (n(curr_index + 1), $curr_slide.velocity({
                            translateX: -1 * r.innerWidth()
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $curr_slide.velocity({
                                    opacity: 0,
                                    translateX: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        })) : p && (n(curr_index - 1), $curr_slide.velocity({
                            translateX: r.innerWidth()
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                $curr_slide.velocity({
                                    opacity: 0,
                                    translateX: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        })), d = !1, p = !1, clearInterval(a), a = setInterval(function() {
                            u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u)
                        }, e.transition + e.interval))
                    }), r.on("sliderPause", function() {
                        clearInterval(a)
                    }), r.on("sliderStart", function() {
                        clearInterval(a), a = setInterval(function() {
                            u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u)
                        }, e.transition + e.interval)
                    }), r.on("sliderNext", function() {
                        u = l.find(".active").index(), n(u + 1)
                    }), r.on("sliderPrev", function() {
                        u = l.find(".active").index(), n(u - 1)
                    })
                })
            },
            pause: function() {
                t(this).trigger("sliderPause")
            },
            start: function() {
                t(this).trigger("sliderStart")
            },
            next: function() {
                t(this).trigger("sliderNext")
            },
            prev: function() {
                t(this).trigger("sliderPrev")
            }
        };
        t.fn.slider = function(i) {
            return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
        }
    }(jQuery),
    function(t) {
        t(document).ready(function() {
            t(document).on("click.card", ".card", function(e) {
                t(this).find("> .card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        t(this).css({
                            display: "none"
                        })
                    }
                }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && (t(e.target).closest(".card").css("overflow", "hidden"), t(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))), t(".card-reveal").closest(".card").css("overflow", "hidden")
            })
        })
    }(jQuery),
    function(t) {
        t(document).ready(function() {
            t(document).on("click.chip", ".chip .material-icons", function(e) {
                t(this).parent().remove()
            })
        })
    }(jQuery),
    function(t) {
        t.fn.pushpin = function(e) {
            var i = {
                top: 0,
                bottom: 1 / 0,
                offset: 0
            };
            return e = t.extend(i, e), $index = 0, this.each(function() {
                function i(t) {
                    t.removeClass("pin-top"), t.removeClass("pinned"), t.removeClass("pin-bottom")
                }

                function n(n, s) {
                    n.each(function() {
                        e.top <= s && e.bottom >= s && !t(this).hasClass("pinned") && (i(t(this)), t(this).css("top", e.offset), t(this).addClass("pinned")), s < e.top && !t(this).hasClass("pin-top") && (i(t(this)), t(this).css("top", 0), t(this).addClass("pin-top")), s > e.bottom && !t(this).hasClass("pin-bottom") && (i(t(this)), t(this).addClass("pin-bottom"), t(this).css("top", e.bottom - a))
                    })
                }
                var s = Materialize.guid(),
                    o = t(this),
                    a = t(this).offset().top;
                n(o, t(window).scrollTop()), t(window).on("scroll." + s, function() {
                    var i = t(window).scrollTop() + e.offset;
                    n(o, i)
                })
            })
        }
    }(jQuery),
    function(t) {
        t(document).ready(function() {
            t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(i) {
                var n = t(this);
                e(n)
            }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(e) {
                var n = t(this);
                i(n)
            }), t(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(n) {
                var s = t(this),
                    o = s.parent();
                o.hasClass("active") ? i(o) : e(o)
            })
        }), t.fn.extend({
            openFAB: function() {
                e(t(this))
            },
            closeFAB: function() {
                i(t(this))
            }
        });
        var e = function(e) {
                if ($this = e, $this.hasClass("active") === !1) {
                    var i, n, s = $this.hasClass("horizontal");
                    s === !0 ? n = 40 : i = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: i + "px",
                        translateX: n + "px"
                    }, {
                        duration: 0
                    });
                    var o = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        t(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: o
                        }), o += 40
                    })
                }
            },
            i = function(t) {
                $this = t;
                var e, i, n = $this.hasClass("horizontal");
                n === !0 ? i = 40 : e = 40, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: e + "px",
                    translateX: i + "px"
                }, {
                    duration: 80
                })
            }
    }(jQuery),
    function(t) {
        Materialize.fadeInImage = function(e) {
            var i = t(e);
            i.css({
                opacity: 0
            }), t(i).velocity({
                opacity: 1
            }, {
                duration: 650,
                queue: !1,
                easing: "easeOutSine"
            }), t(i).velocity({
                opacity: 1
            }, {
                duration: 1300,
                queue: !1,
                easing: "swing",
                step: function(e, i) {
                    i.start = 100;
                    var n = e / 100,
                        s = 150 - (100 - e) / 1.75;
                    s < 100 && (s = 100), e >= 0 && t(this).css({
                        "-webkit-filter": "grayscale(" + n + ")brightness(" + s + "%)",
                        filter: "grayscale(" + n + ")brightness(" + s + "%)"
                    })
                }
            })
        }, Materialize.showStaggeredList = function(e) {
            var i = 0;
            t(e).find("li").velocity({
                translateX: "-100px"
            }, {
                duration: 0
            }), t(e).find("li").each(function() {
                t(this).velocity({
                    opacity: "1",
                    translateX: "0"
                }, {
                    duration: 800,
                    delay: i,
                    easing: [60, 10]
                }), i += 120
            })
        }, t(document).ready(function() {
            var e = !1,
                i = !1;
            t(".dismissable").each(function() {
                t(this).hammer({
                    prevent_default: !1
                }).bind("pan", function(n) {
                    if ("touch" === n.gesture.pointerType) {
                        var s = t(this),
                            o = n.gesture.direction,
                            a = n.gesture.deltaX,
                            r = n.gesture.velocityX;
                        s.velocity({
                            translateX: a
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === o && (a > s.innerWidth() / 2 || r < -.75) && (e = !0), 2 === o && (a < -1 * s.innerWidth() / 2 || r > .75) && (i = !0)
                    }
                }).bind("panend", function(n) {
                    if (Math.abs(n.gesture.deltaX) < t(this).innerWidth() / 2 && (i = !1, e = !1), "touch" === n.gesture.pointerType) {
                        var s = t(this);
                        if (e || i) {
                            var o;
                            o = e ? s.innerWidth() : -1 * s.innerWidth(), s.velocity({
                                translateX: o
                            }, {
                                duration: 100,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    s.css("border", "none"), s.velocity({
                                        height: 0,
                                        padding: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            s.remove()
                                        }
                                    })
                                }
                            })
                        } else s.velocity({
                            translateX: 0
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                        e = !1, i = !1
                    }
                })
            })
        })
    }(jQuery),
    function(t) {
        Materialize.scrollFire = function(t) {
            var e = !1;
            window.addEventListener("scroll", function() {
                e = !0
            }), setInterval(function() {
                if (e) {
                    e = !1;
                    for (var i = window.pageYOffset + window.innerHeight, n = 0; n < t.length; n++) {
                        var s = t[n],
                            o = s.selector,
                            a = s.offset,
                            r = s.callback,
                            l = document.querySelector(o);
                        if (null !== l) {
                            var c = l.getBoundingClientRect().top + window.pageYOffset;
                            if (i > c + a && s.done !== !0) {
                                if ("function" == typeof r) r.call(this);
                                else if ("string" == typeof r) {
                                    var u = new Function(r);
                                    u()
                                }
                                s.done = !0
                            }
                        }
                    }
                }
            }, 100)
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
    }(function(t) {
        function e(o, a, l, h) {
            function d() {
                return e._.node("div", e._.node("div", e._.node("div", e._.node("div", C.component.nodes(b.open), w.box), w.wrap), w.frame), w.holder)
            }

            function p() {
                x.data(a, C).addClass(w.input).attr("tabindex", -1).val(x.data("value") ? C.get("select", _.format) : o.value),
                _.editable || x.on("focus." + b.id + " click." + b.id, function(t) {
                    t.preventDefault(), C.$root.eq(0).focus()
                }).on("keydown." + b.id, g), s(o, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: o.id + "_root"
                })
            }

            function f() {
                C.$root.on({
                    keydown: g,
                    focusin: function(t) {
                        C.$root.removeClass(w.focused), t.stopPropagation()
                    },
                    "mousedown click": function(e) {
                        var i = e.target;
                        i != C.$root.children()[0] && (e.stopPropagation(), "mousedown" != e.type || t(i).is("input, select, textarea, button, option") || (e.preventDefault(), C.$root.eq(0).focus()))
                    }
                }).on({
                    focus: function() {
                        x.addClass(w.target)
                    },
                    blur: function() {
                        x.removeClass(w.target)
                    }
                }).on("focus.toOpen", v).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var e = t(this),
                        i = e.data(),
                        n = e.hasClass(w.navDisabled) || e.hasClass(w.disabled),
                        s = r();
                    s = s && (s.type || s.href), (n || s && !t.contains(C.$root[0], s)) && C.$root.eq(0).focus(), !n && i.nav ? C.set("highlight", C.component.item.highlight, {
                        nav: i.nav
                    }) : !n && "pick" in i ? C.set("select", i.pick) : i.clear ? C.clear().close(!0) : i.close && C.close(!0)
                }), s(C.$root[0], "hidden", !0)
            }

            function m() {
                var e;
                _.hiddenName === !0 ? (e = o.name, o.name = "") : (e = ["string" == typeof _.hiddenPrefix ? _.hiddenPrefix : "", "string" == typeof _.hiddenSuffix ? _.hiddenSuffix : "_submit"], e = e[0] + o.name + e[1]), C._hidden = t('<input type=hidden name="' + e + '"' + (x.data("value") || o.value ? ' value="' + C.get("select", _.formatSubmit) + '"' : "") + ">")[0], x.on("change." + b.id, function() {
                    C._hidden.value = o.value ? C.get("select", _.formatSubmit) : ""
                }), _.container ? t(_.container).append(C._hidden) : x.after(C._hidden)
            }

            function g(t) {
                var e = t.keyCode,
                    i = /^(8|46)$/.test(e);
                return 27 == e ? (C.close(), !1) : void((32 == e || i || !b.open && C.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? C.clear().close() : C.open()))
            }

            function v(t) {
                t.stopPropagation(), "focus" == t.type && C.$root.addClass(w.focused), C.open()
            }
            if (!o) return e;
            var y = !1,
                b = {
                    id: o.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                _ = l ? t.extend(!0, {}, l.defaults, h) : h || {},
                w = t.extend({}, e.klasses(), _.klass),
                x = t(o),
                k = function() {
                    return this.start()
                },
                C = k.prototype = {
                    constructor: k,
                    $node: x,
                    start: function() {
                        return b && b.start ? C : (b.methods = {}, b.start = !0, b.open = !1, b.type = o.type, o.autofocus = o == r(), o.readOnly = !_.editable, o.id = o.id || b.id, "text" != o.type && (o.type = "text"), C.component = new l(C, _), C.$root = t(e._.node("div", d(), w.picker, 'id="' + o.id + '_root" tabindex="0"')), f(), _.formatSubmit && m(), p(), _.container ? t(_.container).append(C.$root) : x.after(C.$root), C.on({
                            start: C.component.onStart,
                            render: C.component.onRender,
                            stop: C.component.onStop,
                            open: C.component.onOpen,
                            close: C.component.onClose,
                            set: C.component.onSet
                        }).on({
                            start: _.onStart,
                            render: _.onRender,
                            stop: _.onStop,
                            open: _.onOpen,
                            close: _.onClose,
                            set: _.onSet
                        }), y = i(C.$root.children()[0]), o.autofocus && C.open(), C.trigger("start").trigger("render"))
                    },
                    render: function(t) {
                        return t ? C.$root.html(d()) : C.$root.find("." + w.box).html(C.component.nodes(b.open)), C.trigger("render")
                    },
                    stop: function() {
                        return b.start ? (C.close(), C._hidden && C._hidden.parentNode.removeChild(C._hidden), C.$root.remove(), x.removeClass(w.input).removeData(a), setTimeout(function() {
                            x.off("." + b.id)
                        }, 0), o.type = b.type, o.readOnly = !1, C.trigger("stop"), b.methods = {}, b.start = !1, C) : C
                    },
                    open: function(i) {
                        return b.open ? C : (x.addClass(w.active), s(o, "expanded", !0), setTimeout(function() {
                            C.$root.addClass(w.opened), s(C.$root[0], "hidden", !1)
                        }, 0), i !== !1 && (b.open = !0, y && u.css("overflow", "hidden").css("padding-right", "+=" + n()), C.$root.eq(0).focus(), c.on("click." + b.id + " focusin." + b.id, function(t) {
                            var e = t.target;
                            e != o && e != document && 3 != t.which && C.close(e === C.$root.children()[0])
                        }).on("keydown." + b.id, function(i) {
                            var n = i.keyCode,
                                s = C.component.key[n],
                                o = i.target;
                            27 == n ? C.close(!0) : o != C.$root[0] || !s && 13 != n ? t.contains(C.$root[0], o) && 13 == n && (i.preventDefault(), o.click()) : (i.preventDefault(), s ? e._.trigger(C.component.key.go, C, [e._.trigger(s)]) : C.$root.find("." + w.highlighted).hasClass(w.disabled) || C.set("select", C.component.item.highlight).close())
                        })), C.trigger("open"))
                    },
                    close: function(t) {
                        return t && (C.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function() {
                            C.$root.on("focus.toOpen", v)
                        }, 0)), x.removeClass(w.active), s(o, "expanded", !1), setTimeout(function() {
                            C.$root.removeClass(w.opened + " " + w.focused), s(C.$root[0], "hidden", !0)
                        }, 0), b.open ? (b.open = !1, y && u.css("overflow", "").css("padding-right", "-=" + n()), c.off("." + b.id), C.trigger("close")) : C
                    },
                    clear: function(t) {
                        return C.set("clear", null, t)
                    },
                    set: function(e, i, n) {
                        var s, o, a = t.isPlainObject(e),
                            r = a ? e : {};
                        if (n = a && t.isPlainObject(i) ? i : n || {}, e) {
                            a || (r[e] = i);
                            for (s in r) o = r[s], s in C.component.item && (void 0 === o && (o = null), C.component.set(s, o, n)), "select" != s && "clear" != s || x.val("clear" == s ? "" : C.get(s, _.format)).trigger("change");
                            C.render()
                        }
                        return n.muted ? C : C.trigger("set", r)
                    },
                    get: function(t, i) {
                        if (t = t || "value", null != b[t]) return b[t];
                        if ("valueSubmit" == t) {
                            if (C._hidden) return C._hidden.value;
                            t = "value"
                        }
                        if ("value" == t) return o.value;
                        if (t in C.component.item) {
                            if ("string" == typeof i) {
                                var n = C.component.get(t);
                                return n ? e._.trigger(C.component.formats.toString, C.component, [i, n]) : ""
                            }
                            return C.component.get(t)
                        }
                    },
                    on: function(e, i, n) {
                        var s, o, a = t.isPlainObject(e),
                            r = a ? e : {};
                        if (e) {
                            a || (r[e] = i);
                            for (s in r) o = r[s], n && (s = "_" + s), b.methods[s] = b.methods[s] || [], b.methods[s].push(o)
                        }
                        return C
                    },
                    off: function() {
                        var t, e, i = arguments;
                        for (t = 0, namesCount = i.length; t < namesCount; t += 1) e = i[t], e in b.methods && delete b.methods[e];
                        return C
                    },
                    trigger: function(t, i) {
                        var n = function(t) {
                            var n = b.methods[t];
                            n && n.map(function(t) {
                                e._.trigger(t, C, [i])
                            })
                        };
                        return n("_" + t), n(t), C
                    }
                };
            return new k
        }

        function i(t) {
            var e, i = "position";
            return t.currentStyle ? e = t.currentStyle[i] : window.getComputedStyle && (e = getComputedStyle(t)[i]), "fixed" == e
        }

        function n() {
            if (u.height() <= l.height()) return 0;
            var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                i = e[0].offsetWidth;
            e.css("overflow", "scroll");
            var n = t('<div style="width:100%" />').appendTo(e),
                s = n[0].offsetWidth;
            return e.remove(), i - s
        }

        function s(e, i, n) {
            if (t.isPlainObject(i))
                for (var s in i) o(e, s, i[s]);
            else o(e, i, n)
        }

        function o(t, e, i) {
            t.setAttribute(("role" == e ? "" : "aria-") + e, i)
        }

        function a(e, i) {
            t.isPlainObject(e) || (e = {
                attribute: i
            }), i = "";
            for (var n in e) {
                var s = ("role" == n ? "" : "aria-") + n,
                    o = e[n];
                i += null == o ? "" : s + '="' + e[n] + '"'
            }
            return i
        }

        function r() {
            try {
                return document.activeElement
            } catch (t) {}
        }
        var l = t(window),
            c = t(document),
            u = t(document.documentElement);
        return e.klasses = function(t) {
            return t = t || "picker", {
                picker: t,
                opened: t + "--opened",
                focused: t + "--focused",
                input: t + "__input",
                active: t + "__input--active",
                target: t + "__input--target",
                holder: t + "__holder",
                frame: t + "__frame",
                wrap: t + "__wrap",
                box: t + "__box"
            }
        }, e._ = {
            group: function(t) {
                for (var i, n = "", s = e._.trigger(t.min, t); s <= e._.trigger(t.max, t, [s]); s += t.i) i = e._.trigger(t.item, t, [s]), n += e._.node(t.node, i[0], i[1], i[2]);
                return n
            },
            node: function(e, i, n, s) {
                return i ? (i = t.isArray(i) ? i.join("") : i, n = n ? ' class="' + n + '"' : "", s = s ? " " + s : "", "<" + e + n + s + ">" + i + "</" + e + ">") : ""
            },
            lead: function(t) {
                return (t < 10 ? "0" : "") + t
            },
            trigger: function(t, e, i) {
                return "function" == typeof t ? t.apply(e, i || []) : t
            },
            digits: function(t) {
                return /\d/.test(t[1]) ? 2 : 1
            },
            isDate: function(t) {
                return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
            },
            isInteger: function(t) {
                return {}.toString.call(t).indexOf("Number") > -1 && t % 1 === 0
            },
            ariaAttr: a
        }, e.extend = function(i, n) {
            t.fn[i] = function(s, o) {
                var a = this.data(i);
                return "picker" == s ? a : a && "string" == typeof s ? e._.trigger(a[s], a, [o]) : this.each(function() {
                    var o = t(this);
                    o.data(i) || new e(this, i, n, s)
                })
            }, t.fn[i].defaults = n.defaults
        }, e
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
    }(function(t, e) {
        function i(t, e) {
            var i = this,
                n = t.$node[0],
                s = n.value,
                o = t.$node.data("value"),
                a = o || s,
                r = o ? e.formatSubmit : e.format,
                l = function() {
                    return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
                };
            i.settings = e, i.$node = t.$node, i.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, i.item = {}, i.item.clear = null, i.item.disable = (e.disable || []).slice(0), i.item.enable = - function(t) {
                return t[0] === !0 ? t.shift() : -1
            }(i.item.disable), i.set("min", e.min).set("max", e.max).set("now"), a ? i.set("select", a, {
                format: r
            }) : i.set("select", null).set("highlight", i.item.now), i.key = {
                40: 7,
                38: -7,
                39: function() {
                    return l() ? -1 : 1
                },
                37: function() {
                    return l() ? 1 : -1
                },
                go: function(t) {
                    var e = i.item.highlight,
                        n = new Date(e.year, e.month, e.date + t);
                    i.set("highlight", n, {
                        interval: t
                    }), this.render()
                }
            }, t.on("render", function() {
                t.$root.find("." + e.klass.selectMonth).on("change", function() {
                    var i = this.value;
                    i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
                }), t.$root.find("." + e.klass.selectYear).on("change", function() {
                    var i = this.value;
                    i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var n = "";
                i.disabled(i.get("now")) && (n = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + n + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                t.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var n = 7,
            s = 6,
            o = t._;
        i.prototype.set = function(t, e, i) {
            var n = this,
                s = n.item;
            return null === e ? ("clear" == t && (t = "select"), s[t] = e, n) : (s["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function(s) {
                return e = n[s](t, e, i)
            }).pop(), "select" == t ? n.set("highlight", s.select, i) : "highlight" == t ? n.set("view", s.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (s.select && n.disabled(s.select) && n.set("select", s.select, i), s.highlight && n.disabled(s.highlight) && n.set("highlight", s.highlight, i)), n)
        }, i.prototype.get = function(t) {
            return this.item[t]
        }, i.prototype.create = function(t, i, n) {
            var s, a = this;
            return i = void 0 === i ? t : i, i == -(1 / 0) || i == 1 / 0 ? s = i : e.isPlainObject(i) && o.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = o.isDate(i) ? i : a.create().obj) : i = o.isInteger(i) || o.isDate(i) ? a.normalize(new Date(i), n) : a.now(t, i, n), {
                year: s || i.getFullYear(),
                month: s || i.getMonth(),
                date: s || i.getDate(),
                day: s || i.getDay(),
                obj: s || i,
                pick: s || i.getTime()
            }
        }, i.prototype.createRange = function(t, i) {
            var n = this,
                s = function(t) {
                    return t === !0 || e.isArray(t) || o.isDate(t) ? n.create(t) : t
                };
            return o.isInteger(t) || (t = s(t)), o.isInteger(i) || (i = s(i)), o.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : o.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), {
                from: s(t),
                to: s(i)
            }
        }, i.prototype.withinRange = function(t, e) {
            return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
        }, i.prototype.overlapRanges = function(t, e) {
            var i = this;
            return t = i.createRange(t.from, t.to), e = i.createRange(e.from, e.to), i.withinRange(t, e.from) || i.withinRange(t, e.to) || i.withinRange(e, t.from) || i.withinRange(e, t.to)
        }, i.prototype.now = function(t, e, i) {
            return e = new Date, i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i)
        }, i.prototype.navigate = function(t, i, n) {
            var s, o, a, r, l = e.isArray(i),
                c = e.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (o = i.year, a = i.month, r = i.date) : (o = +i[0], a = +i[1], r = +i[2]), n && n.nav && u && u.month !== a && (o = u.year, a = u.month), s = new Date(o, a + (n && n.nav ? n.nav : 0), 1), o = s.getFullYear(), a = s.getMonth(); new Date(o, a, r).getMonth() !== a;) r -= 1;
                i = [o, a, r]
            }
            return i
        }, i.prototype.normalize = function(t) {
            return t.setHours(0, 0, 0, 0), t
        }, i.prototype.measure = function(t, e) {
            var i = this;
            return e ? "string" == typeof e ? e = i.parse(t, e) : o.isInteger(e) && (e = i.now(t, e, {
                rel: e
            })) : e = "min" == t ? -(1 / 0) : 1 / 0, e
        }, i.prototype.viewset = function(t, e) {
            return this.create([e.year, e.month, 1])
        }, i.prototype.validate = function(t, i, n) {
            var s, a, r, l, c = this,
                u = i,
                h = n && n.interval ? n.interval : 1,
                d = c.item.enable === -1,
                p = c.item.min,
                f = c.item.max,
                m = d && c.item.disable.filter(function(t) {
                        if (e.isArray(t)) {
                            var n = c.create(t).pick;
                            n < i.pick ? s = !0 : n > i.pick && (a = !0)
                        }
                        return o.isInteger(t)
                    }).length;
            if ((!n || !n.nav) && (!d && c.disabled(i) || d && c.disabled(i) && (m || s || a) || !d && (i.pick <= p.pick || i.pick >= f.pick)))
                for (d && !m && (!a && h > 0 || !s && h < 0) && (h *= -1); c.disabled(i) && (Math.abs(h) > 1 && (i.month < u.month || i.month > u.month) && (i = u, h = h > 0 ? 1 : -1), i.pick <= p.pick ? (r = !0, h = 1, i = c.create([p.year, p.month, p.date + (i.pick === p.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0, h = -1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !r || !l);) i = c.create([i.year, i.month, i.date + h]);
            return i
        }, i.prototype.disabled = function(t) {
            var i = this,
                n = i.item.disable.filter(function(n) {
                    return o.isInteger(n) ? t.day === (i.settings.firstDay ? n : n - 1) % 7 : e.isArray(n) || o.isDate(n) ? t.pick === i.create(n).pick : e.isPlainObject(n) ? i.withinRange(n, t) : void 0
                });
            return n = n.length && !n.filter(function(t) {
                    return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
                }).length, i.item.enable === -1 ? !n : n || t.pick < i.item.min.pick || t.pick > i.item.max.pick
        }, i.prototype.parse = function(t, e, i) {
            var n = this,
                s = {};
            return e && "string" == typeof e ? (i && i.format || (i = i || {}, i.format = n.settings.format), n.formats.toArray(i.format).map(function(t) {
                var i = n.formats[t],
                    a = i ? o.trigger(i, n, [e, s]) : t.replace(/^!/, "").length;
                i && (s[t] = e.substr(0, a)), e = e.substr(a)
            }), [s.yyyy || s.yy, +(s.mm || s.m) - 1, s.dd || s.d]) : e
        }, i.prototype.formats = function() {
            function t(t, e, i) {
                var n = t.match(/\w+/)[0];
                return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length
            }

            function e(t) {
                return t.match(/\w+/)[0].length
            }
            return {
                d: function(t, e) {
                    return t ? o.digits(t) : e.date
                },
                dd: function(t, e) {
                    return t ? 2 : o.lead(e.date)
                },
                ddd: function(t, i) {
                    return t ? e(t) : this.settings.weekdaysShort[i.day]
                },
                dddd: function(t, i) {
                    return t ? e(t) : this.settings.weekdaysFull[i.day]
                },
                m: function(t, e) {
                    return t ? o.digits(t) : e.month + 1
                },
                mm: function(t, e) {
                    return t ? 2 : o.lead(e.month + 1)
                },
                mmm: function(e, i) {
                    var n = this.settings.monthsShort;
                    return e ? t(e, n, i) : n[i.month]
                },
                mmmm: function(e, i) {
                    var n = this.settings.monthsFull;
                    return e ? t(e, n, i) : n[i.month]
                },
                yy: function(t, e) {
                    return t ? 2 : ("" + e.year).slice(2)
                },
                yyyy: function(t, e) {
                    return t ? 4 : e.year
                },
                toArray: function(t) {
                    return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(t, e) {
                    var i = this;
                    return i.formats.toArray(t).map(function(t) {
                        return o.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), i.prototype.isDateExact = function(t, i) {
            var n = this;
            return o.isInteger(t) && o.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (o.isDate(t) || e.isArray(t)) && (o.isDate(i) || e.isArray(i)) ? n.create(t).pick === n.create(i).pick : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && (n.isDateExact(t.from, i.from) && n.isDateExact(t.to, i.to))
        }, i.prototype.isDateOverlap = function(t, i) {
            var n = this,
                s = n.settings.firstDay ? 1 : 0;
            return o.isInteger(t) && (o.isDate(i) || e.isArray(i)) ? (t = t % 7 + s, t === n.create(i).day + 1) : o.isInteger(i) && (o.isDate(t) || e.isArray(t)) ? (i = i % 7 + s, i === n.create(t).day + 1) : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && n.overlapRanges(t, i)
        }, i.prototype.flipEnable = function(t) {
            var e = this.item;
            e.enable = t || (e.enable == -1 ? 1 : -1)
        }, i.prototype.deactivate = function(t, i) {
            var n = this,
                s = n.item.disable.slice(0);
            return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1), s = []) : i === !0 ? (n.flipEnable(-1), s = []) : i.map(function(t) {
                for (var i, a = 0; a < s.length; a += 1)
                    if (n.isDateExact(t, s[a])) {
                        i = !0;
                        break
                    }
                i || (o.isInteger(t) || o.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && s.push(t)
            }), s
        }, i.prototype.activate = function(t, i) {
            var n = this,
                s = n.item.disable,
                a = s.length;
            return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1), s = []) : i === !1 ? (n.flipEnable(-1), s = []) : i.map(function(t) {
                var i, r, l, c;
                for (l = 0; l < a; l += 1) {
                    if (r = s[l], n.isDateExact(r, t)) {
                        i = s[l] = null, c = !0;
                        break
                    }
                    if (n.isDateOverlap(r, t)) {
                        e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t, i[3] || i.push("inverted")) : o.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; l < a; l += 1)
                        if (n.isDateExact(s[l], t)) {
                            s[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; l < a; l += 1)
                        if (n.isDateOverlap(s[l], t)) {
                            s[l] = null;
                            break
                        }
                i && s.push(i)
            }), s.filter(function(t) {
                return null != t
            })
        }, i.prototype.nodes = function(t) {
            var e = this,
                i = e.settings,
                a = e.item,
                r = a.now,
                l = a.select,
                c = a.highlight,
                u = a.view,
                h = a.disable,
                d = a.min,
                p = a.max,
                f = function(t, e) {
                    return i.firstDay && (t.push(t.shift()), e.push(e.shift())), o.node("thead", o.node("tr", o.group({
                        min: 0,
                        max: n - 1,
                        i: 1,
                        node: "th",
                        item: function(n) {
                            return [t[n], i.klass.weekdays, 'scope=col title="' + e[n] + '"']
                        }
                    })))
                }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysLetter).slice(0), i.weekdaysFull.slice(0)),
                m = function(t) {
                    return o.node("div", " ", i.klass["nav" + (t ? "Next" : "Prev")] + (t && u.year >= p.year && u.month >= p.month || !t && u.year <= d.year && u.month <= d.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + o.ariaAttr({
                            role: "button",
                            controls: e.$node[0].id + "_table"
                        }) + ' title="' + (t ? i.labelMonthNext : i.labelMonthPrev) + '"')
                },
                g = function(n) {
                    var s = i.showMonthsShort ? i.monthsShort : i.monthsFull;
                    return "short_months" == n && (s = i.monthsShort), i.selectMonths && void 0 == n ? o.node("select", o.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(t) {
                            return [s[t], 0, "value=" + t + (u.month == t ? " selected" : "") + (u.year == d.year && t < d.month || u.year == p.year && t > p.month ? " disabled" : "")]
                        }
                    }), i.klass.selectMonth + " browser-default", (t ? "" : "disabled") + " " + o.ariaAttr({
                            controls: e.$node[0].id + "_table"
                        }) + ' title="' + i.labelMonthSelect + '"') : "short_months" == n ? null != l ? o.node("div", s[l.month]) : o.node("div", s[u.month]) : o.node("div", s[u.month], i.klass.month)
                },
                v = function(n) {
                    var s = u.year,
                        a = i.selectYears === !0 ? 5 : ~~(i.selectYears / 2);
                    if (a) {
                        var r = d.year,
                            l = p.year,
                            c = s - a,
                            h = s + a;
                        if (r > c && (h += r - c, c = r), l < h) {
                            var f = c - r,
                                m = h - l;
                            c -= f > m ? m : f, h = l
                        }
                        if (i.selectYears && void 0 == n) return o.node("select", o.group({
                            min: c,
                            max: h,
                            i: 1,
                            node: "option",
                            item: function(t) {
                                return [t, 0, "value=" + t + (s == t ? " selected" : "")]
                            }
                        }), i.klass.selectYear + " browser-default", (t ? "" : "disabled") + " " + o.ariaAttr({
                                controls: e.$node[0].id + "_table"
                            }) + ' title="' + i.labelYearSelect + '"')
                    }
                    return "raw" == n ? o.node("div", s) : o.node("div", s, i.klass.year)
                };
            return createDayLabel = function() {
                return null != l ? o.node("div", l.date) : o.node("div", r.date)
            }, createWeekdayLabel = function() {
                var t;
                t = null != l ? l.day : r.day;
                var e = i.weekdaysFull[t];
                return e
            }, o.node("div", o.node("div", createWeekdayLabel(), "picker__weekday-display") + o.node("div", g("short_months"), i.klass.month_display) + o.node("div", createDayLabel(), i.klass.day_display) + o.node("div", v("raw"), i.klass.year_display), i.klass.date_display) + o.node("div", o.node("div", (i.selectYears ? g() + v() : g() + v()) + m() + m(1), i.klass.header) + o.node("table", f + o.node("tbody", o.group({
                        min: 0,
                        max: s - 1,
                        i: 1,
                        node: "tr",
                        item: function(t) {
                            var s = i.firstDay && 0 === e.create([u.year, u.month, 1]).day ? -7 : 0;
                            return [o.group({
                                min: n * t - u.day + s + 1,
                                max: function() {
                                    return this.min + n - 1
                                },
                                i: 1,
                                node: "td",
                                item: function(t) {
                                    t = e.create([u.year, u.month, t + (i.firstDay ? 1 : 0)]);
                                    var n = l && l.pick == t.pick,
                                        s = c && c.pick == t.pick,
                                        a = h && e.disabled(t) || t.pick < d.pick || t.pick > p.pick,
                                        f = o.trigger(e.formats.toString, e, [i.format, t]);
                                    return [o.node("div", t.date, function(e) {
                                        return e.push(u.month == t.month ? i.klass.infocus : i.klass.outfocus), r.pick == t.pick && e.push(i.klass.now), n && e.push(i.klass.selected), s && e.push(i.klass.highlighted), a && e.push(i.klass.disabled), e.join(" ")
                                    }([i.klass.day]), "data-pick=" + t.pick + " " + o.ariaAttr({
                                            role: "gridcell",
                                            label: f,
                                            selected: !(!n || e.$node.val() !== f) || null,
                                            activedescendant: !!s || null,
                                            disabled: !!a || null
                                        })), "", o.ariaAttr({
                                        role: "presentation"
                                    })]
                                }
                            })]
                        }
                    })), i.klass.table, 'id="' + e.$node[0].id + '_table" ' + o.ariaAttr({
                        role: "grid",
                        controls: e.$node[0].id,
                        readonly: !0
                    })), i.klass.calendar_container) + o.node("div", o.node("button", i.today, "btn-flat picker__today", "type=button data-pick=" + r.pick + (t && !e.disabled(r) ? "" : " disabled") + " " + o.ariaAttr({
                        controls: e.$node[0].id
                    })) + o.node("button", i.clear, "btn-flat picker__clear", "type=button data-clear=1" + (t ? "" : " disabled") + " " + o.ariaAttr({
                        controls: e.$node[0].id
                    })) + o.node("button", i.close, "btn-flat picker__close", "type=button data-close=true " + (t ? "" : " disabled") + " " + o.ariaAttr({
                        controls: e.$node[0].id
                    })), i.klass.footer)
        }, i.defaults = function(t) {
            return {
                labelMonthNext: "Next month",
                labelMonthPrev: "Previous month",
                labelMonthSelect: "Select a month",
                labelYearSelect: "Select a year",
                monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
                today: "Today",
                clear: "Clear",
                close: "Close",
                format: "d mmmm, yyyy",
                klass: {
                    table: t + "table",
                    header: t + "header",
                    date_display: t + "date-display",
                    day_display: t + "day-display",
                    month_display: t + "month-display",
                    year_display: t + "year-display",
                    calendar_container: t + "calendar-container",
                    navPrev: t + "nav--prev",
                    navNext: t + "nav--next",
                    navDisabled: t + "nav--disabled",
                    month: t + "month",
                    year: t + "year",
                    selectMonth: t + "select--month",
                    selectYear: t + "select--year",
                    weekdays: t + "weekday",
                    day: t + "day",
                    disabled: t + "day--disabled",
                    selected: t + "day--selected",
                    highlighted: t + "day--highlighted",
                    now: t + "day--today",
                    infocus: t + "day--infocus",
                    outfocus: t + "day--outfocus",
                    footer: t + "footer",
                    buttonClear: t + "button--clear",
                    buttonToday: t + "button--today",
                    buttonClose: t + "button--close"
                }
            }
        }(t.klasses().picker + "__"), t.extend("pickadate", i)
    }),
    function(t) {
        function e() {
            var e = +t(this).attr("length"),
                i = +t(this).val().length,
                n = i <= e;
            t(this).parent().find('span[class="character-counter"]').html(i + "/" + e), s(n, t(this))
        }

        function i(e) {
            var i = e.parent().find('span[class="character-counter"]');
            i.length || (i = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), e.parent().append(i))
        }

        function n() {
            t(this).parent().find('span[class="character-counter"]').html("")
        }

        function s(t, e) {
            var i = e.hasClass("invalid");
            t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"))
        }
        t.fn.characterCounter = function() {
            return this.each(function() {
                var s = t(this),
                    o = s.parent().find('span[class="character-counter"]');
                if (!o.length) {
                    var a = void 0 !== s.attr("length");
                    a && (s.on("input", e), s.on("focus", e), s.on("blur", n), i(s))
                }
            })
        }, t(document).ready(function() {
            t("input, textarea").characterCounter()
        })
    }(jQuery),
    function(t) {
        var e = {
            init: function(e) {
                var i = {
                    time_constant: 200,
                    dist: -100,
                    shift: 0,
                    padding: 0,
                    full_width: !1
                };
                return e = t.extend(i, e), this.each(function() {
                    function i() {
                        "undefined" != typeof window.ontouchstart && (M[0].addEventListener("touchstart", u), M[0].addEventListener("touchmove", h), M[0].addEventListener("touchend", d)), M[0].addEventListener("mousedown", u), M[0].addEventListener("mousemove", h), M[0].addEventListener("mouseup", d), M[0].addEventListener("click", c)
                    }

                    function n(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
                    }

                    function s(t) {
                        return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY
                    }

                    function o(t) {
                        return t >= b ? t % b : t < 0 ? o(b + t % b) : t
                    }

                    function a(t) {
                        var i, n, s, a, r, l, c;
                        for (f = "number" == typeof t ? t : f, m = Math.floor((f + v / 2) / v), s = f - m * v, a = s < 0 ? 1 : -1, r = -a * s * 2 / v, e.full_width ? c = "translateX(0)" : (c = "translateX(" + (M[0].clientWidth - item_width) / 2 + "px) ", c += "translateY(" + (M[0].clientHeight - item_width) / 2 + "px)"), l = p[o(m)], l.style[T] = c + " translateX(" + -s / 2 + "px) translateX(" + a * e.shift * r * i + "px) translateZ(" + e.dist * r + "px)", l.style.zIndex = 0, e.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * r, l.style.opacity = tweenedOpacity, n = b >> 1, i = 1; i <= n; ++i) e.full_width ? (zTranslation = e.dist, tweenedOpacity = i === n && s < 0 ? 1 - r : 1) : (zTranslation = e.dist * (2 * i + r * a), tweenedOpacity = 1 - .2 * (2 * i + r * a)), l = p[o(m + i)], l.style[T] = c + " translateX(" + (e.shift + (v * i - s) / 2) + "px) translateZ(" + zTranslation + "px)", l.style.zIndex = -i, l.style.opacity = tweenedOpacity, e.full_width ? (zTranslation = e.dist, tweenedOpacity = i === n && s > 0 ? 1 - r : 1) : (zTranslation = e.dist * (2 * i - r * a), tweenedOpacity = 1 - .2 * (2 * i - r * a)), l = p[o(m - i)], l.style[T] = c + " translateX(" + (-e.shift + (-v * i - s) / 2) + "px) translateZ(" + zTranslation + "px)", l.style.zIndex = -i, l.style.opacity = tweenedOpacity;
                        l = p[o(m)], l.style[T] = c + " translateX(" + -s / 2 + "px) translateX(" + a * e.shift * r + "px) translateZ(" + e.dist * r + "px)", l.style.zIndex = 0, e.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * r, l.style.opacity = tweenedOpacity
                    }

                    function r() {
                        var t, e, i, n;
                        t = Date.now(), e = t - D, D = t, i = f - S, S = f, n = 1e3 * i / (1 + e), C = .8 * n + .2 * C
                    }

                    function l() {
                        var t, i;
                        x && (t = Date.now() - D, i = x * Math.exp(-t / e.time_constant), i > 2 || i < -2 ? (a(k - i), requestAnimationFrame(l)) : a(k))
                    }

                    function c(i) {
                        if (I) return i.preventDefault(), i.stopPropagation(), !1;
                        if (!e.full_width) {
                            var n = t(i.target).closest(".carousel-item").index(),
                                s = m % b - n;
                            s < 0 ? Math.abs(s + b) < Math.abs(s) && (s += b) : s > 0 && Math.abs(s - b) < s && (s -= b), s < 0 ? t(this).trigger("carouselNext", [Math.abs(s)]) : s > 0 && t(this).trigger("carouselPrev", [s])
                        }
                    }

                    function u(t) {
                        g = !0, I = !1, O = !1, _ = n(t), w = s(t), C = x = 0, S = f, D = Date.now(), clearInterval(P), P = setInterval(r, 100)
                    }

                    function h(t) {
                        var e, i, o;
                        if (g)
                            if (e = n(t), y = s(t), i = _ - e, o = Math.abs(w - y), o < 30 && !O)(i > 2 || i < -2) && (I = !0, _ = e, a(f + i));
                            else {
                                if (I) return t.preventDefault(), t.stopPropagation(), !1;
                                O = !0
                            }
                        if (I) return t.preventDefault(), t.stopPropagation(), !1
                    }

                    function d(t) {
                        return g = !1, clearInterval(P), k = f, (C > 10 || C < -10) && (x = .9 * C, k = f + x), k = Math.round(k / v) * v, x = k - f, D = Date.now(), requestAnimationFrame(l), t.preventDefault(), t.stopPropagation(), !1
                    }
                    var p, f, m, g, v, b, _, w, x, k, C, T, S, D, P, I, O, M = t(this);
                    return !!M.hasClass("initialized") || (e.full_width && (e.dist = 0, imageHeight = M.find(".carousel-item img").first().load(function() {
                            M.css("height", t(this).height())
                        })), M.addClass("initialized"), g = !1, f = k = 0, p = [], item_width = M.find(".carousel-item").first().innerWidth(), v = 2 * item_width + e.padding, M.find(".carousel-item").each(function() {
                            p.push(t(this)[0])
                        }), b = p.length, T = "transform", ["webkit", "Moz", "O", "ms"].every(function(t) {
                            var e = t + "Transform";
                            return "undefined" == typeof document.body.style[e] || (T = e, !1)
                        }), window.onresize = a, i(), a(f), t(this).on("carouselNext", function(t, e) {
                            void 0 === e && (e = 1), k = f + v * e, f !== k && (x = k - f, D = Date.now(), requestAnimationFrame(l))
                        }), void t(this).on("carouselPrev", function(t, e) {
                            void 0 === e && (e = 1), k = f - v * e, f !== k && (x = k - f, D = Date.now(), requestAnimationFrame(l))
                        }))
                })
            },
            next: function(e) {
                t(this).trigger("carouselNext", [e])
            },
            prev: function(e) {
                t(this).trigger("carouselPrev", [e])
            }
        };
        t.fn.carousel = function(i) {
            return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.carousel") : e.init.apply(this, arguments)
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t : t(jQuery, window, document)
    }(function(t) {
        ! function(e) {
            var i = "function" == typeof define && define.amd,
                n = "undefined" != typeof module && module.exports,
                s = "https:" == document.location.protocol ? "https:" : "http:",
                o = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
            i || (n ? require("jquery-mousewheel")(t) : t.event.special.mousewheel || t("head").append(decodeURI("%3Cscript src=" + s + "//" + o + "%3E%3C/script%3E"))), e()
        }(function() {
            var e, i = "mCustomScrollbar",
                n = "mCS",
                s = ".mCustomScrollbar",
                o = {
                    setTop: 0,
                    setLeft: 0,
                    axis: "y",
                    scrollbarPosition: "inside",
                    scrollInertia: 950,
                    autoDraggerLength: !0,
                    alwaysShowScrollbar: 0,
                    snapOffset: 0,
                    mouseWheel: {
                        enable: !0,
                        scrollAmount: "auto",
                        axis: "y",
                        deltaFactor: "auto",
                        disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                    },
                    scrollButtons: {
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    keyboard: {
                        enable: !0,
                        scrollType: "stepless",
                        scrollAmount: "auto"
                    },
                    contentTouchScroll: 25,
                    documentTouchScroll: !0,
                    advanced: {
                        autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                        updateOnContentResize: !0,
                        updateOnImageLoad: "auto",
                        autoUpdateTimeout: 60
                    },
                    theme: "light",
                    callbacks: {
                        onTotalScrollOffset: 0,
                        onTotalScrollBackOffset: 0,
                        alwaysTriggerOffsets: !0
                    }
                },
                a = 0,
                r = {},
                l = window.attachEvent && !window.addEventListener ? 1 : 0,
                c = !1,
                u = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
                h = {
                    init: function(e) {
                        var e = t.extend(!0, {}, o, e),
                            i = d.call(this);
                        if (e.live) {
                            var l = e.liveSelector || this.selector || s,
                                c = t(l);
                            if ("off" === e.live) return void f(l);
                            r[l] = setTimeout(function() {
                                c.mCustomScrollbar(e), "once" === e.live && c.length && f(l)
                            }, 500)
                        } else f(l);
                        return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : m(e.axis), e.scrollInertia = e.scrollInertia > 0 && e.scrollInertia < 17 ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel && 1 == e.mouseWheel && (e.mouseWheel = {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: !1,
                            deltaFactor: "auto",
                            normalizeDelta: !1,
                            invert: !1
                        }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = g(e.scrollButtons.scrollType), p(e), t(i).each(function() {
                            var i = t(this);
                            if (!i.data(n)) {
                                i.data(n, {
                                    idx: ++a,
                                    opt: e,
                                    scrollRatio: {
                                        y: null,
                                        x: null
                                    },
                                    overflowed: null,
                                    contentReset: {
                                        y: null,
                                        x: null
                                    },
                                    bindEvents: !1,
                                    tweenRunning: !1,
                                    sequential: {},
                                    langDir: i.css("direction"),
                                    cbOffsets: null,
                                    trigger: null,
                                    poll: {
                                        size: {
                                            o: 0,
                                            n: 0
                                        },
                                        img: {
                                            o: 0,
                                            n: 0
                                        },
                                        change: {
                                            o: 0,
                                            n: 0
                                        }
                                    }
                                });
                                var s = i.data(n),
                                    o = s.opt,
                                    r = i.data("mcs-axis"),
                                    l = i.data("mcs-scrollbar-position"),
                                    c = i.data("mcs-theme");
                                r && (o.axis = r), l && (o.scrollbarPosition = l), c && (o.theme = c, p(o)), v.call(this), s && o.callbacks.onCreate && "function" == typeof o.callbacks.onCreate && o.callbacks.onCreate.call(this), t("#mCSB_" + s.idx + "_container img:not(." + u[2] + ")").addClass(u[2]), h.update.call(null, i)
                            }
                        })
                    },
                    update: function(e, i) {
                        var s = e || d.call(this);
                        return t(s).each(function() {
                            var e = t(this);
                            if (e.data(n)) {
                                var s = e.data(n),
                                    o = s.opt,
                                    a = t("#mCSB_" + s.idx + "_container"),
                                    r = t("#mCSB_" + s.idx),
                                    l = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")];
                                if (!a.length) return;
                                s.tweenRunning && U(e), i && s && o.callbacks.onBeforeUpdate && "function" == typeof o.callbacks.onBeforeUpdate && o.callbacks.onBeforeUpdate.call(this), e.hasClass(u[3]) && e.removeClass(u[3]), e.hasClass(u[4]) && e.removeClass(u[4]), r.css("max-height", "none"), r.height() !== e.height() && r.css("max-height", e.height()), b.call(this), "y" === o.axis || o.advanced.autoExpandHorizontalScroll || a.css("width", y(a)), s.overflowed = C.call(this), P.call(this), o.autoDraggerLength && w.call(this), x.call(this), S.call(this);
                                var c = [Math.abs(a[0].offsetTop), Math.abs(a[0].offsetLeft)];
                                "x" !== o.axis && (s.overflowed[0] ? l[0].height() > l[0].parent().height() ? T.call(this) : (Q(e, c[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }), s.contentReset.y = null) : (T.call(this), "y" === o.axis ? D.call(this) : "yx" === o.axis && s.overflowed[1] && Q(e, c[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }))), "y" !== o.axis && (s.overflowed[1] ? l[1].width() > l[1].parent().width() ? T.call(this) : (Q(e, c[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), s.contentReset.x = null) : (T.call(this), "x" === o.axis ? D.call(this) : "yx" === o.axis && s.overflowed[0] && Q(e, c[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }))), i && s && (2 === i && o.callbacks.onImageLoad && "function" == typeof o.callbacks.onImageLoad ? o.callbacks.onImageLoad.call(this) : 3 === i && o.callbacks.onSelectorChange && "function" == typeof o.callbacks.onSelectorChange ? o.callbacks.onSelectorChange.call(this) : o.callbacks.onUpdate && "function" == typeof o.callbacks.onUpdate && o.callbacks.onUpdate.call(this)), Y.call(this)
                            }
                        })
                    },
                    scrollTo: function(e, i) {
                        if ("undefined" != typeof e && null != e) {
                            var s = d.call(this);
                            return t(s).each(function() {
                                var s = t(this);
                                if (s.data(n)) {
                                    var o = s.data(n),
                                        a = o.opt,
                                        r = {
                                            trigger: "external",
                                            scrollInertia: a.scrollInertia,
                                            scrollEasing: "mcsEaseInOut",
                                            moveDragger: !1,
                                            timeout: 60,
                                            callbacks: !0,
                                            onStart: !0,
                                            onUpdate: !0,
                                            onComplete: !0
                                        },
                                        l = t.extend(!0, {}, r, i),
                                        c = B.call(this, e),
                                        u = l.scrollInertia > 0 && l.scrollInertia < 17 ? 17 : l.scrollInertia;
                                    c[0] = V.call(this, c[0], "y"), c[1] = V.call(this, c[1], "x"), l.moveDragger && (c[0] *= o.scrollRatio.y, c[1] *= o.scrollRatio.x), l.dur = st() ? 0 : u, setTimeout(function() {
                                        null !== c[0] && "undefined" != typeof c[0] && "x" !== a.axis && o.overflowed[0] && (l.dir = "y", l.overwrite = "all", Q(s, c[0].toString(), l)), null !== c[1] && "undefined" != typeof c[1] && "y" !== a.axis && o.overflowed[1] && (l.dir = "x", l.overwrite = "none", Q(s, c[1].toString(), l))
                                    }, l.timeout)
                                }
                            })
                        }
                    },
                    stop: function() {
                        var e = d.call(this);
                        return t(e).each(function() {
                            var e = t(this);
                            e.data(n) && U(e)
                        })
                    },
                    disable: function(e) {
                        var i = d.call(this);
                        return t(i).each(function() {
                            var i = t(this);
                            if (i.data(n)) {
                                i.data(n);
                                Y.call(this, "remove"), D.call(this),
                                e && T.call(this), P.call(this, !0), i.addClass(u[3])
                            }
                        })
                    },
                    destroy: function() {
                        var e = d.call(this);
                        return t(e).each(function() {
                            var s = t(this);
                            if (s.data(n)) {
                                var o = s.data(n),
                                    a = o.opt,
                                    r = t("#mCSB_" + o.idx),
                                    l = t("#mCSB_" + o.idx + "_container"),
                                    c = t(".mCSB_" + o.idx + "_scrollbar");
                                a.live && f(a.liveSelector || t(e).selector), Y.call(this, "remove"), D.call(this), T.call(this), s.removeData(n), J(this, "mcs"), c.remove(), l.find("img." + u[2]).removeClass(u[2]), r.replaceWith(l.contents()), s.removeClass(i + " _" + n + "_" + o.idx + " " + u[6] + " " + u[7] + " " + u[5] + " " + u[3]).addClass(u[4])
                            }
                        })
                    }
                },
                d = function() {
                    return "object" != typeof t(this) || t(this).length < 1 ? s : this
                },
                p = function(e) {
                    var i = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                        n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                        s = ["minimal", "minimal-dark"],
                        o = ["minimal", "minimal-dark"],
                        a = ["minimal", "minimal-dark"];
                    e.autoDraggerLength = !(t.inArray(e.theme, i) > -1) && e.autoDraggerLength, e.autoExpandScrollbar = !(t.inArray(e.theme, n) > -1) && e.autoExpandScrollbar, e.scrollButtons.enable = !(t.inArray(e.theme, s) > -1) && e.scrollButtons.enable, e.autoHideScrollbar = t.inArray(e.theme, o) > -1 || e.autoHideScrollbar, e.scrollbarPosition = t.inArray(e.theme, a) > -1 ? "outside" : e.scrollbarPosition
                },
                f = function(t) {
                    r[t] && (clearTimeout(r[t]), J(r, t))
                },
                m = function(t) {
                    return "yx" === t || "xy" === t || "auto" === t ? "yx" : "x" === t || "horizontal" === t ? "x" : "y"
                },
                g = function(t) {
                    return "stepped" === t || "pixels" === t || "step" === t || "click" === t ? "stepped" : "stepless"
                },
                v = function() {
                    var e = t(this),
                        s = e.data(n),
                        o = s.opt,
                        a = o.autoExpandScrollbar ? " " + u[1] + "_expand" : "",
                        r = ["<div id='mCSB_" + s.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + u[12] + "'><div id='mCSB_" + s.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + s.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + s.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + u[12] + "'><div id='mCSB_" + s.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                        l = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical",
                        c = "yx" === o.axis ? r[0] + r[1] : "x" === o.axis ? r[1] : r[0],
                        h = "yx" === o.axis ? "<div id='mCSB_" + s.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                        d = o.autoHideScrollbar ? " " + u[6] : "",
                        p = "x" !== o.axis && "rtl" === s.langDir ? " " + u[7] : "";
                    o.setWidth && e.css("width", o.setWidth), o.setHeight && e.css("height", o.setHeight), o.setLeft = "y" !== o.axis && "rtl" === s.langDir ? "989999px" : o.setLeft, e.addClass(i + " _" + n + "_" + s.idx + d + p).wrapInner("<div id='mCSB_" + s.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + l + "'><div id='mCSB_" + s.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + s.langDir + "' /></div>");
                    var f = t("#mCSB_" + s.idx),
                        m = t("#mCSB_" + s.idx + "_container");
                    "y" === o.axis || o.advanced.autoExpandHorizontalScroll || m.css("width", y(m)), "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), f.addClass("mCSB_outside").after(c)) : (f.addClass("mCSB_inside").append(c), m.wrap(h)), _.call(this);
                    var g = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")];
                    g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
                },
                y = function(e) {
                    var i = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
                            return t(this).outerWidth(!0)
                        }).get())],
                        n = e.parent().width();
                    return i[0] > n ? i[0] : i[1] > n ? i[1] : "100%"
                },
                b = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = i.opt,
                        o = t("#mCSB_" + i.idx + "_container");
                    if (s.advanced.autoExpandHorizontalScroll && "y" !== s.axis) {
                        o.css({
                            width: "auto",
                            "min-width": 0,
                            "overflow-x": "scroll"
                        });
                        var a = Math.ceil(o[0].scrollWidth);
                        3 === s.advanced.autoExpandHorizontalScroll || 2 !== s.advanced.autoExpandHorizontalScroll && a > o.parent().width() ? o.css({
                            width: a,
                            "min-width": "100%",
                            "overflow-x": "inherit"
                        }) : o.css({
                            "overflow-x": "inherit",
                            position: "absolute"
                        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                            width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
                            "min-width": "100%",
                            position: "relative"
                        }).unwrap()
                    }
                },
                _ = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = i.opt,
                        o = t(".mCSB_" + i.idx + "_scrollbar:first"),
                        a = it(s.scrollButtons.tabindex) ? "tabindex='" + s.scrollButtons.tabindex + "'" : "",
                        r = ["<a href='#' class='" + u[13] + "' " + a + " />", "<a href='#' class='" + u[14] + "' " + a + " />", "<a href='#' class='" + u[15] + "' " + a + " />", "<a href='#' class='" + u[16] + "' " + a + " />"],
                        l = ["x" === s.axis ? r[2] : r[0], "x" === s.axis ? r[3] : r[1], r[2], r[3]];
                    s.scrollButtons.enable && o.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
                },
                w = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = t("#mCSB_" + i.idx),
                        o = t("#mCSB_" + i.idx + "_container"),
                        a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                        r = [s.height() / o.outerHeight(!1), s.width() / o.outerWidth(!1)],
                        c = [parseInt(a[0].css("min-height")), Math.round(r[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(r[1] * a[1].parent().width())],
                        u = l && c[1] < c[0] ? c[0] : c[1],
                        h = l && c[3] < c[2] ? c[2] : c[3];
                    a[0].css({
                        height: u,
                        "max-height": a[0].parent().height() - 10
                    }).find(".mCSB_dragger_bar").css({
                        "line-height": c[0] + "px"
                    }), a[1].css({
                        width: h,
                        "max-width": a[1].parent().width() - 10
                    })
                },
                x = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = t("#mCSB_" + i.idx),
                        o = t("#mCSB_" + i.idx + "_container"),
                        a = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")],
                        r = [o.outerHeight(!1) - s.height(), o.outerWidth(!1) - s.width()],
                        l = [r[0] / (a[0].parent().height() - a[0].height()), r[1] / (a[1].parent().width() - a[1].width())];
                    i.scrollRatio = {
                        y: l[0],
                        x: l[1]
                    }
                },
                k = function(t, e, i) {
                    var n = i ? u[0] + "_expanded" : "",
                        s = t.closest(".mCSB_scrollTools");
                    "active" === e ? (t.toggleClass(u[0] + " " + n), s.toggleClass(u[1]), t[0]._draggable = t[0]._draggable ? 0 : 1) : t[0]._draggable || ("hide" === e ? (t.removeClass(u[0]), s.removeClass(u[1])) : (t.addClass(u[0]), s.addClass(u[1])))
                },
                C = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = t("#mCSB_" + i.idx),
                        o = t("#mCSB_" + i.idx + "_container"),
                        a = null == i.overflowed ? o.height() : o.outerHeight(!1),
                        r = null == i.overflowed ? o.width() : o.outerWidth(!1),
                        l = o[0].scrollHeight,
                        c = o[0].scrollWidth;
                    return l > a && (a = l), c > r && (r = c), [a > s.height(), r > s.width()]
                },
                T = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = i.opt,
                        o = t("#mCSB_" + i.idx),
                        a = t("#mCSB_" + i.idx + "_container"),
                        r = [t("#mCSB_" + i.idx + "_dragger_vertical"), t("#mCSB_" + i.idx + "_dragger_horizontal")];
                    if (U(e), ("x" !== s.axis && !i.overflowed[0] || "y" === s.axis && i.overflowed[0]) && (r[0].add(a).css("top", 0), Q(e, "_resetY")), "y" !== s.axis && !i.overflowed[1] || "x" === s.axis && i.overflowed[1]) {
                        var l = dx = 0;
                        "rtl" === i.langDir && (l = o.width() - a.outerWidth(!1), dx = Math.abs(l / i.scrollRatio.x)), a.css("left", l), r[1].css("left", dx), Q(e, "_resetX")
                    }
                },
                S = function() {
                    function e() {
                        a = setTimeout(function() {
                            t.event.special.mousewheel ? (clearTimeout(a), E.call(i[0])) : e()
                        }, 100)
                    }
                    var i = t(this),
                        s = i.data(n),
                        o = s.opt;
                    if (!s.bindEvents) {
                        if (O.call(this), o.contentTouchScroll && M.call(this), A.call(this), o.mouseWheel.enable) {
                            var a;
                            e()
                        }
                        W.call(this), L.call(this), o.advanced.autoScrollOnFocus && j.call(this), o.scrollButtons.enable && q.call(this), o.keyboard.enable && F.call(this), s.bindEvents = !0
                    }
                },
                D = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = i.opt,
                        o = n + "_" + i.idx,
                        a = ".mCSB_" + i.idx + "_scrollbar",
                        r = t("#mCSB_" + i.idx + ",#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper," + a + " ." + u[12] + ",#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal," + a + ">a"),
                        l = t("#mCSB_" + i.idx + "_container");
                    s.advanced.releaseDraggableSelectors && r.add(t(s.advanced.releaseDraggableSelectors)), s.advanced.extraDraggableSelectors && r.add(t(s.advanced.extraDraggableSelectors)), i.bindEvents && (t(document).add(t(!H() || top.document)).unbind("." + o), r.each(function() {
                        t(this).unbind("." + o)
                    }), clearTimeout(e[0]._focusTimeout), J(e[0], "_focusTimeout"), clearTimeout(i.sequential.step), J(i.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), J(l[0], "onCompleteTimeout"), i.bindEvents = !1)
                },
                P = function(e) {
                    var i = t(this),
                        s = i.data(n),
                        o = s.opt,
                        a = t("#mCSB_" + s.idx + "_container_wrapper"),
                        r = a.length ? a : t("#mCSB_" + s.idx + "_container"),
                        l = [t("#mCSB_" + s.idx + "_scrollbar_vertical"), t("#mCSB_" + s.idx + "_scrollbar_horizontal")],
                        c = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                    "x" !== o.axis && (s.overflowed[0] && !e ? (l[0].add(c[0]).add(l[0].children("a")).css("display", "block"), r.removeClass(u[8] + " " + u[10])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[0].css("display", "none"), r.removeClass(u[10])) : (l[0].css("display", "none"), r.addClass(u[10])), r.addClass(u[8]))), "y" !== o.axis && (s.overflowed[1] && !e ? (l[1].add(c[1]).add(l[1].children("a")).css("display", "block"), r.removeClass(u[9] + " " + u[11])) : (o.alwaysShowScrollbar ? (2 !== o.alwaysShowScrollbar && c[1].css("display", "none"), r.removeClass(u[11])) : (l[1].css("display", "none"), r.addClass(u[11])), r.addClass(u[9]))), s.overflowed[0] || s.overflowed[1] ? i.removeClass(u[5]) : i.addClass(u[5])
                },
                I = function(e) {
                    var i = e.type,
                        n = e.target.ownerDocument !== document && null !== frameElement ? [t(frameElement).offset().top, t(frameElement).offset().left] : null,
                        s = H() && e.target.ownerDocument !== top.document && null !== frameElement ? [t(e.view.frameElement).offset().top, t(e.view.frameElement).offset().left] : [0, 0];
                    switch (i) {
                        case "pointerdown":
                        case "MSPointerDown":
                        case "pointermove":
                        case "MSPointerMove":
                        case "pointerup":
                        case "MSPointerUp":
                            return n ? [e.originalEvent.pageY - n[0] + s[0], e.originalEvent.pageX - n[1] + s[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                        case "touchstart":
                        case "touchmove":
                        case "touchend":
                            var o = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                                a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                            return e.target.ownerDocument !== document ? [o.screenY, o.screenX, a > 1] : [o.pageY, o.pageX, a > 1];
                        default:
                            return n ? [e.pageY - n[0] + s[0], e.pageX - n[1] + s[1], !1] : [e.pageY, e.pageX, !1]
                    }
                },
                O = function() {
                    function e(t, e, n, s) {
                        if (p[0].idleTimer = u.scrollInertia < 233 ? 250 : 0, i.attr("id") === d[1]) var o = "x",
                            l = (i[0].offsetLeft - e + s) * r.scrollRatio.x;
                        else var o = "y",
                            l = (i[0].offsetTop - t + n) * r.scrollRatio.y;
                        Q(a, l.toString(), {
                            dir: o,
                            drag: !0
                        })
                    }
                    var i, s, o, a = t(this),
                        r = a.data(n),
                        u = r.opt,
                        h = n + "_" + r.idx,
                        d = ["mCSB_" + r.idx + "_dragger_vertical", "mCSB_" + r.idx + "_dragger_horizontal"],
                        p = t("#mCSB_" + r.idx + "_container"),
                        f = t("#" + d[0] + ",#" + d[1]),
                        m = u.advanced.releaseDraggableSelectors ? f.add(t(u.advanced.releaseDraggableSelectors)) : f,
                        g = u.advanced.extraDraggableSelectors ? t(!H() || top.document).add(t(u.advanced.extraDraggableSelectors)) : t(!H() || top.document);
                    f.bind("contextmenu." + h, function(t) {
                        t.preventDefault()
                    }).bind("mousedown." + h + " touchstart." + h + " pointerdown." + h + " MSPointerDown." + h, function(e) {
                        if (e.stopImmediatePropagation(), e.preventDefault(), tt(e)) {
                            c = !0, l && (document.onselectstart = function() {
                                return !1
                            }), $.call(p, !1), U(a), i = t(this);
                            var n = i.offset(),
                                r = I(e)[0] - n.top,
                                h = I(e)[1] - n.left,
                                d = i.height() + n.top,
                                f = i.width() + n.left;
                            r < d && r > 0 && h < f && h > 0 && (s = r, o = h), k(i, "active", u.autoExpandScrollbar)
                        }
                    }).bind("touchmove." + h, function(t) {
                        t.stopImmediatePropagation(), t.preventDefault();
                        var n = i.offset(),
                            a = I(t)[0] - n.top,
                            r = I(t)[1] - n.left;
                        e(s, o, a, r)
                    }), t(document).add(g).bind("mousemove." + h + " pointermove." + h + " MSPointerMove." + h, function(t) {
                        if (i) {
                            var n = i.offset(),
                                a = I(t)[0] - n.top,
                                r = I(t)[1] - n.left;
                            if (s === a && o === r) return;
                            e(s, o, a, r)
                        }
                    }).add(m).bind("mouseup." + h + " touchend." + h + " pointerup." + h + " MSPointerUp." + h, function(t) {
                        i && (k(i, "active", u.autoExpandScrollbar), i = null), c = !1, l && (document.onselectstart = null), $.call(p, !0)
                    })
                },
                M = function() {
                    function i(t) {
                        if (!et(t) || c || I(t)[2]) return void(e = 0);
                        e = 1, x = 0, k = 0, u = 1, C.removeClass("mCS_touch_action");
                        var i = O.offset();
                        h = I(t)[0] - i.top, d = I(t)[1] - i.left, z = [I(t)[0], I(t)[1]]
                    }

                    function s(t) {
                        if (et(t) && !c && !I(t)[2] && (S.documentTouchScroll || t.preventDefault(), t.stopImmediatePropagation(), (!k || x) && u)) {
                            g = G();
                            var e = P.offset(),
                                i = I(t)[0] - e.top,
                                n = I(t)[1] - e.left,
                                s = "mcsLinearOut";
                            if (A.push(i), E.push(n), z[2] = Math.abs(I(t)[0] - z[0]), z[3] = Math.abs(I(t)[1] - z[1]), T.overflowed[0]) var o = M[0].parent().height() - M[0].height(),
                                a = h - i > 0 && i - h > -(o * T.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === S.axis);
                            if (T.overflowed[1]) var r = M[1].parent().width() - M[1].width(),
                                p = d - n > 0 && n - d > -(r * T.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === S.axis);
                            a || p ? (L || t.preventDefault(), x = 1) : (k = 1, C.addClass("mCS_touch_action")), L && t.preventDefault(), _ = "yx" === S.axis ? [h - i, d - n] : "x" === S.axis ? [null, d - n] : [h - i, null], O[0].idleTimer = 250, T.overflowed[0] && l(_[0], N, s, "y", "all", !0), T.overflowed[1] && l(_[1], N, s, "x", $, !0)
                        }
                    }

                    function o(t) {
                        if (!et(t) || c || I(t)[2]) return void(e = 0);
                        e = 1, t.stopImmediatePropagation(), U(C), m = G();
                        var i = P.offset();
                        p = I(t)[0] - i.top, f = I(t)[1] - i.left, A = [], E = []
                    }

                    function a(t) {
                        if (et(t) && !c && !I(t)[2]) {
                            u = 0, t.stopImmediatePropagation(), x = 0, k = 0, v = G();
                            var e = P.offset(),
                                i = I(t)[0] - e.top,
                                n = I(t)[1] - e.left;
                            if (!(v - g > 30)) {
                                b = 1e3 / (v - m);
                                var s = "mcsEaseOut",
                                    o = b < 2.5,
                                    a = o ? [A[A.length - 2], E[E.length - 2]] : [0, 0];
                                y = o ? [i - a[0], n - a[1]] : [i - p, n - f];
                                var h = [Math.abs(y[0]), Math.abs(y[1])];
                                b = o ? [Math.abs(y[0] / 4), Math.abs(y[1] / 4)] : [b, b];
                                var d = [Math.abs(O[0].offsetTop) - y[0] * r(h[0] / b[0], b[0]), Math.abs(O[0].offsetLeft) - y[1] * r(h[1] / b[1], b[1])];
                                _ = "yx" === S.axis ? [d[0], d[1]] : "x" === S.axis ? [null, d[1]] : [d[0], null], w = [4 * h[0] + S.scrollInertia, 4 * h[1] + S.scrollInertia];
                                var C = parseInt(S.contentTouchScroll) || 0;
                                _[0] = h[0] > C ? _[0] : 0, _[1] = h[1] > C ? _[1] : 0, T.overflowed[0] && l(_[0], w[0], s, "y", $, !1), T.overflowed[1] && l(_[1], w[1], s, "x", $, !1)
                            }
                        }
                    }

                    function r(t, e) {
                        var i = [1.5 * e, 2 * e, e / 1.5, e / 2];
                        return t > 90 ? e > 4 ? i[0] : i[3] : t > 60 ? e > 3 ? i[3] : i[2] : t > 30 ? e > 8 ? i[1] : e > 6 ? i[0] : e > 4 ? e : i[2] : e > 8 ? e : i[3]
                    }

                    function l(t, e, i, n, s, o) {
                        t && Q(C, t.toString(), {
                            dur: e,
                            scrollEasing: i,
                            dir: n,
                            overwrite: s,
                            drag: o
                        })
                    }
                    var u, h, d, p, f, m, g, v, y, b, _, w, x, k, C = t(this),
                        T = C.data(n),
                        S = T.opt,
                        D = n + "_" + T.idx,
                        P = t("#mCSB_" + T.idx),
                        O = t("#mCSB_" + T.idx + "_container"),
                        M = [t("#mCSB_" + T.idx + "_dragger_vertical"), t("#mCSB_" + T.idx + "_dragger_horizontal")],
                        A = [],
                        E = [],
                        N = 0,
                        $ = "yx" === S.axis ? "none" : "all",
                        z = [],
                        W = O.find("iframe"),
                        j = ["touchstart." + D + " pointerdown." + D + " MSPointerDown." + D, "touchmove." + D + " pointermove." + D + " MSPointerMove." + D, "touchend." + D + " pointerup." + D + " MSPointerUp." + D],
                        L = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                    O.bind(j[0], function(t) {
                        i(t)
                    }).bind(j[1], function(t) {
                        s(t)
                    }), P.bind(j[0], function(t) {
                        o(t)
                    }).bind(j[2], function(t) {
                        a(t)
                    }), W.length && W.each(function() {
                        t(this).bind("load", function() {
                            H(this) && t(this.contentDocument || this.contentWindow.document).bind(j[0], function(t) {
                                i(t), o(t)
                            }).bind(j[1], function(t) {
                                s(t)
                            }).bind(j[2], function(t) {
                                a(t)
                            })
                        })
                    })
                },
                A = function() {
                    function i() {
                        return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
                    }

                    function s(t, e, i) {
                        u.type = i && o ? "stepped" : "stepless", u.scrollAmount = 10, R(a, t, e, "mcsLinearOut", i ? 60 : null)
                    }
                    var o, a = t(this),
                        r = a.data(n),
                        l = r.opt,
                        u = r.sequential,
                        h = n + "_" + r.idx,
                        d = t("#mCSB_" + r.idx + "_container"),
                        p = d.parent();
                    d.bind("mousedown." + h, function(t) {
                        e || o || (o = 1, c = !0)
                    }).add(document).bind("mousemove." + h, function(t) {
                        if (!e && o && i()) {
                            var n = d.offset(),
                                a = I(t)[0] - n.top + d[0].offsetTop,
                                c = I(t)[1] - n.left + d[0].offsetLeft;
                            a > 0 && a < p.height() && c > 0 && c < p.width() ? u.step && s("off", null, "stepped") : ("x" !== l.axis && r.overflowed[0] && (a < 0 ? s("on", 38) : a > p.height() && s("on", 40)), "y" !== l.axis && r.overflowed[1] && (c < 0 ? s("on", 37) : c > p.width() && s("on", 39)))
                        }
                    }).bind("mouseup." + h + " dragend." + h, function(t) {
                        e || (o && (o = 0, s("off", null)), c = !1)
                    })
                },
                E = function() {
                    function e(e, n) {
                        if (U(i), !z(i, e.target)) {
                            var a = "auto" !== o.mouseWheel.deltaFactor ? parseInt(o.mouseWheel.deltaFactor) : l && e.deltaFactor < 100 ? 100 : e.deltaFactor || 100,
                                u = o.scrollInertia;
                            if ("x" === o.axis || "x" === o.mouseWheel.axis) var h = "x",
                                d = [Math.round(a * s.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                                p = "auto" !== o.mouseWheel.scrollAmount ? d[1] : d[0] >= r.width() ? .9 * r.width() : d[0],
                                f = Math.abs(t("#mCSB_" + s.idx + "_container")[0].offsetLeft),
                                m = c[1][0].offsetLeft,
                                g = c[1].parent().width() - c[1].width(),
                                v = "y" === o.mouseWheel.axis ? e.deltaY || n : e.deltaX;
                            else var h = "y",
                                d = [Math.round(a * s.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
                                p = "auto" !== o.mouseWheel.scrollAmount ? d[1] : d[0] >= r.height() ? .9 * r.height() : d[0],
                                f = Math.abs(t("#mCSB_" + s.idx + "_container")[0].offsetTop),
                                m = c[0][0].offsetTop,
                                g = c[0].parent().height() - c[0].height(),
                                v = e.deltaY || n;
                            "y" === h && !s.overflowed[0] || "x" === h && !s.overflowed[1] || ((o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (v = -v), o.mouseWheel.normalizeDelta && (v = v < 0 ? -1 : 1), (v > 0 && 0 !== m || v < 0 && m !== g || o.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()), e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta && (p = e.deltaFactor, u = 17), Q(i, (f - v * p).toString(), {
                                dir: h,
                                dur: u
                            }))
                        }
                    }
                    if (t(this).data(n)) {
                        var i = t(this),
                            s = i.data(n),
                            o = s.opt,
                            a = n + "_" + s.idx,
                            r = t("#mCSB_" + s.idx),
                            c = [t("#mCSB_" + s.idx + "_dragger_vertical"), t("#mCSB_" + s.idx + "_dragger_horizontal")],
                            u = t("#mCSB_" + s.idx + "_container").find("iframe");
                        u.length && u.each(function() {
                            t(this).bind("load", function() {
                                H(this) && t(this.contentDocument || this.contentWindow.document).bind("mousewheel." + a, function(t, i) {
                                    e(t, i)
                                })
                            })
                        }), r.bind("mousewheel." + a, function(t, i) {
                            e(t, i)
                        })
                    }
                },
                N = new Object,
                H = function(e) {
                    var i = !1,
                        n = !1,
                        s = null;
                    if (void 0 === e ? n = "#empty" : void 0 !== t(e).attr("id") && (n = t(e).attr("id")), n !== !1 && void 0 !== N[n]) return N[n];
                    if (e) {
                        try {
                            var o = e.contentDocument || e.contentWindow.document;
                            s = o.body.innerHTML
                        } catch (a) {}
                        i = null !== s
                    } else {
                        try {
                            var o = top.document;
                            s = o.body.innerHTML
                        } catch (a) {}
                        i = null !== s
                    }
                    return n !== !1 && (N[n] = i), i
                },
                $ = function(t) {
                    var e = this.find("iframe");
                    if (e.length) {
                        var i = t ? "auto" : "none";
                        e.css("pointer-events", i)
                    }
                },
                z = function(e, i) {
                    var s = i.nodeName.toLowerCase(),
                        o = e.data(n).opt.mouseWheel.disableOver,
                        a = ["select", "textarea"];
                    return t.inArray(s, o) > -1 && !(t.inArray(s, a) > -1 && !t(i).is(":focus"))
                },
                W = function() {
                    var e, i = t(this),
                        s = i.data(n),
                        o = n + "_" + s.idx,
                        a = t("#mCSB_" + s.idx + "_container"),
                        r = a.parent(),
                        l = t(".mCSB_" + s.idx + "_scrollbar ." + u[12]);
                    l.bind("mousedown." + o + " touchstart." + o + " pointerdown." + o + " MSPointerDown." + o, function(i) {
                        c = !0, t(i.target).hasClass("mCSB_dragger") || (e = 1)
                    }).bind("touchend." + o + " pointerup." + o + " MSPointerUp." + o, function(t) {
                        c = !1
                    }).bind("click." + o, function(n) {
                        if (e && (e = 0, t(n.target).hasClass(u[12]) || t(n.target).hasClass("mCSB_draggerRail"))) {
                            U(i);
                            var o = t(this),
                                l = o.find(".mCSB_dragger");
                            if (o.parent(".mCSB_scrollTools_horizontal").length > 0) {
                                if (!s.overflowed[1]) return;
                                var c = "x",
                                    h = n.pageX > l.offset().left ? -1 : 1,
                                    d = Math.abs(a[0].offsetLeft) - h * (.9 * r.width())
                            } else {
                                if (!s.overflowed[0]) return;
                                var c = "y",
                                    h = n.pageY > l.offset().top ? -1 : 1,
                                    d = Math.abs(a[0].offsetTop) - h * (.9 * r.height())
                            }
                            Q(i, d.toString(), {
                                dir: c,
                                scrollEasing: "mcsEaseInOut"
                            })
                        }
                    })
                },
                j = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = i.opt,
                        o = n + "_" + i.idx,
                        a = t("#mCSB_" + i.idx + "_container"),
                        r = a.parent();
                    a.bind("focusin." + o, function(i) {
                        var n = t(document.activeElement),
                            o = a.find(".mCustomScrollBox").length,
                            l = 0;
                        n.is(s.advanced.autoScrollOnFocus) && (U(e), clearTimeout(e[0]._focusTimeout), e[0]._focusTimer = o ? (l + 17) * o : 0, e[0]._focusTimeout = setTimeout(function() {
                            var t = [nt(n)[0], nt(n)[1]],
                                i = [a[0].offsetTop, a[0].offsetLeft],
                                o = [i[0] + t[0] >= 0 && i[0] + t[0] < r.height() - n.outerHeight(!1), i[1] + t[1] >= 0 && i[0] + t[1] < r.width() - n.outerWidth(!1)],
                                c = "yx" !== s.axis || o[0] || o[1] ? "all" : "none";
                            "x" === s.axis || o[0] || Q(e, t[0].toString(), {
                                dir: "y",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: c,
                                dur: l
                            }), "y" === s.axis || o[1] || Q(e, t[1].toString(), {
                                dir: "x",
                                scrollEasing: "mcsEaseInOut",
                                overwrite: c,
                                dur: l
                            })
                        }, e[0]._focusTimer))
                    })
                },
                L = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = n + "_" + i.idx,
                        o = t("#mCSB_" + i.idx + "_container").parent();
                    o.bind("scroll." + s, function(e) {
                        0 === o.scrollTop() && 0 === o.scrollLeft() || t(".mCSB_" + i.idx + "_scrollbar").css("visibility", "hidden")
                    })
                },
                q = function() {
                    var e = t(this),
                        i = e.data(n),
                        s = i.opt,
                        o = i.sequential,
                        a = n + "_" + i.idx,
                        r = ".mCSB_" + i.idx + "_scrollbar",
                        l = t(r + ">a");
                    l.bind("contextmenu." + a, function(t) {
                        t.preventDefault()
                    }).bind("mousedown." + a + " touchstart." + a + " pointerdown." + a + " MSPointerDown." + a + " mouseup." + a + " touchend." + a + " pointerup." + a + " MSPointerUp." + a + " mouseout." + a + " pointerout." + a + " MSPointerOut." + a + " click." + a, function(n) {
                        function a(t, i) {
                            o.scrollAmount = s.scrollButtons.scrollAmount, R(e, t, i)
                        }
                        if (n.preventDefault(), tt(n)) {
                            var r = t(this).attr("class");
                            switch (o.type = s.scrollButtons.scrollType, n.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === o.type) return;
                                    c = !0, i.tweenRunning = !1, a("on", r);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" === o.type) return;
                                    c = !1, o.dir && a("off", r);
                                    break;
                                case "click":
                                    if ("stepped" !== o.type || i.tweenRunning) return;
                                    a("on", r)
                            }
                        }
                    })
                },
                F = function() {
                    function e(e) {
                        function n(t, e) {
                            a.type = o.keyboard.scrollType, a.scrollAmount = o.keyboard.scrollAmount, "stepped" === a.type && s.tweenRunning || R(i, t, e)
                        }
                        switch (e.type) {
                            case "blur":
                                s.tweenRunning && a.dir && n("off", null);
                                break;
                            case "keydown":
                            case "keyup":
                                var r = e.keyCode ? e.keyCode : e.which,
                                    l = "on";
                                if ("x" !== o.axis && (38 === r || 40 === r) || "y" !== o.axis && (37 === r || 39 === r)) {
                                    if ((38 === r || 40 === r) && !s.overflowed[0] || (37 === r || 39 === r) && !s.overflowed[1]) return;
                                    "keyup" === e.type && (l = "off"), t(document.activeElement).is(h) || (e.preventDefault(), e.stopImmediatePropagation(), n(l, r))
                                } else if (33 === r || 34 === r) {
                                    if ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type) {
                                        U(i);
                                        var d = 34 === r ? -1 : 1;
                                        if ("x" === o.axis || "yx" === o.axis && s.overflowed[1] && !s.overflowed[0]) var p = "x",
                                            f = Math.abs(c[0].offsetLeft) - d * (.9 * u.width());
                                        else var p = "y",
                                            f = Math.abs(c[0].offsetTop) - d * (.9 * u.height());
                                        Q(i, f.toString(), {
                                            dir: p,
                                            scrollEasing: "mcsEaseInOut"
                                        })
                                    }
                                } else if ((35 === r || 36 === r) && !t(document.activeElement).is(h) && ((s.overflowed[0] || s.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()), "keyup" === e.type)) {
                                    if ("x" === o.axis || "yx" === o.axis && s.overflowed[1] && !s.overflowed[0]) var p = "x",
                                        f = 35 === r ? Math.abs(u.width() - c.outerWidth(!1)) : 0;
                                    else var p = "y",
                                        f = 35 === r ? Math.abs(u.height() - c.outerHeight(!1)) : 0;
                                    Q(i, f.toString(), {
                                        dir: p,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                                }
                        }
                    }
                    var i = t(this),
                        s = i.data(n),
                        o = s.opt,
                        a = s.sequential,
                        r = n + "_" + s.idx,
                        l = t("#mCSB_" + s.idx),
                        c = t("#mCSB_" + s.idx + "_container"),
                        u = c.parent(),
                        h = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                        d = c.find("iframe"),
                        p = ["blur." + r + " keydown." + r + " keyup." + r];
                    d.length && d.each(function() {
                        t(this).bind("load", function() {
                            H(this) && t(this.contentDocument || this.contentWindow.document).bind(p[0], function(t) {
                                e(t)
                            })
                        })
                    }), l.attr("tabindex", "0").bind(p[0], function(t) {
                        e(t)
                    })
                },
                R = function(e, i, s, o, a) {
                    function r(t) {
                        h.snapAmount && (d.scrollAmount = h.snapAmount instanceof Array ? "x" === d.dir[0] ? h.snapAmount[1] : h.snapAmount[0] : h.snapAmount);
                        var i = "stepped" !== d.type,
                            n = a ? a : t ? i ? m / 1.5 : g : 1e3 / 60,
                            s = t ? i ? 7.5 : 40 : 2.5,
                            l = [Math.abs(p[0].offsetTop), Math.abs(p[0].offsetLeft)],
                            u = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                            f = "x" === d.dir[0] ? l[1] + d.dir[1] * (u[1] * s) : l[0] + d.dir[1] * (u[0] * s),
                            v = "x" === d.dir[0] ? l[1] + d.dir[1] * parseInt(d.scrollAmount) : l[0] + d.dir[1] * parseInt(d.scrollAmount),
                            y = "auto" !== d.scrollAmount ? v : f,
                            b = o ? o : t ? i ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                            _ = !!t;
                        return t && n < 17 && (y = "x" === d.dir[0] ? l[1] : l[0]), Q(e, y.toString(), {
                            dir: d.dir[0],
                            scrollEasing: b,
                            dur: n,
                            onComplete: _
                        }), t ? void(d.dir = !1) : (clearTimeout(d.step), void(d.step = setTimeout(function() {
                            r()
                        }, n)))
                    }

                    function l() {
                        clearTimeout(d.step), J(d, "step"), U(e)
                    }
                    var c = e.data(n),
                        h = c.opt,
                        d = c.sequential,
                        p = t("#mCSB_" + c.idx + "_container"),
                        f = "stepped" === d.type,
                        m = h.scrollInertia < 26 ? 26 : h.scrollInertia,
                        g = h.scrollInertia < 1 ? 17 : h.scrollInertia;
                    switch (i) {
                        case "on":
                            if (d.dir = [s === u[16] || s === u[15] || 39 === s || 37 === s ? "x" : "y", s === u[13] || s === u[15] || 38 === s || 37 === s ? -1 : 1], U(e), it(s) && "stepped" === d.type) return;
                            r(f);
                            break;
                        case "off":
                            l(), (f || c.tweenRunning && d.dir) && r(!0)
                    }
                },
                B = function(e) {
                    var i = t(this).data(n).opt,
                        s = [];
                    return "function" == typeof e && (e = e()), e instanceof Array ? s = e.length > 1 ? [e[0], e[1]] : "x" === i.axis ? [null, e[0]] : [e[0], null] : (s[0] = e.y ? e.y : e.x || "x" === i.axis ? null : e, s[1] = e.x ? e.x : e.y || "y" === i.axis ? null : e), "function" == typeof s[0] && (s[0] = s[0]()), "function" == typeof s[1] && (s[1] = s[1]()), s
                },
                V = function(e, i) {
                    if (null != e && "undefined" != typeof e) {
                        var s = t(this),
                            o = s.data(n),
                            a = o.opt,
                            r = t("#mCSB_" + o.idx + "_container"),
                            l = r.parent(),
                            c = typeof e;
                        i || (i = "x" === a.axis ? "x" : "y");
                        var u = "x" === i ? r.outerWidth(!1) - l.width() : r.outerHeight(!1) - l.height(),
                            d = "x" === i ? r[0].offsetLeft : r[0].offsetTop,
                            p = "x" === i ? "left" : "top";
                        switch (c) {
                            case "function":
                                return e();
                            case "object":
                                var f = e.jquery ? e : t(e);
                                if (!f.length) return;
                                return "x" === i ? nt(f)[1] : nt(f)[0];
                            case "string":
                            case "number":
                                if (it(e)) return Math.abs(e);
                                if (e.indexOf("%") !== -1) return Math.abs(u * parseInt(e) / 100);
                                if (e.indexOf("-=") !== -1) return Math.abs(d - parseInt(e.split("-=")[1]));
                                if (e.indexOf("+=") !== -1) {
                                    var m = d + parseInt(e.split("+=")[1]);
                                    return m >= 0 ? 0 : Math.abs(m)
                                }
                                if (e.indexOf("px") !== -1 && it(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                                if ("top" === e || "left" === e) return 0;
                                if ("bottom" === e) return Math.abs(l.height() - r.outerHeight(!1));
                                if ("right" === e) return Math.abs(l.width() - r.outerWidth(!1));
                                if ("first" === e || "last" === e) {
                                    var f = r.find(":" + e);
                                    return "x" === i ? nt(f)[1] : nt(f)[0]
                                }
                                return t(e).length ? "x" === i ? nt(t(e))[1] : nt(t(e))[0] : (r.css(p, e), void h.update.call(null, s[0]))
                        }
                    }
                },
                Y = function(e) {
                    function i() {
                        return clearTimeout(d[0].autoUpdate), 0 === r.parents("html").length ? void(r = null) : void(d[0].autoUpdate = setTimeout(function() {
                            return c.advanced.updateOnSelectorChange && (l.poll.change.n = o(), l.poll.change.n !== l.poll.change.o) ? (l.poll.change.o = l.poll.change.n, void a(3)) : c.advanced.updateOnContentResize && (l.poll.size.n = r[0].scrollHeight + r[0].scrollWidth + d[0].offsetHeight + r[0].offsetHeight + r[0].offsetWidth, l.poll.size.n !== l.poll.size.o) ? (l.poll.size.o = l.poll.size.n, void a(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (l.poll.img.n = d.find("img").length, l.poll.img.n === l.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && i()) : (l.poll.img.o = l.poll.img.n, void d.find("img").each(function() {
                                s(this)
                            }))
                        }, c.advanced.autoUpdateTimeout))
                    }

                    function s(e) {
                        function i(t, e) {
                            return function() {
                                return e.apply(t, arguments)
                            }
                        }

                        function n() {
                            this.onload = null, t(e).addClass(u[2]), a(2)
                        }
                        if (t(e).hasClass(u[2])) return void a();
                        var s = new Image;
                        s.onload = i(s, n), s.src = e.src
                    }

                    function o() {
                        c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*");
                        var t = 0,
                            e = d.find(c.advanced.updateOnSelectorChange);
                        return c.advanced.updateOnSelectorChange && e.length > 0 && e.each(function() {
                            t += this.offsetHeight + this.offsetWidth
                        }), t
                    }

                    function a(t) {
                        clearTimeout(d[0].autoUpdate), h.update.call(null, r[0], t)
                    }
                    var r = t(this),
                        l = r.data(n),
                        c = l.opt,
                        d = t("#mCSB_" + l.idx + "_container");
                    return e ? (clearTimeout(d[0].autoUpdate), void J(d[0], "autoUpdate")) : void i()
                },
                X = function(t, e, i) {
                    return Math.round(t / e) * e - i
                },
                U = function(e) {
                    var i = e.data(n),
                        s = t("#mCSB_" + i.idx + "_container,#mCSB_" + i.idx + "_container_wrapper,#mCSB_" + i.idx + "_dragger_vertical,#mCSB_" + i.idx + "_dragger_horizontal");
                    s.each(function() {
                        Z.call(this)
                    })
                },
                Q = function(e, i, s) {
                    function o(t) {
                        return l && c.callbacks[t] && "function" == typeof c.callbacks[t]
                    }

                    function a() {
                        return [c.callbacks.alwaysTriggerOffsets || _ >= w[0] + C, c.callbacks.alwaysTriggerOffsets || _ <= -T]
                    }

                    function r() {
                        var t = [p[0].offsetTop, p[0].offsetLeft],
                            i = [y[0].offsetTop, y[0].offsetLeft],
                            n = [p.outerHeight(!1), p.outerWidth(!1)],
                            o = [d.height(), d.width()];
                        e[0].mcs = {
                            content: p,
                            top: t[0],
                            left: t[1],
                            draggerTop: i[0],
                            draggerLeft: i[1],
                            topPct: Math.round(100 * Math.abs(t[0]) / (Math.abs(n[0]) - o[0])),
                            leftPct: Math.round(100 * Math.abs(t[1]) / (Math.abs(n[1]) - o[1])),
                            direction: s.dir
                        }
                    }
                    var l = e.data(n),
                        c = l.opt,
                        u = {
                            trigger: "internal",
                            dir: "y",
                            scrollEasing: "mcsEaseOut",
                            drag: !1,
                            dur: c.scrollInertia,
                            overwrite: "all",
                            callbacks: !0,
                            onStart: !0,
                            onUpdate: !0,
                            onComplete: !0
                        },
                        s = t.extend(u, s),
                        h = [s.dur, s.drag ? 0 : s.dur],
                        d = t("#mCSB_" + l.idx),
                        p = t("#mCSB_" + l.idx + "_container"),
                        f = p.parent(),
                        m = c.callbacks.onTotalScrollOffset ? B.call(e, c.callbacks.onTotalScrollOffset) : [0, 0],
                        g = c.callbacks.onTotalScrollBackOffset ? B.call(e, c.callbacks.onTotalScrollBackOffset) : [0, 0];
                    if (l.trigger = s.trigger, 0 === f.scrollTop() && 0 === f.scrollLeft() || (t(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), f.scrollTop(0).scrollLeft(0)), "_resetY" !== i || l.contentReset.y || (o("onOverflowYNone") && c.callbacks.onOverflowYNone.call(e[0]), l.contentReset.y = 1), "_resetX" !== i || l.contentReset.x || (o("onOverflowXNone") && c.callbacks.onOverflowXNone.call(e[0]), l.contentReset.x = 1), "_resetY" !== i && "_resetX" !== i) {
                        if (!l.contentReset.y && e[0].mcs || !l.overflowed[0] || (o("onOverflowY") && c.callbacks.onOverflowY.call(e[0]), l.contentReset.x = null), !l.contentReset.x && e[0].mcs || !l.overflowed[1] || (o("onOverflowX") && c.callbacks.onOverflowX.call(e[0]), l.contentReset.x = null), c.snapAmount) {
                            var v = c.snapAmount instanceof Array ? "x" === s.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                            i = X(i, v, c.snapOffset)
                        }
                        switch (s.dir) {
                            case "x":
                                var y = t("#mCSB_" + l.idx + "_dragger_horizontal"),
                                    b = "left",
                                    _ = p[0].offsetLeft,
                                    w = [d.width() - p.outerWidth(!1), y.parent().width() - y.width()],
                                    x = [i, 0 === i ? 0 : i / l.scrollRatio.x],
                                    C = m[1],
                                    T = g[1],
                                    S = C > 0 ? C / l.scrollRatio.x : 0,
                                    D = T > 0 ? T / l.scrollRatio.x : 0;
                                break;
                            case "y":
                                var y = t("#mCSB_" + l.idx + "_dragger_vertical"),
                                    b = "top",
                                    _ = p[0].offsetTop,
                                    w = [d.height() - p.outerHeight(!1), y.parent().height() - y.height()],
                                    x = [i, 0 === i ? 0 : i / l.scrollRatio.y],
                                    C = m[0],
                                    T = g[0],
                                    S = C > 0 ? C / l.scrollRatio.y : 0,
                                    D = T > 0 ? T / l.scrollRatio.y : 0
                        }
                        x[1] < 0 || 0 === x[0] && 0 === x[1] ? x = [0, 0] : x[1] >= w[1] ? x = [w[0], w[1]] : x[0] = -x[0], e[0].mcs || (r(), o("onInit") && c.callbacks.onInit.call(e[0])), clearTimeout(p[0].onCompleteTimeout), K(y[0], b, Math.round(x[1]), h[1], s.scrollEasing), !l.tweenRunning && (0 === _ && x[0] >= 0 || _ === w[0] && x[0] <= w[0]) || K(p[0], b, Math.round(x[0]), h[0], s.scrollEasing, s.overwrite, {
                            onStart: function() {
                                s.callbacks && s.onStart && !l.tweenRunning && (o("onScrollStart") && (r(), c.callbacks.onScrollStart.call(e[0])), l.tweenRunning = !0, k(y), l.cbOffsets = a())
                            },
                            onUpdate: function() {
                                s.callbacks && s.onUpdate && o("whileScrolling") && (r(), c.callbacks.whileScrolling.call(e[0]))
                            },
                            onComplete: function() {
                                if (s.callbacks && s.onComplete) {
                                    "yx" === c.axis && clearTimeout(p[0].onCompleteTimeout);
                                    var t = p[0].idleTimer || 0;
                                    p[0].onCompleteTimeout = setTimeout(function() {
                                        o("onScroll") && (r(), c.callbacks.onScroll.call(e[0])), o("onTotalScroll") && x[1] >= w[1] - S && l.cbOffsets[0] && (r(), c.callbacks.onTotalScroll.call(e[0])), o("onTotalScrollBack") && x[1] <= D && l.cbOffsets[1] && (r(), c.callbacks.onTotalScrollBack.call(e[0])), l.tweenRunning = !1, p[0].idleTimer = 0, k(y, "hide")
                                    }, t)
                                }
                            }
                        })
                    }
                },
                K = function(t, e, i, n, s, o, a) {
                    function r() {
                        w.stop || (y || f.call(), y = G() - v, l(), y >= w.time && (w.time = y > w.time ? y + d - (y - w.time) : y + d - 1, w.time < y + 1 && (w.time = y + 1)), w.time < n ? w.id = p(r) : g.call())
                    }

                    function l() {
                        n > 0 ? (w.currVal = h(w.time, b, x, n, s), _[e] = Math.round(w.currVal) + "px") : _[e] = i + "px", m.call()
                    }

                    function c() {
                        d = 1e3 / 60, w.time = y + d, p = window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                            return l(), setTimeout(t, .01)
                        }, w.id = p(r)
                    }

                    function u() {
                        null != w.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(w.id) : clearTimeout(w.id), w.id = null)
                    }

                    function h(t, e, i, n, s) {
                        switch (s) {
                            case "linear":
                            case "mcsLinear":
                                return i * t / n + e;
                            case "mcsLinearOut":
                                return t /= n, t--, i * Math.sqrt(1 - t * t) + e;
                            case "easeInOutSmooth":
                                return t /= n / 2, t < 1 ? i / 2 * t * t + e : (t--, -i / 2 * (t * (t - 2) - 1) + e);
                            case "easeInOutStrong":
                                return t /= n / 2, t < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : (t--, i / 2 * (-Math.pow(2, -10 * t) + 2) + e);
                            case "easeInOut":
                            case "mcsEaseInOut":
                                return t /= n / 2, t < 1 ? i / 2 * t * t * t + e : (t -= 2, i / 2 * (t * t * t + 2) + e);
                            case "easeOutSmooth":
                                return t /= n, t--, -i * (t * t * t * t - 1) + e;
                            case "easeOutStrong":
                                return i * (-Math.pow(2, -10 * t / n) + 1) + e;
                            case "easeOut":
                            case "mcsEaseOut":
                            default:
                                var o = (t /= n) * t,
                                    a = o * t;
                                return e + i * (.499999999999997 * a * o + -2.5 * o * o + 5.5 * a + -6.5 * o + 4 * t)
                        }
                    }
                    t._mTween || (t._mTween = {
                        top: {},
                        left: {}
                    });
                    var d, p, a = a || {},
                        f = a.onStart || function() {},
                        m = a.onUpdate || function() {},
                        g = a.onComplete || function() {},
                        v = G(),
                        y = 0,
                        b = t.offsetTop,
                        _ = t.style,
                        w = t._mTween[e];
                    "left" === e && (b = t.offsetLeft);
                    var x = i - b;
                    w.stop = 0, "none" !== o && u(), c()
                },
                G = function() {
                    return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
                },
                Z = function() {
                    var t = this;
                    t._mTween || (t._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var e = ["top", "left"], i = 0; i < e.length; i++) {
                        var n = e[i];
                        t._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(t._mTween[n].id) : clearTimeout(t._mTween[n].id),
                            t._mTween[n].id = null, t._mTween[n].stop = 1)
                    }
                },
                J = function(t, e) {
                    try {
                        delete t[e]
                    } catch (i) {
                        t[e] = null
                    }
                },
                tt = function(t) {
                    return !(t.which && 1 !== t.which)
                },
                et = function(t) {
                    var e = t.originalEvent.pointerType;
                    return !(e && "touch" !== e && 2 !== e)
                },
                it = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                nt = function(t) {
                    var e = t.parents(".mCSB_container");
                    return [t.offset().top - e.offset().top, t.offset().left - e.offset().left]
                },
                st = function() {
                    function t() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                    var e = t();
                    return !!e && document[e]
                };
            t.fn[i] = function(e) {
                return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : h.init.apply(this, arguments)
            }, t[i] = function(e) {
                return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist") : h.init.apply(this, arguments)
            }, t[i].defaults = o, window[i] = !0, t(window).bind("load", function() {
                t(s)[i](), t.extend(t.expr[":"], {
                    mcsInView: t.expr[":"].mcsInView || function(e) {
                        var i, n, s = t(e),
                            o = s.parents(".mCSB_container");
                        if (o.length) return i = o.parent(), n = [o[0].offsetTop, o[0].offsetLeft], n[0] + nt(s)[0] >= 0 && n[0] + nt(s)[0] < i.height() - s.outerHeight(!1) && n[1] + nt(s)[1] >= 0 && n[1] + nt(s)[1] < i.width() - s.outerWidth(!1)
                    },
                    mcsInSight: t.expr[":"].mcsInSight || function(e, i, n) {
                        var s, o, a, r, l = t(e),
                            c = l.parents(".mCSB_container"),
                            u = "exact" === n[3] ? [
                                [1, 0],
                                [1, 0]
                            ] : [
                                [.9, .1],
                                [.6, .4]
                            ];
                        if (c.length) return s = [l.outerHeight(!1), l.outerWidth(!1)], a = [c[0].offsetTop + nt(l)[0], c[0].offsetLeft + nt(l)[1]], o = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], r = [s[0] < o[0] ? u[0] : u[1], s[1] < o[1] ? u[0] : u[1]], a[0] - o[0] * r[0][0] < 0 && a[0] + s[0] - o[0] * r[0][1] >= 0 && a[1] - o[1] * r[1][0] < 0 && a[1] + s[1] - o[1] * r[1][1] >= 0
                    },
                    mcsOverflow: t.expr[":"].mcsOverflow || function(e) {
                        var i = t(e).data(n);
                        if (i) return i.overflowed[0] || i.overflowed[1]
                    }
                })
            })
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";

        function e(e, i) {
            this.element = e, this.options = t.extend({}, s, i), this.init()
        }

        function i(e) {
            if (!t(e.target).parents().hasClass("jq-selectbox") && "OPTION" != e.target.nodeName && t("div.jq-selectbox.opened").length) {
                var i = t("div.jq-selectbox.opened"),
                    s = t("div.jq-selectbox__search input", i),
                    o = t("div.jq-selectbox__dropdown", i),
                    a = i.find("select").data("_" + n).options;
                a.onSelectClosed.call(i), s.length && s.val("").keyup(), o.hide().find("li.sel").addClass("selected"), i.removeClass("focused opened dropup dropdown")
            }
        }
        var n = "styler",
            s = {
                wrapper: "form",
                idSuffix: "-styler",
                filePlaceholder: "Файл не выбран",
                fileBrowse: "Обзор...",
                fileNumber: "Выбрано файлов: %s",
                selectPlaceholder: "Выберите...",
                selectSearch: !1,
                selectSearchLimit: 10,
                selectSearchNotFound: "Совпадений не найдено",
                selectSearchPlaceholder: "Поиск...",
                selectVisibleOptions: 0,
                singleSelectzIndex: "100",
                selectSmartPositioning: !0,
                onSelectOpened: function() {},
                onSelectClosed: function() {},
                onFormStyled: function() {}
            };
        e.prototype = {
            init: function() {
                function e() {
                    var t = "",
                        e = "",
                        i = "",
                        o = "";
                    void 0 !== n.attr("id") && "" !== n.attr("id") && (t = ' id="' + n.attr("id") + s.idSuffix + '"'), void 0 !== n.attr("title") && "" !== n.attr("title") && (e = ' title="' + n.attr("title") + '"'), void 0 !== n.attr("class") && "" !== n.attr("class") && (i = " " + n.attr("class"));
                    var a = n.data();
                    for (var r in a) "" !== a[r] && "_styler" !== r && (o += " data-" + r + '="' + a[r] + '"');
                    t += o, this.id = t, this.title = e, this.classes = i
                }
                var n = t(this.element),
                    s = this.options,
                    o = !(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/(Windows\sPhone)/i)),
                    a = !(!navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/(Windows\sPhone)/i));
                if (n.is(":checkbox")) {
                    var r = function() {
                        var i = new e,
                            s = t("<div" + i.id + ' class="jq-checkbox' + i.classes + '"' + i.title + '><div class="jq-checkbox__div"></div></div>');
                        n.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(s).prependTo(s), s.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative",
                            overflow: "hidden"
                        }), n.is(":checked") && s.addClass("checked"), n.is(":disabled") && s.addClass("disabled"), s.click(function(t) {
                            t.preventDefault(), s.is(".disabled") || (n.is(":checked") ? (n.prop("checked", !1), s.removeClass("checked")) : (n.prop("checked", !0), s.addClass("checked")), n.focus().change())
                        }), n.closest("label").add('label[for="' + n.attr("id") + '"]').on("click.styler", function(e) {
                            t(e.target).is("a") || t(e.target).closest(s).length || (s.triggerHandler("click"), e.preventDefault())
                        }), n.on("change.styler", function() {
                            n.is(":checked") ? s.addClass("checked") : s.removeClass("checked")
                        }).on("keydown.styler", function(t) {
                            32 == t.which && s.click()
                        }).on("focus.styler", function() {
                            s.is(".disabled") || s.addClass("focused")
                        }).on("blur.styler", function() {
                            s.removeClass("focused")
                        })
                    };
                    r(), n.on("refresh", function() {
                        n.closest("label").add('label[for="' + n.attr("id") + '"]').off(".styler"), n.off(".styler").parent().before(n).remove(), r()
                    })
                } else if (n.is(":radio")) {
                    var l = function() {
                        var i = new e,
                            o = t("<div" + i.id + ' class="jq-radio' + i.classes + '"' + i.title + '><div class="jq-radio__div"></div></div>');
                        n.css({
                            position: "absolute",
                            zIndex: "-1",
                            opacity: 0,
                            margin: 0,
                            padding: 0
                        }).after(o).prependTo(o), o.attr("unselectable", "on").css({
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "-o-user-select": "none",
                            "user-select": "none",
                            display: "inline-block",
                            position: "relative"
                        }), n.is(":checked") && o.addClass("checked"), n.is(":disabled") && o.addClass("disabled"), o.click(function(t) {
                            t.preventDefault(), o.is(".disabled") || (o.closest(s.wrapper).find('input[name="' + n.attr("name") + '"]').prop("checked", !1).parent().removeClass("checked"), n.prop("checked", !0).parent().addClass("checked"), n.focus().change())
                        }), n.closest("label").add('label[for="' + n.attr("id") + '"]').on("click.styler", function(e) {
                            t(e.target).is("a") || t(e.target).closest(o).length || (o.triggerHandler("click"), e.preventDefault())
                        }), n.on("change.styler", function() {
                            n.parent().addClass("checked")
                        }).on("focus.styler", function() {
                            o.is(".disabled") || o.addClass("focused")
                        }).on("blur.styler", function() {
                            o.removeClass("focused")
                        })
                    };
                    l(), n.on("refresh", function() {
                        n.closest("label").add('label[for="' + n.attr("id") + '"]').off(".styler"), n.off(".styler").parent().before(n).remove(), l()
                    })
                } else if (n.is(":file")) {
                    n.css({
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        margin: 0,
                        padding: 0
                    });
                    var c = function() {
                        var i = new e,
                            o = n.data("placeholder");
                        void 0 === o && (o = s.filePlaceholder);
                        var a = n.data("browse");
                        void 0 !== a && "" !== a || (a = s.fileBrowse);
                        var r = t("<div" + i.id + ' class="jq-file' + i.classes + '"' + i.title + ' style="display: inline-block; position: relative; overflow: hidden"></div>'),
                            l = t('<div class="jq-file__name">' + o + "</div>").appendTo(r);
                        t('<div class="jq-file__browse">' + a + "</div>").appendTo(r), n.after(r).appendTo(r), n.is(":disabled") && r.addClass("disabled"), n.on("change.styler", function() {
                            var t = n.val();
                            if (n.is("[multiple]")) {
                                t = "";
                                var e = n[0].files.length;
                                if (e > 0) {
                                    var i = n.data("number");
                                    void 0 === i && (i = s.fileNumber), i = i.replace("%s", e), t = i
                                }
                            }
                            l.text(t.replace(/.+[\\\/]/, "")), "" === t ? (l.text(o), r.removeClass("changed")) : r.addClass("changed")
                        }).on("focus.styler", function() {
                            r.addClass("focused")
                        }).on("blur.styler", function() {
                            r.removeClass("focused")
                        }).on("click.styler", function() {
                            r.removeClass("focused")
                        })
                    };
                    c(), n.on("refresh", function() {
                        n.off(".styler").parent().before(n).remove(), c()
                    })
                } else if (n.is('input[type="number"]')) {
                    var u = function() {
                        var e = t('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');
                        n.after(e).prependTo(e).wrap('<div class="jq-number__field"></div>'), n.is(":disabled") && e.addClass("disabled");
                        var i, s, o, a = null,
                            r = null;
                        void 0 !== n.attr("min") && (i = n.attr("min")), void 0 !== n.attr("max") && (s = n.attr("max")), o = void 0 !== n.attr("step") && t.isNumeric(n.attr("step")) ? Number(n.attr("step")) : Number(1);
                        var l = function(e) {
                            var a, r = n.val();
                            t.isNumeric(r) || (r = 0, n.val("0")), e.is(".minus") ? (a = parseInt(r, 10) - o, o > 0 && (a = Math.ceil(a / o) * o)) : e.is(".plus") && (a = parseInt(r, 10) + o, o > 0 && (a = Math.floor(a / o) * o)), t.isNumeric(i) && t.isNumeric(s) ? a >= i && a <= s && n.val(a) : t.isNumeric(i) && !t.isNumeric(s) ? a >= i && n.val(a) : !t.isNumeric(i) && t.isNumeric(s) ? a <= s && n.val(a) : n.val(a)
                        };
                        e.is(".disabled") || (e.on("mousedown", "div.jq-number__spin", function() {
                            var e = t(this);
                            l(e), a = setTimeout(function() {
                                r = setInterval(function() {
                                    l(e)
                                }, 40)
                            }, 350)
                        }).on("mouseup mouseout", "div.jq-number__spin", function() {
                            clearTimeout(a), clearInterval(r)
                        }), n.on("focus.styler", function() {
                            e.addClass("focused")
                        }).on("blur.styler", function() {
                            e.removeClass("focused")
                        }))
                    };
                    u(), n.on("refresh", function() {
                        n.off(".styler").closest(".jq-number").before(n).remove(), u()
                    })
                } else if (n.is("select")) {
                    var h = function() {
                        function r(e) {
                            e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", function(e) {
                                var i = null;
                                "mousewheel" == e.type ? i = e.originalEvent.wheelDelta * -1 : "DOMMouseScroll" == e.type && (i = 40 * e.originalEvent.detail), i && (e.stopPropagation(), e.preventDefault(), t(this).scrollTop(i + t(this).scrollTop()))
                            })
                        }

                        function l() {
                            for (var t = 0; t < h.length; t++) {
                                var e = h.eq(t),
                                    i = "",
                                    n = "",
                                    o = "",
                                    a = "",
                                    r = "",
                                    l = "",
                                    c = "",
                                    u = "",
                                    p = "",
                                    f = "disabled",
                                    m = "selected sel disabled";
                                e.prop("selected") && (n = "selected sel"), e.is(":disabled") && (n = f), e.is(":selected:disabled") && (n = m), void 0 !== e.attr("id") && "" !== e.attr("id") && (a = ' id="' + e.attr("id") + s.idSuffix + '"'), void 0 !== e.attr("title") && "" !== h.attr("title") && (r = ' title="' + e.attr("title") + '"'), void 0 !== e.attr("class") && (c = " " + e.attr("class"), p = ' data-jqfs-class="' + e.attr("class") + '"');
                                var g = e.data();
                                for (var v in g) "" !== g[v] && (l += " data-" + v + '="' + g[v] + '"');
                                n + c !== "" && (o = ' class="' + n + c + '"'), i = "<li" + p + l + o + r + a + ">" + e.html() + "</li>", e.parent().is("optgroup") && (void 0 !== e.parent().attr("class") && (u = " " + e.parent().attr("class")), i = "<li" + p + l + ' class="' + n + c + " option" + u + '"' + r + a + ">" + e.html() + "</li>", e.is(":first-child") && (i = '<li class="optgroup' + u + '">' + e.parent().attr("label") + "</li>" + i)), d += i
                            }
                        }

                        function c() {
                            var a = new e,
                                c = "",
                                u = n.data("placeholder"),
                                p = n.data("search"),
                                f = n.data("search-limit"),
                                m = n.data("search-not-found"),
                                g = n.data("search-placeholder"),
                                v = n.data("z-index"),
                                y = n.data("smart-positioning");
                            void 0 === u && (u = s.selectPlaceholder), void 0 !== p && "" !== p || (p = s.selectSearch), void 0 !== f && "" !== f || (f = s.selectSearchLimit), void 0 !== m && "" !== m || (m = s.selectSearchNotFound), void 0 === g && (g = s.selectSearchPlaceholder), void 0 !== v && "" !== v || (v = s.singleSelectzIndex), void 0 !== y && "" !== y || (y = s.selectSmartPositioning);
                            var b = t("<div" + a.id + ' class="jq-selectbox jqselect' + a.classes + '" style="display: inline-block; position: relative; z-index:' + v + '"><div class="jq-selectbox__select"' + a.title + ' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');
                            n.css({
                                margin: 0,
                                padding: 0
                            }).after(b).prependTo(b);
                            var _ = t("div.jq-selectbox__select", b),
                                w = t("div.jq-selectbox__select-text", b),
                                x = h.filter(":selected");
                            l(), p && (c = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + g + '"></div><div class="jq-selectbox__not-found">' + m + "</div>");
                            var k = t('<div class="jq-selectbox__dropdown" style="position: absolute">' + c + '<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">' + d + "</ul></div>");
                            b.append(k);
                            var C = t("ul", k),
                                T = t("li", k),
                                S = t("input", k),
                                D = t("div.jq-selectbox__not-found", k).hide();
                            T.length < f && S.parent().hide(), "" === n.val() ? w.text(u).addClass("placeholder") : w.text(x.text());
                            var P = 0,
                                I = 0;
                            if (T.each(function() {
                                    var e = t(this);
                                    e.css({
                                        display: "inline-block"
                                    }), e.innerWidth() > P && (P = e.innerWidth(), I = e.width()), e.css({
                                        display: ""
                                    })
                                }), w.is(".placeholder") && w.width() > P) w.width(w.width());
                            else {
                                var O = b.clone().appendTo("body").width("auto"),
                                    M = O.outerWidth();
                                O.remove(), M == b.outerWidth() && w.width(I)
                            }
                            P > b.width() && k.width(P), "" === h.first().text() && "" !== n.data("placeholder") && T.first().hide(), n.css({
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0
                            });
                            var A = b.outerHeight(),
                                E = S.outerHeight(),
                                N = C.css("max-height"),
                                H = T.filter(".selected");
                            H.length < 1 && T.first().addClass("selected sel"), void 0 === T.data("li-height") && T.data("li-height", T.outerHeight());
                            var $ = k.css("top");
                            if ("auto" == k.css("left") && k.css({
                                    left: 0
                                }), "auto" == k.css("top") && k.css({
                                    top: A
                                }), k.hide(), H.length && (h.first().text() != x.text() && b.addClass("changed"), b.data("jqfs-class", H.data("jqfs-class")), b.addClass(H.data("jqfs-class"))), n.is(":disabled")) return b.addClass("disabled"), !1;
                            _.click(function() {
                                if (t("div.jq-selectbox").filter(".opened").length && s.onSelectClosed.call(t("div.jq-selectbox").filter(".opened")), n.focus(), !o) {
                                    var e = t(window),
                                        i = T.data("li-height"),
                                        a = b.offset().top,
                                        l = e.height() - A - (a - e.scrollTop()),
                                        c = n.data("visible-options");
                                    void 0 !== c && "" !== c || (c = s.selectVisibleOptions);
                                    var u = 5 * i,
                                        d = i * c;
                                    c > 0 && c < 6 && (u = d), 0 === c && (d = "auto");
                                    var p = function() {
                                            k.height("auto").css({
                                                bottom: "auto",
                                                top: $
                                            });
                                            var t = function() {
                                                C.css("max-height", Math.floor((l - 20 - E) / i) * i)
                                            };
                                            t(), C.css("max-height", d), "none" != N && C.css("max-height", N), l < k.outerHeight() + 20 && t()
                                        },
                                        f = function() {
                                            k.height("auto").css({
                                                top: "auto",
                                                bottom: $
                                            });
                                            var t = function() {
                                                C.css("max-height", Math.floor((a - e.scrollTop() - 20 - E) / i) * i)
                                            };
                                            t(), C.css("max-height", d), "none" != N && C.css("max-height", N), a - e.scrollTop() - 20 < k.outerHeight() + 20 && t()
                                        };
                                    y === !0 || 1 === y ? l > u + E + 20 ? (p(), b.removeClass("dropup").addClass("dropdown")) : (f(), b.removeClass("dropdown").addClass("dropup")) : y !== !1 && 0 !== y || l > u + E + 20 && (p(), b.removeClass("dropup").addClass("dropdown")), b.offset().left + k.outerWidth() > e.width() && k.css({
                                        left: "auto",
                                        right: 0
                                    }), t("div.jqselect").css({
                                        zIndex: v - 1
                                    }).removeClass("opened"), b.css({
                                        zIndex: v
                                    }), k.is(":hidden") ? (t("div.jq-selectbox__dropdown:visible").hide(), k.show(), b.addClass("opened focused"), s.onSelectOpened.call(b)) : (k.hide(), b.removeClass("opened dropup dropdown"), t("div.jq-selectbox").filter(".opened").length && s.onSelectClosed.call(b)), S.length && (S.val("").keyup(), D.hide(), S.keyup(function() {
                                        var e = t(this).val();
                                        T.each(function() {
                                            t(this).html().match(new RegExp(".*?" + e + ".*?", "i")) ? t(this).show() : t(this).hide()
                                        }), "" === h.first().text() && "" !== n.data("placeholder") && T.first().hide(), T.filter(":visible").length < 1 ? D.show() : D.hide()
                                    })), T.filter(".selected").length && ("" === n.val() ? C.scrollTop(0) : (C.innerHeight() / i % 2 !== 0 && (i /= 2), C.scrollTop(C.scrollTop() + T.filter(".selected").position().top - C.innerHeight() / 2 + i))), r(C)
                                }
                            }), T.hover(function() {
                                t(this).siblings().removeClass("selected")
                            });
                            var z = T.filter(".selected").text();
                            T.filter(":not(.disabled):not(.optgroup)").click(function() {
                                n.focus();
                                var e = t(this),
                                    i = e.text();
                                if (!e.is(".selected")) {
                                    var o = e.index();
                                    o -= e.prevAll(".optgroup").length, e.addClass("selected sel").siblings().removeClass("selected sel"), h.prop("selected", !1).eq(o).prop("selected", !0), z = i, w.text(i), b.data("jqfs-class") && b.removeClass(b.data("jqfs-class")), b.data("jqfs-class", e.data("jqfs-class")), b.addClass(e.data("jqfs-class")), n.change()
                                }
                                k.hide(), b.removeClass("opened dropup dropdown"), s.onSelectClosed.call(b)
                            }), k.mouseout(function() {
                                t("li.sel", k).addClass("selected")
                            }), n.on("change.styler", function() {
                                w.text(h.filter(":selected").text()).removeClass("placeholder"), T.removeClass("selected sel").not(".optgroup").eq(n[0].selectedIndex).addClass("selected sel"), h.first().text() != T.filter(".selected").text() ? b.addClass("changed") : b.removeClass("changed")
                            }).on("focus.styler", function() {
                                b.addClass("focused"), t("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()
                            }).on("blur.styler", function() {
                                b.removeClass("focused")
                            }).on("keydown.styler keyup.styler", function(t) {
                                var e = T.data("li-height");
                                "" === n.val() ? w.text(u).addClass("placeholder") : w.text(h.filter(":selected").text()), T.removeClass("selected sel").not(".optgroup").eq(n[0].selectedIndex).addClass("selected sel"), 38 != t.which && 37 != t.which && 33 != t.which && 36 != t.which || ("" === n.val() ? C.scrollTop(0) : C.scrollTop(C.scrollTop() + T.filter(".selected").position().top)), 40 != t.which && 39 != t.which && 34 != t.which && 35 != t.which || C.scrollTop(C.scrollTop() + T.filter(".selected").position().top - C.innerHeight() + e), 13 == t.which && (t.preventDefault(), k.hide(), b.removeClass("opened dropup dropdown"), s.onSelectClosed.call(b))
                            }).on("keydown.styler", function(t) {
                                32 == t.which && (t.preventDefault(), _.click())
                            }), i.registered || (t(document).on("click", i), i.registered = !0)
                        }

                        function u() {
                            var i = new e,
                                s = t("<div" + i.id + ' class="jq-select-multiple jqselect' + i.classes + '"' + i.title + ' style="display: inline-block; position: relative"></div>');
                            n.css({
                                margin: 0,
                                padding: 0
                            }).after(s), l(), s.append("<ul>" + d + "</ul>");
                            var o = t("ul", s).css({
                                    position: "relative",
                                    "overflow-x": "hidden",
                                    "-webkit-overflow-scrolling": "touch"
                                }),
                                a = t("li", s).attr("unselectable", "on"),
                                c = n.attr("size"),
                                u = o.outerHeight(),
                                p = a.outerHeight();
                            void 0 !== c && c > 0 ? o.css({
                                height: p * c
                            }) : o.css({
                                height: 4 * p
                            }), u > s.height() && (o.css("overflowY", "scroll"), r(o), a.filter(".selected").length && o.scrollTop(o.scrollTop() + a.filter(".selected").position().top)), n.prependTo(s).css({
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                height: "100%",
                                opacity: 0
                            }), n.is(":disabled") ? (s.addClass("disabled"), h.each(function() {
                                t(this).is(":selected") && a.eq(t(this).index()).addClass("selected")
                            })) : (a.filter(":not(.disabled):not(.optgroup)").click(function(e) {
                                n.focus();
                                var i = t(this);
                                if (e.ctrlKey || e.metaKey || i.addClass("selected"), e.shiftKey || i.addClass("first"), e.ctrlKey || e.metaKey || e.shiftKey || i.siblings().removeClass("selected first"), (e.ctrlKey || e.metaKey) && (i.is(".selected") ? i.removeClass("selected first") : i.addClass("selected first"), i.siblings().removeClass("first")), e.shiftKey) {
                                    var s = !1,
                                        o = !1;
                                    i.siblings().removeClass("selected").siblings(".first").addClass("selected"), i.prevAll().each(function() {
                                        t(this).is(".first") && (s = !0)
                                    }), i.nextAll().each(function() {
                                        t(this).is(".first") && (o = !0)
                                    }), s && i.prevAll().each(function() {
                                        return !t(this).is(".selected") && void t(this).not(".disabled, .optgroup").addClass("selected")
                                    }), o && i.nextAll().each(function() {
                                        return !t(this).is(".selected") && void t(this).not(".disabled, .optgroup").addClass("selected")
                                    }), 1 == a.filter(".selected").length && i.addClass("first")
                                }
                                h.prop("selected", !1), a.filter(".selected").each(function() {
                                    var e = t(this),
                                        i = e.index();
                                    e.is(".option") && (i -= e.prevAll(".optgroup").length), h.eq(i).prop("selected", !0)
                                }), n.change()
                            }), h.each(function(e) {
                                t(this).data("optionIndex", e)
                            }), n.on("change.styler", function() {
                                a.removeClass("selected");
                                var e = [];
                                h.filter(":selected").each(function() {
                                    e.push(t(this).data("optionIndex"))
                                }), a.not(".optgroup").filter(function(i) {
                                    return t.inArray(i, e) > -1
                                }).addClass("selected")
                            }).on("focus.styler", function() {
                                s.addClass("focused")
                            }).on("blur.styler", function() {
                                s.removeClass("focused")
                            }), u > s.height() && n.on("keydown.styler", function(t) {
                                38 != t.which && 37 != t.which && 33 != t.which || o.scrollTop(o.scrollTop() + a.filter(".selected").position().top - p), 40 != t.which && 39 != t.which && 34 != t.which || o.scrollTop(o.scrollTop() + a.filter(".selected:last").position().top - o.innerHeight() + 2 * p)
                            }))
                        }
                        var h = t("option", n),
                            d = "";
                        if (n.is("[multiple]")) {
                            if (a || o) return;
                            u()
                        } else c()
                    };
                    h(), n.on("refresh", function() {
                        n.off(".styler").parent().before(n).remove(), h()
                    })
                } else n.is(":reset") && n.on("click", function() {
                    setTimeout(function() {
                        n.closest(s.wrapper).find("input, select").trigger("refresh")
                    }, 1)
                })
            },
            destroy: function() {
                var e = t(this.element);
                e.is(":checkbox") || e.is(":radio") ? (e.removeData("_" + n).off(".styler refresh").removeAttr("style").parent().before(e).remove(), e.closest("label").add('label[for="' + e.attr("id") + '"]').off(".styler")) : e.is('input[type="number"]') ? e.removeData("_" + n).off(".styler refresh").closest(".jq-number").before(e).remove() : (e.is(":file") || e.is("select")) && e.removeData("_" + n).off(".styler refresh").removeAttr("style").parent().before(e).remove()
            }
        }, t.fn[n] = function(i) {
            var s = arguments;
            if (void 0 === i || "object" == typeof i) return this.each(function() {
                t.data(this, "_" + n) || t.data(this, "_" + n, new e(this, i))
            }).promise().done(function() {
                var e = t(this[0]).data("_" + n);
                e && e.options.onFormStyled.call()
            }), this;
            if ("string" == typeof i && "_" !== i[0] && "init" !== i) {
                var o;
                return this.each(function() {
                    var a = t.data(this, "_" + n);
                    a instanceof e && "function" == typeof a[i] && (o = a[i].apply(a, Array.prototype.slice.call(s, 1)))
                }), void 0 !== o ? o : this
            }
        }, i.registered = !1
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(t) {
            for (var e = t.css("visibility");
                 "inherit" === e;) t = t.parent(), e = t.css("visibility");
            return "hidden" !== e
        }

        function i(t) {
            for (var e, i; t.length && t[0] !== document;) {
                if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                t = t.parent()
            }
            return 0
        }

        function n() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function s(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.on("mouseout", i, function() {
                t(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && t(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", i, o)
        }

        function o() {
            t.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && t(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && t(this).addClass("ui-datepicker-next-hover"))
        }

        function a(e, i) {
            t.extend(e, i);
            for (var n in i) null == i[n] && (e[n] = i[n]);
            return e
        }

        function r(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        t.ui = t.ui || {};
        var l = (t.ui.version = "1.12.0", 0),
            c = Array.prototype.slice;
        t.cleanData = function(e) {
            return function(i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
                } catch (a) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, n) {
            var s, o, a, r = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var c = l + "-" + e;
            return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][c.toLowerCase()] = function(e) {
                return !!t.data(e, c)
            }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, t.extend(o, s, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
                return t.isFunction(n) ? void(r[e] = function() {
                    function t() {
                        return i.prototype[e].apply(this, arguments)
                    }

                    function s(t) {
                        return i.prototype[e].apply(this, t)
                    }
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(r[e] = n)
            }), o.prototype = t.widget.extend(a, {
                widgetEventPrefix: s ? a.widgetEventPrefix || e : e
            }, r, {
                constructor: o,
                namespace: l,
                widgetName: e,
                widgetFullName: c
            }), s ? (t.each(s._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var i, n, s = c.call(arguments, 1), o = 0, a = s.length; o < a; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
            return e
        }, t.widget.bridge = function(e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function(s) {
                var o = "string" == typeof s,
                    a = c.call(arguments, 1),
                    r = this;
                return o ? this.each(function() {
                    var i, o = t.data(this, n);
                    return "instance" === s ? (r = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                }) : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function() {
                    var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                })), r
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(e, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                    e._removeClass(i, t)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var n, s, o, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
            },
            _setOptionClasses: function(e) {
                var i, n, s;
                for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                    element: n,
                    keys: i,
                    classes: e,
                    add: !0
                })))
            },
            _setOptionDisabled: function(t) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(e) {
                function i(i, o) {
                    var a, r;
                    for (r = 0; r < i.length; r++) a = s.classesElementLookup[i[r]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), s.classesElementLookup[i[r]] = a, n.push(i[r]), o && e.classes[i[r]] && n.push(e.classes[i[r]])
                }
                var n = [],
                    s = this;
                return e = t.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, e), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
            },
            _removeClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !1)
            },
            _addClass: function(t, e, i) {
                return this._toggleClass(t, e, i, !0)
            },
            _toggleClass: function(t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = {
                        extra: s ? e : i,
                        keys: s ? t : e,
                        element: s ? this.element : t,
                        add: n
                    };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function(e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, a) {
                    function r() {
                        if (e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        c = l[1] + o.eventNamespace,
                        u = l[2];
                    u ? s.on(c, u, r) : i.on(c, r)
                })
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        this._addClass(t(e.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(e) {
                        this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, n) {
                var s, o, a = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(n, s, o) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var a, r = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
                    t(this)[e](), o && o.call(n[0]), i()
                })
            }
        });
        t.widget;
        ! function() {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
            }

            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }

            function n(e) {
                var i = e[0];
                return 9 === i.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                }
            }
            var s, o, a = Math.max,
                r = Math.abs,
                l = Math.round,
                c = /left|center|right/,
                u = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                d = /^\w+/,
                p = /%$/,
                f = t.fn.position;
            o = function() {
                var e = t("<div>").css("position", "absolute").appendTo("body").offset({
                        top: 1.5,
                        left: 1.5
                    }),
                    i = 1.5 === e.offset().top;
                return e.remove(), o = function() {
                    return i
                }, i
            }, t.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                        o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                    return {
                        width: o ? t.position.scrollbarWidth() : 0,
                        height: s ? t.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType,
                        o = !n && !s;
                    return {
                        element: i,
                        isWindow: n,
                        isDocument: s,
                        offset: o ? t(e).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: i.outerWidth(),
                        height: i.outerHeight()
                    }
                }
            }, t.fn.position = function(s) {
                if (!s || !s.of) return f.apply(this, arguments);
                s = t.extend({}, s);
                var p, m, g, v, y, b, _ = t(s.of),
                    w = t.position.getWithinInfo(s.within),
                    x = t.position.getScrollInfo(w),
                    k = (s.collision || "flip").split(" "),
                    C = {};
                return b = n(_), _[0].preventDefault && (s.at = "left top"), m = b.width, g = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function() {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = c.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = c.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                }), 1 === k.length && (k[1] = k[0]), "right" === s.at[0] ? y.left += m : "center" === s.at[0] && (y.left += m / 2), "bottom" === s.at[1] ? y.top += g : "center" === s.at[1] && (y.top += g / 2), p = e(C.at, m, g), y.left += p[0], y.top += p[1], this.each(function() {
                    var n, c, u = t(this),
                        h = u.outerWidth(),
                        d = u.outerHeight(),
                        f = i(this, "marginLeft"),
                        b = i(this, "marginTop"),
                        T = h + f + i(this, "marginRight") + x.width,
                        S = d + b + i(this, "marginBottom") + x.height,
                        D = t.extend({}, y),
                        P = e(C.my, u.outerWidth(), u.outerHeight());
                    "right" === s.my[0] ? D.left -= h : "center" === s.my[0] && (D.left -= h / 2), "bottom" === s.my[1] ? D.top -= d : "center" === s.my[1] && (D.top -= d / 2), D.left += P[0], D.top += P[1], o() || (D.left = l(D.left), D.top = l(D.top)), n = {
                        marginLeft: f,
                        marginTop: b
                    }, t.each(["left", "top"], function(e, i) {
                        t.ui.position[k[e]] && t.ui.position[k[e]][i](D, {
                            targetWidth: m,
                            targetHeight: g,
                            elemWidth: h,
                            elemHeight: d,
                            collisionPosition: n,
                            collisionWidth: T,
                            collisionHeight: S,
                            offset: [p[0] + P[0], p[1] + P[1]],
                            my: s.my,
                            at: s.at,
                            within: w,
                            elem: u
                        })
                    }), s.using && (c = function(t) {
                        var e = v.left - D.left,
                            i = e + m - h,
                            n = v.top - D.top,
                            o = n + g - d,
                            l = {
                                target: {
                                    element: _,
                                    left: v.left,
                                    top: v.top,
                                    width: m,
                                    height: g
                                },
                                element: {
                                    element: u,
                                    left: D.left,
                                    top: D.top,
                                    width: h,
                                    height: d
                                },
                                horizontal: i < 0 ? "left" : e > 0 ? "right" : "center",
                                vertical: o < 0 ? "top" : n > 0 ? "bottom" : "middle"
                            };
                        m < h && r(e + i) < m && (l.horizontal = "center"), g < d && r(n + o) < g && (l.vertical = "middle"), a(r(e), r(i)) > a(r(n), r(o)) ? l.important = "horizontal" : l.important = "vertical", s.using.call(this, t, l)
                    }), u.offset(t.extend(D, {
                        using: c
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            o = n.width,
                            r = t.left - e.collisionPosition.marginLeft,
                            l = s - r,
                            c = r + e.collisionWidth - o - s;
                        e.collisionWidth > o ? l > 0 && c <= 0 ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : c > 0 && l <= 0 ? t.left = s : l > c ? t.left = s + o - e.collisionWidth : t.left = s : l > 0 ? t.left += l : c > 0 ? t.left -= c : t.left = a(t.left - r, t.left)
                    },
                    top: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            o = e.within.height,
                            r = t.top - e.collisionPosition.marginTop,
                            l = s - r,
                            c = r + e.collisionHeight - o - s;
                        e.collisionHeight > o ? l > 0 && c <= 0 ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : c > 0 && l <= 0 ? t.top = s : l > c ? t.top = s + o - e.collisionHeight : t.top = s : l > 0 ? t.top += l : c > 0 ? t.top -= c : t.top = a(t.top - r, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, n, s = e.within,
                            o = s.offset.left + s.scrollLeft,
                            a = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            c = t.left - e.collisionPosition.marginLeft,
                            u = c - l,
                            h = c + e.collisionWidth - a - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        u < 0 ? (i = t.left + d + p + f + e.collisionWidth - a - o, (i < 0 || i < r(u)) && (t.left += d + p + f)) : h > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || r(n) < h) && (t.left += d + p + f))
                    },
                    top: function(t, e) {
                        var i, n, s = e.within,
                            o = s.offset.top + s.scrollTop,
                            a = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            c = t.top - e.collisionPosition.marginTop,
                            u = c - l,
                            h = c + e.collisionHeight - a - l,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            m = -2 * e.offset[1];
                        u < 0 ? (n = t.top + p + f + m + e.collisionHeight - a - o, (n < 0 || n < r(u)) && (t.top += p + f + m)) : h > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, (i > 0 || r(i) < h) && (t.top += p + f + m))
                    }
                },
                flipfit: {
                    left: function() {
                        t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                    }
                }
            }
        }();
        var u = (t.ui.position, t.extend(t.expr[":"], {
                data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                    return function(i) {
                        return !!t.data(i, e)
                    }
                }) : function(e, i, n) {
                    return !!t.data(e, n[3])
                }
            }), t.fn.extend({
                disableSelection: function() {
                    var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function() {
                        return this.on(t + ".ui-disableSelection", function(t) {
                            t.preventDefault()
                        })
                    }
                }(),
                enableSelection: function() {
                    return this.off(".ui-disableSelection")
                }
            }), "ui-effects-"),
            h = "ui-effects-style",
            d = "ui-effects-animated",
            p = t;
        t.effects = {
            effect: {}
        },
            function(t, e) {
                function i(t, e, i) {
                    var n = h[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
                }

                function n(e) {
                    var i = c(),
                        n = i._rgba = [];
                    return e = e.toLowerCase(), f(l, function(t, s) {
                        var o, a = s.re.exec(e),
                            r = a && s.parse(a),
                            l = s.space || "rgba";
                        if (r) return o = i[l](r), i[u[l].cache] = o[u[l].cache], n = i._rgba = o._rgba, !1
                    }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
                }

                function s(t, e, i) {
                    return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    c = t.Color = function(e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s)
                    },
                    u = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    h = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    d = c.support = {},
                    p = t("<p>")[0],
                    f = t.each;
                p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), c.fn = t.extend(c.prototype, {
                    parse: function(s, a, r, l) {
                        if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
                        var h = this,
                            d = t.type(s),
                            p = this._rgba = [];
                        return a !== e && (s = [s, a, r, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(u.rgba.props, function(t, e) {
                            p[e.idx] = i(s[e.idx], e)
                        }), this) : "object" === d ? (s instanceof c ? f(u, function(t, e) {
                            s[e.cache] && (h[e.cache] = s[e.cache].slice())
                        }) : f(u, function(e, n) {
                            var o = n.cache;
                            f(n.props, function(t, e) {
                                if (!h[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    h[o] = n.to(h._rgba)
                                }
                                h[o][e.idx] = i(s[t], e, !0)
                            }), h[o] && t.inArray(null, h[o].slice(0, 3)) < 0 && (h[o][3] = 1, n.from && (h._rgba = n.from(h[o])))
                        }), this) : void 0
                    },
                    is: function(t) {
                        var e = c(t),
                            i = !0,
                            n = this;
                        return f(u, function(t, s) {
                            var o, a = e[s.cache];
                            return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function(t, e) {
                                if (null != a[e.idx]) return i = a[e.idx] === o[e.idx]
                            })), i
                        }), i
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return f(u, function(i, n) {
                            e[n.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var n = c(t),
                            s = n._space(),
                            o = u[s],
                            a = 0 === this.alpha() ? c("transparent") : this,
                            r = a[o.cache] || o.to(a._rgba),
                            l = r.slice();
                        return n = n[o.cache], f(o.props, function(t, s) {
                            var o = s.idx,
                                a = r[o],
                                c = n[o],
                                u = h[s.type] || {};
                            null !== c && (null === a ? l[o] = c : (u.mod && (c - a > u.mod / 2 ? a += u.mod : a - c > u.mod / 2 && (a -= u.mod)), l[o] = i((c - a) * e + a, s)))
                        }), this[s](l)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = c(e)._rgba;
                        return c(t.map(i, function(t, e) {
                            return (1 - n) * s[e] + n * t
                        }))
                    },
                    toRgbaString: function() {
                        var e = "rgba(",
                            i = t.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                    },
                    toHslaString: function() {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                    },
                    toHexString: function(e) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), c.fn.parse.prototype = c.fn, u.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        a = t[3],
                        r = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        c = r - l,
                        u = r + l,
                        h = .5 * u;
                    return e = l === r ? 0 : n === r ? 60 * (s - o) / c + 360 : s === r ? 60 * (o - n) / c + 120 : 60 * (n - s) / c + 240, i = 0 === c ? 0 : h <= .5 ? c / u : c / (2 - u), [Math.round(e) % 360, i, h, null == a ? 1 : a]
                }, u.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        a = n <= .5 ? n * (1 + i) : n + i - n * i,
                        r = 2 * n - a;
                    return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
                }, f(u, function(n, s) {
                    var o = s.props,
                        a = s.cache,
                        l = s.to,
                        u = s.from;
                    c.fn[n] = function(n) {
                        if (l && !this[a] && (this[a] = l(this._rgba)), n === e) return this[a].slice();
                        var s, r = t.type(n),
                            h = "array" === r || "object" === r ? n : arguments,
                            d = this[a].slice();
                        return f(o, function(t, e) {
                            var n = h["object" === r ? t : e.idx];
                            null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                        }), u ? (s = c(u(d)), s[a] = d, s) : c(d)
                    }, f(o, function(e, i) {
                        c.fn[e] || (c.fn[e] = function(s) {
                            var o, a = t.type(s),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                c = this[l](),
                                u = c[i.idx];
                            return "undefined" === a ? u : ("function" === a && (s = s.call(this, u), a = t.type(s)), null == s && i.empty ? this : ("string" === a && (o = r.exec(s), o && (s = u + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), c[i.idx] = s, this[l](c)))
                        })
                    })
                }), c.hook = function(e) {
                    var i = e.split(" ");
                    f(i, function(e, i) {
                        t.cssHooks[i] = {
                            set: function(e, s) {
                                var o, a, r = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = c(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                        for (a = "backgroundColor" === i ? e.parentNode : e;
                                             ("" === r || "transparent" === r) && a && a.style;) try {
                                            r = t.css(a, "backgroundColor"), a = a.parentNode
                                        } catch (l) {}
                                        s = s.blend(r && "transparent" !== r ? r : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    e.style[i] = s
                                } catch (l) {}
                            }
                        }, t.fx.step[i] = function(e) {
                            e.colorInit || (e.start = c(e.elem, i), e.end = c(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, c.hook(a), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                            e["border" + n + "Color"] = t
                        }), e
                    }
                }, o = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(p),
            function() {
                function e(e) {
                    var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (s && s.length && s[0] && s[s[0]])
                        for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                    else
                        for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                    return o
                }

                function i(e, i) {
                    var n, o, a = {};
                    for (n in i) o = i[n], e[n] !== o && (s[n] || !t.fx.step[n] && isNaN(parseFloat(o)) || (a[n] = o));
                    return a
                }
                var n = ["add", "remove", "toggle"],
                    s = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                    t.fx.step[i] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function(s, o, a, r) {
                    var l = t.speed(o, a, r);
                    return this.queue(function() {
                        var o, a = t(this),
                            r = a.attr("class") || "",
                            c = l.children ? a.find("*").addBack() : a;
                        c = c.map(function() {
                            var i = t(this);
                            return {
                                el: i,
                                start: e(this)
                            }
                        }), o = function() {
                            t.each(n, function(t, e) {
                                s[e] && a[e + "Class"](s[e])
                            })
                        }, o(), c = c.map(function() {
                            return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                        }), a.attr("class", r), c = c.map(function() {
                            var e = this,
                                i = t.Deferred(),
                                n = t.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, n), i.promise()
                        }), t.when.apply(t, c.get()).done(function() {
                            o(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: function(e) {
                        return function(i, n, s, o) {
                            return n ? t.effects.animateClass.call(this, {
                                add: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function(e) {
                        return function(i, n, s, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function(e) {
                        return function(i, n, s, o, a) {
                            return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                                add: i
                            } : {
                                remove: i
                            }, s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: i
                            }, n, s, o)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function(e, i, n, s, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, n, s, o)
                    }
                })
            }(),
            function() {
                function e(e, i, n, s) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
                }

                function i(e) {
                    return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
                }

                function n(t, e) {
                    var i = e.outerWidth(),
                        n = e.outerHeight(),
                        s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                        o = s.exec(t) || ["", 0, i, n, 0];
                    return {
                        top: parseFloat(o[1]) || 0,
                        right: "auto" === o[2] ? i : parseFloat(o[2]),
                        bottom: "auto" === o[3] ? n : parseFloat(o[3]),
                        left: parseFloat(o[4]) || 0
                    }
                }
                t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
                    return function(i) {
                        return !!t(i).data(d) || e(i)
                    }
                }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
                    save: function(t, e) {
                        for (var i = 0, n = e.length; i < n; i++) null !== e[i] && t.data(u + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, e) {
                        for (var i, n = 0, s = e.length; n < s; n++) null !== e[n] && (i = t.data(u + e[n]), t.css(e[n], i))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                "float": e.css("float")
                            },
                            n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            s = {
                                width: e.width(),
                                height: e.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (a) {
                            o = document.body
                        }
                        return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                            i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(s), n.css(i).show()
                    },
                    removeWrapper: function(e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
                    }
                }), t.extend(t.effects, {
                    version: "1.12.0",
                    define: function(e, i, n) {
                        return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n
                    },
                    scaledDimensions: function(t, e, i) {
                        if (0 === e) return {
                            height: 0,
                            width: 0,
                            outerHeight: 0,
                            outerWidth: 0
                        };
                        var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                            s = "vertical" !== i ? (e || 100) / 100 : 1;
                        return {
                            height: t.height() * s,
                            width: t.width() * n,
                            outerHeight: t.outerHeight() * s,
                            outerWidth: t.outerWidth() * n
                        }
                    },
                    clipToBox: function(t) {
                        return {
                            width: t.clip.right - t.clip.left,
                            height: t.clip.bottom - t.clip.top,
                            left: t.clip.left,
                            top: t.clip.top
                        }
                    },
                    unshift: function(t, e, i) {
                        var n = t.queue();
                        e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                    },
                    saveStyle: function(t) {
                        t.data(h, t[0].style.cssText)
                    },
                    restoreStyle: function(t) {
                        t[0].style.cssText = t.data(h) || "", t.removeData(h)
                    },
                    mode: function(t, e) {
                        var i = t.is(":hidden");
                        return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
                    },
                    getBaseline: function(t, e) {
                        var i, n;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createPlaceholder: function(e) {
                        var i, n = e.css("position"),
                            s = e.position();
                        return e.css({
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                            display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                            visibility: "hidden",
                            marginTop: e.css("marginTop"),
                            marginBottom: e.css("marginBottom"),
                            marginLeft: e.css("marginLeft"),
                            marginRight: e.css("marginRight"),
                            "float": e.css("float")
                        }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(u + "placeholder", i)), e.css({
                            position: n,
                            left: s.left,
                            top: s.top
                        }), i
                    },
                    removePlaceholder: function(t) {
                        var e = u + "placeholder",
                            i = t.data(e);
                        i && (i.remove(), t.removeData(e))
                    },
                    cleanUp: function(e) {
                        t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
                    },
                    setTransition: function(e, i, n, s) {
                        return s = s || {}, t.each(i, function(t, i) {
                            var o = e.cssUnit(i);
                            o[0] > 0 && (s[i] = o[0] * n + o[1])
                        }), s
                    }
                }), t.fn.extend({
                    effect: function() {
                        function i(e) {
                            function i() {
                                r.removeData(d), t.effects.cleanUp(r), "hide" === n.mode && r.hide(), a()
                            }

                            function a() {
                                t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e()
                            }
                            var r = t(this);
                            n.mode = u.shift(), t.uiBackCompat === !1 || o ? "none" === n.mode ? (r[c](), a()) : s.call(r[0], n, i) : (r.is(":hidden") ? "hide" === c : "show" === c) ? (r[c](), a()) : s.call(r[0], n, a)
                        }
                        var n = e.apply(this, arguments),
                            s = t.effects.effect[n.effect],
                            o = s.mode,
                            a = n.queue,
                            r = a || "fx",
                            l = n.complete,
                            c = n.mode,
                            u = [],
                            h = function(e) {
                                var i = t(this),
                                    n = t.effects.mode(i, c) || o;
                                i.data(d, !0), u.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                            };
                        return t.fx.off || !s ? c ? this[c](n.duration, l) : this.each(function() {
                            l && l.call(this)
                        }) : a === !1 ? this.each(h).each(i) : this.queue(r, h).queue(r, i)
                    },
                    show: function(t) {
                        return function(n) {
                            if (i(n)) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }
                    }(t.fn.show),
                    hide: function(t) {
                        return function(n) {
                            if (i(n)) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }
                    }(t.fn.hide),
                    toggle: function(t) {
                        return function(n) {
                            if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                            var s = e.apply(this, arguments);
                            return s.mode = "toggle", this.effect.call(this, s)
                        }
                    }(t.fn.toggle),
                    cssUnit: function(e) {
                        var i = this.css(e),
                            n = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                        }), n
                    },
                    cssClip: function(t) {
                        return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this)
                    },
                    transfer: function(e, i) {
                        var n = t(this),
                            s = t(e.to),
                            o = "fixed" === s.css("position"),
                            a = t("body"),
                            r = o ? a.scrollTop() : 0,
                            l = o ? a.scrollLeft() : 0,
                            c = s.offset(),
                            u = {
                                top: c.top - r,
                                left: c.left - l,
                                height: s.innerHeight(),
                                width: s.innerWidth()
                            },
                            h = n.offset(),
                            d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                                top: h.top - r,
                                left: h.left - l,
                                height: n.innerHeight(),
                                width: n.innerWidth(),
                                position: o ? "fixed" : "absolute"
                            }).animate(u, e.duration, e.easing, function() {
                                d.remove(), t.isFunction(i) && i()
                            })
                    }
                }), t.fx.step.clip = function(e) {
                    e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                        top: e.pos * (e.end.top - e.start.top) + e.start.top,
                        right: e.pos * (e.end.right - e.start.right) + e.start.right,
                        bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                        left: e.pos * (e.end.left - e.start.left) + e.start.left
                    })
                }
            }(),
            function() {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                    e[i] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function(e, i) {
                    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                        return 1 - i(1 - t)
                    }, t.easing["easeInOut" + e] = function(t) {
                        return t < .5 ? i(2 * t) / 2 : 1 - i(t * -2 + 2) / 2
                    }
                })
            }();
        var f, f = t.effects;
        t.effects.define("blind", "hide", function(e, i) {
            var n = {
                    up: ["bottom", "top"],
                    vertical: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    horizontal: ["right", "left"],
                    right: ["left", "right"]
                },
                s = t(this),
                o = e.direction || "up",
                a = s.cssClip(),
                r = {
                    clip: t.extend({}, a)
                },
                l = t.effects.createPlaceholder(s);
            r.clip[n[o][0]] = r.clip[n[o][1]], "show" === e.mode && (s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), s.animate(r, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("bounce", function(e, i) {
            var n, s, o, a = t(this),
                r = e.mode,
                l = "hide" === r,
                c = "show" === r,
                u = e.direction || "up",
                h = e.distance,
                d = e.times || 5,
                p = 2 * d + (c || l ? 1 : 0),
                f = e.duration / p,
                m = e.easing,
                g = "up" === u || "down" === u ? "top" : "left",
                v = "up" === u || "left" === u,
                y = 0,
                b = a.queue().length;
            for (t.effects.createPlaceholder(a), o = a.css(g), h || (h = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), c && (s = {
                opacity: 1
            }, s[g] = o, a.css("opacity", 0).css(g, v ? 2 * -h : 2 * h).animate(s, f, m)), l && (h /= Math.pow(2, d - 1)), s = {}, s[g] = o; y < d; y++) n = {}, n[g] = (v ? "-=" : "+=") + h, a.animate(n, f, m).animate(s, f, m), h = l ? 2 * h : h / 2;
            l && (n = {
                opacity: 0
            }, n[g] = (v ? "-=" : "+=") + h, a.animate(n, f, m)), a.queue(i), t.effects.unshift(a, b, p + 1)
        }), t.effects.define("clip", "hide", function(e, i) {
            var n, s = {},
                o = t(this),
                a = e.direction || "vertical",
                r = "both" === a,
                l = r || "horizontal" === a,
                c = r || "vertical" === a;
            n = o.cssClip(), s.clip = {
                top: c ? (n.bottom - n.top) / 2 : n.top,
                right: l ? (n.right - n.left) / 2 : n.right,
                bottom: c ? (n.bottom - n.top) / 2 : n.bottom,
                left: l ? (n.right - n.left) / 2 : n.left
            }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("drop", "hide", function(e, i) {
            var n, s = t(this),
                o = e.mode,
                a = "show" === o,
                r = e.direction || "left",
                l = "up" === r || "down" === r ? "top" : "left",
                c = "up" === r || "left" === r ? "-=" : "+=",
                u = "+=" === c ? "-=" : "+=",
                h = {
                    opacity: 0
                };
            t.effects.createPlaceholder(s), n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, h[l] = c + n, a && (s.css(h), h[l] = u + n, h.opacity = 1), s.animate(h, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("explode", "hide", function(e, i) {
            function n() {
                b.push(this), b.length === h * d && s()
            }

            function s() {
                p.css({
                    visibility: "visible"
                }), t(b).remove(), i()
            }
            var o, a, r, l, c, u, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = h,
                p = t(this),
                f = e.mode,
                m = "show" === f,
                g = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / d),
                y = Math.ceil(p.outerHeight() / h),
                b = [];
            for (o = 0; o < h; o++)
                for (l = g.top + o * y, u = o - (h - 1) / 2, a = 0; a < d; a++) r = g.left + a * v, c = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * v,
                    top: -o * y
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: y,
                    left: r + (m ? c * v : 0),
                    top: l + (m ? u * y : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : c * v),
                    top: l + (m ? 0 : u * y),
                    opacity: m ? 1 : 0
                }, e.duration || 500, e.easing, n)
        }), t.effects.define("fade", "toggle", function(e, i) {
            var n = "show" === e.mode;
            t(this).css("opacity", n ? 0 : 1).animate({
                opacity: n ? 1 : 0
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("fold", "hide", function(e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                a = "hide" === s,
                r = e.size || 15,
                l = /([0-9]+)%/.exec(r),
                c = !!e.horizFirst,
                u = c ? ["right", "bottom"] : ["bottom", "right"],
                h = e.duration / 2,
                d = t.effects.createPlaceholder(n),
                p = n.cssClip(),
                f = {
                    clip: t.extend({}, p)
                },
                m = {
                    clip: t.extend({}, p)
                },
                g = [p[u[0]], p[u[1]]],
                v = n.queue().length;
            l && (r = parseInt(l[1], 10) / 100 * g[a ? 0 : 1]), f.clip[u[0]] = r, m.clip[u[0]] = r, m.clip[u[1]] = 0, o && (n.cssClip(m.clip), d && d.css(t.effects.clipToBox(m)), m.clip = p), n.queue(function(i) {
                d && d.animate(t.effects.clipToBox(f), h, e.easing).animate(t.effects.clipToBox(m), h, e.easing), i()
            }).animate(f, h, e.easing).animate(m, h, e.easing).queue(i), t.effects.unshift(n, v, 4)
        }), t.effects.define("highlight", "show", function(e, i) {
            var n = t(this),
                s = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(s, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("size", function(e, i) {
            var n, s, o, a = t(this),
                r = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                u = e.mode,
                h = "effect" !== u,
                d = e.scale || "both",
                p = e.origin || ["middle", "center"],
                f = a.css("position"),
                m = a.position(),
                g = t.effects.scaledDimensions(a),
                v = e.from || g,
                y = e.to || t.effects.scaledDimensions(a, 0);
            t.effects.createPlaceholder(a), "show" === u && (o = v, v = y, y = o), s = {
                from: {
                    y: v.height / g.height,
                    x: v.width / g.width
                },
                to: {
                    y: y.height / g.height,
                    x: y.width / g.width
                }
            }, "box" !== d && "both" !== d || (s.from.y !== s.to.y && (v = t.effects.setTransition(a, l, s.from.y, v), y = t.effects.setTransition(a, l, s.to.y, y)), s.from.x !== s.to.x && (v = t.effects.setTransition(a, c, s.from.x, v), y = t.effects.setTransition(a, c, s.to.x, y))), "content" !== d && "both" !== d || s.from.y !== s.to.y && (v = t.effects.setTransition(a, r, s.from.y, v), y = t.effects.setTransition(a, r, s.to.y, y)), p && (n = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, y.top = (g.outerHeight - y.outerHeight) * n.y + m.top, y.left = (g.outerWidth - y.outerWidth) * n.x + m.left), a.css(v), "content" !== d && "both" !== d || (l = l.concat(["marginTop", "marginBottom"]).concat(r), c = c.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
                var i = t(this),
                    n = t.effects.scaledDimensions(i),
                    o = {
                        height: n.height * s.from.y,
                        width: n.width * s.from.x,
                        outerHeight: n.outerHeight * s.from.y,
                        outerWidth: n.outerWidth * s.from.x
                    },
                    a = {
                        height: n.height * s.to.y,
                        width: n.width * s.to.x,
                        outerHeight: n.height * s.to.y,
                        outerWidth: n.width * s.to.x
                    };
                s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), a = t.effects.setTransition(i, l, s.to.y, a)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, c, s.from.x, o), a = t.effects.setTransition(i, c, s.to.x, a)), h && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
                    h && t.effects.restoreStyle(i)
                })
            })), a.animate(y, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    var e = a.offset();
                    0 === y.opacity && a.css("opacity", v.opacity), h || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
                }
            })
        }), t.effects.define("scale", function(e, i) {
            var n = t(this),
                s = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
                a = t.extend(!0, {
                    from: t.effects.scaledDimensions(n),
                    to: t.effects.scaledDimensions(n, o, e.direction || "both"),
                    origin: e.origin || ["middle", "center"]
                }, e);
            e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
        }), t.effects.define("puff", "hide", function(e, i) {
            var n = t.extend(!0, {}, e, {
                fade: !0,
                percent: parseInt(e.percent, 10) || 150
            });
            t.effects.effect.scale.call(this, n, i)
        }), t.effects.define("pulsate", "show", function(e, i) {
            var n = t(this),
                s = e.mode,
                o = "show" === s,
                a = "hide" === s,
                r = o || a,
                l = 2 * (e.times || 5) + (r ? 1 : 0),
                c = e.duration / l,
                u = 0,
                h = 1,
                d = n.queue().length;
            for (!o && n.is(":visible") || (n.css("opacity", 0).show(), u = 1); h < l; h++) n.animate({
                opacity: u
            }, c, e.easing), u = 1 - u;
            n.animate({
                opacity: u
            }, c, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1)
        }), t.effects.define("shake", function(e, i) {
            var n = 1,
                s = t(this),
                o = e.direction || "left",
                a = e.distance || 20,
                r = e.times || 3,
                l = 2 * r + 1,
                c = Math.round(e.duration / l),
                u = "up" === o || "down" === o ? "top" : "left",
                h = "up" === o || "left" === o,
                d = {},
                p = {},
                f = {},
                m = s.queue().length;
            for (t.effects.createPlaceholder(s), d[u] = (h ? "-=" : "+=") + a, p[u] = (h ? "+=" : "-=") + 2 * a, f[u] = (h ? "-=" : "+=") + 2 * a, s.animate(d, c, e.easing); n < r; n++) s.animate(p, c, e.easing).animate(f, c, e.easing);
            s.animate(p, c, e.easing).animate(d, c / 2, e.easing).queue(i), t.effects.unshift(s, m, l + 1)
        }), t.effects.define("slide", "show", function(e, i) {
            var n, s, o = t(this),
                a = {
                    up: ["bottom", "top"],
                    down: ["top", "bottom"],
                    left: ["right", "left"],
                    right: ["left", "right"]
                },
                r = e.mode,
                l = e.direction || "left",
                c = "up" === l || "down" === l ? "top" : "left",
                u = "up" === l || "left" === l,
                h = e.distance || o["top" === c ? "outerHeight" : "outerWidth"](!0),
                d = {};
            t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[c], d[c] = (u ? -1 : 1) * h + s, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(c, d[c]), d.clip = n, d[c] = s), o.animate(d, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        });
        t.uiBackCompat !== !1 && (f = t.effects.define("transfer", function(e, i) {
            t(this).transfer(e, i)
        }));
        t.ui.focusable = function(i, n) {
            var s, o, a, r, l, c = i.nodeName.toLowerCase();
            return "area" === c ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(c) ? (r = !i.disabled, r && (l = t(i).closest("fieldset")[0], l && (r = !l.disabled))) : r = "a" === c ? i.href || n : n, r && t(i).is(":visible") && e(t(i)))
        }, t.extend(t.expr[":"], {
            focusable: function(e) {
                return t.ui.focusable(e, null != t.attr(e, "tabindex"))
            }
        });
        t.ui.focusable, t.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
        }, t.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = t(this);
                setTimeout(function() {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function() {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        };
        "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
            function n(e, i, n, o) {
                return t.each(s, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(o, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, s) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(o, n(this, e, !0, s) + "px")
                })
            }
        }), t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        });
        t.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }, t.ui.escapeSelector = function() {
            var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
            return function(e) {
                return e.replace(t, "\\$1")
            }
        }(), t.fn.labels = function() {
            var e, i, n, s, o;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
        }, t.fn.scrollParent = function(e) {
            var i = this.css("position"),
                n = "absolute" === i,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() {
                    var e = t(this);
                    return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }, t.extend(t.expr[":"], {
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    n = null != i;
                return (!n || i >= 0) && t.ui.focusable(e, n)
            }
        }), t.fn.extend({
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.widget("ui.accordion", {
            version: "1.12.0",
            options: {
                active: 0,
                animate: {},
                classes: {
                    "ui-accordion-header": "ui-corner-top",
                    "ui-accordion-header-collapsed": "ui-corner-all",
                    "ui-accordion-content": "ui-corner-bottom"
                },
                collapsible: !1,
                event: "click",
                header: "> li > :first-child, > :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function() {
                var e, i, n = this.options.icons;
                n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons())))
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
            },
            _keydown: function(e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[n - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
                }
            },
            _panelKeyDown: function(e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
            },
            refresh: function() {
                var e = this.options;
                this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function() {
                var e, i = this.options,
                    n = i.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                    var e = t(this),
                        i = e.uniqueId().attr("id"),
                        n = e.next(),
                        s = n.uniqueId().attr("id");
                    e.attr("aria-controls", s), n.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
                    var i = t(this),
                        n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                }), this.headers.each(function() {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                    var i = t(this).is(":visible");
                    i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
                }).height(e))
            },
            _activate: function(e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function(e) {
                var i = {
                    keydown: "_keydown"
                };
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(e) {
                var i, n, s = this.options,
                    o = this.active,
                    a = t(e.currentTarget),
                    r = a[0] === o[0],
                    l = r && s.collapsible,
                    c = l ? t() : a.next(),
                    u = o.next(),
                    h = {
                        oldHeader: o,
                        oldPanel: u,
                        newHeader: l ? t() : a,
                        newPanel: c
                    };
                e.preventDefault(), r && !s.collapsible || this._trigger("beforeActivate", e, h) === !1 || (s.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(h), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
            },
            _toggle: function(e) {
                var i = e.newPanel,
                    n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                    "aria-hidden": "true"
                }), n.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), i.length && n.length ? n.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function() {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function(t, e, i) {
                var n, s, o, a = this,
                    r = 0,
                    l = t.css("box-sizing"),
                    c = t.length && (!e.length || t.index() < e.index()),
                    u = this.options.animate || {},
                    h = c && u.down || u,
                    d = function() {
                        a._toggleComplete(i)
                    };
                return "number" == typeof h && (o = h), "string" == typeof h && (s = h), s = s || h.easing || u.easing, o = o || h.duration || u.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function(t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), r = 0)
                    }
                })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel,
                    i = e.prev();
                this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), t.ui.safeActiveElement = function(t) {
            var e;
            try {
                e = t.activeElement
            } catch (i) {
                e = t.body
            }
            return e || (e = t.body), e.nodeName || (e = t.body), e
        }, t.widget("ui.menu", {
            version: "1.12.0",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function(e) {
                        var i = t(e.target),
                            n = t(t.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        if (!this.previousFilter) {
                            var i = t(e.target).closest(".ui-menu-item"),
                                n = t(e.currentTarget);
                            i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function(e) {
                        this._delay(function() {
                            var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                            i && this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                    i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
                    var e = t(this);
                    e.data("ui-menu-submenu-caret") && e.remove()
                })
            },
            _keydown: function(e) {
                var i, n, s, o, a = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        a = !1, n = this.previousFilter || "", s = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                a && e.preventDefault()
            },
            _activate: function(t) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var e, i, n, s, o, a = this,
                    r = this.options.icons.submenu,
                    l = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var e = t(this),
                        i = e.prev(),
                        n = t("<span>").data("ui-menu-submenu-caret", !0);
                    a._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                    var e = t(this);
                    a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
                }), s = i.not(".ui-menu-item, .ui-menu-divider"), o = s.children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.element.find(".ui-menu-icon");
                    this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
                }
                this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            focus: function(t, e) {
                var i, n, s;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(e) {
                var i, n, s, o, a, r;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), s < 0 ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function(e) {
                var i = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function(t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
            },
            nextPage: function(e) {
                var i, n, s;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return i = t(this), i.offset().top - n - s < 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function(e) {
                var i, n, s;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return i = t(this), i.offset().top - n + s > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            },
            _filterMenuItems: function(e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    n = new RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        });
        t.widget("ui.autocomplete", {
            version: "1.12.0",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    a = "input" === s;
                this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(s) {
                        if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                        e = !1, n = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", s);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", s);
                                break;
                            case o.ENTER:
                                this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function(n) {
                        if (e) return e = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case s.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function(t) {
                        return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(e, i) {
                        var n, s;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            t(e.target).trigger(e.originalEvent)
                        })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                            item: s
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                    },
                    menuselect: function(e, i) {
                        var n = i.item.data("ui-autocomplete-item"),
                            s = this.previous;
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                            this.previous = s, this.selectedItem = n
                        })), !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = t("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(e) {
                var i = this.menu.element[0];
                return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
            },
            _closeOnClickOutside: function(t) {
                this._isEventTargetInWidget(t) || this.close()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _initSource: function() {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                    n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function(t) {
                            s(t)
                        },
                        error: function() {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    e && (!e || i || n) || (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var e = ++this.requestIndex;
                return t.proxy(function(t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function(t) {
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function(e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(e, i) {
                var n = this;
                t.each(i, function(t, i) {
                    n._renderItemData(e, i)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(e, i) {
                return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
            },
            _move: function(t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
            },
            _isContentEditable: function(t) {
                if (!t.length) return !1;
                var e = t.prop("contentEditable");
                return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, i) {
                var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function(t) {
                    return n.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(e) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
            }
        });
        var m = (t.ui.autocomplete, /ui-corner-([a-z]){2,6}/g);
        t.widget("ui.controlgroup", {
            version: "1.12.0",
            defaultElement: "<div>",
            options: {
                direction: "horizontal",
                disabled: null,
                onlyVisible: !0,
                items: {
                    button: "input[type=button], input[type=submit], input[type=reset], button, a",
                    controlgroupLabel: ".ui-controlgroup-label",
                    checkboxradio: "input[type='checkbox'], input[type='radio']",
                    selectmenu: "select",
                    spinner: ".ui-spinner-input"
                }
            },
            _create: function() {
                this._enhance()
            },
            _enhance: function() {
                this.element.attr("role", "toolbar"), this.refresh()
            },
            _destroy: function() {
                this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            },
            _initWidgets: function() {
                var e = this,
                    i = [];
                t.each(this.options.items, function(n, s) {
                    var o, a = {};
                    if (s) return "controlgroupLabel" === n ? (o = e.element.find(s), o.each(function() {
                        var e = t(this);
                        e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (e["_" + n + "Options"] && (a = e["_" + n + "Options"]("middle")), e.element.find(s).each(function() {
                        var s = t(this),
                            o = s[n]("instance"),
                            r = t.widget.extend({}, a);
                        if ("button" !== n || !s.parent(".ui-spinner").length) {
                            o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), s[n](r);
                            var l = s[n]("widget");
                            t.data(l[0], "ui-controlgroup-data", o ? o : s[n]("instance")), i.push(l[0])
                        }
                    })))
                }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
            },
            _callChildMethod: function(e) {
                this.childWidgets.each(function() {
                    var i = t(this),
                        n = i.data("ui-controlgroup-data");
                    n && n[e] && n[e]()
                })
            },
            _updateCornerClass: function(t, e) {
                var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",
                    n = this._buildSimpleOptions(e, "label").classes.label;
                this._removeClass(t, null, i), this._addClass(t, null, n)
            },
            _buildSimpleOptions: function(t, e) {
                var i = "vertical" === this.options.direction,
                    n = {
                        classes: {}
                    };
                return n.classes[e] = {
                    middle: "",
                    first: "ui-corner-" + (i ? "top" : "left"),
                    last: "ui-corner-" + (i ? "bottom" : "right"),
                    only: "ui-corner-all"
                }[t], n
            },
            _spinnerOptions: function(t) {
                var e = this._buildSimpleOptions(t, "ui-spinner");
                return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
            },
            _buttonOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-button")
            },
            _checkboxradioOptions: function(t) {
                return this._buildSimpleOptions(t, "ui-checkboxradio-label")
            },
            _selectmenuOptions: function(t) {
                var e = "vertical" === this.options.direction;
                return {
                    width: !!e && "auto",
                    classes: {
                        middle: {
                            "ui-selectmenu-button-open": "",
                            "ui-selectmenu-button-closed": ""
                        },
                        first: {
                            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                        },
                        last: {
                            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                        },
                        only: {
                            "ui-selectmenu-button-open": "ui-corner-top",
                            "ui-selectmenu-button-closed": "ui-corner-all"
                        }
                    }[t]
                }
            },
            _resolveClassesValues: function(e, i) {
                var n = {};
                return t.each(e, function(t) {
                    var s = i.options.classes[t] || "";
                    s = s.replace(m, "").trim(), n[t] = (s + " " + e[t]).replace(/\s+/g, " ")
                }), n
            },
            _setOption: function(t, e) {
                return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
            },
            refresh: function() {
                var e, i = this;
                this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, n) {
                    var s = e[n]().data("ui-controlgroup-data");
                    if (s && i["_" + s.widgetName + "Options"]) {
                        var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                        o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                    } else i._updateCornerClass(e[n](), n)
                }), this._callChildMethod("refresh"))
            }
        });
        t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
            version: "1.12.0",
            options: {
                disabled: null,
                label: null,
                icon: !0,
                classes: {
                    "ui-checkboxradio-label": "ui-corner-all",
                    "ui-checkboxradio-icon": "ui-corner-all"
                }
            },
            _getCreateOptions: function() {
                var e, i, n = this,
                    s = this._super() || {};
                return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element).each(function() {
                    n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
                }), this.originalLabel && (s.label = this.originalLabel), e = this.element[0].disabled, null != e && (s.disabled = e), s
            },
            _create: function() {
                var t = this.element[0].checked;
                this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                    change: "_toggleClasses",
                    focus: function() {
                        this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                    },
                    blur: function() {
                        this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                    }
                })
            },
            _readType: function() {
                var e = this.element[0].nodeName.toLowerCase();
                this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
            },
            _enhance: function() {
                this._updateIcon(this.element[0].checked)
            },
            widget: function() {
                return this.label
            },
            _getRadioGroup: function() {
                var e, i = this.element[0].name,
                    n = "input[name='" + t.ui.escapeSelector(i) + "']";
                return i ? (e = this.form.length ? t(this.form[0].elements).filter(n) : t(n).filter(function() {
                    return 0 === t(this).form().length
                }), e.not(this.element)) : t([])
            },
            _toggleClasses: function() {
                var e = this.element[0].checked;
                this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                    var e = t(this).checkboxradio("instance");
                    e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
                })
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
            },
            _setOption: function(t, e) {
                if ("label" !== t || e) return this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()
            },
            _updateIcon: function(e) {
                var i = "ui-icon ui-icon-background ";
                this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            },
            _updateLabel: function() {
                this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(), this.label.append(this.options.label)
            },
            refresh: function() {
                var t = this.element[0].checked,
                    e = this.element[0].disabled;
                this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                    disabled: e
                })
            }
        }]);
        t.ui.checkboxradio;
        t.widget("ui.button", {
            version: "1.12.0",
            defaultElement: "<button>",
            options: {
                classes: {
                    "ui-button": "ui-corner-all"
                },
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function() {
                var t, e = this._super() || {};
                return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
            },
            _create: function() {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function(e) {
                        e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function() {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function() {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function(e, i) {
                var n = "iconPosition" !== e,
                    s = n ? this.options.iconPosition : i,
                    o = "top" === s || "bottom" === s;
                this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
            },
            _destroy: function() {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function(t) {
                this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function(t) {
                this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function(t) {
                var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                    i = void 0 === t.icon ? this.options.icon : t.icon;
                e || i || (t.showLabel = !0), this._super(t)
            },
            _setOption: function(t, e) {
                "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOptions({
                    disabled: t
                }), this._updateTooltip()
            }
        }), t.uiBackCompat !== !1 && (t.widget("ui.button", t.ui.button, {
            options: {
                text: !0,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
            },
            _setOption: function(t, e) {
                return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
            }
        }), t.fn.button = function(e) {
            return function() {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                    icon: !1
                }) : this.checkboxradio.apply(this, arguments))
            }
        }(t.fn.button), t.fn.buttonset = function() {
            return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments))
        });
        t.ui.button;
        t.extend(t.ui, {
            datepicker: {
                version: "1.12.0"
            }
        });
        var g;
        t.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return a(this._defaults, t || {}), this
            },
            _attachDatepicker: function(e, i) {
                var n, s, o;
                n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
            },
            _newInst: function(e, i) {
                var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: n,
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, i) {
                var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, i) {
                var n, s, o, a = this._get(i, "appendText"),
                    r = this._get(i, "isRTL");
                i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), "focus" !== n && "both" !== n || e.on("focus", this._showDatepicker), "button" !== n && "both" !== n || (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20),
                        a = this._get(t, "dateFormat");
                    a.match(/[DM]/) && (e = function(t) {
                        for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, i, n, s, o) {
                var r, l, c, u, h, d = this._dialogInst;
                return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function(e) {
                var i, n = t(e),
                    s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty(), g === s && (g = null))
            },
            _enableDatepicker: function(e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function(e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : "div" !== i && "span" !== i || (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function(e) {
                try {
                    return t.data(e, "datepicker")
                } catch (i) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(e, i, n) {
                var s, o, r, l, c = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : c ? "all" === i ? t.extend({}, c.settings) : this._get(c, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), a(c.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (c.settings.minDate = this._formatDate(c, r)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c))))
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(e) {
                var i, n, s, o = t.datepicker._getInst(e.target),
                    a = !0,
                    r = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), a = !1;
                        break;
                    case 13:
                        return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        a = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
                a && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var i, n, s = t.datepicker._getInst(e.target);
                if (t.datepicker._get(s, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1
            },
            _doKeyUp: function(e) {
                var i, n = t.datepicker._getInst(e.target);
                if (n.input.val() !== n.lastVal) try {
                    i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
                } catch (s) {}
                return !0
            },
            _showDatepicker: function(e) {
                if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                    var n, s, o, r, l, c, u;
                    n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), o = s ? s.apply(e, [e, n]) : {}, o !== !1 && (a(n.settings, o), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                        return r |= "fixed" === t(this).css("position"), !r
                    }), l = {
                        left: t.datepicker._pos[0],
                        top: t.datepicker._pos[1]
                    }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, r), n.dpDiv.css({
                        position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), n.inline || (c = t.datepicker._get(n, "showAnim"), u = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[c] ? n.dpDiv.show(c, t.datepicker._get(n, "showOptions"), u) : n.dpDiv[c || "show"](c ? u : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n))
                }
            },
            _updateDatepicker: function(e) {
                this.maxRows = 4, g = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, n = this._getNumberOfMonths(e),
                    s = n[1],
                    a = 17,
                    r = e.dpDiv.find("." + this._dayOverClass + " a");
                r.length > 0 && o.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", a * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(e, i, n) {
                var s = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    a = e.input ? e.input.outerWidth() : 0,
                    r = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    c = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > c && c > o ? Math.abs(o + r) : 0), i
            },
            _findPos: function(e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
                return i = t(e).offset(), [i.left, i.top]
            },
            _hideDatepicker: function(e) {
                var i, n, s, o, a = this._curInst;
                !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function() {
                    t.datepicker._tidyDialog(a)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                    (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === n) || t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
            },
            _gotoToday: function(e) {
                var i, n = t(e),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
            },
            _selectMonthYear: function(e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
            },
            _selectDay: function(e, i, n, s) {
                var o, a = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function(e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function(e, i) {
                var n, s = t(e),
                    o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var i, n, s, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && e < 6, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(e, i, n) {
                if (null == e || null == i) throw "Invalid arguments";
                if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
                var s, o, a, r, l = 0,
                    c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
                    h = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                    m = -1,
                    g = -1,
                    v = -1,
                    y = -1,
                    b = !1,
                    _ = function(t) {
                        var i = s + 1 < e.length && e.charAt(s + 1) === t;
                        return i && s++, i
                    },
                    w = function(t) {
                        var e = _(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1,
                            o = new RegExp("^\\d{" + s + "," + n + "}"),
                            a = i.substring(l).match(o);
                        if (!a) throw "Missing number at position " + l;
                        return l += a[0].length, parseInt(a[0], 10)
                    },
                    x = function(e, n, s) {
                        var o = -1,
                            a = t.map(_(e) ? s : n, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if (t.each(a, function(t, e) {
                                var n = e[1];
                                if (i.substr(l, n.length).toLowerCase() === n.toLowerCase()) return o = e[0], l += n.length, !1
                            }), o !== -1) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    k = function() {
                        if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (s = 0; s < e.length; s++)
                    if (b) "'" !== e.charAt(s) || _("'") ? k() : b = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            v = w("d");
                            break;
                        case "D":
                            x("D", h, d);
                            break;
                        case "o":
                            y = w("o");
                            break;
                        case "m":
                            g = w("m");
                            break;
                        case "M":
                            g = x("M", p, f);
                            break;
                        case "y":
                            m = w("y");
                            break;
                        case "@":
                            r = new Date(w("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "!":
                            r = new Date((w("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "'":
                            _("'") ? k() : b = !0;
                            break;
                        default:
                            k()
                    }
                if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
                if (m === -1 ? m = (new Date).getFullYear() : m < 100 && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (m <= u ? 0 : -100)), y > -1)
                    for (g = 1, v = y;;) {
                        if (o = this._getDaysInMonth(m, g - 1), v <= o) break;
                        g++, v -= o
                    }
                if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
                return r
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    c = function(t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    u = function(t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    h = "",
                    d = !1;
                if (e)
                    for (n = 0; n < t.length; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? h += t.charAt(n) : d = !1;
                        else switch (t.charAt(n)) {
                            case "d":
                                h += c("d", e.getDate(), 2);
                                break;
                            case "D":
                                h += u("D", e.getDay(), s, o);
                                break;
                            case "o":
                                h += c("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                h += c("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                h += u("M", e.getMonth(), a, r);
                                break;
                            case "y":
                                h += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                                break;
                            case "@":
                                h += e.getTime();
                                break;
                            case "!":
                                h += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? h += "'" : d = !0;
                                break;
                            default:
                                h += t.charAt(n)
                        }
                return h
            },
            _possibleChars: function(t) {
                var e, i = "",
                    n = !1,
                    s = function(i) {
                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                        return n && e++, n
                    };
                for (e = 0; e < t.length; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : n = !0;
                            break;
                        default:
                            i += t.charAt(e)
                    }
                return i
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        a = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, a) || s
                    } catch (r) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(e, i, n) {
                var s = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    o = function(i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                        } catch (n) {}
                        for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), a = s.getMonth(), r = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = l.exec(i); c;) {
                            switch (c[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(c[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(c[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    a += parseInt(c[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                                    break;
                                case "y":
                                case "Y":
                                    o += parseInt(c[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
                            }
                            c = l.exec(i)
                        }
                        return new Date(o, a, r)
                    },
                    a = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
                return a = a && "Invalid Date" === a.toString() ? n : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function(e) {
                var i = this._get(e, "stepMonths"),
                    n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function() {
                    var e = {
                        prev: function() {
                            t.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function() {
                            t.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function() {
                            t.datepicker._hideDatepicker()
                        },
                        today: function() {
                            t.datepicker._gotoToday(n)
                        },
                        selectDay: function() {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function() {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, n, s, o, a, r, l, c, u, h, d, p, f, m, g, v, y, b, _, w, x, k, C, T, S, D, P, I, O, M, A, E, N, H, $, z, W, j, L = new Date,
                    q = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                    F = this._get(t, "isRTL"),
                    R = this._get(t, "showButtonPanel"),
                    B = this._get(t, "hideIfNoPrevNext"),
                    V = this._get(t, "navigationAsDateFormat"),
                    Y = this._getNumberOfMonths(t),
                    X = this._get(t, "showCurrentAtPos"),
                    U = this._get(t, "stepMonths"),
                    Q = 1 !== Y[0] || 1 !== Y[1],
                    K = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    G = this._getMinMaxDate(t, "min"),
                    Z = this._getMinMaxDate(t, "max"),
                    J = t.drawMonth - X,
                    tt = t.drawYear;
                if (J < 0 && (J += 12, tt--), Z)
                    for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - Y[0] * Y[1] + 1, Z.getDate())), e = G && e < G ? G : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) J--, J < 0 && (J = 11, tt--);
                for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = V ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - U, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = V ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + U, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? K : q, a = V ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (F ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (F ? "" : l) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, h = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", x = 0; x < Y[0]; x++) {
                    for (k = "", this.maxRows = 4, C = 0; C < Y[1]; C++) {
                        if (T = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), S = " ui-corner-all", D = "", Q) {
                            if (D += "<div class='ui-datepicker-group", Y[1] > 1) switch (C) {
                                case 0:
                                    D += " ui-datepicker-group-first", S = " ui-corner-" + (F ? "right" : "left");
                                    break;
                                case Y[1] - 1:
                                    D += " ui-datepicker-group-last", S = " ui-corner-" + (F ? "left" : "right");
                                    break;
                                default:
                                    D += " ui-datepicker-group-middle", S = ""
                            }
                            D += "'>"
                        }
                        for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? F ? o : n : "") + (/all|right/.test(S) && 0 === x ? F ? n : o : "") + this._generateMonthYearHeader(t, J, tt, G, Z, x > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = h ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) I = (w + u) % 7, P += "<th scope='col'" + ((w + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[I] + "'>" + p[I] + "</span></th>";
                        for (D += P + "</tr></thead><tbody>", O = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, O)), M = (this._getFirstDayOfMonth(tt, J) - u + 7) % 7, A = Math.ceil((M + O) / 7), E = Q && this.maxRows > A ? this.maxRows : A, this.maxRows = E, N = this._daylightSavingAdjust(new Date(tt, J, 1 - M)), H = 0; H < E; H++) {
                            for (D += "<tr>", $ = h ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", w = 0; w < 7; w++) z = g ? g.apply(t.input ? t.input[0] : null, [N]) : [!0, ""], W = N.getMonth() !== J, j = W && !y || !z[0] || G && N < G || Z && N > Z, $ += "<td class='" + ((w + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (N.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + z[1] + (N.getTime() === K.getTime() ? " " + this._currentClass : "") + (N.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !z[2] ? "" : " title='" + z[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === q.getTime() ? " ui-state-highlight" : "") + (N.getTime() === K.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                            D += $ + "</tr>"
                        }
                        J++, J > 11 && (J = 0, tt++), D += "</tbody></table>" + (Q ? "</div>" + (Y[0] > 0 && C === Y[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += D
                    }
                    _ += k
                }
                return _ += c, t._keyEvent = !1, _
            },
            _generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
                var l, c, u, h, d, p, f, m, g = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    y = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    _ = "";
                if (o || !g) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, c = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; u < 12; u++)(!l || u >= n.getMonth()) && (!c || u <= s.getMonth()) && (_ += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                    _ += "</select>"
                }
                if (y || (b += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (h = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, f = p(h[0]), m = Math.max(f, p(h[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                    }
                return b += this._get(t, "yearSuffix"), y && (b += (!o && g && v ? "" : "&#xa0;") + _), b += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var n = t.selectedYear + ("Y" === i ? e : 0),
                    s = t.selectedMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && e < i ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1));
                return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    a = null,
                    r = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function(e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new n, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.0";
        var v = (t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), !1);
        t(document).on("mouseup", function() {
            v = !1
        });
        t.widget("ui.mouse", {
            version: "1.12.0",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.on("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).on("click." + this.widgetName, function(i) {
                    if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!v) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var i = this,
                        n = 1 === e.which,
                        s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                    return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                            return i._mouseMove(t)
                        }, this._mouseUpDelegate = function(t) {
                            return i._mouseUp(t)
                        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), v = !0, !0))
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which)
                        if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(e) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, v = !1, e.preventDefault()
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }), t.ui.plugin = {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        }, t.ui.safeBlur = function(e) {
            e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
        };
        t.widget("ui.draggable", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(e) {
                var i = this.options;
                return this._blurActiveElement(e), !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0))
            },
            _blockFrames: function(e) {
                this.iframeBlocks = this.document.find(e).map(function() {
                    var e = t(this);
                    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(e) {
                var i = t.ui.safeActiveElement(this.document[0]),
                    n = t(e.target);
                this._getHandle(e) && n.closest(i).length || t.ui.safeBlur(i)
            },
            _mouseStart: function(e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                        return "fixed" === t(this).css("position")
                    }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _refreshOffsets: function(t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }
            },
            _mouseDrag: function(e, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var n = this._uiHash();
                    if (this._trigger("drag", e, n) === !1) return this._mouseUp(new t.Event("mouseup", e)), !1;
                    this.position = n.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function(e) {
                var i = this,
                    n = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    i._trigger("stop", e) !== !1 && i._clear()
                }) : this._trigger("stop", e) !== !1 && this._clear(), !1
            },
            _mouseUp: function(e) {
                return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function(e) {
                return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper),
                    s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _isRootNode: function(t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function() {
                var e = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, s = this.options,
                    o = this.document[0];
                return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(t, e) {
                var i, n, s, o, a = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    c = t.pageY;
                return r && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, c = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (c = this.originalPageY)), {
                    top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function(e, i, n) {
                return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.sortables = [], t(n.options.connectToSortable).each(function() {
                    var i = t(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
                })
            },
            stop: function(e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                    var t = this;
                    t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
                })
            },
            drag: function(e, i, n) {
                t.each(n.sortables, function() {
                    var s = !1,
                        o = this;
                    o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                    })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                        return i.helper[0]
                    }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() {
                        this.refreshPositions()
                    }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function(e, i, n) {
                var s = t("body"),
                    o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._cursor && t("body").css("cursor", s._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function(e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._opacity && t(i.helper).css("opacity", s._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(e, i, n) {
                var s = n.options,
                    o = !1,
                    a = n.scrollParentNotHidden[0],
                    r = n.document[0];
                a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function(e, i, n) {
                var s = n.options;
                n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                    var e = t(this),
                        i = e.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(e, i, n) {
                var s, o, a, r, l, c, u, h, d, p, f = n.options,
                    m = f.snapTolerance,
                    g = i.offset.left,
                    v = g + n.helperProportions.width,
                    y = i.offset.top,
                    b = y + n.helperProportions.height;
                for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, c = l + n.snapElements[d].width, u = n.snapElements[d].top - n.margins.top, h = u + n.snapElements[d].height, v < l - m || g > c + m || b < u - m || y > h + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(u - b) <= m, o = Math.abs(h - y) <= m, a = Math.abs(l - v) <= m, r = Math.abs(c - g) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                    top: u - n.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l - n.helperProportions.width
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = Math.abs(u - y) <= m, o = Math.abs(h - b) <= m, a = Math.abs(l - g) <= m, r = Math.abs(c - v) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: h - n.helperProportions.height,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: c - n.helperProportions.width
                }).left)), !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = s || o || a || r || p)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function(e, i, n) {
                var s, o = n.options,
                    a = t.makeArray(t(o.stack)).sort(function(e, i) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    });
                a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                    t(this).css("zIndex", s + e)
                }), this.css("zIndex", s + a.length));
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function(e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex)
            }
        });
        t.ui.draggable;
        t.widget("ui.resizable", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {
                    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                },
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(t) {
                return parseFloat(t) || 0
            },
            _isNumber: function(t) {
                return !isNaN(parseFloat(t))
            },
            _hasScroll: function(e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            _create: function() {
                var e, i = this.options,
                    n = this;
                this._addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
                    i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
                }).on("mouseleave", function() {
                    i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
                }), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var e, i = function(e) {
                    t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _setOption: function(t, e) {
                switch (this._super(t, e), t) {
                    case "handles":
                        this._removeHandles(), this._setupHandles()
                }
            },
            _setupHandles: function() {
                var e, i, n, s, o, a = this.options,
                    r = this;
                if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                        zIndex: a.zIndex
                    }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                this._renderAxis = function(e) {
                    var i, n, s, o;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                    r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
                }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function() {
                this._handles.remove()
            },
            _mouseCapture: function(e) {
                var i, n, s = !1;
                for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function(e) {
                var i, n, s, o = this.options,
                    a = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: n
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.originalSize = this._helper ? {
                    width: a.outerWidth(),
                    height: a.outerHeight()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.sizeDiff = {
                    width: a.outerWidth() - a.width(),
                    height: a.outerHeight() - a.height()
                }, this.originalPosition = {
                    left: i,
                    top: n
                }, this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function(e) {
                var i, n, s = this.originalMousePosition,
                    o = this.axis,
                    a = e.pageX - s.left || 0,
                    r = e.pageY - s.top || 0,
                    l = this._change[o];
                return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var i, n, s, o, a, r, l, c = this.options,
                    u = this;
                return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, o = n ? 0 : u.sizeDiff.width, a = {
                    width: u.helper.width() - o,
                    height: u.helper.height() - s
                }, r = parseFloat(u.element.css("left")) + (u.position.left - u.originalPosition.left) || null, l = parseFloat(u.element.css("top")) + (u.position.top - u.originalPosition.top) || null, c.animate || this.element.css(t.extend(a, {
                    top: l,
                    left: r
                })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !c.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, n, s, o, a = this.options;
                o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    c = /sw|nw|w/.test(i),
                    u = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && c && (t.left = r - e.minWidth), n && c && (t.left = r - e.maxWidth), a && u && (t.top = l - e.minHeight), s && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function(t, e) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return {
                        left: n.left + e,
                        width: i.width - e
                    }
                },
                n: function(t, e, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return {
                        top: s.top + i,
                        height: n.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function(e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function(e) {
                var i = t(this).resizable("instance"),
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                    r = o ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - r,
                        height: i.size.height - a
                    },
                    c = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                    u = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, u && c ? {
                    top: u,
                    left: c
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function() {
                        var n = {
                            width: parseFloat(i.element.css("width")),
                            height: parseFloat(i.element.css("height")),
                            top: parseFloat(i.element.css("top")),
                            left: parseFloat(i.element.css("left"))
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function() {
                var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
                    c = l.options,
                    u = l.element,
                    h = c.containment,
                    d = h instanceof t ? h.get(0) : /parent/.test(h) ? u.parent().get(0) : h;
                d && (l.containerElement = t(d), /document/.test(h) || h === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {
                    left: 0,
                    top: 0
                }, l.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                    i[t] = l._num(e.css("padding" + n))
                }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                    element: d,
                    left: n.left,
                    top: n.top,
                    width: a,
                    height: r
                }))
            },
            resize: function(e) {
                var i, n, s, o, a = t(this).resizable("instance"),
                    r = a.options,
                    l = a.containerOffset,
                    c = a.position,
                    u = a._aspectRatio || e.shiftKey,
                    h = {
                        top: 0,
                        left: 0
                    },
                    d = a.containerElement,
                    p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (h = l), c.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - h.left), u && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), c.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), u && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - h.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - h.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, u && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, u && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
            },
            stop: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.containerOffset,
                    s = e.containerPosition,
                    o = e.containerElement,
                    a = t(e.helper),
                    r = a.offset(),
                    l = a.outerWidth() - e.sizeDiff.width,
                    c = a.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: c
                }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: c
                })
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var e = t(this).resizable("instance"),
                    i = e.options;
                t(i.alsoResize).each(function() {
                    var e = t(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseFloat(e.width()),
                        height: parseFloat(e.height()),
                        left: parseFloat(e.css("left")),
                        top: parseFloat(e.css("top"))
                    })
                })
            },
            resize: function(e, i) {
                var n = t(this).resizable("instance"),
                    s = n.options,
                    o = n.originalSize,
                    a = n.originalPosition,
                    r = {
                        height: n.size.height - o.height || 0,
                        width: n.size.width - o.width || 0,
                        top: n.position.top - a.top || 0,
                        left: n.position.left - a.left || 0
                    };
                t(s.alsoResize).each(function() {
                    var e = t(this),
                        n = t(this).data("ui-resizable-alsoresize"),
                        s = {},
                        o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    t.each(o, function(t, e) {
                        var i = (n[e] || 0) + (r[e] || 0);
                        i && i >= 0 && (s[e] = i || null)
                    }), e.css(s)
                })
            },
            stop: function() {
                t(this).removeData("ui-resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var e = t(this).resizable("instance"),
                    i = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: i.height,
                    width: i.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), e._addClass(e.ghost, "ui-resizable-ghost"), t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
            },
            resize: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var e, i = t(this).resizable("instance"),
                    n = i.options,
                    s = i.size,
                    o = i.originalSize,
                    a = i.originalPosition,
                    r = i.axis,
                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    c = l[0] || 1,
                    u = l[1] || 1,
                    h = Math.round((s.width - o.width) / c) * c,
                    d = Math.round((s.height - o.height) / u) * u,
                    p = o.width + h,
                    f = o.height + d,
                    m = n.maxWidth && n.maxWidth < p,
                    g = n.maxHeight && n.maxHeight < f,
                    v = n.minWidth && n.minWidth > p,
                    y = n.minHeight && n.minHeight > f;
                n.grid = l, v && (p += c), y && (f += u), m && (p -= c), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - h) : ((f - u <= 0 || p - c <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = u - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - c > 0 ? (i.size.width = p, i.position.left = a.left - h) : (p = c - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
            }
        });
        t.ui.resizable;
        t.widget("ui.dialog", {
            version: "1.12.0",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                classes: {
                    "ui-dialog": "ui-corner-all",
                    "ui-dialog-titlebar": "ui-corner-all"
                },
                closeOnEscape: !0,
                closeText: "Close",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(e) {
                        var i = t(this).css(e).offset().top;
                        i < 0 && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
            },
            _destroy: function() {
                var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function(e) {
                var i = this;
                this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                    i._trigger("close", e)
                }))
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(e, i) {
                var n = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +t(this).css("z-index")
                    }).get(),
                    o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
            },
            open: function() {
                var e = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    e._focusTabbable(), e._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
            },
            _keepFocus: function(e) {
                function i() {
                    var e = t.ui.safeActiveElement(this.document[0]),
                        i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                    i || this._focusTabbable()
                }
                e.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = t("<div>").hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                    keydown: function(e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                n = i.filter(":first"),
                                s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                s.trigger("focus")
                            }), e.preventDefault()) : (this._delay(function() {
                                n.trigger("focus")
                            }), e.preventDefault())
                        }
                    },
                    mousedown: function(t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var e;
                this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                    mousedown: function(e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                    }
                }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: t("<a>").text(this.options.closeText).html(),
                    icon: "ui-icon-closethick",
                    showLabel: !1
                }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(), this.close(t)
                    }
                }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                    "aria-labelledby": e.attr("id")
                })
            },
            _title: function(t) {
                this.options.title ? t.text(this.options.title) : t.html("&#160;")
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
            },
            _createButtons: function() {
                var e = this,
                    i = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
                    var s, o;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n, n = t.extend({
                        type: "button"
                    }, n), s = n.click, o = {
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        showLabel: n.showLabel
                    }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() {
                        s.apply(e.element[0], arguments)
                    })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(n, s) {
                        i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                    },
                    drag: function(t, n) {
                        i._trigger("drag", t, e(n))
                    },
                    stop: function(s, o) {
                        var a = o.offset.left - i.document.scrollLeft(),
                            r = o.offset.top - i.document.scrollTop();
                        n.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                    }
                })
            },
            _makeResizable: function() {
                function e(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                var i = this,
                    n = this.options,
                    s = n.resizable,
                    o = this.uiDialog.css("position"),
                    a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: this._minHeight(),
                    handles: a,
                    start: function(n, s) {
                        i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                    },
                    resize: function(t, n) {
                        i._trigger("resize", t, e(n))
                    },
                    stop: function(s, o) {
                        var a = i.uiDialog.offset(),
                            r = a.left - i.document.scrollLeft(),
                            l = a.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                    }
                }).css("position", o)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(e) {
                        this._makeFocusTarget(), this._focusedElement = t(e.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var e = this._trackingInstances(),
                    i = t.inArray(this, e);
                i !== -1 && e.splice(i, 1)
            },
            _trackingInstances: function() {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [], this.document.data("ui-dialog-instances", t)), t
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function() {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
            },
            _setOptions: function(e) {
                var i = this,
                    n = !1,
                    s = {};
                t.each(e, function(t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function(e, i) {
                var n, s, o = this.uiDialog;
                "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                    label: t("<a>").text("" + this.options.closeText).html()
                }), "draggable" === e && (n = o.is(":data(ui-draggable)"), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = o.is(":data(ui-resizable)"), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || i === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var e = t(this);
                    return t("<div>").css({
                        position: "absolute",
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }).appendTo(e.parent()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(e) {
                return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var e = !0;
                    this._delay(function() {
                        e = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function(t) {
                            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                }
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super(), this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function(t, e) {
                "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
            }
        });
        t.ui.dialog;
        t.widget("ui.droppable", {
            version: "1.12.0",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                addClasses: !0,
                greedy: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var e, i = this.options,
                    n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) {
                    return t.is(n)
                }, this.proportions = function() {
                    return arguments.length ? void(e = arguments[0]) : e ? e : e = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
            },
            _addToManager: function(e) {
                t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
            },
            _splice: function(t) {
                for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function() {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e)
            },
            _setOption: function(e, i) {
                if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                    return t.is(i)
                };
                else if ("scope" === e) {
                    var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i)
                }
                this._super(e, i)
            },
            _activate: function(e) {
                var i = t.ui.ddmanager.current;
                this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function(e) {
                var i = t.ui.ddmanager.current;
                this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
            },
            _out: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
            },
            _drop: function(e, i) {
                var n = i || t.ui.ddmanager.current,
                    s = !1;
                return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                        var i = t(this).droppable("instance");
                        if (i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && y(n, t.extend(i, {
                                offset: i.element.offset()
                            }), i.options.tolerance, e)) return s = !0, !1
                    }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            },
            _addHoverClass: function() {
                this._addClass("ui-droppable-hover")
            },
            _removeHoverClass: function() {
                this._removeClass("ui-droppable-hover")
            },
            _addActiveClass: function() {
                this._addClass("ui-droppable-active")
            },
            _removeActiveClass: function() {
                this._removeClass("ui-droppable-active")
            }
        });
        var y = t.ui.intersect = function() {
            function t(t, e, i) {
                return t >= e && t < e + i
            }
            return function(e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    r = o + e.helperProportions.width,
                    l = a + e.helperProportions.height,
                    c = i.offset.left,
                    u = i.offset.top,
                    h = c + i.proportions().width,
                    d = u + i.proportions().height;
                switch (n) {
                    case "fit":
                        return c <= o && r <= h && u <= a && l <= d;
                    case "intersect":
                        return c < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < h && u < a + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                    case "pointer":
                        return t(s.pageY, u, i.proportions().height) && t(s.pageX, c, i.proportions().width);
                    case "touch":
                        return (a >= u && a <= d || l >= u && l <= d || a < u && l > d) && (o >= c && o <= h || r >= c && r <= h || o < c && r > h);
                    default:
                        return !1
                }
            }
        }();
        t.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(e, i) {
                var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                    a = i ? i.type : null,
                    r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; n < o.length; n++)
                    if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                        for (s = 0; s < r.length; s++)
                            if (r[s] === o[n].element[0]) {
                                o[n].proportions().height = 0;
                                continue t
                            }
                        o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                            width: o[n].element[0].offsetWidth,
                            height: o[n].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(e, i) {
                var n = !1;
                return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && y(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function(e, i) {
                e.element.parentsUntil("body").on("scroll.droppable", function() {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            },
            drag: function(e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n, s, o, a = y(e, this, this.options.tolerance, i),
                            r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                            return t(this).droppable("instance").options.scope === s
                        }), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                    }
                })
            },
            dragStop: function(e, i) {
                e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }, t.uiBackCompat !== !1 && t.widget("ui.droppable", t.ui.droppable, {
            options: {
                hoverClass: !1,
                activeClass: !1
            },
            _addActiveClass: function() {
                this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
            },
            _removeActiveClass: function() {
                this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
            },
            _addHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
            },
            _removeHoverClass: function() {
                this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
            }
        });
        t.ui.droppable, t.widget("ui.progressbar", {
            version: "1.12.0",
            options: {
                classes: {
                    "ui-progressbar": "ui-corner-all",
                    "ui-progressbar-value": "ui-corner-left",
                    "ui-progressbar-complete": "ui-corner-right"
                },
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
            },
            value: function(t) {
                return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
            },
            _constrainedValue: function(t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function(t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function(t, e) {
                "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var e = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        }), t.widget("ui.selectable", t.ui.mouse, {
            version: "1.12.0",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var e = this;
                this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                        var i = t(this),
                            n = i.offset(),
                            s = {
                                left: n.left - e.elementPos.left,
                                top: n.top - e.elementPos.top
                            };
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: i,
                            left: s.left,
                            top: s.top,
                            right: s.left + i.outerWidth(),
                            bottom: s.top + i.outerHeight(),
                            startselected: !1,
                            selected: i.hasClass("ui-selected"),
                            selecting: i.hasClass("ui-selecting"),
                            unselecting: i.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
            },
            _destroy: function() {
                this.selectees.removeData("selectable-item"), this._mouseDestroy()
            },
            _mouseStart: function(e) {
                var i = this,
                    n = this.options;
                this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: n.element
                    }))
                }), t(e.target).parents().addBack().each(function() {
                    var n, s = t.data(this, "selectable-item");
                    if (s) return n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                        selecting: s.element
                    }) : i._trigger("unselecting", e, {
                        unselecting: s.element
                    }), !1
                }))
            },
            _mouseDrag: function(e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, n = this,
                        s = this.options,
                        o = this.opos[0],
                        a = this.opos[1],
                        r = e.pageX,
                        l = e.pageY;
                    return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                        left: o,
                        top: a,
                        width: r - o,
                        height: l - a
                    }), this.selectees.each(function() {
                        var i = t.data(this, "selectable-item"),
                            c = !1,
                            u = {};
                        i && i.element !== n.element[0] && (u.left = i.left + n.elementPos.left, u.right = i.right + n.elementPos.left, u.top = i.top + n.elementPos.top, u.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? c = !(u.left > r || u.right < o || u.top > l || u.bottom < a) : "fit" === s.tolerance && (c = u.left > o && u.right < r && u.top > a && u.bottom < l), c ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                            selecting: i.element
                        }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                            unselecting: i.element
                        }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                            unselecting: i.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                        unselected: n.element
                    })
                }), t(".ui-selecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                        selected: n.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
            version: "1.12.0",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                classes: {
                    "ui-selectmenu-button-open": "ui-corner-top",
                    "ui-selectmenu-button-closed": "ui-corner-all"
                },
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: !1,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var e = this.element.uniqueId().attr("id");
                this.ids = {
                    element: e,
                    button: e + "-button",
                    menu: e + "-menu"
                }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
            },
            _drawButton: function() {
                var e, i = this,
                    n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
                this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                    click: function(t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = t("<span>", {
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true",
                    title: this.element.attr("title")
                }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                    i._rendered || i._refreshMenu()
                })
            },
            _drawMenu: function() {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    classes: {
                        "ui-menu": "ui-corner-bottom"
                    },
                    role: "listbox",
                    select: function(t, i) {
                        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function(t, i) {
                        var n = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                            item: n
                        }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                    }
                }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                    return !1
                }, this.menuInstance._isDivider = function() {
                    return !1
                }
            },
            refresh: function() {
                this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
            },
            _refreshMenu: function() {
                var t, e = this.element.find("option");
                this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(t) {
                this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
            },
            _position: function() {
                this.menuWrap.position(t.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function(t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function() {
                return this.button
            },
            menuWidget: function() {
                return this.menu
            },
            _renderButtonItem: function(e) {
                var i = t("<span>");
                return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
            },
            _renderMenu: function(e, i) {
                var n = this,
                    s = "";
                t.each(i, function(i, o) {
                    var a;
                    o.optgroup !== s && (a = t("<li>", {
                        text: o.optgroup
                    }), n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function(e, i) {
                var n = t("<li>"),
                    s = t("<div>", {
                        title: i.element.attr("title")
                    });
                return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
            },
            _setText: function(t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function(t, e) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
            },
            _toggle: function(t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function() {
                var t;
                this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function(e) {
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
                }
            },
            _buttonEvents: {
                mousedown: function() {
                    var t;
                    window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function(t) {
                    this._setSelection(), this._toggle(t)
                },
                keydown: function(e) {
                    var i = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.TAB:
                        case t.ui.keyCode.ESCAPE:
                            this.close(e), i = !1;
                            break;
                        case t.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(e);
                            break;
                        case t.ui.keyCode.UP:
                            e.altKey ? this._toggle(e) : this._move("prev", e);
                            break;
                        case t.ui.keyCode.DOWN:
                            e.altKey ? this._toggle(e) : this._move("next", e);
                            break;
                        case t.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this._move("prev", e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this._move("next", e);
                            break;
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.PAGE_UP:
                            this._move("first", e);
                            break;
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_DOWN:
                            this._move("last", e);
                            break;
                        default:
                            this.menu.trigger(e), i = !1
                    }
                    i && e.preventDefault()
                }
            },
            _selectFocusedItem: function(t) {
                var e = this.menuItems.eq(this.focusIndex).parent("li");
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function(t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== i && this._trigger("change", e, {
                    item: t
                }), this.close(e)
            },
            _setAria: function(t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function(t, e) {
                if ("icons" === t) {
                    var i = this.button.find("span.ui-icon");
                    this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
                }
                this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
            },
            _setOptionDisabled: function(t) {
                this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
            },
            _toggleAttr: function() {
                this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function() {
                var t = this.options.width;
                return t === !1 ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function() {
                var t = this._super();
                return t.disabled = this.element.prop("disabled"), t
            },
            _parseOptions: function(e) {
                var i = this,
                    n = [];
                e.each(function(e, s) {
                    n.push(i._parseOption(t(s), e))
                }), this.items = n
            },
            _parseOption: function(t, e) {
                var i = t.parent("optgroup");
                return {
                    element: t,
                    index: e,
                    value: t.val(),
                    label: t.text(),
                    optgroup: i.attr("label") || "",
                    disabled: i.prop("disabled") || t.prop("disabled")
                }
            },
            _destroy: function() {
                this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
            }
        }]), t.widget("ui.slider", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var e, i, n = this.options,
                    s = this.element.find(".ui-slider-handle"),
                    o = "<span tabindex='0'></span>",
                    a = [];
                for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; e < i; e++) a.push(o);
                this.handles = s.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e)
                })
            },
            _createRange: function() {
                var e = this.options;
                e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, n, s, o, a, r, l, c, u = this,
                    h = this.options;
                return !h.disabled && (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), i = {
                        x: e.pageX,
                        y: e.pageY
                    }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                        var i = Math.abs(n - u.values(e));
                        (s > i || s === i && (e === u._lastChangedValue || u.values(e) === h.min)) && (s = i, o = t(this), a = e)
                    }), r = this._start(e, a), r !== !1 && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), c = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                        left: 0,
                        top: 0
                    } : {
                        left: e.pageX - l.left - o.width() / 2,
                        top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, n, s, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), n < 0 && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
            },
            _uiHash: function(t, e, i) {
                var n = {
                    handle: this.handles[t],
                    handleIndex: t,
                    value: void 0 !== e ? e : this.value()
                };
                return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length
            },
            _start: function(t, e) {
                return this._trigger("start", t, this._uiHash(e))
            },
            _slide: function(t, e, i) {
                var n, s, o = this.value(),
                    a = this.values();
                this._hasMultipleValues() && (s = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), a[e] = i), i !== o && (n = this._trigger("slide", t, this._uiHash(e, i, a)), n !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
            },
            _stop: function(t, e) {
                this._trigger("stop", t, this._uiHash(e))
            },
            _change: function(t, e) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(e, i) {
                var n, s, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
                for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var n, s = 0;
                switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this._hasMultipleValues()) {
                    for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step,
                    n = Math.round((t - e) / i) * i;
                t = n + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return i === -1 ? 0 : e.length - i - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshRange: function(t) {
                "vertical" === t && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === t && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function() {
                var e, i, n, s, o, a = this.options.range,
                    r = this.options,
                    l = this,
                    c = !this._animateOff && r.animate,
                    u = {};
                this._hasMultipleValues() ? this.handles.each(function(n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[c ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === n && l.range[c ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
                }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](u, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, r.animate))
            },
            _handleEvents: {
                keydown: function(e) {
                    var i, n, s, o, a = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return
                    }
                    switch (o = this.options.step, n = s = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (n === this._valueMax()) return;
                            s = this._trimAlignValue(n + o);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (n === this._valueMin()) return;
                            s = this._trimAlignValue(n - o)
                    }
                    this._slide(e, a, s)
                },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
                }
            }
        }), t.widget("ui.sortable", t.ui.mouse, {
            version: "1.12.0",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(t, e, i) {
                return t >= e && t < e + i
            },
            _isFloating: function(t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function() {
                this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName();
            },
            _setHandleClassName: function() {
                var e = this;
                this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
                    e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
                })
            },
            _destroy: function() {
                this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(e, i) {
                var n = null,
                    s = !1,
                    o = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
                        if (t.data(this, o.widgetName + "-item") === o) return n = t(this), !1
                    }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() {
                        this === e.target && (s = !0)
                    }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
            },
            _mouseStart: function(e, i, n) {
                var s, o, a = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, t.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var i, n, s, o, a = this.options,
                    r = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && t.contains(this.element[0], s))) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset(),
                            o = this.options.axis,
                            a = {};
                        o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                            n._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, t(i).each(function() {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, i.each(function() {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = t.left,
                    a = o + t.width,
                    r = t.top,
                    l = r + t.height,
                    c = this.offset.click.top,
                    u = this.offset.click.left,
                    h = "x" === this.options.axis || n + c > r && n + c < l,
                    d = "y" === this.options.axis || e + u > o && e + u < a,
                    p = h && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function(t) {
                var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    o = n && s;
                return !!o && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                function i() {
                    r.push(this)
                }
                var n, s, o, a, r = [],
                    l = [],
                    c = this._connectWith();
                if (c && e)
                    for (n = c.length - 1; n >= 0; n--)
                        for (o = t(c[n], this.document[0]), s = o.length - 1; s >= 0; s--) a = t.data(o[s], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                return t(r)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var i, n, s, o, a, r, l, c, u = this.items,
                    h = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (h.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]), this.containers.push(o));
                for (i = h.length - 1; i >= 0; i--)
                    for (a = h[i][1], r = h[i][0], n = 0, c = r.length; n < c; n++) l = t(r[n]), l.data(this.widgetName + "-item", a), u.push({
                        item: l,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(e) {
                this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, s, o;
                for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                e = e || this;
                var i, n = e.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function() {
                        var n = e.currentItem[0].nodeName.toLowerCase(),
                            s = t("<" + n + ">", e.document[0]);
                        return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                    },
                    update: function(t, s) {
                        i && !n.forcePlaceholderSize || (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function(e, i) {
                var n = this;
                e.children().each(function() {
                    t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                })
            },
            _contactContainers: function(e) {
                var i, n, s, o, a, r, l, c, u, h, d = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                            d = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (s = 1e4, o = null, u = d.floating || this._isFloating(this.currentItem), a = u ? "left" : "top", r = u ? "width" : "height", h = u ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], c = !1, e[h] - l > this.items[n][r] / 2 && (c = !0), Math.abs(e[h] - l) < s && (s = Math.abs(e[h] - l), o = this.items[n], this.direction = c ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function(e) {
                var i, n, s = this.options,
                    o = e.pageX,
                    a = e.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(t, e) {
                function i(t, e, i) {
                    return function(n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS) "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && s.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (s.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), s.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), s.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        });
        t.widget("ui.spinner", {
            version: "1.12.0",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                classes: {
                    "ui-spinner": "ui-corner-all",
                    "ui-spinner-down": "ui-corner-br",
                    "ui-spinner-up": "ui-corner-tr"
                },
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var e = this._super(),
                    i = this.element;
                return t.each(["min", "max", "step"], function(t, n) {
                    var s = i.attr(n);
                    null != s && s.length && (e[n] = s)
                }), e
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                },
                mousewheel: function(t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(e) {
                    function i() {
                        var e = this.element[0] === t.ui.safeActiveElement(this.document[0]);
                        e || (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                            this.previous = n
                        }))
                    }
                    var n;
                    n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, i.call(this)
                    }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(e) {
                    if (t(e.currentTarget).hasClass("ui-state-active")) return this._start(e) !== !1 && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
            },
            _draw: function() {
                this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                    classes: {
                        "ui-button": ""
                    }
                }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                    icon: this.options.icons.up,
                    showLabel: !1
                }), this.buttons.last().button({
                    icon: this.options.icons.down,
                    showLabel: !1
                }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
            },
            _keydown: function(e) {
                var i = this.options,
                    n = t.ui.keyCode;
                switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _start: function(t) {
                return !(!this.spinning && this._trigger("start", t) === !1) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function(t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function(e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return i === -1 ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, n = this.options;
                return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                var i, n, s;
                return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : ("max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e))
            },
            _setOptionDisabled: function(t) {
                this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
            },
            _setOptions: r(function(t) {
                this._super(t)
            }),
            _parse: function(t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function() {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function(t, e) {
                var i;
                "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
            },
            _destroy: function() {
                this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: r(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: r(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: r(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: r(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                return arguments.length ? void r(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.spinner", t.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function() {
                return "<span>"
            },
            _buttonHtml: function() {
                return "<a></a><a></a>"
            }
        });
        t.ui.spinner;
        t.widget("ui.tabs", {
            version: "1.12.0",
            delay: 300,
            options: {
                active: null,
                classes: {
                    "ui-tabs": "ui-corner-all",
                    "ui-tabs-nav": "ui-corner-all",
                    "ui-tabs-panel": "ui-corner-bottom",
                    "ui-tabs-tab": "ui-corner-top"
                },
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function() {
                var t = /#.*$/;
                return function(e) {
                    var i, n;
                    i = e.href.replace(t, ""), n = location.href.replace(t, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (s) {}
                    try {
                        n = decodeURIComponent(n)
                    } catch (s) {}
                    return e.hash.length > 1 && i === n
                }
            }(),
            _create: function() {
                var e = this,
                    i = this.options;
                this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var e = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1);
                return null === e && (n && this.tabs.each(function(i, s) {
                    if (t(s).attr("aria-controls") === n) return e = i, !1
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
                null !== e && e !== -1 || (e = !!this.tabs.length && 0)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), e === -1 && (e = !i && 0)), !i && e === !1 && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function(e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(e, i) {
                function n() {
                    return e > s && (e = 0), e < 0 && (e = s), e
                }
                for (var s = this.tabs.length - 1; t.inArray(n(), this.options.disabled) !== -1;) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                    return i.index(t)
                }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function() {
                this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                    role: "tab",
                    tabIndex: -1
                }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                    return t("a", this)[0]
                }).attr({
                    role: "presentation",
                    tabIndex: -1
                }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, n) {
                    var s, o, a, r = t(n).uniqueId().attr("id"),
                        l = t(n).closest("li"),
                        c = l.attr("aria-controls");
                    e._isLocal(n) ? (s = n.hash, a = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + a, o = e.element.find(s), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                        "aria-controls": a,
                        "aria-labelledby": r
                    }), o.attr("aria-labelledby", r)
                }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol, ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
            },
            _setOptionDisabled: function(e) {
                var i, n, s;
                for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), e === !0 || t.inArray(s, e) !== -1 ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0)
            },
            _setupEvents: function(e) {
                var i = {};
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(e) {
                var i, n = this.element.parent();
                "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var e = t(this),
                        n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function() {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    o = s.closest("li"),
                    a = o[0] === n[0],
                    r = a && i.collapsible,
                    l = r ? t() : this._getPanelForTab(o),
                    c = n.length ? this._getPanelForTab(n) : t(),
                    u = {
                        oldTab: n,
                        oldPanel: c,
                        newTab: r ? t() : o,
                        newPanel: l
                    };
                e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), c.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, u))
            },
            _toggle: function(e, i) {
                function n() {
                    o.running = !1, o._trigger("activate", e, i)
                }

                function s() {
                    o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
                }
                var o = this,
                    a = i.newPanel,
                    r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                    o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
                }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return e === !1 ? t() : this.tabs.eq(e)
            },
            _getIndex: function(e) {
                return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                }), this.tabs.each(function() {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(e) {
                var i = this.options.disabled;
                i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function(t, i) {
                    return i !== e ? i : null
                })), this._setOptionDisabled(i))
            },
            disable: function(e) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), t.inArray(e, i) !== -1) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setOptionDisabled(i)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var n = this,
                    s = this.tabs.eq(e),
                    o = s.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(s),
                    r = {
                        tab: s,
                        panel: a
                    },
                    l = function(t, e) {
                        "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                    };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) {
                    setTimeout(function() {
                        a.html(t), n._trigger("load", i, r), l(s, e)
                    }, 1)
                }).fail(function(t, e) {
                    setTimeout(function() {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function(e, i, n) {
                var s = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function(e, o) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, n))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
            }
        });
        t.ui.tabs;
        t.widget("ui.tooltip", {
            version: "1.12.0",
            options: {
                classes: {
                    "ui-tooltip": "ui-corner-all ui-widget-shadow"
                },
                content: function() {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(e, i) {
                var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
            },
            _removeDescribedBy: function(e) {
                var i = e.data("ui-tooltip-id"),
                    n = (e.attr("aria-describedby") || "").split(/\s+/),
                    s = t.inArray(i, n);
                s !== -1 && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
            },
            _setOption: function(e, i) {
                var n = this;
                this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                    n._updateContent(e.element)
                })
            },
            _setOptionDisabled: function(t) {
                this[t ? "_disable" : "_enable"]()
            },
            _disable: function() {
                var e = this;
                t.each(this.tooltips, function(i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n.element[0], e.close(s, !0)
                }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                    var e = t(this);
                    if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                }))
            },
            _enable: function() {
                this.disabledTitles.each(function() {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                }), this.disabledTitles = t([])
            },
            open: function(e) {
                var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    }, n.attr("title", ""))
                }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
            },
            _updateContent: function(t, e) {
                var i, n = this.options.content,
                    s = this,
                    o = e ? e.type : null;
                return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : (i = n.call(t[0], function(i) {
                    s._delay(function() {
                        t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                    })
                }), void(i && this._open(e, t, i)))
            },
            _open: function(e, i, n) {
                function s(t) {
                    c.of = t, a.is(":hidden") || a.position(c)
                }
                var o, a, r, l, c = t.extend({}, this.options.position);
                if (n) {
                    if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = t("<div>").html(a.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: s
                    }), s(e)) : a.position(t.extend({
                        of: i
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                        a.is(":visible") && (s(c.of), clearInterval(r))
                    }, t.fx.interval)), this._trigger("open", e, {
                        tooltip: a
                    })
                }
            },
            _registerCloseHandlers: function(e, i) {
                var n = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var n = t.Event(e);
                            n.currentTarget = i[0], this.close(n, !0)
                        }
                    }
                };
                i[0] !== this.element[0] && (n.remove = function() {
                    this._removeTooltip(this._find(i).tooltip)
                }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
            },
            close: function(e) {
                var i, n = this,
                    s = t(e ? e.currentTarget : this.element),
                    o = this._find(s);
                return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                    n._removeTooltip(t(this))
                }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e]
                }), o.closing = !0, this._trigger("close", e, {
                    tooltip: i
                }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
            },
            _tooltip: function(e) {
                var i = t("<div>").attr("role", "tooltip"),
                    n = t("<div>").appendTo(i),
                    s = i.uniqueId().attr("id");
                return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = {
                    element: e,
                    tooltip: i
                }
            },
            _find: function(t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function(t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _appendTo: function(t) {
                var e = t.closest(".ui-front, dialog");
                return e.length || (e = this.document[0].body), e
            },
            _destroy: function() {
                var e = this;
                t.each(this.tooltips, function(i, n) {
                    var s = t.Event("blur"),
                        o = n.element;
                    s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        }), t.uiBackCompat !== !1 && t.widget("ui.tooltip", t.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var t = this._superApply(arguments);
                return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
            }
        });
        t.ui.tooltip
    }), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                s = n.data("bs.tab");
            s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                a = t.Event("show.bs.tab", {
                    relatedTarget: s[0]
                });
            if (s.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var r = t(n);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, s) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }
        var a = n.find("> .active"),
            r = s && t.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var s = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), selectScroll(), $(document).on("click", ".map-trigger-open", function(t) {
    t.preventDefault(), $("body").find("#ajax-map-content").load("ajax/tabs/map.html"), $(".header__bottom").hide(), $(".header__top .menu-col .menu-btn").hide(), $(".header__top .menu-col").html('<a href="#" class="map-trigger-close">Закрыть карту</a>')
}), $(document).on("click", ".map-trigger-close", function(t) {
    t.preventDefault(), $("body").find("#ajax-map-content").load("ajax/tabs/main-contact.html"), $(".header__bottom").show(), $(".header__top .menu-col .menu-btn").show(), $(".header__top .menu-col .map-trigger-close").remove()
}), $(document).on("click", ".meet-list-close", function(t) {
    t.preventDefault(), $(this).parents(".meet-list__item").remove()
}), $(document).on("click", ".doctors-list__item .doctor-name", function() {
    $(this).parents(".doctors-list").find(".doctor-name").removeClass("checked"), $(this).addClass("checked")
}), $(document).on("click", ".doctors-list__item .doctor-info", function() {
    $(this).parents(".doctors-list").find(".doctor-info").removeClass("checked"), $(this).addClass("checked")
}), $(document).on("click", '.disabled[data-toggle="tabajax"]', function(t) {
    t.preventDefault()
}), $(document).on("click", ".time-line label", function() {
    var t = $(".choice-step .tab-pane.active");
    !$(this).parents("li").hasClass("disabled") && t.length > 0 && ($(this).parents(".time-line").find("label").removeClass("checked"), $(this).addClass("checked"), $(".ready-state").removeClass("disabled").removeAttr("disabled"))
}),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, n) {
                var s, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, s = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, n, s), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = i++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function() {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
            var s = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : n ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : n === !0 ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var n = {},
                s = this;
            s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, i) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), t({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(t) {
                    t = Math.ceil(t), s.options.vertical === !1 ? (n[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(n), i && setTimeout(function() {
                s.disableTransition(), i.call()
            }, s.options.speed))
        }, e.prototype.getNavTarget = function() {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function(e) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                i = {};
            e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, i, n, s, o, a, r = this;
            if (n = document.createDocumentFragment(), o = r.$slider.children(), r.options.rows > 1) {
                for (a = r.options.slidesPerRow * r.options.rows, s = Math.ceil(o.length / a), t = 0; t < s; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < r.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < r.options.slidesPerRow; i++) {
                            var u = t * a + (e * r.options.slidesPerRow + i);
                            o.get(u) && c.appendChild(o.get(u))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                r.$slider.empty().append(n), r.$slider.children().children().children().css({
                    width: 100 / r.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var n, s, o, a = this,
                r = !1,
                l = a.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === a.respondTo ? o = c : "slider" === a.respondTo ? o = l : "min" === a.respondTo && (o = Math.min(c, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
                s = null;
                for (n in a.breakpoints) a.breakpoints.hasOwnProperty(n) && (a.originalSettings.mobileFirst === !1 ? o < a.breakpoints[n] && (s = a.breakpoints[n]) : o > a.breakpoints[n] && (s = a.breakpoints[n]));
                null !== s ? null !== a.activeBreakpoint ? (s !== a.activeBreakpoint || i) && (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[s]), e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = s) : (a.activeBreakpoint = s, "unslick" === a.breakpointSettings[s] ? a.unslick(s) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[s]), e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = s) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e), r = s), e || r === !1 || a.$slider.trigger("breakpoint", [a, r])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var n, s, o, a = this,
                r = t(e.currentTarget);
            switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), o = a.slideCount % a.options.slidesToScroll !== 0, n = o ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 === n ? a.options.slidesToScroll : a.options.slidesToShow - n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - s, !1, i);
                    break;
                case "next":
                    s = 0 === n ? a.options.slidesToScroll : n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + s, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || r.index() * a.options.slidesToScroll;
                    a.slideHandler(a.checkNavigable(l), !1, i), r.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var s in e) {
                    if (t < e[s]) {
                        t = i;
                        break
                    }
                    i = e[s]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function(t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function() {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function() {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function(t) {
            var e, i, n, s = this,
                o = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, o = (s.options.slidesToShow - (t - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, o = s.slideCount % s.options.slidesToScroll * i * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, o = (t + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, o = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = s.options.vertical === !1 ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + o, s.options.variableWidth === !0 && (n = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = s.options.rtl === !0 ? n[0] ? (s.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, s.options.centerMode === !0 && (n = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = s.options.rtl === !0 ? n[0] ? (s.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, e += (s.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                i = 0,
                n = 0,
                s = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;) s.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, i, n, s = this;
            return n = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(e, o) {
                if (o.offsetLeft - n + t(o).outerWidth() / 2 > s.swipeLeft * -1) return i = o, !1
            }), e = Math.abs(t(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
                t(this).attr("role", "option");
                var n = e.options.centerMode ? i : Math.floor(i / e.options.slidesToShow);
                e.options.dots === !0 && t(this).attr("aria-describedby", "slick-slide" + e.instanceUid + n)
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), a.$slider.trigger("lazyLoaded", [a, e, i])
                        })
                    }, n.onerror = function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, e, i])
                    }, n.src = i
                })
            }
            var i, n, s, o, a = this;
            a.options.centerMode === !0 ? a.options.infinite === !0 ? (s = a.currentSlide + (a.options.slidesToShow / 2 + 1), o = s + a.options.slidesToShow + 2) : (s = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), o = 2 + (a.options.slidesToShow / 2 + 1) + a.currentSlide) : (s = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, o = Math.ceil(s + a.options.slidesToShow), a.options.fade === !0 && (s > 0 && s--, o <= a.slideCount && o++)), i = a.$slider.find(".slick-slide").slice(s, o), e(i), a.slideCount <= a.options.slidesToShow ? (n = a.$slider.find(".slick-slide"), e(n)) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? (n = a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow), e(n)) : 0 === a.currentSlide && (n = a.$slider.find(".slick-cloned").slice(a.options.slidesToShow * -1), e(n))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, n, s, o = this,
                a = t("img[data-lazy]", o.$slider);
            a.length ? (i = a.first(), n = i.attr("data-lazy"), s = document.createElement("img"), s.onload = function() {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, n]), o.progressiveLazyLoad()
            }, s.onerror = function() {
                e < 3 ? setTimeout(function() {
                    o.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, n]), o.progressiveLazyLoad())
            }, s.src = n) : o.$slider.trigger("allImagesLoaded", [o])
        }, e.prototype.refresh = function(e) {
            var i, n, s = this;
            n = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > n && (s.currentSlide = n), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, {
                currentSlide: i
            }), s.init(), e || s.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, n, s = this,
                o = s.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in o)
                    if (n = s.breakpoints.length - 1, i = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; n >= 0;) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), n--;
                        s.breakpoints.push(i), s.breakpointSettings[i] = o[e].settings
                    }
                s.breakpoints.sort(function(t, e) {
                    return s.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
            var n = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, i, n = this,
                s = {};
            n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", s[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(s) : (s = {}, n.cssTransitions === !1 ? (s[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(s)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(n, s) {
                e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(s).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(s).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, n, s, o, a = this,
                r = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], r = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], s = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) a.options[n] = s;
            else if ("multiple" === o) t.each(n, function(t, e) {
                a.options[t] = e
            });
            else if ("responsive" === o)
                for (i in s)
                    if ("array" !== t.type(a.options.responsive)) a.options.responsive = [s[i]];
                    else {
                        for (e = a.options.responsive.length - 1; e >= 0;) a.options.responsive[e].breakpoint === s[i].breakpoint && a.options.responsive.splice(e, 1), e--;
                        a.options.responsive.push(s[i])
                    }
            r && (a.unload(), a.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(e) {
            function i(e) {
                var i = t("#tabs-container");
                e && e.length && (i.addClass("loading"), i.fadeOut("fast"), i.load(e.attr("data-link"), function(t, e) {
                    "success" == e && (styler(), radioToggle(), tabsOpen()), i.removeClass("loading"), i.fadeIn("fast")
                }))
            }
            var n, s, o, a, r = this;
            s = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), t(".slick-current").hasClass("slick-active") || i(t(".slick-current")), r.options.centerMode === !0 ? (n = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= n && e <= r.slideCount - 1 - n ? r.$slides.slice(e - n, e + n + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = r.options.slidesToShow + e, s.slice(o - n + 1, o + n + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? s.eq(s.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && s.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : s.length <= r.options.slidesToShow ? s.addClass("slick-active").attr("aria-hidden", "false") : (a = r.slideCount % r.options.slidesToShow, o = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? s.slice(o - (r.options.slidesToShow - a), o + a).addClass("slick-active").attr("aria-hidden", "false") : s.slice(o, o + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, n, s = this;
            if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (n = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - n; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function(t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function(e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                s = parseInt(n.attr("data-slick-index"));
            return s || (s = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(s), void i.asNavFor(s)) : void i.slideHandler(s)
        }, e.prototype.slideHandler = function(t, e, i) {
            var n, s, o, a, r, l = null,
                c = this;
            if (e = e || !1, (c.animating !== !0 || c.options.waitForAnimate !== !0) && !(c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow)) return e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(a, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (t < 0 || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(a, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), s = n < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), o = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (r = c.getNavTarget(), r = r.slick("getSlick"), r.slideCount <= r.options.slidesToShow && r.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(o), c.fadeSlide(s, function() {
                c.postSlide(s)
            })) : c.postSlide(s), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function() {
                c.postSlide(s)
            }) : c.postSlide(s)))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, i, n, s = this;
            return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? s.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? s.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, i, n, s, o, a = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || o && 1 !== o.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), i = a.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && t.preventDefault(), s = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = e + n * s : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * s, a.options.verticalSwiping === !0 && (a.swipeLeft = e + n * s), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function() {
            var t, i, n = this,
                s = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                a = n.length;
            for (t = 0; t < a; t++)
                if ("object" == typeof s || "undefined" == typeof s ? n[t].slick = new e(n[t], s) : i = n[t].slick[s].apply(n[t].slick, o), "undefined" != typeof i) return i;
            return n
        }
    });
var tabsContainer = $(".tabs-control-wrap"),
    element = tabsContainer.find(".tabs-control"),
    current = tabsContainer.find(".tabs-control.slick-current"),
    arrowsContainer = $(".tabs-arrow-wrap"),
    prevArrow = arrowsContainer.find(".tabs-prev"),
    nextArrow = arrowsContainer.find(".tabs-next"),
    first = element.eq(0),
    last = element.eq(-1);
tabsContainer.slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: !0,
    arrows: !1
}), $(document).on("click", ".tabs-control-wrap .tabs-control", function(t) {
    function e(t) {
        var e = $("#tabs-container");
        t && t.length && (e.addClass("loading"), e.fadeOut("fast"), e.load(t.attr("data-link"), function(t, i) {
            "success" == i && (styler(), radioToggle(), tabsOpen()), e.removeClass("loading"), e.fadeIn("fast")
        }))
    }
    t.preventDefault(t), $(".tabs-control-wrap .tabs-control").removeClass("slick-current"), $(this).addClass("slick-current"), e($(".slick-current"))
}), $(document).on("click", "#go-to-come", function(t) {
    t.preventDefault(t), $(".tabs-control-wrap").slick("slickGoTo", "2")
}), $(document).ready(function() {
    modalInit(), mySideNav(), tabsCarousel(), styler(), mainContactLoad(), tabsOpen()
}), $(window).resize(function() {
    sideNavCloseCenter(), modalInit()
});