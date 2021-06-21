// TODO
//*   026 - Independent Set on a Tree

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    let t = Array(n + 1).fill().map(_ => Array()); //* 隣接リスト
    for (let i = 1; i <= n - 1; i++) {
        const [a, b] = input[i].split(' ').map(n => parseInt(n, 10));
        t[a].push(b);
        t[b].push(a);
    }
    t = deleteRow(t, 1)
    // console.log(t);

    let col = new Array(n + 1).fill(0);

    // console.log(col);
    dfs(1, 1);
    // console.log(col);

    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < n; i++) {
        if (col[i] == 1) arr1.push(i);
        if (col[i] == 2) arr2.push(i);
    }
    // console.log(arr1);
    // console.log(arr2);

    let ans = "";
    if (arr1.length > arr2.length) {
        for (let i = 0; i < (n / 2); i++) {
            ans += arr1[i] + " ";
        }
    } else {
        for (let i = 0; i < (n / 2); i++) {
            ans += arr2[i] + " ";
        }
    }
    console.log(ans);



    //* ------------------------------------

    function dfs(pos, cur) {
        // console.log("cur", cur);
        // console.log("pos", pos);
        // console.log("col[pos]", col[pos]);
        col[pos] = cur;
        t[pos - 1].forEach(i => {
            if (col[i] == 0) {
                dfs(i, 3 - cur);
            }
            // console.log(col);
        });
        // console.log("----------------");
    }

}

function deleteRow(arr, row) {
    arr = arr.slice(0); // make copy
    arr.splice(row - 1, 1);
    return arr;
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/026.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}