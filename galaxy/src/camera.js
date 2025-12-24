const constraints = {
    video : true,
    audio : false
}

async function startWebcam() {
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.getElementById('videoElement')
        if(videoElement){
            videoElement.srcObject = stream;
        }
    } catch (error){
        console.log('Error',error);
        
    }
    
}


startWebcam();