// TODO
//*    044 - Shift and Swapping

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, q] = input[0].split(' ').map(n => parseInt(n, 10));
    let a = input[1].split(' ').map(n => parseInt(n, 10));

    //* 解法：
    //* T==2のとき、愚直に解くとTLEになる
    //* しかし、右にズレているだけで
    //* 実際は位置関係自体は変化していない
    //* ⇒何回シフトしたかカウントを保持することで対応可能
    //* 
    //* O(n+q)


    let shifts = 0;
    for(let i = 2; i < 2+q; i++) {

        let [t, x, y] = input[i].trim().split(' ').map(n => parseInt(n, 10));

        if(t == 1) {
            //* xとyをswapする
            x--;
            y--;
            [a[(x + shifts)%n], a[(y + shifts)%n]] = [a[(y + shifts)%n], a[(x + shifts)%n]];

        }
        if(t ==2) {
            //* 最終項を先頭に移動して、他は右にずらす
            //* (移動した回数 + 全体 -1)%全体（⇒あまり） 
            shifts = (shifts + n -1) % n;
        }
        if(t == 3) {
            x--;
            console.log(a[(x + shifts) % n]);
        }
        console.log(shifts);
        console.log(a);
        console.log("-------------------");

    }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/044.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}