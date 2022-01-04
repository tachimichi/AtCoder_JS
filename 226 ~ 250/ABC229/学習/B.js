// TODO
//*   ABC 229 B - Hard Calculation

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let [a, b] = input.trim().split(' ');
    console.log(a, b);
    a = a.split('').reverse();
    b = b.split('').reverse();

    let isHard = false;
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        let n = parseInt(a[i], 10) + parseInt(b[i], 10);
        // console.log(n);
        if (n >= 10) {
            isHard = true;
        }
    }
    console.log(isHard ? "Hard" : "Easy");

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));