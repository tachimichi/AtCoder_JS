// TODO
//*   ABC 131 A - Security

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let str = input.trim().split('');
    if(str[0] == str[1] || str[1] == str[2] || str[2] == str[3]) {
        console.log("Bad");
    } else { 
        console.log("Good");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));