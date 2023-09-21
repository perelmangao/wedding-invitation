import * as PIXI from 'pixi.js';
import { localLiveServerHost } from '../params';

const createWeddingContainer = (textures) => {
    const weddingContainer = new PIXI.Container()
    
    const poseSpriteSeries = []
    const weddingFireworkSprite = new PIXI.Sprite(textures[0])
    weddingFireworkSprite.width = window.innerWidth
    weddingFireworkSprite.height = window.innerWidth * (619 / 412)
    weddingFireworkSprite.x = 0
    weddingFireworkSprite.y = 0
    
    const weddingSeasideSprite = new PIXI.Sprite(textures[1])
    weddingSeasideSprite.width = window.innerWidth
    weddingSeasideSprite.height = window.innerWidth * (619 / 412)
    weddingSeasideSprite.x = 0
    weddingSeasideSprite.y = 0

    const weddingHeartSprite = new PIXI.Sprite(textures[2])
    weddingHeartSprite.width = window.innerWidth
    weddingHeartSprite.height = window.innerWidth * (619 / 412)
    weddingHeartSprite.x = 0
    weddingHeartSprite.y = 0

    const weddingHeart2Sprite = new PIXI.Sprite(textures[3])
    weddingHeart2Sprite.width = window.innerWidth * 0.75
    weddingHeart2Sprite.height = window.innerWidth * (619 / 412) * 0.75
    weddingHeart2Sprite.x = window.innerWidth * 0.125
    weddingHeart2Sprite.y = 100

    const weddingDressSprite = new PIXI.Sprite(textures[4])
    weddingDressSprite.width = window.innerWidth * 0.75
    weddingDressSprite.height = window.innerWidth * (619 / 412) * 0.75
    weddingDressSprite.x = window.innerWidth * 0.125
    weddingDressSprite.y = 100

    const weddingHappySprite = new PIXI.Sprite(textures[5])
    weddingHappySprite.width = window.innerWidth
    weddingHappySprite.height = window.innerWidth * (619 / 412)
    weddingHappySprite.x = 0
    weddingHappySprite.y = 0

    const weddingBg = new PIXI.Sprite(textures[5])
    weddingBg.width = window.innerWidth
    weddingBg.height = window.innerHeight
    weddingBg.x = 0
    weddingBg.y = 0
    
    weddingContainer.addChild(weddingBg)
    weddingContainer.addChild(weddingFireworkSprite)
    weddingContainer.addChild(weddingSeasideSprite)
    weddingContainer.addChild(weddingHeartSprite)
    weddingContainer.addChild(weddingHeart2Sprite)
    weddingContainer.addChild(weddingDressSprite)
    weddingContainer.addChild(weddingHappySprite)

    return weddingContainer
}

export default createWeddingContainer