import { useEffect, useRef } from "react";
import { Hands } from "@mediapipe/hands";

export default function HandTracker() {
  const videoRef = useRef(null);
  let handsInstance = null;

  useEffect(() => {
    let isRunning = true;
    async function startWebcam() {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      videoRef.current.srcObject = stream;

      videoRef.current.onloadeddata = () => {
        console.log("VIDEO READY");

        handsInstance = new Hands({
          locateFile: (file) => 
            `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
        })

        handsInstance.setOptions({
          maxNumHands: 1,
          minDetectionConfidence: 0.7,
          minTrackingConfidence: 0.7,
        })

        handsInstance.onResults((results) => {
          if(!results.multiHandLandmarks) return;

          const indexTip = results.multiHandLandmarks[0][8];
          console.log('Index Finger: ', indexTip.x,indexTip.y);
          
        })

        async function processFrame() {
          if(!isRunning) return;
          if(videoRef.current.videoWidth === 0) return
          await handsInstance.send({image:videoRef.current});
          requestAnimationFrame(processFrame)
          
        }

        processFrame();
      };
    }

    startWebcam();
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      style={{ opacity: 0 }}
    />
  );
}


