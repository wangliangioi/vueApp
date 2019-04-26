<template>
  <div class="homepage">
    <h1>{{ msg }}</h1>
    <div>{{number}}</div>
    <el-button type="success" @click="add">加一</el-button>
    <!-- <div @click="add">addNumber</div> -->
    <router-link to="/anli">to案例</router-link>
    <!-- <ul>
      <li v-for="(item,index) in items" :key="index" @click="deleteCart">
        <span>商品名{{item.productName}}</span><span>价格{{item.productPrice}}</span><span>数量{{item.productQuentity}}</span><button @click="deleteItem">删除</button>
      </li>
    </ul> -->
    <ul>
      <li is="cart-item" v-for="(item,index) in items" :key="index" :data="item" :index="index" @delete="deleteCart"></li>
      <!-- <cart-item v-for="(item,index) in items" :key="index" :data="item" :index="index" @delete="deleteCart"></cart-item> -->
    </ul>
    <hello-world inline-template>
      <div>hahahhah</div>
    </hello-world>
  </div>
</template>

<script>
// var CartItem = {
//   props:['data','index'],
//   template:'<li>\
//   <span>index = {{index}}</span>\
//   <span>商品名{{data.productName}}</span>\
//   <span>价格{{data.productPrice}}</span>\
//   <span>数量{{data.productQuentity}}</span>\
//   <button @click="deleteItem">删除</button>\
//   </li>',
//   methods:{
//     deleteItem:function (){
//       console.log('deleteItem');
//       this.$emit('delete',this.index)
//     }
//   }
// }
import Vue from 'vue'

// Vue.component('cart-item',{
//     props:['data','index'],
//     template:'<li>\
//     <span>index = {{index}}</span>\
//     <span>商品名{{data.productName}}</span>\
//     <span>价格{{data.productPrice}}</span>\
//     <span>数量{{data.productQuentity}}</span>\
//     <button @click="deleteItem">删除</button>\
//     </li>',
//     methods:{
//       deleteItem:function (){
//         console.log('deleteItem');
//         this.$emit('delete',this.index)
//       }
//     }
//   }
// )
// import { mapState, mapMutations } from 'vuex'
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'this is homepage',
      items: [],
      number: 1
    }
  },
  filters:{

  },
  components:{
    // 'cart-item': CartItem
    HelloWorld
  },
  mounted: function () {
    this.add();
    this.find();
  },
  computed: {
    // ...mapState(['url']) // 将变量引入
  },
  methods: {
    // ...mapMutations(['get','post','delete','put']), //引入方法

    add: function () {
      this.number++;
    },
    find: function () {
      var _this = this;
      _this.http.get("static/cartlist.json").then(function (res) {
        _this.items = res.data.result.list;
        console.log(res.data);
      },(res) => {
        console.log('请求失败');
      })
    },
    deleteCart: function (index){
      console.log('index',index);
      this.items.splice(index,1);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}
</style>
