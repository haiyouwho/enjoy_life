<template>
    <div class="index" >
        <div class="index-box" >
            <transition name="bounce">
                 <router-view ></router-view>
            </transition>
        </div>
         <div class="flexbox nav  p-t-sm p-b-xs">
            <div>
                <router-link to="home">
                    <i class="fa fa-home"></i>
                    <span class="block">首页</span>
                </router-link>
            </div>
            <div>
                 <router-link to="message">
                    <i class="fa fa-commenting-o"></i>
                    <span class="block">消息</span>
                 </router-link>
            </div>
            <div>
                <router-link to="order">
                    <i class="fa fa-eye"></i>
                    <span class="block">看房</span>
                </router-link>
            </div>
            <div>
                <router-link to="user">
                <i class="fa fa-user"></i>
                <span class="block">我</span>
                </router-link>
            </div>
        </div>
    </div>
    
</template>

<script>
    import mUtils from '@/config/mUtils';

    export default {
        data() {
            return {
                dataAll: 1
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";
    .nav {
        @include bt-1px(#999);
        position: relative;
        top: -2.5rem;
        left: 0;
        height: 2.5rem;
        justify-content: space-around;
        line-height: 1rem;
        background: #fff;
        box-shadow: 0 -1px 10px #999;
        i {
            color: #9C9FA1;
        }
        span {
            font-size: .6rem;
            color: #9C9FA1;
        }
    }
    
    .router-link-active {
        display: block;
        width: 100%;
        span,
        i {
            color: $base-c;
        }
    }
    
    .index {
        height: 100%;
        width: 100%;
    }
    
    .index-box {
        width: 100%;
        height: 100%;
        padding-bottom: 2.5rem;
        overflow-x: hidden;
        overflow-y: auto;
    }
    
    .bounce-enter {
        animation: bounce-in .3s;
    }
    
    .bounce-leave-active {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        animation: bounce-out .5s;
    }
    
    @keyframes bounce-in {
        0% {
            opacity: 0;
        }
        50% {
            opacity: .1;
        }
        100% {
            opacity: 1;
        }
    }
    
    @keyframes bounce-out {
        0% {
            opacity: 1;
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        50% {
            opacity: .1;
        }
        100% {
            opacity: 0;
            -webkit-transform: translate(0, 30px);
            transform: translate(0, 30px);
        }
    }
</style>