<template>
  <div class="totolist">
    <div>
      <input v-model="inputValue">
      <el-button type="warning" @click="handleSubmit">加一秒</el-button>
    </div>
    <el-row class="list">
      <!-- <li v-for="(item,index) in list" :key="index">{{item}}</li> -->
      <todo-item v-for="(item,index) in list" :key="index" :content="item" :index="index" @delateItem="handleDelete"></todo-item>
    </el-row>
    <!-- <HomePage></HomePage> -->
    <!-- <ChanPin></ChanPin> -->
    <router-view></router-view>
  </div>
</template>

<script>
  // var TodoItem = {
  //   props: ['content','index'],
  //   template: '<li @click="handleClick">{{content}}{{index}}</li>',
  //   methods:{
  //     handleClick: function () {
  //       this.$emit('delete',this.index);
  //     }
  //   }
  // }
  import HomePage from './HomePage'
  import ChanPin from '../components/chanpin'
  import TodoItem from '../components/TodoItem'

export default {
  name: 'TodoList',
  components:{
    HomePage,
    ChanPin,
    TodoItem
  },
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue);
      this.inputValue = '';
    },
    handleDelete (index) {
      console.log(this.list);
      this.list.splice(index,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>
.list{
  background: red;
  .listItem{
    color: blue;
    list-style: none;
  }
}
</style>
