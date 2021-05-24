// TODO
//*   ABC 123 C - Five Transportations

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim().split('\n');
    const [n, q] = input[0].trim().split(' ').map(n => parseInt(n, 10));
    const s = input[1].trim().split('');
    let left = [];
    let right = [];
    for(let i = 2; i < 2+q; i++) {
        let [x, y] = input[i].trim().split(' ').map(n => parseInt(n, 10));
        left.push(x);
        right.push(y);
    }

    // console.log(left);
    // console.log(right);

    let sum = 0;
    //* 累積和で差分を取るために0を初期にpushする
    let arr = [0];
    //* 1組・2組の累積和を取る
    for(let i = 0; i < n-1; i++) {
        let word = s[i] + s[i+1];
        if(word == "AC") sum += 1;
        arr.push(sum);
    }
    // console.log(arr);

    for(let i = 0; i < q; i++) {
        let ans = arr[right[i]-1] - arr[left[i]-1];
        console.log(ans);
    }

}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));
