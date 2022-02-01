// TODO
//*   ABC 066 B - ss

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const a = input.trim();
    let max = 0;
    for (let i = 0; i < a.length; i += 2) {
        // https://www.sejuku.net/blog/21155
        // str.substr( 開始位置, 文字数 );
        let first = a.substr(0, i / 2);
        let second = a.substr(i / 2, i / 2);
        // console.log(first, second);
        if (first == second) {
            max = Math.max(max, i);
        }
    }
    console.log(max);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/B.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}