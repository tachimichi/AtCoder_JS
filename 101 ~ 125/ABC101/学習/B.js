// TODO
//*   ABC 101 B - Digit Sums

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    const keta_sum = input.trim().split('').reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
    console.log(keta_sum);

    if (n % keta_sum == 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));