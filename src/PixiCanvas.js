import React, { useState, useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import createInvitationContainer from './component/invitation';
import createOpeningContainer from './component/opening';
import createSchoolContainer from './component/school';
import createWeddingContainer from './component/wedding';
import createRsvpContainer from './component/rsvp';
import { texturePaths, musicPaths } from './params';

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
    backgroundColor: 'fff',
    resizeTo: window
  });
  window.app = app
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
  PIXI.Assets.add('wearemarried', texturePaths[16])
  PIXI.Assets.add('nameCard', texturePaths[17])
  PIXI.Assets.add('peachBg', texturePaths[18])
  PIXI.Assets.add('openingBg', texturePaths[19])
  PIXI.Assets.add('schoolBg', texturePaths[20])
  PIXI.Assets.add('weddingBg', texturePaths[21])

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
      'rsvpjo2',
      'wearemarried',
      'nameCard',
      'peachBg',
      'openingBg',
      'schoolBg',
      'weddingBg'
    ],
    (progress) => {
      console.log(progress)
    }
  );

  texturesPromise.then ((textures) => {

    invitationContainer = createInvitationContainer([
      textures.peachBg
    ])

    openingContainer = createOpeningContainer([
      textures.keyuOpening,
      textures.openingJo,
      textures.peiwenOpening,
      textures.nameCard,
      textures.openingBg
    ])

    schoolContainer = createSchoolContainer([
      textures.campusScene,
      textures.campusSmile,
      textures.campusCouple,
      textures.wearemarried,
      textures.schoolBg
    ])

    weddingContainer = createWeddingContainer([
      textures.weddingFirework,
      textures.weddingSeaside,
      textures.weddingHeart,
      textures.weddingHeart2,
      textures.weddingDress,
      textures.weddingHappy,
      textures.weddingBg
    ])

    rsvpContainer = createRsvpContainer([
      textures.rsvpCouple,
      textures.rsvpInfo,
      textures.rsvpjo,
      textures.rsvpjo2
    ])

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

    if (offset <= 75) {
      app.stage.children.forEach((e, i) => {
        e.visible = i === 0 
      })
      app.renderer.backgroundColor = 'fff'
    }

    if (offset > 45) {
      app.stage.children.forEach((e, i) => {
        e.visible = i === 1 || i === 0
      })
      if (offset > 45 && offset < 75) {
        app.stage.children[1].x = 0
        app.stage.children[1].y = (1 - (offset - 45) / 30) * window.innerHeight
      }
      if (offset > 75) {
        app.stage.children[1].y = 0
      }
      app.renderer.backgroundColor = 'fff'
    }

    if (offset > 400) {
      app.stage.children.forEach((e, i) => {
        e.visible = i === 2 || i === 1
      })
      if (offset > 400  && offset < 430) {
        app.stage.children[2].x = (1 - (offset - 400) / 30) * window.innerWidth
        app.stage.children[2].y = 0
      }
      if (offset > 430) {
        app.stage.children[2].x = 0
      }
      app.renderer.backgroundColor = 'fff'
    }

    if (offset > 800) {
      app.stage.children.forEach((e, i) => {
        e.visible = i === 3
      })
      app.renderer.backgroundColor = 'fff'
    }

    if (offset > 1100) { // 1100
      app.stage.children.forEach((e, i) => {
        e.visible = i === 4
      })
      app.renderer.backgroundColor = '#e6c694'
    }
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
