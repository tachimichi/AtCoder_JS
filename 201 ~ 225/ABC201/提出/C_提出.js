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

// function main(input) {
//     'use strict';
//     let t = input.trim().split('');
//     let a = 0;
//     let b = 0;
//     let c = 0;
//     for(let i = 0; i < t.length; i++) {
//         if(t[i] == "o") a++;
//         if(t[i] == "?") b++;
//         if(t[i] == "x") c++;
//     }
//     if(a > 4 || c == 10) return console.log(0);
//     // console.log(t);
    
//     let str = "";
//     let count = 0;
//     for(let i = 0; i <= 9999; i++) {
        
//         let arr = new Array(10).fill(false);
//         str = i.toString();
//         if(i <= 999) {
//             while(str.length < 4) {
//                 // console.log(str);
//                 str = "0" + str;
//             }
//             // console.log(str);
//         }
//         // console.log(str);
        
//         for(let j = 0; j < 4; j++) {
//             // console.log(str);
//             arr[Math.floor(str%10)] = true;
//             str /= 10;
//             // console.log(str);
//             // console.log("-------");
//         }
//         // console.log(arr);

//         let flg = true;
//         for(let j = 0; j < 10; j++) {
//             if(t[j] == "o" && !arr[j]) flg = false;
//             if(t[j] == "x" && arr[j]) flg = false;
//         }
//         // console.log(count);
//         count += flg;
//         // console.log(count);

//     }
//     console.log(count);
// }

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
