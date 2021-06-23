// TODO
//*   ABC 094 B - Toll Gates 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m, x] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    let count1 = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > x) break;
        count1++;
    }
    let count2 = m - count1;
    console.log(Math.min(count1, count2));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));