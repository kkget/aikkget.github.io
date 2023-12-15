import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c as l,a as e,b as n,d as t,e as o}from"./app-spdQc88k.js";const p={},c=o('<p>疫情封控两个月后，人变得愈发懒散，每天的成果只有吃饭睡觉。为了摆脱这种状态，我决定在书房对自己进行 24 小时的监控录像，督促自己提升效率。</p><p>自我监控方案有两点需求：首先，软硬件必须在本地操作、储存，绝对不能联网；其次工作中途经常离开书房，回放时能跳过无人片段。</p><p><strong>寻找监控工具</strong>：</p><ul><li>视频剪辑软件：自动识别长时间静止的画面，删除或加速相关视频帧。</li><li>录屏软件：带移动侦测功能，检测到人则开启录像，无人则自动暂停，无需联网就能使用。</li><li>播放软件：自动跳过超过 10s 的静止画面。</li><li>直连电脑的摄像机：不联网，不用 SD 卡将视频直接存储在电脑上。虽然萤石、小米有移动侦测功能，但视频需上传云端，风险过大。</li></ul><p>找了许久，始终找不到合适的工具。监控摄像头和行车记录仪能跳过静止画面，但这类工具都不能直连电脑，且限制很多，不方便后期回放剪辑。</p><p>最后靠着少数派群友 @chen 的推荐，尝试 DVR-Scan，补完了自我监控方案。</p><h2 id="自我监控方案" tabindex="-1"><a class="header-anchor" href="#自我监控方案" aria-hidden="true">#</a> 自我监控方案</h2>',7),d=e("strong",null,"晨间唤醒",-1),m=e("br",null,null,-1),h={href:"https://www.xuetangx.com/course/THU07111001088/",target:"_blank",rel:"noopener noreferrer"},u=o('<li><strong>录制视频</strong>：用 VLC 和摄像头录制视频，按计划开始工作学习。</li><li><strong>过滤视频</strong>：晚上 11 点，DVR-Scan 过滤静止视频片段，记录录制时长和处理后的视频时长。<br><img src="https://img.newzone.top/2022-05-22-10-05-04.png?imageMogr2/format/webp" alt="视频时长记录表格" loading="lazy"></li><li><strong>视频回放</strong>：100x 倍速回放工作视频，检查工作效率和成果。如果需要听声音，则使用 PotPlayer 播放降噪，剪辑出要使用的片段。原始视频和过滤视频保存一月，定期清理。</li><li><strong>当日回顾</strong>：记录 3 件好事，总结好事发生的原因。<br> 这可以是日常生活中常见的小事，比如读到一本好书、吃到一道好菜、听到一个亲友的好消息、在公交车上有人为你让座、孩子今天会走路了，等等。</li>',4),g=e("p",null,"接下来，将详述自我监控方案的准备、流程及遇到的问题。",-1),_=e("h2",{id:"监控准备",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#监控准备","aria-hidden":"true"},"#"),n(" 监控准备")],-1),b=e("p",null,"自我监控方案的硬件需要摄像头、电脑，软件则使用 VLC、DVR-Scan、PotPlayer。",-1),v=e("p",null,"摄像头预算一百左右就行，之前买过上千的罗技摄像头，画质并未有明显区别。",-1),f=e("p",null,"收音设备使用的是摄像头自带的麦克风。之所以不用桌面的声卡外接话筒，是因为容易有回音，杂音更重。",-1),k=e("h2",{id:"录制视频-vlc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#录制视频-vlc","aria-hidden":"true"},"#"),n(" 录制视频：VLC")],-1),w=e("p",null,"摄像头录像方案较少，大多是录屏软件的附带功能，我尝试了以下 9 种：",-1),y=e("li",null,"相机：Windows 自带应用，录制方便，但输出选项少，限制多。",-1),V={href:"https://www.flashbackrecorder.com/zh/express/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.bandicam.cn/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.bandicam.cn/support/tips/timer-recording/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://mirillis.com/zh/products/action.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://ohsoft.net/eng/ocam/intro.php?cate=1002",target:"_blank",rel:"noopener noreferrer"},D={href:"https://getsharex.com/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/MathewSachin/Captura/releases/tag/v8.0.0",target:"_blank",rel:"noopener noreferrer"},M={href:"https://blog.csdn.net/dglx_/article/details/122389601",target:"_blank",rel:"noopener noreferrer"},z={href:"https://obsproject.com/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.videolan.org/vlc/",target:"_blank",rel:"noopener noreferrer"},L=o('<p>Bandicam、Mirillis Action！录制时，电脑无法进入睡眠，ManicTime 也不能检测到你的离开状态。</p><p>监控方案的单次录制时间在 12 小时以上，需要调低帧率以控制视频大小，选择了 VLC 作为录制软件。如果你要同时录屏和录像，可以使用 OBS、Capture 或 oCam。</p><p><strong>录制过程：</strong></p><ol><li><p>打开 VLC 的 Media -&gt; Open Capture Device，将 <code>Video device name</code> 和 <code>Audio device name</code> 选为摄像头，然后点击底部 <code>Play</code> 按钮旁边的下拉菜单，选中 <code>Convert</code>。</p><figure><img src="https://img.newzone.top/2022-05-21-22-09-08.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Settings -&gt; Profile 中选择视频输出方案，推荐选择 <code>Video - H.264 + MP3 (MP4)</code>，接着点击旁边的扳手按钮，修改输出方案。</p><figure><img src="https://img.newzone.top/2022-05-21-22-11-09.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Profile edition -&gt; Video codec -&gt; Encoding parameters，依次调整视频的编码、比特率、画面质量、帧率，编码建议使用 H-264，码率推荐 10 fps。</p><figure><img src="https://img.newzone.top/2022-05-21-22-12-32.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Destination file 设置输出路径和视频名称。</p></li></ol><h2 id="剪辑视频-dvr-scan" tabindex="-1"><a class="header-anchor" href="#剪辑视频-dvr-scan" aria-hidden="true">#</a> 剪辑视频：DVR-Scan</h2><p>过滤视频的静态画面，是监控方案中的核心环节。开始我考虑用 QuickCut 过滤，但它是通过声音来判断视频是否静止（与飞书妙记的「跳过空白片段」原理类似），监控视频中大部分时间是没声音的，不适合用 QuickCut 剪辑。</p>',6),N={href:"https://github.com/Breakthrough/DVR-Scan",target:"_blank",rel:"noopener noreferrer"},T=o(`<blockquote><p>DVR-Scan 是一个跨平台命令行（CLI）应用程序，可以自动检测视频文件中的运动事件（例如安全摄像头镜头）。除了定位每个运动事件的时间和持续时间外，DVR 扫描还将每个运动事件的片段保存到一个新的单独的视频剪辑中。DVR-Scan 免费开源软件（FOSS）是用 Python 编写的，并且基于 Numpy 和 OpenCV，而且可以扩展和黑客入侵。</p></blockquote><p>DVR-Scan 操作很简单，视频目录内右键单击「在终端打开」，执行默认输出命令即可得到过滤后的视频。12 小时的视频，处理用时二十分钟，会占用大量 CPU。有点要注意，DVR-Scan 有个限制，只能导出为<code>.avi</code>视频。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#默认输出命令，不含音频</span>
dvr-scan <span class="token parameter variable">-i</span> some_video.mp4 <span class="token parameter variable">-o</span> some_video_motion_only.avi

<span class="token comment">#将含音轨的输出视频放于 output 文件夹，但输出会被分为多个视频</span>
dvr-scan <span class="token parameter variable">-i</span> some_video.mp4 <span class="token parameter variable">-d</span> output <span class="token parameter variable">-m</span> ffmpeg
<span class="token comment">#如果只想获取单个输出视频，则使用视频合并命令。（默认终端为 Windows cmd(管理员)，其他终端查看 https://trac.ffmpeg.org/wiki/Concatenate#demuxer）</span>
dvr-scan <span class="token parameter variable">-i</span> some_video.mp4 <span class="token parameter variable">-d</span> output <span class="token parameter variable">-m</span> ffmpeg <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>for %i <span class="token keyword">in</span> <span class="token punctuation">(</span>output/*.mp4<span class="token punctuation">)</span> <span class="token keyword">do</span> @echo <span class="token function">file</span> <span class="token string">&#39;%i&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> output/mylist.txt <span class="token operator">&amp;&amp;</span> ffmpeg <span class="token parameter variable">-f</span> concat <span class="token parameter variable">-i</span> output/mylist.txt <span class="token parameter variable">-c</span> copy output_combine.mp4 <span class="token parameter variable">-y</span>

<span class="token comment"># -t 是 DVR-Scan 的动作检测敏感度，默认为 0.15，越低则越敏感</span>
<span class="token comment">#下列命令将敏感度调为 0.5，最大程度的删除静止画面帧</span>
dvr-scan <span class="token parameter variable">-t</span> <span class="token number">0.5</span> <span class="token parameter variable">-i</span> some_video.mp4 <span class="token parameter variable">-o</span> some_video_motion_only.avi

<span class="token comment"># -b 是 DVR-Scan 的算法，默认为 MOG，追求速度则使用 CNT</span>
<span class="token comment">#最快速度的删除静止画面帧，但会牺牲准确率，有更多的静止画面帧被留存</span>
dvr-scan <span class="token parameter variable">-b</span> CNT <span class="token parameter variable">-i</span> some_video.mp4 <span class="token parameter variable">-o</span> some_video_motion_only.avi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DVR-Scan 不同命令的测试效果如下：</p><table><thead><tr><th>命令</th><th>耗时（s）</th><th>输出视频（mins）</th></tr></thead><tbody><tr><td>默认</td><td>124</td><td>07:15</td></tr><tr><td>-t 0.5</td><td>125</td><td>06:52</td></tr><tr><td>-b CNT</td><td>107</td><td>10:05</td></tr><tr><td>-t 0.5 -b CNT</td><td>104</td><td>08:39</td></tr></tbody></table><p>另外，DVR-Scan 可以使用 <code>-roi</code> 命令，指定监测区域，只对该区域的动作进行监测。</p>`,6),H={href:"https://dvr-scan.readthedocs.io/en/latest/guide/examples/",target:"_blank",rel:"noopener noreferrer"},O=o('<h2 id="播放降噪-potplayer" tabindex="-1"><a class="header-anchor" href="#播放降噪-potplayer" aria-hidden="true">#</a> 播放降噪：PotPlayer</h2><p>桌面录音容易有较大的噪音，重新处理的话需要大量时间，因此我将降噪环节放在视频播放器中处理。</p><ul><li><p><strong>开启降噪</strong>：风噪等一系列噪声会消失，但是带过降噪耳机的都知道，开启降噪会有一种很糊的感觉，这时视频的声音就会变得无比无比的糊。</p></li><li><p><strong>开启语音增强</strong>：语音增强会在很糊的声音中明显听到人的声音，但是还是略显不足，还是有点杂，而且声音特别大。</p></li><li><p><strong>关闭规格化</strong>：这时声音就不会那么大，也不会过于杂了，这时的声音已经相比处理前干净多了。</p></li><li><p><strong>开启超高音</strong>：打开均衡器，选择「超高音」方案。</p><figure><img src="https://img.newzone.top/2022-05-19-10-47-18.png?imageMogr2/format/webp" alt="PotPlayer 播放降噪设置" tabindex="0" loading="lazy"><figcaption>PotPlayer 播放降噪设置</figcaption></figure></li></ul><p>设置完成后，播放时 PotPlayer 会自动对视频进行降噪，无需额外花时间处理视频。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>自我监控分为 5 步，「晨间唤醒：计划」&gt;「录制视频：VLC」&gt;「过滤视频：DVR-Scan」&gt;「视频回放：PotPlayer」&gt;「当日回顾」。搭配脚本，每天开机自动开始录制视频，然后在晚上九点停止录制，并过滤当天视频的静止帧。</p><p>经过一段时间的自我监控，我对自己的活动有了更清晰的认知，从而更方便地进行行为控制和修正。此外，由于视频存储在本地，不向第三方开放，所以可以安心地做自己。在每日回顾中，勇敢地面对自己的缺点和错误，积极地进行调整。</p><p><strong>参考资料：</strong></p>',8),E={href:"https://askubuntu.com/questions/422341/how-can-i-detect-motion-in-a-long-mostly-dull-video/423028#423028",target:"_blank",rel:"noopener noreferrer"},F={href:"https://blog.csdn.net/NeiHan2020/article/details/118368739",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.xuetangx.com/course/THU07111001088/",target:"_blank",rel:"noopener noreferrer"};function q(A,U){const a=r("ExternalLinkIcon");return i(),l("div",null,[c,e("ol",null,[e("li",null,[d,n("：起床后，用手机单独录一句话。这句话在前一天准备好，包括日期、当日目标，也可以引入美好的回忆、憧憬的未来、向往的地方、喜欢的艺术 (音乐、名画、诗句)。"),m,n(" 晨间唤醒参考了"),e("a",h,[n("积极心理学"),t(a)]),n("，收集积极情绪材料，给自己创造美好的情绪。")]),u]),g,_,b,v,f,k,w,e("ul",null,[y,e("li",null,[e("a",V,[n("FlashBack Express"),t(a)]),n("：能调节帧率，镜像，虚化背景，但免费版只支持 2 小时内的录制。")]),e("li",null,[e("a",x,[n("Bandicam"),t(a)]),n("：录制时能降噪，内录扬声器音频，自由调节编码、帧率，但免费版只支持录制 10 分钟且有水印，输出文件名自定义规则极少。Bandicam 支持定时录制计划，但录制的开始和结束都必须由该计划执行，否则录制计划将不会执行。比如使用 Bandicam 的开机录制后，定时录制计划就会失效，需借助 Windows 的任务计划程序来定时录制停止，操作参考 "),e("a",C,[n("Bandicam 官方文档"),t(a)]),n("。")]),e("li",null,[e("a",S,[n("Mirillis Action!"),t(a)]),n("：高帧率录制游戏，自动分割视频，自定义叠加元素，但输入帧率不能自由调整，最低只能 15 帧，试用期 30 天。")]),e("li",null,[e("a",P,[n("oCam"),t(a)]),n("：打着免费招牌但有弹窗广告，且录制视频偏大。")]),e("li",null,[e("a",D,[n("ShareX"),t(a)]),n("：免费开源强大的截图软件，也具备录屏功能，能调节编码和帧率，但只能单一录屏或录像。")]),e("li",null,[e("a",R,[n("Capture"),t(a)]),n("：免费开源，使用前需手动 "),e("a",M,[n("配置 FFmpeg"),t(a)]),n("，自定义叠加元素，但项目已停止更新。测试时，Capture 经常莫名其妙的报错，重启大概率恢复正常，只能偶尔用用，不能用于工作环境。")]),e("li",null,[e("a",z,[n("OBS"),t(a)]),n("：免费开源直播软件，也可以录制视频，操作性极强，但输出限制多，也难以在直播的同时进行桌面录制。")]),e("li",null,[e("a",B,[n("VLC"),t(a)]),n("：免费开源视频软件，能调节输出视频的编码、帧率、格式，但操作麻烦，只能单一录屏或录像，暂停录制容易有 bug。")])]),L,e("p",null,[n("群里 @chen 推荐了 "),e("a",N,[n("DVR-Scan"),t(a)]),n("，能从画面判断是否需要过滤。")]),T,e("p",null,[n("DVR-Scan 进阶命令查看"),e("a",H,[n("官方文档"),t(a)]),n("。")]),O,e("ul",null,[e("li",null,[e("a",E,[n("How can I detect motion in a long, mostly dull video?"),t(a)])]),e("li",null,[e("a",F,[n("如何设置 potplayer 播放器把人声凸显出来并降噪？"),t(a)])]),e("li",null,[e("a",I,[n("网课：积极心理学"),t(a)])])])])}const j=s(p,[["render",q],["__file","2022-05-22-surveillance_video_for_myself.html.vue"]]);export{j as default};
