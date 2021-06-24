// TODO
//*   ABC 093 C - Same Integers

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, c] = input.trim().split(' ').map(n => parseInt(n, 10));

    const sum = a + b + c;
    const max = Math.max(a, b, c);
    const max_3 = max * 3;

    let ans = 0;
    //* max_3と、sumの偶奇が等しいかどうか
    if (max_3 % 2 == sum % 2) {
        //* 3 つの整数が等しくなった時の値は max以上
        ans = (max_3 - sum) / 2;
    } else {
        //* 3 つの整数が等しくなった時の値は max + 1以上
        ans = (max_3 + 3 - sum) / 2;
    }
    console.log(ans);

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}
