<template>
  <div class="anli">
    <div>
      <input v-model="inputValue">
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
      <!-- <li v-for="(item,index) in list" :key="index">{{item}}</li> -->
      <todo-item v-for="(item,index) in list" :key="index" :content="item" :index="index" @delete="handleDelete"></todo-item>
      <!-- <HomePage></HomePage> -->
      <!-- <ChanPin></ChanPin> -->
      <base-button-primary>primary</base-button-primary>
      <base-button :type="BT.w">警告</base-button>
      <div>{{foo}}</div>

      <div>
        <base-button :type="BT.p" @click="show = !show">taggle</base-button>
        <!--<button @click="show = !show">taggle</button>-->
        <transition name="fade">
          <div v-if="show">hello1</div>
        </transition>
        <transition name="el-zoom-in-center">
          <div v-if="show">hello2</div>
        </transition>
        <transition name="slide-fade">
          <div v-if="show">hello3</div>
        </transition>
        <transition name="bounce">
          <div v-if="show">hello1</div>
        </transition>
      </div>
    </ul>
  </div>
</template>

<script>
  var TodoItem = {
    props: ['content','index'],
    template: '<li @click="handleClick">{{content}}{{index}}</li>',
    methods:{
      handleClick: function () {
        this.$emit('delete',this.index);
      }
    }
  }
  import HomePage from '@/page/HomePage'
  import ChanPin from './chanpin'
  import store from '@/store/store'

export default {
  name: 'anli',
  components:{
    HomePage,
    ChanPin,
    TodoItem
  },
  store,
  data () {
    return {
      inputValue: 'hello',
      list: [],
      BT: store.state.BT,
      foo: this.$root.foo,
      show: true
    }
  },
  mounted () {
    this.addFoo()
    // this.$root.foo ++
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue);
      this.inputValue = '';
    },
    handleDelete (index) {
      this.list.splice(index,1);
    },
    addFoo () {
      this.foo = this.$root.foo++
    }
    // handleSubmit: () => {
    //   this.list.push(this.inputValue);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
