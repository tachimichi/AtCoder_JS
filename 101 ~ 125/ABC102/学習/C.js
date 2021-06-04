// TODO
//*   ABC 102 C - Linear Approximation

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    // console.log(a);

    let b = [];
    for (let i = 0; i < n; i++) {
        b[i] = a[i] - i - 1;
    }
    // console.log(b);

    //* 中央値を求める
    b.sort((a, b) => a - b);
    let x = b[Math.floor(n / 2)];
    // console.log(x);
    // console.log(b);

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.max(x - b[i], b[i] - x);
    }
    console.log(ans);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
