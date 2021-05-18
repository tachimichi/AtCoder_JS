// TODO
//*   ABC 127 B - Algae

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [r ,d, x] = input.trim().split(' ').map(n => parseInt(n, 10));

    let sum = x;
    for(let i = 0; i < 10; i++) {
        sum = r*sum-d;
        console.log(sum);
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