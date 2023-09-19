import React, { useState, useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import createInvitationContainer from './component/invitation';
import createOpeningContainer from './component/opening';
import createSchoolContainer from './component/school';
import createWeddingContainer from './component/wedding';
import createRsvpContainer from './component/rsvp';
import { texturePaths } from './params';

let openingContainer, invitationContainer, schoolContainer, weddingContainer, rsvpContainer

const PixiCanvas = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const startY = useRef(0);
  const appRef = useRef(null);
  const globalOffset = useRef(0)

  globalOffset.current = 0

  const handleTouchStart = (e) => {
    startY.current = e.global.y
  };

  const handleTouchMove = (e) => {
    const deltaY = e.global.y - startY.current
    globalOffset.current -= deltaY
    if (globalOffset.current < 0) {
      globalOffset.current = 0
    }
    if (globalOffset.current > 4 * window.innerHeight) {
      globalOffset.current = 4 * window.innerHeight
    }
    setSceneVisible(globalOffset.current)
    startY.current = e.global.y
    console.log('globalOffset', globalOffset)
  };

  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#e6c694',
    resizeTo: window
  });
  app.view.id = 'test'


  PIXI.Assets.add('keyuOpening', texturePaths[0])
  PIXI.Assets.add('openingJo', texturePaths[1])
  PIXI.Assets.add('peiwenOpening', texturePaths[2])
  PIXI.Assets.add('campusScene', texturePaths[3])
  PIXI.Assets.add('campusSmile', texturePaths[4])
  PIXI.Assets.add('campusCouple', texturePaths[5])
  PIXI.Assets.add('weddingFirework', texturePaths[6])
  PIXI.Assets.add('weddingSeaside', texturePaths[7])
  PIXI.Assets.add('weddingHeart', texturePaths[8])
  PIXI.Assets.add('weddingHeart2', texturePaths[9])
  PIXI.Assets.add('weddingDress', texturePaths[10])
  PIXI.Assets.add('weddingHappy', texturePaths[11])
  PIXI.Assets.add('rsvpCouple', texturePaths[12])
  PIXI.Assets.add('rsvpInfo', texturePaths[13])
  PIXI.Assets.add('rsvpjo', texturePaths[14])
  PIXI.Assets.add('rsvpjo2', texturePaths[15])

  const texturesPromise = PIXI.Assets.load(
    [
      'keyuOpening',
      'openingJo',
      'peiwenOpening',
      'campusScene',
      'campusSmile',
      'campusCouple',
      'weddingFirework',
      'weddingSeaside',
      'weddingHeart',
      'weddingHeart2',
      'weddingDress',
      'weddingHappy',
      'rsvpCouple',
      'rsvpInfo',
      'rsvpjo',
      'rsvpjo2'
    ],
    (progress) => {
      console.log(progress)
    }
  );

  texturesPromise.then ((textures) => {

    invitationContainer = createInvitationContainer()

    openingContainer = createOpeningContainer([
      textures.keyuOpening,
      textures.openingJo,
      textures.peiwenOpening,
    ])

    schoolContainer = createSchoolContainer([
      textures.campusScene,
      textures.campusSmile,
      textures.campusCouple
    ])

    weddingContainer = createWeddingContainer([
      textures.weddingFirework,
      textures.weddingSeaside,
      textures.weddingHeart,
      textures.weddingHeart2,
      textures.weddingDress,
      textures.weddingHappy
    ])

    rsvpContainer = createRsvpContainer([
      textures.rsvpCouple,
      textures.rsvpInfo
    ])

    // 向场景中添加内容
    openingContainer.addChild(new PIXI.Text("openingContainer", { fontSize: 48, fill: 0xffffff }));
    schoolContainer.addChild(new PIXI.Text("schoolContainer", { fontSize: 48, fill: 0xffffff }));
    weddingContainer.addChild(new PIXI.Text("weddingContainer", { fontSize: 48, fill: 0xffffff }));
    rsvpContainer.addChild(new PIXI.Text("rsvpContainer", { fontSize: 48, fill: 0xffffff }));
    // 设置场景位置
    openingContainer.visible = false
    schoolContainer.visible = false
    weddingContainer.visible = false
    rsvpContainer.visible = false

    // 添加场景到PixiJS舞台
    app.stage.addChild(invitationContainer);
    app.stage.addChild(openingContainer);
    app.stage.addChild(schoolContainer);
    app.stage.addChild(weddingContainer);
    app.stage.addChild(rsvpContainer);
  })

  const setSceneVisible = (offset) => {

    const currentIndex = Math.floor(offset / window.innerHeight)
    app.stage.children.forEach((e, i) => {
      e.visible = i === currentIndex
    })
  //   if (Math.floor(offset / window.innerHeight) <= 1) {
  //     app.stage.children[0].visible = true
  //     app.stage.children[1].visible = false
  //     app.stage.children[2].visible = false
  //   } else if ((offset / window.innerHeight) > 1 && (offset / window.innerHeight) <= 2) {
  //     app.stage.children[0].visible = false
  //     app.stage.children[1].visible = true
  //     app.stage.children[2].visible = false
  //   } else {
  //     app.stage.children[0].visible = false
  //     app.stage.children[1].visible = false
  //     app.stage.children[2].visible = true
  // }
}

  useEffect(() => {

  console.log('app', app)

  // Enable interactivity!
  app.stage.eventMode = 'static';

  // Make sure the whole canvas area is interactive, not just the circle.
  app.stage.hitArea = app.screen;
  appRef.current.appendChild(app.view);
  app.stage.addEventListener("touchstart", handleTouchStart, true);
  app.stage.addEventListener("touchmove", handleTouchMove, true);

  // 自适应屏幕大小变化
  // window.addEventListener("resize", () => {
  //   app.renderer.resize(window.innerWidth, window.innerHeight);
  //   scene2.y = app.screen.height;
  //   scene3.y = app.screen.height * 2;
  // });

  return () => {
    app.view.removeEventListener("touchstart", handleTouchStart);
    app.view.removeEventListener("touchmove", handleTouchMove);
    // window.removeEventListener("resize");
  };
  }, [])

  return (
    <div ref={appRef}></div>
  );
};

export default PixiCanvas;
