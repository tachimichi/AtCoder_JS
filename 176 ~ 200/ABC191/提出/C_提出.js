// TODO
//*   ABC 191 C - Digital Graffiti
// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    const inputList = input.split("\n");
    const h = parseInt(inputList[0].split(' ')[0], 10); //* h行
    const w = parseInt(inputList[0].split(' ')[1], 10);//* w列
    const grid = inputList.slice(1).map(raw => raw.split(''));
    let answer = 0;

    for (let raw = 0; raw < h - 1; raw++) {
        for (let col = 0; col < w - 1; col++) {
            let painted = 0;
            /* 条件
            *(raw, col)(raw, col +1)(raw +1, col)(raw +1, col +1)の
            *4のマスを見て、#の数が1か3なら
            *多角形の角だと判定できる
            */
            if (grid[raw][col] === '#') painted++;
            if (grid[raw][col + 1] === '#') painted++;
            if (grid[raw + 1][col] === '#') painted++;
            if (grid[raw + 1][col + 1] === '#') painted++;
            //* 奇数かどうかの判定
            if ( painted % 2 === 1 ) answer ++;
        }
    }
    console.log(answer);
}

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
