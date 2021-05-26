// TODO
//*   ABC 118 C - Monsters Battle Royale

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    a.sort((a, b) => a - b);
    let max = a[a.length - 1];
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            max = Math.min(max, gcd(a[i], a[j]));
        }
    }
    console.log(max);
}

//* 2つの数字a, bの最大公約数を求める
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
