import * as PIXI from 'pixi.js';

const createOpeningContainer = (textures) => {
    const openingContainer = new PIXI.Container()

    const rotationSpeed = 0.5; // 旋转速度
    const beatInterval = 583; // 每拍的时间间隔，单位：毫秒
    const ticker = PIXI.Ticker.shared;
    ticker.autoStart = true;
    
    const brideSprite = new PIXI.Sprite(textures[0]);
    brideSprite.x = window.innerWidth - (window.innerWidth * (2 / 3))
    brideSprite.y = window.innerHeight - (window.innerWidth * (2 / 3) * (566 / 390)) - 100
    brideSprite.width = window.innerWidth * (2 / 3)
    brideSprite.height = window.innerWidth * (2 / 3) * (566 / 390)
    
    const groomSprite = new PIXI.Sprite(textures[2])
    groomSprite.x = 0
    groomSprite.y = window.innerHeight - (window.innerWidth * (2 / 3) * (566 / 390)) - 100
    groomSprite.width = window.innerWidth * (2 / 3)
    groomSprite.height = window.innerWidth * (2 / 3) * (566 / 390)
    
    const jiuSprite = new PIXI.Sprite(textures[1])
    jiuSprite.x = window.innerWidth / 2
    jiuSprite.y = 250
    jiuSprite.width = 180
    jiuSprite.height = 180
    jiuSprite.anchor.set(0.5)
    
    const nameSprite = new PIXI.Sprite(textures[3])
    nameSprite.x = 0
    nameSprite.y = -50
    nameSprite.width = window.innerWidth
    nameSprite.height = window.innerWidth * 2

    const openingBg = new PIXI.Sprite(textures[4])
    openingBg.x = -window.innerWidth + window.innerHeight * (390 / 519) / 2
    openingBg.y = 0
    openingBg.width = window.innerHeight * (390 / 519)
    openingBg.height = window.innerHeight

    openingContainer.addChild(openingBg)
    openingContainer.addChild(nameSprite)
    openingContainer.addChild(jiuSprite)
    openingContainer.addChild(brideSprite)
    openingContainer.addChild(groomSprite)
    
    let interval
    // 每帧更新文本内容
    ticker.add(animate)
    // 开始动画
    function animate() {
      if (!interval) {
        interval = setInterval(() => {
            jiuSprite.rotation += rotationSpeed; // 根据旋转速度进行旋转
        }, beatInterval)
      }
    }
    
    // 启动动画
    animate();

    return openingContainer
}

export default createOpeningContainer
