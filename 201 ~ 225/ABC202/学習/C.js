// TODO
//*   ABC 201 C - Secret Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let t = input.trim().split('');
    // console.log(t);

    let count = 0;
    for(let i = 0; i <= 9999; i++) {
        
        let arr = new Array(10).fill(false);
        let x = i;
        
        //* 10で割ったあまり(末尾の切り出し)の要素に対して、使用されているかどうかチェック
        for(let j = 0; j < 4; j++) {
            let d = x % 10;
            arr[d] = true;
            x  = Math.floor(x / 10);
        }
        //* --------------------
        let flg = true;
        for(let j = 0; j < 10; j++) {
            //* "o"だけど、arr[j]が使用されていない場合はfalse
            if(t[j] == "o" && !arr[j]) flg = false;
            //* "x"だけど、arr[j]が使用されている場合もfalse
            if(t[j] == "x" && arr[j]) flg = false;
        }
        count += flg;
    }
    console.log(count);

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
