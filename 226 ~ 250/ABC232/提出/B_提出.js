// TODO
//*   ABC 232 B - Caesar Cipher

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let s = input[0].trim().split('');
    let t = input[1].trim().split('');
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    let a = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // 配列の中にあるインデックス番号を取得する
        const si = alphabet.indexOf(s[i]);
        const ti = alphabet.indexOf(t[i]);
        // console.log(si);
        // console.log(ti);

        let howLength = (si <= ti) ? ti - si : 26 - si + ti;
        // console.log(howLength);
        a.push(howLength);

        if (i > 0) {
            if (a[i] != a[i - 1]) {
                return console.log("No");
            } else {
                count++;
            }
        }
    }
    // 数が一致しているなら
    console.log(count + 1 == s.length ? "Yes" : "No");
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}