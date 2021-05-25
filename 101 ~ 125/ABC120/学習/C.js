// TODO
//*   ABC 122 C - Energy Drink Collector

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('').map(n => parseInt(n, 10));

    let count_0 = 0;
    let count_1 = 0;
    for(let i = 0; i < input.length; i++) {
        if(input[i] == 0) {
            count_0++;
        } else {
            count_1++;
        }
    }
    console.log(2* Math.min(count_0, count_1));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
