# Web

## About MusicPlayer1.2


### 待改进的细节


-----
###### 1.进度拖动条,拖动时,currentTime不应该时刻与drag_button的left保持一致,因为这样拖动时有杂音，应该待mouseup触发时改变currentTime的值,从而避免了前面的杂音。
###### 状态:   ✔Bingo！  2017-3-8 23:56
解决方案:
*[Web组件流畅拖动效果](http://www.cnblogs.com/dearvee/p/6520340.html)（关于拖动的解决，以及需要注意的细节）*

*以time来暂存待改变currentTime的值，但mousemove事件触发时不改变currentTime的值，而是待mouseup事件触发时，改变currrentTime的值，效果就是拖动时正常播放，当鼠标左键up时，改变播放进度，即time=m.currentTime。*

###### 2.点击进度条，改变播放进度currentTime
###### 状态:   ✔Bingo！  2017-3-9 12:40
解决方案:
*由于进度条progress没有click事件监听器，于是想到用一个与progress有相同样式，background透明的span覆盖progress，该span位于progress和drag_button组件之间，然后在透明的span添加click监听器，最后改变currentTime的值，从而实现点击进度条，改变播放进度的目的*
###### 3.以解析lrc文件来获取歌词字符串,克服由歌词引起的代码臃肿

-----



### 待添加功能项
###### 1.音量控制条
###### 状态:   ✔Bingo！  2017-3-13 00:38
解决方案:
*通过volume_drag_button.style.top，music.volume和progress_volume.value三者同步，实现拖动volume_drag_button改变music.volume的值，从而控制音量。拖动条默认是水平的，这里通过transform: rotate(-90deg)使其竖直显示*
###### 2.频谱图动画
###### 3.播放方式(单曲,顺序,随机)
###### 4.停止方式(定时,定曲)
###### 5.music播放列表