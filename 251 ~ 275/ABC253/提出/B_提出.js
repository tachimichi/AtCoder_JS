// TODO
//*   ABC 253 B - Distance Between Tokens

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [h, w] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    let table = [];
    let point = [];
    for (let i = 1; i <= h; i++) {
        const a = input[i].trim().split('');
        table.push(a);
        for (let j = 0; j < a.length; j++) {
            if (a[j] == 'o') point.push([i - 1, j]);
        }
    }
    // console.log(table);
    // console.log(point);
    const a = Math.abs(point[0][0] - point[1][0]);
    const b = Math.abs(point[0][1] - point[1][1]);
    // answer
    console.log(a + b);
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