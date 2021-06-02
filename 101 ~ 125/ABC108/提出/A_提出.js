// TODO
//*   ABC 108 A - Pair

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    "use strict";
    const n = parseInt(input, 10);

    let a = 0, b = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            b++;
        } else {
            a++;
        }
    }
    console.log(a * b);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}