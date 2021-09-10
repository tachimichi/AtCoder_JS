// TODO
//*   ABC 217 B - AtCoder Quiz

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let t = [];
    for (let i = 0; i < input.length; i++) {
        t.push(input[i].trim());
    }
    let ans = ['ABC', 'ARC', 'AGC', 'AHC'];

    for (let i = 0; i < t.length; i++) {
        for (let j = 0; j < ans.length; j++) {
            if (t[i] == ans[j]) ans.splice(j, 1);
        }
    }
    console.log(ans.toString());
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