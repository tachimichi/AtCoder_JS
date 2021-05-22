// TODO
//*   ABC 123 B - Five Dishes

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n')
    let sum = 0;

    let saigo = 0;
    let t = [];
    let min = 11;
    for(let i = 0; i < 5; i++) {
        let a = parseInt(input[i], 10);
        t.push(a);
        let amari = a % 10;
        if(amari == 0) {
            continue;
        } else {
            if(amari < min) {
                min = Math.min(min, amari);
                saigo = a;
            } else {
                sum += a;
            }
        }
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));