// TODO
//*   ABC 209 C - Not Equal

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const c = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const mod = 1000000007n;
    c.sort((a, b) => a - b);
    // console.log(n);
    // console.log(c);

    //* 解法：
    //* C = (100, 100, 100)のとき
    //* A1 = 100, A2 = 99, A3 = 98通り
    //* ⇒重複する値はNGのため

    let ans = 1n;
    for (let i = 0; i < n; i++) {
        //* c[i]が重複する個数iより、小さい場合
        if (c[i] - i < 1) ans = 0n;
        //* 
        ans = (ans * BigInt(c[i] - i)) % mod;
    }
    console.log(ans.toString());

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

