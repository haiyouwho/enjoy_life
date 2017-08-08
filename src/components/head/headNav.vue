<template>
    <div class="headNav" >
         <el-row>
                <el-col :span="4">
                    <div class="fa fa-angle-left width100" @click="goback"></div>
                </el-col>
                <el-col :span="16">
                    <div>
                         <h5>{{headTitle}}</h5>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="fa fa-share-alt"></div>
                </el-col>
            </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        props: ['headTitle'],
        methods: {
            goback() {
                this.$router.goback()
            },
        }
    }
</script>
<style lang="scss" scoped>
    .headNav {
        line-height: 2rem;
        color: #fff;
        div {
            line-height: 1.5rem;
        }
    }
</style>