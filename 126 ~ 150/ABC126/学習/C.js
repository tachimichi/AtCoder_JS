// TODO
//*   ABC 126 C - Dice and Coin

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [n, k] = input.trim().split(' ').map(n => parseInt(n, 10));

    let t = 0;
    for(let i = 1;  i <= n; i++) {
        let kakuritsu = 1/n;
        let now = i;
        while(now < k) {
            now *= 2;
            kakuritsu /= 2;
            // console.log(now);
        }
        console.log(kakuritsu);
        t += kakuritsu;
    }
    console.log(t);

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
