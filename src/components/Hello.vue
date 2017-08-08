<template>
  <div>

                <p ><a  href="http://kzfapp.com/mobile.php">快找房，正式服务器</a></p>
                <p><a  href="http://dev.kzfapp.com/mobile.php">快找房，测试服务器</a></p>
                <p><a  href="http://192.168.1.127/mobile.php">快找房，本地服务器</a></p>
                <router-link to="/pageB">pageB</router-link>
                <cpt-pageA :dataList = "dataAll"></cpt-pageA>
</div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    import pageA from './pageA.vue';
    export default {
        name: 'hello',
        data() {
            return {
                dataAll: null,
                localCount: 5,
            }
        },
        components: {
            'cpt-pageA': pageA
        },
        computed: mapState({
            count(state) {
                return state.count
            },
            countPlusLocalState(state) {
                return state.count + this.localCount
            }
        }),
        created() {
            let self = this;
            this.jsonp('http://api.douban.com/v2/movie/in_theaters', null, function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    self.dataAll = data;
                }
            });
        },
        mounted() {
            console.log(this.count, 66666666);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    p {
        border-bottom: 1px solid red;
        a {
            color: #252525;
            font-size: 1rem;
            &:hover {
                background: red;
            }
        }
    }
</style>