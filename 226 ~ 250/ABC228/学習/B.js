// TODO
//*   ABC 227 B - KEYENCE building

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const s = input[1].trim().split(' ').map(n => parseInt(n, 10));
    // console.log(s);
    let areaSet = new Set();
    for (let i = 0; i < n; i++) {
        for (let a = 1; a <= s[i] - 1; a++) {
            for (let b = 1; b < s[i] - a; b++) {
                let x = 4 * a * b + 3 * (a + b);
                if (x == s[i]) {
                    areaSet.add(x);
                }
            }
        }
    }
    // console.log(areaSet);
    // 除外処理（特定の値がセット内に存在するか）
    const ans = s.filter(element => !areaSet.has(element));
    console.log(ans.length);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));