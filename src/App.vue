<template>
  <div id="app">
      <transition name="bounce">
          <keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
      </transition>
      <transition name="bounce">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
	    </transition>
  </div>
</template>
<script>
    export default {
        name: 'app'
    }
</script>

<style>
    body,
    html {
        width: 100%;
        height: 100%;
    }
    
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: .8rem;
        color: rgb(51, 51, 51);
        font-family: 'Hiragino Sans GB', 'Microsoft Yahei UI', 'Microsoft Yahei', 微软雅黑, 'Segoe UI', Tahoma, 宋体b8b体, SimSun, sans-serif;
    }
    
    .el-col {
        border-radius: 4px;
    }
    
    .bounce-enter-to {
        animation: bounce-in .5s;
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
            /*-webkit-transform: translate(0, 40px);*/
            /*transform: translate(0, 40px);*/
        }
        50% {
            opacity: .1;
        }
        100% {
            opacity: 1;
            /*-webkit-transform: translate(0, 0);*/
            /*transform: translate(0, 0);*/
        }
    }
    
    @keyframes bounce-out {
        0% {
            opacity: 1;
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        50% {
            opacity: .3;
        }
        100% {
            opacity: .1;
            -webkit-transform: translate(0, 30px);
            transform: translate(0, 30px);
        }
    }
</style>