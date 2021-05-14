// TODO
//*   002 - Encyclopedia of Parentheses

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);

    //* nが奇数の時の処理
    if(n % 2 != 0) return console.log("奇数");

    let str = "(";
    let fc = 1;
    let bc = 0;
    
    let ans = dfs(str, fc, bc, n);
    console.log(ans);
}

function dfs(str, fc, bc, n) {
    console.log(str, fc, bc, n);
    
    if(n == fc + bc) {
        console.log("チェック", str, fc, bc, n);
        if(fc == bc) {
            console.log("OK", str, fc, bc, n);
            return str;
        } else {
            console.log("NG", str, fc, bc, n);
        }
    }
    console.log(str, fc, bc, n);

    if(fc <= bc ) {
        console.log('aaaaaaaaaaaa');
        str = dfs(str+"(", fc+1, bc, n);
    } else {
        console.log('bbbbbbbbbbb');
        str = dfs(str+")", fc, bc+1, n);
    }
    
    return str;
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
try {
    main(require('fs').readFileSync('/dev/stdin', 'utf8'));
} catch (error1) {
    try {
    main(require('fs').readFileSync('../txt/002.txt', 'utf8'));
    } catch (error2) {
        console.log('error2', error2);
        console.log('----------------------------');
        console.log('error1', error1);
    }
}