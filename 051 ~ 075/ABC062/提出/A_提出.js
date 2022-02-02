// TODO
//*   ABC 062 A - Grouping

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    const d = [[1, 3, 5, 7, 8, 10, 12], [4, 6, 9, 11], [2]];

    let isInclude = false;
    for (let i = 0; i < 3; i++) {
        const is_a_include = d[i].includes(a);
        const is_b_include = d[i].includes(b);
        if (is_a_include && is_b_include) {
            isInclude = true;
            break;
        }
    }
    console.log(isInclude ? 'Yes' : 'No');
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/A.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}