// TODO
//*   ABC 201 C - Secret Number

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    let t = input.trim().split('');
    let a = 0;
    let b = 0;
    let c = 0;
    for(let i = 0; i < t.length; i++) {
        if(t[i] == "o") a++;
        if(t[i] == "?") b++;
        if(t[i] == "x") c++;
    }
    if(a > 4 || c == 10) return console.log(0);
    // console.log(t);
    
    let str = "";
    let count = 0;
    for(let i = 0; i <= 9999; i++) {
        
        let arr = new Array(10).fill(false);
        str = i.toString();
        if(i <= 999) {
            while(str.length < 4) {
                // console.log(str);
                str = "0" + str;
            }
            // console.log(str);
        }
        // console.log(str);
        
        for(let j = 0; j < 4; j++) {
            // console.log(str);
            arr[Math.floor(str%10)] = true;
            str /= 10;
            // console.log(str);
            // console.log("-------");
        }
        // console.log(arr);

        let flg = true;
        for(let j = 0; j < 10; j++) {
            if(t[j] == "o" && !arr[j]) flg = false;
            if(t[j] == "x" && arr[j]) flg = false;
        }
        // console.log(count);
        count += flg;
        // console.log(count);

    }
    console.log(count);
    //* --------------------

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
