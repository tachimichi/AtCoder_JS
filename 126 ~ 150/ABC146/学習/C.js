// TODO
//*   ABC 146 C - Buy an Integer

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const [a, b, x] = input.trim().split(' ').map(n => BigInt(n));

    let left = 0n;
    let right = BigInt(10e8 + 1);
    
    let count = 1;
    
    console.log('right', right);
    console.log('---------------------');

    //* 右と左の境界線がギリギリまで
    while(right - left > 1n) {
        //* 中間地点を調べる
        let middle = (right+left) / 2n;
        //* 中間地点の整数の値段と、xを比較する
        //* 比較結果をもとに、右左のどちらかを半減する
        if(Calculation(middle) <= x) {
            left = middle;
        } else {
            right = middle;
        }
        
        console.log('count', count);
        console.log('middle', middle);
        console.log('calculaton', Calculation(middle));
        console.log('x', x);
        
        console.log('left', left);
        console.log('right', right);

        count++;
        console.log('---------------------');
    }
    console.log(left.toString());

    //* ---------------------------------
    //* 関数
    function keta(n) {
        return BigInt(n.toString().split('').length); 
    }
    
    function Calculation(c) {
        return a * c + b * keta(c); 
    }
}


//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/C.txt', 'utf8'));