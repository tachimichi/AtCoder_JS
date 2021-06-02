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

    //* 考えたこと：
    //* 場所の座標は、必ずD(=ans)の倍数
    //* ⇒逆にDの倍数は必ずたどり着く
    //* 
    //* 必要十分条件：
    //* Dはx1-Xの約数 ... => ... Dはxn-Xの約数
    //* すなわち、gcd(x1-X,  ... , xn-X)の約数

    if (n == 1) {
        return console.log(Math.abs(t[0] - t[1]));
    } else if (n >= 2) {
        let ans = Math.abs(t[0] - t[1]);
        for (let i = 1; i < n; i++) {
            const abs = Math.abs(t[i] - t[i + 1]);
            ans = gcd(ans, abs);
        }
        console.log(ans);
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
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
