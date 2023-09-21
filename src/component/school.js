import * as PIXI from 'pixi.js';
import { localLiveServerHost } from '../params';

const createSchoolContainer = (textures) => {
    const schoolContainer = new PIXI.Container()

    const campusSceneSprite = new PIXI.Sprite(textures[0])
    campusSceneSprite.x =  -0.25 * window.innerWidth
    campusSceneSprite.y = 100
    campusSceneSprite.width = window.innerWidth * 1.5
    campusSceneSprite.height = window.innerWidth * (274 / 412) * 1.5

    const campusSmileSprite = new PIXI.Sprite(textures[1])
    campusSmileSprite.x = window.innerWidth * 0.125
    campusSmileSprite.y = 100
    campusSmileSprite.width = window.innerWidth * 0.75
    campusSmileSprite.height = (window.innerWidth * 0.75) * (618 / 412)

    const campusCoupleSprite = new PIXI.Sprite(textures[2])
    campusCoupleSprite.x = -window.innerWidth / 2
    campusCoupleSprite.y = 0
    campusCoupleSprite.width = window.innerWidth
    campusCoupleSprite.height = window.innerWidth * (618 / 412)

    const wearemarriedSprite = new PIXI.Sprite(textures[3])
    wearemarriedSprite.x = -window.innerWidth / 2
    wearemarriedSprite.y = 200
    wearemarriedSprite.width = window.innerWidth
    wearemarriedSprite.height = window.innerHeight

    const schoolBg = new PIXI.Sprite(textures[4])
    schoolBg.x = (window.innerWidth - window.innerHeight * (390 / 533)) / 2
    schoolBg.y = 0
    schoolBg.width = window.innerHeight * (390 / 533)
    schoolBg.height = window.innerHeight

    schoolContainer.addChild(schoolBg)
    schoolContainer.addChild(campusSceneSprite)
    schoolContainer.addChild(campusSmileSprite)
    schoolContainer.addChild(campusCoupleSprite)
    schoolContainer.addChild(wearemarriedSprite)
    schoolContainer.children[1].visible = false
    schoolContainer.children[2].visible = false

    return schoolContainer
}

export default createSchoolContainer
