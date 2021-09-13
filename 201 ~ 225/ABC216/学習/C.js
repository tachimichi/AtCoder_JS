// TODO
//*   ABC 216 C - Many Balls

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let n = BigInt(input.trim());
    let ans = "";
    while (1n <= n) {
        if (n % 2n == 1n) {
            ans += "A";
            n--;
        } else {
            ans += "B";
            n /= 2n;
        }
        // console.log(ans);
    }
    let x = ans.split('').reverse();
    console.log(x.join(''));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));