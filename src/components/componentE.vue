<template>
    <div>
      这是组件E
      <ul>
        <!--<li is="cart-item" v-for="(item,index) in items" :key="index" :data="item" :index="index" @delete="deleteCart"></li>-->
         <cart-item
           v-for="(item,index) in items"
           :key="index"
           :data="item"
           :index="index"
           @delete="deleteCart">
         </cart-item>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ComponentE",
        data() {
            return {
              items: [
                {
                  "productId": "001",
                  "productName": "苹果",
                  "productPrice": 19,
                  "productQuentity": 1,
                  "parts": [
                    {
                      "partsId": "1001",
                      "partsName": "小刀"
                    }
                  ]
                },
                {
                  "productId": "002",
                  "productName": "脉动",
                  "productPrice": 5,
                  "productQuentity": 5,
                  "parts": [
                    {
                      "partsId": "2001",
                      "partsName": "吸管"
                    }
                  ]
                }
              ]
            }
        },
        mounted() {
        },
        computed: {},
        methods: {
          deleteCart: function (index){
            console.log('index',index);
            this.items.splice(index,1);
          }
        },
    }
</script>

<style scoped lang="scss">

</style>
