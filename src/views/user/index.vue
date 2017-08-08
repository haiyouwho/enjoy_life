<template>
    <div>
          <div class="unload-head" >
                <el-row>
                        <el-col :span="4">
                            <div class="fa fa-angle-left width100" @click="goback"></div>
                        </el-col>
                        <el-col :span="16">
                            <div>
                                <h5>我的</h5>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="fa fa-gear"></div>
                        </el-col>
                    </el-row>
            </div>
            <div class="login-box">
                 <el-row>
                        <el-col :span="8">
                            <div class="nobody-photo"></div>
                        </el-col>
                        <el-col :span="16">
                            <div>
                                登陆/注册
                            </div>
                        </el-col>
                    </el-row>
            </div>
            <div class="menu-bg">
                <div class="history-menu">
                <el-row>
                        <el-col :span="8">
                            <div>
                                <p><span class="fa fa-lemon-o"></span> 最近足迹</p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <p><span class="fa fa-heart c-r"></span> 我的收藏</p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div>
                                <p><span class="fa fa-search-minus c-g"></span> 热门搜索</p>
                            </div>
                        </el-col>
                    </el-row>
            </div>
            <div class="user-menu">
                 <el-row v-for = "menu_item in menu_arr">
                        <el-col :span="6" v-for = "item in menu_item">
                            <div>
                                <p><img :src="item.img_src" alt=""></p>
                                <p>{{item.name}}</p>
                            </div>
                        </el-col>
                    </el-row>
            </div>
            </div>
            <div class="rec-box">
                <p class="rec-title">精选推送</p>
                <div class="rec-content">
                    <div class="contnt-scroll">
                         <img src="static/images/user-menu-10.png" alt="">
                     <img src="static/images/user-menu-11.png" alt="">
                     <img src="static/images/user-menu-12.png" alt="">
                     <img src="static/images/user-menu-13.png" alt="">
                     <img src="static/images/user-menu-14.png" alt="">
                     <img src="static/images/user-menu-15.png" alt="">
                    </div>
                </div>
            </div>
             <div class="rec-box">
                <p class="rec-title">热门话题</p>
                <div class="rec-content">
                    <ul class="hot-box">
                        <li>
                            <h4>666</h4>
                            <p>666</p>
                        </li>
                        <li>
                            <h4>666</h4>
                            <p>666</p>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                'menu_arr': [
                    [{
                        'name': '喜欢',
                        'img_src': 'static/images/user-menu-01.png'
                    }, {
                        'name': '书籍',
                        'img_src': 'static/images/user-menu-02.png'
                    }, {
                        'name': '音乐',
                        'img_src': 'static/images/user-menu-03.png'
                    }, {
                        'name': '聊天',
                        'img_src': 'static/images/user-menu-04.png'
                    }],
                    [{
                        'name': '记事',
                        'img_src': 'static/images/user-menu-05.png'
                    }, {
                        'name': '电影',
                        'img_src': 'static/images/user-menu-06.png'
                    }, {
                        'name': '相册',
                        'img_src': 'static/images/user-menu-07.png'
                    }, {
                        'name': '钱包',
                        'img_src': 'static/images/user-menu-08.png'
                    }]
                ]
            }
        },
        methods: {
            goback() {
                this.$router.goback()
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";
    .c-g {
        color: #00ae66;
    }
    
    .unload-head {
        padding: .5rem 0;
        line-height: 2rem;
        color: #333;
        div {
            line-height: 1.5rem;
        }
    }
    
    .login-box {
        width: 100%;
        height: 8rem;
        line-height: 8rem;
        background: url('../../../static/images/unlogin-bg.jpg') no-repeat center;
        font-size: .8rem;
    }
    
    .nobody-photo {
        width: 100%;
        height: 8rem;
        background: url('../../../static/images/nobody-bg.png') no-repeat center;
        background-size: 40% 40%;
    }
    
    .menu-bg {
        width: 100%;
        background: url('../../../static/images/user-bg.jpg') no-repeat center;
        background-size: cover;
    }
    
    .history-menu {
        padding: .5rem 1.5rem .8rem;
    }
    
    .history-menu .el-col {
        .fa {
            margin-right: .15rem;
            padding: .25rem 0;
            transform: scale(1.5, 1.5);
            font-size: .8rem;
        }
        p {
            font-size: .6rem;
        }
    }
    
    .user-menu .el-row {
        padding: .5rem .1rem;
    }
    
    .user-menu .el-col {
        line-height: 1.2rem;
    }
    
    .user-menu .el-col p {
        text-align: center;
    }
    
    .user-menu .el-col p img {
        width: 1.2rem;
        height: 1.2rem;
    }
    
    .rec-box {
        width: 100%;
        padding: .5rem .25rem;
        text-align: left;
    }
    
    .rec-title {
        padding: .25rem .5rem .5rem;
        font-size: .7rem;
        @include bb-1px(#E5E5E5);
    }
    
    .rec-content {
        width: 100%;
        height: 6rem;
        overflow-x: auto;
        overflow-y: hidden;
        .contnt-scroll {
            width: 300%;
        }
        img {
            width: 5rem;
            height: 5rem;
            margin: .5rem;
            float: left;
        }
    }
    
    .hot-box {
        padding: .5rem;
        line-height: 1.2rem;
        li {
            padding: .25rem 0;
        }
    }
</style>