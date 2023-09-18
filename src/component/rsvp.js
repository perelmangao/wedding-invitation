import * as PIXI from 'pixi.js';

const rsvpContainer = new PIXI.Container()

const infoTexture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png')
const infoSprite = new PIXI.Sprite(infoTexture)

const jiuLeftTexture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png')
const jiuLeftSprite = new PIXI.Sprite(jiuLeftTexture)

const jiuRightTexture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png')
const jiuRightSprite = new PIXI.Sprite(jiuRightTexture)

const selfieTexture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png')
const selfieSprite = new PIXI.Sprite(selfieTexture)

rsvpContainer.addChild(infoSprite)
rsvpContainer.addChild(jiuLeftSprite)
rsvpContainer.addChild(jiuRightSprite)
rsvpContainer.addChild(selfieSprite)

export default rsvpContainer
