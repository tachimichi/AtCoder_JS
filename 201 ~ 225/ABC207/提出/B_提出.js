// TODO
//*   ABC 207 B - Hydrate

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // input = input.trim().split('\n');
    const [a, b, c, d] = input.trim().split(' ').map(n => parseInt(n, 10));
    let count = 0;
    if (b >= c * d) return console.log(-1);

    while (a + b * count > c * count * d) {
        count++;
    }
    console.log(count);
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