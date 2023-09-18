import * as PIXI from 'pixi.js';
import { localLiveServerHost } from '../params';

const schoolContainer = new PIXI.Container()

const poseTexturePaths = [
    `${localLiveServerHost}scene2-pose4.png`,
    `${localLiveServerHost}scene2-pose8.png`,
    `${localLiveServerHost}scene2-pose7.png`,
    `${localLiveServerHost}scene2-pose9.png`
]

const poseTextureSeries = []
const poseSpriteSeries = []

poseTexturePaths.map(path => {
    const texture = PIXI.Texture.from(path)
    const sprite = new PIXI.Sprite(texture)
    poseTextureSeries.push(texture)
    poseSpriteSeries.push(sprite)
    schoolContainer.addChild(sprite)
})

export default schoolContainer
