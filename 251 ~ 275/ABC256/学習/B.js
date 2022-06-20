// TODO
//*   ABC 254 B - Practical Computing

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input.trim(), 10);
    let ans = [];
    for (let i = 0; i < n; i++) {
        let row = [];

        for (let j = 0; j <= i; j++) {
            // jが0とiの時は、1を追加
            if (j == 0 || j == i) {
                row.push(1);
                // 上の両隣を足す 
            } else {
                row.push(ans[i - 1][j - 1] + ans[i - 1][j]);
            }
        }
        // console.log(row);
        ans.push(row);
        console.log(ans[i].join(' '));
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));