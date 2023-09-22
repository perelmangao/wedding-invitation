import * as PIXI from 'pixi.js';

const createInvitationContainer = (textures) => {
  const invitationContainer = new PIXI.Container()

  const peachBgSprite = new PIXI.Sprite(textures[0])
  peachBgSprite.width = window.innerWidth
  peachBgSprite.height = window.innerHeight
  peachBgSprite.x = 0
  peachBgSprite.y = 0

  const text = new PIXI.Text('', {
    fontFamily: 'Monaco',
    fontSize: 30,
    fontWeight: 'bold',
    fill: ['#ffffff', '#ffffff'], // gradient
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
  });

  const hint = new PIXI.Text('先戳戳 向上划', {
    fontFamily: 'Monaco',
    fontSize: 30,
    fontWeight: 'bold',
    fill: ['#ffffff', '#ffffff'], // gradient
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
  });

  const demo = new PIXI.Text('Wedding Invitation. ', {
    fontFamily: 'Monaco',
    fontSize: 30,
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
  });
  
  text.x = window.innerWidth / 2 - demo.width / 2;
  text.y = window.innerHeight * 0.25;

  hint.x = window.innerWidth / 2 - hint.width / 2;
  hint.y = window.innerHeight*0.85
  
  const message = "Wedding Invitation. ";
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
          }, 295); // 300 毫秒间隔
        }
      } else {
        // 动画完成后重置 currentIndex 以重新开始
        currentIndex = 0;
        text.text = '';
      }
    }
  
  
  invitationContainer.addChild(peachBgSprite)
  invitationContainer.addChild(text)
  invitationContainer.addChild(hint)

  return invitationContainer
}

export default createInvitationContainer
