var Ji = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Lc = Ji((Zi) => {
  /*!
   * Vue.js v2.7.15
   * (c) 2014-2023 Evan You
   * Released under the MIT License.
   */
  var z = Object.freeze({}), E = Array.isArray;
  function b(e) {
    return e == null;
  }
  function l(e) {
    return e != null;
  }
  function I(e) {
    return e === !0;
  }
  function Qi(e) {
    return e === !1;
  }
  function le(e) {
    return typeof e == "string" || typeof e == "number" || // $flow-disable-line
    typeof e == "symbol" || typeof e == "boolean";
  }
  function A(e) {
    return typeof e == "function";
  }
  function H(e) {
    return e !== null && typeof e == "object";
  }
  var Vt = Object.prototype.toString;
  function dt(e) {
    return Vt.call(e).slice(8, -1);
  }
  function k(e) {
    return Vt.call(e) === "[object Object]";
  }
  function Xr(e) {
    return Vt.call(e) === "[object RegExp]";
  }
  function Kr(e) {
    var t = parseFloat(String(e));
    return t >= 0 && Math.floor(t) === t && isFinite(e);
  }
  function on(e) {
    return l(e) && typeof e.then == "function" && typeof e.catch == "function";
  }
  function eo(e) {
    return e == null ? "" : Array.isArray(e) || k(e) && e.toString === Vt ? JSON.stringify(e, null, 2) : String(e);
  }
  function ot(e) {
    var t = parseFloat(e);
    return isNaN(t) ? e : t;
  }
  function Y(e, t) {
    for (var n = /* @__PURE__ */ Object.create(null), r = e.split(","), i = 0; i < r.length; i++)
      n[r[i]] = !0;
    return t ? function(o) {
      return n[o.toLowerCase()];
    } : function(o) {
      return n[o];
    };
  }
  var to = Y("slot,component", !0), Zr = Y("key,ref,slot,slot-scope,is");
  function Ee(e, t) {
    var n = e.length;
    if (n) {
      if (t === e[n - 1]) {
        e.length = n - 1;
        return;
      }
      var r = e.indexOf(t);
      if (r > -1)
        return e.splice(r, 1);
    }
  }
  var no = Object.prototype.hasOwnProperty;
  function F(e, t) {
    return no.call(e, t);
  }
  function Fe(e) {
    var t = /* @__PURE__ */ Object.create(null);
    return function(r) {
      var i = t[r];
      return i || (t[r] = e(r));
    };
  }
  var ro = /-(\w)/g, Me = Fe(function(e) {
    return e.replace(ro, function(t, n) {
      return n ? n.toUpperCase() : "";
    });
  }), Jr = Fe(function(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }), io = /\B([A-Z])/g, He = Fe(function(e) {
    return e.replace(io, "-$1").toLowerCase();
  });
  function oo(e, t) {
    function n(r) {
      var i = arguments.length;
      return i ? i > 1 ? e.apply(t, arguments) : e.call(t, r) : e.call(t);
    }
    return n._length = e.length, n;
  }
  function ao(e, t) {
    return e.bind(t);
  }
  var Qr = Function.prototype.bind ? ao : oo;
  function an(e, t) {
    t = t || 0;
    for (var n = e.length - t, r = new Array(n); n--; )
      r[n] = e[n + t];
    return r;
  }
  function x(e, t) {
    for (var n in t)
      e[n] = t[n];
    return e;
  }
  function ei(e) {
    for (var t = {}, n = 0; n < e.length; n++)
      e[n] && x(t, e[n]);
    return t;
  }
  function j(e, t, n) {
  }
  var _t = function(e, t, n) {
    return !1;
  }, ti = function(e) {
    return e;
  };
  function je(e, t) {
    if (e === t)
      return !0;
    var n = H(e), r = H(t);
    if (n && r)
      try {
        var i = Array.isArray(e), o = Array.isArray(t);
        if (i && o)
          return e.length === t.length && e.every(function(c, p) {
            return je(c, t[p]);
          });
        if (e instanceof Date && t instanceof Date)
          return e.getTime() === t.getTime();
        if (!i && !o) {
          var a = Object.keys(e), s = Object.keys(t);
          return a.length === s.length && a.every(function(c) {
            return je(e[c], t[c]);
          });
        } else
          return !1;
      } catch {
        return !1;
      }
    else
      return !n && !r ? String(e) === String(t) : !1;
  }
  function ni(e, t) {
    for (var n = 0; n < e.length; n++)
      if (je(e[n], t))
        return n;
    return -1;
  }
  function At(e) {
    var t = !1;
    return function() {
      t || (t = !0, e.apply(this, arguments));
    };
  }
  function so(e, t) {
    return e === t ? e === 0 && 1 / e !== 1 / t : e === e || t === t;
  }
  var Kn = "data-server-rendered", Gt = ["component", "directive", "filter"], ri = [
    "beforeCreate",
    "created",
    "beforeMount",
    "mounted",
    "beforeUpdate",
    "updated",
    "beforeDestroy",
    "destroyed",
    "activated",
    "deactivated",
    "errorCaptured",
    "serverPrefetch",
    "renderTracked",
    "renderTriggered"
  ], T = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: /* @__PURE__ */ Object.create(null),
    /**
     * Whether to suppress warnings.
     */
    silent: !1,
    /**
     * Show production mode tip message on boot?
     */
    productionTip: process.env.NODE_ENV !== "production",
    /**
     * Whether to enable devtools
     */
    devtools: process.env.NODE_ENV !== "production",
    /**
     * Whether to record perf
     */
    performance: !1,
    /**
     * Error handler for watcher errors
     */
    errorHandler: null,
    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,
    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],
    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: /* @__PURE__ */ Object.create(null),
    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: _t,
    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: _t,
    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: _t,
    /**
     * Get the namespace of an element
     */
    getTagNamespace: j,
    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: ti,
    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: _t,
    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: !0,
    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: ri
  }, ii = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
  function Cn(e) {
    var t = (e + "").charCodeAt(0);
    return t === 36 || t === 95;
  }
  function me(e, t, n, r) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !!r,
      writable: !0,
      configurable: !0
    });
  }
  var co = new RegExp("[^".concat(ii.source, ".$_\\d]"));
  function fo(e) {
    if (!co.test(e)) {
      var t = e.split(".");
      return function(n) {
        for (var r = 0; r < t.length; r++) {
          if (!n)
            return;
          n = n[t[r]];
        }
        return n;
      };
    }
  }
  var uo = "__proto__" in {}, B = typeof window < "u", Z = B && window.navigator.userAgent.toLowerCase(), Xe = Z && /msie|trident/.test(Z), Ke = Z && Z.indexOf("msie 9.0") > 0, oi = Z && Z.indexOf("edge/") > 0;
  Z && Z.indexOf("android") > 0;
  var lo = Z && /iphone|ipad|ipod|ios/.test(Z), Zn = Z && Z.match(/firefox\/(\d+)/), sn = {}.watch, ai = !1;
  if (B)
    try {
      var Jn = {};
      Object.defineProperty(Jn, "passive", {
        get: function() {
          ai = !0;
        }
      }), window.addEventListener("test-passive", null, Jn);
    } catch {
    }
  var yt, vt = function() {
    return yt === void 0 && (!B && typeof global < "u" ? yt = global.process && global.process.env.VUE_ENV === "server" : yt = !1), yt;
  }, It = B && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
  function xe(e) {
    return typeof e == "function" && /native code/.test(e.toString());
  }
  var ht = typeof Symbol < "u" && xe(Symbol) && typeof Reflect < "u" && xe(Reflect.ownKeys), at;
  typeof Set < "u" && xe(Set) ? at = Set : at = /** @class */
  function() {
    function e() {
      this.set = /* @__PURE__ */ Object.create(null);
    }
    return e.prototype.has = function(t) {
      return this.set[t] === !0;
    }, e.prototype.add = function(t) {
      this.set[t] = !0;
    }, e.prototype.clear = function() {
      this.set = /* @__PURE__ */ Object.create(null);
    }, e;
  }();
  var qe = null;
  function ge(e) {
    e === void 0 && (e = null), e || qe && qe._scope.off(), qe = e, e && e._scope.on();
  }
  var U = (
    /** @class */
    function() {
      function e(t, n, r, i, o, a, s, c) {
        this.tag = t, this.data = n, this.children = r, this.text = i, this.elm = o, this.ns = void 0, this.context = a, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = n && n.key, this.componentOptions = s, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = c, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
      }
      return Object.defineProperty(e.prototype, "child", {
        // DEPRECATED: alias for componentInstance for backwards compat.
        /* istanbul ignore next */
        get: function() {
          return this.componentInstance;
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }()
  ), Ae = function(e) {
    e === void 0 && (e = "");
    var t = new U();
    return t.text = e, t.isComment = !0, t;
  };
  function Be(e) {
    return new U(void 0, void 0, void 0, String(e));
  }
  function cn(e) {
    var t = new U(
      e.tag,
      e.data,
      // #7975
      // clone children array to avoid mutating original in case of cloning
      // a child.
      e.children && e.children.slice(),
      e.text,
      e.elm,
      e.context,
      e.componentOptions,
      e.asyncFactory
    );
    return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
  }
  var Pt = function() {
    return Pt = Object.assign || function(t) {
      for (var n, r = 1, i = arguments.length; r < i; r++) {
        n = arguments[r];
        for (var o in n)
          Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
      return t;
    }, Pt.apply(this, arguments);
  }, po = 0, $t = [], vo = function() {
    for (var e = 0; e < $t.length; e++) {
      var t = $t[e];
      t.subs = t.subs.filter(function(n) {
        return n;
      }), t._pending = !1;
    }
    $t.length = 0;
  }, Q = (
    /** @class */
    function() {
      function e() {
        this._pending = !1, this.id = po++, this.subs = [];
      }
      return e.prototype.addSub = function(t) {
        this.subs.push(t);
      }, e.prototype.removeSub = function(t) {
        this.subs[this.subs.indexOf(t)] = null, this._pending || (this._pending = !0, $t.push(this));
      }, e.prototype.depend = function(t) {
        e.target && (e.target.addDep(this), process.env.NODE_ENV !== "production" && t && e.target.onTrack && e.target.onTrack(Pt({ effect: e.target }, t)));
      }, e.prototype.notify = function(t) {
        var n = this.subs.filter(function(a) {
          return a;
        });
        process.env.NODE_ENV !== "production" && !T.async && n.sort(function(a, s) {
          return a.id - s.id;
        });
        for (var r = 0, i = n.length; r < i; r++) {
          var o = n[r];
          process.env.NODE_ENV !== "production" && t && o.onTrigger && o.onTrigger(Pt({ effect: n[r] }, t)), o.update();
        }
      }, e;
    }()
  );
  Q.target = null;
  var Dt = [];
  function Ze(e) {
    Dt.push(e), Q.target = e;
  }
  function Je() {
    Dt.pop(), Q.target = Dt[Dt.length - 1];
  }
  var si = Array.prototype, Mt = Object.create(si), ho = [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse"
  ];
  ho.forEach(function(e) {
    var t = si[e];
    me(Mt, e, function() {
      for (var r = [], i = 0; i < arguments.length; i++)
        r[i] = arguments[i];
      var o = t.apply(this, r), a = this.__ob__, s;
      switch (e) {
        case "push":
        case "unshift":
          s = r;
          break;
        case "splice":
          s = r.slice(2);
          break;
      }
      return s && a.observeArray(s), process.env.NODE_ENV !== "production" ? a.dep.notify({
        type: "array mutation",
        target: this,
        key: e
      }) : a.dep.notify(), o;
    });
  });
  var Qn = Object.getOwnPropertyNames(Mt), ci = {}, $n = !0;
  function _e(e) {
    $n = e;
  }
  var mo = {
    notify: j,
    depend: j,
    addSub: j,
    removeSub: j
  }, er = (
    /** @class */
    function() {
      function e(t, n, r) {
        if (n === void 0 && (n = !1), r === void 0 && (r = !1), this.value = t, this.shallow = n, this.mock = r, this.dep = r ? mo : new Q(), this.vmCount = 0, me(t, "__ob__", this), E(t)) {
          if (!r)
            if (uo)
              t.__proto__ = Mt;
            else
              for (var i = 0, o = Qn.length; i < o; i++) {
                var a = Qn[i];
                me(t, a, Mt[a]);
              }
          n || this.observeArray(t);
        } else
          for (var s = Object.keys(t), i = 0; i < s.length; i++) {
            var a = s[i];
            ee(t, a, ci, void 0, n, r);
          }
      }
      return e.prototype.observeArray = function(t) {
        for (var n = 0, r = t.length; n < r; n++)
          ue(t[n], !1, this.mock);
      }, e;
    }()
  );
  function ue(e, t, n) {
    if (e && F(e, "__ob__") && e.__ob__ instanceof er)
      return e.__ob__;
    if ($n && (n || !vt()) && (E(e) || k(e)) && Object.isExtensible(e) && !e.__v_skip && !re(e) && !(e instanceof U))
      return new er(e, t, n);
  }
  function ee(e, t, n, r, i, o) {
    var a = new Q(), s = Object.getOwnPropertyDescriptor(e, t);
    if (!(s && s.configurable === !1)) {
      var c = s && s.get, p = s && s.set;
      (!c || p) && (n === ci || arguments.length === 2) && (n = e[t]);
      var v = !i && ue(n, !1, o);
      return Object.defineProperty(e, t, {
        enumerable: !0,
        configurable: !0,
        get: function() {
          var _ = c ? c.call(e) : n;
          return Q.target && (process.env.NODE_ENV !== "production" ? a.depend({
            target: e,
            type: "get",
            key: t
          }) : a.depend(), v && (v.dep.depend(), E(_) && ui(_))), re(_) && !i ? _.value : _;
        },
        set: function(_) {
          var w = c ? c.call(e) : n;
          if (so(w, _)) {
            if (process.env.NODE_ENV !== "production" && r && r(), p)
              p.call(e, _);
            else {
              if (c)
                return;
              if (!i && re(w) && !re(_)) {
                w.value = _;
                return;
              } else
                n = _;
            }
            v = !i && ue(_, !1, o), process.env.NODE_ENV !== "production" ? a.notify({
              type: "set",
              target: e,
              key: t,
              newValue: _,
              oldValue: w
            }) : a.notify();
          }
        }
      }), a;
    }
  }
  function Dn(e, t, n) {
    if (process.env.NODE_ENV !== "production" && (b(e) || le(e)) && h("Cannot set reactive property on undefined, null, or primitive value: ".concat(e)), Sn(e)) {
      process.env.NODE_ENV !== "production" && h('Set operation on key "'.concat(t, '" failed: target is readonly.'));
      return;
    }
    var r = e.__ob__;
    return E(e) && Kr(t) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), r && !r.shallow && r.mock && ue(n, !1, !0), n) : t in e && !(t in Object.prototype) ? (e[t] = n, n) : e._isVue || r && r.vmCount ? (process.env.NODE_ENV !== "production" && h("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), n) : r ? (ee(r.value, t, n, void 0, r.shallow, r.mock), process.env.NODE_ENV !== "production" ? r.dep.notify({
      type: "add",
      target: e,
      key: t,
      newValue: n,
      oldValue: void 0
    }) : r.dep.notify(), n) : (e[t] = n, n);
  }
  function fi(e, t) {
    if (process.env.NODE_ENV !== "production" && (b(e) || le(e)) && h("Cannot delete reactive property on undefined, null, or primitive value: ".concat(e)), E(e) && Kr(t)) {
      e.splice(t, 1);
      return;
    }
    var n = e.__ob__;
    if (e._isVue || n && n.vmCount) {
      process.env.NODE_ENV !== "production" && h("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
      return;
    }
    if (Sn(e)) {
      process.env.NODE_ENV !== "production" && h('Delete operation on key "'.concat(t, '" failed: target is readonly.'));
      return;
    }
    F(e, t) && (delete e[t], n && (process.env.NODE_ENV !== "production" ? n.dep.notify({
      type: "delete",
      target: e,
      key: t
    }) : n.dep.notify()));
  }
  function ui(e) {
    for (var t = void 0, n = 0, r = e.length; n < r; n++)
      t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), E(t) && ui(t);
  }
  function li(e) {
    return go(e, !0), me(e, "__v_isShallow", !0), e;
  }
  function go(e, t) {
    if (!Sn(e)) {
      if (process.env.NODE_ENV !== "production") {
        E(e) && h("Avoid using Array as root value for ".concat(t ? "shallowReactive()" : "reactive()", " as it cannot be tracked in watch() or watchEffect(). Use ").concat(t ? "shallowRef()" : "ref()", " instead. This is a Vue-2-only limitation."));
        var n = e && e.__ob__;
        n && n.shallow !== t && h("Target is already a ".concat(n.shallow ? "" : "non-", "shallow reactive object, and cannot be converted to ").concat(t ? "" : "non-", "shallow."));
      }
      var r = ue(
        e,
        t,
        vt()
        /* ssr mock reactivity */
      );
      process.env.NODE_ENV !== "production" && !r && ((e == null || le(e)) && h("value cannot be made reactive: ".concat(String(e))), _o(e) && h("Vue 2 does not support reactive collection types such as Map or Set."));
    }
  }
  function Sn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function _o(e) {
    var t = dt(e);
    return t === "Map" || t === "WeakMap" || t === "Set" || t === "WeakSet";
  }
  function re(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function fn(e, t, n) {
    Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var r = t[n];
        if (re(r))
          return r.value;
        var i = r && r.__ob__;
        return i && i.dep.depend(), r;
      },
      set: function(r) {
        var i = t[n];
        re(i) && !re(r) ? i.value = r : t[n] = r;
      }
    });
  }
  var W, yo = (
    /** @class */
    function() {
      function e(t) {
        t === void 0 && (t = !1), this.detached = t, this.active = !0, this.effects = [], this.cleanups = [], this.parent = W, !t && W && (this.index = (W.scopes || (W.scopes = [])).push(this) - 1);
      }
      return e.prototype.run = function(t) {
        if (this.active) {
          var n = W;
          try {
            return W = this, t();
          } finally {
            W = n;
          }
        } else
          process.env.NODE_ENV !== "production" && h("cannot run an inactive effect scope.");
      }, e.prototype.on = function() {
        W = this;
      }, e.prototype.off = function() {
        W = this.parent;
      }, e.prototype.stop = function(t) {
        if (this.active) {
          var n = void 0, r = void 0;
          for (n = 0, r = this.effects.length; n < r; n++)
            this.effects[n].teardown();
          for (n = 0, r = this.cleanups.length; n < r; n++)
            this.cleanups[n]();
          if (this.scopes)
            for (n = 0, r = this.scopes.length; n < r; n++)
              this.scopes[n].stop(!0);
          if (!this.detached && this.parent && !t) {
            var i = this.parent.scopes.pop();
            i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
          }
          this.parent = void 0, this.active = !1;
        }
      }, e;
    }()
  );
  function bo(e, t) {
    t === void 0 && (t = W), t && t.active && t.effects.push(e);
  }
  function Eo() {
    return W;
  }
  function No(e) {
    var t = e._provided, n = e.$parent && e.$parent._provided;
    return n === t ? e._provided = Object.create(n) : t;
  }
  var tr = Fe(function(e) {
    var t = e.charAt(0) === "&";
    e = t ? e.slice(1) : e;
    var n = e.charAt(0) === "~";
    e = n ? e.slice(1) : e;
    var r = e.charAt(0) === "!";
    return e = r ? e.slice(1) : e, {
      name: e,
      once: n,
      capture: r,
      passive: t
    };
  });
  function un(e, t) {
    function n() {
      var r = n.fns;
      if (E(r))
        for (var i = r.slice(), o = 0; o < i.length; o++)
          be(i[o], null, arguments, t, "v-on handler");
      else
        return be(r, null, arguments, t, "v-on handler");
    }
    return n.fns = e, n;
  }
  function pi(e, t, n, r, i, o) {
    var a, s, c, p;
    for (a in e)
      s = e[a], c = t[a], p = tr(a), b(s) ? process.env.NODE_ENV !== "production" && h('Invalid handler for event "'.concat(p.name, '": got ') + String(s), o) : b(c) ? (b(s.fns) && (s = e[a] = un(s, o)), I(p.once) && (s = e[a] = i(p.name, s, p.capture)), n(p.name, s, p.capture, p.passive, p.params)) : s !== c && (c.fns = s, e[a] = c);
    for (a in t)
      b(e[a]) && (p = tr(a), r(p.name, t[a], p.capture));
  }
  function ve(e, t, n) {
    e instanceof U && (e = e.data.hook || (e.data.hook = {}));
    var r, i = e[t];
    function o() {
      n.apply(this, arguments), Ee(r.fns, o);
    }
    b(i) ? r = un([o]) : l(i.fns) && I(i.merged) ? (r = i, r.fns.push(o)) : r = un([i, o]), r.merged = !0, e[t] = r;
  }
  function Oo(e, t, n) {
    var r = t.options.props;
    if (!b(r)) {
      var i = {}, o = e.attrs, a = e.props;
      if (l(o) || l(a))
        for (var s in r) {
          var c = He(s);
          if (process.env.NODE_ENV !== "production") {
            var p = s.toLowerCase();
            s !== p && o && F(o, p) && Hn('Prop "'.concat(p, '" is passed to component ') + "".concat(Te(
              // @ts-expect-error tag is string
              n || t
            ), ", but the declared prop name is") + ' "'.concat(s, '". ') + "Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM " + 'templates. You should probably use "'.concat(c, '" instead of "').concat(s, '".'));
          }
          nr(i, a, s, c, !0) || nr(i, o, s, c, !1);
        }
      return i;
    }
  }
  function nr(e, t, n, r, i) {
    if (l(t)) {
      if (F(t, n))
        return e[n] = t[n], i || delete t[n], !0;
      if (F(t, r))
        return e[n] = t[r], i || delete t[r], !0;
    }
    return !1;
  }
  function wo(e) {
    for (var t = 0; t < e.length; t++)
      if (E(e[t]))
        return Array.prototype.concat.apply([], e);
    return e;
  }
  function Tn(e) {
    return le(e) ? [Be(e)] : E(e) ? di(e) : void 0;
  }
  function et(e) {
    return l(e) && l(e.text) && Qi(e.isComment);
  }
  function di(e, t) {
    var n = [], r, i, o, a;
    for (r = 0; r < e.length; r++)
      i = e[r], !(b(i) || typeof i == "boolean") && (o = n.length - 1, a = n[o], E(i) ? i.length > 0 && (i = di(i, "".concat(t || "", "_").concat(r)), et(i[0]) && et(a) && (n[o] = Be(a.text + i[0].text), i.shift()), n.push.apply(n, i)) : le(i) ? et(a) ? n[o] = Be(a.text + i) : i !== "" && n.push(Be(i)) : et(i) && et(a) ? n[o] = Be(a.text + i.text) : (I(e._isVList) && l(i.tag) && b(i.key) && l(t) && (i.key = "__vlist".concat(t, "_").concat(r, "__")), n.push(i)));
    return n;
  }
  function Co(e, t) {
    var n = null, r, i, o, a;
    if (E(e) || typeof e == "string")
      for (n = new Array(e.length), r = 0, i = e.length; r < i; r++)
        n[r] = t(e[r], r);
    else if (typeof e == "number")
      for (n = new Array(e), r = 0; r < e; r++)
        n[r] = t(r + 1, r);
    else if (H(e))
      if (ht && e[Symbol.iterator]) {
        n = [];
        for (var s = e[Symbol.iterator](), c = s.next(); !c.done; )
          n.push(t(c.value, n.length)), c = s.next();
      } else
        for (o = Object.keys(e), n = new Array(o.length), r = 0, i = o.length; r < i; r++)
          a = o[r], n[r] = t(e[a], a, r);
    return l(n) || (n = []), n._isVList = !0, n;
  }
  function $o(e, t, n, r) {
    var i = this.$scopedSlots[e], o;
    i ? (n = n || {}, r && (process.env.NODE_ENV !== "production" && !H(r) && h("slot v-bind without argument expects an Object", this), n = x(x({}, r), n)), o = i(n) || (A(t) ? t() : t)) : o = this.$slots[e] || (A(t) ? t() : t);
    var a = n && n.slot;
    return a ? this.$createElement("template", { slot: a }, o) : o;
  }
  function Do(e) {
    return Rt(this.$options, "filters", e, !0) || ti;
  }
  function rr(e, t) {
    return E(e) ? e.indexOf(t) === -1 : e !== t;
  }
  function So(e, t, n, r, i) {
    var o = T.keyCodes[t] || n;
    return i && r && !T.keyCodes[t] ? rr(i, r) : o ? rr(o, e) : r ? He(r) !== t : e === void 0;
  }
  function To(e, t, n, r, i) {
    if (n)
      if (!H(n))
        process.env.NODE_ENV !== "production" && h("v-bind without argument expects an Object or Array value", this);
      else {
        E(n) && (n = ei(n));
        var o = void 0, a = function(c) {
          if (c === "class" || c === "style" || Zr(c))
            o = e;
          else {
            var p = e.attrs && e.attrs.type;
            o = r || T.mustUseProp(t, p, c) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
          }
          var v = Me(c), m = He(c);
          if (!(v in o) && !(m in o) && (o[c] = n[c], i)) {
            var _ = e.on || (e.on = {});
            _["update:".concat(c)] = function(w) {
              n[c] = w;
            };
          }
        };
        for (var s in n)
          a(s);
      }
    return e;
  }
  function xo(e, t) {
    var n = this._staticTrees || (this._staticTrees = []), r = n[e];
    return r && !t || (r = n[e] = this.$options.staticRenderFns[e].call(
      this._renderProxy,
      this._c,
      this
      // for render fns generated for functional component templates
    ), vi(r, "__static__".concat(e), !1)), r;
  }
  function Ao(e, t, n) {
    return vi(e, "__once__".concat(t).concat(n ? "_".concat(n) : ""), !0), e;
  }
  function vi(e, t, n) {
    if (E(e))
      for (var r = 0; r < e.length; r++)
        e[r] && typeof e[r] != "string" && ir(e[r], "".concat(t, "_").concat(r), n);
    else
      ir(e, t, n);
  }
  function ir(e, t, n) {
    e.isStatic = !0, e.key = t, e.isOnce = n;
  }
  function Io(e, t) {
    if (t)
      if (!k(t))
        process.env.NODE_ENV !== "production" && h("v-on without argument expects an Object value", this);
      else {
        var n = e.on = e.on ? x({}, e.on) : {};
        for (var r in t) {
          var i = n[r], o = t[r];
          n[r] = i ? [].concat(i, o) : o;
        }
      }
    return e;
  }
  function hi(e, t, n, r) {
    t = t || { $stable: !n };
    for (var i = 0; i < e.length; i++) {
      var o = e[i];
      E(o) ? hi(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn);
    }
    return r && (t.$key = r), t;
  }
  function Po(e, t) {
    for (var n = 0; n < t.length; n += 2) {
      var r = t[n];
      typeof r == "string" && r ? e[t[n]] = t[n + 1] : process.env.NODE_ENV !== "production" && r !== "" && r !== null && h("Invalid value for dynamic directive argument (expected string or null): ".concat(r), this);
    }
    return e;
  }
  function Mo(e, t) {
    return typeof e == "string" ? t + e : e;
  }
  function mi(e) {
    e._o = Ao, e._n = ot, e._s = eo, e._l = Co, e._t = $o, e._q = je, e._i = ni, e._m = xo, e._f = Do, e._k = So, e._b = To, e._v = Be, e._e = Ae, e._u = hi, e._g = Io, e._d = Po, e._p = Mo;
  }
  function xn(e, t) {
    if (!e || !e.length)
      return {};
    for (var n = {}, r = 0, i = e.length; r < i; r++) {
      var o = e[r], a = o.data;
      if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, (o.context === t || o.fnContext === t) && a && a.slot != null) {
        var s = a.slot, c = n[s] || (n[s] = []);
        o.tag === "template" ? c.push.apply(c, o.children || []) : c.push(o);
      } else
        (n.default || (n.default = [])).push(o);
    }
    for (var p in n)
      n[p].every(jo) && delete n[p];
    return n;
  }
  function jo(e) {
    return e.isComment && !e.asyncFactory || e.text === " ";
  }
  function st(e) {
    return e.isComment && e.asyncFactory;
  }
  function it(e, t, n, r) {
    var i, o = Object.keys(n).length > 0, a = t ? !!t.$stable : !o, s = t && t.$key;
    if (!t)
      i = {};
    else {
      if (t._normalized)
        return t._normalized;
      if (a && r && r !== z && s === r.$key && !o && !r.$hasNormal)
        return r;
      i = {};
      for (var c in t)
        t[c] && c[0] !== "$" && (i[c] = Lo(e, n, c, t[c]));
    }
    for (var p in n)
      p in i || (i[p] = Fo(n, p));
    return t && Object.isExtensible(t) && (t._normalized = i), me(i, "$stable", a), me(i, "$key", s), me(i, "$hasNormal", o), i;
  }
  function Lo(e, t, n, r) {
    var i = function() {
      var o = qe;
      ge(e);
      var a = arguments.length ? r.apply(null, arguments) : r({});
      a = a && typeof a == "object" && !E(a) ? [a] : Tn(a);
      var s = a && a[0];
      return ge(o), a && (!s || a.length === 1 && s.isComment && !st(s)) ? void 0 : a;
    };
    return r.proxy && Object.defineProperty(t, n, {
      get: i,
      enumerable: !0,
      configurable: !0
    }), i;
  }
  function Fo(e, t) {
    return function() {
      return e[t];
    };
  }
  function Ho(e) {
    var t = e.$options, n = t.setup;
    if (n) {
      var r = e._setupContext = Ro(e);
      ge(e), Ze();
      var i = be(n, null, [e._props || li({}), r], e, "setup");
      if (Je(), ge(), A(i))
        t.render = i;
      else if (H(i))
        if (process.env.NODE_ENV !== "production" && i instanceof U && h("setup() should not return VNodes directly - return a render function instead."), e._setupState = i, i.__sfc) {
          var a = e._setupProxy = {};
          for (var o in i)
            o !== "__sfc" && fn(a, i, o);
        } else
          for (var o in i)
            Cn(o) ? process.env.NODE_ENV !== "production" && h("Avoid using variables that start with _ or $ in setup().") : fn(e, i, o);
      else
        process.env.NODE_ENV !== "production" && i !== void 0 && h("setup() should return an object. Received: ".concat(i === null ? "null" : typeof i));
    }
  }
  function Ro(e) {
    var t = !1;
    return {
      get attrs() {
        if (!e._attrsProxy) {
          var n = e._attrsProxy = {};
          me(n, "_v_attr_proxy", !0), jt(n, e.$attrs, z, e, "$attrs");
        }
        return e._attrsProxy;
      },
      get listeners() {
        if (!e._listenersProxy) {
          var n = e._listenersProxy = {};
          jt(n, e.$listeners, z, e, "$listeners");
        }
        return e._listenersProxy;
      },
      get slots() {
        return ko(e);
      },
      emit: Qr(e.$emit, e),
      expose: function(n) {
        process.env.NODE_ENV !== "production" && (t && h("expose() should be called only once per setup().", e), t = !0), n && Object.keys(n).forEach(function(r) {
          return fn(e, n, r);
        });
      }
    };
  }
  function jt(e, t, n, r, i) {
    var o = !1;
    for (var a in t)
      a in e ? t[a] !== n[a] && (o = !0) : (o = !0, zo(e, a, r, i));
    for (var a in e)
      a in t || (o = !0, delete e[a]);
    return o;
  }
  function zo(e, t, n, r) {
    Object.defineProperty(e, t, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return n[r][t];
      }
    });
  }
  function ko(e) {
    return e._slotsProxy || gi(e._slotsProxy = {}, e.$scopedSlots), e._slotsProxy;
  }
  function gi(e, t) {
    for (var n in t)
      e[n] = t[n];
    for (var n in e)
      n in t || delete e[n];
  }
  function Wo(e) {
    e._vnode = null, e._staticTrees = null;
    var t = e.$options, n = e.$vnode = t._parentVnode, r = n && n.context;
    e.$slots = xn(t._renderChildren, r), e.$scopedSlots = n ? it(e.$parent, n.data.scopedSlots, e.$slots) : z, e._c = function(o, a, s, c) {
      return Lt(e, o, a, s, c, !1);
    }, e.$createElement = function(o, a, s, c) {
      return Lt(e, o, a, s, c, !0);
    };
    var i = n && n.data;
    process.env.NODE_ENV !== "production" ? (ee(e, "$attrs", i && i.attrs || z, function() {
      !ft && h("$attrs is readonly.", e);
    }, !0), ee(e, "$listeners", t._parentListeners || z, function() {
      !ft && h("$listeners is readonly.", e);
    }, !0)) : (ee(e, "$attrs", i && i.attrs || z, null, !0), ee(e, "$listeners", t._parentListeners || z, null, !0));
  }
  var ln = null;
  function Uo(e) {
    mi(e.prototype), e.prototype.$nextTick = function(t) {
      return An(t, this);
    }, e.prototype._render = function() {
      var t = this, n = t.$options, r = n.render, i = n._parentVnode;
      i && t._isMounted && (t.$scopedSlots = it(t.$parent, i.data.scopedSlots, t.$slots, t.$scopedSlots), t._slotsProxy && gi(t._slotsProxy, t.$scopedSlots)), t.$vnode = i;
      var o;
      try {
        ge(t), ln = t, o = r.call(t._renderProxy, t.$createElement);
      } catch (a) {
        if (ye(a, t, "render"), process.env.NODE_ENV !== "production" && t.$options.renderError)
          try {
            o = t.$options.renderError.call(t._renderProxy, t.$createElement, a);
          } catch (s) {
            ye(s, t, "renderError"), o = t._vnode;
          }
        else
          o = t._vnode;
      } finally {
        ln = null, ge();
      }
      return E(o) && o.length === 1 && (o = o[0]), o instanceof U || (process.env.NODE_ENV !== "production" && E(o) && h("Multiple root nodes returned from render function. Render function should return a single root node.", t), o = Ae()), o.parent = i, o;
    };
  }
  function Yt(e, t) {
    return (e.__esModule || ht && e[Symbol.toStringTag] === "Module") && (e = e.default), H(e) ? t.extend(e) : e;
  }
  function Bo(e, t, n, r, i) {
    var o = Ae();
    return o.asyncFactory = e, o.asyncMeta = { data: t, context: n, children: r, tag: i }, o;
  }
  function Vo(e, t) {
    if (I(e.error) && l(e.errorComp))
      return e.errorComp;
    if (l(e.resolved))
      return e.resolved;
    var n = ln;
    if (n && l(e.owners) && e.owners.indexOf(n) === -1 && e.owners.push(n), I(e.loading) && l(e.loadingComp))
      return e.loadingComp;
    if (n && !l(e.owners)) {
      var r = e.owners = [n], i = !0, o = null, a = null;
      n.$on("hook:destroyed", function() {
        return Ee(r, n);
      });
      var s = function(m) {
        for (var _ = 0, w = r.length; _ < w; _++)
          r[_].$forceUpdate();
        m && (r.length = 0, o !== null && (clearTimeout(o), o = null), a !== null && (clearTimeout(a), a = null));
      }, c = At(function(m) {
        e.resolved = Yt(m, t), i ? r.length = 0 : s(!0);
      }), p = At(function(m) {
        process.env.NODE_ENV !== "production" && h("Failed to resolve async component: ".concat(String(e)) + (m ? `
Reason: `.concat(m) : "")), l(e.errorComp) && (e.error = !0, s(!0));
      }), v = e(c, p);
      return H(v) && (on(v) ? b(e.resolved) && v.then(c, p) : on(v.component) && (v.component.then(c, p), l(v.error) && (e.errorComp = Yt(v.error, t)), l(v.loading) && (e.loadingComp = Yt(v.loading, t), v.delay === 0 ? e.loading = !0 : o = setTimeout(function() {
        o = null, b(e.resolved) && b(e.error) && (e.loading = !0, s(!1));
      }, v.delay || 200)), l(v.timeout) && (a = setTimeout(function() {
        a = null, b(e.resolved) && p(process.env.NODE_ENV !== "production" ? "timeout (".concat(v.timeout, "ms)") : null);
      }, v.timeout)))), i = !1, e.loading ? e.loadingComp : e.resolved;
    }
  }
  function _i(e) {
    if (E(e))
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (l(n) && (l(n.componentOptions) || st(n)))
          return n;
      }
  }
  var Go = 1, yi = 2;
  function Lt(e, t, n, r, i, o) {
    return (E(n) || le(n)) && (i = r, r = n, n = void 0), I(o) && (i = yi), qo(e, t, n, r, i);
  }
  function qo(e, t, n, r, i) {
    if (l(n) && l(n.__ob__))
      return process.env.NODE_ENV !== "production" && h("Avoid using observed data object as vnode data: ".concat(JSON.stringify(n), `
`) + "Always create fresh vnode data objects in each render!", e), Ae();
    if (l(n) && l(n.is) && (t = n.is), !t)
      return Ae();
    process.env.NODE_ENV !== "production" && l(n) && l(n.key) && !le(n.key) && h("Avoid using non-primitive value as key, use string/number value instead.", e), E(r) && A(r[0]) && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), i === yi ? r = Tn(r) : i === Go && (r = wo(r));
    var o, a;
    if (typeof t == "string") {
      var s = void 0;
      a = e.$vnode && e.$vnode.ns || T.getTagNamespace(t), T.isReservedTag(t) ? (process.env.NODE_ENV !== "production" && l(n) && l(n.nativeOn) && n.tag !== "component" && h("The .native modifier for v-on is only valid on components but it was used on <".concat(t, ">."), e), o = new U(T.parsePlatformTagName(t), n, r, void 0, void 0, e)) : (!n || !n.pre) && l(s = Rt(e.$options, "components", t)) ? o = dr(s, n, e, r, t) : o = new U(t, n, r, void 0, void 0, e);
    } else
      o = dr(t, n, e, r);
    return E(o) ? o : l(o) ? (l(a) && bi(o, a), l(n) && Yo(n), o) : Ae();
  }
  function bi(e, t, n) {
    if (e.ns = t, e.tag === "foreignObject" && (t = void 0, n = !0), l(e.children))
      for (var r = 0, i = e.children.length; r < i; r++) {
        var o = e.children[r];
        l(o.tag) && (b(o.ns) || I(n) && o.tag !== "svg") && bi(o, t, n);
      }
  }
  function Yo(e) {
    H(e.style) && Ft(e.style), H(e.class) && Ft(e.class);
  }
  function ye(e, t, n) {
    Ze();
    try {
      if (t)
        for (var r = t; r = r.$parent; ) {
          var i = r.$options.errorCaptured;
          if (i)
            for (var o = 0; o < i.length; o++)
              try {
                var a = i[o].call(r, e, t, n) === !1;
                if (a)
                  return;
              } catch (s) {
                or(s, r, "errorCaptured hook");
              }
        }
      or(e, t, n);
    } finally {
      Je();
    }
  }
  function be(e, t, n, r, i) {
    var o;
    try {
      o = n ? e.apply(t, n) : e.call(t), o && !o._isVue && on(o) && !o._handled && (o.catch(function(a) {
        return ye(a, r, i + " (Promise/async)");
      }), o._handled = !0);
    } catch (a) {
      ye(a, r, i);
    }
    return o;
  }
  function or(e, t, n) {
    if (T.errorHandler)
      try {
        return T.errorHandler.call(null, e, t, n);
      } catch (r) {
        r !== e && ar(r, null, "config.errorHandler");
      }
    ar(e, t, n);
  }
  function ar(e, t, n) {
    if (process.env.NODE_ENV !== "production" && h("Error in ".concat(n, ': "').concat(e.toString(), '"'), t), B && typeof console < "u")
      console.error(e);
    else
      throw e;
  }
  var pn = !1, dn = [], vn = !1;
  function bt() {
    vn = !1;
    var e = dn.slice(0);
    dn.length = 0;
    for (var t = 0; t < e.length; t++)
      e[t]();
  }
  var rt;
  if (typeof Promise < "u" && xe(Promise)) {
    var Xo = Promise.resolve();
    rt = function() {
      Xo.then(bt), lo && setTimeout(j);
    }, pn = !0;
  } else if (!Xe && typeof MutationObserver < "u" && (xe(MutationObserver) || // PhantomJS and iOS 7.x
  MutationObserver.toString() === "[object MutationObserverConstructor]")) {
    var Et = 1, Ko = new MutationObserver(bt), sr = document.createTextNode(String(Et));
    Ko.observe(sr, {
      characterData: !0
    }), rt = function() {
      Et = (Et + 1) % 2, sr.data = String(Et);
    }, pn = !0;
  } else
    typeof setImmediate < "u" && xe(setImmediate) ? rt = function() {
      setImmediate(bt);
    } : rt = function() {
      setTimeout(bt, 0);
    };
  function An(e, t) {
    var n;
    if (dn.push(function() {
      if (e)
        try {
          e.call(t);
        } catch (r) {
          ye(r, t, "nextTick");
        }
      else
        n && n(t);
    }), vn || (vn = !0, rt()), !e && typeof Promise < "u")
      return new Promise(function(r) {
        n = r;
      });
  }
  var Zo = "2.7.15", cr = new at();
  function Ft(e) {
    return St(e, cr), cr.clear(), e;
  }
  function St(e, t) {
    var n, r, i = E(e);
    if (!(!i && !H(e) || e.__v_skip || Object.isFrozen(e) || e instanceof U)) {
      if (e.__ob__) {
        var o = e.__ob__.dep.id;
        if (t.has(o))
          return;
        t.add(o);
      }
      if (i)
        for (n = e.length; n--; )
          St(e[n], t);
      else if (re(e))
        St(e.value, t);
      else
        for (r = Object.keys(e), n = r.length; n--; )
          St(e[r[n]], t);
    }
  }
  var Jo = 0, In = (
    /** @class */
    function() {
      function e(t, n, r, i, o) {
        bo(
          this,
          // if the active effect scope is manually created (not a component scope),
          // prioritize it
          W && !W._vm ? W : t ? t._scope : void 0
        ), (this.vm = t) && o && (t._watcher = this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, this.sync = !!i.sync, this.before = i.before, process.env.NODE_ENV !== "production" && (this.onTrack = i.onTrack, this.onTrigger = i.onTrigger)) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = r, this.id = ++Jo, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new at(), this.newDepIds = new at(), this.expression = process.env.NODE_ENV !== "production" ? n.toString() : "", A(n) ? this.getter = n : (this.getter = fo(n), this.getter || (this.getter = j, process.env.NODE_ENV !== "production" && h('Failed watching path: "'.concat(n, '" ') + "Watcher only accepts simple dot-delimited paths. For full control, use a function instead.", t))), this.value = this.lazy ? void 0 : this.get();
      }
      return e.prototype.get = function() {
        Ze(this);
        var t, n = this.vm;
        try {
          t = this.getter.call(n, n);
        } catch (r) {
          if (this.user)
            ye(r, n, 'getter for watcher "'.concat(this.expression, '"'));
          else
            throw r;
        } finally {
          this.deep && Ft(t), Je(), this.cleanupDeps();
        }
        return t;
      }, e.prototype.addDep = function(t) {
        var n = t.id;
        this.newDepIds.has(n) || (this.newDepIds.add(n), this.newDeps.push(t), this.depIds.has(n) || t.addSub(this));
      }, e.prototype.cleanupDeps = function() {
        for (var t = this.deps.length; t--; ) {
          var n = this.deps[t];
          this.newDepIds.has(n.id) || n.removeSub(this);
        }
        var r = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
      }, e.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : va(this);
      }, e.prototype.run = function() {
        if (this.active) {
          var t = this.get();
          if (t !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
          // when the value is the same, because the value may
          // have mutated.
          H(t) || this.deep) {
            var n = this.value;
            if (this.value = t, this.user) {
              var r = 'callback for watcher "'.concat(this.expression, '"');
              be(this.cb, this.vm, [t, n], this.vm, r);
            } else
              this.cb.call(this.vm, t, n);
          }
        }
      }, e.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1;
      }, e.prototype.depend = function() {
        for (var t = this.deps.length; t--; )
          this.deps[t].depend();
      }, e.prototype.teardown = function() {
        if (this.vm && !this.vm._isBeingDestroyed && Ee(this.vm._scope.effects, this), this.active) {
          for (var t = this.deps.length; t--; )
            this.deps[t].removeSub(this);
          this.active = !1, this.onStop && this.onStop();
        }
      }, e;
    }()
  ), ne, Ht;
  if (process.env.NODE_ENV !== "production") {
    var se = B && window.performance;
    se && // @ts-ignore
    se.mark && // @ts-ignore
    se.measure && // @ts-ignore
    se.clearMarks && // @ts-ignore
    se.clearMeasures && (ne = function(e) {
      return se.mark(e);
    }, Ht = function(e, t, n) {
      se.measure(e, t, n), se.clearMarks(t), se.clearMarks(n);
    });
  }
  function Qo(e) {
    e._events = /* @__PURE__ */ Object.create(null), e._hasHookEvent = !1;
    var t = e.$options._parentListeners;
    t && Ei(e, t);
  }
  var ct;
  function ea(e, t) {
    ct.$on(e, t);
  }
  function ta(e, t) {
    ct.$off(e, t);
  }
  function na(e, t) {
    var n = ct;
    return function r() {
      var i = t.apply(null, arguments);
      i !== null && n.$off(e, r);
    };
  }
  function Ei(e, t, n) {
    ct = e, pi(t, n || {}, ea, ta, na, e), ct = void 0;
  }
  function ra(e) {
    var t = /^hook:/;
    e.prototype.$on = function(n, r) {
      var i = this;
      if (E(n))
        for (var o = 0, a = n.length; o < a; o++)
          i.$on(n[o], r);
      else
        (i._events[n] || (i._events[n] = [])).push(r), t.test(n) && (i._hasHookEvent = !0);
      return i;
    }, e.prototype.$once = function(n, r) {
      var i = this;
      function o() {
        i.$off(n, o), r.apply(i, arguments);
      }
      return o.fn = r, i.$on(n, o), i;
    }, e.prototype.$off = function(n, r) {
      var i = this;
      if (!arguments.length)
        return i._events = /* @__PURE__ */ Object.create(null), i;
      if (E(n)) {
        for (var o = 0, a = n.length; o < a; o++)
          i.$off(n[o], r);
        return i;
      }
      var s = i._events[n];
      if (!s)
        return i;
      if (!r)
        return i._events[n] = null, i;
      for (var c, p = s.length; p--; )
        if (c = s[p], c === r || c.fn === r) {
          s.splice(p, 1);
          break;
        }
      return i;
    }, e.prototype.$emit = function(n) {
      var r = this;
      if (process.env.NODE_ENV !== "production") {
        var i = n.toLowerCase();
        i !== n && r._events[i] && Hn('Event "'.concat(i, '" is emitted in component ') + "".concat(Te(r), ' but the handler is registered for "').concat(n, '". ') + "Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. " + 'You should probably use "'.concat(He(n), '" instead of "').concat(n, '".'));
      }
      var o = r._events[n];
      if (o) {
        o = o.length > 1 ? an(o) : o;
        for (var a = an(arguments, 1), s = 'event handler for "'.concat(n, '"'), c = 0, p = o.length; c < p; c++)
          be(o[c], r, a, r, s);
      }
      return r;
    };
  }
  var Ie = null, ft = !1;
  function Ni(e) {
    var t = Ie;
    return Ie = e, function() {
      Ie = t;
    };
  }
  function ia(e) {
    var t = e.$options, n = t.parent;
    if (n && !t.abstract) {
      for (; n.$options.abstract && n.$parent; )
        n = n.$parent;
      n.$children.push(e);
    }
    e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._provided = n ? n._provided : /* @__PURE__ */ Object.create(null), e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
  }
  function oa(e) {
    e.prototype._update = function(t, n) {
      var r = this, i = r.$el, o = r._vnode, a = Ni(r);
      r._vnode = t, o ? r.$el = r.__patch__(o, t) : r.$el = r.__patch__(
        r.$el,
        t,
        n,
        !1
        /* removeOnly */
      ), a(), i && (i.__vue__ = null), r.$el && (r.$el.__vue__ = r);
      for (var s = r; s && s.$vnode && s.$parent && s.$vnode === s.$parent._vnode; )
        s.$parent.$el = s.$el, s = s.$parent;
    }, e.prototype.$forceUpdate = function() {
      var t = this;
      t._watcher && t._watcher.update();
    }, e.prototype.$destroy = function() {
      var t = this;
      if (!t._isBeingDestroyed) {
        q(t, "beforeDestroy"), t._isBeingDestroyed = !0;
        var n = t.$parent;
        n && !n._isBeingDestroyed && !t.$options.abstract && Ee(n.$children, t), t._scope.stop(), t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), q(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
      }
    };
  }
  function aa(e, t, n) {
    e.$el = t, e.$options.render || (e.$options.render = Ae, process.env.NODE_ENV !== "production" && (e.$options.template && e.$options.template.charAt(0) !== "#" || e.$options.el || t ? h("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e) : h("Failed to mount component: template or render function not defined.", e))), q(e, "beforeMount");
    var r;
    process.env.NODE_ENV !== "production" && T.performance && ne ? r = function() {
      var s = e._name, c = e._uid, p = "vue-perf-start:".concat(c), v = "vue-perf-end:".concat(c);
      ne(p);
      var m = e._render();
      ne(v), Ht("vue ".concat(s, " render"), p, v), ne(p), e._update(m, n), ne(v), Ht("vue ".concat(s, " patch"), p, v);
    } : r = function() {
      e._update(e._render(), n);
    };
    var i = {
      before: function() {
        e._isMounted && !e._isDestroyed && q(e, "beforeUpdate");
      }
    };
    process.env.NODE_ENV !== "production" && (i.onTrack = function(s) {
      return q(e, "renderTracked", [s]);
    }, i.onTrigger = function(s) {
      return q(e, "renderTriggered", [s]);
    }), new In(
      e,
      r,
      j,
      i,
      !0
      /* isRenderWatcher */
    ), n = !1;
    var o = e._preWatchers;
    if (o)
      for (var a = 0; a < o.length; a++)
        o[a].run();
    return e.$vnode == null && (e._isMounted = !0, q(e, "mounted")), e;
  }
  function sa(e, t, n, r, i) {
    process.env.NODE_ENV !== "production" && (ft = !0);
    var o = r.data.scopedSlots, a = e.$scopedSlots, s = !!(o && !o.$stable || a !== z && !a.$stable || o && e.$scopedSlots.$key !== o.$key || !o && e.$scopedSlots.$key), c = !!(i || // has new static slots
    e.$options._renderChildren || // has old static slots
    s), p = e.$vnode;
    e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i;
    var v = r.data.attrs || z;
    e._attrsProxy && jt(e._attrsProxy, v, p.data && p.data.attrs || z, e, "$attrs") && (c = !0), e.$attrs = v, n = n || z;
    var m = e.$options._parentListeners;
    if (e._listenersProxy && jt(e._listenersProxy, n, m || z, e, "$listeners"), e.$listeners = e.$options._parentListeners = n, Ei(e, n, m), t && e.$options.props) {
      _e(!1);
      for (var _ = e._props, w = e.$options._propKeys || [], M = 0; M < w.length; M++) {
        var R = w[M], ie = e.$options.props;
        _[R] = kn(R, ie, t, e);
      }
      _e(!0), e.$options.propsData = t;
    }
    c && (e.$slots = xn(i, r.context), e.$forceUpdate()), process.env.NODE_ENV !== "production" && (ft = !1);
  }
  function Oi(e) {
    for (; e && (e = e.$parent); )
      if (e._inactive)
        return !0;
    return !1;
  }
  function Pn(e, t) {
    if (t) {
      if (e._directInactive = !1, Oi(e))
        return;
    } else if (e._directInactive)
      return;
    if (e._inactive || e._inactive === null) {
      e._inactive = !1;
      for (var n = 0; n < e.$children.length; n++)
        Pn(e.$children[n]);
      q(e, "activated");
    }
  }
  function wi(e, t) {
    if (!(t && (e._directInactive = !0, Oi(e))) && !e._inactive) {
      e._inactive = !0;
      for (var n = 0; n < e.$children.length; n++)
        wi(e.$children[n]);
      q(e, "deactivated");
    }
  }
  function q(e, t, n, r) {
    r === void 0 && (r = !0), Ze();
    var i = qe, o = Eo();
    r && ge(e);
    var a = e.$options[t], s = "".concat(t, " hook");
    if (a)
      for (var c = 0, p = a.length; c < p; c++)
        be(a[c], e, n || null, e, s);
    e._hasHookEvent && e.$emit("hook:" + t), r && (ge(i), o && o.on()), Je();
  }
  var ca = 100, ce = [], Mn = [], ut = {}, Tt = {}, hn = !1, jn = !1, Ve = 0;
  function fa() {
    Ve = ce.length = Mn.length = 0, ut = {}, process.env.NODE_ENV !== "production" && (Tt = {}), hn = jn = !1;
  }
  var Ci = 0, mn = Date.now;
  if (B && !Xe) {
    var Xt = window.performance;
    Xt && typeof Xt.now == "function" && mn() > document.createEvent("Event").timeStamp && (mn = function() {
      return Xt.now();
    });
  }
  var ua = function(e, t) {
    if (e.post) {
      if (!t.post)
        return 1;
    } else if (t.post)
      return -1;
    return e.id - t.id;
  };
  function fr() {
    Ci = mn(), jn = !0;
    var e, t;
    for (ce.sort(ua), Ve = 0; Ve < ce.length; Ve++)
      if (e = ce[Ve], e.before && e.before(), t = e.id, ut[t] = null, e.run(), process.env.NODE_ENV !== "production" && ut[t] != null && (Tt[t] = (Tt[t] || 0) + 1, Tt[t] > ca)) {
        h("You may have an infinite update loop " + (e.user ? 'in watcher with expression "'.concat(e.expression, '"') : "in a component render function."), e.vm);
        break;
      }
    var n = Mn.slice(), r = ce.slice();
    fa(), da(n), la(r), vo(), It && T.devtools && It.emit("flush");
  }
  function la(e) {
    for (var t = e.length; t--; ) {
      var n = e[t], r = n.vm;
      r && r._watcher === n && r._isMounted && !r._isDestroyed && q(r, "updated");
    }
  }
  function pa(e) {
    e._inactive = !1, Mn.push(e);
  }
  function da(e) {
    for (var t = 0; t < e.length; t++)
      e[t]._inactive = !0, Pn(
        e[t],
        !0
        /* true */
      );
  }
  function va(e) {
    var t = e.id;
    if (ut[t] == null && !(e === Q.target && e.noRecurse)) {
      if (ut[t] = !0, !jn)
        ce.push(e);
      else {
        for (var n = ce.length - 1; n > Ve && ce[n].id > e.id; )
          n--;
        ce.splice(n + 1, 0, e);
      }
      if (!hn) {
        if (hn = !0, process.env.NODE_ENV !== "production" && !T.async) {
          fr();
          return;
        }
        An(fr);
      }
    }
  }
  function ha(e) {
    var t = e.$options.provide;
    if (t) {
      var n = A(t) ? t.call(e) : t;
      if (!H(n))
        return;
      for (var r = No(e), i = ht ? Reflect.ownKeys(n) : Object.keys(n), o = 0; o < i.length; o++) {
        var a = i[o];
        Object.defineProperty(r, a, Object.getOwnPropertyDescriptor(n, a));
      }
    }
  }
  function ma(e) {
    var t = $i(e.$options.inject, e);
    t && (_e(!1), Object.keys(t).forEach(function(n) {
      process.env.NODE_ENV !== "production" ? ee(e, n, t[n], function() {
        h("Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. " + 'injection being mutated: "'.concat(n, '"'), e);
      }) : ee(e, n, t[n]);
    }), _e(!0));
  }
  function $i(e, t) {
    if (e) {
      for (var n = /* @__PURE__ */ Object.create(null), r = ht ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
        var o = r[i];
        if (o !== "__ob__") {
          var a = e[o].from;
          if (a in t._provided)
            n[o] = t._provided[a];
          else if ("default" in e[o]) {
            var s = e[o].default;
            n[o] = A(s) ? s.call(t) : s;
          } else
            process.env.NODE_ENV !== "production" && h('Injection "'.concat(o, '" not found'), t);
        }
      }
      return n;
    }
  }
  function Ln(e, t, n, r, i) {
    var o = this, a = i.options, s;
    F(r, "_uid") ? (s = Object.create(r), s._original = r) : (s = r, r = r._original);
    var c = I(a._compiled), p = !c;
    this.data = e, this.props = t, this.children = n, this.parent = r, this.listeners = e.on || z, this.injections = $i(a.inject, r), this.slots = function() {
      return o.$slots || it(r, e.scopedSlots, o.$slots = xn(n, r)), o.$slots;
    }, Object.defineProperty(this, "scopedSlots", {
      enumerable: !0,
      get: function() {
        return it(r, e.scopedSlots, this.slots());
      }
    }), c && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = it(r, e.scopedSlots, this.$slots)), a._scopeId ? this._c = function(v, m, _, w) {
      var M = Lt(s, v, m, _, w, p);
      return M && !E(M) && (M.fnScopeId = a._scopeId, M.fnContext = r), M;
    } : this._c = function(v, m, _, w) {
      return Lt(s, v, m, _, w, p);
    };
  }
  mi(Ln.prototype);
  function ga(e, t, n, r, i) {
    var o = e.options, a = {}, s = o.props;
    if (l(s))
      for (var c in s)
        a[c] = kn(c, s, t || z);
    else
      l(n.attrs) && lr(a, n.attrs), l(n.props) && lr(a, n.props);
    var p = new Ln(n, a, i, r, e), v = o.render.call(null, p._c, p);
    if (v instanceof U)
      return ur(v, n, p.parent, o, p);
    if (E(v)) {
      for (var m = Tn(v) || [], _ = new Array(m.length), w = 0; w < m.length; w++)
        _[w] = ur(m[w], n, p.parent, o, p);
      return _;
    }
  }
  function ur(e, t, n, r, i) {
    var o = cn(e);
    return o.fnContext = n, o.fnOptions = r, process.env.NODE_ENV !== "production" && ((o.devtoolsMeta = o.devtoolsMeta || {}).renderContext = i), t.slot && ((o.data || (o.data = {})).slot = t.slot), o;
  }
  function lr(e, t) {
    for (var n in t)
      e[Me(n)] = t[n];
  }
  function Ye(e) {
    return e.name || e.__name || e._componentTag;
  }
  var Fn = {
    init: function(e, t) {
      if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
        var n = e;
        Fn.prepatch(n, n);
      } else {
        var r = e.componentInstance = _a(e, Ie);
        r.$mount(t ? e.elm : void 0, t);
      }
    },
    prepatch: function(e, t) {
      var n = t.componentOptions, r = t.componentInstance = e.componentInstance;
      sa(
        r,
        n.propsData,
        // updated props
        n.listeners,
        // updated listeners
        t,
        // new parent vnode
        n.children
        // new children
      );
    },
    insert: function(e) {
      var t = e.context, n = e.componentInstance;
      n._isMounted || (n._isMounted = !0, q(n, "mounted")), e.data.keepAlive && (t._isMounted ? pa(n) : Pn(
        n,
        !0
        /* direct */
      ));
    },
    destroy: function(e) {
      var t = e.componentInstance;
      t._isDestroyed || (e.data.keepAlive ? wi(
        t,
        !0
        /* direct */
      ) : t.$destroy());
    }
  }, pr = Object.keys(Fn);
  function dr(e, t, n, r, i) {
    if (!b(e)) {
      var o = n.$options._base;
      if (H(e) && (e = o.extend(e)), typeof e != "function") {
        process.env.NODE_ENV !== "production" && h("Invalid Component definition: ".concat(String(e)), n);
        return;
      }
      var a;
      if (b(e.cid) && (a = e, e = Vo(a, o), e === void 0))
        return Bo(a, t, n, r, i);
      t = t || {}, Un(e), l(t.model) && Ea(e.options, t);
      var s = Oo(t, e, i);
      if (I(e.options.functional))
        return ga(e, s, t, n, r);
      var c = t.on;
      if (t.on = t.nativeOn, I(e.options.abstract)) {
        var p = t.slot;
        t = {}, p && (t.slot = p);
      }
      ya(t);
      var v = Ye(e.options) || i, m = new U(
        // @ts-expect-error
        "vue-component-".concat(e.cid).concat(v ? "-".concat(v) : ""),
        t,
        void 0,
        void 0,
        void 0,
        n,
        // @ts-expect-error
        { Ctor: e, propsData: s, listeners: c, tag: i, children: r },
        a
      );
      return m;
    }
  }
  function _a(e, t) {
    var n = {
      _isComponent: !0,
      _parentVnode: e,
      parent: t
    }, r = e.data.inlineTemplate;
    return l(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new e.componentOptions.Ctor(n);
  }
  function ya(e) {
    for (var t = e.hook || (e.hook = {}), n = 0; n < pr.length; n++) {
      var r = pr[n], i = t[r], o = Fn[r];
      i !== o && !(i && i._merged) && (t[r] = i ? ba(o, i) : o);
    }
  }
  function ba(e, t) {
    var n = function(r, i) {
      e(r, i), t(r, i);
    };
    return n._merged = !0, n;
  }
  function Ea(e, t) {
    var n = e.model && e.model.prop || "value", r = e.model && e.model.event || "input";
    (t.attrs || (t.attrs = {}))[n] = t.model.value;
    var i = t.on || (t.on = {}), o = i[r], a = t.model.callback;
    l(o) ? (E(o) ? o.indexOf(a) === -1 : o !== a) && (i[r] = [a].concat(o)) : i[r] = a;
  }
  var h = j, Hn = j, Kt, Te;
  if (process.env.NODE_ENV !== "production") {
    var vr = typeof console < "u", Na = /(?:^|[-_])(\w)/g, Oa = function(e) {
      return e.replace(Na, function(t) {
        return t.toUpperCase();
      }).replace(/[-_]/g, "");
    };
    h = function(e, t) {
      t === void 0 && (t = qe);
      var n = t ? Kt(t) : "";
      T.warnHandler ? T.warnHandler.call(null, e, t, n) : vr && !T.silent && console.error("[Vue warn]: ".concat(e).concat(n));
    }, Hn = function(e, t) {
      vr && !T.silent && console.warn("[Vue tip]: ".concat(e) + (t ? Kt(t) : ""));
    }, Te = function(e, t) {
      if (e.$root === e)
        return "<Root>";
      var n = A(e) && e.cid != null ? e.options : e._isVue ? e.$options || e.constructor.options : e, r = Ye(n), i = n.__file;
      if (!r && i) {
        var o = i.match(/([^/\\]+)\.vue$/);
        r = o && o[1];
      }
      return (r ? "<".concat(Oa(r), ">") : "<Anonymous>") + (i && t !== !1 ? " at ".concat(i) : "");
    };
    var wa = function(e, t) {
      for (var n = ""; t; )
        t % 2 === 1 && (n += e), t > 1 && (e += e), t >>= 1;
      return n;
    };
    Kt = function(e) {
      if (e._isVue && e.$parent) {
        for (var t = [], n = 0; e; ) {
          if (t.length > 0) {
            var r = t[t.length - 1];
            if (r.constructor === e.constructor) {
              n++, e = e.$parent;
              continue;
            } else
              n > 0 && (t[t.length - 1] = [r, n], n = 0);
          }
          t.push(e), e = e.$parent;
        }
        return `

found in

` + t.map(function(i, o) {
          return "".concat(o === 0 ? "---> " : wa(" ", 5 + o * 2)).concat(E(i) ? "".concat(Te(i[0]), "... (").concat(i[1], " recursive calls)") : Te(i));
        }).join(`
`);
      } else
        return `

(found in `.concat(Te(e), ")");
    };
  }
  var K = T.optionMergeStrategies;
  process.env.NODE_ENV !== "production" && (K.el = K.propsData = function(e, t, n, r) {
    return n || h('option "'.concat(r, '" can only be used during instance ') + "creation with the `new` keyword."), Di(e, t);
  });
  function lt(e, t, n) {
    if (n === void 0 && (n = !0), !t)
      return e;
    for (var r, i, o, a = ht ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < a.length; s++)
      r = a[s], r !== "__ob__" && (i = e[r], o = t[r], !n || !F(e, r) ? Dn(e, r, o) : i !== o && k(i) && k(o) && lt(i, o));
    return e;
  }
  function hr(e, t, n) {
    return n ? function() {
      var i = A(t) ? t.call(n, n) : t, o = A(e) ? e.call(n, n) : e;
      return i ? lt(i, o) : o;
    } : t ? e ? function() {
      return lt(A(t) ? t.call(this, this) : t, A(e) ? e.call(this, this) : e);
    } : t : e;
  }
  K.data = function(e, t, n) {
    return n ? hr(e, t, n) : t && typeof t != "function" ? (process.env.NODE_ENV !== "production" && h('The "data" option should be a function that returns a per-instance value in component definitions.', n), e) : hr(e, t);
  };
  function Ca(e, t) {
    var n = t ? e ? e.concat(t) : E(t) ? t : [t] : e;
    return n && $a(n);
  }
  function $a(e) {
    for (var t = [], n = 0; n < e.length; n++)
      t.indexOf(e[n]) === -1 && t.push(e[n]);
    return t;
  }
  ri.forEach(function(e) {
    K[e] = Ca;
  });
  function Da(e, t, n, r) {
    var i = Object.create(e || null);
    return t ? (process.env.NODE_ENV !== "production" && zn(r, t, n), x(i, t)) : i;
  }
  Gt.forEach(function(e) {
    K[e + "s"] = Da;
  });
  K.watch = function(e, t, n, r) {
    if (e === sn && (e = void 0), t === sn && (t = void 0), !t)
      return Object.create(e || null);
    if (process.env.NODE_ENV !== "production" && zn(r, t, n), !e)
      return t;
    var i = {};
    x(i, e);
    for (var o in t) {
      var a = i[o], s = t[o];
      a && !E(a) && (a = [a]), i[o] = a ? a.concat(s) : E(s) ? s : [s];
    }
    return i;
  };
  K.props = K.methods = K.inject = K.computed = function(e, t, n, r) {
    if (t && process.env.NODE_ENV !== "production" && zn(r, t, n), !e)
      return t;
    var i = /* @__PURE__ */ Object.create(null);
    return x(i, e), t && x(i, t), i;
  };
  K.provide = function(e, t) {
    return e ? function() {
      var n = /* @__PURE__ */ Object.create(null);
      return lt(n, A(e) ? e.call(this) : e), t && lt(
        n,
        A(t) ? t.call(this) : t,
        !1
        // non-recursive
      ), n;
    } : t;
  };
  var Di = function(e, t) {
    return t === void 0 ? e : t;
  };
  function Sa(e) {
    for (var t in e.components)
      Rn(t);
  }
  function Rn(e) {
    new RegExp("^[a-zA-Z][\\-\\.0-9_".concat(ii.source, "]*$")).test(e) || h('Invalid component name: "' + e + '". Component names should conform to valid custom element name in html5 specification.'), (to(e) || T.isReservedTag(e)) && h("Do not use built-in or reserved HTML elements as component id: " + e);
  }
  function Ta(e, t) {
    var n = e.props;
    if (n) {
      var r = {}, i, o, a;
      if (E(n))
        for (i = n.length; i--; )
          o = n[i], typeof o == "string" ? (a = Me(o), r[a] = { type: null }) : process.env.NODE_ENV !== "production" && h("props must be strings when using array syntax.");
      else if (k(n))
        for (var s in n)
          o = n[s], a = Me(s), r[a] = k(o) ? o : { type: o };
      else
        process.env.NODE_ENV !== "production" && h('Invalid value for option "props": expected an Array or an Object, ' + "but got ".concat(dt(n), "."), t);
      e.props = r;
    }
  }
  function xa(e, t) {
    var n = e.inject;
    if (n) {
      var r = e.inject = {};
      if (E(n))
        for (var i = 0; i < n.length; i++)
          r[n[i]] = { from: n[i] };
      else if (k(n))
        for (var o in n) {
          var a = n[o];
          r[o] = k(a) ? x({ from: o }, a) : { from: a };
        }
      else
        process.env.NODE_ENV !== "production" && h('Invalid value for option "inject": expected an Array or an Object, ' + "but got ".concat(dt(n), "."), t);
    }
  }
  function Aa(e) {
    var t = e.directives;
    if (t)
      for (var n in t) {
        var r = t[n];
        A(r) && (t[n] = { bind: r, update: r });
      }
  }
  function zn(e, t, n) {
    k(t) || h('Invalid value for option "'.concat(e, '": expected an Object, ') + "but got ".concat(dt(t), "."), n);
  }
  function Le(e, t, n) {
    if (process.env.NODE_ENV !== "production" && Sa(t), A(t) && (t = t.options), Ta(t, n), xa(t, n), Aa(t), !t._base && (t.extends && (e = Le(e, t.extends, n)), t.mixins))
      for (var r = 0, i = t.mixins.length; r < i; r++)
        e = Le(e, t.mixins[r], n);
    var o = {}, a;
    for (a in e)
      s(a);
    for (a in t)
      F(e, a) || s(a);
    function s(c) {
      var p = K[c] || Di;
      o[c] = p(e[c], t[c], n, c);
    }
    return o;
  }
  function Rt(e, t, n, r) {
    if (typeof n == "string") {
      var i = e[t];
      if (F(i, n))
        return i[n];
      var o = Me(n);
      if (F(i, o))
        return i[o];
      var a = Jr(o);
      if (F(i, a))
        return i[a];
      var s = i[n] || i[o] || i[a];
      return process.env.NODE_ENV !== "production" && r && !s && h("Failed to resolve " + t.slice(0, -1) + ": " + n), s;
    }
  }
  function kn(e, t, n, r) {
    var i = t[e], o = !F(n, e), a = n[e], s = gr(Boolean, i.type);
    if (s > -1) {
      if (o && !F(i, "default"))
        a = !1;
      else if (a === "" || a === He(e)) {
        var c = gr(String, i.type);
        (c < 0 || s < c) && (a = !0);
      }
    }
    if (a === void 0) {
      a = Ia(r, i, e);
      var p = $n;
      _e(!0), ue(a), _e(p);
    }
    return process.env.NODE_ENV !== "production" && Pa(i, e, a, r, o), a;
  }
  function Ia(e, t, n) {
    if (F(t, "default")) {
      var r = t.default;
      return process.env.NODE_ENV !== "production" && H(r) && h('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', e), e && e.$options.propsData && e.$options.propsData[n] === void 0 && e._props[n] !== void 0 ? e._props[n] : A(r) && zt(t.type) !== "Function" ? r.call(e) : r;
    }
  }
  function Pa(e, t, n, r, i) {
    if (e.required && i) {
      h('Missing required prop: "' + t + '"', r);
      return;
    }
    if (!(n == null && !e.required)) {
      var o = e.type, a = !o || o === !0, s = [];
      if (o) {
        E(o) || (o = [o]);
        for (var c = 0; c < o.length && !a; c++) {
          var p = ja(n, o[c], r);
          s.push(p.expectedType || ""), a = p.valid;
        }
      }
      var v = s.some(function(_) {
        return _;
      });
      if (!a && v) {
        h(Fa(t, n, s), r);
        return;
      }
      var m = e.validator;
      m && (m(n) || h('Invalid prop: custom validator check failed for prop "' + t + '".', r));
    }
  }
  var Ma = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;
  function ja(e, t, n) {
    var r, i = zt(t);
    if (Ma.test(i)) {
      var o = typeof e;
      r = o === i.toLowerCase(), !r && o === "object" && (r = e instanceof t);
    } else if (i === "Object")
      r = k(e);
    else if (i === "Array")
      r = E(e);
    else
      try {
        r = e instanceof t;
      } catch {
        h('Invalid prop type: "' + String(t) + '" is not a constructor', n), r = !1;
      }
    return {
      valid: r,
      expectedType: i
    };
  }
  var La = /^\s*function (\w+)/;
  function zt(e) {
    var t = e && e.toString().match(La);
    return t ? t[1] : "";
  }
  function mr(e, t) {
    return zt(e) === zt(t);
  }
  function gr(e, t) {
    if (!E(t))
      return mr(t, e) ? 0 : -1;
    for (var n = 0, r = t.length; n < r; n++)
      if (mr(t[n], e))
        return n;
    return -1;
  }
  function Fa(e, t, n) {
    var r = 'Invalid prop: type check failed for prop "'.concat(e, '".') + " Expected ".concat(n.map(Jr).join(", ")), i = n[0], o = dt(t);
    return n.length === 1 && Zt(i) && Zt(typeof t) && !Ra(i, o) && (r += " with value ".concat(_r(t, i))), r += ", got ".concat(o, " "), Zt(o) && (r += "with value ".concat(_r(t, o), ".")), r;
  }
  function _r(e, t) {
    return t === "String" ? '"'.concat(e, '"') : t === "Number" ? "".concat(Number(e)) : "".concat(e);
  }
  var Ha = ["string", "number", "boolean"];
  function Zt(e) {
    return Ha.some(function(t) {
      return e.toLowerCase() === t;
    });
  }
  function Ra() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return e.some(function(n) {
      return n.toLowerCase() === "boolean";
    });
  }
  var Si;
  if (process.env.NODE_ENV !== "production") {
    var za = Y(
      "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,require"
      // for Webpack/Browserify
    ), yr = function(e, t) {
      h('Property or method "'.concat(t, '" is not defined on the instance but ') + "referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://v2.vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.", e);
    }, br = function(e, t) {
      h('Property "'.concat(t, '" must be accessed with "$data.').concat(t, '" because ') + 'properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://v2.vuejs.org/v2/api/#data', e);
    }, Er = typeof Proxy < "u" && xe(Proxy);
    if (Er) {
      var ka = Y("stop,prevent,self,ctrl,shift,alt,meta,exact");
      T.keyCodes = new Proxy(T.keyCodes, {
        set: function(e, t, n) {
          return ka(t) ? (h("Avoid overwriting built-in modifier in config.keyCodes: .".concat(t)), !1) : (e[t] = n, !0);
        }
      });
    }
    var Wa = {
      has: function(e, t) {
        var n = t in e, r = za(t) || typeof t == "string" && t.charAt(0) === "_" && !(t in e.$data);
        return !n && !r && (t in e.$data ? br(e, t) : yr(e, t)), n || !r;
      }
    }, Ua = {
      get: function(e, t) {
        return typeof t == "string" && !(t in e) && (t in e.$data ? br(e, t) : yr(e, t)), e[t];
      }
    };
    Si = function(t) {
      if (Er) {
        var n = t.$options, r = n.render && n.render._withStripped ? Ua : Wa;
        t._renderProxy = new Proxy(t, r);
      } else
        t._renderProxy = t;
    };
  }
  var te = {
    enumerable: !0,
    configurable: !0,
    get: j,
    set: j
  };
  function Wn(e, t, n) {
    te.get = function() {
      return this[t][n];
    }, te.set = function(i) {
      this[t][n] = i;
    }, Object.defineProperty(e, n, te);
  }
  function Ba(e) {
    var t = e.$options;
    if (t.props && Va(e, t.props), Ho(e), t.methods && Ka(e, t.methods), t.data)
      Ga(e);
    else {
      var n = ue(e._data = {});
      n && n.vmCount++;
    }
    t.computed && Xa(e, t.computed), t.watch && t.watch !== sn && Za(e, t.watch);
  }
  function Va(e, t) {
    var n = e.$options.propsData || {}, r = e._props = li({}), i = e.$options._propKeys = [], o = !e.$parent;
    o || _e(!1);
    var a = function(c) {
      i.push(c);
      var p = kn(c, t, n, e);
      if (process.env.NODE_ENV !== "production") {
        var v = He(c);
        (Zr(v) || T.isReservedAttr(v)) && h('"'.concat(v, '" is a reserved attribute and cannot be used as component prop.'), e), ee(r, c, p, function() {
          !o && !ft && h("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's " + 'value. Prop being mutated: "'.concat(c, '"'), e);
        });
      } else
        ee(r, c, p);
      c in e || Wn(e, "_props", c);
    };
    for (var s in t)
      a(s);
    _e(!0);
  }
  function Ga(e) {
    var t = e.$options.data;
    t = e._data = A(t) ? qa(t, e) : t || {}, k(t) || (t = {}, process.env.NODE_ENV !== "production" && h(`data functions should return an object:
https://v2.vuejs.org/v2/guide/components.html#data-Must-Be-a-Function`, e));
    for (var n = Object.keys(t), r = e.$options.props, i = e.$options.methods, o = n.length; o--; ) {
      var a = n[o];
      process.env.NODE_ENV !== "production" && i && F(i, a) && h('Method "'.concat(a, '" has already been defined as a data property.'), e), r && F(r, a) ? process.env.NODE_ENV !== "production" && h('The data property "'.concat(a, '" is already declared as a prop. ') + "Use prop default value instead.", e) : Cn(a) || Wn(e, "_data", a);
    }
    var s = ue(t);
    s && s.vmCount++;
  }
  function qa(e, t) {
    Ze();
    try {
      return e.call(t, t);
    } catch (n) {
      return ye(n, t, "data()"), {};
    } finally {
      Je();
    }
  }
  var Ya = { lazy: !0 };
  function Xa(e, t) {
    var n = e._computedWatchers = /* @__PURE__ */ Object.create(null), r = vt();
    for (var i in t) {
      var o = t[i], a = A(o) ? o : o.get;
      process.env.NODE_ENV !== "production" && a == null && h('Getter is missing for computed property "'.concat(i, '".'), e), r || (n[i] = new In(e, a || j, j, Ya)), i in e ? process.env.NODE_ENV !== "production" && (i in e.$data ? h('The computed property "'.concat(i, '" is already defined in data.'), e) : e.$options.props && i in e.$options.props ? h('The computed property "'.concat(i, '" is already defined as a prop.'), e) : e.$options.methods && i in e.$options.methods && h('The computed property "'.concat(i, '" is already defined as a method.'), e)) : Ti(e, i, o);
    }
  }
  function Ti(e, t, n) {
    var r = !vt();
    A(n) ? (te.get = r ? Nr(t) : Or(n), te.set = j) : (te.get = n.get ? r && n.cache !== !1 ? Nr(t) : Or(n.get) : j, te.set = n.set || j), process.env.NODE_ENV !== "production" && te.set === j && (te.set = function() {
      h('Computed property "'.concat(t, '" was assigned to but it has no setter.'), this);
    }), Object.defineProperty(e, t, te);
  }
  function Nr(e) {
    return function() {
      var n = this._computedWatchers && this._computedWatchers[e];
      if (n)
        return n.dirty && n.evaluate(), Q.target && (process.env.NODE_ENV !== "production" && Q.target.onTrack && Q.target.onTrack({
          effect: Q.target,
          target: this,
          type: "get",
          key: e
        }), n.depend()), n.value;
    };
  }
  function Or(e) {
    return function() {
      return e.call(this, this);
    };
  }
  function Ka(e, t) {
    var n = e.$options.props;
    for (var r in t)
      process.env.NODE_ENV !== "production" && (typeof t[r] != "function" && h('Method "'.concat(r, '" has type "').concat(typeof t[r], '" in the component definition. ') + "Did you reference the function correctly?", e), n && F(n, r) && h('Method "'.concat(r, '" has already been defined as a prop.'), e), r in e && Cn(r) && h('Method "'.concat(r, '" conflicts with an existing Vue instance method. ') + "Avoid defining component methods that start with _ or $.")), e[r] = typeof t[r] != "function" ? j : Qr(t[r], e);
  }
  function Za(e, t) {
    for (var n in t) {
      var r = t[n];
      if (E(r))
        for (var i = 0; i < r.length; i++)
          gn(e, n, r[i]);
      else
        gn(e, n, r);
    }
  }
  function gn(e, t, n, r) {
    return k(n) && (r = n, n = n.handler), typeof n == "string" && (n = e[n]), e.$watch(t, n, r);
  }
  function Ja(e) {
    var t = {};
    t.get = function() {
      return this._data;
    };
    var n = {};
    n.get = function() {
      return this._props;
    }, process.env.NODE_ENV !== "production" && (t.set = function() {
      h("Avoid replacing instance root $data. Use nested data properties instead.", this);
    }, n.set = function() {
      h("$props is readonly.", this);
    }), Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Dn, e.prototype.$delete = fi, e.prototype.$watch = function(r, i, o) {
      var a = this;
      if (k(i))
        return gn(a, r, i, o);
      o = o || {}, o.user = !0;
      var s = new In(a, r, i, o);
      if (o.immediate) {
        var c = 'callback for immediate watcher "'.concat(s.expression, '"');
        Ze(), be(i, a, [s.value], a, c), Je();
      }
      return function() {
        s.teardown();
      };
    };
  }
  var Qa = 0;
  function es(e) {
    e.prototype._init = function(t) {
      var n = this;
      n._uid = Qa++;
      var r, i;
      process.env.NODE_ENV !== "production" && T.performance && ne && (r = "vue-perf-start:".concat(n._uid), i = "vue-perf-end:".concat(n._uid), ne(r)), n._isVue = !0, n.__v_skip = !0, n._scope = new yo(
        !0
        /* detached */
      ), n._scope._vm = !0, t && t._isComponent ? ts(n, t) : n.$options = Le(Un(n.constructor), t || {}, n), process.env.NODE_ENV !== "production" ? Si(n) : n._renderProxy = n, n._self = n, ia(n), Qo(n), Wo(n), q(
        n,
        "beforeCreate",
        void 0,
        !1
        /* setContext */
      ), ma(n), Ba(n), ha(n), q(n, "created"), process.env.NODE_ENV !== "production" && T.performance && ne && (n._name = Te(n, !1), ne(i), Ht("vue ".concat(n._name, " init"), r, i)), n.$options.el && n.$mount(n.$options.el);
    };
  }
  function ts(e, t) {
    var n = e.$options = Object.create(e.constructor.options), r = t._parentVnode;
    n.parent = t.parent, n._parentVnode = r;
    var i = r.componentOptions;
    n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
  }
  function Un(e) {
    var t = e.options;
    if (e.super) {
      var n = Un(e.super), r = e.superOptions;
      if (n !== r) {
        e.superOptions = n;
        var i = ns(e);
        i && x(e.extendOptions, i), t = e.options = Le(n, e.extendOptions), t.name && (t.components[t.name] = e);
      }
    }
    return t;
  }
  function ns(e) {
    var t, n = e.options, r = e.sealedOptions;
    for (var i in n)
      n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
    return t;
  }
  function P(e) {
    process.env.NODE_ENV !== "production" && !(this instanceof P) && h("Vue is a constructor and should be called with the `new` keyword"), this._init(e);
  }
  es(P);
  Ja(P);
  ra(P);
  oa(P);
  Uo(P);
  function rs(e) {
    e.use = function(t) {
      var n = this._installedPlugins || (this._installedPlugins = []);
      if (n.indexOf(t) > -1)
        return this;
      var r = an(arguments, 1);
      return r.unshift(this), A(t.install) ? t.install.apply(t, r) : A(t) && t.apply(null, r), n.push(t), this;
    };
  }
  function is(e) {
    e.mixin = function(t) {
      return this.options = Le(this.options, t), this;
    };
  }
  function os(e) {
    e.cid = 0;
    var t = 1;
    e.extend = function(n) {
      n = n || {};
      var r = this, i = r.cid, o = n._Ctor || (n._Ctor = {});
      if (o[i])
        return o[i];
      var a = Ye(n) || Ye(r.options);
      process.env.NODE_ENV !== "production" && a && Rn(a);
      var s = function(p) {
        this._init(p);
      };
      return s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.cid = t++, s.options = Le(r.options, n), s.super = r, s.options.props && as(s), s.options.computed && ss(s), s.extend = r.extend, s.mixin = r.mixin, s.use = r.use, Gt.forEach(function(c) {
        s[c] = r[c];
      }), a && (s.options.components[a] = s), s.superOptions = r.options, s.extendOptions = n, s.sealedOptions = x({}, s.options), o[i] = s, s;
    };
  }
  function as(e) {
    var t = e.options.props;
    for (var n in t)
      Wn(e.prototype, "_props", n);
  }
  function ss(e) {
    var t = e.options.computed;
    for (var n in t)
      Ti(e.prototype, n, t[n]);
  }
  function cs(e) {
    Gt.forEach(function(t) {
      e[t] = function(n, r) {
        return r ? (process.env.NODE_ENV !== "production" && t === "component" && Rn(n), t === "component" && k(r) && (r.name = r.name || n, r = this.options._base.extend(r)), t === "directive" && A(r) && (r = { bind: r, update: r }), this.options[t + "s"][n] = r, r) : this.options[t + "s"][n];
      };
    });
  }
  function wr(e) {
    return e && (Ye(e.Ctor.options) || e.tag);
  }
  function Nt(e, t) {
    return E(e) ? e.indexOf(t) > -1 : typeof e == "string" ? e.split(",").indexOf(t) > -1 : Xr(e) ? e.test(t) : !1;
  }
  function Cr(e, t) {
    var n = e.cache, r = e.keys, i = e._vnode;
    for (var o in n) {
      var a = n[o];
      if (a) {
        var s = a.name;
        s && !t(s) && _n(n, o, r, i);
      }
    }
  }
  function _n(e, t, n, r) {
    var i = e[t];
    i && (!r || i.tag !== r.tag) && i.componentInstance.$destroy(), e[t] = null, Ee(n, t);
  }
  var $r = [String, RegExp, Array], fs = {
    name: "keep-alive",
    abstract: !0,
    props: {
      include: $r,
      exclude: $r,
      max: [String, Number]
    },
    methods: {
      cacheVNode: function() {
        var e = this, t = e.cache, n = e.keys, r = e.vnodeToCache, i = e.keyToCache;
        if (r) {
          var o = r.tag, a = r.componentInstance, s = r.componentOptions;
          t[i] = {
            name: wr(s),
            tag: o,
            componentInstance: a
          }, n.push(i), this.max && n.length > parseInt(this.max) && _n(t, n[0], n, this._vnode), this.vnodeToCache = null;
        }
      }
    },
    created: function() {
      this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
    },
    destroyed: function() {
      for (var e in this.cache)
        _n(this.cache, e, this.keys);
    },
    mounted: function() {
      var e = this;
      this.cacheVNode(), this.$watch("include", function(t) {
        Cr(e, function(n) {
          return Nt(t, n);
        });
      }), this.$watch("exclude", function(t) {
        Cr(e, function(n) {
          return !Nt(t, n);
        });
      });
    },
    updated: function() {
      this.cacheVNode();
    },
    render: function() {
      var e = this.$slots.default, t = _i(e), n = t && t.componentOptions;
      if (n) {
        var r = wr(n), i = this, o = i.include, a = i.exclude;
        if (
          // not included
          o && (!r || !Nt(o, r)) || // excluded
          a && r && Nt(a, r)
        )
          return t;
        var s = this, c = s.cache, p = s.keys, v = t.key == null ? (
          // same constructor may get registered as different local components
          // so cid alone is not enough (#3269)
          n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "")
        ) : t.key;
        c[v] ? (t.componentInstance = c[v].componentInstance, Ee(p, v), p.push(v)) : (this.vnodeToCache = t, this.keyToCache = v), t.data.keepAlive = !0;
      }
      return t || e && e[0];
    }
  }, us = {
    KeepAlive: fs
  };
  function ls(e) {
    var t = {};
    t.get = function() {
      return T;
    }, process.env.NODE_ENV !== "production" && (t.set = function() {
      h("Do not replace the Vue.config object, set individual fields instead.");
    }), Object.defineProperty(e, "config", t), e.util = {
      warn: h,
      extend: x,
      mergeOptions: Le,
      defineReactive: ee
    }, e.set = Dn, e.delete = fi, e.nextTick = An, e.observable = function(n) {
      return ue(n), n;
    }, e.options = /* @__PURE__ */ Object.create(null), Gt.forEach(function(n) {
      e.options[n + "s"] = /* @__PURE__ */ Object.create(null);
    }), e.options._base = e, x(e.options.components, us), rs(e), is(e), os(e), cs(e);
  }
  ls(P);
  Object.defineProperty(P.prototype, "$isServer", {
    get: vt
  });
  Object.defineProperty(P.prototype, "$ssrContext", {
    get: function() {
      return this.$vnode && this.$vnode.ssrContext;
    }
  });
  Object.defineProperty(P, "FunctionalRenderContext", {
    value: Ln
  });
  P.version = Zo;
  var ps = Y("style,class"), ds = Y("input,textarea,option,select,progress"), vs = function(e, t, n) {
    return n === "value" && ds(e) && t !== "button" || n === "selected" && e === "option" || n === "checked" && e === "input" || n === "muted" && e === "video";
  }, xi = Y("contenteditable,draggable,spellcheck"), hs = Y("events,caret,typing,plaintext-only"), ms = function(e, t) {
    return kt(t) || t === "false" ? "false" : (
      // allow arbitrary string value for contenteditable
      e === "contenteditable" && hs(t) ? t : "true"
    );
  }, gs = Y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), yn = "http://www.w3.org/1999/xlink", Bn = function(e) {
    return e.charAt(5) === ":" && e.slice(0, 5) === "xlink";
  }, Ai = function(e) {
    return Bn(e) ? e.slice(6, e.length) : "";
  }, kt = function(e) {
    return e == null || e === !1;
  };
  function _s(e) {
    for (var t = e.data, n = e, r = e; l(r.componentInstance); )
      r = r.componentInstance._vnode, r && r.data && (t = Dr(r.data, t));
    for (; l(n = n.parent); )
      n && n.data && (t = Dr(t, n.data));
    return ys(t.staticClass, t.class);
  }
  function Dr(e, t) {
    return {
      staticClass: Vn(e.staticClass, t.staticClass),
      class: l(e.class) ? [e.class, t.class] : t.class
    };
  }
  function ys(e, t) {
    return l(e) || l(t) ? Vn(e, Gn(t)) : "";
  }
  function Vn(e, t) {
    return e ? t ? e + " " + t : e : t || "";
  }
  function Gn(e) {
    return Array.isArray(e) ? bs(e) : H(e) ? Es(e) : typeof e == "string" ? e : "";
  }
  function bs(e) {
    for (var t = "", n, r = 0, i = e.length; r < i; r++)
      l(n = Gn(e[r])) && n !== "" && (t && (t += " "), t += n);
    return t;
  }
  function Es(e) {
    var t = "";
    for (var n in e)
      e[n] && (t && (t += " "), t += n);
    return t;
  }
  var Ns = {
    svg: "http://www.w3.org/2000/svg",
    math: "http://www.w3.org/1998/Math/MathML"
  }, Os = Y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), qn = Y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), Ii = function(e) {
    return Os(e) || qn(e);
  };
  function ws(e) {
    if (qn(e))
      return "svg";
    if (e === "math")
      return "math";
  }
  var Ot = /* @__PURE__ */ Object.create(null);
  function Cs(e) {
    if (!B)
      return !0;
    if (Ii(e))
      return !1;
    if (e = e.toLowerCase(), Ot[e] != null)
      return Ot[e];
    var t = document.createElement(e);
    return e.indexOf("-") > -1 ? Ot[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Ot[e] = /HTMLUnknownElement/.test(t.toString());
  }
  var bn = Y("text,number,password,search,email,tel,url");
  function $s(e) {
    if (typeof e == "string") {
      var t = document.querySelector(e);
      return t || (process.env.NODE_ENV !== "production" && h("Cannot find element: " + e), document.createElement("div"));
    } else
      return e;
  }
  function Ds(e, t) {
    var n = document.createElement(e);
    return e !== "select" || t.data && t.data.attrs && t.data.attrs.multiple !== void 0 && n.setAttribute("multiple", "multiple"), n;
  }
  function Ss(e, t) {
    return document.createElementNS(Ns[e], t);
  }
  function Ts(e) {
    return document.createTextNode(e);
  }
  function xs(e) {
    return document.createComment(e);
  }
  function As(e, t, n) {
    e.insertBefore(t, n);
  }
  function Is(e, t) {
    e.removeChild(t);
  }
  function Ps(e, t) {
    e.appendChild(t);
  }
  function Ms(e) {
    return e.parentNode;
  }
  function js(e) {
    return e.nextSibling;
  }
  function Ls(e) {
    return e.tagName;
  }
  function Fs(e, t) {
    e.textContent = t;
  }
  function Hs(e, t) {
    e.setAttribute(t, "");
  }
  var Rs = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    createElement: Ds,
    createElementNS: Ss,
    createTextNode: Ts,
    createComment: xs,
    insertBefore: As,
    removeChild: Is,
    appendChild: Ps,
    parentNode: Ms,
    nextSibling: js,
    tagName: Ls,
    setTextContent: Fs,
    setStyleScope: Hs
  }), zs = {
    create: function(e, t) {
      Ge(t);
    },
    update: function(e, t) {
      e.data.ref !== t.data.ref && (Ge(e, !0), Ge(t));
    },
    destroy: function(e) {
      Ge(e, !0);
    }
  };
  function Ge(e, t) {
    var n = e.data.ref;
    if (l(n)) {
      var r = e.context, i = e.componentInstance || e.elm, o = t ? null : i, a = t ? void 0 : i;
      if (A(n)) {
        be(n, r, [o], r, "template ref function");
        return;
      }
      var s = e.data.refInFor, c = typeof n == "string" || typeof n == "number", p = re(n), v = r.$refs;
      if (c || p)
        if (s) {
          var m = c ? v[n] : n.value;
          t ? E(m) && Ee(m, i) : E(m) ? m.includes(i) || m.push(i) : c ? (v[n] = [i], Sr(r, n, v[n])) : n.value = [i];
        } else if (c) {
          if (t && v[n] !== i)
            return;
          v[n] = a, Sr(r, n, o);
        } else if (p) {
          if (t && n.value !== i)
            return;
          n.value = o;
        } else
          process.env.NODE_ENV !== "production" && h("Invalid template ref type: ".concat(typeof n));
    }
  }
  function Sr(e, t, n) {
    var r = e._setupState;
    r && F(r, t) && (re(r[t]) ? r[t].value = n : r[t] = n);
  }
  var he = new U("", {}, []), tt = ["create", "activate", "update", "remove", "destroy"];
  function Se(e, t) {
    return e.key === t.key && e.asyncFactory === t.asyncFactory && (e.tag === t.tag && e.isComment === t.isComment && l(e.data) === l(t.data) && ks(e, t) || I(e.isAsyncPlaceholder) && b(t.asyncFactory.error));
  }
  function ks(e, t) {
    if (e.tag !== "input")
      return !0;
    var n, r = l(n = e.data) && l(n = n.attrs) && n.type, i = l(n = t.data) && l(n = n.attrs) && n.type;
    return r === i || bn(r) && bn(i);
  }
  function Ws(e, t, n) {
    var r, i, o = {};
    for (r = t; r <= n; ++r)
      i = e[r].key, l(i) && (o[i] = r);
    return o;
  }
  function Us(e) {
    var t, n, r = {}, i = e.modules, o = e.nodeOps;
    for (t = 0; t < tt.length; ++t)
      for (r[tt[t]] = [], n = 0; n < i.length; ++n)
        l(i[n][tt[t]]) && r[tt[t]].push(i[n][tt[t]]);
    function a(u) {
      return new U(o.tagName(u).toLowerCase(), {}, [], void 0, u);
    }
    function s(u, f) {
      function d() {
        --d.listeners === 0 && c(u);
      }
      return d.listeners = f, d;
    }
    function c(u) {
      var f = o.parentNode(u);
      l(f) && o.removeChild(f, u);
    }
    function p(u, f) {
      return !f && !u.ns && !(T.ignoredElements.length && T.ignoredElements.some(function(d) {
        return Xr(d) ? d.test(u.tag) : d === u.tag;
      })) && T.isUnknownElement(u.tag);
    }
    var v = 0;
    function m(u, f, d, g, y, C, O) {
      if (l(u.elm) && l(C) && (u = C[O] = cn(u)), u.isRootInsert = !y, !_(u, f, d, g)) {
        var N = u.data, S = u.children, $ = u.tag;
        l($) ? (process.env.NODE_ENV !== "production" && (N && N.pre && v++, p(u, v) && h("Unknown custom element: <" + $ + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', u.context)), u.elm = u.ns ? o.createElementNS(u.ns, $) : o.createElement($, u), Ne(u), ie(u, S, f), l(N) && G(u, f), R(d, u.elm, g), process.env.NODE_ENV !== "production" && N && N.pre && v--) : I(u.isComment) ? (u.elm = o.createComment(u.text), R(d, u.elm, g)) : (u.elm = o.createTextNode(u.text), R(d, u.elm, g));
      }
    }
    function _(u, f, d, g) {
      var y = u.data;
      if (l(y)) {
        var C = l(u.componentInstance) && y.keepAlive;
        if (l(y = y.hook) && l(y = y.init) && y(
          u,
          !1
          /* hydrating */
        ), l(u.componentInstance))
          return w(u, f), R(d, u.elm, g), I(C) && M(u, f, d, g), !0;
      }
    }
    function w(u, f) {
      l(u.data.pendingInsert) && (f.push.apply(f, u.data.pendingInsert), u.data.pendingInsert = null), u.elm = u.componentInstance.$el, V(u) ? (G(u, f), Ne(u)) : (Ge(u), f.push(u));
    }
    function M(u, f, d, g) {
      for (var y, C = u; C.componentInstance; )
        if (C = C.componentInstance._vnode, l(y = C.data) && l(y = y.transition)) {
          for (y = 0; y < r.activate.length; ++y)
            r.activate[y](he, C);
          f.push(C);
          break;
        }
      R(d, u.elm, g);
    }
    function R(u, f, d) {
      l(u) && (l(d) ? o.parentNode(d) === u && o.insertBefore(u, f, d) : o.appendChild(u, f));
    }
    function ie(u, f, d) {
      if (E(f)) {
        process.env.NODE_ENV !== "production" && ze(f);
        for (var g = 0; g < f.length; ++g)
          m(f[g], d, u.elm, null, !0, f, g);
      } else
        le(u.text) && o.appendChild(u.elm, o.createTextNode(String(u.text)));
    }
    function V(u) {
      for (; u.componentInstance; )
        u = u.componentInstance._vnode;
      return l(u.tag);
    }
    function G(u, f) {
      for (var d = 0; d < r.create.length; ++d)
        r.create[d](he, u);
      t = u.data.hook, l(t) && (l(t.create) && t.create(he, u), l(t.insert) && f.push(u));
    }
    function Ne(u) {
      var f;
      if (l(f = u.fnScopeId))
        o.setStyleScope(u.elm, f);
      else
        for (var d = u; d; )
          l(f = d.context) && l(f = f.$options._scopeId) && o.setStyleScope(u.elm, f), d = d.parent;
      l(f = Ie) && f !== u.context && f !== u.fnContext && l(f = f.$options._scopeId) && o.setStyleScope(u.elm, f);
    }
    function Re(u, f, d, g, y, C) {
      for (; g <= y; ++g)
        m(d[g], C, u, f, !1, d, g);
    }
    function Oe(u) {
      var f, d, g = u.data;
      if (l(g))
        for (l(f = g.hook) && l(f = f.destroy) && f(u), f = 0; f < r.destroy.length; ++f)
          r.destroy[f](u);
      if (l(f = u.children))
        for (d = 0; d < u.children.length; ++d)
          Oe(u.children[d]);
    }
    function oe(u, f, d) {
      for (; f <= d; ++f) {
        var g = u[f];
        l(g) && (l(g.tag) ? (J(g), Oe(g)) : c(g.elm));
      }
    }
    function J(u, f) {
      if (l(f) || l(u.data)) {
        var d, g = r.remove.length + 1;
        for (l(f) ? f.listeners += g : f = s(u.elm, g), l(d = u.componentInstance) && l(d = d._vnode) && l(d.data) && J(d, f), d = 0; d < r.remove.length; ++d)
          r.remove[d](u, f);
        l(d = u.data.hook) && l(d = d.remove) ? d(u, f) : f();
      } else
        c(u.elm);
    }
    function Qe(u, f, d, g, y) {
      var C = 0, O = 0, N = f.length - 1, S = f[0], $ = f[N], D = d.length - 1, L = d[0], X = d[D], Ce, $e, De, We, qt = !y;
      for (process.env.NODE_ENV !== "production" && ze(d); C <= N && O <= D; )
        b(S) ? S = f[++C] : b($) ? $ = f[--N] : Se(S, L) ? (ae(S, L, g, d, O), S = f[++C], L = d[++O]) : Se($, X) ? (ae($, X, g, d, D), $ = f[--N], X = d[--D]) : Se(S, X) ? (ae(S, X, g, d, D), qt && o.insertBefore(u, S.elm, o.nextSibling($.elm)), S = f[++C], X = d[--D]) : Se($, L) ? (ae($, L, g, d, O), qt && o.insertBefore(u, $.elm, S.elm), $ = f[--N], L = d[++O]) : (b(Ce) && (Ce = Ws(f, C, N)), $e = l(L.key) ? Ce[L.key] : mt(L, f, C, N), b($e) ? m(L, g, u, S.elm, !1, d, O) : (De = f[$e], Se(De, L) ? (ae(De, L, g, d, O), f[$e] = void 0, qt && o.insertBefore(u, De.elm, S.elm)) : m(L, g, u, S.elm, !1, d, O)), L = d[++O]);
      C > N ? (We = b(d[D + 1]) ? null : d[D + 1].elm, Re(u, We, d, O, D, g)) : O > D && oe(f, C, N);
    }
    function ze(u) {
      for (var f = {}, d = 0; d < u.length; d++) {
        var g = u[d], y = g.key;
        l(y) && (f[y] ? h("Duplicate keys detected: '".concat(y, "'. This may cause an update error."), g.context) : f[y] = !0);
      }
    }
    function mt(u, f, d, g) {
      for (var y = d; y < g; y++) {
        var C = f[y];
        if (l(C) && Se(u, C))
          return y;
      }
    }
    function ae(u, f, d, g, y, C) {
      if (u !== f) {
        l(f.elm) && l(g) && (f = g[y] = cn(f));
        var O = f.elm = u.elm;
        if (I(u.isAsyncPlaceholder)) {
          l(f.asyncFactory.resolved) ? de(u.elm, f, d) : f.isAsyncPlaceholder = !0;
          return;
        }
        if (I(f.isStatic) && I(u.isStatic) && f.key === u.key && (I(f.isCloned) || I(f.isOnce))) {
          f.componentInstance = u.componentInstance;
          return;
        }
        var N, S = f.data;
        l(S) && l(N = S.hook) && l(N = N.prepatch) && N(u, f);
        var $ = u.children, D = f.children;
        if (l(S) && V(f)) {
          for (N = 0; N < r.update.length; ++N)
            r.update[N](u, f);
          l(N = S.hook) && l(N = N.update) && N(u, f);
        }
        b(f.text) ? l($) && l(D) ? $ !== D && Qe(O, $, D, d, C) : l(D) ? (process.env.NODE_ENV !== "production" && ze(D), l(u.text) && o.setTextContent(O, ""), Re(O, null, D, 0, D.length - 1, d)) : l($) ? oe($, 0, $.length - 1) : l(u.text) && o.setTextContent(O, "") : u.text !== f.text && o.setTextContent(O, f.text), l(S) && l(N = S.hook) && l(N = N.postpatch) && N(u, f);
      }
    }
    function pe(u, f, d) {
      if (I(d) && l(u.parent))
        u.parent.data.pendingInsert = f;
      else
        for (var g = 0; g < f.length; ++g)
          f[g].data.hook.insert(f[g]);
    }
    var we = !1, gt = Y("attrs,class,staticClass,staticStyle,key");
    function de(u, f, d, g) {
      var y, C = f.tag, O = f.data, N = f.children;
      if (g = g || O && O.pre, f.elm = u, I(f.isComment) && l(f.asyncFactory))
        return f.isAsyncPlaceholder = !0, !0;
      if (process.env.NODE_ENV !== "production" && !ke(u, f, g))
        return !1;
      if (l(O) && (l(y = O.hook) && l(y = y.init) && y(
        f,
        !0
        /* hydrating */
      ), l(y = f.componentInstance)))
        return w(f, d), !0;
      if (l(C)) {
        if (l(N))
          if (!u.hasChildNodes())
            ie(f, N, d);
          else if (l(y = O) && l(y = y.domProps) && l(y = y.innerHTML)) {
            if (y !== u.innerHTML)
              return process.env.NODE_ENV !== "production" && typeof console < "u" && !we && (we = !0, console.warn("Parent: ", u), console.warn("server innerHTML: ", y), console.warn("client innerHTML: ", u.innerHTML)), !1;
          } else {
            for (var S = !0, $ = u.firstChild, D = 0; D < N.length; D++) {
              if (!$ || !de($, N[D], d, g)) {
                S = !1;
                break;
              }
              $ = $.nextSibling;
            }
            if (!S || $)
              return process.env.NODE_ENV !== "production" && typeof console < "u" && !we && (we = !0, console.warn("Parent: ", u), console.warn("Mismatching childNodes vs. VNodes: ", u.childNodes, N)), !1;
          }
        if (l(O)) {
          var L = !1;
          for (var X in O)
            if (!gt(X)) {
              L = !0, G(f, d);
              break;
            }
          !L && O.class && Ft(O.class);
        }
      } else
        u.data !== f.text && (u.data = f.text);
      return !0;
    }
    function ke(u, f, d) {
      return l(f.tag) ? f.tag.indexOf("vue-component") === 0 || !p(f, d) && f.tag.toLowerCase() === (u.tagName && u.tagName.toLowerCase()) : u.nodeType === (f.isComment ? 8 : 3);
    }
    return function(f, d, g, y) {
      if (b(d)) {
        l(f) && Oe(f);
        return;
      }
      var C = !1, O = [];
      if (b(f))
        C = !0, m(d, O);
      else {
        var N = l(f.nodeType);
        if (!N && Se(f, d))
          ae(f, d, O, null, null, y);
        else {
          if (N) {
            if (f.nodeType === 1 && f.hasAttribute(Kn) && (f.removeAttribute(Kn), g = !0), I(g)) {
              if (de(f, d, O))
                return pe(d, O, !0), f;
              process.env.NODE_ENV !== "production" && h("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
            }
            f = a(f);
          }
          var S = f.elm, $ = o.parentNode(S);
          if (m(
            d,
            O,
            // extremely rare edge case: do not insert if old element is in a
            // leaving transition. Only happens when combining transition +
            // keep-alive + HOCs. (#4590)
            S._leaveCb ? null : $,
            o.nextSibling(S)
          ), l(d.parent))
            for (var D = d.parent, L = V(d); D; ) {
              for (var X = 0; X < r.destroy.length; ++X)
                r.destroy[X](D);
              if (D.elm = d.elm, L) {
                for (var Ce = 0; Ce < r.create.length; ++Ce)
                  r.create[Ce](he, D);
                var $e = D.data.hook.insert;
                if ($e.merged)
                  for (var De = $e.fns.slice(1), We = 0; We < De.length; We++)
                    De[We]();
              } else
                Ge(D);
              D = D.parent;
            }
          l($) ? oe([f], 0, 0) : l(f.tag) && Oe(f);
        }
      }
      return pe(d, O, C), d.elm;
    };
  }
  var Bs = {
    create: Jt,
    update: Jt,
    destroy: function(t) {
      Jt(t, he);
    }
  };
  function Jt(e, t) {
    (e.data.directives || t.data.directives) && Vs(e, t);
  }
  function Vs(e, t) {
    var n = e === he, r = t === he, i = Tr(e.data.directives, e.context), o = Tr(t.data.directives, t.context), a = [], s = [], c, p, v;
    for (c in o)
      p = i[c], v = o[c], p ? (v.oldValue = p.value, v.oldArg = p.arg, nt(v, "update", t, e), v.def && v.def.componentUpdated && s.push(v)) : (nt(v, "bind", t, e), v.def && v.def.inserted && a.push(v));
    if (a.length) {
      var m = function() {
        for (var _ = 0; _ < a.length; _++)
          nt(a[_], "inserted", t, e);
      };
      n ? ve(t, "insert", m) : m();
    }
    if (s.length && ve(t, "postpatch", function() {
      for (var _ = 0; _ < s.length; _++)
        nt(s[_], "componentUpdated", t, e);
    }), !n)
      for (c in i)
        o[c] || nt(i[c], "unbind", e, e, r);
  }
  var Gs = /* @__PURE__ */ Object.create(null);
  function Tr(e, t) {
    var n = /* @__PURE__ */ Object.create(null);
    if (!e)
      return n;
    var r, i;
    for (r = 0; r < e.length; r++) {
      if (i = e[r], i.modifiers || (i.modifiers = Gs), n[qs(i)] = i, t._setupState && t._setupState.__sfc) {
        var o = i.def || Rt(t, "_setupState", "v-" + i.name);
        typeof o == "function" ? i.def = {
          bind: o,
          update: o
        } : i.def = o;
      }
      i.def = i.def || Rt(t.$options, "directives", i.name, !0);
    }
    return n;
  }
  function qs(e) {
    return e.rawName || "".concat(e.name, ".").concat(Object.keys(e.modifiers || {}).join("."));
  }
  function nt(e, t, n, r, i) {
    var o = e.def && e.def[t];
    if (o)
      try {
        o(n.elm, e, n, r, i);
      } catch (a) {
        ye(a, n.context, "directive ".concat(e.name, " ").concat(t, " hook"));
      }
  }
  var Ys = [zs, Bs];
  function xr(e, t) {
    var n = t.componentOptions;
    if (!(l(n) && n.Ctor.options.inheritAttrs === !1) && !(b(e.data.attrs) && b(t.data.attrs))) {
      var r, i, o, a = t.elm, s = e.data.attrs || {}, c = t.data.attrs || {};
      (l(c.__ob__) || I(c._v_attr_proxy)) && (c = t.data.attrs = x({}, c));
      for (r in c)
        i = c[r], o = s[r], o !== i && Ar(a, r, i, t.data.pre);
      (Xe || oi) && c.value !== s.value && Ar(a, "value", c.value);
      for (r in s)
        b(c[r]) && (Bn(r) ? a.removeAttributeNS(yn, Ai(r)) : xi(r) || a.removeAttribute(r));
    }
  }
  function Ar(e, t, n, r) {
    r || e.tagName.indexOf("-") > -1 ? Ir(e, t, n) : gs(t) ? kt(n) ? e.removeAttribute(t) : (n = t === "allowfullscreen" && e.tagName === "EMBED" ? "true" : t, e.setAttribute(t, n)) : xi(t) ? e.setAttribute(t, ms(t, n)) : Bn(t) ? kt(n) ? e.removeAttributeNS(yn, Ai(t)) : e.setAttributeNS(yn, t, n) : Ir(e, t, n);
  }
  function Ir(e, t, n) {
    if (kt(n))
      e.removeAttribute(t);
    else {
      if (Xe && !Ke && e.tagName === "TEXTAREA" && t === "placeholder" && n !== "" && !e.__ieph) {
        var r = function(i) {
          i.stopImmediatePropagation(), e.removeEventListener("input", r);
        };
        e.addEventListener("input", r), e.__ieph = !0;
      }
      e.setAttribute(t, n);
    }
  }
  var Xs = {
    create: xr,
    update: xr
  };
  function Pr(e, t) {
    var n = t.elm, r = t.data, i = e.data;
    if (!(b(r.staticClass) && b(r.class) && (b(i) || b(i.staticClass) && b(i.class)))) {
      var o = _s(t), a = n._transitionClasses;
      l(a) && (o = Vn(o, Gn(a))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o);
    }
  }
  var Ks = {
    create: Pr,
    update: Pr
  }, Qt = "__r", en = "__c";
  function Zs(e) {
    if (l(e[Qt])) {
      var t = Xe ? "change" : "input";
      e[t] = [].concat(e[Qt], e[t] || []), delete e[Qt];
    }
    l(e[en]) && (e.change = [].concat(e[en], e.change || []), delete e[en]);
  }
  var pt;
  function Js(e, t, n) {
    var r = pt;
    return function i() {
      var o = t.apply(null, arguments);
      o !== null && Pi(e, i, n, r);
    };
  }
  var Qs = pn && !(Zn && Number(Zn[1]) <= 53);
  function ec(e, t, n, r) {
    if (Qs) {
      var i = Ci, o = t;
      t = o._wrapper = function(a) {
        if (
          // no bubbling, should always fire.
          // this is just a safety net in case event.timeStamp is unreliable in
          // certain weird environments...
          a.target === a.currentTarget || // event is fired after handler attachment
          a.timeStamp >= i || // bail for environments that have buggy event.timeStamp implementations
          // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
          // #9681 QtWebEngine event.timeStamp is negative value
          a.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
          // electron/nw.js app, since event.timeStamp will be using a different
          // starting reference
          a.target.ownerDocument !== document
        )
          return o.apply(this, arguments);
      };
    }
    pt.addEventListener(e, t, ai ? { capture: n, passive: r } : n);
  }
  function Pi(e, t, n, r) {
    (r || pt).removeEventListener(
      e,
      //@ts-expect-error
      t._wrapper || t,
      n
    );
  }
  function tn(e, t) {
    if (!(b(e.data.on) && b(t.data.on))) {
      var n = t.data.on || {}, r = e.data.on || {};
      pt = t.elm || e.elm, Zs(n), pi(n, r, ec, Pi, Js, t.context), pt = void 0;
    }
  }
  var tc = {
    create: tn,
    update: tn,
    // @ts-expect-error emptyNode has actually data
    destroy: function(e) {
      return tn(e, he);
    }
  }, wt;
  function Mr(e, t) {
    if (!(b(e.data.domProps) && b(t.data.domProps))) {
      var n, r, i = t.elm, o = e.data.domProps || {}, a = t.data.domProps || {};
      (l(a.__ob__) || I(a._v_attr_proxy)) && (a = t.data.domProps = x({}, a));
      for (n in o)
        n in a || (i[n] = "");
      for (n in a) {
        if (r = a[n], n === "textContent" || n === "innerHTML") {
          if (t.children && (t.children.length = 0), r === o[n])
            continue;
          i.childNodes.length === 1 && i.removeChild(i.childNodes[0]);
        }
        if (n === "value" && i.tagName !== "PROGRESS") {
          i._value = r;
          var s = b(r) ? "" : String(r);
          nc(i, s) && (i.value = s);
        } else if (n === "innerHTML" && qn(i.tagName) && b(i.innerHTML)) {
          wt = wt || document.createElement("div"), wt.innerHTML = "<svg>".concat(r, "</svg>");
          for (var c = wt.firstChild; i.firstChild; )
            i.removeChild(i.firstChild);
          for (; c.firstChild; )
            i.appendChild(c.firstChild);
        } else if (
          // skip the update if old and new VDOM state is the same.
          // `value` is handled separately because the DOM value may be temporarily
          // out of sync with VDOM state due to focus, composition and modifiers.
          // This  #4521 by skipping the unnecessary `checked` update.
          r !== o[n]
        )
          try {
            i[n] = r;
          } catch {
          }
      }
    }
  }
  function nc(e, t) {
    return (
      //@ts-expect-error
      !e.composing && (e.tagName === "OPTION" || rc(e, t) || ic(e, t))
    );
  }
  function rc(e, t) {
    var n = !0;
    try {
      n = document.activeElement !== e;
    } catch {
    }
    return n && e.value !== t;
  }
  function ic(e, t) {
    var n = e.value, r = e._vModifiers;
    if (l(r)) {
      if (r.number)
        return ot(n) !== ot(t);
      if (r.trim)
        return n.trim() !== t.trim();
    }
    return n !== t;
  }
  var oc = {
    create: Mr,
    update: Mr
  }, ac = Fe(function(e) {
    var t = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
    return e.split(n).forEach(function(i) {
      if (i) {
        var o = i.split(r);
        o.length > 1 && (t[o[0].trim()] = o[1].trim());
      }
    }), t;
  });
  function nn(e) {
    var t = Mi(e.style);
    return e.staticStyle ? x(e.staticStyle, t) : t;
  }
  function Mi(e) {
    return Array.isArray(e) ? ei(e) : typeof e == "string" ? ac(e) : e;
  }
  function sc(e, t) {
    var n = {}, r;
    if (t)
      for (var i = e; i.componentInstance; )
        i = i.componentInstance._vnode, i && i.data && (r = nn(i.data)) && x(n, r);
    (r = nn(e.data)) && x(n, r);
    for (var o = e; o = o.parent; )
      o.data && (r = nn(o.data)) && x(n, r);
    return n;
  }
  var cc = /^--/, jr = /\s*!important$/, Lr = function(e, t, n) {
    if (cc.test(t))
      e.style.setProperty(t, n);
    else if (jr.test(n))
      e.style.setProperty(He(t), n.replace(jr, ""), "important");
    else {
      var r = fc(t);
      if (Array.isArray(n))
        for (var i = 0, o = n.length; i < o; i++)
          e.style[r] = n[i];
      else
        e.style[r] = n;
    }
  }, Fr = ["Webkit", "Moz", "ms"], Ct, fc = Fe(function(e) {
    if (Ct = Ct || document.createElement("div").style, e = Me(e), e !== "filter" && e in Ct)
      return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Fr.length; n++) {
      var r = Fr[n] + t;
      if (r in Ct)
        return r;
    }
  });
  function Hr(e, t) {
    var n = t.data, r = e.data;
    if (!(b(n.staticStyle) && b(n.style) && b(r.staticStyle) && b(r.style))) {
      var i, o, a = t.elm, s = r.staticStyle, c = r.normalizedStyle || r.style || {}, p = s || c, v = Mi(t.data.style) || {};
      t.data.normalizedStyle = l(v.__ob__) ? x({}, v) : v;
      var m = sc(t, !0);
      for (o in p)
        b(m[o]) && Lr(a, o, "");
      for (o in m)
        i = m[o], i !== p[o] && Lr(a, o, i ?? "");
    }
  }
  var uc = {
    create: Hr,
    update: Hr
  }, ji = /\s+/;
  function Li(e, t) {
    if (!(!t || !(t = t.trim())))
      if (e.classList)
        t.indexOf(" ") > -1 ? t.split(ji).forEach(function(r) {
          return e.classList.add(r);
        }) : e.classList.add(t);
      else {
        var n = " ".concat(e.getAttribute("class") || "", " ");
        n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
      }
  }
  function Fi(e, t) {
    if (!(!t || !(t = t.trim())))
      if (e.classList)
        t.indexOf(" ") > -1 ? t.split(ji).forEach(function(i) {
          return e.classList.remove(i);
        }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");
      else {
        for (var n = " ".concat(e.getAttribute("class") || "", " "), r = " " + t + " "; n.indexOf(r) >= 0; )
          n = n.replace(r, " ");
        n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class");
      }
  }
  function Hi(e) {
    if (e) {
      if (typeof e == "object") {
        var t = {};
        return e.css !== !1 && x(t, Rr(e.name || "v")), x(t, e), t;
      } else if (typeof e == "string")
        return Rr(e);
    }
  }
  var Rr = Fe(function(e) {
    return {
      enterClass: "".concat(e, "-enter"),
      enterToClass: "".concat(e, "-enter-to"),
      enterActiveClass: "".concat(e, "-enter-active"),
      leaveClass: "".concat(e, "-leave"),
      leaveToClass: "".concat(e, "-leave-to"),
      leaveActiveClass: "".concat(e, "-leave-active")
    };
  }), Ri = B && !Ke, Ue = "transition", rn = "animation", xt = "transition", Wt = "transitionend", En = "animation", zi = "animationend";
  Ri && (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && (xt = "WebkitTransition", Wt = "webkitTransitionEnd"), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && (En = "WebkitAnimation", zi = "webkitAnimationEnd"));
  var zr = B ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
    /* istanbul ignore next */
    function(e) {
      return e();
    }
  );
  function ki(e) {
    zr(function() {
      zr(e);
    });
  }
  function Pe(e, t) {
    var n = e._transitionClasses || (e._transitionClasses = []);
    n.indexOf(t) < 0 && (n.push(t), Li(e, t));
  }
  function fe(e, t) {
    e._transitionClasses && Ee(e._transitionClasses, t), Fi(e, t);
  }
  function Wi(e, t, n) {
    var r = Ui(e, t), i = r.type, o = r.timeout, a = r.propCount;
    if (!i)
      return n();
    var s = i === Ue ? Wt : zi, c = 0, p = function() {
      e.removeEventListener(s, v), n();
    }, v = function(m) {
      m.target === e && ++c >= a && p();
    };
    setTimeout(function() {
      c < a && p();
    }, o + 1), e.addEventListener(s, v);
  }
  var lc = /\b(transform|all)(,|$)/;
  function Ui(e, t) {
    var n = window.getComputedStyle(e), r = (n[xt + "Delay"] || "").split(", "), i = (n[xt + "Duration"] || "").split(", "), o = kr(r, i), a = (n[En + "Delay"] || "").split(", "), s = (n[En + "Duration"] || "").split(", "), c = kr(a, s), p, v = 0, m = 0;
    t === Ue ? o > 0 && (p = Ue, v = o, m = i.length) : t === rn ? c > 0 && (p = rn, v = c, m = s.length) : (v = Math.max(o, c), p = v > 0 ? o > c ? Ue : rn : null, m = p ? p === Ue ? i.length : s.length : 0);
    var _ = p === Ue && lc.test(n[xt + "Property"]);
    return {
      type: p,
      timeout: v,
      propCount: m,
      hasTransform: _
    };
  }
  function kr(e, t) {
    for (; e.length < t.length; )
      e = e.concat(e);
    return Math.max.apply(null, t.map(function(n, r) {
      return Wr(n) + Wr(e[r]);
    }));
  }
  function Wr(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Nn(e, t) {
    var n = e.elm;
    l(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
    var r = Hi(e.data.transition);
    if (!b(r) && !(l(n._enterCb) || n.nodeType !== 1)) {
      for (var i = r.css, o = r.type, a = r.enterClass, s = r.enterToClass, c = r.enterActiveClass, p = r.appearClass, v = r.appearToClass, m = r.appearActiveClass, _ = r.beforeEnter, w = r.enter, M = r.afterEnter, R = r.enterCancelled, ie = r.beforeAppear, V = r.appear, G = r.afterAppear, Ne = r.appearCancelled, Re = r.duration, Oe = Ie, oe = Ie.$vnode; oe && oe.parent; )
        Oe = oe.context, oe = oe.parent;
      var J = !Oe._isMounted || !e.isRootInsert;
      if (!(J && !V && V !== "")) {
        var Qe = J && p ? p : a, ze = J && m ? m : c, mt = J && v ? v : s, ae = J && ie || _, pe = J && A(V) ? V : w, we = J && G || M, gt = J && Ne || R, de = ot(H(Re) ? Re.enter : Re);
        process.env.NODE_ENV !== "production" && de != null && Vi(de, "enter", e);
        var ke = i !== !1 && !Ke, u = Yn(pe), f = n._enterCb = At(function() {
          ke && (fe(n, mt), fe(n, ze)), f.cancelled ? (ke && fe(n, Qe), gt && gt(n)) : we && we(n), n._enterCb = null;
        });
        e.data.show || ve(e, "insert", function() {
          var d = n.parentNode, g = d && d._pending && d._pending[e.key];
          g && g.tag === e.tag && g.elm._leaveCb && g.elm._leaveCb(), pe && pe(n, f);
        }), ae && ae(n), ke && (Pe(n, Qe), Pe(n, ze), ki(function() {
          fe(n, Qe), f.cancelled || (Pe(n, mt), u || (Gi(de) ? setTimeout(f, de) : Wi(n, o, f)));
        })), e.data.show && (t && t(), pe && pe(n, f)), !ke && !u && f();
      }
    }
  }
  function Bi(e, t) {
    var n = e.elm;
    l(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
    var r = Hi(e.data.transition);
    if (b(r) || n.nodeType !== 1)
      return t();
    if (l(n._leaveCb))
      return;
    var i = r.css, o = r.type, a = r.leaveClass, s = r.leaveToClass, c = r.leaveActiveClass, p = r.beforeLeave, v = r.leave, m = r.afterLeave, _ = r.leaveCancelled, w = r.delayLeave, M = r.duration, R = i !== !1 && !Ke, ie = Yn(v), V = ot(H(M) ? M.leave : M);
    process.env.NODE_ENV !== "production" && l(V) && Vi(V, "leave", e);
    var G = n._leaveCb = At(function() {
      n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), R && (fe(n, s), fe(n, c)), G.cancelled ? (R && fe(n, a), _ && _(n)) : (t(), m && m(n)), n._leaveCb = null;
    });
    w ? w(Ne) : Ne();
    function Ne() {
      G.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), p && p(n), R && (Pe(n, a), Pe(n, c), ki(function() {
        fe(n, a), G.cancelled || (Pe(n, s), ie || (Gi(V) ? setTimeout(G, V) : Wi(n, o, G)));
      })), v && v(n, G), !R && !ie && G());
    }
  }
  function Vi(e, t, n) {
    typeof e != "number" ? h("<transition> explicit ".concat(t, " duration is not a valid number - ") + "got ".concat(JSON.stringify(e), "."), n.context) : isNaN(e) && h("<transition> explicit ".concat(t, " duration is NaN - ") + "the duration expression might be incorrect.", n.context);
  }
  function Gi(e) {
    return typeof e == "number" && !isNaN(e);
  }
  function Yn(e) {
    if (b(e))
      return !1;
    var t = e.fns;
    return l(t) ? Yn(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
  }
  function Ur(e, t) {
    t.data.show !== !0 && Nn(t);
  }
  var pc = B ? {
    create: Ur,
    activate: Ur,
    remove: function(e, t) {
      e.data.show !== !0 ? Bi(e, t) : t();
    }
  } : {}, dc = [Xs, Ks, tc, oc, uc, pc], vc = dc.concat(Ys), hc = Us({ nodeOps: Rs, modules: vc });
  Ke && document.addEventListener("selectionchange", function() {
    var e = document.activeElement;
    e && e.vmodel && Xn(e, "input");
  });
  var qi = {
    inserted: function(e, t, n, r) {
      n.tag === "select" ? (r.elm && !r.elm._vOptions ? ve(n, "postpatch", function() {
        qi.componentUpdated(e, t, n);
      }) : Br(e, t, n.context), e._vOptions = [].map.call(e.options, Ut)) : (n.tag === "textarea" || bn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", mc), e.addEventListener("compositionend", qr), e.addEventListener("change", qr), Ke && (e.vmodel = !0)));
    },
    componentUpdated: function(e, t, n) {
      if (n.tag === "select") {
        Br(e, t, n.context);
        var r = e._vOptions, i = e._vOptions = [].map.call(e.options, Ut);
        if (i.some(function(a, s) {
          return !je(a, r[s]);
        })) {
          var o = e.multiple ? t.value.some(function(a) {
            return Gr(a, i);
          }) : t.value !== t.oldValue && Gr(t.value, i);
          o && Xn(e, "change");
        }
      }
    }
  };
  function Br(e, t, n) {
    Vr(e, t, n), (Xe || oi) && setTimeout(function() {
      Vr(e, t, n);
    }, 0);
  }
  function Vr(e, t, n) {
    var r = t.value, i = e.multiple;
    if (i && !Array.isArray(r)) {
      process.env.NODE_ENV !== "production" && h('<select multiple v-model="'.concat(t.expression, '"> ') + "expects an Array value for its binding, but got ".concat(Object.prototype.toString.call(r).slice(8, -1)), n);
      return;
    }
    for (var o, a, s = 0, c = e.options.length; s < c; s++)
      if (a = e.options[s], i)
        o = ni(r, Ut(a)) > -1, a.selected !== o && (a.selected = o);
      else if (je(Ut(a), r)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    i || (e.selectedIndex = -1);
  }
  function Gr(e, t) {
    return t.every(function(n) {
      return !je(n, e);
    });
  }
  function Ut(e) {
    return "_value" in e ? e._value : e.value;
  }
  function mc(e) {
    e.target.composing = !0;
  }
  function qr(e) {
    e.target.composing && (e.target.composing = !1, Xn(e.target, "input"));
  }
  function Xn(e, t) {
    var n = document.createEvent("HTMLEvents");
    n.initEvent(t, !0, !0), e.dispatchEvent(n);
  }
  function On(e) {
    return e.componentInstance && (!e.data || !e.data.transition) ? On(e.componentInstance._vnode) : e;
  }
  var gc = {
    bind: function(e, t, n) {
      var r = t.value;
      n = On(n);
      var i = n.data && n.data.transition, o = e.__vOriginalDisplay = e.style.display === "none" ? "" : e.style.display;
      r && i ? (n.data.show = !0, Nn(n, function() {
        e.style.display = o;
      })) : e.style.display = r ? o : "none";
    },
    update: function(e, t, n) {
      var r = t.value, i = t.oldValue;
      if (!r != !i) {
        n = On(n);
        var o = n.data && n.data.transition;
        o ? (n.data.show = !0, r ? Nn(n, function() {
          e.style.display = e.__vOriginalDisplay;
        }) : Bi(n, function() {
          e.style.display = "none";
        })) : e.style.display = r ? e.__vOriginalDisplay : "none";
      }
    },
    unbind: function(e, t, n, r, i) {
      i || (e.style.display = e.__vOriginalDisplay);
    }
  }, _c = {
    model: qi,
    show: gc
  }, Yi = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };
  function wn(e) {
    var t = e && e.componentOptions;
    return t && t.Ctor.options.abstract ? wn(_i(t.children)) : e;
  }
  function Xi(e) {
    var t = {}, n = e.$options;
    for (var r in n.propsData)
      t[r] = e[r];
    var i = n._parentListeners;
    for (var r in i)
      t[Me(r)] = i[r];
    return t;
  }
  function Yr(e, t) {
    if (/\d-keep-alive$/.test(t.tag))
      return e("keep-alive", {
        props: t.componentOptions.propsData
      });
  }
  function yc(e) {
    for (; e = e.parent; )
      if (e.data.transition)
        return !0;
  }
  function bc(e, t) {
    return t.key === e.key && t.tag === e.tag;
  }
  var Ec = function(e) {
    return e.tag || st(e);
  }, Nc = function(e) {
    return e.name === "show";
  }, Oc = {
    name: "transition",
    props: Yi,
    abstract: !0,
    render: function(e) {
      var t = this, n = this.$slots.default;
      if (n && (n = n.filter(Ec), !!n.length)) {
        process.env.NODE_ENV !== "production" && n.length > 1 && h("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
        var r = this.mode;
        process.env.NODE_ENV !== "production" && r && r !== "in-out" && r !== "out-in" && h("invalid <transition> mode: " + r, this.$parent);
        var i = n[0];
        if (yc(this.$vnode))
          return i;
        var o = wn(i);
        if (!o)
          return i;
        if (this._leaving)
          return Yr(e, i);
        var a = "__transition-".concat(this._uid, "-");
        o.key = o.key == null ? o.isComment ? a + "comment" : a + o.tag : le(o.key) ? String(o.key).indexOf(a) === 0 ? o.key : a + o.key : o.key;
        var s = (o.data || (o.data = {})).transition = Xi(this), c = this._vnode, p = wn(c);
        if (o.data.directives && o.data.directives.some(Nc) && (o.data.show = !0), p && p.data && !bc(o, p) && !st(p) && // #6687 component root is a comment node
        !(p.componentInstance && p.componentInstance._vnode.isComment)) {
          var v = p.data.transition = x({}, s);
          if (r === "out-in")
            return this._leaving = !0, ve(v, "afterLeave", function() {
              t._leaving = !1, t.$forceUpdate();
            }), Yr(e, i);
          if (r === "in-out") {
            if (st(o))
              return c;
            var m, _ = function() {
              m();
            };
            ve(s, "afterEnter", _), ve(s, "enterCancelled", _), ve(v, "delayLeave", function(w) {
              m = w;
            });
          }
        }
        return i;
      }
    }
  }, Ki = x({
    tag: String,
    moveClass: String
  }, Yi);
  delete Ki.mode;
  var wc = {
    props: Ki,
    beforeMount: function() {
      var e = this, t = this._update;
      this._update = function(n, r) {
        var i = Ni(e);
        e.__patch__(
          e._vnode,
          e.kept,
          !1,
          // hydrating
          !0
          // removeOnly (!important, avoids unnecessary moves)
        ), e._vnode = e.kept, i(), t.call(e, n, r);
      };
    },
    render: function(e) {
      for (var t = this.tag || this.$vnode.data.tag || "span", n = /* @__PURE__ */ Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = Xi(this), s = 0; s < i.length; s++) {
        var c = i[s];
        if (c.tag) {
          if (c.key != null && String(c.key).indexOf("__vlist") !== 0)
            o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a;
          else if (process.env.NODE_ENV !== "production") {
            var p = c.componentOptions, v = p ? Ye(p.Ctor.options) || p.tag || "" : c.tag;
            h("<transition-group> children must be keyed: <".concat(v, ">"));
          }
        }
      }
      if (r) {
        for (var m = [], _ = [], s = 0; s < r.length; s++) {
          var c = r[s];
          c.data.transition = a, c.data.pos = c.elm.getBoundingClientRect(), n[c.key] ? m.push(c) : _.push(c);
        }
        this.kept = e(t, null, m), this.removed = _;
      }
      return e(t, null, o);
    },
    updated: function() {
      var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
      !e.length || !this.hasMove(e[0].elm, t) || (e.forEach(Cc), e.forEach($c), e.forEach(Dc), this._reflow = document.body.offsetHeight, e.forEach(function(n) {
        if (n.data.moved) {
          var r = n.elm, i = r.style;
          Pe(r, t), i.transform = i.WebkitTransform = i.transitionDuration = "", r.addEventListener(Wt, r._moveCb = function o(a) {
            a && a.target !== r || (!a || /transform$/.test(a.propertyName)) && (r.removeEventListener(Wt, o), r._moveCb = null, fe(r, t));
          });
        }
      }));
    },
    methods: {
      hasMove: function(e, t) {
        if (!Ri)
          return !1;
        if (this._hasMove)
          return this._hasMove;
        var n = e.cloneNode();
        e._transitionClasses && e._transitionClasses.forEach(function(i) {
          Fi(n, i);
        }), Li(n, t), n.style.display = "none", this.$el.appendChild(n);
        var r = Ui(n);
        return this.$el.removeChild(n), this._hasMove = r.hasTransform;
      }
    }
  };
  function Cc(e) {
    e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
  }
  function $c(e) {
    e.data.newPos = e.elm.getBoundingClientRect();
  }
  function Dc(e) {
    var t = e.data.pos, n = e.data.newPos, r = t.left - n.left, i = t.top - n.top;
    if (r || i) {
      e.data.moved = !0;
      var o = e.elm.style;
      o.transform = o.WebkitTransform = "translate(".concat(r, "px,").concat(i, "px)"), o.transitionDuration = "0s";
    }
  }
  var Sc = {
    Transition: Oc,
    TransitionGroup: wc
  };
  P.config.mustUseProp = vs;
  P.config.isReservedTag = Ii;
  P.config.isReservedAttr = ps;
  P.config.getTagNamespace = ws;
  P.config.isUnknownElement = Cs;
  x(P.options.directives, _c);
  x(P.options.components, Sc);
  P.prototype.__patch__ = B ? hc : j;
  P.prototype.$mount = function(e, t) {
    return e = e && B ? $s(e) : void 0, aa(this, e, t);
  };
  B && setTimeout(function() {
    T.devtools && (It ? It.emit("init", P) : process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && console[console.info ? "info" : "log"](`Download the Vue Devtools extension for a better development experience:
https://github.com/vuejs/vue-devtools`)), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && T.productionTip !== !1 && typeof console < "u" && console[console.info ? "info" : "log"](`You are running Vue in development mode.
Make sure to turn on production mode when deploying for production.
See more tips at https://vuejs.org/guide/deployment.html`);
  }, 0);
  const Bt = new P();
  function Tc(e, t, n, r, i, o, a, s) {
    var c = typeof e == "function" ? e.options : e;
    t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = "data-v-" + o);
    var p;
    if (a ? (p = function(_) {
      _ = _ || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !_ && typeof __VUE_SSR_CONTEXT__ < "u" && (_ = __VUE_SSR_CONTEXT__), i && i.call(this, _), _ && _._registeredComponents && _._registeredComponents.add(a);
    }, c._ssrRegister = p) : i && (p = s ? function() {
      i.call(
        this,
        (c.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : i), p)
      if (c.functional) {
        c._injectStyles = p;
        var v = c.render;
        c.render = function(w, M) {
          return p.call(M), v(w, M);
        };
      } else {
        var m = c.beforeCreate;
        c.beforeCreate = m ? [].concat(m, p) : [p];
      }
    return {
      exports: e,
      options: c
    };
  }
  global.regeneratorRuntime = require("babel-runtime/regenerator");
  const xc = {
    props: {
      col: {
        type: Number,
        default: 2
      },
      width: Number,
      height: {
        type: String
        // default:'100vh',    取消height默认值
      },
      data: {
        type: Array,
        default: []
      },
      gutterWidth: {
        type: Number,
        default: 10
      },
      isTransition: {
        type: Boolean,
        default: !0
      },
      lazyDistance: {
        type: Number,
        default: 300
      },
      loadDistance: {
        type: Number,
        default: 300
      }
    },
    data() {
      return {
        root: null,
        columns: [],
        loadmore: !0,
        timeout: null,
        lazyTimeout: null,
        lastScrollTop: 0,
        timer: null,
        loadedIndex: 0,
        columnWidth: 0,
        isresizing: !1,
        clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
        clientWidth: document.documentElement.clientWidth || document.body.clientWidth
      };
    },
    computed: {
      trueLazyDistance() {
        return this.clientWidth / 375 * this.lazyDistance;
      },
      max() {
        return this.clientWidth / 375 * this.loadDistance;
      }
    },
    watch: {
      col(e) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.init();
          }, 300);
        });
      },
      data(e, t) {
        this.$nextTick(() => {
          clearTimeout(this.timer), this.timer = setTimeout(() => {
            if (!this.isresizing && (e.length < this.loadedIndex && (this.loadedIndex = 0), e.length > t.length || e.length > this.loadedIndex)) {
              if (e.length === t.length) {
                this.resize(this.loadedIndex > 0 ? this.loadedIndex : null);
                return;
              }
              this.resize(t.length > 0 ? t.length : null);
            }
          }, 300);
        });
      }
    },
    methods: {
      init() {
        this.root = this.$refs.vueWaterfall, this.clearColumn();
        for (var e = parseInt(this.col), t = 0; t < e; t++) {
          let n = document.createElement("div");
          n.className = "vue-waterfall-column", this.width ? (n.style.width = this.width + "px", t != 0 && (n.style.marginLeft = this.gutterWidth + "px"), this.columnWidth = this.width) : (n.style.width = 100 / parseInt(e) + "%", this.columnWidth = 100 / parseInt(e) / 100 * document.documentElement.clientWidth), this.root || (this.root = this.$refs.vueWaterfall), this.root && this.root.appendChild(n), this.columns.push(n);
        }
        this.resize();
      },
      async setDomImageHeight(e) {
        if (e.getElementByTagName)
          for (var t = e.getElementByTagName("img"), n = 0; n < t.length; n++) {
            var r = t[n].getAttribute("lazy-src");
            if (!t[n].getAttribute("src") && r) {
              var i = new Image();
              if (i.src = r, i.complete) {
                var o = t[n].offsetWidth || this.columnWidth, a = i.height * o / i.width;
                t[n].offsetWidth && (t[n].style.height = a + "px");
              } else
                await new Promise((s, c) => {
                  i.onload = function() {
                    var p = t[n].offsetWidth || this.columnWidth, v = i.height * p / i.width;
                    t[n].offsetWidth && (t[n].style.height = v + "px"), s();
                  }, i.onerror = function() {
                    s();
                  };
                });
            }
          }
      },
      async append(e) {
        var t = this;
        if (this.columns.length > 0) {
          let r = this.columns[0];
          for (var n = 1; n < this.columns.length; n++)
            await t.getHeight(r) > await t.getHeight(t.columns[n]) && (r = t.columns[n]);
          r && r.appendChild(e), await this.setDomImageHeight(e);
        }
      },
      checkImg(e) {
        return e ? !!(e.getElementsByTagName && e.getElementsByTagName("img").length) : !1;
      },
      async resize(e, t) {
        this.isresizing = !0;
        var n = this;
        if (!this.$slots.default) {
          this.isresizing = !1;
          return;
        }
        !e && e != 0 && !t ? (t = this.$slots.default, this.loadedIndex = 0, this.clear()) : t || (this.loadedIndex = e, t = this.$slots.default.splice(e));
        for (var r = 0; r < t.length; r++) {
          if (t[r].elm && n.checkImg(t[r].elm)) {
            var i = t[r].elm.getElementsByTagName("img"), o = new Image();
            o.src = i[0].src, o.complete ? (await n.append(t[r].elm), n.lazyLoad(i)) : await new Promise((a, s) => {
              o.onload = async function() {
                await n.append(t[r].elm), n.lazyLoad(i), a();
              }, o.onerror = async function() {
                await n.append(t[r].elm), n.lazyLoad(i), a();
              };
            });
          } else
            await n.append(t[r].elm);
          n.loadedIndex++;
        }
        this.isresizing = !1, n.$emit("finish");
      },
      computedPx(e, t) {
        e.style.width = t.width / this.columnWidth;
      },
      lazyLoad(e) {
        if (e || (this.root || (this.root = this.$refs.vueWaterfall), e = this.root && this.root.getElementsByTagName("img")), !(!e || e.length < 0))
          for (var t = 0; t < e.length; t++)
            e[t].className.match("animation") && e[t].getAttribute("src") || (e[t].className.match("animation") && !e[t].getAttribute("src") ? (e[t].src = e[t].getAttribute("lazy-src"), e[t].removeAttribute("lazy-src")) : e[t].getAttribute("src") && !e[t].className.match("animation") ? e[t].className = e[t].className + " animation" : !e[t].getAttribute("src") && e[t].getBoundingClientRect().top < this.clientHeight + this.trueLazyDistance && (e[t].src = e[t].getAttribute("lazy-src"), e[t].className = e[t].className + " animation", e[t].removeAttribute("lazy-src")));
      },
      clearColumn() {
        this.columns.forEach((e) => {
          e.remove();
        }), this.columns = [];
      },
      clear() {
        this.columns.forEach((e) => {
          e.innerHTML = "";
        });
      },
      mix() {
        var e = this.$slots.default;
        e.sort(() => Math.random() - 0.5), this.resize(0, e);
      },
      async getHeight(e) {
        return e.offsetHeight;
      },
      emitLoadMore() {
        if (!this.root)
          return;
        var e = this;
        const t = this.height ? this.root.scrollTop : document.documentElement.scrollTop || document.body.scrollTop, n = this.height ? this.root.scrollHeight : document.documentElement.offsetHeight;
        var r = n - t - e.clientHeight;
        e.$emit("scroll", { scrollHeight: n, scrollTop: t, clientHeight: e.clientHeight, diff: r, time: Date.now() }), r < e.max && e.loadmore && n > e.clientHeight ? (e.lastScrollTop = t, e.loadmore = !1, e.$emit("loadmore")) : r >= e.max && (e.loadmore = !0), clearTimeout(e.lazyTimeout), e.lazyTimeout = setTimeout(function() {
          e.lazyLoad();
        }, 14);
      }
    },
    destroyed() {
      this.root && (this.root.onscroll = null), this.root && (this.root.onresize = null), window.onscroll = null, window.onresize = null;
    },
    beforeCreate() {
      Bt.$on("forceUpdate", () => {
        this.resize();
      }), Bt.$on("mix", () => {
        this.mix();
      });
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
        var e = this;
        this.height ? (this.root.onscroll = function(t) {
          e.emitLoadMore();
        }, this.root.addEventListener("touchmove", function() {
          e.emitLoadMore();
        })) : (window.onscroll = function(t) {
          e.emitLoadMore();
        }, document.addEventListener("touchmove", function() {
          e.emitLoadMore();
        }));
      });
    }
  };
  var Ac = function() {
    var t = this, n = t._self._c;
    return n("div", { ref: "vueWaterfall", staticClass: "vue-waterfall", class: t.isTransition && "is-transition", style: { height: t.height }, attrs: { id: "vueWaterfall" } }, [n("div", { staticClass: "slot-box" }, [t._t("default")], 2)]);
  }, Ic = [], Pc = /* @__PURE__ */ Tc(
    xc,
    Ac,
    Ic,
    !1,
    null,
    null,
    null,
    null
  );
  const Mc = Pc.exports;
  var jc = {
    install: function(t) {
      this.installed || (this.installed = !0, t.component("waterfall", Mc), t.prototype.$waterfall = {
        forceUpdate: function() {
          Bt.$emit("forceUpdate");
        },
        mix: function() {
          Bt.$emit("mix");
        }
      });
    }
  };
  Zi.default = jc;
});
export default Lc();
