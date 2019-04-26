<template>
  <div class="guanyu">
    <h1>{{ msg }}</h1>
    <el-input v-model="liInfo.title"><template slot="prepend">Http://</template></el-input>
    <el-input v-model="liInfo.content"><el-button slot="append" @click="add">添加</el-button></el-input>
    <ul>
      <todo-li v-for="(item,index) in liData" :key="index" :item="item" :index="index" @deleteLi="deleteItem"></todo-li>
      <!-- <li v-for="(item,index) in liData" :key="index">{{item.title}}-{{item.content}}</li> -->
    </ul>
    <component-a>
    </component-a>
    <component-b>
    </component-b>
    <div>
      <el-button
        type="primary"
        @click="addCount">
        count++
      </el-button>
    </div>
  </div>
</template>

<script>
  import store from '@/store/store'
import TodoLi from '@/components/TodoLi'
const ComponentA = r => require.ensure([],() => r(require('@/components/componentA.vue')))
const ComponentB = r => require.ensure([], () => r(require('@/components/componentB')))
export default {
  name: 'guanyu',
  data () {
    return {
      msg: 'this is guanyu.vue',
      liData: [{
        title: '12345',
        content: '3456789'
      },{
        title: '45678',
        content: '3456789'
      },{
        title: '67890',
        content: '3456789'
      },{
        title: '09876',
        content: '3456789'
      }],
      liInfo:{
        title: '',
        content: ''
      }
    }
  },
  components:{
    TodoLi,
    ComponentA,
    ComponentB
  },
  methods: {
    add () {
      // console.log(this.liInfo.title + ":"+ this.liInfo.content)
      this.liData.push(this.liInfo)
      this.liInfo = {title: '',content: ''}
    },
    deleteItem (index) {
      this.liData.splice(index,1)
    },
    addCount () {
      store.commit('addCount')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
el-input{

}
</style>
