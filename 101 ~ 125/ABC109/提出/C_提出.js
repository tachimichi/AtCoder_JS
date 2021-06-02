// TODO
//*   ABC 109 C - Skip

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, x] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const t = input[1].trim().split(' ').map(n => parseInt(n, 10));
    t.push(x);
    t.sort((a, b) => a - b);
    // console.log(t);

    if (n == 1) {
        return console.log(Math.abs(t[0] - t[1]));
    } else if (n >= 2) {
        let abs1 = Math.abs(t[0] - t[1]);
        for (let i = 1; i < n; i++) {
            const abs2 = Math.abs(t[i] - t[i + 1]);
            abs1 = gcd(abs1, abs2);
        }
        console.log(abs1);
    }

}

//* 2つの数字a, bの最大公約数を求める
function gcd(a, b) {
    if (b === 0) return a;
    // console.log(a, b);
    // console.log('---------------');
    return gcd(b, a % b)
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
