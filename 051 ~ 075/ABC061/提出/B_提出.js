// TODO
//*   ABC 061 B - Counting Roads

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    const count = new Array(n).fill(0);
    for (let i = 1; i <= m; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        count[a - 1]++;
        count[b - 1]++;
    }
    for (let i = 0; i < count.length; i++) {
        console.log(count[i]);
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