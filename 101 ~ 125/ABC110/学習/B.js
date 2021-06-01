// TODO
//*   ABC 110 B - 1 Dimensional World's Tale

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, m, x, y] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const b = input[2].trim().split(' ').map(n => parseInt(n, 10));

    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    //* お互いが干渉していないかチェックする
    if (a[a.length - 1] < y && x < b[0] && a[a.length - 1] < b[0]) {
        console.log("No War");
    } else {
        console.log("War");
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));