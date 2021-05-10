// TODO
//*   ABC 139 C - Lower

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const h = input[1].split(' ').map(n => parseInt(n, 10));
    //* ------------------------

    let count = 0;
    let high = 0;
    for (let i = 0; i < n-1; i++) {
        if(h[i] >= h[i+1]) {
            count++;
        } else {
            high = Math.max(high, count);
            count = 0;
        }
        // console.log(count);
    }
    high = Math.max(high, count);
    console.log(high);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
