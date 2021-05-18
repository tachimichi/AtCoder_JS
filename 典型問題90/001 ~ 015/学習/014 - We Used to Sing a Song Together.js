// TODO
//*   014 - We Used to Sing a Song Together

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* 入力
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    const b = input[2].split(' ').map(n => parseInt(n, 10));

    a.sort((a, b) => a-b);
    b.sort((a, b) => a-b);

    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum += Math.abs(a[i] - b[i]);
    }
    console.log(sum);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/014.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}