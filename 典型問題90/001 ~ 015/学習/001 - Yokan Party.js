// TODO
//*   001 - Yokan Party

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, l] = input[0].split(' ').map(n => parseInt(n, 10));
    const k = parseInt(input[1], 10);
    const a = input[2].split(' ').map(n => parseInt(n, 10));
    //* 最後尾に本体の長さを追加
    a.push(l)
    //* 切り口の長さを計算（最初はa[0]をデフォルトで必要）
    let t = [a[0]];
    for (let i = 0; i < a.length - 1; i++) {
        t.push(a[i + 1] - a[i]);
    }
    // console.log(t);
    //* -----------------------------------------------

    //* 解法：最小値の最大化
    //* 二分探索


    //* 参考：https://github.com/ryusuke920/kyopro_educational_90_python/blob/main/solve_python/001.py
    let left = -1;
    let right = l + 1;
    //* leftが左側にいる限り
    while (left + 1 < right) {
        let mid = Math.floor((right + left) / 2);
        //* 分割した個数がkより大きい場合
        if (solve(mid) > k) {
            left = mid;
        } else {
            right = mid;
        }
    }

    console.log(left);


    //* 答えで二分探索（めぐる式二分探索法）
    //* https://qiita.com/drken/items/97e37dd6143e33a64c8c
    function solve(middle) {
        let length = 0;
        let count = 0;

        for (let i = 0; i <= t.length; i++) {
            length += t[i];
            if (length >= middle) {
                length = 0;
                count++;
            }
        }
        //* 分割した回数をreturnする
        return count;
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
        main(require('fs').readFileSync('../txt/001.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}