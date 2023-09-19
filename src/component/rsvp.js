import * as PIXI from 'pixi.js';
import { localLiveServerHost } from '../params';

const createRsvpContainer = (textures) => {
  const rsvpContainer = new PIXI.Container()

  const infoSprite = new PIXI.Sprite(textures[1])
  // infoSprite.x = window.innerWidth / 2
  // infoSprite.y = window.innerHeight / 2
  infoSprite.width = window.innerWidth
  infoSprite.height = window.innerWidth * 2
  
  const jiuLeftTexture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png')
  const jiuLeftSprite = new PIXI.Sprite(jiuLeftTexture)
  
  const jiuRightTexture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png')
  const jiuRightSprite = new PIXI.Sprite(jiuRightTexture)
  
  const selfieTexture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png')
  const selfieSprite = new PIXI.Sprite(textures[0])
  
  rsvpContainer.addChild(infoSprite)
  rsvpContainer.addChild(jiuLeftSprite)
  rsvpContainer.addChild(jiuRightSprite)
  rsvpContainer.addChild(selfieSprite)

  return rsvpContainer
}

export default createRsvpContainer
