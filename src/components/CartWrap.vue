<template>
    <div class="CartWrap">
        <div class="cart-wrap">
            <h2 class="recommend">
                <span>买购物车中商品的人还买了</span>
            </h2>
            <div class="recommend-bd">
                <ul>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <a href="javascript:;">
                                <img src="../assets/手机1.jpg" alt="" class="images">
                                <p class="title1">Xiaomi 14 Ultra</p>
                                <p class="desc">1999元</p>
                                <p class="price">124.7万人好评</p>
                            </a>
                        </div>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .CartWrap {
        display: flex;
        align-items: center;
    }
    .cart-wrap {
    width: 1226px;
    height: 705px;
    margin-top: 60px;
    margin: 60px auto 0 auto;
    }
    .recommend {
        width: 1226px;
        height: 50px;
        border-top: 1px solid #b0b0b0;
        color: #757575;
        position: relative;
        text-align: center;
    }
    .recommend span{
        width: 482px;
        height: 40px;
        position: absolute;
        top: -20px;
        left: 372px;
        line-height: 40px;
        font-size: 28px;
        text-align: center;
        background-color: #f5f5f5;
    }
    .recommend-bd {
        height: 628px;
        width: 1226px;
    }
    .recommend-bd ul{
        display: flex;
        list-style: none;
        width: 1226px;
        flex-wrap: wrap;
        padding: 0;
        box-sizing: border-box;
        margin:0 0 0 -15px;
    }
    .recommend-bd li{
        width: 230px;
        height: 300px;
        margin: 0 0 14px 15px; 
        box-sizing: border-box;
    }
    .recommend-bd .item {
        display: flex;
        margin-right: 0;
        width: 230px;
        height: 300px;
        background-color: #fff;
    }
    .images {
        width: 160px;
        height: 160px;
        margin-top: 20px;
        display: flex;
        margin-left: 37px;
    }
    .title1 {
        font-size: 14px;
        color: #333;
        text-align: center;
    }
    .desc {
        margin: 0 10px 10px;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 30px;
        line-height: 30px;
        width: 214px;
        font-size: 12px;
        color: #ff6700;
        overflow: hidden;
    }
    .price  {
        text-align: center;
        color: #b0b0b0;
    }
    .price del {
        margin-left: .5em;
        color: #e0e0e0;
    }
    .item {
        display: flex;
        width: 234px;
        height: 300px;
        -webkit-transition: all .2s linear;
        transition: all .2s linear;
    }
    .item:hover {
        -webkit-box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
        box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
        -webkit-transform: translate3d(0,-2px,0);
        transform: translate3d(0,-2px,0);
    }
    .item a {
        color: white;
    }
</style>