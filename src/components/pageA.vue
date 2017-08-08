<template>
    <div>
          <div name="list">
                <div class="header">
                <div class="left" @click="goback"><</div>
                <div class="title">{{title}}</div>
                </div>
            <div>
            <router-link to="/">主页</router-link>
            <ul class="move-box" v-if="dataList">
                    <li v-for="item in dataList.subjects" @click="consoTop()">
                        <!--<router-link to="/pageB">-->
                            <img :src="item.images.large">
                            <p>{{item.title}}</p>
                        <!--</router-link>-->
                    </li>
                </ul>
            </div>
               <div class="left" @click="goback"><</div>
            <p v-if="!dataAll">资源加载中......</p>
            </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import router from '../router'
    export default {
        data() {
            return {
                title: 'pageA',
                dataAll: null,
                list: "list",
                fristEnter: true
            }
        },
        props: ['dataList'],
        computed: mapState({
            count(state) {
                return state.count
            }
        }),
        methods: {
            ...mapMutations({
                remeberScroll: 'setCount',
                clearScroll: 'clearCount'
            }),
            goback() {
                this.$router.goBack()
            },
            consoTop() {
                var id = document.body.scrollTop
                this.remeberScroll(id)
                router.push({
                    path: '/pageB',
                    query: {
                        userId: id
                    }
                })
            }
        },
        activated() {
            // 等待页面挂载后进行操作
            if (!this.fristEnter) {
                var self = this;
                setTimeout(function() {
                    console.log(self.count, 'activated')
                    document.body.scrollTop = self.count;
                    self.clearScroll();
                }, 20)
            } else {
                this.fristEnter = false;
            }

        },
        mounted() {}
    }
</script>

<style scoped>
    .move-box li {
        width: 100%;
        height: 7rem;
        margin: .25rem;
        overflow: hidden
    }
    
    .move-box li img {
        width: 5rem;
        height: 5rem;
    }
    
    .move-box li p {
        height: 2rem;
        line-height: 2rem;
    }
    
    .left {
        height: 4rem;
        border: 1px solid #666;
        color: red;
    }
</style>