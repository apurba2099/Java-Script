var e,
  t,
  r,
  n,
  i,
  o,
  a,
  s,
  c,
  u,
  l,
  d,
  f,
  p,
  h,
  v,
  g,
  m,
  y,
  b,
  _ = globalThis;
function w(e) {
  return e && e.__esModule ? e.default : e;
}
var k = {},
  E = {},
  S = _.parcelRequire94c2;
null == S &&
  (((S = function (e) {
    if (e in k) return k[e].exports;
    if (e in E) {
      var t = E[e];
      delete E[e];
      var r = { id: e, exports: {} };
      return (k[e] = r), t.call(r.exports, r, r.exports), r.exports;
    }
    var n = Error("Cannot find module '" + e + "'");
    throw ((n.code = 'MODULE_NOT_FOUND'), n);
  }).register = function (e, t) {
    E[e] = t;
  }),
  (_.parcelRequire94c2 = S)),
  (0, S.register)('27Lyk', function (e, t) {
    Object.defineProperty(e.exports, 'register', {
      get: () => r,
      set: e => (r = e),
      enumerable: !0,
      configurable: !0,
    });
    var r,
      n = new Map();
    r = function (e, t) {
      for (var r = 0; r < t.length - 1; r += 2)
        n.set(t[r], { baseUrl: e, path: t[r + 1] });
    };
  }),
  S('27Lyk').register(
    new URL('', import.meta.url).toString(),
    JSON.parse('["f9fpV","index.bb769e61.js","eyyUD","icons.c5b0f01c.svg"]')
  );
var O = {},
  j = {},
  F = function (e) {
    return e && e.Math === Math && e;
  };
j =
  F('object' == typeof globalThis && globalThis) ||
  F('object' == typeof window && window) ||
  F('object' == typeof self && self) ||
  F('object' == typeof _ && _) ||
  F('object' == typeof j && j) ||
  (function () {
    return this;
  })() ||
  Function('return this')();
var $ = {},
  L = {};
$ = !(L = function (e) {
  try {
    return !!e();
  } catch (e) {
    return !0;
  }
})(function () {
  return (
    7 !==
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1]
  );
});
var x = {},
  M = {};
M = !L(function () {
  var e = function () {}.bind();
  return 'function' != typeof e || e.hasOwnProperty('prototype');
});
var P = Function.prototype.call;
x = M
  ? P.bind(P)
  : function () {
      return P.apply(P, arguments);
    };
var T = {}.propertyIsEnumerable,
  N = Object.getOwnPropertyDescriptor;
i =
  N && !T.call({ 1: 2 }, 1)
    ? function (e) {
        var t = N(this, e);
        return !!t && t.enumerable;
      }
    : T;
var A = {};
A = function (e, t) {
  return {
    enumerable: !(1 & e),
    configurable: !(2 & e),
    writable: !(4 & e),
    value: t,
  };
};
var H = {},
  q = {},
  I = {},
  D = Function.prototype,
  R = D.call,
  C = M && D.bind.bind(R, R),
  U = {},
  W = (I = M
    ? C
    : function (e) {
        return function () {
          return R.apply(e, arguments);
        };
      })({}.toString),
  z = I(''.slice);
U = function (e) {
  return z(W(e), 8, -1);
};
var B = Object,
  G = I(''.split);
q = L(function () {
  return !B('z').propertyIsEnumerable(0);
})
  ? function (e) {
      return 'String' === U(e) ? G(e, '') : B(e);
    }
  : B;
var J = {},
  V = {};
V = function (e) {
  return null == e;
};
var Y = TypeError;
(J = function (e) {
  if (V(e)) throw new Y("Can't call method on " + e);
  return e;
}),
  (H = function (e) {
    return q(J(e));
  });
var Q = {},
  K = {},
  X = {},
  Z = {},
  ee = 'object' == typeof document && document.all;
(Z =
  void 0 === ee && void 0 !== ee
    ? function (e) {
        return 'function' == typeof e || e === ee;
      }
    : function (e) {
        return 'function' == typeof e;
      }),
  (X = function (e) {
    return 'object' == typeof e ? null !== e : Z(e);
  });
var et = {},
  er = {};
er = function (e, t) {
  var r;
  return arguments.length < 2
    ? ((r = j[e]), Z(r) ? r : void 0)
    : j[e] && j[e][t];
};
var en = {};
en = I({}.isPrototypeOf);
var ei = {},
  eo = {},
  ea = {},
  es = {},
  ec = j.navigator,
  eu = ec && ec.userAgent;
es = eu ? String(eu) : '';
var el = j.process,
  ed = j.Deno,
  ef = (el && el.versions) || (ed && ed.version),
  ep = ef && ef.v8;
ep && (a = (o = ep.split('.'))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])),
  !a &&
    es &&
    (!(o = es.match(/Edge\/(\d+)/)) || o[1] >= 74) &&
    (o = es.match(/Chrome\/(\d+)/)) &&
    (a = +o[1]),
  (ea = a);
var eh = j.String;
ei =
  (eo =
    !!Object.getOwnPropertySymbols &&
    !L(function () {
      var e = Symbol('symbol detection');
      return (
        !eh(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && ea && ea < 41)
      );
    })) &&
  !Symbol.sham &&
  'symbol' == typeof Symbol.iterator;
var ev = Object;
et = ei
  ? function (e) {
      return 'symbol' == typeof e;
    }
  : function (e) {
      var t = er('Symbol');
      return Z(t) && en(t.prototype, ev(e));
    };
var eg = {},
  em = {},
  ey = {},
  eb = String;
ey = function (e) {
  try {
    return eb(e);
  } catch (e) {
    return 'Object';
  }
};
var e_ = TypeError;
(em = function (e) {
  if (Z(e)) return e;
  throw new e_(ey(e) + ' is not a function');
}),
  (eg = function (e, t) {
    var r = e[t];
    return V(r) ? void 0 : em(r);
  });
var ew = {},
  ek = TypeError;
ew = function (e, t) {
  var r, n;
  if (
    ('string' === t && Z((r = e.toString)) && !X((n = x(r, e)))) ||
    (Z((r = e.valueOf)) && !X((n = x(r, e)))) ||
    ('string' !== t && Z((r = e.toString)) && !X((n = x(r, e))))
  )
    return n;
  throw new ek("Can't convert object to primitive value");
};
var eE = {},
  eS = {},
  eO = {},
  ej = {};
ej = !1;
var eF = {},
  e$ = Object.defineProperty;
eF = function (e, t) {
  try {
    e$(j, e, { value: t, configurable: !0, writable: !0 });
  } catch (r) {
    j[e] = t;
  }
  return t;
};
var eL = '__core-js_shared__',
  ex = (eO = j[eL] || eF(eL, {}));
(ex.versions || (ex.versions = [])).push({
  version: '3.41.0',
  mode: ej ? 'pure' : 'global',
  copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE',
  source: 'https://github.com/zloirock/core-js',
}),
  (eS = function (e, t) {
    return eO[e] || (eO[e] = t || {});
  });
var eM = {},
  eP = {},
  eT = Object;
eP = function (e) {
  return eT(J(e));
};
var eN = I({}.hasOwnProperty);
eM =
  Object.hasOwn ||
  function (e, t) {
    return eN(eP(e), t);
  };
var eA = {},
  eH = 0,
  eq = Math.random(),
  eI = I((1).toString);
eA = function (e) {
  return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + eI(++eH + eq, 36);
};
var eD = j.Symbol,
  eR = eS('wks'),
  eC = ei ? eD.for || eD : (eD && eD.withoutSetter) || eA,
  eU = TypeError,
  eW = (eE = function (e) {
    return (
      eM(eR, e) || (eR[e] = eo && eM(eD, e) ? eD[e] : eC('Symbol.' + e)), eR[e]
    );
  })('toPrimitive');
(K = function (e, t) {
  if (!X(e) || et(e)) return e;
  var r,
    n = eg(e, eW);
  if (n) {
    if ((void 0 === t && (t = 'default'), (r = x(n, e, t)), !X(r) || et(r)))
      return r;
    throw new eU("Can't convert object to primitive value");
  }
  return void 0 === t && (t = 'number'), ew(e, t);
}),
  (Q = function (e) {
    var t = K(e, 'string');
    return et(t) ? t : t + '';
  });
var ez = {},
  eB = {},
  eG = j.document,
  eJ = X(eG) && X(eG.createElement);
(eB = function (e) {
  return eJ ? eG.createElement(e) : {};
}),
  (ez =
    !$ &&
    !L(function () {
      return (
        7 !==
        Object.defineProperty(eB('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }));
var eV = Object.getOwnPropertyDescriptor;
n = $
  ? eV
  : function (e, t) {
      if (((e = H(e)), (t = Q(t)), ez))
        try {
          return eV(e, t);
        } catch (e) {}
      if (eM(e, t)) return A(!x(i, e, t), e[t]);
    };
var eY = {},
  eQ = {};
eQ =
  $ &&
  L(function () {
    return (
      42 !==
      Object.defineProperty(function () {}, 'prototype', {
        value: 42,
        writable: !1,
      }).prototype
    );
  });
var eK = {},
  eX = String,
  eZ = TypeError;
eK = function (e) {
  if (X(e)) return e;
  throw new eZ(eX(e) + ' is not an object');
};
var e0 = TypeError,
  e1 = Object.defineProperty,
  e2 = Object.getOwnPropertyDescriptor,
  e4 = 'enumerable',
  e5 = 'configurable',
  e7 = 'writable';
(s = $
  ? eQ
    ? function (e, t, r) {
        if (
          (eK(e),
          (t = Q(t)),
          eK(r),
          'function' == typeof e &&
            'prototype' === t &&
            'value' in r &&
            e7 in r &&
            !r[e7])
        ) {
          var n = e2(e, t);
          n &&
            n[e7] &&
            ((e[t] = r.value),
            (r = {
              configurable: e5 in r ? r[e5] : n[e5],
              enumerable: e4 in r ? r[e4] : n[e4],
              writable: !1,
            }));
        }
        return e1(e, t, r);
      }
    : e1
  : function (e, t, r) {
      if ((eK(e), (t = Q(t)), eK(r), ez))
        try {
          return e1(e, t, r);
        } catch (e) {}
      if ('get' in r || 'set' in r) throw new e0('Accessors not supported');
      return 'value' in r && (e[t] = r.value), e;
    }),
  (eY = $
    ? function (e, t, r) {
        return s(e, t, A(1, r));
      }
    : function (e, t, r) {
        return (e[t] = r), e;
      });
var e8 = {},
  e3 = {},
  e9 = {},
  e6 = Function.prototype,
  te = $ && Object.getOwnPropertyDescriptor,
  tt = eM(e6, 'name'),
  tr = tt && (!$ || ($ && te(e6, 'name').configurable)),
  tn = {},
  ti = I(Function.toString);
Z(eO.inspectSource) ||
  (eO.inspectSource = function (e) {
    return ti(e);
  }),
  (tn = eO.inspectSource);
var to = {},
  ta = {},
  ts = j.WeakMap;
ta = Z(ts) && /native code/.test(String(ts));
var tc = {},
  tu = eS('keys');
tc = function (e) {
  return tu[e] || (tu[e] = eA(e));
};
var tl = {};
tl = {};
var tf = 'Object already initialized',
  tp = j.TypeError,
  th = j.WeakMap;
if (ta || eO.state) {
  var tv = eO.state || (eO.state = new th());
  (tv.get = tv.get),
    (tv.has = tv.has),
    (tv.set = tv.set),
    (c = function (e, t) {
      if (tv.has(e)) throw new tp(tf);
      return (t.facade = e), tv.set(e, t), t;
    }),
    (u = function (e) {
      return tv.get(e) || {};
    }),
    (l = function (e) {
      return tv.has(e);
    });
} else {
  var tg = tc('state');
  (tl[tg] = !0),
    (c = function (e, t) {
      if (eM(e, tg)) throw new tp(tf);
      return (t.facade = e), eY(e, tg, t), t;
    }),
    (u = function (e) {
      return eM(e, tg) ? e[tg] : {};
    }),
    (l = function (e) {
      return eM(e, tg);
    });
}
var tm = (to = {
    set: c,
    get: u,
    has: l,
    enforce: function (e) {
      return l(e) ? u(e) : c(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var r;
        if (!X(t) || (r = u(t)).type !== e)
          throw new tp('Incompatible receiver, ' + e + ' required');
        return r;
      };
    },
  }).enforce,
  ty = to.get,
  tb = String,
  t_ = Object.defineProperty,
  tw = I(''.slice),
  tk = I(''.replace),
  tE = I([].join),
  tS =
    $ &&
    !L(function () {
      return 8 !== t_(function () {}, 'length', { value: 8 }).length;
    }),
  tO = String(String).split('String'),
  tj = (e3 = function (e, t, r) {
    'Symbol(' === tw(tb(t), 0, 7) &&
      (t = '[' + tk(tb(t), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
      r && r.getter && (t = 'get ' + t),
      r && r.setter && (t = 'set ' + t),
      (!eM(e, 'name') || (tr && e.name !== t)) &&
        ($ ? t_(e, 'name', { value: t, configurable: !0 }) : (e.name = t)),
      tS &&
        r &&
        eM(r, 'arity') &&
        e.length !== r.arity &&
        t_(e, 'length', { value: r.arity });
    try {
      r && eM(r, 'constructor') && r.constructor
        ? $ && t_(e, 'prototype', { writable: !1 })
        : e.prototype && (e.prototype = void 0);
    } catch (e) {}
    var n = tm(e);
    return (
      eM(n, 'source') || (n.source = tE(tO, 'string' == typeof t ? t : '')), e
    );
  });
(Function.prototype.toString = tj(function () {
  return (Z(this) && ty(this).source) || tn(this);
}, 'toString')),
  (e8 = function (e, t, r, n) {
    n || (n = {});
    var i = n.enumerable,
      o = void 0 !== n.name ? n.name : t;
    if ((Z(r) && e3(r, o, n), n.global)) i ? (e[t] = r) : eF(t, r);
    else {
      try {
        n.unsafe ? e[t] && (i = !0) : delete e[t];
      } catch (e) {}
      i
        ? (e[t] = r)
        : s(e, t, {
            value: r,
            enumerable: !1,
            configurable: !n.nonConfigurable,
            writable: !n.nonWritable,
          });
    }
    return e;
  });
var tF = {},
  t$ = {},
  tL = {},
  tx = {},
  tM = {},
  tP = {},
  tT = {},
  tN = Math.ceil,
  tA = Math.floor;
(tT =
  Math.trunc ||
  function (e) {
    var t = +e;
    return (t > 0 ? tA : tN)(t);
  }),
  (tP = function (e) {
    var t = +e;
    return t != t || 0 === t ? 0 : tT(t);
  });
var tH = Math.max,
  tq = Math.min;
tM = function (e, t) {
  var r = tP(e);
  return r < 0 ? tH(r + t, 0) : tq(r, t);
};
var tI = {},
  tD = {},
  tR = Math.min;
(tD = function (e) {
  var t = tP(e);
  return t > 0 ? tR(t, 0x1fffffffffffff) : 0;
}),
  (tI = function (e) {
    return tD(e.length);
  });
var tC = function (e) {
    return function (t, r, n) {
      var i,
        o = H(t),
        a = tI(o);
      if (0 === a) return !e && -1;
      var s = tM(n, a);
      if (e && r != r) {
        for (; a > s; ) if ((i = o[s++]) != i) return !0;
      } else
        for (; a > s; s++) if ((e || s in o) && o[s] === r) return e || s || 0;
      return !e && -1;
    };
  },
  tU = { includes: tC(!0), indexOf: tC(!1) }.indexOf,
  tW = I([].push);
tL = function (e, t) {
  var r,
    n = H(e),
    i = 0,
    o = [];
  for (r in n) !eM(tl, r) && eM(n, r) && tW(o, r);
  for (; t.length > i; ) eM(n, (r = t[i++])) && (~tU(o, r) || tW(o, r));
  return o;
};
var tz = {},
  tB = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ].concat('length', 'prototype');
(d =
  Object.getOwnPropertyNames ||
  function (e) {
    return tL(e, tB);
  }),
  (f = Object.getOwnPropertySymbols);
var tG = I([].concat);
(t$ =
  er('Reflect', 'ownKeys') ||
  function (e) {
    var t = d(eK(e));
    return f ? tG(t, f(e)) : t;
  }),
  (tF = function (e, t, r) {
    for (var i = t$(t), o = 0; o < i.length; o++) {
      var a = i[o];
      eM(e, a) || (r && eM(r, a)) || s(e, a, n(t, a));
    }
  });
var tJ = {},
  tV = /#|\.prototype\./,
  tY = function (e, t) {
    var r = tK[tQ(e)];
    return r === tZ || (r !== tX && (Z(t) ? L(t) : !!t));
  },
  tQ = (tY.normalize = function (e) {
    return String(e).replace(tV, '.').toLowerCase();
  }),
  tK = (tY.data = {}),
  tX = (tY.NATIVE = 'N'),
  tZ = (tY.POLYFILL = 'P');
(tJ = tY),
  (O = function (e, t) {
    var r,
      i,
      o,
      a,
      s,
      c = e.target,
      u = e.global,
      l = e.stat;
    if ((r = u ? j : l ? j[c] || eF(c, {}) : j[c] && j[c].prototype))
      for (i in t) {
        if (
          ((a = t[i]),
          (o = e.dontCallGetSet ? (s = n(r, i)) && s.value : r[i]),
          !tJ(u ? i : c + (l ? '.' : '#') + i, e.forced) && void 0 !== o)
        ) {
          if (typeof a == typeof o) continue;
          tF(a, o);
        }
        (e.sham || (o && o.sham)) && eY(a, 'sham', !0), e8(r, i, a, e);
      }
  });
var t0 = {},
  t1 = Function.prototype,
  t2 = t1.apply,
  t4 = t1.call;
t0 =
  ('object' == typeof Reflect && Reflect.apply) ||
  (M
    ? t4.bind(t2)
    : function () {
        return t4.apply(t2, arguments);
      });
var t5 = {};
t5 = I([].slice);
var t7 = TypeError,
  t8 = function (e) {
    var t, r;
    (this.promise = new e(function (e, n) {
      if (void 0 !== t || void 0 !== r) throw new t7('Bad Promise constructor');
      (t = e), (r = n);
    })),
      (this.resolve = em(t)),
      (this.reject = em(r));
  };
p = function (e) {
  return new t8(e);
};
var t3 = {};
t3 = function (e) {
  try {
    return { error: !1, value: e() };
  } catch (e) {
    return { error: !0, value: e };
  }
};
var t9 = j.Promise,
  t6 = !1;
O(
  {
    target: 'Promise',
    stat: !0,
    forced:
      !t9 ||
      !t9.try ||
      t3(function () {
        t9.try(function (e) {
          t6 = 8 === e;
        }, 8);
      }).error ||
      !t6,
  },
  {
    try: function (e) {
      var t = arguments.length > 1 ? t5(arguments, 1) : [],
        r = p(this),
        n = t3(function () {
          return t0(em(e), void 0, t);
        });
      return (n.error ? r.reject : r.resolve)(n.value), r.promise;
    },
  }
);
var re = {},
  rt = {};
(rt = j),
  (h = eE),
  (re = function (e) {
    var t = rt.Symbol || (rt.Symbol = {});
    eM(t, e) || s(t, e, { value: h(e) });
  });
var rr = j.Symbol;
if ((re('dispose'), rr)) {
  var rn = n(rr, 'dispose');
  rn.enumerable &&
    rn.configurable &&
    rn.writable &&
    s(rr, 'dispose', {
      value: rn.value,
      enumerable: !1,
      configurable: !1,
      writable: !1,
    });
}
var ri = {},
  ro = {},
  ra = {},
  rs = (ra = function (e) {
    if ('Function' === U(e)) return I(e);
  })(ra.bind);
ro = function (e, t) {
  return (
    em(e),
    void 0 === t
      ? e
      : M
      ? rs(e, t)
      : function () {
          return e.apply(t, arguments);
        }
  );
};
var rc = {};
rc = er('document', 'documentElement');
var ru = {},
  rl = TypeError;
ru = function (e, t) {
  if (e < t) throw new rl('Not enough arguments');
  return e;
};
var rd = {};
rd = /(?:ipad|iphone|ipod).*applewebkit/i.test(es);
var rf = {},
  rp = {},
  rh = function (e) {
    return es.slice(0, e.length) === e;
  };
rf =
  'NODE' ===
  (rp = rh('Bun/')
    ? 'BUN'
    : rh('Cloudflare-Workers')
    ? 'CLOUDFLARE'
    : rh('Deno/')
    ? 'DENO'
    : rh('Node.js/')
    ? 'NODE'
    : j.Bun && 'string' == typeof Bun.version
    ? 'BUN'
    : j.Deno && 'object' == typeof Deno.version
    ? 'DENO'
    : 'process' === U(j.process)
    ? 'NODE'
    : j.window && j.document
    ? 'BROWSER'
    : 'REST');
var rv = j.setImmediate,
  rg = j.clearImmediate,
  rm = j.process,
  ry = j.Dispatch,
  rb = j.Function,
  r_ = j.MessageChannel,
  rw = j.String,
  rk = 0,
  rE = {},
  rS = 'onreadystatechange';
L(function () {
  v = j.location;
});
var rO = function (e) {
    if (eM(rE, e)) {
      var t = rE[e];
      delete rE[e], t();
    }
  },
  rj = function (e) {
    return function () {
      rO(e);
    };
  },
  rF = function (e) {
    rO(e.data);
  },
  r$ = function (e) {
    j.postMessage(rw(e), v.protocol + '//' + v.host);
  };
(rv && rg) ||
  ((rv = function (e) {
    ru(arguments.length, 1);
    var t = Z(e) ? e : rb(e),
      r = t5(arguments, 1);
    return (
      (rE[++rk] = function () {
        t0(t, void 0, r);
      }),
      g(rk),
      rk
    );
  }),
  (rg = function (e) {
    delete rE[e];
  }),
  rf
    ? (g = function (e) {
        rm.nextTick(rj(e));
      })
    : ry && ry.now
    ? (g = function (e) {
        ry.now(rj(e));
      })
    : r_ && !rd
    ? ((y = (m = new r_()).port2),
      (m.port1.onmessage = rF),
      (g = ro(y.postMessage, y)))
    : j.addEventListener &&
      Z(j.postMessage) &&
      !j.importScripts &&
      v &&
      'file:' !== v.protocol &&
      !L(r$)
    ? ((g = r$), j.addEventListener('message', rF, !1))
    : (g =
        rS in eB('script')
          ? function (e) {
              rc.appendChild(eB('script'))[rS] = function () {
                rc.removeChild(this), rO(e);
              };
            }
          : function (e) {
              setTimeout(rj(e), 0);
            }));
var rL = (ri = { set: rv, clear: rg }).clear;
O(
  { global: !0, bind: !0, enumerable: !0, forced: j.clearImmediate !== rL },
  { clearImmediate: rL }
);
var rx = ri.set,
  rM = {},
  rP = j.Function,
  rT =
    /MSIE .\./.test(es) ||
    ('BUN' === rp &&
      ((e = j.Bun.version.split('.')).length < 3 ||
        ('0' === e[0] && (e[1] < 3 || ('3' === e[1] && '0' === e[2])))));
rM = function (e, t) {
  var r = t ? 2 : 1;
  return rT
    ? function (n, i) {
        var o = ru(arguments.length, 1) > r,
          a = Z(n) ? n : rP(n),
          s = o ? t5(arguments, r) : [],
          c = o
            ? function () {
                t0(a, this, s);
              }
            : a;
        return t ? e(c, i) : e(c);
      }
    : e;
};
var rN = j.setImmediate ? rM(rx, !1) : rx;
O(
  { global: !0, bind: !0, enumerable: !0, forced: j.setImmediate !== rN },
  { setImmediate: rN }
);
var rA = (function (e) {
  var t,
    r = Object.prototype,
    n = r.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (e, t, r) {
        e[t] = r.value;
      },
    o = 'function' == typeof Symbol ? Symbol : {},
    a = o.iterator || '@@iterator',
    s = o.asyncIterator || '@@asyncIterator',
    c = o.toStringTag || '@@toStringTag';
  function u(e, t, r) {
    return (
      Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      e[t]
    );
  }
  try {
    u({}, '');
  } catch (e) {
    u = function (e, t, r) {
      return (e[t] = r);
    };
  }
  function l(e, r, n, o) {
    var a,
      s,
      c,
      u,
      l = Object.create((r && r.prototype instanceof g ? r : g).prototype);
    return (
      i(l, '_invoke', {
        value:
          ((a = e),
          (s = n),
          (c = new F(o || [])),
          (u = f),
          function (e, r) {
            if (u === p) throw Error('Generator is already running');
            if (u === h) {
              if ('throw' === e) throw r;
              return { value: t, done: !0 };
            }
            for (c.method = e, c.arg = r; ; ) {
              var n = c.delegate;
              if (n) {
                var i = (function e(r, n) {
                  var i = n.method,
                    o = r.iterator[i];
                  if (o === t)
                    return (
                      (n.delegate = null),
                      ('throw' === i &&
                        r.iterator.return &&
                        ((n.method = 'return'),
                        (n.arg = t),
                        e(r, n),
                        'throw' === n.method)) ||
                        ('return' !== i &&
                          ((n.method = 'throw'),
                          (n.arg = TypeError(
                            "The iterator does not provide a '" + i + "' method"
                          )))),
                      v
                    );
                  var a = d(o, r.iterator, n.arg);
                  if ('throw' === a.type)
                    return (
                      (n.method = 'throw'),
                      (n.arg = a.arg),
                      (n.delegate = null),
                      v
                    );
                  var s = a.arg;
                  return s
                    ? s.done
                      ? ((n[r.resultName] = s.value),
                        (n.next = r.nextLoc),
                        'return' !== n.method &&
                          ((n.method = 'next'), (n.arg = t)),
                        (n.delegate = null),
                        v)
                      : s
                    : ((n.method = 'throw'),
                      (n.arg = TypeError('iterator result is not an object')),
                      (n.delegate = null),
                      v);
                })(n, c);
                if (i) {
                  if (i === v) continue;
                  return i;
                }
              }
              if ('next' === c.method) c.sent = c._sent = c.arg;
              else if ('throw' === c.method) {
                if (u === f) throw ((u = h), c.arg);
                c.dispatchException(c.arg);
              } else 'return' === c.method && c.abrupt('return', c.arg);
              u = p;
              var o = d(a, s, c);
              if ('normal' === o.type) {
                if (((u = c.done ? h : 'suspendedYield'), o.arg === v))
                  continue;
                return { value: o.arg, done: c.done };
              }
              'throw' === o.type &&
                ((u = h), (c.method = 'throw'), (c.arg = o.arg));
            }
          }),
      }),
      l
    );
  }
  function d(e, t, r) {
    try {
      return { type: 'normal', arg: e.call(t, r) };
    } catch (e) {
      return { type: 'throw', arg: e };
    }
  }
  e.wrap = l;
  var f = 'suspendedStart',
    p = 'executing',
    h = 'completed',
    v = {};
  function g() {}
  function m() {}
  function y() {}
  var b = {};
  u(b, a, function () {
    return this;
  });
  var _ = Object.getPrototypeOf,
    w = _ && _(_($([])));
  w && w !== r && n.call(w, a) && (b = w);
  var k = (y.prototype = g.prototype = Object.create(b));
  function E(e) {
    ['next', 'throw', 'return'].forEach(function (t) {
      u(e, t, function (e) {
        return this._invoke(t, e);
      });
    });
  }
  function S(e, t) {
    var r;
    i(this, '_invoke', {
      value: function (i, o) {
        function a() {
          return new t(function (r, a) {
            !(function r(i, o, a, s) {
              var c = d(e[i], e, o);
              if ('throw' === c.type) s(c.arg);
              else {
                var u = c.arg,
                  l = u.value;
                return l && 'object' == typeof l && n.call(l, '__await')
                  ? t.resolve(l.__await).then(
                      function (e) {
                        r('next', e, a, s);
                      },
                      function (e) {
                        r('throw', e, a, s);
                      }
                    )
                  : t.resolve(l).then(
                      function (e) {
                        (u.value = e), a(u);
                      },
                      function (e) {
                        return r('throw', e, a, s);
                      }
                    );
              }
            })(i, o, r, a);
          });
        }
        return (r = r ? r.then(a, a) : a());
      },
    });
  }
  function O(e) {
    var t = { tryLoc: e[0] };
    1 in e && (t.catchLoc = e[1]),
      2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
      this.tryEntries.push(t);
  }
  function j(e) {
    var t = e.completion || {};
    (t.type = 'normal'), delete t.arg, (e.completion = t);
  }
  function F(e) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      e.forEach(O, this),
      this.reset(!0);
  }
  function $(e) {
    if (null != e) {
      var r = e[a];
      if (r) return r.call(e);
      if ('function' == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var i = -1,
          o = function r() {
            for (; ++i < e.length; )
              if (n.call(e, i)) return (r.value = e[i]), (r.done = !1), r;
            return (r.value = t), (r.done = !0), r;
          };
        return (o.next = o);
      }
    }
    throw TypeError(typeof e + ' is not iterable');
  }
  return (
    (m.prototype = y),
    i(k, 'constructor', { value: y, configurable: !0 }),
    i(y, 'constructor', { value: m, configurable: !0 }),
    (m.displayName = u(y, c, 'GeneratorFunction')),
    (e.isGeneratorFunction = function (e) {
      var t = 'function' == typeof e && e.constructor;
      return (
        !!t && (t === m || 'GeneratorFunction' === (t.displayName || t.name))
      );
    }),
    (e.mark = function (e) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(e, y)
          : ((e.__proto__ = y), u(e, c, 'GeneratorFunction')),
        (e.prototype = Object.create(k)),
        e
      );
    }),
    (e.awrap = function (e) {
      return { __await: e };
    }),
    E(S.prototype),
    u(S.prototype, s, function () {
      return this;
    }),
    (e.AsyncIterator = S),
    (e.async = function (t, r, n, i, o) {
      void 0 === o && (o = Promise);
      var a = new S(l(t, r, n, i), o);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (e) {
            return e.done ? e.value : a.next();
          });
    }),
    E(k),
    u(k, c, 'Generator'),
    u(k, a, function () {
      return this;
    }),
    u(k, 'toString', function () {
      return '[object Generator]';
    }),
    (e.keys = function (e) {
      var t = Object(e),
        r = [];
      for (var n in t) r.push(n);
      return (
        r.reverse(),
        function e() {
          for (; r.length; ) {
            var n = r.pop();
            if (n in t) return (e.value = n), (e.done = !1), e;
          }
          return (e.done = !0), e;
        }
      );
    }),
    (e.values = $),
    (F.prototype = {
      constructor: F,
      reset: function (e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(j),
          !e)
        )
          for (var r in this)
            't' === r.charAt(0) &&
              n.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var e = this.tryEntries[0].completion;
        if ('throw' === e.type) throw e.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function i(n, i) {
          return (
            (s.type = 'throw'),
            (s.arg = e),
            (r.next = n),
            i && ((r.method = 'next'), (r.arg = t)),
            !!i
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var a = this.tryEntries[o],
            s = a.completion;
          if ('root' === a.tryLoc) return i('end');
          if (a.tryLoc <= this.prev) {
            var c = n.call(a, 'catchLoc'),
              u = n.call(a, 'finallyLoc');
            if (c && u) {
              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return i(a.finallyLoc);
            } else if (c) {
              if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
            } else if (u) {
              if (this.prev < a.finallyLoc) return i(a.finallyLoc);
            } else throw Error('try statement without catch or finally');
          }
        }
      },
      abrupt: function (e, t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var i = this.tryEntries[r];
          if (
            i.tryLoc <= this.prev &&
            n.call(i, 'finallyLoc') &&
            this.prev < i.finallyLoc
          ) {
            var o = i;
            break;
          }
        }
        o &&
          ('break' === e || 'continue' === e) &&
          o.tryLoc <= t &&
          t <= o.finallyLoc &&
          (o = null);
        var a = o ? o.completion : {};
        return ((a.type = e), (a.arg = t), o)
          ? ((this.method = 'next'), (this.next = o.finallyLoc), v)
          : this.complete(a);
      },
      complete: function (e, t) {
        if ('throw' === e.type) throw e.arg;
        return (
          'break' === e.type || 'continue' === e.type
            ? (this.next = e.arg)
            : 'return' === e.type
            ? ((this.rval = this.arg = e.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : 'normal' === e.type && t && (this.next = t),
          v
        );
      },
      finish: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.finallyLoc === e)
            return this.complete(r.completion, r.afterLoc), j(r), v;
        }
      },
      catch: function (e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.tryLoc === e) {
            var n = r.completion;
            if ('throw' === n.type) {
              var i = n.arg;
              j(r);
            }
            return i;
          }
        }
        throw Error('illegal catch attempt');
      },
      delegateYield: function (e, r, n) {
        return (
          (this.delegate = { iterator: $(e), resultName: r, nextLoc: n }),
          'next' === this.method && (this.arg = t),
          v
        );
      },
    }),
    e
  );
})({});
try {
  regeneratorRuntime = rA;
} catch (e) {
  'object' == typeof globalThis
    ? (globalThis.regeneratorRuntime = rA)
    : Function('r', 'regeneratorRuntime = r')(rA);
}
const rH = 'https://forkify-api.herokuapp.com/api/v2/recipes/',
  rq = '32ebb452-18e0-479a-a1de-f1b2fa6d9530',
  rI = async function (e, t) {
    try {
      let r = t
          ? fetch(e, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(t),
            })
          : fetch(e),
        n = await Promise.race([
          r,
          new Promise(function (e, t) {
            setTimeout(function () {
              t(Error('Request took too long! Timeout after 10 second'));
            }, 1e4);
          }),
        ]),
        i = await n.json();
      if (!n.ok) throw Error(`${i.message} (${n.status})`);
      return i;
    } catch (e) {
      throw e;
    }
  },
  rD = {
    recipe: {},
    search: { query: '', results: [], page: 1, resultsPerPage: 10 },
    bookmarks: [],
  },
  rR = function (e) {
    let { recipe: t } = e.data;
    return {
      id: t.id,
      title: t.title,
      publisher: t.publisher,
      sourceUrl: t.source_url,
      image: t.image_url,
      servings: t.servings,
      cookingTime: t.cooking_time,
      ingredients: t.ingredients,
      ...(t.key && { key: t.key }),
    };
  },
  rC = async function (e) {
    try {
      let t = await rI(`${rH}${e}?key=${rq}`);
      (rD.recipe = rR(t)),
        rD.bookmarks.some(t => t.id === e)
          ? (rD.recipe.bookmarked = !0)
          : (rD.recipe.bookmarked = !1),
        console.log(rD.recipe);
    } catch (e) {
      throw (console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`), e);
    }
  },
  rU = async function (e) {
    try {
      rD.search.query = e;
      let t = await rI(`${rH}?search=${e}&key=${rq}`);
      console.log(t),
        (rD.search.results = t.data.recipes.map(e => ({
          id: e.id,
          title: e.title,
          publisher: e.publisher,
          image: e.image_url,
          ...(e.key && { key: e.key }),
        }))),
        (rD.search.page = 1);
    } catch (e) {
      throw (console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`), e);
    }
  },
  rW = function (e = rD.search.page) {
    rD.search.page = e;
    let t = (e - 1) * rD.search.resultsPerPage,
      r = e * rD.search.resultsPerPage;
    return rD.search.results.slice(t, r);
  },
  rz = function (e) {
    rD.recipe.ingredients.forEach(t => {
      t.quantity = (t.quantity * e) / rD.recipe.servings;
    }),
      (rD.recipe.servings = e);
  },
  rB = function () {
    localStorage.setItem('bookmarks', JSON.stringify(rD.bookmarks));
  },
  rG = function (e) {
    rD.bookmarks.push(e),
      e.id === rD.recipe.id && (rD.recipe.bookmarked = !0),
      rB();
  },
  rJ = function (e) {
    let t = rD.bookmarks.findIndex(t => t.id === e);
    rD.bookmarks.splice(t, 1),
      e === rD.recipe.id && (rD.recipe.bookmarked = !1),
      rB();
  };
!(function () {
  let e = localStorage.getItem('bookmarks');
  e && (rD.bookmarks = JSON.parse(e));
})();
const rV = async function (e) {
  try {
    let t = Object.entries(e)
        .filter(e => e[0].startsWith('ingredient') && '' !== e[1])
        .map(e => {
          let t = e[1].split(',').map(e => e.trim());
          if (3 !== t.length)
            throw Error(
              'Wrong ingredient fromat! Please use the correct format :)'
            );
          let [r, n, i] = t;
          return { quantity: r ? +r : null, unit: n, description: i };
        }),
      r = {
        title: e.title,
        source_url: e.sourceUrl,
        image_url: e.image,
        publisher: e.publisher,
        cooking_time: +e.cookingTime,
        servings: +e.servings,
        ingredients: t,
      },
      n = await rI(`${rH}?key=${rq}`, r);
    (rD.recipe = rR(n)), rG(rD.recipe);
  } catch (e) {
    throw e;
  }
};
var rY = {};
rY = new URL('icons.c5b0f01c.svg', import.meta.url).toString();
class rQ {
  _data;
  render(e, t = !0) {
    if (!e || (Array.isArray(e) && 0 === e.length)) return this.renderError();
    this._data = e;
    let r = this._generateMarkup();
    if (!t) return r;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', r);
  }
  update(e) {
    this._data = e;
    let t = this._generateMarkup(),
      r = Array.from(
        document.createRange().createContextualFragment(t).querySelectorAll('*')
      ),
      n = Array.from(this._parentElement.querySelectorAll('*'));
    r.forEach((e, t) => {
      let r = n[t];
      e.isEqualNode(r) ||
        e.firstChild?.nodeValue.trim() === '' ||
        (r.textContent = e.textContent),
        e.isEqualNode(r) ||
          Array.from(e.attributes).forEach(e =>
            r.setAttribute(e.name, e.value)
          );
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    let e = `
      <div class="spinner">
        <svg>
          <use href="${w(rY)}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', e);
  }
  renderError(e = this._errorMessage) {
    let t = `
      <div class="error">
        <div>
          <svg>
            <use href="${w(rY)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', t);
  }
  renderMessage(e = this._message) {
    let t = `
      <div class="message">
        <div>
          <svg>
            <use href="${w(rY)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>
    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', t);
  }
}
((Fraction = function (e, t) {
  if (void 0 !== e && t)
    'number' == typeof e && 'number' == typeof t
      ? ((this.numerator = e), (this.denominator = t))
      : 'string' == typeof e &&
        'string' == typeof t &&
        ((this.numerator = parseInt(e)), (this.denominator = parseInt(t)));
  else if (void 0 === t) {
    if ('number' == typeof (num = e))
      (this.numerator = num), (this.denominator = 1);
    else if ('string' == typeof num) {
      var r,
        n,
        i = num.split(' ');
      if (
        (i[0] && (r = i[0]),
        i[1] && (n = i[1]),
        r % 1 == 0 && n && n.match('/'))
      )
        return new Fraction(r).add(new Fraction(n));
      if (!r || n) return;
      if ('string' == typeof r && r.match('/')) {
        var o = r.split('/');
        (this.numerator = o[0]), (this.denominator = o[1]);
      } else {
        if ('string' == typeof r && r.match('.'))
          return new Fraction(parseFloat(r));
        (this.numerator = parseInt(r)), (this.denominator = 1);
      }
    }
  }
  this.normalize();
}).prototype.clone = function () {
  return new Fraction(this.numerator, this.denominator);
}),
  (Fraction.prototype.toString = function () {
    if ('NaN' === this.denominator) return 'NaN';
    var e =
        this.numerator / this.denominator > 0
          ? Math.floor(this.numerator / this.denominator)
          : Math.ceil(this.numerator / this.denominator),
      t = this.numerator % this.denominator,
      r = this.denominator,
      n = [];
    return (
      0 != e && n.push(e),
      0 != t && n.push((0 === e ? t : Math.abs(t)) + '/' + r),
      n.length > 0 ? n.join(' ') : 0
    );
  }),
  (Fraction.prototype.rescale = function (e) {
    return (this.numerator *= e), (this.denominator *= e), this;
  }),
  (Fraction.prototype.add = function (e) {
    var t = this.clone();
    return (
      (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
      (td = t.denominator),
      t.rescale(e.denominator),
      e.rescale(td),
      (t.numerator += e.numerator),
      t.normalize()
    );
  }),
  (Fraction.prototype.subtract = function (e) {
    var t = this.clone();
    return (
      (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
      (td = t.denominator),
      t.rescale(e.denominator),
      e.rescale(td),
      (t.numerator -= e.numerator),
      t.normalize()
    );
  }),
  (Fraction.prototype.multiply = function (e) {
    var t = this.clone();
    if (e instanceof Fraction)
      (t.numerator *= e.numerator), (t.denominator *= e.denominator);
    else {
      if ('number' != typeof e) return t.multiply(new Fraction(e));
      t.numerator *= e;
    }
    return t.normalize();
  }),
  (Fraction.prototype.divide = function (e) {
    var t = this.clone();
    if (e instanceof Fraction)
      (t.numerator *= e.denominator), (t.denominator *= e.numerator);
    else {
      if ('number' != typeof e) return t.divide(new Fraction(e));
      t.denominator *= e;
    }
    return t.normalize();
  }),
  (Fraction.prototype.equals = function (e) {
    e instanceof Fraction || (e = new Fraction(e));
    var t = this.clone().normalize(),
      e = e.clone().normalize();
    return t.numerator === e.numerator && t.denominator === e.denominator;
  }),
  (Fraction.prototype.normalize =
    ((t = function (e) {
      return (
        'number' == typeof e &&
        ((e > 0 && e % 1 > 0 && e % 1 < 1) ||
          (e < 0 && e % -1 < 0 && e % -1 > -1))
      );
    }),
    (r = function (e, t) {
      if (!t) return Math.round(e);
      var r = Math.pow(10, t);
      return Math.round(e * r) / r;
    }),
    function () {
      if (t(this.denominator)) {
        var e = r(this.denominator, 9),
          n = Math.pow(10, e.toString().split('.')[1].length);
        (this.denominator = Math.round(this.denominator * n)),
          (this.numerator *= n);
      }
      if (t(this.numerator)) {
        var e = r(this.numerator, 9),
          n = Math.pow(10, e.toString().split('.')[1].length);
        (this.numerator = Math.round(this.numerator * n)),
          (this.denominator *= n);
      }
      var i = Fraction.gcf(this.numerator, this.denominator);
      return (
        (this.numerator /= i),
        (this.denominator /= i),
        ((this.numerator < 0 && this.denominator < 0) ||
          (this.numerator > 0 && this.denominator < 0)) &&
          ((this.numerator *= -1), (this.denominator *= -1)),
        this
      );
    })),
  (Fraction.gcf = function (e, t) {
    var r = [],
      n = Fraction.primeFactors(e),
      i = Fraction.primeFactors(t);
    return (n.forEach(function (e) {
      var t = i.indexOf(e);
      t >= 0 && (r.push(e), i.splice(t, 1));
    }),
    0 === r.length)
      ? 1
      : (function () {
          var e,
            t = r[0];
          for (e = 1; e < r.length; e++) t *= r[e];
          return t;
        })();
  }),
  (Fraction.primeFactors = function (e) {
    for (var t = Math.abs(e), r = [], n = 2; n * n <= t; )
      t % n == 0 ? (r.push(n), (t /= n)) : n++;
    return 1 != t && r.push(t), r;
  }),
  (b = Fraction);
class rK extends rQ {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = '';
  addHandlerRender(e) {
    ['hashchange', 'load'].forEach(t => window.addEventListener(t, e));
  }
  addHandlerUpdateServings(e) {
    this._parentElement.addEventListener('click', function (t) {
      let r = t.target.closest('.btn--update-servings');
      if (!r) return;
      let { updateTo: n } = r.dataset;
      +n > 0 && e(+n);
    });
  }
  addHandlerAddBookmark(e) {
    this._parentElement.addEventListener('click', function (t) {
      t.target.closest('.btn--bookmark') && e();
    });
  }
  _generateMarkup() {
    return `
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${
      this._data.title
    }" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${w(rY)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            this._data.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${w(rY)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            this._data.servings
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.servings - 1
            }">
              <svg>
                <use href="${w(rY)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.servings + 1
            }">
              <svg>
                <use href="${w(rY)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg>
            <use href="${w(rY)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${w(rY)}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join('')}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            this._data.publisher
          }</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${w(rY)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
  }
  _generateMarkupIngredient(e) {
    return `
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${w(rY)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        e.quantity ? new b(e.quantity).toString() : ''
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
      </div>
    </li>
  `;
  }
}
var rX = new rK();
class rZ {
  _parentEl = document.querySelector('.search');
  getQuery() {
    let e = this._parentEl.querySelector('.search__field').value;
    return this._clearInput(), e;
  }
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(e) {
    this._parentEl.addEventListener('submit', function (t) {
      t.preventDefault(), e();
    });
  }
}
var r0 = new rZ(),
  r1 = new (class extends rQ {
    _parentElement = '';
    _generateMarkup() {
      let e = window.location.hash.slice(1);
      return `
      <li class="preview">
        <a class="preview__link ${
          this._data.id === e ? 'preview__link--active' : ''
        }" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${
              this._data.key ? '' : 'hidden'
            }">
              <svg>
              <use href="${w(rY)}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
    }
  })();
class r2 extends rQ {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';
  _generateMarkup() {
    return this._data.map(e => r1.render(e, !1)).join('');
  }
}
var r4 = new r2();
class r5 extends rQ {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(e) {
    this._parentElement.addEventListener('click', function (t) {
      let r = t.target.closest('.btn--inline');
      r && e(+r.dataset.goto);
    });
  }
  _generateMarkup() {
    let e = this._data.page,
      t = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    return 1 === e && t > 1
      ? `
        <button data-goto="${e + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${e + 1}</span>
          <svg class="search__icon">
            <use href="${w(rY)}#icon-arrow-right"></use>
          </svg>
        </button>
      `
      : e === t && t > 1
      ? `
        <button data-goto="${e - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${w(rY)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e - 1}</span>
        </button>
      `
      : e < t
      ? `
        <button data-goto="${e - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${w(rY)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e - 1}</span>
        </button>
        <button data-goto="${e + 1}" class="btn--inline pagination__btn--next">
          <span>Page ${e + 1}</span>
          <svg class="search__icon">
            <use href="${w(rY)}#icon-arrow-right"></use>
          </svg>
        </button>
      `
      : '';
  }
}
var r7 = new r5();
class r8 extends rQ {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';
  addHandlerRender(e) {
    window.addEventListener('load', e);
  }
  _generateMarkup() {
    return this._data.map(e => r1.render(e, !1)).join('');
  }
}
var r3 = new r8();
class r9 extends rQ {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  constructor() {
    super(), this._addHandlerShowWindow(), this._addHandlerHideWindow();
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden'),
      this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this)),
      this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerUpload(e) {
    this._parentElement.addEventListener('submit', function (t) {
      t.preventDefault(), e(Object.fromEntries([...new FormData(this)]));
    });
  }
  _generateMarkup() {}
}
var r6 = new r9();
const ne = async function () {
    try {
      let e = window.location.hash.slice(1);
      if (!e) return;
      rX.renderSpinner(),
        r4.update(rW()),
        r3.update(rD.bookmarks),
        await rC(e),
        rX.render(rD.recipe);
    } catch (e) {
      rX.renderError(), console.error(e);
    }
  },
  nt = async function () {
    try {
      r4.renderSpinner();
      let e = r0.getQuery();
      if (!e) return;
      await rU(e), r4.render(rW()), r7.render(rD.search);
    } catch (e) {
      console.log(e);
    }
  },
  nr = async function (e) {
    try {
      r6.renderSpinner(),
        await rV(e),
        console.log(rD.recipe),
        rX.render(rD.recipe),
        r6.renderMessage(),
        r3.render(rD.bookmarks),
        window.history.pushState(null, '', `#${rD.recipe.id}`),
        setTimeout(function () {
          r6.toggleWindow();
        }, 2500);
    } catch (e) {
      console.error('\uD83D\uDCA5', e), r6.renderError(e.message);
    }
  };
r3.addHandlerRender(function () {
  r3.render(rD.bookmarks);
}),
  rX.addHandlerRender(ne),
  rX.addHandlerUpdateServings(function (e) {
    rz(e), rX.update(rD.recipe);
  }),
  rX.addHandlerAddBookmark(function () {
    rD.recipe.bookmarked ? rJ(rD.recipe.id) : rG(rD.recipe),
      rX.update(rD.recipe),
      r3.render(rD.bookmarks);
  }),
  r0.addHandlerSearch(nt),
  r7.addHandlerClick(function (e) {
    r4.render(rW(e)), r7.render(rD.search);
  }),
  r6.addHandlerUpload(nr);
//# sourceMappingURL=index.bb769e61.js.map
