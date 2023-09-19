import * as PIXI from 'pixi.js';

const createOpeningContainer = (textures) => {
    const openingContainer = new PIXI.Container()

    const brideName = new PIXI.Text('Peiwen', {
        fontSize: 36,
        fill: 0xffffff,
    });
      
    brideName.x = 50;
    brideName.y = 150;
    
    const groomName = new PIXI.Text('Keyu', {
        fontSize: 36,
        fill: 0xffffff,
    });
    
    groomName.x = 150;
    groomName.y = 150;
    
    const brideSprite = new PIXI.Sprite(textures[0]);
    brideSprite.x = 50
    brideSprite.y = 200
    
    const groomSprite = new PIXI.Sprite(textures[2])
    groomSprite.x = 150
    groomSprite.y = 200
    
    const jiuSprite = new PIXI.Sprite(textures[1])
    jiuSprite.x = 100
    jiuSprite.y = 200
    
    openingContainer.addChild(brideName)
    openingContainer.addChild(groomName)
    openingContainer.addChild(brideSprite)
    openingContainer.addChild(groomSprite)
    openingContainer.addChild(jiuSprite)

    return openingContainer
}

export default createOpeningContainer
