// TODO
//*   ABC 106 C - To Infinity

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
    console.log(t);
    
    let str = "";
    let count = 0;
    for(let i = 0; i <= 9999; i++) {
        
        let arr = new Array(10).fill(0);
        str = i.toString();
        if(i <= 999) {
            while(str.length < 4) {
                // console.log(str);
                str = "0" + str;
            }
            // console.log(str);
        }
        
        for(let j = 0; j < 4; j++) {
            let flg = true;
            if(t[str[j]] == "x") {
                flg = false;
                break;
            } else if(t[str[j]] == "o") {
                arr[str[j]]++;
            }
            let max = 0;
            let count2 = 0;
            max = Math.max(...arr);
            // console.log(max);
            for(let k = 0; k < 10; k++) {
                if(arr[k] != 0) count2++;
            }
            if(max != 0 && count2 == a && a >= max && flg == true) {
                count++;
            }
        }

    }
    console.log(count);
    //* --------------------

}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
