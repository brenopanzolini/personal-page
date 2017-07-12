function adjustPadding() {
  var t = $(window).height();
  $("#wrapper .inside").css({
    "padding-top": t / 4 + "px"
  })
}

(function() {
  var t, e, n, s, i, r, o, a, u, l, c, h, p, f, d, g, m, y, v, w, b, P, S, k, T, x, L, C, q, N, A, O, M, E, j, R, I, D, _, H, W, F, B, U, X, z, Q, G, J = [].slice,
  Y = {}.hasOwnProperty,
  K = function(t, e) {
    function n() {
      this.constructor = t
    }
    for (var s in e) Y.call(e, s) && (t[s] = e[s]);
    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
  },
  V = [].indexOf || function(t) {
    for (var e = 0, n = this.length; n > e; e++)
    if (e in this && this[e] === t) return e;
    return -1
  };
  for (w = {
    catchupTime: 500,
    initialRate: .03,
    minTime: 500,
    ghostTime: 500,
    maxProgressPerFrame: 10,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, C = function() {
    var t;
    return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
  }, N = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, v = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == N && (N = function(t) {
    return setTimeout(t, 50)
  }, v = function(t) {
    return clearTimeout(t)
  }), O = function(t) {
    var e, n;
    return e = C(), (n = function() {
      var s;
      return s = C() - e, s >= 33 ? (e = C(), t(s, function() {
        return N(n)
      })) : setTimeout(n, 33 - s)
    })()
  }, A = function() {
    var t, e, n;
    return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? J.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
  }, b = function() {
    var t, e, n, s, i, r, o;
    for (e = arguments[0], s = 2 <= arguments.length ? J.call(arguments, 1) : [], r = 0, o = s.length; o > r; r++)
    if (n = s[r])
    for (t in n) Y.call(n, t) && (i = n[t], null != e[t] && "object" == typeof e[t] && null != i && "object" == typeof i ? b(e[t], i) : e[t] = i);
    return e
  }, g = function(t) {
    var e, n, s, i, r;
    for (n = e = 0, i = 0, r = t.length; r > i; i++) s = t[i], n += Math.abs(s), e++;
    return n / e
  }, S = function(t, e) {
    var n, s, i;
    if (null == t && (t = "options"), null == e && (e = !0), i = document.querySelector("[data-pace-" + t + "]")) {
      if (n = i.getAttribute("data-pace-" + t), !e) return n;
      try {
        return JSON.parse(n)
      } catch (r) {
        return s = r, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", s) : void 0
      }
    }
  }, o = function() {
    function t() {}
    return t.prototype.on = function(t, e, n, s) {
      var i;
      return null == s && (s = !1), null == this.bindings && (this.bindings = {}), null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push({
        handler: e,
        ctx: n,
        once: s
      })
    }, t.prototype.once = function(t, e, n) {
      return this.on(t, e, n, !0)
    }, t.prototype.off = function(t, e) {
      var n, s, i;
      if (null != (null != (s = this.bindings) ? s[t] : void 0)) {
        if (null == e) return delete this.bindings[t];
        for (n = 0, i = []; n < this.bindings[t].length;) i.push(this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : n++);
        return i
      }
    }, t.prototype.trigger = function() {
      var t, e, n, s, i, r, o, a, u;
      if (n = arguments[0], t = 2 <= arguments.length ? J.call(arguments, 1) : [], null != (o = this.bindings) ? o[n] : void 0) {
        for (i = 0, u = []; i < this.bindings[n].length;) a = this.bindings[n][i], s = a.handler, e = a.ctx, r = a.once, s.apply(null != e ? e : this, t), u.push(r ? this.bindings[n].splice(i, 1) : i++);
        return u
      }
    }, t
  }(), null == window.Pace && (window.Pace = {}), b(Pace, o.prototype), q = Pace.options = b({}, w, window.paceOptions, S()), z = ["ajax", "document", "eventLag", "elements"], F = 0, U = z.length; U > F; F++) R = z[F], q[R] === !0 && (q[R] = w[R]);
  u = function(t) {
    function e() {
      return Q = e.__super__.constructor.apply(this, arguments)
    }
    return K(e, t), e
  }(Error), e = function() {
    function t() {
      this.progress = 0
    }
    return t.prototype.getElement = function() {
      var t;
      if (null == this.el) {
        if (t = document.querySelector(q.target), !t) throw new u;
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
      }
      return this.el
    }, t.prototype.finish = function() {
      var t;
      return t = this.getElement(), t.className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
    }, t.prototype.update = function(t) {
      return this.progress = t, this.render()
    }, t.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement())
      } catch (t) {
        u = t
      }
      return this.el = void 0
    }, t.prototype.render = function() {
      var t, e;
      return null == document.querySelector(q.target) ? !1 : (t = this.getElement(), t.children[0].style.width = "" + this.progress + "%", (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? e = "99" : (e = this.progress < 10 ? "0" : "", e += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + e)), this.lastRenderedProgress = this.progress)
    }, t.prototype.done = function() {
      return this.progress >= 100
    }, t
  }(), a = function() {
    function t() {
      this.bindings = {}
    }
    return t.prototype.trigger = function(t, e) {
      var n, s, i, r, o;
      if (null != this.bindings[t]) {
        for (r = this.bindings[t], o = [], s = 0, i = r.length; i > s; s++) n = r[s], o.push(n.call(this, e));
        return o
      }
    }, t.prototype.on = function(t, e) {
      var n;
      return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)
    }, t
  }(), W = window.XMLHttpRequest, H = window.XDomainRequest, _ = window.WebSocket, P = function(t, e) {
    var n, s, i, r;
    r = [];
    for (s in e.prototype) try {
      i = e.prototype[s], r.push(null == t[s] && "function" != typeof i ? t[s] = i : void 0)
    } catch (o) {
      n = o
    }
    return r
  }, x = [], Pace.ignore = function() {
    var t, e, n;
    return e = arguments[0], t = 2 <= arguments.length ? J.call(arguments, 1) : [], x.unshift("ignore"), n = e.apply(null, t), x.shift(), n
  }, Pace.track = function() {
    var t, e, n;
    return e = arguments[0], t = 2 <= arguments.length ? J.call(arguments, 1) : [], x.unshift("track"), n = e.apply(null, t), x.shift(), n
  }, j = function(t) {
    var e;
    if (null == t && (t = "GET"), "track" === x[0]) return "force";
    if (!x.length && q.ajax) {
      if ("socket" === t && q.ajax.trackWebSockets) return !0;
      if (e = t.toUpperCase(), V.call(q.ajax.trackMethods, e) >= 0) return !0
    }
    return !1
  }, l = function(t) {
    function e() {
      var t, n = this;
      e.__super__.constructor.apply(this, arguments), t = function(t) {
        var e;
        return e = t.open, t.open = function(s, i) {
          return j(s) && n.trigger("request", {
            type: s,
            url: i,
            request: t
          }), e.apply(t, arguments)
        }
      }, window.XMLHttpRequest = function(e) {
        var n;
        return n = new W(e), t(n), n
      };
      try {
        P(window.XMLHttpRequest, W)
      } catch (s) {}
      if (null != H) {
        window.XDomainRequest = function() {
          var e;
          return e = new H, t(e), e
        };
        try {
          P(window.XDomainRequest, H)
        } catch (s) {}
      }
      if (null != _ && q.ajax.trackWebSockets) {
        window.WebSocket = function(t, e) {
          var s;
          return s = null != e ? new _(t, e) : new _(t), j("socket") && n.trigger("request", {
            type: "socket",
            url: t,
            protocols: e,
            request: s
          }), s
        };
        try {
          P(window.WebSocket, _)
        } catch (s) {}
      }
    }
    return K(e, t), e
  }(a), B = null, k = function() {
    return null == B && (B = new l), B
  }, E = function(t) {
    var e, n, s, i;
    for (i = q.ajax.ignoreURLs, n = 0, s = i.length; s > n; n++)
    if (e = i[n], "string" == typeof e) {
      if (-1 !== t.indexOf(e)) return !0
    } else if (e.test(t)) return !0;
    return !1
  }, k().on("request", function(e) {
    var n, s, i, r, o;
    return r = e.type, i = e.request, o = e.url, E(o) ? void 0 : Pace.running || q.restartOnRequestAfter === !1 && "force" !== j(r) ? void 0 : (s = arguments, n = q.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function() {
      var e, n, o, a, u, l;
      if (e = "socket" === r ? i.readyState < 2 : 0 < (a = i.readyState) && 4 > a) {
        for (Pace.restart(), u = Pace.sources, l = [], n = 0, o = u.length; o > n; n++) {
          if (R = u[n], R instanceof t) {
            R.watch.apply(R, s);
            break
          }
          l.push(void 0)
        }
        return l
      }
    }, n))
  }), t = function() {
    function t() {
      var t = this;
      this.elements = [], k().on("request", function() {
        return t.watch.apply(t, arguments)
      })
    }
    return t.prototype.watch = function(t) {
      var e, n, s, i;
      return s = t.type, e = t.request, i = t.url, E(i) ? void 0 : (n = "socket" === s ? new p(e) : new f(e), this.elements.push(n))
    }, t
  }(), f = function() {
    function t(t) {
      var e, n, s, i, r, o, a = this;
      if (this.progress = 0, null != window.ProgressEvent)
      for (n = null, t.addEventListener("progress", function(t) {
        return a.progress = t.lengthComputable ? 100 * t.loaded / t.total : a.progress + (100 - a.progress) / 2
      }), o = ["load", "abort", "timeout", "error"], s = 0, i = o.length; i > s; s++) e = o[s], t.addEventListener(e, function() {
        return a.progress = 100
      });
      else r = t.onreadystatechange, t.onreadystatechange = function() {
        var e;
        return 0 === (e = t.readyState) || 4 === e ? a.progress = 100 : 3 === t.readyState && (a.progress = 50), "function" == typeof r ? r.apply(null, arguments) : void 0
      }
    }
    return t
  }(), p = function() {
    function t(t) {
      var e, n, s, i, r = this;
      for (this.progress = 0, i = ["error", "open"], n = 0, s = i.length; s > n; n++) e = i[n], t.addEventListener(e, function() {
        return r.progress = 100
      })
    }
    return t
  }(), s = function() {
    function t(t) {
      var e, n, s, r;
      for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), r = t.selectors, n = 0, s = r.length; s > n; n++) e = r[n], this.elements.push(new i(e))
    }
    return t
  }(), i = function() {
    function t(t) {
      this.selector = t, this.progress = 0, this.check()
    }
    return t.prototype.check = function() {
      var t = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
        return t.check()
      }, q.elements.checkInterval)
    }, t.prototype.done = function() {
      return this.progress = 100
    }, t
  }(), n = function() {
    function t() {
      var t, e, n = this;
      this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function() {
        return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
      }
    }
    return t.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, t
  }(), r = function() {
    function t() {
      var t, e, n, s, i, r = this;
      this.progress = 0, t = 0, i = [], s = 0, n = C(), e = setInterval(function() {
        var o;
        return o = C() - n - 50, n = C(), i.push(o), i.length > q.eventLag.sampleCount && i.shift(), t = g(i), ++s >= q.eventLag.minSamples && t < q.eventLag.lagThreshold ? (r.progress = 100, clearInterval(e)) : r.progress = 100 * (3 / (t + 3))
      }, 50)
    }
    return t
  }(), h = function() {
    function t(t) {
      this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = q.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = A(this.source, "progress"))
    }
    return t.prototype.tick = function(t, e) {
      var n;
      return null == e && (e = A(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / q.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, q.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + q.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
    }, t
  }(), I = null, M = null, m = null, D = null, d = null, y = null, Pace.running = !1, T = function() {
    return q.restartOnPushState ? Pace.restart() : void 0
  }, null != window.history.pushState && (X = window.history.pushState, window.history.pushState = function() {
    return T(), X.apply(window.history, arguments)
  }), null != window.history.replaceState && (G = window.history.replaceState, window.history.replaceState = function() {
    return T(), G.apply(window.history, arguments)
  }), c = {
    ajax: t,
    elements: s,
    document: n,
    eventLag: r
  }, (L = function() {
    var t, n, s, i, r, o, a, u;
    for (Pace.sources = I = [], o = ["ajax", "elements", "document", "eventLag"], n = 0, i = o.length; i > n; n++) t = o[n], q[t] !== !1 && I.push(new c[t](q[t]));
    for (u = null != (a = q.extraSources) ? a : [], s = 0, r = u.length; r > s; s++) R = u[s], I.push(new R(q));
    return Pace.bar = m = new e, M = [], D = new h
  })(), Pace.stop = function() {
    return Pace.trigger("stop"), Pace.running = !1, m.destroy(), y = !0, null != d && ("function" == typeof v && v(d), d = null), L()
  }, Pace.restart = function() {
    return Pace.trigger("restart"), Pace.stop(), Pace.start()
  }, Pace.go = function() {
    var t;
    return Pace.running = !0, m.render(), t = C(), y = !1, d = O(function(e, n) {
      var s, i, r, o, a, u, l, c, p, f, d, g, v, w, b, P;
      for (c = 100 - m.progress, i = d = 0, r = !0, u = g = 0, w = I.length; w > g; u = ++g)
      for (R = I[u], f = null != M[u] ? M[u] : M[u] = [], a = null != (P = R.elements) ? P : [R], l = v = 0, b = a.length; b > v; l = ++v) o = a[l], p = null != f[l] ? f[l] : f[l] = new h(o), r &= p.done, p.done || (i++, d += p.tick(e));
      return s = d / i, m.update(D.tick(e, s)), m.done() || r || y ? (m.update(100), Pace.trigger("done"), setTimeout(function() {
        return m.finish(), Pace.running = !1, Pace.trigger("hide")
      }, Math.max(q.ghostTime, Math.max(q.minTime - (C() - t), 0)))) : n()
    })
  }, Pace.start = function(t) {
    b(q, t), Pace.running = !0;
    try {
      m.render()
    } catch (e) {
      u = e
    }
    return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50)
  }, "function" == typeof define && define.amd ? define(function() {
    return Pace
  }) : "object" == typeof exports ? module.exports = Pace : q.startOnPageLoad && Pace.start()
}).call(this),
function($, t, e) {
  function n(t, e) {
    return "function" == typeof t ? t.call(e) : t
  }

  function s(t) {
    for (; t = t.parentNode;)
    if (t == document) return !0;
    return !1
  }

  function i(t) {
    return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
  }

  function r() {
    return "tipsyuid" + a++
  }

  function o(t, e) {
    this.$element = $(t), this.options = e, this.enabled = !0, this.fixTitle()
  }
  var a = 0;
  o.prototype = {
    show: function() {
      if (s(this.$element[0]) && (!i(this.$element) || this.$element.is(":visible"))) {
        var t;
        if (this.enabled && (t = this.getTitle())) {
          var e = this.tip();
          e.find(".tipsy-inner" + this.options.theme)[this.options.html ? "html" : "text"](t), e[0].className = "tipsy" + this.options.theme, this.options.className && e.addClass(n(this.options.className, this.$element[0])), e.remove().css({
            top: 0,
            left: 0,
            visibility: "hidden",
            display: "block"
          }).prependTo(document.body);
          var o = $.extend({}, this.$element.offset());
          o = this.$element.parents("svg").size() > 0 ? $.extend(o, this.$element[0].getBBox()) : $.extend(o, {
            width: this.$element[0].offsetWidth || 0,
            height: this.$element[0].offsetHeight || 0
          });
          var a = e[0].offsetWidth,
          u = e[0].offsetHeight,
          l = n(this.options.gravity, this.$element[0]),
          c;
          switch (l.charAt(0)) {
            case "n":
            c = {
              top: o.top + o.height + this.options.offset,
              left: o.left + o.width / 2 - a / 2
            };
            break;
            case "s":
            c = {
              top: o.top - u - this.options.offset,
              left: o.left + o.width / 2 - a / 2
            };
            break;
            case "e":
            c = {
              top: o.top + o.height / 2 - u / 2,
              left: o.left - a - this.options.offset
            };
            break;
            case "w":
            c = {
              top: o.top + o.height / 2 - u / 2,
              left: o.left + o.width + this.options.offset
            }
          }
          if (2 == l.length && ("w" == l.charAt(1) ? c.left = o.left + o.width / 2 - 15 : c.left = o.left + o.width / 2 - a + 15), e.css(c).addClass("tipsy-" + l + this.options.theme), e.find(".tipsy-arrow" + this.options.theme)[0].className = "tipsy-arrow" + this.options.theme + " tipsy-arrow-" + l.charAt(0) + this.options.theme, e.css({
            width: a - 10 + "px"
          }), this.options.fade ? (this.options.shadow && $(".tipsy-inner").css({
            "box-shadow": "0px 0px " + this.options.shadowBlur + "px " + this.options.shadowSpread + "px rgba(0, 0, 0, " + this.options.shadowOpacity + ")",
            "-webkit-box-shadow": "0px 0px " + this.options.shadowBlur + "px " + this.options.shadowSpread + "px rgba(0, 0, 0, " + this.options.shadowOpacity + ")"
          }), e.stop().css({
            opacity: 0,
            display: "block",
            visibility: "visible"
          }).animate({
            opacity: this.options.opacity
          }, this.options.fadeInTime)) : e.css({
            visibility: "visible",
            opacity: this.options.opacity
          }), this.options.aria) {
            var h = r();
            e.attr("id", h), this.$element.attr("aria-describedby", h)
          }
        }
      }
    },
    hide: function() {
      this.options.fade ? this.tip().stop().fadeOut(this.options.fadeOutTime, function() {
        $(this).remove()
      }) : this.tip().remove(), this.options.aria && this.$element.removeAttr("aria-describedby")
    },
    fixTitle: function() {
      var t = this.$element,
      s = n(this.options.id, this.$element[0]);
      (t.prop("title") || "string" != typeof t.prop("original-title")) && (t.prop("original-title", t.prop("title") || "").removeAttr("title"), t.attr("aria-describedby", s), t.attr("tabindex") === e && t.attr("tabindex", 0))
    },
    getTitle: function() {
      var t, e = this.$element,
      n = this.options;
      return this.fixTitle(), "string" == typeof n.title ? t = e.prop("title" == n.title ? "original-title" : n.title) : "function" == typeof n.title && (t = n.title.call(e[0])), t = ("" + t).replace(/(^\s*|\s*$)/, ""), t || n.fallback
    },
    tip: function() {
      var t = n(this.options.id, this.$element[0]);
      return this.$tip || (this.$tip = $('<div class="tipsy' + this.options.theme + '" id="' + t + '" role="tooltip"></div>').html('<div class="tipsy-arrow' + this.options.theme + '"></div><div class="tipsy-inner' + this.options.theme + '"></div>').attr("role", "tooltip"), this.$tip.data("tipsy-pointee", this.$element[0])), this.$tip
    },
    validate: function() {
      this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    },
    enable: function() {
      this.enabled = !0
    },
    disable: function() {
      this.enabled = !1
    },
    toggleEnabled: function() {
      this.enabled = !this.enabled
    }
  }, $.fn.tipsy = function(t) {
    function e(e) {
      var n = $.data(e, "tipsy");
      return n || (n = new o(e, $.fn.tipsy.elementOptions(e, t)), $.data(e, "tipsy", n)), n
    }

    function n() {
      if ($.fn.tipsy.enabled === !0) {
        var n = e(this);
        n.hoverState = "in", 0 === t.delayIn ? n.show() : (n.fixTitle(), setTimeout(function() {
          "in" == n.hoverState && s(n.$element) && n.show()
        }, t.delayIn))
      }
    }

    function i() {
      var n = e(this);
      n.hoverState = "out", 0 === t.delayOut ? n.hide() : setTimeout(function() {
        "out" != n.hoverState && n.$element && n.$element.is(":visible") || n.hide()
      }, t.delayOut)
    }
    if ($.fn.tipsy.enable(), t === !0) return this.data("tipsy");
    if ("string" == typeof t) {
      var r = this.data("tipsy");
      return r && r[t](), this
    }
    if (t = $.extend({}, $.fn.tipsy.defaults, t), t.theme = t.theme && "" !== t.theme ? "-" + t.theme : "", t.live || this.each(function() {
      e(this)
    }), "manual" != t.trigger)
    if (t.live && t.live !== !0) "focus" != t.trigger && ($(this).on("mouseenter", t.live, n), $(this).on("mouseleave", t.live, i)), "blur" != t.trigger && ($(this).on("focus", t.live, n), $(this).on("blur", t.live, i));
    else {
      if (t.live && !$.live) throw "Since jQuery 1.9, pass selector as live argument. eg. $(document).tipsy({live: 'a.live'});";
      var a = t.live ? "live" : "bind";
      "focus" != t.trigger && this[a]("mouseenter", n)[a]("mouseleave", i), "blur" != t.trigger && this[a]("focus", n)[a]("blur", i)
    }
    return this
  }, $.fn.tipsy.defaults = {
    aria: !1,
    className: null,
    id: "tipsy",
    delayIn: 0,
    delayOut: 0,
    fade: !1,
    fadeInTime: 400,
    fadeOutTime: 400,
    shadow: !1,
    shadowBlur: 8,
    shadowOpacity: 1,
    shadowSpread: 0,
    fallback: "",
    gravity: "n",
    html: !1,
    live: !1,
    offset: 0,
    opacity: .8,
    title: "title",
    trigger: "interactive",
    theme: ""
  }, $.fn.tipsy.revalidate = function() {
    $(".tipsy").each(function() {
      var t = $.data(this, "tipsy-pointee");
      t && s(t) || $(this).remove()
    })
  }, $.fn.tipsy.enable = function() {
    $.fn.tipsy.enabled = !0
  }, $.fn.tipsy.disable = function() {
    $.fn.tipsy.enabled = !1
  }, $.fn.tipsy.elementOptions = function(t, e) {
    return $.metadata ? $.extend({}, e, $(t).metadata()) : e
  }, $.fn.tipsy.autoNS = function() {
    return $(this).offset().top > $(document).scrollTop() + $(t).height() / 2 ? "s" : "n"
  }, $.fn.tipsy.autoWE = function() {
    return $(this).offset().left > $(document).scrollLeft() + $(t).width() / 2 ? "e" : "w"
  }, $.fn.tipsy.autoNWNE = function() {
    return $(this).offset().left > $(document).scrollLeft() + $(t).width() / 2 ? "ne" : "nw"
  }, $.fn.tipsy.autoSWSE = function() {
    return $(this).offset().left > $(document).scrollLeft() + $(t).width() / 2 ? "se" : "sw"
  }, $.fn.tipsy.autoBounds = function(e, n, s) {
    return function() {
      var i = {
        ns: s[0],
        ew: s.length > 1 ? s[1] : !1
      },
      r = $(document).scrollTop() + e,
      o = $(document).scrollLeft() + n,
      a = $(this);
      return a.offset().top < r && (i.ns = "n"), a.offset().left < o && (i.ew = "w"), $(t).width() + $(document).scrollLeft() - a.offset().left < n && (i.ew = "e"), $(t).height() + $(document).scrollTop() - a.offset().top < e && (i.ns = "s"), i.ns + (i.ew ? i.ew : "")
    }
  }, $.fn.tipsy.autoBounds2 = function(e, n) {
    return function() {
      var s = {},
      i = $(document).scrollTop() + e,
      r = $(document).scrollLeft() + e,
      o = $(this);
      return n.length > 1 ? (s.ns = n[0], s.ew = n[1]) : "e" == n[0] || "w" == n[0] ? s.ew = n[0] : s.ns = n[0], o.offset().top < i && (s.ns = "n"), o.offset().left < r && (s.ew = "w"), $(t).width() + $(document).scrollLeft() - (o.offset().left + o.width()) < e && (s.ew = "e"), $(t).height() + $(document).scrollTop() - (o.offset().top + o.height()) < e && (s.ns = "s"), s.ns ? s.ns + (s.ew ? s.ew : "") : s.ew
    }
  }
}(jQuery, window), ! function($) {
  "use strict";
  var t = function(t, e) {
    this.el = $(t), this.options = $.extend({}, $.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.build()
  };
  t.prototype = {
    constructor: t,
    init: function() {
      var t = this;
      t.timeout = setTimeout(function() {
        t.typewrite(t.strings[t.arrayPos], t.strPos)
      }, t.startDelay)
    },
    build: function() {
      this.showCursor === !0 && (this.cursor = $('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.init()
    },
    typewrite: function(t, e) {
      if (this.stop !== !0) {
        var n = Math.round(70 * Math.random()) + this.typeSpeed,
        s = this;
        s.timeout = setTimeout(function() {
          var n = 0,
          i = t.substr(e);
          if ("^" === i.charAt(0)) {
            var r = 1;
            /^\^\d+/.test(i) && (i = /\d+/.exec(i)[0], r += i.length, n = parseInt(i)), t = t.substring(0, e) + t.substring(e + r)
          }
          if ("html" === s.contentType && "<" === t.substr(e).charAt(0)) {
            for (var o = "";
            ">" !== t.substr(e).charAt(0);) o += t.substr(e).charAt(0), e++;
            e++, o += ">"
          }
          s.timeout = setTimeout(function() {
            if (e === t.length) {
              if (s.options.onStringTyped(s.arrayPos), s.arrayPos === s.strings.length - 1 && (s.options.callback(), s.curLoop++, s.loop === !1 || s.curLoop === s.loopCount)) return;
              s.timeout = setTimeout(function() {
                s.backspace(t, e)
              }, s.backDelay)
            } else {
              0 === e && s.options.preStringTyped(s.arrayPos);
              var n = s.elContent + t.substr(0, e + 1);
              s.attr ? s.el.attr(s.attr, n) : "html" === s.contentType ? s.el.html(n) : s.el.text(n), e++, s.typewrite(t, e)
            }
          }, n)
        }, n)
      }
    },
    backspace: function(t, e) {
      if (this.stop !== !0) {
        var n = Math.round(70 * Math.random()) + this.backSpeed,
        s = this;
        s.timeout = setTimeout(function() {
          if ("html" === s.contentType && ">" === t.substr(e).charAt(0)) {
            for (var n = "";
            "<" !== t.substr(e).charAt(0);) n -= t.substr(e).charAt(0), e--;
            e--, n += "<"
          }
          var i = s.elContent + t.substr(0, e);
          s.attr ? s.el.attr(s.attr, i) : "html" === s.contentType ? s.el.html(i) : s.el.text(i), e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.init()) : s.typewrite(s.strings[s.arrayPos], e))
        }, n)
      }
    },
    reset: function() {
      var t = this;
      clearInterval(t.timeout);
      var e = this.el.attr("id");
      this.el.after('<span id="' + e + '"/>'), this.el.remove(), this.cursor.remove(), t.options.resetCallback()
    }
  }, $.fn.typed = function(e) {
    return this.each(function() {
      var n = $(this),
      s = n.data("typed"),
      i = "object" == typeof e && e;
      s || n.data("typed", s = new t(this, i)), "string" == typeof e && s[e]()
    })
  }, $.fn.typed.defaults = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    backDelay: 500,
    loop: !1,
    loopCount: !1,
    showCursor: !0,
    cursorChar: "|",
    attr: null,
    contentType: "html",
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
  }
}(window.jQuery), $(window).resize(function() {
  adjustPadding()
}), $(function() {
  adjustPadding(), $(".tip").tipsy({
    delayIn: 0,
    delayOut: 5,
    fade: !0,
    gravity: "n",
    offset: 6
  }), $(".skills").typed({
    strings: ["Node.js", "Meteor", "JavaScript", "ASP.NET MVC", "Web API", "React", "Redux", "MongoDB", "SQL Server"],
    typeSpeed: 130,
    startDelay: 5e3,
    backDelay: 1300,
    backSpeed: 60,
    loop: !0
  })
});
