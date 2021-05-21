// TODO
//*   ABC 124 B - Great Ocean View

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const h = input[1].split(' ').map(n => parseInt(n, 10));

    let count = 0;
    for(let i = 0; i < n; i++) {
        let max = 0;;
        let t = h[i];
        for(let j = 0; j < i; j++) {
            max = Math.max(max, h[j]);
        }
        if(t >= max) count++;
        // console.log(t);
        // console.log(max);
    }
    console.log(count);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));