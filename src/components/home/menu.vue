<template>
    <div class="menu m-b-lg">
        <div class="tab flexbox">
           <p :class="activeTab == 0 ? 'active1':null" @click="activeTab=0">我要买房</p>
           <p :class="activeTab == 1 ? 'active2':null" @click="activeTab=1">我要租房</p>
           <p :class="activeTab == 2 ? 'active3':null" @click="activeTab=2">我是房主</p>
        </div>
        <div class="table-contanier">
            <div class="tab-item" v-if="activeTab == 0">
                 <menuList :menuItem="menuData"></menuList>
                <menuList :menuItem="menuData1"></menuList>
            </div>
            <div class="tab-item" v-if="activeTab == 1">
               <menuList :menuItem="menuData1"></menuList>
                <!--<menuList :menuItem="menuData"></menuList>-->
            </div>
            <div class="tab-item" v-if="activeTab == 2">
               <menuList :menuItem="menuData"></menuList>
                  <menuList :menuItem="menuData1"></menuList>
            </div>
        </div>
    </div>
</template>

<script>
    import menuList from './menuList'
    export default {
        data() {
            return {
                menuData: null,
                activeTab: 0,
                menuData: [{
                    link: '/handroom',
                    ico: 'fa fa-hotel',
                    text: '0000'
                }, {
                    link: '/handroom',
                    ico: 'fa fa-hotel',
                    text: '二手房'
                }, {
                    link: '/handroom',
                    ico: 'fa fa-hotel',
                    text: '二手房'
                }, {
                    link: '/handroom',
                    ico: 'fa fa-hotel',
                    text: '二手房'
                }],
                menuData1: [{
                    link: '/handroom',
                    ico: 'fa fa-hotel',
                    text: '1111'
                }, {
                    link: '/handroom',
                    ico: 'fa fa-hotel',
                    text: '二手房'
                }, {
                    link: '/handroom',
                    ico: 'fa fa-hotel',
                    text: '二手房'
                }, {
                    link: '/handroom',
                    ico: 'fa fa-hotel',
                    text: '二手房'
                }]
            }
        },
        props: ['MuenList'],
        components: {
            menuList: menuList
        }
    }
</script>
<style lang="scss" scoped>
    .menu {
        font-size: .9rem;
    }
    
    .tab {
        /*padding: .5rem 0;*/
        background: #efefef;
        p {
            flex: 1;
            line-height: 2rem;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #00ae66;
            color: #9C9FA1;
            font-size: .65rem;
            &.active1 {
                background: #fff;
                color: #394043;
                border-bottom: 1px solid #fff;
                border-top: 1px solid #00ae66;
                border-right: 1px solid #00ae66;
            }
            &.active2 {
                background: #fff;
                color: #394043;
                border-bottom: 1px solid #fff;
                border-top: 1px solid #00ae66;
                border-left: 1px solid #00ae66;
                border-right: 1px solid #00ae66;
            }
            &.active3 {
                background: #fff;
                color: #394043;
                border-top: 1px solid #00ae66;
                border-bottom: 1px solid #fff;
                border-left: 1px solid #00ae66;
            }
        }
    }
    
    .table-contanier {
        height: 6.5rem;
        padding: .25rem 0;
        box-shadow: 0 1px 10px #ccc;
    }
</style>