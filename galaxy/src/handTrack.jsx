import React from "react";
import { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

const HandDetection = ({onHandMove}) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [handCoordinates, setHandCoordinates] = useState(null)

    useEffect(() => {
        const hands = new Hands({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
            }
        });

        hands.setOptions({
            selfieMode: true,
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });

        hands.onResults((results) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            ctx.save();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
            
            if (results.multiHandLandmarks && results.multiHandLandmarks[0]) {
                 const landmarks = results.multiHandLandmarks[0]; 
                 if(landmarks.length > 8){

                     const indexTip = landmarks[8]
                     const thumbTip = landmarks[4]
                     const coordinates = {
                         wrist: {x: landmarks[0].x * 640, y: landmarks[0].y*480},
                         index: {x: indexTip.x * 640, y: indexTip.y*480},
                         thumb: {x: thumbTip.x*640, y: thumbTip.y*480}
                        }
                        
                        setHandCoordinates(coordinates)
                        console.log(coordinates)
                        
                        onHandMove({
                            x: indexTip.x * window.innerWidth,
                            y: indexTip.y * window.innerHeight
                        })

                        const dx = thumbTip.x - indexTip.x;
                        const dy = thumbTip.y - indexTip.y;
                        const dist = (dx*dx) + (dy*dy)
                        const pinch = Math.sqrt(dist)
                        if(pinch<= 0.05){
                            console.log("Pinch")
                            //how to select???
                        }
                    }
            } else{
                setHandCoordinates(null);
                onHandMove({x:-100,y:-100})
            }
            ctx.restore();
        });

        if (videoRef.current) {
            const camera = new Camera(videoRef.current, {
                onFrame: async () => {
                    await hands.send({ image: videoRef.current });
                },
                width: 640,
                height: 480
            });
            camera.start();
        }

    }, []);

    return (
        <div>
            <video ref={videoRef} style={{ display: 'none' }} autoPlay playsInline />
            <canvas ref={canvasRef} width={640} height={480} style={{
                position: 'fixed',
                bottom:10,
                right:10,
                width: '200px',
                height: '150px'
            }} />

            {/* {handCoordinates && (
                <div style={{color: 'white',marginTop:'10px'}}>
                    <p>Wrist: x = {Math.round(handCoordinates.wrist.x)}, y = {Math.round(handCoordinates.wrist.y)}</p>
                    <p>Index: x = {Math.round(handCoordinates.index.x)}, y = {Math.round(handCoordinates.index.y)}</p>

                    </div>
            )} */}
        </div>
    );
}

export default HandDetection;