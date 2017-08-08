<template>
    <div class="detail" v-loading.body="loadStatus">
         <div class="head-tran">
             <v_headNav  :headTitle = "title"></v_headNav>
         </div>
         <div v-if="dataAll">
             <div class="movie-pic">
                 <img class="img0" :src="dataAll.images.large" alt="">
                 <img class="img1" :src="dataAll.images.large" alt="">
                 <img class="img2" :src="dataAll.images.large" alt="666">
             </div>
         </div>
         
         <div class="footer">
             <el-row>
                 <el-col :span="4">
                    <div  @click="addAttention()">
                        <p class="fa fa-gg"></p>
                        <p>对比</p>
                    </div>
                 </el-col>
                 <el-col :span="4" >
                     <div  @click="addAttention()">
                        <p :class="!addAtten ? 'fa fa-heart-o' : 'fa fa-heart c-r'" ></p>
                        <p>关注</p>
                     </div>
                 </el-col>
                 <el-col :span="8">
                        <el-button type="danger" @click="open">预约看房</el-button>
                 </el-col>
                 <el-col :span="8">
                        <el-button type="success">咨询经纪人</el-button>
                 </el-col>
             </el-row>
         </div>
    </div>
</template>
<script>
    import {
        sMoveBaseUrl,
        sMoveDetailUrl,
        getUrlData
    } from '@/config/mUtils'
    import headNav from '@con/head/headNav'
    export default {
        data() {
            return {
                loadStatus: true,
                dataAll: null,
                title: null,
                dataId: null,
                addAtten: false
            }
        },
        components: {
            'v_headNav': headNav
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                let self = vm,
                    url = sMoveBaseUrl + sMoveDetailUrl + to.query.id
                getUrlData(self, url, function(data) {
                    self.dataAll = data
                    self.title = data.title
                    self.dataId = data.id
                    self.loadStatus = false
                    console.log(data)
                })
            })
        },
        methods: {
            addAttention() {
                // alert(this.dataId)
                this.addAtten = !this.addAtten;
                if (this.addAtten) {
                    this.$message('关注成功！');
                } else {
                    this.$message('已取消关注。');
                }
            },
            open() {
                this.$message('成功加入待看清单');
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../style/mixin";
    .detail {
        height: 100%;
    }
    
    .head-tran {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;
        width: 100%;
        background: rgba(250, 250, 250, .1);
    }
    
    .movie-pic {
        position: relative;
        width: 100%;
        height: 16rem;
        overflow: hidden;
        img {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            max-height: 100%;
            margin: auto;
            transition: all .5s ease;
        }
        .img0 {
            margin-top: 10%;
            max-height: 80%;
        }
        .img1 {
            z-index: 2;
            transform: translateX(4rem);
        }
        .img2 {
            margin-top: 10%;
            max-height: 80%;
            transform: translateX(12rem);
        }
    }
    
    .footer {
        @include bt-1px(#999);
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 99;
        width: 100%;
        padding: .25rem;
        line-height: 1rem;
        background: #fff;
        font-size: .7rem;
    }
</style>