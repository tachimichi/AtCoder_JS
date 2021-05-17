// TODO
//*   ABC 130 B - Bounding

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const w = input[1].trim().split(' ').map(n => parseInt(n, 10));
    
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += w[i];
    }
    // console.log(sum);

    let min = sum;
    let x = 0;
    for(let i = 0; i < n; i++) {
        //* 累積和を取得
        x += w[i];
        //* (x)左側 - (sum - x)右側「全体-左側」
        console.log(Math.abs(x-(sum-x)));
        min = Math.min(min, Math.abs(x-(sum-x)));
    }
    console.log(min);
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