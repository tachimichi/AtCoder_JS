// TODO
//*   ABC 103 C - Modulo Summation

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));

    //* 考え方：
    //* m = a1 * a2 * ,,, * an と仮定すると、各aで行うmodは0になる
    //* 例：72 = 3 * 4 * 6
    //* ここで、m=71の時を考えると、(m-1) mod ai = (a-1)となる
    //* ⇒fの最大値となる
    let ans = 0;
    for (let i = 0; i < a.length; i++) {
        ans += a[i] - 1;
    }
    console.log(ans);
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
