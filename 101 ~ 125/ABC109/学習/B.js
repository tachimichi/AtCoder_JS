// TODO
//*   ABC 109 B - Shiritori

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);

    let t = [];
    for (let i = 1; i <= n; i++) {
        const str = input[i].trim();
        t.push(str);
    }
    let sizeCheck = new Set(t);
    // console.log(sizeCheck);
    // console.log(sizeCheck.size);
    if (n != sizeCheck.size) return console.log("No");

    let isSafe = "Yes";
    let word = input[1].trim().split('');
    for (let i = 2; i <= n; i++) {
        const str = input[i].trim().split('');
        // console.log(word[word.length - 1].toString());
        // console.log(str[0].toString());
        if (word[word.length - 1] == str[0]) {
            word = str;
        } else {
            isSafe = "No";
        }
    }

    console.log(isSafe);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));