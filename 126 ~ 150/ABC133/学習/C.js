// TODO
//*   ABC 134 C - Exception Handling

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    //* shift()で先頭を消す
    //* 行に対して、map処理
    input.shift();
    let a = input.map(n => parseInt(n, 10));

    let t = [...a];
    t.sort((a, b) => b-a);

    for(let i = 0; i < a.length; i++) {
        //* a[i]が最大値かどうか判定
        if(a[i] != t[0]) {
            console.log(t[0]);
        } else {
            console.log(t[1]);
        }
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));