<template>
    <div class="contanier" ref="viewBox">
        <div class="head">
            <el-row>
                <el-col :span="6"><span class="area p-3 p-r-md">深圳 <i class="el-icon-arrow-down"></i> </span></el-col>
                <el-col :span="6" :offset="12"><span class="login-ico"><i class="fa fa-user-o c-f"></i></span></el-col>
            </el-row>
            <el-row class="title">
                <el-col :span="12" :offset="6"><h1 class="c-f">快找房，慢生活</h1></el-col>
            </el-row>
            <el-row class="search">
                <el-col :span="18" :offset="3">
                    <el-input
                        placeholder="输入小区，开始找房喽 ~"
                        icon="search"
                        v-model="input"
                        :on-icon-click="handleIconClick">
                        </el-input>
                </el-col>
            </el-row>
        </div>
        <v_headMenu :MuenList = "headMuenList"></v_headMenu>
         <div>
             <p class="list-title">推荐房源：</p>
                <v_houseList :listArr="listData" :loadStatus="loadStatus" :listScrollStyle=true></v_houseList>
        </div>
    </div>
</template>
<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'
    import {
        sMoveBaseUrl,
        sComingSoonUrl,
        getUrlData
    } from '@/config/mUtils'
    import menu from '@/components/home/menu';
    import houseList from '@/components/houeList';
    export default {
        data() {
            return {
                dataAll: null,
                input: null,
                headMuenList: 666,
                listData: null,
                loadStatus: false
            }
        },
        components: {
            v_headMenu: menu,
            v_houseList: houseList
        },
        computed: mapState({
            count(state) {
                return state.count
            }
        }),
        created() {
            let self = this,
                url = sMoveBaseUrl + sComingSoonUrl
            getUrlData(self, url, function(data) {
                self.dataAll = data
                self.listData = data.subjects
                self.loadStatus = false
            })
        },
        activated() {
            let top = +this.count
            if (top >= 0) {
                this.remeberScroll(-1)
                this.$refs.viewBox.scrollTop = top
            } else {
                this.remeberScroll(0)
            }
        },
        deactivated() {
            this.remeberScroll(this.$refs.viewBox.scrollTop)
        },
        methods: {
            ...mapMutations({
                remeberScroll: 'setCount',
                getScroll: 'getCount'
            }),
            handleIconClick() {
                alert('666')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .contanier {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
    
    .head {
        width: 100%;
        height: 12rem;
        padding-top: 1rem;
        background: url('../../../static/images/head_bg.jpg') no-repeat;
        background-size: cover;
        font-size: .6rem;
    }
    
    .area {
        background: rgba(0, 0, 0, .5);
        border-radius: .5rem;
        color: #fff;
    }
    
    .login-ico i {
        font-size: .85rem;
    }
    
    .title {
        margin-top: 3rem;
    }
    
    .search {
        margin-top: 3rem;
    }
    
    .list-title {
        margin: .25rem 0;
        padding-left: .5rem;
        font-size: .8rem;
        text-align: left;
    }
</style>