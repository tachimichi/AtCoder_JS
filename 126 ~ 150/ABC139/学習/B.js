// TODO
//*   ABC 139 B - Power Socket

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b] = input.trim().split(' ').map(n => parseInt(n, 10)) ;

    let sum = 0;
    let count = 0;
    if(b == 1) return console.log(count);
    
    while(true) {
        sum += a;
        count++;
        if(sum >= b) return console.log(count);
        sum--;
        console.log(sum);
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));