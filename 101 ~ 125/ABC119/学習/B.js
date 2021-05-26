// TODO
//*   ABC 119 B - Digital Gifts

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseFloat(input[0], 10);

    let sum = 0;
    for(let i = 1; i <= n; i++) {
        let t = input[i].trim().split(' ');
        // console.log(t);
        if(t[1] == "JPY") {
            sum += parseFloat(t[0], 10);
        } else {
            sum += parseFloat(t[0] * 380000, 10);
        }
    }
    console.log(sum);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));