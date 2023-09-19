import * as PIXI from 'pixi.js';
import { localLiveServerHost } from '../params';

const createWeddingContainer = (textures) => {
    const weddingContainer = new PIXI.Container()
    
    const poseSpriteSeries = []
    
    textures.map(texture => {
        const sprite = new PIXI.Sprite(texture)
        poseSpriteSeries.push(sprite)
        weddingContainer.addChild(sprite)
    })

    return weddingContainer
}

export default createWeddingContainer