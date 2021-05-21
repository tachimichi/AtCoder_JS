// TODO
//*   ABC 124 A - Buttons

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    let sum = 0;
    if(a > b) {
        sum = a + (a -1);
    } else if (a < b) {
        sum = b + (b -1);
    } else {
        sum = a+b;
    }
    console.log(sum);

    // if (a == b) {
    //     console.log(Math.max(a, b) * 2);
    // } else {
    //     console.log(Math.max(a, b) * 2 - 1);
    // }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
    main(require('fs').readFileSync('../txt/A.txt', 'utf8'));