import * as PIXI from 'pixi.js';

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

const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');

const brideSprite = new PIXI.Sprite(texture);
brideSprite.x = 50
brideSprite.y = 200

const groomSprite = new PIXI.Sprite(texture)
groomSprite.x = 150
groomSprite.y = 200

const jiuSprite = new PIXI.Sprite(texture)
jiuSprite.x = 100
jiuSprite.y = 200

openingContainer.addChild(brideName)
openingContainer.addChild(groomName)
openingContainer.addChild(brideSprite)
openingContainer.addChild(groomSprite)
openingContainer.addChild(jiuSprite)

export default openingContainer
