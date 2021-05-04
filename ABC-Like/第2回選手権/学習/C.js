// TODO
//*   第二回日本最強プログラマー学生選手権 

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ').map(n => parseInt(n, 10));
    // ----------------------
    let ans = 1;

    for(let i = 2; i < b; i++) {
        let x = Math.ceil(a / i);
        let y = Math.floor(b / i);
        if(y - x >= 1) ans = i;
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));