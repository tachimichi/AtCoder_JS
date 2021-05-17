// TODO
//*   ABC 133 C - Remainder Minimization 2019

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [l, r] = input.trim().split(' ').map(n => BigInt(n));

    let min = 2018n;
    for(let i = l; i < r; i++) {
        for(let j = i+1n; j <= r; j++) {
            min = Math.min(min.toString(), ((i*j) % 2019n).toString())
            if(min == 0n) break;
        }
        if(min == 0n) break;
    }
    console.log(min.toString());
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