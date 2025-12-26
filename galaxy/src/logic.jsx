import { useEffect, useRef } from "react";
import { Hands } from "@mediapipe/hands";

export default function HandTracker() {
  const videoRef = useRef(null);
  const handsRef = useRef(null);

  useEffect(() => {
    let isRunning = true;
    let stream;

    async function startWebcam() {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      videoRef.current.srcObject = stream;

      videoRef.current.onloadedmetadata = async () => {
        await videoRef.current.play();

        handsRef.current = new Hands({
          locateFile: (file) =>
            `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
        });

        handsRef.current.setOptions({
          maxNumHands: 1,
          minDetectionConfidence: 0.7,
          minTrackingConfidence: 0.7,
        });

        handsRef.current.onResults((results) => {
          if (!results.multiHandLandmarks) return;
          const indexTip = results.multiHandLandmarks[0][8];
          console.log(indexTip.x, indexTip.y);
        });

        const loop = async () => {
          if (!isRunning || !handsRef.current) return;
          await handsRef.current.send({ image: videoRef.current });
          requestAnimationFrame(loop);
        };

        loop();
      };
    }

    startWebcam();

    return () => {
      isRunning = false;
      stream?.getTracks().forEach((t) => t.stop());
      handsRef.current?.close();
    };
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
