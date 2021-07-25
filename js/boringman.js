//返回顶部
function gotoTop(minHeight) {

    // 定义点击返回顶部图标后向上滚动的动画
    $("#gotoTop").click(
        function () {
            $('html,body').animate({ scrollTop: '0px' }, 'slow');
        })

    // 获取页面的最小高度，无传入值则默认为600像素
    minHeight ? minHeight = minHeight : minHeight = 300;

    // 为窗口的scroll事件绑定处理函数
    $(window).scroll(function () {

        // 获取窗口的滚动条的垂直滚动距离
        var s = $(window).scrollTop();

        // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
        if (s > minHeight) {
            $("#gotoTop").fadeIn(500);
        } else {
            $("#gotoTop").fadeOut(500);
        };
    });
};
gotoTop();



//vue实例
var app=new Vue({
    el:"#app",
    data:{
        webcard:[
            //网站合集
            {
                webtitle:'网站合集',
                webid:"web_heji",
                webs: [
                    {
                        name: '谢应鹏',
                        description: '收集常见问题答案，便利学习',
                        icon: 'https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/logo.png',
                        url: 'https://www.cnblogs.com/Xieyingpeng/'
                    },
                    {
                        name: '小呆导航',
                        description: '收集教程资源，包括前端资源，UI设计，影视资源等',
                        icon: 'https://webjike.com/favicon.png',
                        url: 'https://webjike.com/'
                    },
                    {
                        name: '爱达杂货铺',
                        description: '收集各种网站资源，实用工具,软件，素材，网盘搜索等',
                        icon: 'https://cdn.adzhp.cn/wp-content/uploads/2020/02/A-win.ico',
                        url: 'https://adzhp.cn/'
                    },
                    {
                        name: '自媒体人',
                        description: '收集各种视频资源素材，学习教程',
                        icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1987666090,3399870662&fm=26&gp=0.jpg',
                        url: ' http://www.zimeiti135.com/'
                    },
                    {
                        name: '播种者',
                        description: '收集各种设计，图标，图片素材',
                        icon:null,
                        url: 'https://www.seeseed.com/'
                    },
                    {
                        name: '大前端',
                        description: '前端导航，收录对开发有用的网站',
                        icon:null,
                        url: 'http://www.daqianduan.com/nav'
                    },
                 

                ]
            },
            //学习教育
            {
                webtitle: '学习教育',
                webid:"web_study",
                webs: [
                    {
                        name: 'bilibili',
                        description: '超强的二次元学习网站',
                        icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1535572249,3122154764&fm=26&gp=0.jpg',
                        url: 'https://www.bilibili.com/'
                    },
                    {
                        name: '鱼C官网',
                        description: 'b站知名up主小甲鱼，致力于编程教育',
                        icon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=650098504,373954302&fm=15&gp=0.jpg',
                        url: 'https://ilovefishc.com/'
                    },
                    {
                        name: '后盾人',
                        description: 'b站知名up主后盾人教程，很适合编程学习',
                        icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1987666090,3399870662&fm=26&gp=0.jpg',
                        url: '  https://www.houdunren.com/Edu/system'
                    },
                  
                    {
                        name: '慕课网',
                        description: '互联网IT技能免费学习网站',
                        icon: 'http://img.mukewang.com/user/5dafce1a00013fd501400140-100-100.jpg',
                        url: 'https://www.imooc.com/'
                    },
                    {
                        name: '腾讯课堂',
                        description: '多元课程可供学习',
                        icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2658404623,1234771877&fm=26&gp=0.jpg',
                        url: 'https://ke.qq.com/'
                    },
                    {
                        name: '我要自学网',
                        description: '自学网站，囊括电脑办公，平面设计各种学习资源',
                        icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3729812934,2668668898&fm=26&gp=0.jpg',
                        url: 'https://www.51zxw.net/'
                    },
                    {
                        name: '开课吧',
                        description: '程序员培训机构',
                        icon: 'https://img.kaikeba.com/kkb_portal_icon.ico',
                        url: 'https://www.kaikeba.com/'
                    },
                    {
                        name: '网易云课堂',
                        description: '职业学习课堂',
                        icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596543680621&di=5e73805714507b67dbcc8cb08e7c276c&imgtype=0&src=http%3A%2F%2Fa1647.phobos.apple.com%2Fus%2Fr30%2FPurple5%2Fv4%2F03%2F5a%2F4e%2F035a4e58-3e22-c1aa-d989-a24d204d6245%2Fpr_source.jpg%3FdownloadKey%3D1429108873_79f96ca362e7661b434c40e62338035e',
                        url: 'https://study.163.com/'
                    },

                    
                ]
            },
            //学习文档
            {
                webtitle: '学习文档',
                webid: "web_document",
                webs: [
                    {
                        name: 'HTML5速查宝典',
                        description: 'HTML5速查宝典',
                        icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596544155816&di=337b5368eca999fc4d7efbccad6b1f70&imgtype=0&src=http%3A%2F%2Fstatic.36kr.com%2Fwp-content%2Fuploads%2F2011%2F01%2F20110119125247.png',
                        url: 'https://man.ilovefishc.com/html5/'
                    },
                    {
                        name: 'CSS3速查宝典',
                        description: 'CSS3速查宝典',
                        icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596544215793&di=3ff82651302ee944e62566efa7514245&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D2340366615%2C2853341379%26fm%3D214%26gp%3D0.jpg',
                        url: 'https://man.ilovefishc.com/css3/'
                    },
                    {
                        name: '后盾人在线文档',
                        description: 'HTML，CSS，JS等在线文档',
                        icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596544426083&di=607af0d538ff6fa417992f99006964f0&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F00%2F91%2F28%2F5856f163f64e2f6.jpg',
                        url: 'https://houdunren.gitee.io/note/'
                    },
                    {
                        name: '菜鸟教程',
                        description: '免费教程，包含许多编程教程文档',
                        icon: 'https://static.runoob.com/images/icon/mobile-icon.png',
                        url: 'https://www.runoob.com/'
                    },
                    {
                        name: '网道',
                        description: '网道是一个文档网站，提供互联网开发文档，正在建设中',
                        icon: 'https://wangdoc.com/assets/icons/favicon-32x32.png',
                        url: 'https://wangdoc.com/'
                    },
                    {
                        name: '微信官方文档',
                        description: '提供小程序，公众号等文档教程',
                        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
                        url: 'https://developers.weixin.qq.com/doc/'
                    },
                    {
                        name: 'MDN',
                        description: 'MDN Web开发文档',
                        icon: 'https://developer.mozilla.org/static/img/favicon144.e7e21ca263ca.png',
                        url: 'https://developer.mozilla.org/zh-CN/'
                    },
                   
                    {
                        name: '力扣',
                        description: '程序员刷题网站',
                        icon: 'https://static.leetcode-cn.com/cn-assets/icons/apple-touch-icon-60x60.png',
                        url: 'https://leetcode-cn.com/'
                    },
                    {
                        name: '牛客网',
                        description: '互联网求职，刷题，经验分享网站',
                        icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596624988693&di=c892f60c1f06cea852c654d1595b9a33&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D425864070%2C2196727591%26fm%3D214%26gp%3D0.jpg',
                        url: 'https://www.nowcoder.com/'
                    },
                   
                ]
            },
            //开源社区
            {
                webtitle: '开源社区',
                webid: "web_community",
                webs: [
                    {
                        name: 'GitHub',
                        description: '全球最大同好交友开源网站',
                        icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1996801061,833160828&fm=26&gp=0.jpg',
                        url: 'https://github.com/'
                    },
                    {
                        name: '码云',
                        description: '中国程序员开源社区',
                        icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1272163934,1051423405&fm=26&gp=0.jpg',
                        url: 'https://gitee.com/'
                    },
                    {
                        name: 'CSDN',
                        description: 'BUG爱好者的聚集地',
                        icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=462692592,1575419717&fm=26&gp=0.jpg',
                        url: 'https://www.csdn.net/'
                    },
                    {
                        name: '掘金',
                        description: '帮助开发者成长的社区',
                        icon: 'https://b-gold-cdn.xitu.io/favicons/v2/apple-touch-icon.png',
                        url: 'https://juejin.im/'
                    },

                ]
            },
            //实用软件
            {
                webtitle: '实用软件',
                webid: "web_software",
                webs: [
                    {
                        name: 'VSCODE',
                        description: '非常便利的IDE编辑器',
                        icon: 'https://code.visualstudio.com/favicon.ico',
                        url: 'https://code.visualstudio.com/'
                    },
                    {
                        name: 'Typora',
                        description: '一款简洁的MarkDown编辑器',
                        icon: 'https://www.typora.io/img/favicon-16.png',
                        url: 'https://www.typora.io/'
                    },
                    {
                        name: '印象笔记',
                        description: '十分方便的记录、整理笔记的软件',
                        icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2317082857,3979404321&fm=26&gp=0.jpg',
                        url: 'https://www.yinxiang.com/'
                    },
                    {
                        name: 'XMind',
                        description: '一款简洁的思维导图软件',
                        icon: 'https://www.xmind.cn/apple-touch-icon-57x57.png',
                        url: 'https://www.xmind.cn/'
                    },

                ]
            },
            //辅助工具
            {
                webtitle: '辅助工具',
                webid: "web_tool",
                webs: [
                    {
                        name: 'CodePen',
                        description: '一款在线前端编辑器,还有许多特效分享',
                        icon: 'https://static.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png',
                        url: 'https://codepen.io/'
                    },
                    {
                        name: 'flatuicolors',
                        description: '十分好用的配色网站',
                        icon: 'https://flatuicolors.com/static/favicon.ico',
                        url: 'https://flatuicolors.com/'
                    },
                    {
                        name: 'webgradients',
                        description: '渐变色配色网站，点击即可获取css代码',
                        icon: 'https://webgradients.com/favicons/apple-touch-icon-57x57.png',
                        url: 'https://webgradients.com/'
                    },
                    {
                        name: 'ProcessOn',
                        description: '在线制作流程图',
                        icon: 'https://www.processon.com/favicon.ico',
                        url: 'https://www.processon.com/'
                    },
                    {
                        name: 'iconfont',
                        description: '阿里巴巴图标库',
                        icon: 'https://img.alicdn.com/tps/i4/TB1_oz6GVXXXXaFXpXXJDFnIXXX-64-64.ico',
                        url: 'https://www.iconfont.cn/'
                    },
                    {
                        name: 'FontAwesome',
                        description: 'Font Awesome图标库',
                        icon: 'https://fontawesome.com/images/favicons/apple-icon-57x57.png',
                        url: 'https://fontawesome.com/icons?d=gallery'
                    },
                    {
                        name: 'Rap2',
                        description: '接口管理，前端好帮手',
                        icon: 'http://rap2.taobao.org/favicon.png',
                        url: 'http://rap2.taobao.org/'
                    },
                    {
                        name: 'Ngrok',
                        description: '免费内网穿透，帮助你外网访问本地项目',
                        icon: null,
                        url: 'http://www.ngrok.cc/'
                    },

                   
                    
                   

                ]
            },
            //域名|服务器
            {
                webtitle: '域名|服务器',
                webid: "web_server",
                webs: [
                    {
                        name: '阿里云',
                        description: '服务器等购买，全球领先的云计算及人工智能科技公司',
                        icon: 'https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico',
                        url: 'https://www.aliyun.com/'
                    },
                    {
                        name: '腾讯云',
                        description: '助你快速入门云计算，畅游云端，成就高校创业家梦想',
                        icon: 'https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_18590519_1568185109318.jpg?x=0&y=0&h=150&w=242&vh=150.00&vw=242.00&oh=150.00&ow=242.00',
                        url: 'https://cloud.tencent.com/'
                    },
                    {
                        name: '百度云',
                        description: '百度智能云',
                        icon: 'https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/a919cd5bc7ebdc30d5ea1d7e632323dc_121_121.png',
                        url: 'https://cloud.baidu.com/'
                    },
                    {
                        name: '华为云',
                        description: '提供云计算服务+智能',
                        icon: 'https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/68a3ac9e2bcff5835267ecf4af49d9d0_121_121.jpg',
                        url: 'https://www.huaweicloud.com/'
                    },
                   


                ]
            },
            //求职网站
            {
                webtitle: '求职网站',
                webid: "web_employee",
                webs: [
                    {
                        name: '职友集',
                        description: '发现和了解你未来的雇主',
                        icon: null,
                        url: 'https://www.jobui.com/'
                    },
                    {
                        name: 'BOSS直聘',
                        description: 'BOSS直聘求职网',
                        icon: 'https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=3715131461,4291348725&fm=202&mola=new&crop=v1',
                        url: 'https://www.zhipin.com/'
                    },
                    {
                        name: '拉勾网',
                        description: '互联网求职',
                        icon: 'https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/975c5ccf981c8e353b3d7fa1d1966069_121_121.png',
                        url: 'https://www.lagou.com/'
                    },
                    {
                        name: '前程无忧',
                        description: '招聘网，人才网，找工作',
                        icon: 'https://mkt.51job.com/favicon.ico',
                        url: ' https://mkt.51job.com/'
                    },

                   


                ]
            },

            //前端框架
            {
                webtitle: '前端框架',
                webid: "web_ui",
                webs: [
                    {
                        name: 'Bootstrap',
                        description: '一款响应式UI框架',
                        icon: 'https://v3.bootcss.com/apple-touch-icon.png',
                        url: 'https://v3.bootcss.com/'
                    },
                    {
                        name: 'Element',
                        description: '基于Vue2.0的前端组件库',
                        icon: 'https://element.eleme.cn/favicon.ico',
                        url: 'https://element.eleme.cn/#/zh-CN'
                    },
                    {
                        name: 'AdminLTE',
                        description: '一款国外开源的响应式后台框架',
                        icon: 'https://adminlte.io/img/favicon.png?v=1.2',
                        url: 'https://adminlte.io/'
                    },
                    {
                        name: 'LayUi',
                        description: '经典模块化前端框架',
                        icon: null,
                        url: 'https://www.layui.com/'
                    },

                    {
                        name: 'EasyUi',
                        description: '简单前端框架',
                        icon: null,
                        url: 'http://www.jeasyui.com/index.php'
                    },

                    {
                        name: 'vue-element-admin',
                        description: '一个后台前端解决方案，它基于 vue 和 element-ui实现',
                        icon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925088662,1336364220&fm=26&gp=0.jpg',
                        url: ' https://panjiachen.github.io/vue-element-admin-site/zh/'
                    },
                   

                ]
            },
            //影视资源
            {
                webtitle: '影视资源',
                webid: "web_video",
                webs: [
                    {
                        name: '南柯电影网',
                        description: '在线视频网站',
                        icon: 'http://www.nkdyw.com/template/mytheme/statics/image/20200517/5bf46330d.ico',
                        url: 'http://www.nkdyw.com/'
                    },
                    {
                        name: '在线之家',
                        description: '美剧在线视频网站',
                        icon: 'https://www.zxzj.me/statics/img/favicon.ico',
                        url: 'https://www.zxzj.me/'
                    },
                    {
                        name: '真不卡影院',
                        description: '免费在线视频网站',
                        icon: 'https://www.zhenbuka.com/favicon.ico',
                        url: 'https://www.zhenbuka.com/'
                    },
                    {
                        name: '80s手机电影',
                        description: '手机电影，电视剧下载',
                        icon: 'http://www.y80s.com/favicon.ico',
                        url: 'http://y80s.com/'
                    },

                ]
            },
            //图片素材
            {
                webtitle: '图片素材',
                webid: "web_image",
                webs: [
                    {
                        name: '觅元素',
                        description: '图片素材，免扣元素网站',
                        icon: null,
                        url: 'http://www.51yuansu.com/'
                    },
                    {
                        name: 'pixabay',
                        description: '免费正版高清素材图库',
                        icon: 'https://pixabay.com/favicon-32x32.png',
                        url: 'https://pixabay.com/zh/'
                    },
                    {
                        name: '千库网',
                        description: '图片网站',
                        icon: 'https://588ku.com/favicon.ico',
                        url: 'https://588ku.com/'
                    },
                    {
                        name: '千图网',
                        description: '图片网站',
                        icon: 'http://icon.qiantucdn.com/static/images//public/logo-j.svg',
                        url: 'https://www.58pic.com/'
                    },
                   

                ]
            },
            //其他网站
            {
                webtitle: '其他网站',
                webid: "web_other",
                webs: [
                    {
                        name: 'coolbackgrounds',
                        description: '炫酷背景生成器，免费下载',
                        icon: 'https://coolbackgrounds.io/images/favicon-fe5a0ff5.png',
                        url: 'https://coolbackgrounds.io/'
                    },
                    {
                        name: 'codelf',
                        description: '程序员变量命名',
                        icon: null,
                        url: 'https://unbug.github.io/codelf/'
                    },
                    {
                        name: 'Animate.css',
                        description: '动态效果css库',
                        icon: null,
                        url: 'https://animate.style/'
                    },
                    {
                        name: '爱给',
                        description: '音效网站',
                        icon: 'http://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico',
                        url: 'http://www.aigei.com/sound'
                    },

                ]
            },
        ],
      
    }
})