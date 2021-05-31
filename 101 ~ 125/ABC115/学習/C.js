// TODO
//*   ABC 115 C - Christmas Eve

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let t = [];
    for (let i = 1; i <= n; i++) {
        const h = parseInt(input[i], 10);
        t.push(h);
    }

    //* 解法：
    //* 1. ソート
    //* 2. k本隣り合う木の差を計算する
    //* 3. ループ処理でグループごとに最小を測定、更新する

    t.sort((a, b) => a - b);
    let min = 10e9 + 1;
    for (let i = 0; i <= n - k; i++) {
        min = Math.min(min, t[i + k - 1] - t[i]);
    }
    console.log(min);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
