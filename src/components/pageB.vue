<template>
  <div class="pageB">
    <div class="header">
        <div class="left" @click="goback"><</div>
            <div class="title">pageB</div>
    </div>
        <router-link to="/pageA">go pageA</router-link>
        <router-link to="/">主页6666666</router-link>
   </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            goback() {
                this.$router.goback()
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .pageB {
        color: yellow;
    }
    
    .header {
        display: flex;
        line-height: 2rem;
        background: blue;
    }
    
    .left {
        width: 3rem;
        background: red;
    }
    
    .title {
        flex: 1;
    }
</style>