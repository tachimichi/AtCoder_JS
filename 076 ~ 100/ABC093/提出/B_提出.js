// TODO
//*   ABC 093 B - Small and Large Integers

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, k] = input.trim().split(' ').map(n => parseInt(n, 10));

    let t = [];
    for (let i = a; i < a + k; i++) {
        if (i <= b) t.push(i);
    }
    for (let i = b - k + 1; i <= b; i++) {
        if (a <= i) t.push(i);
    }
    // console.log(t);
    const ans = new Set(t);

    //* Setクラスは、forEachで出力
    ans.forEach(element => {
        console.log(element);
    });
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