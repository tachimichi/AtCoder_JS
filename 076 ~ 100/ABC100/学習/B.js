// TODO
//*   ABC 126 B - YYMM or MMYY

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    //* 指定した文字数での区切り
    let t = input.match(/.{2}/g);
    t = t.map(n => parseInt(n, 10));
    console.log(t);

    if(0 < t[0] && t[0] < 13) {
        if(0 < t[1] && t[1] < 13) {
            console.log("AMBIGUOUS");
        } else {
            console.log("MMYY");
        }
    } else {
        if(0 < t[1] && t[1] < 13) {
            console.log("YYMM");
        } else {
            console.log("NA");
        }
    }

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/B.txt', 'utf8'));