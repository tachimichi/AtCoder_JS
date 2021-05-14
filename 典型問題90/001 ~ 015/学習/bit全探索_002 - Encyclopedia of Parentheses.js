// TODO
//*   002 - Encyclopedia of Parentheses

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const n = parseInt(input, 10);
    let count = 0;

    //* STEP1：
    //* "("と")"の2種類の文字列から構成される ⇒ bit全探索
    //* 長さnに対して、2^n通り
    //* 
    //* bit全探索(例：n = 3)
    //* i = 0, 1, 2, ... , 2^n -1
    //* 2進数：000, 001, 010, 011, 100, 101, 110, 111
    //* カッコ列：(((, ((), ()(, ()), )((, )(), ))(, )))
    //* 上からj桁目 = 0 の場合は"("、1の場合は")"

    //* STEP2：
    //* ①"("と")" が同じ数である
    //* ②全てのiについて、左からi文字目までの時点で
    //*    "("の数 >= ")"の数
    //* 
    //* 

    for(let i = 0; i < (1 << n); i++) {
        let candidate = "";
        for(let j = n-1; j >= 0; j--) {
            //* メモ : 
            //* (i & (1 << j)) = 0 というのは、i の j ビット目（2^j の位）が 0 であるための条件。

            if((i & (1 << j)) == 0) {
                candidate += "(";
            } else {
                candidate += ")";
            }
        }
        // console.log(i, i.toString(2));
        // console.log("candidate", candidate);

        let t = hantei(candidate);
        // console.log(t);
        if(t == true) {
            count++;
            console.log(candidate);
        }
    }
    // console.log(count);
}

function hantei(str) {
    let dep = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] == "(") dep++;
        if(str[i] == ")") dep--;
        if(dep < 0) return false;
    }
    if(dep == 0) return true;
    return false;
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