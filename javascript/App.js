function App(){



    let video = document.getElementById('videoInput');
    let classifier = new cv.CascadeClassifier();
    let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);

    // load pre-trained classifiers
    classifier.load('haarcascade_frontalface_default.xml');

    const FPS = 30;

    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function(stream) {
        video.srcObject = stream;
        src = stream;
        video.play();
    })
    .catch(function(err) {
        console.log(err);
    });

    
    let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
    let cap = new cv.VideoCapture(video);

    function processVideo() {
        try {
            src = ;
            let begin = Date.now();
            // start processing.
            cap.read(src);
            cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
            cv.imshow('canvasOutput', dst);
            // schedule the next one.
           let delay = 1000/FPS - (Date.now() - begin);
            setTimeout(processVideo, delay);
        } catch (err) {
            console.log(err);
       }
    };

    // schedule the first one.
    setTimeout(processVideo, 0);

}