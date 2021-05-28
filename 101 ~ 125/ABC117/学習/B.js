// TODO
//*   ABC 117 B - Polygon

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const l = input[1].trim().split(' ').map(n => parseInt(n, 10));

    l.sort((a, b) => b - a);

    let sum = 0;
    for (let i = 1; i < l.length; i++) {
        sum += l[i];
    }

    if (sum > l[0]) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));