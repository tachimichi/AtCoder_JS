// TODO
//*   ABC 201 B - Do you know the second highest mountain?

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let a = [];

    for(let i = 1; i  <= n; i++) {
        let  [x, y] = input[i].trim().split(' ');
        y = parseInt(y, 10);
        //* 配列を複数同時にpushできる
        a.push([x, y]);
    }
    console.log(a);

    //* 比較対象を明示的に行う
    a.sort((a,b) => a[1] - b[1]);
    console.log(a);
    //* 最後からn番目を出力したい場合
    console.log(a[a.length-2][0]);
}

// function main(input) {
//     'use strict';
//     input = input.trim().split('\n');
//     const n = parseInt(input[0], 10);
//     let s = [];
//     let t = [];
//     let a = [];
//     let b = [];
//     let x = "";
//     let y = 0;

//     for(let i = 1; i  <= n; i++) {
//         [x, y] = input[i].trim().split(' ');
//         y = parseInt(y, 10);
//         s.push(x);
//         t.push(y);
//         a.push(x);
//         b.push(y);
//     }
//     // console.log(s, t);

//     t.sort((a,b) => a-b);
//     // console.log(t);
//     // console.log(t[t.length-2]);
//     let ans = t[t.length-2];
//     for(let i = 0; i < b.length; i++) {
//         if(b[i] == ans) {
//             console.log(a[i]);
//         }
//     }
// }

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