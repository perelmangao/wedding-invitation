import React, { useState, useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import createInvitationContainer from './component/invitation';
import createOpeningContainer from './component/opening';
import createSchoolContainer from './component/school';
import createWeddingContainer from './component/wedding';
import createRsvpContainer from './component/rsvp';
import { texturePaths, musicPaths } from './params';
import gsap from 'gsap';

let openingContainer, invitationContainer, schoolContainer, weddingContainer, rsvpContainer

const PixiCanvas = () => {
  // const [loadingProgress, setLoadingProgress] = useState(0);
  // const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const startY = useRef(0);
  const appRef = useRef(null);
  const globalOffset = useRef(0)

  globalOffset.current = 0

  const handleTouchStart = (e) => {
    startY.current = e.global.y

    const clickX = e.global.x;
    const clickY = e.global.y;
    const texture = PIXI.Texture.from(texturePaths[22])

    // 创建冒气泡的精灵
    const bubble = new PIXI.Sprite(texture); // 替换为气泡纹理的路径
    bubble.width = 64
    bubble.height = 64
    bubble.anchor.set(0.5, 1); // 设置锚点在底部中心
    bubble.x = clickX;
    bubble.y = clickY;

    // 将精灵添加到舞台
    app.stage.addChild(bubble);

    // 使用TweenMax或其他动画库创建向上冒气泡的动画
    gsap.to(bubble, 1.5, { y: bubble.y - 200, alpha: 0, onComplete: () => {
        // 在动画完成后从舞台上移除精灵
        app.stage.removeChild(bubble);
    }});
  };

  const handleTouchMove = (e) => {
    const deltaY = e.global.y - startY.current
    globalOffset.current -= deltaY * 0.5
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
  PIXI.Assets.add('joBubble', texturePaths[22])

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
      'weddingBg',
      'joBubble'
    ],
    (progress) => {
      console.log(progress)
      const progressContainer = document.getElementById('progressContainer');
      const progressBar = document.getElementById('progressBar');
      const progressText = document.getElementById('progressText');
      
      progressBar.style.width = `${progress * 100}%`;

      // 更新数字文本
      progressText.textContent = `Loading...${Math.round(progress * 100)}%`;
    
      // 检查是否达到1，如果达到则隐藏进度条
      if (progress >= 1) {
        progressContainer.style.display = 'none';
      }
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

    if (offset <= 245) {
      app.stage.children.forEach((e, i) => {
        e.visible = i === 0 
      })
      app.renderer.backgroundColor = 'fff'
    }

    if (offset > 45) {
      app.stage.children.forEach((e, i) => {
        e.visible = i === 1 || i === 0
      })
      if (offset > 45 && offset < 245) {

        // openingContainer child: openingBg,nameSprite,jiuSprite,brideSprite,groomSprite
        app.stage.children[1].x = 0
        app.stage.children[1].y = (1 - Math.floor((offset - 45) / 20) * (1 / 10)) * window.innerHeight
      }
      if (offset > 245) {
        app.stage.children[1].y = 0

        app.stage.children[1].children[4].x = 10 * Math.floor((offset - 245) / 20)
        app.stage.children[1].children[3].x = window.innerWidth - (window.innerWidth * (2 / 3)) - 10 * Math.floor((offset - 245) / 20)
        // app.stage.children[1].children[5].rotation -= 0.1 * currentDirection
      }
      app.renderer.backgroundColor = 'fff'
    }

    if (offset > 500) {
      app.stage.children.forEach((e, i) => {
        e.visible = i === 2 || i === 1
      })
      if (offset > 500  && offset < 700) {
        app.stage.children[2].x = (1.5 - Math.floor((offset - 500) / 20) * (1.5 / 10)) * window.innerWidth
        app.stage.children[2].y = 0
        app.stage.children[2].children[3].x = (-1.5 + Math.floor((offset - 500) / 20) * (1.5 / 10)) * (window.innerWidth / 2)
        app.stage.children[2].children[4].x = (-1.5 + Math.floor((offset - 500) / 20) * (1.5 / 10)) * (window.innerWidth / 2)
      }
      if (offset > 700) {
        app.stage.children[2].x = 0
        app.stage.children[2].children[4].anchor.set(0, 0.1)
        app.stage.children[2].children[4].rotation = Math.pow(-1, Math.floor((offset - 700) / 40)) * 0.1
      }
      if (offset > 700 && offset < 800) {
        app.stage.children[2].children[1].visible = false
        app.stage.children[2].children[2].visible = false
        app.stage.children[2].children[3].visible = true
      }
      if (offset > 800) {
        app.stage.children[2].children[1].visible = true
        app.stage.children[2].children[2].visible = false
        app.stage.children[2].children[3].visible = false
      }
      if (offset > 900) {
        app.stage.children[2].children[1].visible = false
        app.stage.children[2].children[2].visible = true
        app.stage.children[2].children[3].visible = false
      }
      app.renderer.backgroundColor = 'fff'
    }

    if (offset > 1000) {
      app.stage.children.forEach((e, i) => {
        e.visible = i === 2
      })
      if (offset > 1000 && offset < 1200) {
        app.stage.children[2].scale.set(1 +  0.2 * Math.floor((offset - 1000) / 20))
      }
      if (offset > 1200) {
        app.stage.children.forEach((e, i) => {
          e.visible = i === 3
        })
        app.stage.children[3].children[1].y = Math.floor((offset - 1200) / 20) * 20
      }
      if (offset > 1200 && offset < 1300) {
        app.stage.children[3].children.map((e, i) => {
          e.visible = i === 0 || i === 1
        })
      }
      if (offset > 1300) {
        app.stage.children[3].children.map((e, i) => {
          e.visible = i === 0 || i === 2
        })
        app.stage.children[3].children[2].y = 200 - Math.floor((offset - 1200) / 20) * 20
      }
      if (offset > 1400) {
        app.stage.children[3].children.map((e, i) => {
          e.visible = i === 0 || i === 3
        })
        app.stage.children[3].children[3].y = Math.pow(-1, Math.floor((offset - 1400) / 20)) * 5 + 200
        app.stage.children[3].children[3].x = -Math.pow(-1, Math.floor((offset - 1400) / 20)) * 5
      }
      if (offset > 1500) {
        app.stage.children[3].children.map((e, i) => {
          e.visible = i === 0 || i === 4
        })
        app.stage.children[3].children[4].y = Math.pow(-1, Math.floor((offset - 1400) / 20)) * 5 + 250
      }
      if (offset > 1600) {
        app.stage.children[3].children.map((e, i) => {
          e.visible = i === 0 || i === 5
        })
        app.stage.children[3].children[5].y = Math.pow(-1, Math.floor((offset - 1400) / 20)) * 5 + 250
      }
      app.renderer.backgroundColor = 'fff'
    }

    if (offset > 1700) { // 1100
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
    <div>
      {
        <div id="progressContainer">
          <div id="progressBar"></div>
          <span id="progressText">0%</span>
        </div>
      }
      <div ref={appRef}></div>
    </div>
  );
};

export default PixiCanvas;
