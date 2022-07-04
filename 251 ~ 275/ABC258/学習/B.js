// TODO
//*   ABC 257 B - 1D Pawn

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k, q] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    let a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const l = input[2].trim().split(' ').map(n => parseInt(n, 10));

    for (let i = 0; i < q; i++) {
        if (a[l[i] - 1] == n) continue;
        const rightOne = a[l[i] - 1] + 1;
        if (a.includes(rightOne)) {
            continue;
        } else {
            a[l[i] - 1] += 1;
        }
    }
    console.log(a.join(' '));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));