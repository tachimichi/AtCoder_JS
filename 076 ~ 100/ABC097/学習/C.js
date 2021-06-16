// TODO
//*   ABC 097 C - K-th Substring

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const s = input[0].trim();
    const n = parseInt(input[1], 10);

    let list = [];
    for (let i = 0; i < s.length; i++) {
        //* j < s.length 
        //* j < n
        //* 制約を見ると、nは最大5のため、j<nとして探索範囲が絞れる
        for (let j = 0; j < s.length; j++) {
            // console.log(i, i + j + 1);
            list.push(s.substring(i, i + j + 1));
        }
    }

    console.log(list);
    list.sort();
    console.log(list);
    let ans = new Set(list);
    list = [...ans];
    console.log(list);
    console.log(list[n - 1]);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
