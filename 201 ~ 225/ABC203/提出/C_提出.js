// TODO
//*   ABC 203 C - Friends and Travel costs

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(n => parseInt(n, 10));

    let arr = [];
    for (let i = 1; i <= n; i++) {
        const [a, b] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        arr.push([a, b]);
    }
    // console.log(arr);
    arr.sort((a, b) => a[0] - b[0]);
    // console.log(arr);

    //* 前提：Bigintを使用するのは、10^15以上である
    //* しかし、制約上、最大値は
    //* k <= 10^9, b <=10^9, n <= 2*10^5
    //* 2*10^5(n) * 10^9(b) + 10^9(k) <= 10^15
    //* ⇒64bit整数で収まる（BigIntは使用しない）

    //* 解法：
    //* k >= 村[i]である場合
    //*     k += 金[i]円
    //* k < 村[i] である場合
    //*     終了

    console.log("k", k);
    for (let i = 0; i < n; i++) {
        if (arr[i][0] <= k) {
            k += arr[i][1];
        } else {
            break;
        }
        console.log("k", k);
    }
    console.log(k);

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
