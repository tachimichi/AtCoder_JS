// TODO
//*   ABC 208 B - Factorial Yen Coin

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    let p = parseInt(input, 10);

    let x = 1;
    for (let i = 1; i <= 10; i++) {
        x *= i;
    }
    let ans = 0;
    for (let i = 10; i > 0; i--) {
        //* floor(p / x) で、1以上⇒pの方が大きい時
        // console.log(Math.floor(p / x));
        ans += Math.floor(p / x);
        //* 余りを次の計算用として格納する
        p %= x;
        //* xは、大きいものから支払う
        x = Math.floor(x / i);
        // console.log("x", x);
        // console.log("p", p);
        // console.log("ans", ans);
        // console.log("=================");
    }
    console.log(ans);

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));