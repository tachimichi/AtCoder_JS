// TODO
//*   ABC 091 B - Two Colors Card Game

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const s = [];
    for (let i = 1; i <= n; i++) {
        const a = input[i].trim();
        s.push(a);
    }

    const m = parseInt(input[n + 1], 10);
    const t = [];
    for (let i = n + 2; i <= n + m + 1; i++) {
        const a = input[i].trim();
        t.push(a);
    }
    // console.log(s);
    // console.log(t);
    //* -------------------------------
    let mp = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mp.has(s[i])) {
            //* 重複+1をa[i]にセットする
            mp.set(s[i], mp.get(s[i]) + 1);
        } else {
            //* s[i]に1をセットする
            mp.set(s[i], 1);
        }
    }
    // console.log(mp);

    for (let i = 0; i < t.length; i++) {
        if (mp.has(t[i])) {
            mp.set(t[i], mp.get(t[i]) - 1);
        } else {
            mp.set(t[i], -1);
        }
    }
    // console.log(mp);

    let max = 0;
    mp.forEach(element => {
        max = Math.max(max, element);
    });
    console.log(max);

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