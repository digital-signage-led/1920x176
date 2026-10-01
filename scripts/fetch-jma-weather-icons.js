'use strict';

var fs = require('fs');
var path = require('path');
var https = require('https');

/* 気象庁 bosai の昼アイコン。天気コード118種が指すファイルだけ保存する。 */
var MAP = {
    100: '100.svg', 101: '101.svg', 102: '102.svg', 103: '102.svg', 104: '104.svg',
    105: '104.svg', 106: '102.svg', 107: '102.svg', 108: '102.svg', 110: '110.svg',
    111: '110.svg', 112: '112.svg', 113: '112.svg', 114: '112.svg', 115: '115.svg',
    116: '115.svg', 117: '115.svg', 118: '112.svg', 119: '112.svg', 120: '102.svg',
    121: '102.svg', 122: '112.svg', 123: '100.svg', 124: '100.svg', 125: '112.svg',
    126: '112.svg', 127: '112.svg', 128: '112.svg', 130: '100.svg', 131: '100.svg',
    132: '101.svg', 140: '102.svg', 160: '104.svg', 170: '104.svg', 181: '115.svg',
    200: '200.svg', 201: '201.svg', 202: '202.svg', 203: '202.svg', 204: '204.svg',
    205: '204.svg', 206: '202.svg', 207: '202.svg', 208: '202.svg', 209: '200.svg',
    210: '210.svg', 211: '210.svg', 212: '212.svg', 213: '212.svg', 214: '212.svg',
    215: '215.svg', 216: '215.svg', 217: '215.svg', 218: '212.svg', 219: '212.svg',
    220: '202.svg', 221: '202.svg', 222: '212.svg', 223: '201.svg', 224: '212.svg',
    225: '212.svg', 226: '212.svg', 228: '215.svg', 229: '215.svg', 230: '215.svg',
    231: '200.svg', 240: '202.svg', 250: '204.svg', 260: '204.svg', 270: '204.svg',
    281: '215.svg', 300: '300.svg', 301: '301.svg', 302: '302.svg', 303: '303.svg',
    304: '300.svg', 306: '300.svg', 308: '308.svg', 309: '303.svg', 311: '311.svg',
    313: '313.svg', 314: '314.svg', 315: '314.svg', 316: '311.svg', 317: '313.svg',
    320: '311.svg', 321: '313.svg', 322: '303.svg', 323: '311.svg', 324: '311.svg',
    325: '311.svg', 326: '314.svg', 327: '314.svg', 328: '300.svg', 329: '300.svg',
    340: '400.svg', 350: '300.svg', 361: '411.svg', 371: '413.svg', 400: '400.svg',
    401: '401.svg', 402: '402.svg', 403: '403.svg', 405: '400.svg', 406: '406.svg',
    407: '406.svg', 409: '403.svg', 411: '411.svg', 413: '413.svg', 414: '414.svg',
    420: '411.svg', 421: '413.svg', 422: '414.svg', 423: '414.svg', 425: '400.svg',
    426: '400.svg', 427: '400.svg', 450: '400.svg'
};

var root = path.join(__dirname, '..');
var dir = path.join(root, 'shared', 'assets', 'jma-weather');

function get(url) {
    return new Promise(function (resolve, reject) {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, function (res) {
            if (res.statusCode !== 200) {
                res.resume();
                reject(new Error(url + ' HTTP ' + res.statusCode));
                return;
            }
            var chunks = [];
            res.on('data', function (c) { chunks.push(c); });
            res.on('end', function () { resolve(Buffer.concat(chunks)); });
        }).on('error', reject);
    });
}

function writeMapJs(codes, files) {
    var lines = codes.map(function (c) {
        return '        ' + c + ": '" + MAP[c] + "'";
    }).join(',\n');
    var js = [
        '/* 気象庁天気予報アイコン（昼）。天気コード' + codes.length + '種 → 絵柄' + files.length + 'ファイル。',
        '   出典: https://www.jma.go.jp/bosai/forecast/img/ （政府標準利用規約） */',
        '(function (global) {',
        '    var script = document.currentScript;',
        "    var base = new URL('../assets/jma-weather/', script && script.src || './').href;",
        '    var FILE = {',
        lines,
        '    };',
        '    function url(code) {',
        '        var wc = Number(code);',
        '        var file = FILE[wc];',
        '        if (!file) {',
        "            if (!isFinite(wc)) file = '100.svg';",
        "            else if (wc >= 400) file = '400.svg';",
        "            else if (wc >= 300) file = '300.svg';",
        "            else if (wc >= 200) file = '200.svg';",
        "            else file = '100.svg';",
        '        }',
        '        return base + file;',
        '    }',
        '    global.JmaWeatherIcons = { url: url, codes: FILE };',
        "})(typeof window !== 'undefined' ? window : global);",
        ''
    ].join('\n');
    fs.writeFileSync(path.join(root, 'shared', 'js', 'jma-weather-icons.js'), js);
}

async function main() {
    var codes = Object.keys(MAP);
    if (codes.length !== 118) throw new Error('expected 118 codes, got ' + codes.length);
    var files = Array.from(new Set(codes.map(function (c) { return MAP[c]; })));
    fs.mkdirSync(dir, { recursive: true });
    var bytes = 0;
    for (var i = 0; i < files.length; i++) {
        var name = files[i];
        var buf = await get('https://www.jma.go.jp/bosai/forecast/img/' + name);
        if (buf.toString('utf8').indexOf('<svg') < 0) throw new Error('not svg ' + name);
        fs.writeFileSync(path.join(dir, name), buf);
        bytes += buf.length;
        console.log(name, buf.length);
    }
    writeMapJs(codes, files);
    console.log('codes', codes.length, 'files', files.length, 'bytes', bytes);
}

main().catch(function (e) {
    console.error(e);
    process.exit(1);
});
