// TODO
//*   ABC 140 C - Maximal Value

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const b = input[1].split(' ').map(n => parseInt(n, 10));
    //* ------------------------

    //* 一般化
    //* 「B の隣り合う要素の最小値以下である」
    //* 両端：bの両端となる

    let sum = b[0];
    for(let i = 0; i < b.length-1; i++) {
        sum += Math.min(b[i], b[i+1]);
    }
    sum += b[b.length-1];
    console.log(sum);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
