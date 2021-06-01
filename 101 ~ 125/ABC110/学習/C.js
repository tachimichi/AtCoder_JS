// TODO
//*   ABC 110 C - String Transformation

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const s = input[0].trim().split('');
    const t = input[1].trim().split('');

    // console.log(s);
    // console.log(t);
    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < s.length; i++) {
        //* map1にs[i]のキーを持っているかどうか
        if (map1.has(s[i])) {
            //* s[i]が保持しているmap1にt[i]のアルファベットを正しく持っているかどうか
            if (map1.get(s[i]) != t[i]) {
                return console.log("No");
            }
        } else {
            //* 無い場合は、セットする
            map1.set(s[i], t[i]);
        }

        //* map2にt[i]のキーを持っているかどうか
        if (map2.has(t[i])) {
            //* s[i]が保持しているmap2にt[i]のアルファベットを正しく持っているかどうか
            if (map2.get(t[i]) != s[i]) {
                return console.log("No");
            }
        } else {
            //* 無い場合は、セットする
            map2.set(t[i], s[i]);
        }
    }
    console.log("Yes");
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
