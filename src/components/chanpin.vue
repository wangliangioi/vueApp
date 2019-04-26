<template>
  <div class="chanpin">
    <h1>{{ msg }}</h1>
    <div>{{foo}}</div>
    <ul>
      <li v-for="(folder,index) in folders" :key="index">
        <tree-folder :folder="folder"></tree-folder>
      </li>
    </ul>
  </div>
</template>

<script>
  import TreeFolder from '@/components/TreeFolder'
export default {
  name: 'chanpin',
  data () {
    return {
      msg: 'this is chanpin.vue',
      foo: this.$root.foo,
      folders: [
        {
          name: 'folder1',
          children: [{
            name: 'folder1 - folder1',
            children: [{
              name: 'folder1 - folder1 - folder1'
            }]
          }, {
            name: 'folder1 - folder2',
            children: [{
              name: 'folder1 - folder2 - folder1'
            }, {
              name: 'folder1 - folder2 - folder2'
            }]
          }]
        },
        {
          name: 'folder 2',
          children: [{
            name: 'folder2 - folder1',
            children: [{
              name: 'folder2 - folder1 - folder1'
            }]
          }, {
            name: 'folder2 - folder2',
            children: [{
              name: 'folder2-content1'
            }]
          }]
        },
        {
          name: 'folder 3',
          children: [{
            name: 'folder3 - folder1',
            children: [{
              name: 'folder3 - folder1 - folder1'
            }]
          }, {
            name: 'folder3 - folder2',
            children: [{
              name: 'folder3-content1'
            }]
          }]
        }
      ]
    }
  },
  components:{
    TreeFolder
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
</style>
