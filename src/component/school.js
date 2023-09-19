import * as PIXI from 'pixi.js';
import { localLiveServerHost } from '../params';

const createSchoolContainer = (textures) => {
    const schoolContainer = new PIXI.Container()

    const poseSpriteSeries = []

    textures.map(texture => {
        const sprite = new PIXI.Sprite(texture)
        poseSpriteSeries.push(sprite)
        schoolContainer.addChild(sprite)
    })

    return schoolContainer
}

export default createSchoolContainer
