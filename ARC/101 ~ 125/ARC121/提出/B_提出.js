// TODO
//*   ABC 116 B - Collatz Problem

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    if (n == 1 || n == 2 || n == 4) return console.log(4);

    let count = 1;
    let x = n;
    while (x != 4) {
        x = func(x);
        count++;
        // console.log(x);
    }
    console.log(count + 3);
}

function func(x) {
    if (x % 2 == 0) {
        return x / 2;
    } else {
        return x * 3 + 1;
    }
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