// TODO
//*   ABC 094 C - Many Medians

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const t = input[1].trim().split(' ').map(n => parseInt(n, 10));
    t.sort((a, b) => a - b);
    // console.log(a);
    // console.log(t);

    const m1 = t[n / 2 - 1];
    const m2 = t[n / 2];
    // console.log(m1, m2);

    for (let i = 0; i < a.length; i++) {
        //* a[i]が半分より左側なら
        if (a[i] <= m1) {
            //* n/2番目が中央値となる
            console.log(m2);
        } else {
            //* 右側なら、n/2-1番目が中央値となる
            console.log(m1);
        }
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
