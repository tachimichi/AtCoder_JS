// TODO
//*   ABC 085 B - Kagami Mochi

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const d = [];
    for (let i = 1; i <= n; i++) {
        const element = parseInt(input[i], 10);
        d.push(element);
    }
    d.sort((a, b) => b - a);
    // console.log(d);
    const ans = new Set(d);
    console.log(ans.size);

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