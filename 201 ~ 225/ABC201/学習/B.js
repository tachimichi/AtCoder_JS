// TODO
//*   ABC 201 B - Do you know the second highest mountain?

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let s = [];
    let t = [];
    let a = [];
    let b = [];
    let x = "";
    let y = 0;

    for(let i = 1; i  <= n; i++) {
        [x, y] = input[i].trim().split(' ');
        y = parseInt(y, 10);
        s.push(x);
        t.push(y);
        a.push(x);
        b.push(y);
    }
    // console.log(s, t);

    t.sort((a,b) => a-b);
    // console.log(t);
    // console.log(t[t.length-2]);
    let ans = t[t.length-2];
    for(let i = 0; i < b.length; i++) {
        if(b[i] == ans) {
            console.log(a[i]);
        }
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));