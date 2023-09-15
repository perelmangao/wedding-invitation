import React, { useState, useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';

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
    globalOffset.current += deltaY
    if (globalOffset.current < 0) {
      globalOffset.current = 0
    }
    if (globalOffset.current > 3 * window.innerHeight) {
      globalOffset.current = 3 * window.innerHeight
    }
    setSceneVisible(globalOffset.current)
    startY.current = e.global.y
    console.log('globalOffset', globalOffset)
  };

  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xAAAAAA,
  });
  app.view.id = 'test'

  const scene1 = new PIXI.Container();
  const scene2 = new PIXI.Container();
  const scene3 = new PIXI.Container();
  
  // 向场景中添加内容
  scene1.addChild(new PIXI.Text("Scene 1", { fontSize: 48, fill: 0xffffff }));
  scene2.addChild(new PIXI.Text("Scene 2", { fontSize: 48, fill: 0xffffff }));
  scene3.addChild(new PIXI.Text("Scene 3", { fontSize: 48, fill: 0xffffff }));

  // 设置场景位置
  scene1.y = 0;
  scene2.y = 0
  scene3.y = 0
  scene2.visible = false
  scene3.visible = false

  // 添加场景到PixiJS舞台
  app.stage.addChild(scene1);
  app.stage.addChild(scene2);
  app.stage.addChild(scene3);

  const setSceneVisible = (offset) => {

    if ((offset / window.innerHeight) <= 1) {
      app.stage.children[0].visible = true
      app.stage.children[1].visible = false
      app.stage.children[2].visible = false
    } else if ((offset / window.innerHeight) > 1 && (offset / window.innerHeight) <= 2) {
      app.stage.children[0].visible = false
      app.stage.children[1].visible = true
      app.stage.children[2].visible = false
    } else {
      app.stage.children[0].visible = false
      app.stage.children[1].visible = false
      app.stage.children[2].visible = true
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
