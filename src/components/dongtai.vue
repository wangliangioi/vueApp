<template>
  <div class="dongtai">
    <!-- <h1>{{ msg }}</h1> -->

    <div>
      <button @click="change('A')">切换到A</button>
      <button @click="change('B')">切换到B</button>
      <button @click="change('C')">切换到C</button>
      <button @click="change('D')">切换到D</button>
      <button @click="change('E')">切换到E</button>
    </div>
    <keep-alive>
      <deniro-component :is="componentView">
        <template v-slot:header>
          <h1>{{msg}}</h1>
        </template>

        <template v-slot:default="props">
          {{props.item}} - hello
        </template>

        <template v-slot:footer>
          <p>这是 footer</p>
        </template>
      </deniro-component>
    </keep-alive>

    <!--<component-a v-slot="{item}">-->
      <!--{{item}}-->
    <!--</component-a>-->
    <!--<component-c>-->
      <!--<template v-slot:header>-->
        <!--{{msg}}-->
      <!--</template>-->
      <!--<template v-slot:default="props">-->
        <!--<li>{{props.user.firstName}} - hello</li>-->
      <!--</template>-->
      <!--<template v-slot:footer="{other}">-->
        <!--<li>{{other}} - hello</li>-->
      <!--</template>-->
    <!--</component-c>-->
  </div>
</template>

<script>
import DeniroComponent from '@/components/deniroComponent'
import ComponentA from '@/components/componentA'
import ComponentB from '@/components/componentB'
import ComponentC from '@/components/componentC'
import ComponentD from '@/components/componentD'
import ComponentE from '@/components/componentE'
export default {
  name: 'dongtai',
  components:{
    DeniroComponent,
    ComponentA,
    ComponentC,
    ComponentB,
    ComponentD,
    ComponentE,
  },
  data () {
    return {
      msg: 'this is dongtai.vue',
      componentView: 'ComponentA'
    }
  },
  methods: {
    change(value){
      this.componentView = 'Component' + value
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div{
  width: 100%;
  height: 50px;
}
</style>
