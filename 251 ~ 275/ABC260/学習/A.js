// TODO
//*   ABC 260 A - A Unique Letter

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const s = input.trim().split('');
    if (s[0] == s[1] && s[1] == s[2]) return console.log(-1);
    if (s[0] != s[1] && s[1] != s[2] && s[0] != s[2]) return console.log(s[0]);

    if (s[0] == s[1]) {
        console.log(s[2]);
    } else if (s[1] == s[2]) {
        console.log(s[0]);
    } else if (s[0] == s[2]) {
        console.log(s[1]);
    } else {
        console.log(-1);
    }
}



//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));