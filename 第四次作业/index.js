// 定义名言的数组
const quotes = [
    'When you',
    'When I',
];

// 用于存储当前挑战的单词数组
let words = [];

// 存储玩家当前输入的单词索引
let wordIndex = 0;

// 默认的开始时间值
let startTime = Date.now();

// 游戏进行中标志
let gameInProgress = false;

// 获取HTML元素，引用名言、消息、输入框、最高分元素
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const bestTimeElement = document.getElementById('bestTime'); // 最高分元素

// 初始化最高分为10，如果之前没有最高分的话
let highScore = parseFloat(localStorage.getItem('highScore')) || 10;
bestTimeElement.innerText = `您之前的最佳成绩: ${highScore} 秒`;

// 给开始按钮添加点击事件监听器
document.getElementById('start').addEventListener('click', function () {
    if (!gameInProgress) {
        gameInProgress = true;

        typedValueElement.style.display = 'block'; // 显示输入文本框

        const quoteIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[quoteIndex];
        words = quote.split(' ');
        wordIndex = 0;

        const spanWords = words.map(function(word) { return `<span>${word} </span>`});
        quoteElement.innerHTML = spanWords.join('');
        quoteElement.childNodes[0].className = 'highlight';
        messageElement.innerText = '';

        typedValueElement.value = '';
        typedValueElement.focus();
        startTime = new Date().getTime();
    }
});
//输入框监听器
typedValueElement.addEventListener('input', (e) => {
    if (gameInProgress) {
        const currentWord = words[wordIndex];
        const typedValue = typedValueElement.value;

        if (typedValue === currentWord && wordIndex === words.length - 1) {
            gameInProgress = false; // 游戏结束后重置游戏状态
            typedValueElement.style.display = 'none'; // 隐藏输入文本框

            const elapsedTime = (new Date().getTime() - startTime) / 1000;

            if (elapsedTime < highScore) {
                highScore = elapsedTime;
                localStorage.setItem('highScore', highScore.toString());
                bestTimeElement.innerText = `最佳成绩: ${highScore} 秒`; // 更新最高分显示
            }

            const message = `恭喜！你仅仅花费了 ${elapsedTime} 秒,打败了全球99%的玩家!`;
            alert(message);  //以对话窗格显示祝贺信息
        } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
            typedValueElement.value = '';
            wordIndex++;
            for (const wordElement of quoteElement.childNodes) {
                wordElement.className = '';
            }
            if (wordIndex < words.length) {
                quoteElement.childNodes[wordIndex].className = 'highlight';
            }
        } else if (currentWord.startsWith(typedValue)) {
            typedValueElement.className = '';
        } else {
            typedValueElement.className = 'error';
        }
    }
});
