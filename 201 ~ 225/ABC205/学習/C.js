// TODO
//*   ABC 205 C - POW

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [a, b, c] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    let abs1 = Math.abs(a);
    let abs2 = Math.abs(b);

    //* cが偶数であれば、aやbの片方が負だろうとイコールになるため
    //* 絶対値で処理する
    if (c % 2 == 1) {
        if (a == b) {
            console.log("=");
        } else if (a > b) {
            console.log(">");
        } else {
            console.log("<");
        }
    } else {
        if (abs1 == abs2) {
            console.log("=");
        } else if (abs1 > abs2) {
            console.log(">");
        } else {
            console.log("<");
        }
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

