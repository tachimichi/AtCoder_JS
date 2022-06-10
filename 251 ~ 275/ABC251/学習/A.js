// TODO
//*   ABC 251 A - Six Characters

// 関数mainに標準入力をinputとして受け取る
function main(input) {
    'use strict';
    input = input.trim();
    // console.log(input);
    // console.log(input.length);
    if (input.length == 1) console.log(input.repeat(6));
    if (input.length == 2) console.log(input.repeat(3));
    if (input.length == 3) console.log(input.repeat(2));

    const lists = [
        { id: '000', name: 'Aさん', age: '21', content: '特になし1' },
        { id: '001', name: 'Bさん', age: '22', content: '特になし2' },
        { id: '002', name: 'Cさん', age: '23', content: '特になし3' }
    ];
    console.log(lists[0].id);
    console.log(lists[1].id);
    console.log(lists[2].id);
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require('fs').readFileSync('../txt/A.txt', 'utf8'));