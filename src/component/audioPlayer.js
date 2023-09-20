import React, { useEffect, useRef } from 'react';

function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.addEventListener("touchend", function () {
      playAudio()
    })
  }, []); // 空依赖数组确保只在组件挂载和卸载时执行

  const playAudio = () => {
    // 使用ref获取音频元素并播放音频
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <audio controls id='bg-music' loop autoPlay ref={audioRef} src='https://perelmangao.github.io/blueming.mp3'></audio>
    </div>
  );
}

export default AudioPlayer;
