// TODO
//*   ABC 208 C - Fair Candy Distribution

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(n => BigInt(n));
    const a = input[1].trim().split(' ').map(n => BigInt(n));
    //* 全員に分配する数
    const num = k / n;
    //* 余り物
    const mod = k % n;
    // console.log("mod", mod);

    let ans = new Array(n).fill(0n);
    //* ---------------------------------
    const copy = [...a];
    //* bigintのソート方法
    copy.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));
    // console.log(copy);
    for (let i = 0; i < n; i++) {
        // console.log("a[i]", a[i]);
        // console.log("copy[mod - 1n]", copy[mod - 1n]);
        if (a[i] <= copy[mod - 1n]) {
            ans[i] = num + 1n;
        } else {
            ans[i] = num;
        }
    }
    console.log(ans.join('\n').toString());
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

