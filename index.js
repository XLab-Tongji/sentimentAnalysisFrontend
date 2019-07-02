$(function(){
		var recorder;
		var audio = $("#reply")[0];
		var text = $("#text")[0];
		var timer;
		$("#start").click(function(){
			HZRecorder.get(function (rec) {
                    recorder = rec;
                    recorder.start();
                    //开始录音后就可以实时监视声音录制过程
                    recorder.onProgress(function(vol){
						console.log(vol)
					})
                });
			//开始录音，其中replay是一个音频对象
			text.innerText="录音中。。0s" 
			time = 0
			timer = setInterval(function(){text.innerText="录音中。。"+time+"s"; time = time+1;},1000);
		})
		$("#stop").click(function(){
			//停止录音
			recorder.stop();
			clearInterval(timer);
			text.innerText="录音结束"
		})
		$("#play").click(function(){
			//播放录音
			recorder.play(audio);
		})
		$("#upload").click(function(){
			//上传音频数据，经过优化压缩过的
			recorder.upload(function (data) {
			//data 对象为录音后的音频数据
                var fd = new FormData();
                fd.append("file", data);
                $.ajax({
                    url : 'http://127.0.0.1:5000/predict',
                    type : 'POST',
                    data : fd,
                    // 告诉jQuery不要去处理发送的数据
                    processData : false,
                    // 告诉jQuery不要去设置Content-Type请求头
                    contentType : false,
                    success : function(res) {console.log(res)},
                    error : function(error) {
                        console.log("error");
                    }
                });
            });
		})

	})