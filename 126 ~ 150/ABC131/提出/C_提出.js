// TODO
//*   ABC 131 C - Anti-Division

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c, d] = input.trim().split(' ').map(n => BigInt(n));

    //* 前提：区間[x ~ y]の整数の個数は、 y - x +1
    //* CかDで割り切れる = Cで割り切れる + Dで割り切れる - CでもDでも割り切れる

    function diff(t, c, d) {
        let x = t;
        x = x - ((t/c) + (t/d));
        x += t / lcm(c, d);
        return x;
    }
    let sum = diff(b, c, d) - diff((a-1n), c, d);
    // console.log(diff(b, c, d));
    // console.log(diff((a-1n), c, d));
    console.log(sum.toString());
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
        main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}