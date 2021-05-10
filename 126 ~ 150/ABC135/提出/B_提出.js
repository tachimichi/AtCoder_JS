// TODO
//*   ABC 135 B - 0 or 1 Swap

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict'
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].split(' ').map(n => parseInt(n, 10));

    let count = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] != i+1) count++; 
        // console.log("a[i]", a[i]);
        // console.log("i+1", i+1);
    }

    if(count == 0 || count == 2) {
        console.log("YES");
    } else {
        console.log("NO");
    }
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