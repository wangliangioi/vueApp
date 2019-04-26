<template>
    <div class="main">
      <div class="left">
        <button @click="changeD('A')">切换到A</button>
        <button @click="changeD('B')">切换到B</button>
        <button @click="changeD('C')">切换到C</button>
      </div>
      <div class="right">
        <deniro-component :is="componentView">
        </deniro-component>
      </div>
    </div>
</template>

<script>
  import DeniroComponent from '@/components/deniroComponent'
  import ComponentA from '@/components/componentA'
  import ComponentB from '@/components/componentB'
  import ComponentC from '@/components/componentC'
  import ComponentE from '@/components/componentE'
    export default {
      name: "ComponentD",
      components:{
        DeniroComponent,
        ComponentA,
        ComponentC,
        ComponentB,
        ComponentE
      },
        data() {
            return {
              componentView: 'ComponentE'
            }
        },
        computed: {

        },
        mounted() {

        },
        methods: {
          changeD(value){
            this.componentView = 'Component' + value
          }
        },
    }
</script>

<style scoped lang="scss">
  .main{
    width: 100%;
    height: 500px;
    display: flex;
    .left{
      height: 500px;
      background: #333;
      flex: 1;
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      button{
        flex: 1;
      }
    }
    .right{
      height: 500px;
      background: #ccc;
      flex: 2;
    }
  }
</style>
