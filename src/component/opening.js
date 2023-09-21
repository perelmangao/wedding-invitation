import * as PIXI from 'pixi.js';

const createOpeningContainer = (textures) => {
    const openingContainer = new PIXI.Container()
    
    const brideSprite = new PIXI.Sprite(textures[0]);
    brideSprite.x = window.innerWidth - (window.innerWidth * (2 / 3))
    brideSprite.y = window.innerHeight - (window.innerWidth * (2 / 3) * (566 / 390)) - 200
    brideSprite.width = window.innerWidth * (2 / 3)
    brideSprite.height = window.innerWidth * (2 / 3) * (566 / 390)
    
    const groomSprite = new PIXI.Sprite(textures[2])
    groomSprite.x = 0
    groomSprite.y = window.innerHeight - (window.innerWidth * (2 / 3) * (566 / 390)) - 200
    groomSprite.width = window.innerWidth * (2 / 3)
    groomSprite.height = window.innerWidth * (2 / 3) * (566 / 390)
    
    const jiuSprite = new PIXI.Sprite(textures[1])
    jiuSprite.x = 100
    jiuSprite.y = 200
    jiuSprite.width = 180
    jiuSprite.height = 180

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



    return openingContainer
}

export default createOpeningContainer
