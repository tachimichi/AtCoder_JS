// TODO
//*   ABC 124 C - Coloring Colorfully

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const s = input.trim().split('').map(n => parseInt(n, 10));
    const n = s.length;
    const a = [];
    const b = [];

    for(let i = 0; i < n; i++) {
        if(i % 2 == 0) {
            a.push(0);
            b.push(1);
        } else {
            a.push(1);
            b.push(0);
        }
    }
    // console.log(s);
    // console.log(a, b);

    let countA = 0;
    let countB = 0;
    
    for(let i = 0; i < n; i++) {
        if(s[i] != a[i]) {
            countA++;
        } else {
            countB++
        }
    }
    console.log(Math.min(countA, countB));
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
