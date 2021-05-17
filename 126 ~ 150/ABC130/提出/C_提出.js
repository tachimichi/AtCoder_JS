// TODO
//*   ABC 130 C - Rectangle Cutting

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [w, h, x, y] = input.trim().split(' ').map(n => parseInt(n, 10));

    if(x == w/2 && y == h/2) {
        console.log(w*h/2, 1);
    } else {
        console.log(w*h/2, 0);
    }

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