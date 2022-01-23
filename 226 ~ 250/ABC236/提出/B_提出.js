// TODO
//*   ABC 236 B - Who is missing?

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    const ar = new Array(n).fill(0);
    // console.log(ar);

    for (let i = 0; i < a.length; i++) {
        ar[a[i] - 1]++;
    }
    // console.log(ar);
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == 3) return console.log(i + 1);
    }
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