import Vue from 'vue'

import Router from 'vue-router'
import Hello from '@/components/Hello'
import pageA from '@/components/pageA'
import pageB from '@/components/pageB'
import index from '@/views/index'
import home from '@/views/home'
import message from '@/views/message'
import order from '@/views/order'
import user from '@/views/user/'
import handroom from '@/views/handroom'
import detail from '@/views/detail'


Router.prototype.goback = function() {
    this.isBack = true
    window.history.go(-1)
}

Vue.use(Router)

export default new Router({
    mode: 'hash', //hitory开启后，打包文件在本地不会运行，这个功能需要后台支持
    routes: [
        //首页底部table
        {
            path: '/',
            name: '/',
            component: index,
            redirect: '/home',
            children: [{
                    path: 'home',
                    name: 'home',
                    component: home,
                    meta: {
                        keepAlive: true
                    }
                },
                {
                    path: 'message',
                    name: 'message',
                    component: message
                },
                {
                    path: 'order',
                    name: 'order',
                    component: order
                },
                {
                    path: 'user',
                    name: 'user',
                    component: user
                },
            ]
        },
        {
            path: '/handroom',
            name: 'handroom',
            component: handroom,
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/pageB',
            name: 'pageB',
            component: pageB
        }
    ]
})