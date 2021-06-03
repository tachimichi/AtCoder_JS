// TODO
//*   ABC 103 B - String Rotation

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let s = input[0].trim().split('');
    const t = input[1].trim().split('');

    for (let i = 0; i < s.length; i++) {
        const lastElement = s.pop();
        // console.log(lastElement);
        s = [lastElement].concat(s);
        // console.log(s);
        if (s.join('') == t.join('')) return console.log("Yes");
    }
    console.log("No");

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));