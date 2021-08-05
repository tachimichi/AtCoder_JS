// TODO
//*   ABC 086 B - 1 21

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b] = input.trim().split(' ');
    const n = parseInt(a + b, 10);
    console.log(isSquare(n));

    //* 平方根かどうか判定する
    function isSquare(sq) {
        let root = Math.sqrt(sq);
        return root % 1 == 0 ? 'Yes' : 'No';
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));