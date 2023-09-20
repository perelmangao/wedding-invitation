import * as PIXI from 'pixi.js';

const createOpeningContainer = (textures) => {
    const openingContainer = new PIXI.Container()
    
    const brideSprite = new PIXI.Sprite(textures[0]);
    // brideSprite.x = 50
    // brideSprite.y = 200
    
    const groomSprite = new PIXI.Sprite(textures[2])
    // groomSprite.x = 150
    // groomSprite.y = 200
    
    const jiuSprite = new PIXI.Sprite(textures[1])
    jiuSprite.x = 100
    jiuSprite.y = 200
    jiuSprite.width = 200
    jiuSprite.height = 200

    const nameSprite = new PIXI.Sprite(textures[3])
    nameSprite.x = 0
    nameSprite.y = 0

    openingContainer.addChild(brideSprite)
    openingContainer.addChild(groomSprite)
    openingContainer.addChild(jiuSprite)
    openingContainer.addChild(nameSprite)

    return openingContainer
}

export default createOpeningContainer
