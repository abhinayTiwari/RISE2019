! function() { const e = function(e) { const t = {},
                n = { 1: 25, 2: 20, 3: 15, 4: 10, 5: 5 }; return e.forEach(function(e) { for (let o in e) { let r = n[e[o]]; if (t[o]) { let e = r + t[o];
                        t[o] = e } else t[o] = r } }), t },
        t = (n = 5, e => Object.keys(e).sort(function(t, n) { return e[n] - e[t] }).slice(0, n)); var n;
    window.risePosterWinners = function(n) { if ("object" != typeof n) return "Please send the JSON Object data"; if (!n.Items || 0 == n.Items.length) return "No Data Available yet!!"; const o = n.Items.map(e => e.ChosenPosters); return t(e(o)) } }();