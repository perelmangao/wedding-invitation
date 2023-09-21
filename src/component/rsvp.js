import * as PIXI from 'pixi.js';
import { localLiveServerHost } from '../params';

const createRsvpContainer = (textures) => {
  const rsvpContainer = new PIXI.Container()
  const ticker = PIXI.Ticker.shared;
  ticker.autoStart = true;
  const beatInterval = 583

  const infoSprite = new PIXI.Sprite(textures[1])
  // infoSprite.x = window.innerWidth / 2
  // infoSprite.y = window.innerHeight / 2
  infoSprite.width = window.innerWidth
  infoSprite.height = window.innerWidth * 2
  
  const jiuLeftSprite = new PIXI.Sprite(textures[2])
  jiuLeftSprite.width = 100
  jiuLeftSprite.height = 100 * (843 / 412)
  jiuLeftSprite.y = window.innerHeight - 100 * (549 / 412) * 2

  const jiuRightSprite = new PIXI.Sprite(textures[3])
  jiuRightSprite.width = 100
  jiuRightSprite.height = 100 * (549 / 412)
  jiuRightSprite.x = window.innerWidth - 100
  jiuRightSprite.y = window.innerHeight - 100 * (549 / 412) * 1.5
  
  const selfieSprite = new PIXI.Sprite(textures[0])
  selfieSprite.width = window.innerWidth / 2
  selfieSprite.height = window.innerWidth * (274 / 412) / 2
  selfieSprite.x = window.innerWidth / 4
  selfieSprite.y = window.innerHeight - window.innerWidth * (274 / 412) * 0.75
  
  rsvpContainer.addChild(infoSprite)
  rsvpContainer.addChild(selfieSprite)
  rsvpContainer.addChild(jiuLeftSprite)
  rsvpContainer.addChild(jiuRightSprite)

  jiuLeftSprite.rotation = 0.01
  jiuRightSprite.rotation = 0.01
  selfieSprite.rotation = 0.01
  let interval
  // 每帧更新文本内容
  ticker.add(animate)
  // 开始动画
  function animate() {
    if (!interval) {
      interval = setInterval(() => {
        jiuLeftSprite.rotation *= -1
        jiuRightSprite.rotation *= -1
        selfieSprite.rotation *= -1
      }, beatInterval)
    }
  }
  
  // 启动动画
  animate();

  return rsvpContainer
}

export default createRsvpContainer
