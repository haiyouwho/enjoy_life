<template>
    <div class="handroom"  >
        <div class="fixed b-f">
            <div class="head p-t">
                <el-row>
                    <el-col :span="3" >
                            <div class="goback fa fa-angle-left" @click="goback" ></div>
                    </el-col>
                    <el-col :span="16" >
                        <p class="search" @click="handleIconClick">
                            <i class="fa fa-search f-l p-3"></i>
                            <span>请输入小区或商区名</span>
                            <i class="fa fa-close f-r p-3"></i>
                            </p>
                    </el-col>
                    <el-col :span="3">
                            <div class="goback fa fa-location-arrow" @click="goback" ></div>
                    </el-col>
                    <el-col :span="2" >
                            <div class="goback fa fa-commenting-o" @click="goback" ></div>
                    </el-col>
                </el-row>
            </div>
            <div class="fliter p-t p-b" id="filter-box">
                <el-row>
                    <el-col :span="6">
                    <div @click="filterSelect(1)">
                            <span :class="filterIndex == 1 ? 'c-ae':null">{{area_title}}</span>
                            <i :class="filterIndex == 1 ? 'fa fa-caret-down c-ae':'fa fa-caret-up'"></i>
                    </div>
                    </el-col>
                    <el-col :span="6">
                        <div @click="filterSelect(2)">
                            <span :class="filterIndex == 2 ? 'c-ae':null">价格</span>
                            <i :class="filterIndex == 2 ? 'fa fa-caret-down c-ae':'fa fa-caret-up'"></i>
                    </div>
                    </el-col>
                    <el-col :span="6">
                        <div @click="filterSelect(3)">
                            <span :class="filterIndex == 3 ? 'c-ae':null">房型</span>
                            <i :class="filterIndex == 3 ? 'fa fa-caret-down c-ae':'fa fa-caret-up'"></i>
                    </div>
                    </el-col>
                    <el-col :span="6">
                        <div @click="filterSelect(4)">
                            <span :class="filterIndex == 4 ? 'c-ae':null">更多</span>
                            <i :class="filterIndex == 4 ? 'fa fa-caret-down c-ae':'fa fa-caret-up'"></i>
                    </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!--条件筛选-->
        <transition name="slide">
        <div class="filter-contannier" v-if="filterIndex">
                <div class="area-list" v-show="filterIndex == 1">
                   <el-row >
                       <el-col :span="8">
                            <ul>
                                <li v-for="(item,index) in area_all" @click ="selectArea(index)" :class="index_a == index ? 'c-ae' : null">{{item.title}}</li>
                            </ul>
                       </el-col>
                       <el-col :span="8">
                           <ul>
                                <li v-for="(item,index) in area_b_select.name" @click ="selectArea_a(item, index)" :class="index_b == index ? 'c-ae' : null">{{item}}</li>
                            </ul>
                       </el-col>
                       <el-col :span="8">
                           <ul>
                                <li v-for="(item,index) in area_c_select" @click ="filterArea(item,index)" :class="index_c == index ? 'c-ae' : null">{{item}}</li>
                            </ul>
                       </el-col>
                   </el-row>
                </div>
                <div v-show="filterIndex == 2">
                    2
                </div>
                <div v-if="filterIndex == 3">
                   3
                </div>
                <div v-if="filterIndex == 4">
                    5
                </div>
        </div>
            </transition>
        <div class="list">
            <v_houseList :listArr = "listArr" :listScrollStyle=false></v_houseList>
        </div>
</div>
</template>
<script>
    import router from '@/router'
    import houseList from '@/components/houeList';
    import {
        sMoveBaseUrl,
        sSearchByName,
        sMoveInHot,
        sSearchByType,
        getUrlData
    } from '@/config/mUtils'
    export default {
        data() {
            return {
                listArr: [],
                input: null,
                loadStatus: false, //加载状态
                listData: [], //列表数据
                filterIndex: 0, //tab的index
                index_a: 0, //区域一级index
                index_b: 0, //区域二级index
                index_c: 0, //区域三级index
                area_title: '区域', //区域标题
                area_b_select: {}, //区域二级数据
                area_c_select: [], //区域三级数据
                getDataIng: false, //获取数据中
                area_all: [{ //区域全部数据
                    'title': '区域',
                    'name': ['罗湖区', '福田区', '南山区', '盐田区'],
                    'children': [
                        ['不限', '罗湖区', '张艺谋', '成龙', '黄渤', '王宝强'],
                        ['不限', '福田区', '百事达'],
                        ['不限', '南山区', '百事达'],
                        ['不限', '盐田区', '百事达']
                    ]
                }, {
                    'title': '地铁',
                    'name': ['1号线', '2号线', '3号线', '4号线'],
                    'children': [
                        ['不限', '1号线', '百事达'],
                        ['不限', '2号线', '百事达'],
                        ['不限', '3号线', '百事达'],
                        ['不限', '4号线', '百事达']
                    ]
                }, ]
            }
        },
        components: {
            v_houseList: houseList
        },
        created() {
            this.area_b_select = this.area_all[0]
            this.area_c_select = this.area_b_select.children[0]
            this.getData();
        },
        methods: {
            handleIconClick() {
                alert('666')
            },
            goback() {
                this.$router.goback()
            },
            getData(options) {
                if (options) {
                    console.log(sMoveBaseUrl + sSearchByName + options)
                    let self = this
                    getUrlData(this, (sMoveBaseUrl + sSearchByName + options), function(data) {
                        self.loadStatus = false
                        self.listArr = data.subjects
                    })
                } else {
                    let self = this
                    getUrlData(this, (sMoveBaseUrl + sMoveInHot), function(data) {
                        self.loadStatus = false
                        self.listArr = data.subjects
                    })
                }
                this.filterIndex = 0
            },
            //点击赛选条件主栏
            filterSelect(index) {
                if (this.filterIndex != index) {
                    this.filterIndex = index
                } else {
                    this.filterIndex = 0
                }
            },
            selectArea(index) {
                this.index_a = index
                this.index_b = 0
                this.index_c = 0
                this.area_b_select = this.area_all[index]
            },
            selectArea_a(item, index) {
                this.index_b = index
                this.index_c = 0
                this.area_c_select = this.area_b_select.children[index]
                index != 0 ? this.area_title = item : this.area_title
            },
            filterArea(item, index) {
                this.index_c = index
                if (index == 0) {
                    this.area_title = this.area_b_select.name[this.index_b]
                } else {
                    this.area_title = item
                }
                this.getData(item)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../style/mixin";
    .fixed {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        overflow: hidden;
    }
    
    .handroom {
        height: 100%;
        line-height: 1.5rem;
        font-size: .8rem;
    }
    
    .head {
        height: 2rem;
        line-height: 2rem;
        overflow: hidden;
        background: #F9F9F9;
    }
    
    .head .fa {
        color: #9C9FA1;
    }
    
    .search {
        background: #E8E8E9;
        border-radius: 4px;
        span {
            color: #9C9FA1;
        }
    }
    
    .goback {
        width: 100%;
        height: 100%;
        line-height: 1.5rem;
    }
    
    .el-input {
        height: 1rem;
        line-height: 1rem;
    }
    
    .fliter {
        @include bb-1px(#ccc);
        height: 2.6rem;
        line-height: 2rem;
        color: #394043;
        font-size: .8rem;
        overflow: hidden;
        background: #F9F9F9;
        span {
            font-size: .8rem;
        }
    }
    
    i {
        color: #666;
        &.c-ae {
            color: #00ae66;
        }
    }
    
    .list {
        padding-top: 4.6rem;
        background: #fff;
    }
    
    .filter-contannier {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 98;
        width: 100%;
        height: 100%;
        max-height: 100%;
        padding-top: 4.6rem;
        background: rgba(0, 0, 0, .3);
        overflow: hidden;
    }
    
    .area-list {
        height: 15rem;
        line-height: 1.5rem;
        padding: .5rem 0;
        background: #fff;
    }
    
    .slide-enter {
        animation: slide-in .5s;
    }
    
    .slide-leave-active {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        animation: slide-out .5s;
    }
    
    @keyframes slide-in {
        0% {
            opacity: 0;
            -webkit-transform: translate(0, -1000px);
            transform: translate(0, -1000px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
    }
    
    @keyframes slide-out {
        0% {
            opacity: 1;
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        100% {
            opacity: 0;
            -webkit-transform: translate(0, -1000px);
            transform: translate(0, -1000px);
        }
    }
</style>