<template>
    <!--v-loading.body="loadStatus"-->
    <div  @touchmove="touchMove()" @touchstart="touchStart()" @touchend = "touchEnd()">
        <ul v-if="getListArr">
            <li @click="jump(item.id)"  v-for="(item,index) in houseItem" >
            <el-row >
                <router-link to="">
                    <el-col :span="8" class="imgbox">
                        <img :src="item.images.small" alt="">
                    </el-col> 
                    <el-col :span="16">
                        <div class="movie-text"> 
                        <p class="m-r">
                            <span class="movie-title w90">{{item.title}}</span>
                            <span class="c-r f-r">{{item.year}}</span>
                        </p>
                        <p>
                            <span>主演：</span>
                            <i class="name" v-for="(itema,indexa) in item.casts">{{itema.name}} <span v-if="indexa!=(item.casts.length-1)">,</span></i>
                        </p>
                        <p>
                            <span>类型：</span>
                            <span v-for="(itemb,indexb) in item.genres"> {{itemb}} <span v-if="indexb!=(item.genres.length-1)">/</span></span>
                        </p>
                        <p >
                            <span class="">评分：<b>{{item.rating.average}}</b></span>
                            <span class="c-r m-l">{{item.collect_count}}</span>人看过
                        </p>
                        </div>
                    </el-col> 
                </router-link>        
            </el-row>
            </li>
        </ul>
        <div v-if="loadMore" class="text-center">
            <p v-if="loadMoretext_a">松开加载！</p>
            <p v-if="loadMoretext_b">正在加载...</p>
            <p v-if="loadMoretext_c">没有更多了！</p>
        </div>
    </div>
</template>
<script>
    import {
        sMoveBaseUrl,
        sSearchByName,
        sMoveInHot,
        sSearchByType,
        getUrlData
    } from '@/config/mUtils'
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import router from '@/router'
    import store from '@/store/index'
    export default {
        data() {
            return {
                houseItem: [],
                getListArr: false,
                lodaingStatus: true,
                scrollTop: 0,
                scroYDistance: 0,
                screenX: 0,
                screenY: 0,
                totalHeight: 0,
                screenHeight: 0,
                loadMore: false,
                lodaingData: false,
                loadMoretext_a: false,
                loadMoretext_b: false,
                loadMoretext_c: false,
                dataStart: 20,
                dataLimit: 10
            }
        },
        props: ['listArr', 'listScrollStyle'],
        activated() {
            if (this.scrollStyle === this.listScrollStyle) {
                let top = +this.count
                if (top >= 0) {
                    document.body.scrollTop = top
                    this.remeberScroll(-1)
                } else {
                    this.remeberScroll(0)
                }
            }
        },
        watch: {
            'listArr': function(val, newVal) {
                this.houseItem = val
                this.getListArr = true
                this.initLoad()
            }
        },
        computed: mapState({
            count(state) {
                return state.count
            },
            scrollStyle(state) {
                return state.scrollStyle
            }
        }),
        mounted() {
            this.screenHeight = window.screen.height
        },
        methods: {
            ...mapMutations({
                remeberScroll: 'setCount',
                getScroll: 'getCount'
            }),
            initLoad() {
                this.loadMore = false
                this.lodaingData = false
                this.loadMoretext_a = false
                this.loadMoretext_b = false
                this.loadMoretext_c = false
                this.dataStart = 20
                this.scrollTop = 0
                document.body.scrollTop = 0
                this.remeberScroll(0)
            },
            getScroTop(e) {
                var e = event || window.event
                document.body.scrollTop
            },
            touchStart(event) {
                var e = event || window.event,
                    touch = e.targetTouches[0],
                    clientY = touch.clientY
                this.scroYDistance = 0
                this.bodyHeight = document.body.scrollHeight
                this.screenY = clientY
                this.totalHeight = document.body.scrollHeight
            },
            touchMove(event) {
                var e = event || window.event,
                    touch = e.targetTouches[0],
                    clientY = touch.clientY,
                    sTop = document.body.scrollTop + this.screenHeight
                this.scroYDistance += clientY - this.screenY
                this.screenY = clientY
                if ((sTop - this.scroYDistance - 20) > this.totalHeight) {
                    this.loadMore = true;
                    this.loadMoretext_a = true;
                }
            },
            touchEnd() {
                let self = this
                this.loadMoretext_a = false
                if (this.loadMore && !this.lodaingData) {
                    this.loadMore = false
                    this.lodaingData = true
                    if (!this.loadMoretext_c) {
                        this.loadMoretext_b = true
                        this.loadMoreData()
                    }
                }
            },
            loadMoreData() {
                let self = this,
                    dataNum = '?&start=' + this.dataStart + '&count=' + this.dataLimit
                getUrlData(this, (sMoveBaseUrl + sMoveInHot + dataNum), function(data) {
                    self.loadMoretext_b = false
                    if (data.subjects.length < self.dataLimit) {
                        self.loadMoretext_c = true
                    } else {
                        self.lodaingData = false
                    }
                    self.houseItem = self.houseItem.concat(data.subjects)
                    self.dataStart += data.subjects.length
                })
            },
            jump(id) {
                var top = document.body.scrollTop || document.documentElement.scrollTop
                this.remeberScroll(top)
                router.push({
                    path: '/detail',
                    query: {
                        id: id
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../style/mixin";
    li {
        padding: .5rem;
        line-height: 1.5rem;
        font-size: .8rem;
        @include bb-1px(#E5E5E5);
    }
    
    .imgbox {
        width: 3.9rem;
        height: 4.8rem;
        margin: 0 .5rem 0 0;
        img {
            width: 100%;
            height: 100%;
        }
    }
    
    .movie-text p {
        line-height: 1.2rem;
        font-size: .7rem;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .w90 {
        display: block;
        width: 85%;
        float: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .movie-title {
        font-size: .9rem;
        font-weight: 900;
    }
    
    .name {
        color: darkgoldenrod;
        font-size: .6rem;
    }
    
    .el-col {
        text-align: left;
    }
</style>