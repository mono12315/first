<template>
    <!-- 组件的结构 -->
        <div class="header">
            <div class="container">
                <div class="header-logo">
                    <a href="javascript: ;"><img src="../assets/logo.jpg" alt=""></a>
                </div>
                <div class="header-title">
                    <div class="title">
                        <h2>我的购物车</h2>
                        <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
                    </div>
                    <div class="topbar">
                        <span class="user">
                            <!-- <a href="javascript:;">
                                <span class="name">陌上</span>
                            </a>
                            <ul class="user-menu">
                                <li><a href="javascript:;">个人中心</a></li>
                                <li><a href="javascript:;">评价晒单</a></li>
                                <li><a href="javascript:;">我的喜欢</a></li>
                                <li><a href="javascript:;">小米账户</a></li>
                                <li><a href="javascript:;">退出登录</a></li>
                             </ul> -->
                             <el-dropdown>
                            <span class="el-dropdown-link">
                                陌上<i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>个人中心</el-dropdown-item>
                                <el-dropdown-item>评价晒单</el-dropdown-item>
                                <el-dropdown-item>我的喜欢</el-dropdown-item>
                                <el-dropdown-item>小米账单</el-dropdown-item>
                                <el-dropdown-item>退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                            </el-dropdown>
                        </span>
                        <span class="=sep">|</span>
                        <a href="javascript:;" class="link">我的订单</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name:'School',
    // 组件交互相关的代码(数据、方法等等)
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>
    /* 组件的样式 */
    .header {
    height: 102px;
    border-bottom:  2px solid #ff6700;
    box-sizing: border-box;
    background-color: #fff;
    }
    .container {
        margin: auto;
        width: 1226px;
        height: 74px;
    }
    .header-logo {
        width: 93px;
        height: 48px;
        margin-top: 26px;
        float: left;
    }
    .header-logo img {
        width: 48px;
        height: 48px;
        margin-right: 45px;
    }
    .header-title {
        width: 1133px;
        height: 48px;
        margin-top: 26px;
        float: left;
    }
    .header-title .title{
        width: 491px;
        height: 48px;
        float: left;
    }
    .header-title h2 {
        margin: 0;
        font-size: 28px;
        font-weight: 400;
        line-height: 48px;
        color: #424242;
        float: left;
    }
    .header-title p {
        margin: 0;
        font-size: 12px;
        font-weight: 400;
        margin-top: 20px;
        margin-left: 10px;
        color: #757575;
        float: left;
    }
    .header-title .topbar {
        float: right;
        height: 40px;
        width: 195px;
        margin-top: 8px;
        font-size: 12px;
        line-height: 40px;
    }
    .topbar a {
        color: #757575;
    }
    .topbar .user {
        width: 100px;
        display: block;
        margin-left: 0;
        height: 40px;
        float: left;
        text-align: center;
        position: relative;
    }
    .topbar .user a:hover{
        color: #ff6700;
    }
    .el-dropdown-link {
        cursor: pointer;
        color: #757575;
    }
    .el-dropdown-link:hover {
        color: #ff6700;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .topbar .link {
        display: block;
        float: right;
        width: 90px;
        height: 40px;
        text-align: center;
    }
    .topbar .link:hover{
        color: #ff6700;
    }

</style>