// TODO
//*   ABC 226 B - Counting Arrays

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const lst = [];
    for (let i = 1; i <= n; i++) {
        const a = input[i].trim().split(' ').map(n => parseInt(n, 10));
        lst.push(a);
    }
    // console.log(lst);
    // 多重配列の重複チェック
    const ans = [...new Set(lst.map(JSON.stringify))].map(JSON.parse);
    // console.log(ans);
    console.log(ans.length);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));