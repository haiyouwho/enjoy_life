<template>
    <ul class="menuUl" v-if="menuItem">
        <li  v-for="item in menuItem">
            <router-link :to="item.link">
                <div :class="item.ico"></div>
                <div class="m-t-lg">{{item.text}}</div>
            </router-link>
        </li>
    </ul>
                            
</template>

<script>
    export default {
        props: ['menuItem']
    }
</script>
<style lang="scss" scoped>
    .menuUl {
        display: flex;
        justify-content: space-around;
        margin-top: .5rem;
        li {
            flex: 1;
            div {
                font-size: .8rem;
                color: #394043;
                &.fa {
                    color: #00ae66;
                    font-size: 1rem;
                }
            }
        }
    }
</style>