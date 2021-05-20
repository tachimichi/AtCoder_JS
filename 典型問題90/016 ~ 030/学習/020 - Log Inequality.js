// TODO
//*   020 - Log Inequality

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* 入力(10^18 のためBigInt)
    const [a, b, c] = input.trim().split(' ').map(n => BigInt(n));

    //* b * log2c = log2c^b
    //* Math.powやMath.log2では、誤差が生まれる
    //* 整数で計算できるように式変形を行う。
    let right = 1n;
    for(let i = 1n; i <= b; i++) {
        right *= c;
    }
    // console.log(a, right);
    if(a < right) {
        console.log("Yes");
    } else {
        console.log("No");
    }
    
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/020.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}