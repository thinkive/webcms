/* 

 hello demo 

*/


;!function(){

var conf = {
    ie6: !-[1,] && !window.XMLHttpRequest,
    win: $(window),
    anode: $('.layer_first>a'),
    
    //获取host
    hosts: 'http://' + location.host + '/'
};

//触发例子
conf.anode.each(function(index){
    var othis = $(this);
    othis.on('click', function(e){
        switch(index){
            case 0:
                layer.alert('白菜级别前端攻城师贤心', 8, '点确定继续演示', function(){
                    layer.msg('前端攻城师贤心', 1, -1, function(){
                        layer.msg('Hi，I am here!',3 , {
                            type:9, 
                            rate: 'bottom', 
                            shade: [0]
                        });
                    });
                });
            break;
            case 1:
                $.layer({
                    shade: [0],
                    area: ['auto','auto'],
                    dialog: {
                        msg: '您是如何看待前端开发？',
                        btns: 2,                    
                        type: 4,
                        btn: ['重要','奇葩'],
                        yes: function(){
                            layer.msg('重要', 1, 1);
                        }, no: function(){
                            layer.msg('奇葩', 1, 13);
                        }
                    }
                });
            break;
            case 2:
                $.layer({
                    type: 1,
                    shade: [0],
                    area: ['auto', 'auto'],
                    title: false,
                    border: [0],
                    page: {dom : '.layer_notice'},
                    close: function(index){
                        layer.close(index);
                        $('.layer_notice').hide();
                    }
                });
            break;
            case 3:
                var iss, fnpop = function(obj, call){
                    obj = obj || {};
                    var pageii = $.layer({
                        type: 1,
                        title: false,
                        area: obj.area ? [obj.area[0]+'px', obj.area[1]+'px'] : ['200px', '200px'],
                        offset: ['40px', ''],
                        border: [0], //去掉默认边框
                        shade: [0], //去掉遮罩
                        fix: obj.fix,
                        closeBtn: [0, false], //去掉默认关闭按钮
                        shift: obj.shift || ['bottom', 300, 1],
                        page: {
                            html: '<div style="width:600px; height:300px; padding:20px; background-color:#eee;"><p>我从'+ (obj.where || '下') +'边来，我自定了风格。</p><button class="pagebtn btn btn-w-m btn-warning btn-sm" >关闭</button></div>'
                        }, success: function(elem){
                            elem.find('.pagebtn').on('click', function(){
                                layer.close(pageii);
                                call && call();
                            });
                        }
                    });
                    return pageii;
                };
                fnpop({
                    shift: 'left',
                    area: [600, 300],
                    fix: true,
                    where: '左'
                }, function(){
                    return
                    $('html, body').stop().animate({scrollTop: $('#ad336').offset().top}, 500, function(){
                        setTimeout(function(){
                            iss || fnpop({fix: false});
                            iss = true;
                        }, 100);
                        
                    });
                });
                
            break;
            case 4:
                $.layer({
                    type: 2,
                    title: [
                        '子涵的博客移动版',
                        'border:none; background:#0099CC; color:#fff;'
                    ],
                    shadeClose: true,
                    shade: [0.8, '#000'],
                    border: [0],
                    area: ['380px', '500px'],
                    iframe: {src: 'http://www.zi-han.net/?wap'}
                }); 
            break;
            case 5:
                layer.tips('5秒后右下角窗口自动关闭，并生成一个新的iframe', this, {
                    time: 5,
                    maxWidth: 260
                });
                $.layer({
                    type: 2,
                    closeBtn: false,
                    shadeClose: true,
                    shade: [0.1, '#fff'],
                    border: [0],
                    time: 5,
                    iframe: {
                        src: 'http://www.zi-han.net/?wap'
                    },
                    title: false,
                    area: ['300px','250px'],
                    shift: 'right-bottom',
                    end: function(){
                        $.layer({
                            type : 2,
                            title: '子涵的博客',
                            shadeClose: true,
                            maxmin: true,
                            fix : false,  
                            area: ['1000px', ($(window).height() - 50) +'px'],                     
                            iframe: {
                                src: 'http://www.zi-han.net/?nowap'
                            } 
                        });
                    }
                });
                
            break;
            case 6:
                layer.load(3);
            break;
            case 7:
                layer.load('加载带文字', 3);
            break;
            case 8:
                layer.tips('tips的样式并非是固定的，您可自定义外观。', this, {
                    style: ['background-color:#78BA32; color:#fff', '#78BA32'],
                    maxWidth:185,
                    time: 3,
                    closeBtn:[0, true]
                });
            break;
            case 9:
                layer.tips('默认没有关闭按钮', this , {guide: 1, time: 2});
            break;
            
            
            //实例演示片段（信息框）
            case 10:
                layer.alert('一个很普通的信息框');
            break;
            case 11:
                layer.alert('信息框演示二', 11, !1);
                
            break;
            case 12:
                layer.confirm('信息框演示三',function(index){
                    layer.msg('信息框演示三');
                });
                
            break;
            case 13:
                layer.msg('也可以不用显示图标哦', 2, -1);
                
            break;
            case 14:
                var i = 0;
                $.layer({
                    dialog:{type:0,msg:'<a href="javascript:;" id="setface">点击我，换图标</a>'},
                    success: function(layerE){
                        $('body').off('click','#setface').on('click','#setface', function(){
                            var index = layer.getIndex(this);
                            i++;
                            layerE.find('.xubox_msgico').removeClass('xubox_msgtype'+(i-1)).addClass('xubox_msgtype'+i);
                            i > 15 && layer.close(index);
                        });
                    }, end: function(){
                        i = 0;
                    }
                });
                
            break;
            case 15:
                layer.msg('踩到屎啦', 2, 13);
                
            break;
            
            //实例演示片段（页面层）
            case 16:
                var pagei = $.layer({
                    type: 1,   //0-4的选择,
                    title: false,
                    border: [0],
                    closeBtn: [0],
                    shadeClose: true,
                    area: ['460px', '280px'],
                    page: {
                        html: '<div style="width:460px; height:280px; background-color:#81BA25; color:#fff;"><div style="padding:20px;">里面传入任何html元素</div></div>'
                    }
                });
            break;
            case 17:
                var i = $.layer({
                    type : 1,
                    title : false,
                    fix : false,
                    offset:['50px' , ''],
                    area : ['515px','615px'],
                    page : {dom : '#tong'}
                });
                
            break;
            case 18:
                $.layer({
                    type : 1,
                    title : false,
                    border: [0],
                    area : ['503px','395px'],
                    page : {dom : '#taobao'}
                });
                
            break;
            
            //实例演示片段（iframe层）
            case 19:
                $.layer({
                    type: 2,
                    title: false,
                    fix: false,
                    area: ['910px' , '700px'],
                    shadeClose: true,
                    closeBtn: false,
                    offset: [($(window).height() - 700)/2+'px', ''],
                    border: [0],
                    shade : [0.9, '#000'],
                    iframe: {src: 'http://im.qq.com/online/flash/flash20140304.swf'}
                });
            break;
            case 20:
                $.layer({
                    type: 2,
                    border: [0],
                    title: false,
                    shadeClose: true,
                    closeBtn: false,
                    iframe: {src : 'test/center.html'},
                    area: ['860px', '400px']
                });
            break;
            
            case 21:
                $.layer({
                    type: 2,
                    shade: [0],
                    fix: false,
                    title: 'iframe子父操作',
                    maxmin: true,
                    iframe: {src : 'iframe.html'},
                    area: ['800px' , '440px'],
                    close: function(index){
                        layer.msg('您获得了子窗口标记：' + layer.getChildFrame('#name', index).val(),3,1);
                    }
                });
                
            break;
            case 22:
                layer.load(5, 0);
            break;
            case 23:
                layer.load('加载中…', 2)
                
            break;
            case 24:
                layer.tips('比如实现用户小名片什么的呀', this, {
                    style: ['background-color:#0FA6D8; color:#fff', '#0FA6D8'],
                    maxWidth: 150,
                    time:1
                });
                
            break;
            case 25:
                layer.tips('你瞧那远古的光/裸露空荡/无穷无尽是你深邃的眼/传递遐想 ——《远与暗》 写于2012·春·杭州', this, {
                    guide: 1,
                    time: 1,
                    style: ['background-color:#F26C4F; color:#fff', '#F26C4F'],
                    maxWidth:240
                });
                
            break;
            case 26:
                layer.tips('guide:2将指定下', this, {
                    guide: 2,
                    time:1
                });
                
            break;
            case 27:
                layer.tips('更多效果你自己慢慢发现吧。', this, {
                    guide: 3,
                    style: ['background-color:#c00; color:#fff', '#c00'],
                    time: 1
                });
            break;
        }
    });
});

//触发例子
$('.open').on('click', function(){
    var othis = $(this), type = othis.attr('type');
    switch(type){
        case 'zdlist':
            juan.zdlist();
        break;
        case 'prompt':
            layer.prompt({title: '输入任何口令，并确认',type: 1}, function(pass){
                layer.prompt({title: '随便上传个东东，并确认',type: 2}, function(file){
                    layer.prompt({title: '随便写点啥，并确认',type: 3}, function(val){
                        layer.msg('演示完毕<br>您的口令：'+ pass +'<br>您的文件：'+ file +'<br>您最后写下了：'+val, 3, -1);
                    });
                });
            });
        break;
        case 'tab':
            var tabIframe = function(src){
                return '<iframe frameborder="0" src="'+ src +'" style="width:1000px; height:465px;"></iframe>';
            };
            layer.tab({
                area: ['1000px', '500px'],
                data: [{
                    title: '博客', 
                    content: tabIframe('http://www.zi-han.net/?nowap')
                }, {
                    title: 'Belite主题', 
                    content: tabIframe('http://www.belite.mobi')
                }, {
                    title: 'H+后台主题', 
                    content: '<div class="col-sm-12 m-t"><blockquote class="text-warning" style="font-size:14px">您是否需要自己做一款后台、会员中心等等的，但是又缺乏html等前端知识…<br>您是否一直在苦苦寻找一款适合自己的后台主题…<br>您是否想做一款自己的web应用程序…<br>…………<h4 class="text-danger">那么，现在H+来了</h4></blockquote></div>'
                }]
            });
        break;
        case 'photos':
            var imghtml = '<div style="padding:20px;">这里传入自定义的html，也可以不用传入（这意味着不会输出此区域）。<p>相册支持左右方向键，支持Esc关闭</p></div>'
                        +'<div style="margin:10px;"><div id="SOHUCS"></div></div>';
            if(conf.photoJSON){
                layer.photos({
                    html: imghtml,
                    json: conf.photoJSON
                });
            } else {
                layer.load();
                $.getJSON('js/demo/photos.json', {}, function(json){
                    conf.photoJSON = json;
                    layer.photos({
                        html: imghtml,
                        json: json
                    });
                    layer.closeLoad();
                });
            }
            (function(){
                var appid = 'cyrfTj9BQ',
                conf = 'prod_aaf8e91fc518ca4809456d0e7c9f0457';
                var doc = document,
                s = doc.createElement('script'),
                h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
                s.type = 'text/javascript';
                s.charset = 'utf-8';
                s.src =  'http://assets.changyan.sohu.com/upload/changyan.js?conf='+ conf +'&appid=' + appid;
                h.insertBefore(s,h.firstChild);
            })();
        break;
        case '':
            
        break;
        case '':
            
        break;
        case '':
            
        break;
    };
});

//导航滚动
$('.layer_nav a').on('click',function(){
    var scroll = $(this).attr('scroll');
    switch(scroll){
        case 'about':
            $('html, body').animate({scrollTop : $('.layer_about').offset().top},200);
        break;
        case 'api':
            $('html, body').animate({scrollTop : $('.layer_api').offset().top},300);
        break;
        case 'demo':
            $('html, body').animate({scrollTop : $('.layer_demo').offset().top},500);
        break;
    };
});

//授权
conf.getShouQuan = function(html){
    $.layer({
        type: 1,
        title: false,
        closeBtn: false,
        area: ['1000px', '500px'],
        border : [5, 0.5, '#666'],
        shade: [0.8, '#000'],
        shadeClose: true,
        offset: ['0px', ''],
        shift: 'top',
        page: {
            html: html
        }
    });
};
$('#seebanquan').on('click',function(){
    if(!conf.shouquanDate){
        $.get('test/shouquan.html', function(datas){
            conf.shouquanDate = datas;
            conf.getShouQuan(datas);
        });
    } else {
        conf.getShouQuan(conf.shouquanDate);
    }
});

window.paysentsin = function(){
    return $.layer({
        type:1,
        area: ['512px', '512px'],
        title: false,
        offset: [(($(window).height() - 512)/2)+'px',''],
        page: {html: '<img src="http://res.sentsin.com/images/pay.png">'},
        shadeClose: true
    });
};

//友情赞助
var juan = function(){
    var i = $.layer({
        type: 1,
        title: false,
        closeBtn: false,
        border : [5, 0.5, '#666'],
        offset: ['0px','50%'],
        shadeClose: true,
        area: ['620px','auto'],
        page: {
            html: '<div class="juan"><p>从2012年6月6号发布</p><p>至今</p><p>layer已经服务于十余万家web平台</p><p>并还在迅速增长</p><p>她已然成为众多开发人员的非常常用的前端组件。</p><p>必须感谢这些年来那些关注和使用layer的数以万计的人们</p><p>感谢所有群友的支持与陪伴</p><p class="juanmove">正是善良的你们</p><p>让原本早就想放弃的layer变得超乎寻常的生命力</p><p>也催发了我开发layui的决定</p><p>如果你喜欢layer，可以用实际行动来支持她。</p><p>您可购买layer的版权（可用于一切商业用途）或者赞助，layer感恩无限。</p><p>layer仍在继续, 使命仍然在继续,我们仍在继续…</p><p style="text-align:right;">——贤心</p><p style="padding-top:10px;font-size:0; text-align:center;"><a href="http://item.taobao.com/item.htm?id=37295654589" target="_blank" class="juanGo">去授权</a><a href="javascript:;" class="juanGo" id="paysentsin">赞助</a><a href="javascript:;" class="juanLu">路过</a></p></div>'
        }, success: function(){
            layer.shift('top', 500);
            $('#paysentsin').on('click', function(){
                layer.close(i);
                paysentsin();
            });
        }
    });
    $('.juanLu').on('click', function(){
        layer.close(i);
    });
};
$('#juan').on('click', function(){
    if(!$('.juan')[0]){
        juan();
    }
});

juan.zdlist = function(times){
    var ii = $.layer({
        type:1,
        title: false,
        closeBtn: false,
        fix: false,
        shadeClose: true,
        bgcolor: '',
        offset: ['300px', ''],
        shade: [0.9, '#000'],
        border: [0],
        area: ['800px', '600px'],
        time: times,
        page: {html: juan.lister},
        success: function(layerE){
            var closeZD = layerE.find('.closeZD'), zzmain = layerE.find('#zzmain'), zdcout = layerE.find('#zdcout'), couts = 0;
            setTimeout(function(){
                layerE.animate({top:100},100, function(){
                    zzmain.fadeIn(1000);
                });
            },1000);        
            closeZD.on('click', function(){
                layer.close(ii);
            });
            
            $.each($('#zzmain>ul>li'), function(){
                var othis = $(this), n = Math.round(othis.attr('n'));
                couts += n;
            });
            zdcout.html(couts+'元');
        }
    });
    return ii;
};

//许愿
$('#xinyuan').on('click', function(){
    if(!layer.xinyuanIframe){
        var i = $.layer({
            type: 2,
            shade: [0],
            title: false,
            offset: ['100px',''],
            closeBtn: [0, false],
            bgcolor: '',
            area: ['590px', '380px'],
            border: [0],
            iframe: {src : '../../hello/year2013.html'},
            success:function(layerDom){
                layerDom.append('<div id="y2013_move" style="height:110px; width:590px; cursor:move; position:absolute; top:0; left:0; z-index:20000000;"></div><div id="y2013_close" style="position:absolute;right:0; top:0; width:40px; height:40px; cursor:pointer; z-index:20000001;"><div>');
                this.move = '#y2013_move';
                layer.setMove();
                $('#y2013_close').on('click', function(){
                    var index = layer.getIndex(this);
                    layer.close(index);
                });
                layer.tips('该许愿墙亦由layer实现，传送的愿望将会在<a href="/" style="color:#c00" target="_blank">博客首页</a>展现', '#xinyuan',5);
            }, end: function(){
                layer.xinyuanIframe = false;
            }
        });
    }
    layer.xinyuanIframe = true;
});

/*
layer.use('extend/layer.ext.js', function(){
    layer.ext = function(){
        setTimeout(function(){
        layer.prompt()
        }, 2000);
    }
});
*/


//加载即异步
conf.postmsg = function(){
    //获取下载数
    if($('#downs')[0]){
        $.post('http://sentsin.com/item/filedown.asp?action=hits&id=3957', function(datas){
            var downloads = datas.match(/\d+/)[0];
            $('#downs').html(downloads);
        });
    }
    
    //获取关注次数
    $.post('http://sentsin.com/item/GetHits.asp?Action=Count&GetFlag=0&m=113&ID=41', function(datas){
        var downloads = datas.match(/\d+/)[0];
        $('#sees').html(downloads);
    });
    
    //获取赞助名单
    if($('#seepay')[0]){
        $.get('doc/zdlist.txt', function(data){
            juan.lister = data;
            $('#seepay').on('click', function(){
                juan.zdlist(0);
            });
        });
    }
};

//tab
conf.tabs = function(nodes, now, main, event){
    var set, hashs = {
        api: {
            '#base': 0,
            '#method': 1,
            '#ext': 2
        }
    };
    
    //通过hash定位api
    if(location.hash){
        var index = hashs.api[location.hash];
        nodes.eq(index).addClass(now).siblings().removeClass(now);
        $(main).eq(index).show().siblings(main).hide();
    }
    
    nodes[event || 'hover'](function(){
        var othis = $(this), hash = othis.attr('hash');
        clearTimeout(set);
        set = setTimeout(function(){
            var index = othis.index();
            othis.addClass(now).siblings().removeClass(now);
            $(main).eq(index).show().siblings(main).hide();
            if(hash){
                location.hash = hash;
            }
        }, event ? 0 : 300);
    });
    
    event || nodes.mouseleave(function(){
        clearTimeout(set);
    });
};

//窗口scroll
conf.scroll = function(){
    conf.log = [0, $('.layer_nav')];
    conf.win.on('scroll', function(){
        var stop = conf.win.scrollTop();
        if(stop >= 260){
            if(!conf.log[0]){
                conf.log[0] = 1;
                $('.layer_html')[0] || conf.log[1].addClass('fixnav');
                conf.gotop.show();
            }
        } else {
            if(conf.log[0]){
                conf.log[0] = 0;
                $('.layer_html')[0] || conf.log[1].removeClass('fixnav');
                conf.gotop.hide();
            }
        }
        stop = null;
    });
};

//事件
conf.event = function(){
    //下载计数
    $('.layer_down').on('click',function(){
        $.ajax({
            url: conf.hosts + '/item/filedown.asp?id=3957',
            method : 'GET'
        });
    });
    
    conf.gotop = $('.layer_gotop');
    conf.scroll();
    
    //返回顶部
    conf.gotop.on('click',function(){
        $('html, body').animate({scrollTop : 0},$(this).offset().top/7);
    });

    conf.tabs($('.demotab>li'),'demonow','.democoder');
    $('.democoder').hide().eq(2).show();
    
    conf.tabs($('.layer_apiTitle>li'),'apinow','.layer_apiBox', 'click');
    
    $('.navlist>li').on('click', function(){
        var othis = $(this);
        othis.addClass('thisnavlist').siblings().removeClass('thisnavlist');
    });
    
    
};

$('#maixie').on('click', function(e){
    var othis = $(this), href = othis[0].href;
    e.preventDefault();
    $.layer({
        type: 1,
        border: [0],
        bgcolor: '',
        shade: [0.9, '#000'],
        shadeClose: true,
        area: ['auto', 'auto'],
        title: [
            '仗义券说明',
            'border:none; background:#FF4400; color:#fff;'
        ],
        page: {
            html: '<div style="width:410px; padding:10px 20px; line-height:24px; background: #fff;"><p>由于本人试图找回五年前的小理想，也就是：开个淘宝店。现店铺急需信誉，而这非一朝一夕就能上去的。因此，需要借助各位小伙伴的力量，帮我提升下信誉。参与方式为：</p><p>1、拍1-3个购买（0.1元）</p><p>2、我这边发货后，不要急着确认收货，2天后再确认。</p><p>3、确认收货后给该宝贝（仗义券）好评（最终目的）</p><p>先谢谢大家啦！</p><div style="margin-top:10px; text-align:center;"><button onclick="location.href=\''+ href +'\'" class="btns" style="height:36px; line-height:36px; padding:0 35px; border-radius: 0;">去看看</button></div></div>'
        }
    });
});

//初始即执行
conf.start = (function(){
    
    if($().laycode){
        //高亮代码
        $('.codetop').laycode({
            title: '上述演示对应的说明',
            height: '240px'
        });
        $('.codes').laycode({
            title: '演示说明',
            height: '300px'
        });
    }
    
    if($('#downs')[0]){
        conf.postmsg();
    }
    
    if(conf.ie6){
        setTimeout(function(){
            layer.msg('如果您是用ietest的ie6模式，发现弹出背景一片黑色时，请不用惊慌，这并非layer未作兼容，而是你当前版本的ietest所模拟的ie6环境未对滤镜做支持，标准ie6将不会有此问题，所以请您不要担心。', 15, {shade: false, type: 9});
        }, 1000);
    }
    
    conf.event();
    
}());

}();