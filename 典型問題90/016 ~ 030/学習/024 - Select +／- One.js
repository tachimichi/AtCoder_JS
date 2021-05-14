// TODO
//*   024 - Select +／- One

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    // console.log(input);
    const [n, k] = input[0].split(' ').map(n => parseInt(n, 10));
    // console.log(input[1]);
    const a = input[1].split(' ').map(n => parseInt(n, 10));
    const b = input[2].split(' ').map(n => parseInt(n, 10));


    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += Math.abs(a[i] - b[i]);
    }

    //* t （余り）が偶数かどうか判定
    let t = k - sum;
    if(t >= 0 && t % 2== 0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/024.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}