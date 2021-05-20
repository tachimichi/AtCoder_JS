// TODO
//*   ABC 182 C - To 3

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    // let a = parseInt(input, 10);
    let a = input.trim();
    let n = a.length;

    let min = 1e10;

    //* bit全探索：1 ~ nの2進数まで
    for (let i = 1; i < (1 << n); i++) { 
        let t = [];
        for (let j = 0; j < n; j++) {
            //* メモ : 
            //* (i & (1 << j)) = 0 というのは、i の j ビット目（2^j の位）が 0 であるための条件。
            if (i & (1 << j)) {
                t.push(a[j]);
                // console.log(a[j]);
                // console.log(t);
            }
        }
        // console.log("t", t);
        
        let x = t.reduce((a, b) => parseInt(a,10)+parseInt(b,10),0);
        if(x % 3 == 0) {
            min = Math.min(min, n - t.length);
        }
    }

    if (min == 1e10) {
        console.log(-1);
    } else {
        console.log(min);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
