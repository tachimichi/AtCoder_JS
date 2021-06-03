// TODO
//*   ABC 105 B - Cakes and Donuts

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    //* ------------------------------------------------------
    for (let i = 0; i <= 100 / 4; i++) {
        for (let j = 0; j <= (100 - i) / j; j++) {
            if (n == i * 4 + j * 7) {
                // console.log(i, j);
                return console.log("Yes");
            }
        }
    }
    console.log("No");

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}