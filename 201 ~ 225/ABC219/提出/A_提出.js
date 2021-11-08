// TODO
//*   ABC 219 A - AtCoder Quiz 2

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input.trim(), 10);
    let ans = 0;
    if (n >= 90) {
        console.log('expert');
    } else if (n >= 70) {
        console.log(90 - n);
    } else if (n >= 40) {
        console.log(70 - n);
    } else {
        console.log(40 - n);
    }
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