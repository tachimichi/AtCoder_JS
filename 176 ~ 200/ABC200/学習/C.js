// TODO
//*   ABC 200 C - Ringo's Favorite Numbers 2

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const n = parseInt(input[0],10);
    let a = input[1].trim().split(' ').map(n => parseInt(n,10));

    //* 二重ループだとTLEになるため
    //* 計算量を考える
    
    //* 1. 「a[i] - a[j]が200の倍数」=「a[i] % 200とa[j] % 200が一致する」
    //* 解法：
    //* 200で割る余りを格納する配列を生成する
    //* 余りに応じた場所にカウントを増やしていく

    let t = new Array(200).fill(0);
    // console.log(t);
    for(let i = 0; i < n; i++) {
        let amari = a[i] % 200;
        t[amari]++;
    }
    // console.log(t);
    
    //* 2. 配列の各要素がn個
    //* x個から個から異なる2個を選ぶ組み合わせの総数はnC2

    let ans = 0;
    for(let i = 0; i < t.length; i++) {
        ans += (t[i] * (t[i]-1))/2;
    }
    console.log(ans);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));