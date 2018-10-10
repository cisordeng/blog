function Play(url){
if (!window.AudioContext) {
    alert('您的浏览器不支持AudioContext');
} else {
    var atx = new AudioContext();
    source = null;
    request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
var source = atx.createMediaElementSource($('#py')[0]);
            var analyser = atx.createAnalyser();
            //var source = atx.createBufferSource();
            source.connect(analyser);
 			analyser.connect(atx.destination);
            $('#py')[0].play();
    /*
    request.onload = function () {
        var arraybuffer = request.response;
        atx.decodeAudioData(arraybuffer, function (buffer) {
            var analyser = atx.createAnalyser();
            var source = atx.createBufferSource();
            source.connect(analyser);
            analyser.connect(atx.destination);
 			analyser.connect(atx.destination);
            source.buffer = buffer;
            source.start(0);

            var canvas = document.getElementById('music-canvas'),
                        cwidth = canvas.width,
                        cheight = canvas.height - 2;
            ctx = canvas.getContext('2d');
            ctx.lineWidth = '100'
            gradient = ctx.createLinearGradient(0, 0, 0, 300);
           // gradient.addColorStop(1, '#0f0');
           // gradient.addColorStop(0.5, '#ff0');
           // gradient.addColorStop(0, '#f00');
            var drawMeter = function () {
                var array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                ctx.clearRect(0, 0, cwidth, cheight);
                number++;
                if (number > 1000 && number < 1003) {
                    console.info(array);
                }
                if (array[1020] > 0) {
                    console.info(array);
                }
                for (var i = 0; i < array.length; i+=20) {
                    var value = array[i];
                    ctx.fillStyle = 'red';
                    ctx.fillRect(i, cheight - value, 18, value);
                }
                requestAnimationFrame(drawMeter);
            }
            requestAnimationFrame(drawMeter);

        }, function (e) {
            console.info('处理出错');
        });

    }
    
    request.send();
 var number = 0;
 */
}
}
