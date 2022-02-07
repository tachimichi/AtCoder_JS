// TODO
//*   ABC 238 B - Pizza

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0].trim(), 10);
    let a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    const cut = new Array(n).fill(0);
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
        if (sum >= 360) {
            sum -= 360;
        }
        cut[i] = sum;
    }
    cut.unshift(0);
    cut.push(360);
    // console.log(cut);
    cut.sort((a, b) => a - b);
    // console.log(cut);

    let max = 0;
    for (let i = 0; i < cut.length - 1; i++) {
        max = Math.max(max, cut[i + 1] - cut[i]);
    }
    console.log(max);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));