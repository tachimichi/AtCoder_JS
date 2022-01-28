// TODO
//*   ABC 067 B - Snake Toy

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, k] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const l = input[1].trim().split(' ').map(n => parseInt(n, 10));
    l.sort((a, b) => b - a);

    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += l[i];
    }
    console.log(sum);
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