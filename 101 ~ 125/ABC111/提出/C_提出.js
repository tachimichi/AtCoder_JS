// TODO
//*   ABC 111 C - /\/\/\/

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0], 10);
    const t = input[1].trim().split(' ').map(n => parseInt(n, 10));

    //* 各要素の出現数を記録
    let odd = new Array(100001).fill(0);
    let even = new Array(100001).fill(0);
    for (let i = 0; i < n; i++) {
        if (i % 2 == 1) {
            odd[t[i]]++;
        } else {
            even[t[i]]++;
        }
    }
    // console.log(odd);
    // console.log(even);


    let oddFirst = 0, oddSecond = 0;
    let evenFirst = 0, evenSecond = 0;
    for (let i = 1; i <= 100000; i++) {
        // console.log("---------------" + i + "====");
        //* 偶数の処理
        //* even[i]（=探索する要素）の出現数が、過去の最頻値の出現数より大きい場合
        if (even[i] > even[evenFirst]) {
            evenSecond = evenFirst;
            evenFirst = i;
            // console.log("=======1=====");
            // console.log("evenFirst", evenFirst);
            // console.log("evenSecond", evenSecond);
            // console.log("even[" + i + "]", even[i]);
            // console.log("===============");

            //* 2番目に大きいのかどうか比較して大きい場合
        } else if (even[i] > even[evenSecond]) {
            evenSecond = i;
            // console.log("=======2=====");
            // console.log("evenFirst", evenFirst);
            // console.log("evenSecond", evenSecond);
            // console.log("even[" + i + "]", even[i]);
            // console.log("===============");
        }
        //* 奇数の処理
        //* odd[i]（=探索する要素）の出現数が、過去の最頻値の出現数より大きい場合
        if (odd[i] > odd[oddFirst]) {
            oddSecond = oddFirst;
            oddFirst = i;
            // console.log("=======3=====");
            // console.log("oddFirst", oddFirst);
            // console.log("oddSecond", oddSecond);
            // console.log("odd[" + i + "]", odd[i]);
            // console.log("===============");

            //* 2番目に大きいのかどうか比較して大きい場合
        } else if (odd[i] > odd[oddSecond]) {
            oddSecond = i;
            // console.log("=======4=====");
            // console.log("oddFirst", oddFirst);
            // console.log("oddSecond", oddSecond);
            // console.log("odd[" + i + "]", odd[i]);
            // console.log("===============");
        }
    }

    //* 結果表示
    //* 1. 偶奇で数字が異なる場合（そのまま出力でOK）
    if (evenFirst != oddFirst) {
        console.log((n - even[evenFirst] - odd[oddFirst]));

        //* 2. 偶奇で数字が同じ場合
        //* お互いの最頻値が同じ数である⇒2番目の最頻値を持ち出す

    } else if (even[evenSecond] >= odd[oddSecond]) {
        //* 2.1 偶数の最頻値が大きいorイコールの場合
        console.log(n - even[evenSecond] - odd[oddFirst]);
    } else {
        //* 2.2 奇数の最頻値が大きい場合
        console.log(n - even[evenFirst] - odd[oddSecond]);
    }
    //* 別解法： else if 以下
    // else {
    //     let max = Math.max((even[evenSecond] + odd[oddFirst]), (even[evenFirst] + odd[oddSecond]));
    //     console.log(n - max);
    // }
    //     console.log(evenFirst, oddFirst);
    //     console.log(even[evenSecond], odd[oddSecond]);
    //     console.log(even[evenFirst], odd[oddFirst]);
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
