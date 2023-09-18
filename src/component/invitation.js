import * as PIXI from 'pixi.js';

const invitationContainer = new PIXI.Container()

const text = new PIXI.Text('', {
  fontSize: 36,
  fill: 0xffffff,
});

text.x = 50;
text.y = 150;

const message = "Invitation. ";
let currentIndex = 0;

// 创建 PixiJS Ticker
const ticker = PIXI.Ticker.shared;
ticker.autoStart = true;

let interval
// 每帧更新文本内容
ticker.add(animate)
// 每帧更新文本内容
function animate() {
    if (currentIndex < message.length) {
      if (!interval) {
        interval = setInterval(() => {
          text.text += message[currentIndex];
          currentIndex++;
          if (currentIndex === message.length) {
            clearInterval(interval);
            interval = null;
          }
        }, 300); // 300 毫秒间隔
      }
    } else {
      // 动画完成后重置 currentIndex 以重新开始
      currentIndex = 0;
      text.text = '';
    }
  }


invitationContainer.addChild(text)

export default invitationContainer
