<template>
    <!-- 组件的结构 -->
    <div class="ShopingCart">
        <div class="th">
                <div class="th1"><input type="checkbox" v-model="isAllCheck" @change="handChangeAll"></div>
                <div class="th2">商品名称</div>
                <div class="th3">单价</div>
                <div class="th4">数量</div>
                <div class="th5">小计</div>
                <div class="th6">操作</div>
            </div>
            <!-- 购物车 -->
            <div class="tr" v-for="(item, index) in list" :key="item.id">
                <div class="th1"><input type="checkbox" v-model="item.isCheck"></div>
                <div class="th2">
                    <a href="javascript:;"><img :src="item.bgSrc"></a>
                    <span>{{item.name}}</span>
                </div>
                <div class="th3">{{item.price}}元</div>
                <div class="th4">
                    <el-input-number v-model="item.num" @change="hardleChange" :min="1" :max="255" label="描述文字">
                    </el-input-number>
                </div>
                <div class="th5">{{(item.price * item.num).toFixed(2)}}元</div>
                <div class="th6">
                    <button @click="handClickDel(index)">
                        <el-button :plain="true" @click="open" class="th6-ser">X</el-button>
                    </button>
                </div>
            </div>
            <!-- 底部 -->
            <div class="bot">
                <div class="bot-l">已选择{{allPirces}}件</div>
                <div class="bot-r">
                    <span>合计：<span class="big">{{allPirce}}</span>元</span>
                    <div class="balance">
                        结算
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
    // 组件交互相关的代码(数据、方法等等)
    data(){
            return {
               isAllCheck:false,
               list: [
                   {
                       name:"AlwaySmart轻薄无感保护壳（适用K70/K70 Pro）",
                       bgSrc:'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202401151346_000632848a2a64edf393dac244241236.png?thumb=1&w=80&h=80&f=webp&q=90',
                       isCheck:false,
                       price:29,
                       num:1,
                       total:29,
                   },
                   {
                       name:"小米6A Type-C快充数据线 原装同款",
                       bgSrc:'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309271721_303e758bd1de9139f4b46dcc08465ff7.png?thumb=1&w=80&h=80&f=webp&q=90',
                       isCheck:false,
                       price:27,
                       num:1,
                       total:27,
                   },
                   {
                       name:"Xiaomi Civi 4 Pro 12GB+512GB 春野绿",
                       bgSrc:'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403201525_771f4d1f908ef67546102f04b66ccc53.png?thumb=1&w=80&h=80&f=webp&q=90',
                       isCheck:false,
                       price:3299,
                       num:1,
                       total:3299,
                   },
                   {
                       name:"Xiaomi 13 12GB+256GB 黑色",
                       bgSrc:'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211292354_3561d2993d555486f6504a7c37b62439.png?thumb=1&w=80&h=80&f=webp&q=90',
                       isCheck:false,
                       price:3599,
                       num:1,
                       total:3599,
                   }
               ]
            }
           },
           computed:{
               allPirce() {
                   let price = 0
                   for(let i = 0; i < this.list.length; i++) {
                       if(this.list[i].isCheck === true) {
                           let smallPrice = this.list[i].price * this.list[i].num
                           
                           price = price + smallPrice
                       }
                   }
                   return price
               },
               allPirces() {
                   let price = 0
                   for(let i = 0; i < this.list.length; i++) {
                       if(this.list[i].isCheck === true) {
                           let smallPrice = this.list[i].num
                           
                           price = price + smallPrice
                       }
                   }
                   return price
               }
           },
           methods: {
                hardleChange(value) {
                    console.log(value);
                },
                open(){
                    this.$message('你已成功删除该商品')
                },
                handClickDel(index){
                    this.list.splice(index,1)
                },
               // 全选
               handChangeAll() {
                   if(this.isAllCheck === true) {
                       this.list.forEach(item => {
                           item.isCheck = true
                       })
                   } else {
                       this.list.forEach(item => {
                           item.isCheck = false
                       })
                   }
               }
           }
           
    }
</script>



<!-- scoped样式，让样式在局部生效，防止冲突 -->
<style scoped> 
input[type = "checkbox"] {
    width: 20px;
    height: 20px;
}
.th{
    width: 1226px;
    height: 70px;
    margin: 50px auto 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
}
.tr{
    width: 1226px;
    height: 120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #e0e0e0;
    background-color: white;
}
.th1 {
    width: 100px;
    height: 30px;
}
.th2 {
    width: 500px;
    display: flex;
    align-items: center;
}
.th3 {
    width: 100px;
}
.th4 {
    width: 200px;
}
.th5 {
    width: 100px;
}
.th6 {
    width: 100px;
}
.th6 .th6-ser{
    border: 0;
    cursor:pointer;
    width: 100%;
}
.th6 .th6-ser:hover{
    background-color: #ff6700;
    color: white;
}
.th6 button{
    border: 0;
    background-color: white;
    cursor:pointer;
}
.num-cls {
    width: 50px;
    height: 30px;
    text-align: center;
}
.bot {
    width: 1226px;
    height: 50px;
    margin: 20px auto 0;
    background-color: white;
}
.bot-l {
    float:left;
    line-height: 50px;
}
.bot-r{
    float: right;
    width: 400px;
    height: 50px;
    line-height: 50px;
}
.balance {
    width: 200px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    margin-left: 50px;
    vertical-align: top;
    float: right;
    background-color: #ff6700;
    text-align: center;
}
.big {
    color: #ff6700;
    font-size: 28px;
}
</style>