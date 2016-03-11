// MP3播放器及歌曲库js


	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	}, [{title:"李白", artist:"李荣浩", mp3:"pic/music1.mp3", poster: "images/singer1.jpg"},
		 {title:"GOOD爱", artist:"欧汉声", mp3:"pic/music2.mp3", poster: "images/singer2.jpg"},
		 {title:"咱们结婚吧", artist:"齐晨", mp3:"pic/music3.mp3", poster: "images/singer3.jpg"}], 
		 
		{playlistOptions:{enableRemoveControls: true},
		swfPath: "js/",
		supplied: "webmv, ogv, m4v, oga, mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		audioFullScreen: true
	});
	

	//最新推荐曲库

	var latest=[
	
		{title:"爱情大师",artist:"崔子格",mp3:"http://qzone.haoduoge.com/music2/2015-01-08/1420685365.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/g/X/004QYGOE4OeXgX.jpg"},
		{title:"就是现在",artist:"王力宏",mp3:"http://qzone.haoduoge.com/music2/2015-01-06/1420522170.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/q/K/001JDzPT3JdvqK.jpg"},
		{title:"爱与诚",artist:"古巨基",mp3:"http://qzone.haoduoge.com/music2/2014-10-16/1413440967.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/P/B/000NFT2p1GbnPB.jpg"},
		{title:"野子",artist:"苏运莹",mp3:"http://qzone.haoduoge.com/music2/2015-01-14/1421204032.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/V/h/003Augcx1XmqVh.jpg"},
		{title:"闹啥子嘛闹",artist:"张杰",mp3:"http://qzone.haoduoge.com/music2/2015-01-05/1420430063.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/N/6/002azErJ0UcDN6.jpg"},
		{title:"冬天的树",artist:"戚薇",mp3:"http://qzone.haoduoge.com/music2/2014-12-31/1419957978.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/B/d/002FMuXL1U6ABd.jpg"},
		{title:"我笑到都哭了",artist:"A-Lin",mp3:"http://qzone.haoduoge.com/music2/2014-12-31/1420000931.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/T/z/003ArN8Z0WpjTz.jpg"},
		{title:"你是如此难以忘记",artist:"李宇春",mp3:"http://qzone.haoduoge.com/music2/2014-12-31/1419967188.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/0/Y/002ZOuVm3Qn20Y.jpg"},
		{title:"千秋",artist:"孙楠",mp3:"http://qzone.haoduoge.com/music2/2014-12-27/1419611289.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/F/i/0019iLuN2glWFi.jpg"}
	];

	//最热推荐曲库
	var popular=[

		{title:"可惜没如果",artist:"林俊杰",mp3:"http://qzone.haoduoge.com/music2/2015-01-08/1420687578.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/e/2/001BLpXF2DyJe2.jpg"},
		{title:"一切安好",artist:"莫文蔚",mp3:"http://sc1.111ttt.com/2015/1/01/13/94131706223.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/c/6/000cISVf2QqLc6.jpg"},
		{title:"算什么男人",artist:"周杰伦",mp3:"http://qzone.haoduoge.com/music2/2014-12-20/1419068205.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/P/4/0025NhlN2yWrP4.jpg"},
		{title:"独行",artist:"苏醒",mp3:"http://qzone.haoduoge.com/music2/2014-12-11/1418284522.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/a/M/000b7B7h1fXzaM.jpg"},
		{title:"Play 我呸",artist:"蔡依林",mp3:"http://qzone.haoduoge.com/music2/2014-11-04/1415091577.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/o/O/0027pdHE4STooO.jpg"},
		{title:"帽子戏法",artist:"魏晨",mp3:"http://qzone.haoduoge.com/music2/2014-12-27/1419666620.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/e/G/004DTQXp0cNXeG.jpg"},
		{title:"沧浪之歌",artist:"汪峰",mp3:"http://qzone.haoduoge.com/music2/2014-12-17/1418824054.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/0/P/001adLDR1SS40P.jpg"},
		{title:"失忆的金鱼",artist:"杨丞琳",mp3:"http://qzone.haoduoge.com/music2/2014-11-29/1417192257.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/0/d/000ZVS6E1f6f0d.jpg"},
		{title:"说走就走的旅行",artist:"李行亮",mp3:"http://qzone.haoduoge.com/music2/2014-12-15/1418614598.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/C/j/001BNSLF3lhyCj.jpg"}
	];

	//巅峰榜曲库
	var rank=[

		{title:"手写着从前",artist:"周杰伦",mp3:"http://sc1.111ttt.com/2014/1/12/25/5251733008.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/P/4/0025NhlN2yWrP4.jpg"},
		{title:"手心的蔷薇",artist:"林俊杰",mp3:"http://qzone.haoduoge.com/music2/2014-12-27/1419690707.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/e/2/001BLpXF2DyJe2.jpg"},
		{title:"阳明山",artist:"周杰伦",mp3:"http://qzone.haoduoge.com/music2/2015-01-10/1420876005.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/P/4/0025NhlN2yWrP4.jpg"},
		{title:"让初恋像昨天",artist:"游鸿明",mp3:"http://qzone.haoduoge.com/music2/2014-12-25/1419509067.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/K/f/002qezg71e59Kf.jpg"},
		{title:"罪恶感",artist:"A-Lin",mp3:"http://qzone.haoduoge.com/music2/2014-12-20/1419060453.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_300/T/z/003ArN8Z0WpjTz.jpg"},
		{title:"两个人的回忆一个人过",artist:"庄心妍",mp3:"http://qzone.haoduoge.com/music2/2014-10-28/1414505060.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/M/O/003Cn3Yh16q1MO.jpg"},
		{title:"蓝色圣诞节",artist:"徐若瑄",mp3:"http://qzone.haoduoge.com/music2/2014-12-24/1419425584.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/2/9/0032tuB23Ynf29.jpg"},
		{title:"突然好想你(Live)",artist:"古巨基",mp3:"http://qzone.haoduoge.com/music3/2015-01-26/1422203098.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/P/B/000NFT2p1GbnPB.jpg"},
		{title:"这一次我绝不放手(Live)",artist:"孙楠",mp3:"http://qzone.haoduoge.com/music3/2015-01-26/1422202391.mp3",poster:"http://imgcache.qq.com/music/photo/mid_singer_150/F/i/0019iLuN2glWFi.jpg"}
	];




	//添加播放歌曲

	$("#latest li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:latest[k].title, artist:latest[k].artist,
			//free:true,
			mp3:latest[k].mp3,
			//oga:"",
			poster:latest[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#popular li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:popular[k].title, artist:popular[k].artist,
			//free:true,
			mp3:popular[k].mp3,
			//oga:"",
			poster:popular[k].poster
		});
		myPlaylist.play(-1);
	});

	$("#rank li").find("a.playIcon").click(function() {
		var k=$(this).parent("li").index();
		myPlaylist.add({ 
			title:rank[k].title, artist:rank[k].artist,
			//free:true,
			mp3:rank[k].mp3,
			//oga:"",
			poster:rank[k].poster
		});
		myPlaylist.play(-1);
	});
	
	
	//添加歌曲结束


	//移除
	$("#playlist-remove").click(function() {
		myPlaylist.remove();		//（0 1 2 ... -2 -1）
	});
	
	$("#listRemove").click(function() {
		myPlaylist.remove();
	});

	// 上一曲、下一曲

	$("#playlist-next").click(function() {
		myPlaylist.next();
	});
	$("#playlist-previous").click(function() {
		myPlaylist.previous();
	});

	// 播放
	$("#playlist-play").click(function() {
		myPlaylist.play();
	});

	$("#playlist-play--2").click(function() {
		myPlaylist.play(-2);
	});
	$("#playlist-play--1").click(function() {
		myPlaylist.play(-1);
	});
	$("#playlist-play-0").click(function() {
		myPlaylist.play(0);
	});
	$("#playlist-play-1").click(function() {
		myPlaylist.play(1);
	});
	$("#playlist-play-2").click(function() {
		myPlaylist.play(2);
	});

	// 暂停

	$("#playlist-pause").click(function() {
		myPlaylist.pause();
	});



	//是否自动播放

	$("#playlist-option-autoPlay-true").click(function() {
		myPlaylist.option("autoPlay", true);
	});
	$("#playlist-option-autoPlay-false").click(function() {
		myPlaylist.option("autoPlay", false);
	});




	//播放器列表滚动条js------------------------------------------------------------------------------------------------
	var $bar=$(".bar");
	var $scrollBar=$(".scrollBar");
	var $maxH = $scrollBar.innerHeight() - $bar.outerHeight();
	var $ul=$(".jp-playlist ul");
	var $li=$(".jp-playlist ul li");
	var disY=0; 
	var iScale=0;
	var iSpeed = 0;
	
	$ul.height(1000);		//设置ul的高度
	
	$bar.mousedown(function (event){
		var event = event || window.event;
		disY = event.clientY - $(this).position().top;                
		$(document).bind("mousemove",function (event){
				var event = event || window.event;
				var iH = event.clientY - disY;                        
				iH <= 0 && (iH = 0);
				iH >= $maxH && (iH = $maxH);
				$bar.css({top : iH + "px"});
				iScale = - iH/$maxH;
				$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});	
				return false;
		});                
		$(document).bind("mouseup",function (){		
				$(document).unbind("mousemove");
				$(document).unbind("mouseup");
		});
		return false;
	});
	
	 //当鼠标移入，监听事件
	$(".jp-playlist-box").mouseover(function(){
			//鼠标滚轮
			addHandler(this, "mousewheel", mouseWheel);//IE
			addHandler(this, "DOMMouseScroll", mouseWheel);//标准
			return false;			
	});
	//绑定事件重写兼容
	 function addHandler(element, type, handler){
			return element.addEventListener ? element.addEventListener(type, handler, false) :
			element.attachEvent("on" + type, handler, false)
	}
	 //鼠标滚轮事件
	function mouseWheel(event){
		var event = event || window.event;
		if(event.wheelDelta) {//IE
				iSpeed = event.wheelDelta > 0 ? -3 : 3;
		}else if(event.detail) {//火孤
				iSpeed = event.detail < 0 ? -3 : 3;
		}
		move();
		
		//FF,绑定事件，阻止默认事件  
		if (event.preventDefault) {  
			event.preventDefault();  
		} 	
	} ;
	//滚轮 要执行的
	function move(){
		var iH=$bar.position().top;
		iH=iH+iSpeed;
		iH <= 0 && (iH = 0);
		iH >= $maxH && (iH = $maxH);
		$bar.css({top:iH+"px"});
		iScale = - iH/$maxH;
		$ul.css({top:iScale*($ul.height()-$(".jp-playlist-box").height())+"px"});
		return false;
	};
	//播放器列表滚动条js 结束------------------------------------------------
	
	
	
	//音乐播放器 收缩、展开----------------------------------------------
	var fold=true;//标识
	
	//页面加载时，播放器运动出来，延迟2秒，运动回去
	$(".jp-video").animate({left:0},"slow",function(){
		slideOut($(this));		
	}).delay(2000).animate({left:"-480px"},350,function(){
		slideIn($(this));	
	});
	
	//点击按钮运动出来，或运动回去
	$("#btnfold").click(function(){
		if(fold){
			$(".jp-video").animate({left:"-480px"},350,function(){	
				slideIn($(this));
			});	
		}else{
			$(".jp-video").animate({left:0},350,function(){
				slideOut($(this));
			});	
		}
	});
	//封装按钮背景切换1
	function slideOut(obj){
		$("#btnfold").attr({"title":"点击收缩"});
		obj.find("span").css({"transform":"rotate(180deg)"});
		obj.find("span").css({"MozTransform":"rotate(180deg) translateX(2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(180deg)"});
		fold=true;		
	};
	//封装按钮背景切换2
	function slideIn(obj){
		$("#btnfold").attr({"title":"点击展开"});	
		obj.find("span").css({"transform":"rotate(0deg)"});
		obj.find("span").css({"MozTransform":"rotate(0deg) translateX(-2px)"});
		obj.find("span").css({"WebkitTransform":"rotate(0deg)"});
		fold=false;	
	};
	
	//歌曲列表展开、收缩---------------------------------------------------
	var iOpen=false;
	$("#listClose").click(function(){
		if(iOpen){
			$(".jp-playlist-box").animate({height:0},100);
			$("#btnfold").css({top:"5px"});
			$("#listRemove").css({display:"none"});
			$(".scrollBar").css({display:"none"});
			$(".jp-video").animate({height:"94px",bottom:"20px"},100);
			iOpen=false;
		}else{
			$(".jp-playlist-box").animate({height:"80px"},100);
			$("#btnfold").css({top:"52px"});
			$("#listRemove").css({display:"block"});
			$(".scrollBar").css({display:"block"});
			$(".jp-video").animate({height:"175px",bottom:"20px"},100);
			iOpen=true;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
