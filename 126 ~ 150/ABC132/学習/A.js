// TODO
//*   ABC 132 A - Fifty-Fifty

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let str = input.trim().split('');
    // console.log(str);
    str.sort();
    // console.log(str);
    if(str[0] == str[1] && str[1] != str[2] && str[2] == str[3]) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));