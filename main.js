'use strict'

{
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '凶', '小吉', '大吉', '中吉', '凶', '小吉', '💩', '👻', 'もり吉'];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];

    // switch (n) {
    //   case 0:
    //     result.textContent = '大吉';
    //     break;
    //   case 1:
    //     result.textContent = '中吉';
    //     break;
    //   case 2:
    //     result.textContent = '凶';
    //     break;
    // }

  });
}
