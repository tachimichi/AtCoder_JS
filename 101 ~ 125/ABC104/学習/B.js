// TODO
//*   ABC 104 B - AcCepted

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const str = input.trim().split('');

    //* 条件1
    if (str[0] !== "A") return console.log("WA");

    let count = 0;
    let index = 0;
    for (let i = 2; i < str.length - 1; i++) {
        if (str[i] == "C") {
            count++;
            index = i;
        }
    }
    if (count != 1) return console.log("WA");

    for (let i = 1; i < str.length; i++) {
        if (i != index) {
            if (str[i] != str[i].toLowerCase()) return console.log("WA");
        }
    }
    console.log("AC");

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));