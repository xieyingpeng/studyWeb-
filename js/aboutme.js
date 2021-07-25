//vue实例
var app = new Vue({
    el: "#app",
    data: {
        workcard: [
            //存时宝项目
            {
                projectname: "存时宝",
                projectdesc: "一款公益微信小程序，基于微信小程序云开发。包含志愿领取，公益，计时，时间银行，爱心长廊，兑换，社区，后台管理等功能模块。",
                projectremark: "荣获计算机设计大赛省赛二等奖、高校微信小程序开发大赛华南区二等奖",
                imgs: [
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/csb01.jpg"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/csb02.jpg"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/csb03.jpg"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/csb04.jpg"
                    }
                ]
            },
            //云摆摊项目
            {
                projectname: "云摆摊",
                projectdesc: "致力于解决摆摊管理难的问题，项目共分为用户小程序端，商家小程序端，web后台管理端。",
                projectremark: "该项目是2020大创项目校级立项",
                imgs: [
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/cloudstall/banner01.jpg"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/cloudstall/banner02.jpg"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/cloudstall/banner03.jpg"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/cloudstall/banner04.jpg"
                    }
                ]
            },
            //票据管理系统项目
            {
                projectname: "408票据管理系统",
                projectdesc: "一款基于springboot，AdminLTE开发的票据管理系统。使用Mysql关系型数据库以及Redis缓存数据库,thymeleaf模板引擎，Mybatis-plus数据持久层，Spring Security安全控制。",
                projectremark: "功能完善，包括票据管理，用户管理，权限管理等多个模块，分为用户和管理员两个角色，实现不同的功能，项目部署在阿里云服务器。",
                imgs: [
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/ticket01.png"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/ticket02.png"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/ticket03.png"
                    },
                    {
                        url: "https://lyking90.oss-cn-shenzhen.aliyuncs.com/boringman/ticket04.png"
                    }
                ]
            }
        ],
    }
})