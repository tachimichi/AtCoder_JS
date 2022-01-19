// TODO
//*   ABC 071 B - Not Found

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let str = input.trim().split('');
    let ans = "None"
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("").reverse();
    // console.log(alphabet);

    for (let i = 0; i < alphabet.length; i++) {
        if (str.includes(alphabet[i])) {
            continue;
        } else {
            ans = alphabet[i];
        }
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));