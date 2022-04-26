// TODO
//*   ABC 239 B - Integer Division

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = BigInt(input.trim());
    if (n == 0n) return console.log(0);

    let ans;
    if (n > 0n) {
        ans = n / 10n;
    } else {
        ans = (n - 9n) / 10n;
    }
    console.log(ans.toString());
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));