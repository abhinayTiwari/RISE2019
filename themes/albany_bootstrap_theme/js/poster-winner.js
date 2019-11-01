! function() { const e = (5, e => Object.keys(e).sort(function(t, n) { return e[n] - e[t] }).slice(0, 6));
    window.risePosterWinners = function(t) { if ("object" != typeof t) return "Please send the JSON Object data"; if (!t.Items || 0 == t.Items.length) return "No Data Available yet!!"; const n = t.Items.map(e => e.ChosenPosters); return e(function(e) { const t = {},
                n = { 1: 25, 2: 20, 3: 15, 4: 10, 5: 5 }; return e.forEach(function(e) { for (let o in e) { let s = n[e[o]]; if (t[o]) { let e = s + t[o];
                        t[o] = e } else t[o] = s } }), t }(n)) } }();