// TODO
//*   ABC 212 C - Min Difference

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const a = input[1].trim().split(' ').map(n => parseInt(n, 10));
    const b = input[2].trim().split(' ').map(n => parseInt(n, 10));

    let sum1 = 0;
    let sum2 = 0;
    //* 累積和で差分を取るために0を初期にpushする
    let arr1 = [];
    let arr2 = [];
    //* 1組・2組の累積和を取る
    for (let i = 0; i < n; i++) {
        sum1 += a[i];
        sum2 += b[i];
        arr1.push(sum1);
        arr2.push(sum2);
    }
    console.log(arr1);
    console.log(arr2);

    //* -------------------------
    let ans = [b[0]];
    for (let i = 1; i < n; i++) {
        if (b[i] < b[i - 1] + arr1[i - 1]) {
            ans.push(b[i]);
        } else {

        }
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));

