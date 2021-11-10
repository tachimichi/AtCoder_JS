// TODO
//*   ABC 219 B - Maritozzo

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let words = [];
    for (let i = 0; i < input.length - 1; i++) {
        const element = input[i].trim();
        words.push(element);
    }
    let num = input[input.length - 1].split('').map(n => parseInt(n, 10));

    // console.log(words);
    // console.log(num);

    let ans = [];
    for (let i = 0; i < num.length; i++) {
        const e = words[num[i] - 1];
        ans.push(e);
    }
    //結果
    console.log(ans.join(''));
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