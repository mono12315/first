import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(App),
  data(){
    return {
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
    // 商品增加
    handClickAdd(index){
        this.list[index].num++
    },
    handClickReduce(index){
        if(this.list[index].num === 1) {
            return
        }
        this.list[index].num--
        
    },
    // 删除商品
    handClickDel(index) {
        if(confirm("确认删除")){
            this.list.splice(index, 1)
        }
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
}).$mount('#app')
