// 定义函数A，用于进行一些复杂的计算
function A(t, e = 10) {
    // Generating an array 'n' with precomputed values
    const n = (function () {
        const t = [];
        for (let e = 0; e < 256; e++) {
            let n = e;
            for (let r = 0; r < 8; r++)
                n = 1 & n ? 3988292384 ^ (n >>> 1) : n >>> 1;
            t[e] = n;
        }
        return t;
    })();

    // Encoding input 't' based on character codes
    const r = t.replace(/\r\n/g, "\n");
    let a = -1;
    for (let i = 0; i < r.length; i++)
        a = (a >>> 8) ^ n[(255 & (a ^ r.charCodeAt(i)))];

    // Converting 'a' to an unsigned 32-bit integer and returning as a string of base 'e'
    return ((-1 ^ a) >>> 0).toString(e);
}


// 定义全局变量
global.e = '/b/api/file/list/new'
global.n = "web"
global.r = 3
global.timestamp = 1702555131

function generateTimestamp() {
    return Math.round(((new Date).getTime() + 60 * (new Date).getTimezoneOffset() * 1e3 + 288e5) / 1e3).toString();
}

function adjustTimestamp(o, timestamp) {
    if (timestamp) {
        var i = timestamp;
        var m = i;
        if (20 <= Math.abs(1e3 * o - 1e3 * m) / 1e3 / 60) {
            return i;
        }
    }
    return o;
}



function formatDate(t, e, n) {
    var r;
    n = 8
    t = 1000 * Number.parseInt(t);
    t += 60000 * new Date(t).getTimezoneOffset();
    var data = {
        y: (r = new Date(t + 36e5 * n)).getFullYear(),
        m: r.getMonth() + 1 < 10 ? "0".concat(r.getMonth() + 1) : r.getMonth() + 1,
        d: r.getDate() < 10 ? "0".concat(r.getDate()) : r.getDate(),
        h: r.getHours() < 10 ? "0".concat(r.getHours()) : r.getHours(),
        f: r.getMinutes() < 10 ? "0".concat(r.getMinutes()) : r.getMinutes()
    }
    return data
}

function generateSignature(a, o, e, n, r) {
    var s = ["a", "d", "e", "f", "g", "h", "l", "m", "y", "i", "j", "n", "o", "p", "k", "q", "r", "s", "t", "u", "b", "c", "v", "w", "s", "z"];
    var u = formatDate(o);
    console.log(u)
    var h = u.y;
    var g = u.m;
    var l = u.d;
    var c = u.h;
    var u = u.f;
    var d = [h, g, l, c, u].join("");
    var f = [];
    for (var p in d) {
        f.push(s[Number(d[p])]);
    }
    console.log(f.join(""))
    h = A(f.join(""));
    g = A("".concat(o, "|").concat(a, "|").concat(e, "|").concat(n, "|").concat(r, "|").concat(h));
    return [h, "".concat(o, "-").concat(a, "-").concat(g)];
}

var a = Math.round(1e7 * Math.random());
var o = generateTimestamp();
o = 1702556971
console.log(o)
o = adjustTimestamp(o, timestamp);
console.log(o)
var e = '/b/api/file/list/new';
var n = "web";
var r = 3;
console.log(generateSignature(a, o, e, n, r));
