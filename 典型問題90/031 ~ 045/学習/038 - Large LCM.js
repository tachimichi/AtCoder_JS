// TODO
//*    038 - Large LCM

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => BigInt(n));

    let ans = lcm(a, b);
    if(ans > 10e17) {
        console.log("Large");
    } else {
        console.log(ans.toString());
    }
}

//* 2つの数字a, bの最大公約数を求める
function gcd(a, b) {
    if (b === 0n) return a;
    return gcd(b, a % b)
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/038.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}