import * as PIXI from 'pixi.js';
import { localLiveServerHost } from '../params';

const weddingContainer = new PIXI.Container()

const poseTexturePaths = [
    `${localLiveServerHost}scene1-pose1.png`,
    `${localLiveServerHost}scene1-pose2.png`,
    `${localLiveServerHost}scene1-pose3.png`,
    `${localLiveServerHost}scene1-pose4.png`
]

const poseTextureSeries = []
const poseSpriteSeries = []

poseTexturePaths.map(path => {
    const texture = PIXI.Texture.from(path)
    const sprite = new PIXI.Sprite(texture)
    poseTextureSeries.push(texture)
    poseSpriteSeries.push(sprite)
    weddingContainer.addChild(sprite)
})

export default weddingContainer